import React,{Fragment} from "react";
import {useForm} from 'react-hook-form'
export default function AddUser(props) {

const {register,errors,handleSubmit} = useForm();
 

const createUser = (data, e)=>{
    props.addNewUser(data)
    e.target.reset();
}
  return (
    <Fragment>
      <form onSubmit={handleSubmit(createUser)}>
        <div className="form-group">
          <input type="text" 
            className="form-control" 
            placeholder="name" 
            name="name"
            ref={register({required:true})}
         />
         {errors.name && <em className="text-danger">the field name is required</em>}
        </div>
        <div className="form-group">
          <input type="text" 
            name="username"
            className="form-control" 
            placeholder="username" 
            ref={register({required:true})}
         />
          {errors.username && <em className="text-danger">the field username is required</em>}
        </div>
        <button className="btn btn-primary btn-block">add user</button>
      </form>
    </Fragment>
  );
}
