import React, { Fragment } from "react";
import RowUser from "./RowUser";

export default function ListUser(props) {
  const removeUser = (id) => {
    props.deleteUser(id);
  };
  return (
    <Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          { props.users.length > 0 ? props.users.map((user, i) => (
            <RowUser 
              user={user} 
              key={i} 
              removeUser={removeUser} 
              editingRow={props.editingRow}
            />
          )):
           <tr>
               <td>
                  <p>no user yet</p>
               </td>
           </tr>
          }
        </tbody>
      </table>
    </Fragment>
  );
}
