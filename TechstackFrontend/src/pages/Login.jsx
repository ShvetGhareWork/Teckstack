import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [name, setName] = useState(""); // For registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login API call
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
          { email, password }
        );
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          alert("Login successful!");
          navigate("/user-details"); // Redirect to multi-details page
        } else {
          alert(response.data.message);
        }
      } else {
        // Register API call
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
          { name, email, password }
        );
        console.log(
          response.data.success,
          response.data.token,
          response.data.userId
        );

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          alert("Registration successful!");
          setIsLogin(true); // Switch to login after successful registration
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                  required
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder={
                  isLogin ? "Enter your password" : "Create a password"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-black hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-black hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
