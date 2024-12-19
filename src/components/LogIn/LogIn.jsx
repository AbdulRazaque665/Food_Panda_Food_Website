import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { Alert, Snackbar } from "@mui/material";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === data.email &&
      savedUser.password === data.password
    ) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);
  return (
    <>
      <header className="container h-10">
        <nav className="mx-10">
          <button onClick={() => navigate("/")}>
          <img src={Logo} className="w-36" alt="" />
          </button>
        </nav>
      </header>

      <div className="img w-full h-screen flex flex-col justify-center items-center ">
        <h2 className=" text-3xl my-7 text-pink-600 font-bold">Sign In</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border-4 rounded-xl border-pink-500 p-10 px-10  min-w-80 w-2/6 max-w-lg flex flex-col items-start justify-between"
        >
          <div className="w-full">
            <label className="text-black text-lg">Email</label>
            <br />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              style={errors.email && { border: "2px solid red" }}
              className="my-2 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="text-black text-lg">Password</label>
            <br />
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              style={errors.password && { border: "2px solid red" }}
              className="my-2 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <p className="text-md my-3 ">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </p>

          <button
            className="px-4 py-3  text-white bg-pink-500 rounded-lg hover:scale-110 transition-all"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <Snackbar
          className="fixed -top-96"
          open={error}
          autoHideDuration={6000}
        >
          <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
            Something went wrong!
          </Alert>
        </Snackbar>
        <Snackbar
          className="fixed -top-96"
          open={success}
          autoHideDuration={6000}
        >
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Logged in Successfully
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Login;
