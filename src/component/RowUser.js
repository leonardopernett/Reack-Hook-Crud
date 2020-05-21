import React from "react";

export default function RowUser({ user, removeUser, editingRow }) {
 
  const deleteUser = (id) => removeUser(id)
  const editingUser = (user)=>{
    editingRow(user)
  }
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>
        <button className="btn btn-danger mx-1" onClick={() => deleteUser(user.id)}>
          delete
        </button>
        <button className="btn btn-warning" onClick={()=>editingUser(user)}>edit</button>
      </td>
    </tr>
  );
}
