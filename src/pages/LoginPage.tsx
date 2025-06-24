import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("login", {
        email: formValues.email,
        password: formValues.password,
      });
      if (response.data.status === true) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        setFormValues({ email: "", password: "" });
      } else if (response.data.status === false) {
        toast.error(response.data.message || "Login Fails");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong please try again later");
      console.log(error);
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
      <form
        className="flex flex-col items-center justify-center gap-6 px-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-gray-500">Login to continue</p>

        <div className="w-full max-w-md space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex w-full max-w-md justify-between text-sm text-blue-600">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>

        <button
          className="w-full max-w-md cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v4m0 8v4m8-8h-4m-8 0H4"
                />
              </svg>
              Loading...
            </span>
          ) : (
            "Log in"
          )}
        </button>
      </form>

      <div className="hidden items-center justify-center p-8 md:flex">
        <img
          src="/pos.jpg"
          alt="login"
          className="h-auto max-w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
