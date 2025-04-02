import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
      } else {
        setError(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data. Please try again.");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/login");
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blogs/list`
        );
        if (response.data.success) {
          setBlogs(response.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.professionalTitle}</p>
                <p className="text-gray-600">
                  {user.location || "Location not set"}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-2">
                  {user.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center md:text-left">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p className="text-gray-700">{user.bio || "No bio available."}</p>
            </div>
            <div className="mt-6 flex justify-center md:justify-end space-x-4">
              <button
                onClick={() => navigate("/edit-profile")}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-xl md:text-2xl font-bold mb-6">My Profile</h1>
            <button
              onClick={() => navigate("/add-blog")}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 mb-4"
            >
              Add Blog
            </button>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mt-6">
              <h2 className="text-lg md:text-xl font-bold mb-4">
                My Blog Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs?.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={blog.image || "https://via.placeholder.com/300"}
                      alt={blog.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold">{blog.title}</h2>
                      <p className="text-gray-600">{blog.summary}</p>
                      <button
                        onClick={() => navigate(`/blogs/${blog._id}`)}
                        className="text-white bg-gray-800 rounded-lg px-3 py-2 mt-4 block"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
