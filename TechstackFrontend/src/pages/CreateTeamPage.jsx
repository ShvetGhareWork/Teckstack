import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select"; // Import react-select

const CreateTeamPage = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [skills, setSkills] = useState([]); // State for skills
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "dev", label: "Developer" },
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
    { value: "hr", label: "HR Manager" },
    { value: "legal", label: "Legal Advisor" },
    { value: "product", label: "Product Manager" },
    { value: "research", label: "Research Analyst" },
    { value: "trainer", label: "Corporate Trainer" },
    { value: "consultant", label: "Business Consultant" },
  ];

  const skillsOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "Django", label: "Django" },
    { value: "Java", label: "Java" },
    { value: "Spring Boot", label: "Spring Boot" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Ruby", label: "Ruby" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "PHP", label: "PHP" },
    { value: "Laravel", label: "Laravel" },
    { value: "SQL", label: "SQL" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "SASS", label: "SASS" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "REST API", label: "REST API" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "MySQL", label: "MySQL" },
    { value: "Firebase", label: "Firebase" },
    { value: "Redux", label: "Redux" },
    { value: "Next.js", label: "Next.js" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Flutter", label: "Flutter" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Go", label: "Go" },
    { value: "Rust", label: "Rust" },
    { value: "Perl", label: "Perl" },
    { value: "Scala", label: "Scala" },
    { value: "Haskell", label: "Haskell" },
    { value: "MATLAB", label: "MATLAB" },
    { value: "R", label: "R" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "PyTorch", label: "PyTorch" },
    { value: "Hadoop", label: "Hadoop" },
    { value: "Spark", label: "Spark" },
    { value: "Elasticsearch", label: "Elasticsearch" },
  ];

  const handleSubmit = async (e) => {
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
      teamLeader,
      teamMembers,
      skills: skills.map((skill) => skill.label), // Extract skill labels
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/teams/create`,
        teamData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        alert("Team created successfully!");
        navigate("/teams"); // Redirect to the Teams page
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error creating team:", error);
      alert("An error occurred while creating the team.");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="border rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Create a Team</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Acme Inc."
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Team Leader
              </label>
              <input
                type="text"
                value={teamLeader}
                onChange={(e) => setTeamLeader(e.target.value)}
                placeholder="Leader Name"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <Select
                options={skillsOptions}
                isMulti
                value={skills}
                onChange={(selectedOptions) => setSkills(selectedOptions)}
                placeholder="Select Skills"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Add Team Members
              </label>
              <input
                type="text"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                placeholder="Member Name"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              />
              <input
                type="email"
                value={newMemberEmail}
                onChange={(e) => setNewMemberEmail(e.target.value)}
                placeholder="Member Email"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              />
              <Select
                options={roles}
                value={newMemberRole}
                onChange={(selectedOption) => setNewMemberRole(selectedOption)}
                placeholder="Select Role"
                className="mt-1"
              />
              <button
                type="button"
                onClick={() => {
                  if (!newMemberName || !newMemberEmail || !newMemberRole) {
                    alert("Please fill out all fields.");
                    return;
                  }
                  setTeamMembers([
                    ...teamMembers,
                    {
                      name: newMemberName,
                      email: newMemberEmail,
                      role: newMemberRole.label,
                    },
                  ]);
                  setNewMemberName("");
                  setNewMemberEmail("");
                  setNewMemberRole(null);
                }}
                className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
              >
                Add Member
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
                >
                  {member.name} - {member.email} ({member.role})
                  <button
                    onClick={() =>
                      setTeamMembers(
                        teamMembers.filter((m) => m.email !== member.email)
                      )
                    }
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500"
              />
              <label className="ml-3 text-sm">
                I accept the Terms and Conditions.
              </label>
            </div>
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
