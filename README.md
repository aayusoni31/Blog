# Blog Application

Developed a full-stack blog application with authentication, CRUD operations, and image uploads using Node.js, Express, React, and SQL.
Implemented secure login system, post management, and optimized data handling with deployment on server.


## Features


- Create, read, update, and delete blog posts
- Featured posts section
- Category-based post browsing
- Responsive design for all device sizes
- Rich text editing for post content


## Technologies Used

### Backend (Node.js/Express)

- **Express.js**: Web framework for Node.js
- **Dotenv**: Environment variable management
- **SVIX**: Webhook handling

### Frontend (React/Vite)

- **React 19**: UI library
- **Vite**: Build tool and development server
- **React Router v7**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
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



3. Start the server:

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



3. Start the development server:

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
