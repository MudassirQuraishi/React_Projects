import React, { useState } from "react";

import AddUserForm from "./components/User/AddUserForm";
import UserList from "./components/User/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div>
            <AddUserForm onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;
