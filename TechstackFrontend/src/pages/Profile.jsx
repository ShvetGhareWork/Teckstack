import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const navigate = useNavigate();

  // Fetch user details from the backend
  useEffect(() => {
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
            headers: { Authorization: `Bearer ${token}` }, // Pass token in headers
          }
        );
        if (response.data.success) {
          setUser(response.data.user); // Set user details
        } else {
          navigate("/login"); // Redirect to login if the token is invalid
          console.log("User not found");
        }
      } catch (error) {
        console.error(error);
        navigate("/login"); // Redirect to login on error
      }
    };
    fetchUser();
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    localStorage.removeItem("userId"); // Clear userId from localStorage
    navigate("/login"); // Redirect to login page
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Profile
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-600">Full Name:</p>
            <p className="text-lg font-semibold text-black">{user.fullName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Tagline/Bio:</p>
            <p className="text-lg text-black">{user.tagline || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Location:</p>
            <p className="text-lg text-black">{user.location || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Email:</p>
            <p className="text-lg font-semibold text-black">{user.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Phone:</p>
            <p className="text-lg text-black">{user.phone || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Website:</p>
            <p className="text-lg text-black">
              {user.website ? (
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {user.website}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">GitHub:</p>
            <p className="text-lg text-black">
              {user.github ? (
                <a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {user.github}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">LinkedIn:</p>
            <p className="text-lg text-black">
              {user.linkedin ? (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {user.linkedin}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Twitter:</p>
            <p className="text-lg text-black">
              {user.twitter ? (
                <a
                  href={user.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {user.twitter}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Job Title:</p>
            <p className="text-lg text-black">{user.jobTitle || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Company:</p>
            <p className="text-lg text-black">{user.company || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Department:</p>
            <p className="text-lg text-black">{user.department || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Years of Experience:
            </p>
            <p className="text-lg text-black">{user.experience || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Availability:</p>
            <p className="text-lg text-black">{user.availability || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Open to Relocation:
            </p>
            <p className="text-lg text-black">
              {user.relocation ? "Yes" : "No"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Expected Salary/Rate:
            </p>
            <p className="text-lg text-black">{user.salary || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Primary Skills:</p>
            <p className="text-lg text-black">
              {user.primarySkills?.length > 0
                ? user.primarySkills.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Programming Languages:
            </p>
            <p className="text-lg text-black">
              {user.programmingLanguages?.length > 0
                ? user.programmingLanguages.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Technologies/Frameworks:
            </p>
            <p className="text-lg text-black">
              {user.technologies?.length > 0
                ? user.technologies.join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Tools:</p>
            <p className="text-lg text-black">
              {user.tools?.length > 0 ? user.tools.join(", ") : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Soft Skills:</p>
            <p className="text-lg text-black">
              {user.softSkills?.length > 0 ? user.softSkills.join(", ") : "N/A"}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
