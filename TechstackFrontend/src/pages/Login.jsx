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
      const userData = isLogin
        ? { name, email, password }
        : { name, email, password, skills, bio, location, phone };

      const endpoint = isLogin ? "/api/user/login" : "/api/user/register";
      const token = localStorage.getItem("token");
      console.log(userData, token);
      // console.log(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert(`${isLogin ? "Login" : "Registration"} successful!`);
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login/registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {!isLogin && (
              <>
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Skills</label>
                  <Select
                    isMulti
                    options={skillOptions}
                    onChange={handleSkillsChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full p-2 border rounded-lg"
                    pattern="\d{10}"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </>
            )}

            {isLogin && (
              <div className="md:col-span-2">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            )}

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="md:col-span-2">
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
            className="mt-6 block text-center w-full text-gray-700 hover:text-black"
          >
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span className="underline">Sign Up here</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="underline">Login here</span>
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
