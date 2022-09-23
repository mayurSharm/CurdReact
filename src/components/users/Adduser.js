import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Editadd.css';

const AddUser = () => {
    let navigate = useNavigate();
    // const [status , setStatus] = useState("Blocked");
    const [inputField, setInputfield] = useState({
        name: "",
        email: "",
        status: "",
    });

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputfield((prevState) => ({
            ...prevState, [name]: value,
        }));
    }
    console.log(inputField.status);

    const submitButton = async (e) => {
        e.preventDefault();
        if (!inputField) {
            toast.error("Please provide value into each input feild");
        } else {
            await axios.post("http://localhost:3001/api/insert", {
                name: inputField.name,
                email: inputField.email,
                status: inputField.status
            })
                .then(res => {
                    console.log(res.inputField)
                    alert("success full done");
                })
                .catch((err) => toast.error(err.response.data))
            toast.success("User Details Added sucessfully");
            setTimeout(() => navigate.push("/"), 500);
            navigate.push("/");
        }
    }

    return (
        <div className="container">
            <div className="cardbox w-60 mx-auto shadow p-5">
                <h2 className=" heading text-center mb-4">Add New User</h2>
                <form >
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            onChange={inputsHandler}
                            placeholder="User Name"
                            className="form-control form-control-lg"

                            value={inputField.name} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            onChange={inputsHandler}
                            className="form-control form-control-lg"

                            placeholder="Email"
                            value={inputField.email} />
                    </div>
                    <div className="form-group">
                        <input
                            type=""
                            className="form-control form-control-lg"

                            name="status"
                            onChange={inputsHandler}
                            placeholder="Status"
                            value={inputField.status} />
                         
                    </div>

                    <button onClick={submitButton} className="b1button btn btn-primary btn-block">Add User</button>
                    <a className='go' href='/'>go back </a>
                </form>
            </div>
        </div>
    );
};

export default AddUser;