import React from "react";

export default function Navg(){
    return(
        <div class="container-fluid bg-white shadow-sm">
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-1">
            <a href="/" class="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-dark text-decoration-none">
              <img src="./images/logo.png" alt="" />
            </a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <div class="row">
                  <div class="col-3 mx-0 px-0 align-self-center">
                    <img src="./images/profile.png" alt="mdo" width="45" height="45"
                      class="rounded mx-auto d-block me-3" />
                  </div>
                </div>
              </li>
              <li class="nav-item"><i class="fa fa-power-off" aria-hidden="true"></i><i class="bi bi-power fs-2"></i></li>
            </ul>
          </header>
        </div>
      </div>
  
    )
}