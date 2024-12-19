import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { Alert, Snackbar } from "@mui/material";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Signed Up:", data);

    localStorage.setItem("user", JSON.stringify(data));

    setOpen(true);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
   
  };


  return (
    <>
      <header className="container h-10">
        <nav className="mx-10">
          <button onClick={()=> navigate("/")}>
          <img src={Logo} className="w-36" alt="" />
          </button>
        </nav>
      </header>
      <div className="img w-full h-screen flex flex-col justify-center items-center ">
        <h2 className=" text-3xl my-7 text-pink-600 font-bold">Sign Up</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border-4 rounded-xl border-pink-500 p-10 px-10  min-w-80 w-2/6 max-w-lg flex flex-col items-start justify-between"
        >
          <div className="w-full">
            <label className="text-black text-lg">Name</label>
            <br />
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="my-2 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.name && { border: "2px solid red" }}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="text-black text-lg">Email</label>
            <br />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="my-2  bg-transparent w-full text-black placeholder:text-black border-2 rounded-lg border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.email && { border: "2px solid red" }}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="my-2 bg-transparent w-full text-black placeholder:text-black border-2 rounded-lg border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.password && { border: "2px solid red" }}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <p className="text-md my-3 ">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")}>Login</button>
          </p>
          <button
            type="submit"
            className="px-4 py-3  text-white bg-pink-500 rounded-lg hover:scale-110 transition-all"
          >
            Sign Up
          </button>
        </form>
        <Snackbar className="fixed -top-96" open={open} autoHideDuration={6000}>
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Sign Up successful! Please login.
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default SignUp;
