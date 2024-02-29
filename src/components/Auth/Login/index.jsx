import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data) => {
    console.log(data, "loginData");
  };
  return (
    <>
      <div className="flex container mx-auto justify-center place-items-center mt-12">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-bold my-2">Login</h2>
          <form className="card-body" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                //required
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Invalid Email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400 text-left text-sm ml-1 my-1">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-400 text-left text-sm ml-1 my-1">
                  {errors?.password?.message}
                </span>
              )}
              <label className="label">
                <a href="#" className=" text-sm link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Login</button>
            </div>
            <div className="flex gap-1 justify-center place-items-center my-1">
              Don't have an account?{" "}
              <span
                className="text-blue-700 font-semibold text-md hover:underline hover:cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Create Account
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
