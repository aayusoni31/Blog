// import User from "../models/user.model.js";
// import Post from "../models/post.model.js";
// import Comment from "../models/comment.model.js";
// import { Webhook } from "svix";

// export const clerkWebHook = async (req, res) => {
//   const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

//   if (!WEBHOOK_SECRET) {
//     throw new Error("Webhook secret needed!");
//   }

//   const payload = req.body;
//   const headers = req.headers;

//   const wh = new Webhook(WEBHOOK_SECRET);
//   let evt;
//   try {
//     evt = wh.verify(payload, headers);
//   } catch (err) {
//     res.status(400).json({
//       message: "Webhook verification failed!",
//     });
//   }

//   // console.log(evt.data);

//   if (evt.type === "user.created") {
//     const newUser = new User({
//       clerkUserId: evt.data.id,
//       username: evt.data.username || evt.data.email_addresses[0].email_address,
//       email: evt.data.email_addresses[0].email_address,
//       img: evt.data.profile_img_url,
//     });

//     await newUser.save();
//   }

//   if (evt.type === "user.deleted") {
//     const deletedUser = await User.findOneAndDelete({
//       clerkUserId: evt.data.id,
//     });

//     await Post.deleteMany({ user: deletedUser._id });
//     await Comment.deleteMany({ user: deletedUser._id });
//   }

//   return res.status(200).json({
//     message: "Webhook received",
//   });
// };

import { Webhook } from "svix";
import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Missing Clerk webhook secret.");
    return res.status(500).json({ message: "Webhook secret needed!" });
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).json({ message: "Webhook verification failed!" });
  }

  console.log("✅ Clerk webhook event:", evt.type);

  try {
    if (evt.type === "user.created") {
      const user = evt.data;
      const newUser = new User({
        clerkUserId: user.id,
        username: user.username || user.email_addresses[0].email_address,
        email: user.email_addresses[0].email_address,
        img: user.profile_image_url,
      });
      await newUser.save();
      console.log("✅ New user saved:", newUser.email);
    }

    if (evt.type === "user.deleted") {
      const userId = evt.data.id;
      const deletedUser = await User.findOneAndDelete({ clerkUserId: userId });
      if (deletedUser) {
        await Post.deleteMany({ user: deletedUser._id });
        await Comment.deleteMany({ user: deletedUser._id });
        console.log("🗑️ Deleted user and related data");
      }
    }

    return res.status(200).json({ message: "Webhook received" });
  } catch (error) {
    console.error("Webhook processing error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
