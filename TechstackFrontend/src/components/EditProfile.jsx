import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    professionalTitle: "",
    location: "",
    bio: "",
    skills: [],
    phone: "",
    profileImage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
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
          setFormData(response.data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/details`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        alert("Profile updated successfully!");
        navigate("/profile");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6 grid lg:grid-cols-2 gap-6">
        <h2 className="text-3xl font-bold text-center lg:col-span-2 mb-6">
          Edit Profile
        </h2>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
          <label className="block text-sm font-medium text-gray-700">
            Professional Title
          </label>
          <input
            type="text"
            name="professionalTitle"
            value={formData.professionalTitle}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Profile Image URL
          </label>
          <input
            type="text"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />

          <label className="block text-sm font-medium text-gray-700">
            Skills (comma-separated)
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(", ")}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                skills: e.target.value.split(",").map((skill) => skill.trim()),
              }))
            }
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 border-2 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 mt-4"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
