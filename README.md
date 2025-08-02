# Blog Application

A full-stack blog application built with React (Vite) for the frontend and Node.js/Express for the backend, using MongoDB as the database. The application features user authentication via Clerk, blog post creation and management, and a responsive UI built with Tailwind CSS.

## Features

- User authentication with Clerk
- Create, read, update, and delete blog posts
- Featured posts section
- Category-based post browsing
- Responsive design for all device sizes
- Rich text editing for post content
- MongoDB database integration

## Technologies Used

### Backend (Node.js/Express)

- **Express.js**: Web framework for Node.js
- **MongoDB/Mongoose**: Database and ODM
- **Clerk**: Authentication service
- **Dotenv**: Environment variable management
- **SVIX**: Webhook handling

### Frontend (React/Vite)

- **React 19**: UI library
- **Vite**: Build tool and development server
- **React Router v7**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Clerk React**: Authentication components
- **React Quill**: Rich text editor
- **ImageKitio**: Image optimization service

## Backend API Endpoints

The backend provides RESTful APIs for managing blog content:

### User Routes (`/users`)

- User management via Clerk authentication

### Post Routes (`/posts`)

- `GET /posts` - Get all posts
- `GET /posts/:slug` - Get a specific post by slug
- `POST /posts` - Create a new post
- `DELETE /posts/:id` - Delete a post

### Comment Routes (`/comments`)

- Comment management for posts

### Webhook Routes (`/webhooks`)

- Webhook handling for external services

## Data Models

### User Model

```javascript
{
  cleerkUserId: String,  // Clerk user ID
  username: String,      // User's username
  email: String,         // User's email
  img: String,           // User's profile image
  savedPosts: [String],  // Array of saved post IDs
  timestamps: true       // Created/updated timestamps
}
```

### Post Model

```javascript
{
  user: ObjectId,        // Reference to User
  img: String,           // Post cover image
  title: String,         // Post title
  slug: String,          // URL-friendly identifier
  desc: String,          // Post description
  content: String,       // Post content (HTML)
  isFeatured: Boolean,   // Featured post flag
  visit: Number,         // View count
  timestamps: true       // Created/updated timestamps
}
```

## Setup and Installation

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
MONGO_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. Start the server:

```bash
node index.js
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
```

4. Start the development server:

```bash
npm run dev
```

## Development Scripts

### Backend

- `node index.js` - Start the Express server

### Frontend

- `npm run dev` - Start the Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Authentication

The application uses Clerk for authentication:

- User registration and login
- Protected routes for post creation
- User context available throughout the application

## Styling

The application uses Tailwind CSS for styling with a mobile-first approach:

- Responsive design for all screen sizes
- Consistent color scheme and typography
- Custom animations and interactive elements

## Deployment

The application can be deployed using any Node.js hosting service for the backend and static site hosting for the frontend (Vercel, Netlify, etc.).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request
