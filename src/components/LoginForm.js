import React, { useState } from 'react';
import apiService from '../core/apiService';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ username, password });

    try {
      const response = await apiService.login(username, password);
      console.log(response.data); // Handle the successful login response
      sessionStorage.setItem('token', response.data.access_token);
      // sessionStorage.setItem('User_id', response.data.User.id);
      // sessionStorage.setItem('username', response.data.User.username);
      // sessionStorage.setItem('email', response.data.User.email);
      history.push('/doctorlist'); // Navigate to the dashboard component
    } catch (error) {
      console.error(error); // Handle the login error
    }
  };

  return (

    <section class="vh-100 bg-white">
      <div class="container-fluid h-custom">
        <div class="row d-flex align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5 px-0 d-none d-sm-block position-obsolute">

            <div class="bg-image d-flex justify-content-center align-items-center w-100 vh-100"
              style={{ backgroundImage: `url('/images/hero2.png')` }}>
              <h1 class=" w-50 text-white text-start title">Instapract <br /> User Centric Teleconsulting Expert
                Opnion Platform.</h1>
            </div>

          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div class="text-start py-4">
              <img src="/images/logo.png" alt="" />
            </div>
            <div class="text-start py-3">
              <h2 class="h1 fw-bold mb-4 pt-5 pt-md-0">Login</h2>
              <hr class="hr" style={{ border: '1px solid #257fac;' }} />
            </div>
            <form class="g3 needs-validation" onSubmit={handleSubmit}>
              <div class="form-floating mb-4">
                <input type="text" id="form3Example3" formControlName="username"
                  class="form-control form-control-lg" placeholder="Enter a valid user name" onChange={(e) => setUsername(e?.currentTarget?.value)} />
                <label class="form-label" for="form3Example3">User Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" id="form3Example4" onChange={(e) => setPassword(e?.currentTarget?.value)} formControlName="password" class="form-control form-control-lg"
                  placeholder="Enter password" />
                <label class="form-label" for="form3Example4">Password</label>

              </div>

              <div class="d-flex justify-content-between align-items-center">

                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-green btn-lg w-100"
                  style={{
                    paddingLeft: '2.5rem;', paddingRight: ' 2.5rem;',
                    color: 'white', backgroundColor: '#338BA8'
                  }}>Login</button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default LoginForm;
