import React from "react";
import Navg from "./Navg";
import { useNavigate } from 'react-router-dom';

export default function Videocalltest() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/videocall');
    };

    return (
        <>
            <Navg />
            <div className="container justify-content-center width">
                <div className="text-start mb-2 mx-2">
                    <h5>Video Consultation</h5>
                </div>
                <div className="container">
                    <div className="card bg-dark" style={{ height:'175px;' }}>
                    </div>
                    <div className="text-center">
                        <h5 className="pt-3">Please wait while we check your camera</h5>
                        <div className="row pt-3 justify-content-center">
                            <div className="col-6 col-md-5 pb-3">
                                <div className="card p-2">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className="text-green"><i className="bi bi-globe-americas fs-3"></i></span>
                                        <span className="fs-5">Network</span>
                                        <span className="text-green"><i className="bi bi-check-circle fs-3"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-5 pb-3">
                                <div className="card p-2">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className="text-green"><i className="bi bi-camera-video-fill fs-3"></i></span>
                                        <span className="fs-5">Network</span>
                                        <span className="text-green"><i className="bi bi-check-circle fs-3"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-5">
                                <div className="card p-2">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className="text-green"><i className="bi bi-mic-fill fs-3"></i></span>
                                        <span className="fs-5">Network</span>
                                        <span className="text-green"><i className="bi bi-check-circle fs-3"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-5">
                                <div className="card p-2">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className="text-green"><i className="bi bi-volume-up-fill fs-3"></i></span>
                                        <span className="fs-5">Network</span>
                                        <span className="text-green"><i className="bi bi-check-circle fs-3"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="pt-3">
                            Supported web browsers for this video consultation technology include the latest versions of google
                            chrome,Mozilla firefox</p>

                            <button type="button" className="btn btn-primary btn-lg w-75 mb-4"
                            onClick={handleClick}
                            >Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}