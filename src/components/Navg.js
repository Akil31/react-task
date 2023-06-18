import React from "react";
import { useNavigate } from "react-router";
export default function Navg() {

  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('User_id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    navigate('/');
  };

const username = sessionStorage.getItem("username");
const email = sessionStorage.getItem("email");


  return (
    <div className="container-fluid bg-white shadow-sm">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-1">
          <div className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="./images/logo.png" alt="" />
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <div className="row">
                <div className="col-3 mx-0 px-0 align-self-center">
                  <img src="./images/profile.png" alt="mdo" width="45" height="45"
                    className="rounded mx-auto d-block me-3" />
                </div>
                <div className="col-9">
                        <span className="fs-6">Hi,{username}</span><br/>
                        <span className="fs-7">E-Mail:{email}</span>
                    </div>
              </div>
            </li>
            <li className="nav-item" onClick={handleClick}> <i className="fa fa-power-off" aria-hidden="true"></i><i className="bi bi-power fs-2"></i></li>
          </ul>
        </header>
      </div>
    </div>

  )
}