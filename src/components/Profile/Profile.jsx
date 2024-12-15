import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name", { required: true })} placeholder="Name" />
      <input type="email" {...register("email", { required: true })} placeholder="Email" />
      <button type="submit">Save</button>
    </form>
  );
};

export default Profile;
