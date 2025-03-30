import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const CreateTeamPage = () => {
  const [teamName, setTeamName] = useState("");
  const [teamPlan, setTeamPlan] = useState("");
  const [developmentTypes, setDevelopmentTypes] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [roleSearch, setRoleSearch] = useState("");

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "dev", label: "Developer" },
    { value: "finance", label: "Finance" },
    { value: "designer", label: "Designer" },
    { value: "qa", label: "Quality Assurance" },
    { value: "pm", label: "Project Manager" },
    { value: "marketing", label: "Marketing Specialist" },
    { value: "sales", label: "Sales Representative" },
    { value: "support", label: "Customer Support" },
    { value: "data", label: "Data Analyst" },
    { value: "seo", label: "SEO Specialist" },
    { value: "content", label: "Content Writer" },
    { value: "security", label: "Security Specialist" },
    { value: "ops", label: "Operations Manager" },
  ];

  const developmentOptions = [
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
  ];

  const handleAddMember = () => {
    if (!newMemberEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!newMemberRole) {
      alert("Please select a role.");
      return;
    }

    if (teamMembers.some((member) => member.email === newMemberEmail)) {
      alert("This email is already added.");
      return;
    }

    setTeamMembers([
      ...teamMembers,
      { email: newMemberEmail, role: newMemberRole },
    ]);
    setNewMemberEmail("");
    setNewMemberRole("");
  };

  const handleRemoveMember = (email) => {
    setTeamMembers(teamMembers.filter((member) => member.email !== email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (teamMembers.length < 4) {
      alert("You must add at least 4 team members.");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    const teamData = {
      teamName,
      teamPlan,
      developmentTypes,
      teamMembers,
    };

    console.log("Team Created:", teamData);
    alert("Team created successfully!");

    // Navigate back to the /teams page after successful submission
    navigate("/teams");
  };

  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(roleSearch.toLowerCase())
  );

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="border rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Create a Team</h1>
          <p className="text-gray-600 mb-6">
            Teams allow you to collaborate with members on projects and grant
            you access to additional resources.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Name */}
            <div>
              <label
                htmlFor="teamName"
                className="block text-sm font-medium text-gray-700"
              >
                Team Name
              </label>
              <input
                id="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Acme Inc."
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                This is your team's display name.
              </p>
            </div>

            {/* Team Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Team Plan
              </label>
              <div className="mt-2 space-y-2">
                {["hobby", "pro", "enterprise"].map((plan) => (
                  <div key={plan} className="flex items-center">
                    <input
                      type="radio"
                      id={plan}
                      name="teamPlan"
                      value={plan}
                      checked={teamPlan === plan}
                      onChange={(e) => setTeamPlan(e.target.value)}
                      className="h-4 w-4 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      htmlFor={plan}
                      className="ml-3 text-sm text-gray-700"
                    >
                      {plan === "hobby" && "Hobby (Free)"}
                      {plan === "pro" && "Pro ($20/month)"}
                      {plan === "enterprise" && "Enterprise (Contact Sales)"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Types */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Development Types
              </label>
              <div className="mt-2 space-y-2">
                {developmentOptions.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      value={option.id}
                      checked={developmentTypes.includes(option.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDevelopmentTypes([...developmentTypes, option.id]);
                        } else {
                          setDevelopmentTypes(
                            developmentTypes.filter(
                              (type) => type !== option.id
                            )
                          );
                        }
                      }}
                      className="h-4 w-4 text-gray-600 focus:ring-gray-500"
                    />
                    <label
                      htmlFor={option.id}
                      className="ml-3 text-sm text-gray-700"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Team Members
              </label>
              <div className="mt-2 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="colleague@example.com"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  className="flex-1 pl-2 p-3 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                />
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search roles..."
                    value={roleSearch}
                    onChange={(e) => setRoleSearch(e.target.value)}
                    className="w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                  {roleSearch && (
                    <ul className="absolute z-10 bg-white border rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto w-full">
                      {filteredRoles.map((role) => (
                        <li
                          key={role.value}
                          onClick={() => {
                            setNewMemberRole(role.value);
                            setRoleSearch(role.label);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {role.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
                >
                  Add
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                {teamMembers.map((member, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded-md border p-3"
                  >
                    <div>
                      <p className="text-sm font-medium">{member.email}</p>
                      <p className="text-xs text-gray-500">
                        {
                          roles.find((role) => role.value === member.role)
                            ?.label
                        }
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(member.email)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                You must add at least 4 team members.
              </p>
            </div>

            {/* Accept Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-3 text-sm text-gray-700"
              >
                I accept the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Create Team
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateTeamPage;
