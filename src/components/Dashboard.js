import React from 'react'
import Navg from './Navg'
import { useState, useEffect } from 'react';
import apiService from '../core/apiService';
import { useNavigate } from 'react-router';

export default function Dashboard() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/videocalltest');
    };
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {
            const response = await apiService.getUsers();
            console.log(response.data); // Handle the successful login response
            const data = await response.data;
            setUsers(data);

        } catch (error) {
            console.error(error); // Handle the login error
        }
    }




    return (
        <>
            <Navg />
            <div className="container-fluid bg">
                <section className="container">
                    <div className="py-5">
                        <div className="mb-5">
                            <h3>List Of Available Doctors</h3>
                        </div>
                        {users.map((user, index) => (
                            <div className="card bg-white p-3 my-3 border-0 shadow-sm" key={index}>
                                <div className="row d-flex">

                                    <div className="col-6 text-start">
                                        <div className="row">
                                            <div className="col-2 mx-0 px-0 align-self-center">
                                                <img src={user.profile_picture} alt="mdo" width="45" height="45"
                                                    className="rounded-pill mx-auto d-block me-3" />
                                            </div>
                                            <div className="col">
                                                <span className="fs-5 me-3">{user.name}</span><br />
                                                <span>{user.specialty[0].name}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-6 align-self-center text-end">
                                        <a href='/videocalltest' type='button' className="btn btn-primary px-5 py-2"
                                        onClick={handleClick}>Connect</a>
                                    </div>
                                </div>
                            </div>))}
                    </div>


                </section>
            </div>
        </>
    )
}