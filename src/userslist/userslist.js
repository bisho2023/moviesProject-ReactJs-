import React, { Component } from "react";

class Userslist extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
      users: [
        { name: "bishoy", email: "Bishogamal@gmail.com", isAdmin: true },
        { name: "Ahmed", email: "ahmed@gmail.com", isAdmin: true },
        { name: "alaa", email: "alaa@gmail.com", isAdmin: false },
        { name: "yasser", email: "yasser@gmail.com", isAdmin: true },
      ],
    };
  }

  handleChange() {
    this.setState({ isAuth: !this.state.isAuth });
  }
  render() {
    return (
      <>
        {/* {this.state.isAuth && 
          <ul>
            {this.state.users.map(function (user, index) {
              if (user.isAdmin) {
                return <li key={index}>{user.name}</li>;
              }
            })}
          </ul>
        } */}

        {this.state.isAuth == true ? (
          <ul>
            {this.state.users.map(function (user, index) {
              if (user.isAdmin) {
                return <li key={index}>{user.name}</li>;
              }
            })}
          </ul>
        ) : (
          <p>Youu must be authunticated</p>
        )}
        <button onClick={() => this.handleChange()} className="btn btn-danger">
          Toggle isAuth
        </button>
      </>
    );
  }
}

export default Userslist;
