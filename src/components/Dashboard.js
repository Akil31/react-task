import React from 'react'
import Navg from './Navg'
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const history = useHistory();
    const pathlink = () => {
        history.push("/videocalltest");
    };
    return (
        <>
            <Navg />
            <div class="container-fluid bg">
                <section class="container">
                    <div class="py-5">
                        <div class="mb-5">
                            <h3>List Of Available Doctors</h3>
                        </div>
                        <div class="card bg-white p-3 my-3 border-0 shadow-sm">
                            <div class="row d-flex">
                                <div class="col-6 text-start">
                                    <div class="row">
                                        <div class="col-2 mx-0 px-0 align-self-center">
                                            <img src="./images/video.png" alt="mdo" width="45" height="45"
                                                class="rounded-pill mx-auto d-block me-3" />
                                        </div>
                                        <div class="col">
                                            <span class="fs-5 me-3"> <span class=""></span></span><br />
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 align-self-center text-end">
                                    <button class="btn btn-primary px-5 py-2"
                                        onClick={() => pathlink("/videocalltest")}
                                    >Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}