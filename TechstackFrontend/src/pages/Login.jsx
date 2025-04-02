import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const skillOptions = [
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Express", label: "Express" },
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Python", label: "Python" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Java", label: "Java" },
    { value: "Spring Boot", label: "Spring Boot" },
    { value: "C#", label: "C#" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "PHP", label: "PHP" },
    { value: "Laravel", label: "Laravel" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "Go", label: "Go" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Docker", label: "Docker" },
    { value: "AWS", label: "AWS" },
  ];

  const handleSkillsChange = (selectedOptions) => {
    setSkills(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password }; // Add other fields if needed
      const endpoint = isLogin ? "/api/user/login" : "/api/user/register";
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Save token
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data
        alert(`${isLogin ? "Login" : "Registration"} successful!`);
        navigate(isLogin ? "/" : "/profile");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {!isLogin && (
              <>
                <div className="col-span-1">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label>Skills</label>
                  <Select
                    isMulti
                    options={skillOptions}
                    onChange={handleSkillsChange}
                    className="w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label>Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full p-2 border rounded-lg"
                    pattern="\d{10}"
                  />
                </div>
                <div className="col-span-2">
                  <label>Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </>
            )}
            <div className="col-span-1">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="col-span-1">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-900"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-4 text-end w-full text-black hover:text-gray-600 transition-all duration-300"
          >
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span className="hover:underline">Sign Up here</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="hover:underline">Login here</span>
              </>
            )}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
