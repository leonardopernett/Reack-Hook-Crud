import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function EditUser({ currentUser, updateUser }) {
  const { register, handleSubmit, errors, setValue } = useForm();
  setValue("name", currentUser.name);
  setValue("username", currentUser.username);

  const updateNewUser = (data) => {
    data.id = currentUser.id;
    updateUser(data)
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(updateNewUser)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <em className="text-danger">the field name is required</em>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            ref={register({ required: true })}
          />
          {errors.name && (
            <em className="text-danger">the field name is required</em>
          )}
        </div>
        <button className="btn btn-dark btn-block">update user</button>
      </form>
    </Fragment>
  );
}
