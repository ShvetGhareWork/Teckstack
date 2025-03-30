import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetailsForm = () => {
  const [activeTab, setActiveTab] = useState("basic"); // Track active tab
  const [formData, setFormData] = useState({
    fullName: "",
    profilePicture: null,
    tagline: "",
    location: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    jobTitle: "",
    company: "",
    department: "",
    experience: "",
    availability: "",
    relocation: false,
    salary: "",
    primarySkills: [],
    programmingLanguages: [],
    technologies: [],
    tools: [],
    certifications: "",
    softSkills: [],
    techStack: "",
    experienceDetails: [],
    projects: [],
    education: [],
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle array input changes
  const handleArrayChange = (e, fieldName) => {
    const values = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({
      ...prev,
      [fieldName]: values,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: e.target.files[0],
    }));
  };

  // Submit form data
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "profilePicture" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        }
      });

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/details`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Details saved successfully!");
        navigate("/profile"); // Redirect to profile page
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting details:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Basic Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tagline/Bio
                </label>
                <textarea
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  placeholder="Enter a short bio"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
            </form>
          </div>
        );
      case "skills":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Skills and Expertise</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Primary Skills (comma-separated)
                </label>
                <input
                  type="text"
                  name="primarySkills"
                  value={formData.primarySkills.join(", ")}
                  onChange={(e) => handleArrayChange(e, "primarySkills")}
                  placeholder="Enter your primary skills"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Programming Languages (comma-separated)
                </label>
                <input
                  type="text"
                  name="programmingLanguages"
                  value={formData.programmingLanguages.join(", ")}
                  onChange={(e) => handleArrayChange(e, "programmingLanguages")}
                  placeholder="Enter programming languages"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Technologies/Frameworks (comma-separated)
                </label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies.join(", ")}
                  onChange={(e) => handleArrayChange(e, "technologies")}
                  placeholder="Enter technologies or frameworks"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tools and Software (comma-separated)
                </label>
                <input
                  type="text"
                  name="tools"
                  value={formData.tools.join(", ")}
                  onChange={(e) => handleArrayChange(e, "tools")}
                  placeholder="Enter tools and software"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Soft Skills (comma-separated)
                </label>
                <input
                  type="text"
                  name="softSkills"
                  value={formData.softSkills.join(", ")}
                  onChange={(e) => handleArrayChange(e, "softSkills")}
                  placeholder="Enter soft skills"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Complete Your Profile
        </h2>
        {/* Tabs */}
        <div className="flex border-b mb-4 overflow-x-auto">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "basic" ? "border-b-2 border-black font-bold" : ""
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Information
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "skills" ? "border-b-2 border-black font-bold" : ""
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 mt-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserDetailsForm;
