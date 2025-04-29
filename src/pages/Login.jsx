import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    user,
    error,
    loading,
    clearError,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      console.log("User authenticated, navigating to home...");
      navigate("/");
    }
  }, [user, navigate]);

  // Clear error when switching between sign-in and sign-up
  useEffect(() => {
    clearError();
  }, [isSignUp, clearError]);

  const handleGoogleSignIn = async () => {
    try {
      console.log("Attempting Google sign in...");
      await signInWithGoogle();
    } catch (error) {
      console.error("Error in login component:", error);
      // Error is already handled in AppContext
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Clear any previous errors
      clearError();

      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      // Error is already handled in AppContext
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    clearError();
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-text-light">Please wait while we process your request...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-border rounded-xl text-text-light text-sm shadow-lg bg-surface">
        <p className="text-2xl font-semibold text-text">
          {isSignUp ? "Create Account" : "Sign In"}
        </p>
        <p className="text-text-light">Please {isSignUp ? "sign up" : "sign in"} to book appointment</p>

        {error && (
          <div className="w-full bg-red-900/20 text-red-400 p-3 rounded-lg mt-2 flex items-center gap-2 border border-red-900/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder-text-light"
              required
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text placeholder-text-light"
              required
              autoComplete={isSignUp ? "new-password" : "current-password"}
              minLength={6}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading
              ? "Processing..."
              : isSignUp
              ? "Create Account"
              : "Sign In"}
          </button>
        </form>

        <div className="w-full text-center my-4">
          <span className="text-text-light">or</span>
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`w-full bg-surface border border-border text-text px-4 py-3 rounded-lg hover:bg-surface-hover transition-colors flex items-center justify-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="w-full text-center mt-4 text-text-light">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:text-primary-light transition-colors"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
