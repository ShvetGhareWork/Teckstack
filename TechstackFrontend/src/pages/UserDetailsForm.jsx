import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    personal: {
      profilePicture: "",
      fullName: "",
      professionalTitle: "",
      email: "",
      phone: "",
      bio: "",
    },
    education: [
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        liveUrl: "",
      },
    ],
    blogs: [],
    social: {
      github: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      youtube: "",
      facebook: "",
      codepen: "",
      dribbble: "",
      website: "",
    },
  });

  const navigate = useNavigate();

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedArray = [...formData[section]];
    updatedArray[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      [section]: updatedArray,
    }));
  };

  const addArrayItem = (section, newItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const removeArrayItem = (section, index) => {
    const updatedArray = formData[section].filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      [section]: updatedArray,
    }));
  };

  const handleSubmit = () => {
    // Validation: Ensure at least one project and one education entry
    if (formData.education.length === 0) {
      alert("At least one education entry is required.");
      setActiveTab("education");
      return;
    }
    if (formData.projects.length === 0) {
      alert("At least one project entry is required.");
      setActiveTab("projects");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Profile created successfully!");
    navigate("/profile"); // Redirect to the Profile page
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Personal</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Profile Picture URL"
                value={formData.personal.profilePicture}
                onChange={(e) =>
                  handleChange("personal", "profilePicture", e.target.value)
                }
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.personal.fullName}
                onChange={(e) =>
                  handleChange("personal", "fullName", e.target.value)
                }
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                placeholder="Professional Title"
                value={formData.personal.professionalTitle}
                onChange={(e) =>
                  handleChange("personal", "professionalTitle", e.target.value)
                }
                className="w-full border rounded p-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.personal.email}
                onChange={(e) =>
                  handleChange("personal", "email", e.target.value)
                }
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={formData.personal.phone}
                onChange={(e) =>
                  handleChange("personal", "phone", e.target.value)
                }
                className="w-full border rounded p-2"
              />
              <textarea
                placeholder="Bio"
                value={formData.personal.bio}
                onChange={(e) =>
                  handleChange("personal", "bio", e.target.value)
                }
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        );
      case "education":
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) =>
                    handleArrayChange(
                      "education",
                      index,
                      "institution",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleArrayChange(
                      "education",
                      index,
                      "degree",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.fieldOfStudy}
                  onChange={(e) =>
                    handleArrayChange(
                      "education",
                      index,
                      "fieldOfStudy",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Start Year"
                  value={edu.startYear}
                  onChange={(e) =>
                    handleArrayChange(
                      "education",
                      index,
                      "startYear",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="End Year"
                  value={edu.endYear}
                  onChange={(e) =>
                    handleArrayChange(
                      "education",
                      index,
                      "endYear",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                {formData.education.length > 1 && (
                  <button
                    onClick={() => removeArrayItem("education", index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() =>
                addArrayItem("education", {
                  institution: "",
                  degree: "",
                  fieldOfStudy: "",
                  startYear: "",
                  endYear: "",
                })
              }
              className="text-blue-500"
            >
              Add Another Education
            </button>
          </div>
        );
      case "projects":
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "title",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <textarea
                  placeholder="Description"
                  value={project.description}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "description",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Technologies Used"
                  value={project.technologies}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "technologies",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Live Project URL"
                  value={project.liveUrl}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "liveUrl",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2"
                />
                {formData.projects.length > 1 && (
                  <button
                    onClick={() => removeArrayItem("projects", index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() =>
                addArrayItem("projects", {
                  title: "",
                  description: "",
                  technologies: "",
                  liveUrl: "",
                })
              }
              className="text-blue-500"
            >
              Add Another Project
            </button>
          </div>
        );
      case "blogs":
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Blogs</h3>
            {formData.blogs.map((blog, index) => (
              <div key={index} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={blog.title}
                  onChange={(e) =>
                    handleArrayChange("blogs", index, "title", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
                <textarea
                  placeholder="Summary"
                  value={blog.summary}
                  onChange={(e) =>
                    handleArrayChange("blogs", index, "summary", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
                <textarea
                  placeholder="Content"
                  value={blog.content}
                  onChange={(e) =>
                    handleArrayChange("blogs", index, "content", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
                <button
                  onClick={() => removeArrayItem("blogs", index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                addArrayItem("blogs", {
                  title: "",
                  summary: "",
                  content: "",
                })
              }
              className="text-blue-500"
            >
              Add Another Blog
            </button>
          </div>
        );
      case "social":
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media Links</h3>
            <div className="space-y-4">
              {Object.keys(formData.social).map((key) => (
                <input
                  key={key}
                  type="text"
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={formData.social[key]}
                  onChange={(e) => handleChange("social", key, e.target.value)}
                  className="w-full border rounded p-2"
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Create Your Profile
        </h2>
        <div className="flex justify-between mb-4">
          {["personal", "education", "projects", "blogs", "social"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-black font-bold"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>
        {renderTabContent()}
        <div className="flex justify-between mt-6">
          <button
            onClick={() =>
              setActiveTab((prev) =>
                prev === "personal"
                  ? "personal"
                  : ["personal", "education", "projects", "blogs", "social"][
                      [
                        "personal",
                        "education",
                        "projects",
                        "blogs",
                        "social",
                      ].indexOf(prev) - 1
                    ]
              )
            }
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={() =>
              activeTab === "social"
                ? handleSubmit()
                : setActiveTab(
                    (prev) =>
                      ["personal", "education", "projects", "blogs", "social"][
                        [
                          "personal",
                          "education",
                          "projects",
                          "blogs",
                          "social",
                        ].indexOf(prev) + 1
                      ]
                  )
            }
            className="bg-black text-white px-4 py-2 rounded"
          >
            {activeTab === "social" ? "Complete Registration" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
