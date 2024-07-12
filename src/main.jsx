import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateNews from "./pages/CreateNews.jsx";
import Blog from "./components/Blog.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import BlogInfo from "./components/BlogInfo.jsx";
import Login from "./components/Login.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./app/store.js";
import Profile from "./components/Profile.jsx";
import ProfileContainer from "./components/ProfileContainer.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ProfileEdit from "./components/ProfileEdit.jsx";
// import '@shadcn/ui/dist/styles.css'; // Import Shadcn styles


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile/:id",
    element: (
      <ProtectedRoute>
        <ProfileContainer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-post",
    element: (
      <ProtectedRoute>
        <CreatePost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile-edit",
    element: (
      <ProtectedRoute>
        <ProfileEdit/>
      </ProtectedRoute>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
