import { useState, useEffect } from "react";

export default function UsersListFunctional() {
  const [users, setUsers] = useState([
    { name: "Mohamed", email: "Bishogamal@gmail.com", isAdmin: true },
    { name: "Ahmed", email: "ahmed@gmail.com", isAdmin: true },
    { name: "alaa", email: "alaa@gmail.com", isAdmin: false },
    { name: "yasser", email: "yasser@gmail.com", isAdmin: true },
  ]);

  const [isAuth, setIsAuth] = useState(true);

  const handleToogle = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      {isAuth == true ? (
        <ul>
          {users.map(function (user, index) {
            if (user.isAdmin) {
              return <li key={index}>{user.name}</li>;
            }
          })}
        </ul>
      ) : (
        <p>You Must LogIn First</p>
      )}
      <button className="btn btn-primary" onClick={() => handleToogle()}>
        Toggle
      </button>
    </>
  );
}
