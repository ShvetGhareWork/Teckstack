import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamDetails = () => {
  const navigate = useNavigate();

  // Initial teams
  const initialTeams = [
    {
      id: 1,
      name: "Development Team",
      description: "Specialized in web and mobile application development",
      members: 8,
      expertise: ["React", "Node.js", "Flutter", "AWS"],
      img: "/image1.png",
    },
    {
      id: 2,
      name: "Design Team",
      description: "Expert UI/UX designers creating beautiful interfaces",
      members: 5,
      expertise: ["UI Design", "UX Research", "Prototyping", "Branding"],
      img: "/image1.png",
    },
    {
      id: 3,
      name: "Marketing Team",
      description: "Digital marketing specialists driving growth",
      members: 6,
      expertise: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      img: "/image1.png",
    },
    {
      id: 4,
      name: "Quality Assurance Team",
      description: "Ensuring top-notch quality in all deliverables",
      members: 5,
      expertise: [
        "Manual Testing",
        "Automated Testing",
        "Bug Tracking",
        "JIRA",
      ],
      img: "/image1.png",
    },
  ];

  // State to manage teams (including newly created ones)
  const [teams, setTeams] = useState(initialTeams);

  return (
    <div>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={team.img || "/placeholder.svg"}
                alt={team.name}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold">{team.name}</h2>
                <p className="text-sm text-gray-600">{team.description}</p>
                <p className="mt-2 text-sm font-medium">
                  Team Size: {team.members} members
                </p>
                <div className="mt-2">
                  <p className="text-sm font-medium">Expertise:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {team.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 border rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
                  📩 Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md border rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold">Create a New Team</h2>
            <p className="text-sm text-gray-600">
              Need a custom team for your project? Let us know your
              requirements.
            </p>
            <button
              onClick={() => navigate("/create-team")}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 border rounded-md bg-black text-white hover:bg-gray-900"
            >
              ➕ Create New Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
