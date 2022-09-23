import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    axios.get('http://localhost:3001/api/get').then((response) => {
      setUser(response.data.reverse());
      
  })
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/api/remove/${id}`);
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Users Data</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Create Date</th>
              <th scope="col">Modifieddate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index+1}>
                <td scope="row">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.createdate}</td>
                <td>{user.modifieddate}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;