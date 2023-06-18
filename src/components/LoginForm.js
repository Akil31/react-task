import React, { useState } from 'react';
import apiService from '../core/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const [data, setData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [device_id] = useState('55c3389cb5ddd720dc0297617f3561c43a36218a277c974c8d43d545a643f45c');
  const [os_id] = useState('b93a9204-ee21-4cf9-8a94-cf5eeabf7301');
  const [time_zone] = useState('Asia/Calcutta');
  const [role_id] = useState('143f37f2-ca38-0ab1-2489-1e47113655fc');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ username, password });


    try {
      const response = await apiService.login(
        {
          username,
          password,
          device_id,
          os_id,
          time_zone,
          role_id
        }
      );
      console.log(response.data); // Handle the successful login response
      sessionStorage.setItem('token', response.data.access_token);
      sessionStorage.setItem('User_id', response.data.User.id);
      sessionStorage.setItem('username', response.data.User.username);
      sessionStorage.setItem('email', response.data.User.email);
      setTimeout(() => {
        navigate('/doctorlist'); // Navigate to the dashboard component
      },1000)
    } catch (error) {
      console.error(error); // Handle the login error

      // data(error.error.msg)
      setData('Invalid User')
     
    }
  };



  return (

    <section className="vh-100 bg-white">
      <div className="container-fluid h-custom">
        <div className="row d-flex align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 px-0 d-none d-sm-block position-obsolute">

            <div className="bg-image d-flex justify-content-center align-items-center w-100 vh-100"
              style={{ backgroundImage: `url('/images/hero2.png')` }}>
              <h1 className=" w-50 text-white text-start title">Instapract <br /> User Centric Teleconsulting Expert
                Opnion Platform.</h1>
            </div>

          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="text-start py-4">
              <img src="/images/logo.png" alt="" />
            </div>
            <div className="text-start py-3">
              <h2 className="h1 fw-bold mb-4 pt-5 pt-md-0">Login</h2>
              <hr className="hr" style={{ border: '1px solid #257fac' }} />
            </div>
            <form className="g3 needs-validation" onSubmit={handleSubmit}>
              <div className="form-floating mb-4">
                <input type="text" id="form3Example3"
                  className="form-control form-control-lg" placeholder="Enter a valid user name" onChange={(e) => setUsername(e?.currentTarget?.value)} />
                <label className="form-label" for="form3Example3">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" id="form3Example4" onChange={(e) => setPassword(e?.currentTarget?.value)} className="form-control form-control-lg"
                  placeholder="Enter password" />
                <label className="form-label" for="form3Example4">Password</label>

              </div>

              <div className="text-danger">{data}</div>


              <div className="d-flex justify-content-between align-items-center">

                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-green btn-lg w-100"
                  style={{
                    paddingLeft: '2.5rem', paddingRight: ' 2.5rem',
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
