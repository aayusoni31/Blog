import { Link } from "react-router-dom";
import { Image } from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            perspiciatis h.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm ">
            <span>Written by</span>
            <Link>Aayushi Soni</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            delectus omnis soluta doloremque eligendi nemo reprehenderit aperiam
            doloribus voluptate dicta non iusto, debitis distinctio blanditiis
            voluptates rem assumenda repudiandae labore in, velit vel, sunt
            error? Sint doloribus veniam perspiciatis aliquam eum molestias,
            veritatis commodi, ducimus distinctio ea sed quod facere.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="6.jpg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content  */}

      <div className="flex flex-col md:flex-row gap-12">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            dolores esse rem quos, quis vel sed itaque ratione inventore
            quibusdam mollitia eveniet eaque maiores. Ex vero libero
            necessitatibus molestiae, eius unde esse, magnam voluptas facilis
            quasi, accusamus nam beatae modi quod! Totam voluptas distinctio
            perspiciatis quia quasi, illum sint. Fugit sapiente voluptates
            suscipit quibusdam. Ea voluptatem earum nisi distinctio quaerat.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="7.jpg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">Aayushi Soni</Link>
            </div>
            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" w="23" h="23" />
              </Link>
              <Link>
                <Image src="instagram.svg" w="23" h="23" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engine
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
