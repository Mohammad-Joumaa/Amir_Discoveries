import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, Mail } from "lucide-react";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate required fields
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      setIsLoading(false);
      return;
    }

    if (isSignUp && !email.trim()) {
      setError("Email is required for signup");
      setIsLoading(false);
      return;
    }

    try {
      const action = isSignUp ? 'signup' : 'login';
      const payload = {
        action: action,
        username: username.trim(),
        password: password.trim()
      };

      // Add email for signup
      if (isSignUp) {
        payload.email = email.trim();
      }

      console.log('Sending payload:', payload); // Debug log

      console.log('Attempting to connect to: http://localhost/auth.php');
      
      const response = await fetch('http://localhost/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status); // Debug log

      const data = await response.json();
      console.log('Response data:', data); // Debug log

      if (data.success) {
        if (isSignUp) {
          alert("Account created successfully! Please log in.");
          setIsSignUp(false);
          setUsername("");
          setEmail("");
          setPassword("");
        } else {
          // Login successful
          // Store auth state in memory (no localStorage in artifacts)
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("username", username);
          alert("Login successful! You can now access the admin panel.");
          // In a real app, you would navigate to admin panel here
          // navigate("/admin-panel");
        }
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      console.error("Request failed:", err);
      setError("Failed to connect to server. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-white border-opacity-20 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 -right-4 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        {error && (
          <div className="mb-6 p-3 bg-red-500 bg-opacity-20 text-red-100 rounded-lg text-center border border-red-400 border-opacity-30">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-5 py-3 pr-12 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-opacity-70" size={20} />
          </div>

          {isSignUp && (
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 pr-12 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={isSignUp}
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-opacity-70" size={20} />
            </div>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-5 py-3 pr-12 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={isSignUp ? 8 : 1}
            />
            <Lock className="absolute right-12 top-1/2 -translate-y-1/2 text-white text-opacity-70" size={20} />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-opacity-70 hover:text-white focus:outline-none transition duration-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {!isSignUp && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-purple-300 text-sm font-medium hover:text-purple-200 hover:underline focus:outline-none transition duration-200"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 transform focus:outline-none focus:ring-4 focus:ring-purple-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:from-purple-700 hover:to-pink-700 hover:scale-105"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {isSignUp ? "Creating Account..." : "Logging In..."}
              </span>
            ) : (
              isSignUp ? "Sign Up" : "Log In"
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-opacity-80">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setUsername("");
                setEmail("");
                setPassword("");
              }}
              className="text-purple-300 font-semibold hover:text-purple-200 hover:underline focus:outline-none transition duration-200"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Connection Status Indicator */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-white text-opacity-60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Connected to Database</span>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;