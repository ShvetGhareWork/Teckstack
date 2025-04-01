import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
        {
          headers: { Authorization: `Bearer ${token}` }, // Send the token in the Authorization header
        }
      );
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setError(response.data.message); // Set error message if the response is unsuccessful
        navigate("/login"); // Redirect to login if the token is invalid
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data. Please try again."); // Set a generic error message
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    alert("You have been logged out.");
    navigate("/login"); // Redirect to the login screen
  };

  useEffect(() => {
    fetchUser(); // Fetch user data when the component mounts
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
        <div className="max-w-6xl mx-auto p-6">
          {/* User Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Profile Picture */}
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
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.professionalTitle}</p>
                <p className="text-gray-600">
                  {user.location || "Location not set"}
                </p>
                <div className="flex space-x-2 mt-2">
                  {user.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-gray-600 hover:text-black"
                  >
                    {user.email}
                  </a>
                  <span className="text-gray-600">
                    {user.phone || "No phone"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p className="text-gray-700">{user.bio || "No bio available."}</p>
            </div>

            {/* Edit Profile Button */}
            <div className="mt-6 space-x-4 text-end">
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

          {/* Blog Posts Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">My Blog Posts</h2>
            <div className="space-y-6">
              {user.blogs?.length > 0 ? (
                user.blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-100 rounded-lg p-4"
                  >
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      {/* Blog Image */}
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-500">No Image</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{blog.title}</h3>
                      <p className="text-gray-600">{blog.summary}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        {new Date(blog.date).toLocaleDateString()}
                      </p>
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mt-2 block"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No blogs available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Logout Button */}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
