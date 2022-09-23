import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
      });
      const { id } = useParams();
      useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/api/get/${id}`);
            setUser(result.data[0]);
    }

    return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Status: {user.status}</li>
          </ul>
        </div>
     );
}