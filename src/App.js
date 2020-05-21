import React, { Fragment, useState, useEffect } from "react";
import ListUser from "./component/ListUser";
import AddUser from "./component/AddUser";
import { v4 as uuid } from "uuid";
import EditUser from "./component/EditUser";

function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

 useEffect(() => {
   const data = localStorage.getItem('users');
     if(data !== null){
       const datos = JSON.parse(data);
       setUsers(datos)
     }else {
      setUsers([...users,
        { id: uuid(), name: "leonardos", username: "lnard214" },
        { id: uuid(), name: "ryan rey", username: "fazt" },
        { id: uuid(), name: "ana milena", username: "any_milena" },
      ])
     }
 }, [])

 useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users))
})


  const addNewUser = (user) => {
    setUsers([
      ...users,
      { id:uuid(),
        name: user.name,
        username: user.username,
      },
    ]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((t) => t.id !== id));
  };

  const editingRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  const updateUser = (user)=>{
    setUsers(users.map(u => u.id === user.id ? user:u))
    setEditing(false)
  }
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h3>React crud</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto ">
            {!editing ? (
              <div className="card">
                <h3 className="text-center">Add User</h3>
                <div className="card-body">
                  <AddUser addNewUser={addNewUser} />
                </div>
              </div>
            ) : (
              <div className="card">
                <h3>edit User</h3>
                <div className="card-body">
                  <EditUser currentUser={currentUser} updateUser={updateUser} />
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6 mx-auto text-center">
            <h3>List User</h3>
            <ListUser
              users={users}
              deleteUser={deleteUser}
              setEditing={setEditing}
              editingRow={editingRow}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
