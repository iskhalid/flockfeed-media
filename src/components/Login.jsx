import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../app/userSlice";
import { useNavigate } from "react-router-dom";
import { formValidate } from "../utils/validate";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef();
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const [loading, setLoading] = useState(false);

  const handleValidation = async () => {
    const msg = formValidate(password.current.value);

    setErrorMessage(msg);

    if (msg) return;
    setLoading(true);

    if (loading) return;
    if (isSignin) {
      handleSignin();
    } else {
      handleSignup();
    }
  };

  // const toogleSignIn = () => {
  //   setIsSignin(!isSignin);
  // };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullName.current.value,
          username: username.current.value,
          password: password.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const jsonData = await response.json();
        dispatch(addUser(jsonData));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };
  const handleSignin = async () => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({
          username: username.current.value,
          password: password.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        localStorage.setItem("token", response.token); // Save the token to localStorage
        const jsonData = await response.json();
        dispatch(addUser(jsonData));
        console.log("why the going to about page");
        navigate("/");
      } else {
        alert("wrong username or password");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
             {isSignin ? "Sign in to your account" : "Sign up to a new account"}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {isSignin ? (
                ""
              ) : (
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Full Name
                  </label>
                  <input
                    ref={fullName}
                    type="fullName"
                    name="fullName"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  username
                </label>
                <input
                  ref={username}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  ref={password}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <p className=" py-3 text-red-600 text-sm font-semibold">
                  {errorMessage}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p
                  onClick={() => setIsSignin(!isSignin)}
                  className=" cursor-pointer py-3 text-blue-600 font-bold text-sm italic underline"
                >
                  {isSignin
                    ? "Create New account?"
                    : "Already have an account?"}
                </p>
              </div>
              <button
                className={`${
                  loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                } w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                onClick={handleValidation}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
