import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Teams() {
  const [teams, setTeams] = useState([]); // State to store teams
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    Aos.init({ duration: 700 });

    // Fetch teams from the backend
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/teams/list-team`
        );
        if (response.data.success) {
          setTeams(response.data.teams); // Set the fetched teams
        } else {
          setError("Failed to fetch teams.");
        }
      } catch (err) {
        console.error("Error fetching teams:", err);
        setError("An error occurred while fetching teams.");
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl flex justify-center">
              {"Our Expert Teams".split("").map((char, index) => (
                <span
                  key={index}
                  data-aos="fade-in"
                  data-aos-delay={index * 50}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay={500}
              className="max-w-[1100px] mx-auto text-center text-gray-500 text-muted-foreground md:text-xl mt-4"
            >
              Meet the talented professionals who make our company exceptional.
            </p>
          </div>
        </section>

        {/* Teams Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : teams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teams.map((team) => (
                <div
                  key={team._id}
                  className="border rounded-lg shadow-md p-4 bg-white flex flex-col"
                >
                  {/* Dummy Image */}
                  <div className="h-40 w-full rounded-lg overflow-hidden border mb-4">
                    <img
                      src={`https://via.placeholder.com/300?text=${team.teamName}`}
                      alt={team.teamName}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Team Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{team.teamName}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Leader:</strong> {team.teamLeader}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Team Size:</strong> {team.teamMembers.length}{" "}
                      members
                    </p>
                    <div className="text-gray-600 mb-4">
                      <strong>Skills:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Array.isArray(team.skills) &&
                        team.skills.length > 0 ? (
                          team.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500">
                            No skills listed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enquire Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => alert(`Enquire about ${team.teamName}`)}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                      📩 Enquire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No teams available.</p>
          )}
        </section>

        {/* Create New Team Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/create-team")}
            className="px-6 py-3 mb-4 mt-4 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
            data-aos="fade-up"
          >
            📩 Create New Team
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
