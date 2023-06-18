import React from "react";
import Navg from "./Navg";
import { useNavigate } from "react-router";

export default function VideoCall() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };

    return (
        <div>
            <Navg />
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-12 col-md-8">
                        <div className="vides_call bg-image d-flex">
                            <img src="images/video.png" className="" alt="logo" />
                        </div>
                        <div className="Docter_tittle">
                            <h2>
                                Dr.Rainer Mere <span>10.50</span>
                            </h2>
                        </div>
                        <div className="Docter_sec">
                            <img src="images/profile.png" alt="profile"/>
                        </div>
                        <div className="text-white text-start title btn-green" style={{ alignSelf: ' flex-end', width: ' -webkit-fill-available', height: '60px;' }}>
                            <div className="p-2" style={{ textAlign: '-webkit-center' }}>
                                <div className="d-flex justify-content-around align-items-center w-250">
                                    <span className=""><i className="bi bi-mic-mute-fill fs-3"></i></span>
                                    <span className=""><i className="bi bi-camera-video-off-fill fs-3"></i></span>
                                    <span className="text-danger" onClick={handleClick}><i className="bi bi-telephone-fill fs-3"></i></span>
                                    <span className=""><i className="bi bi-record-circle fs-3"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 vides_chat">
                        <div className="">
                            <div className="row online_row">
                                <div className="col-lg-2">
                                    <div className="col-2 mx-0 px-0 align-self-center">
                                        <img src="./images/video.png" alt="mdo" width="45" height="45"
                                            className="rounded-pill mx-auto d-block me-3"  />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="online_hours">
                                        <h3>Dr.Rainer Mere <span>last online 55 hour ago</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="message_box">
                            <div className="message_chat_rig ">
                                <p>
                                    Hi Docter,this is the message from the patient explaning their problem.
                                </p>
                            </div>
                            <div className="message_chat_left">
                                <p>
                                    Hi Docter,this is the message from the patient explaning their problem.
                                </p>
                            </div>
                            <div className="message_chat_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7ImTqH-AG4bO9qAoi5YfC8FTn-5kr89VZSjy0_6x6bWn5qiYzBMN97D8-752erop5PE&usqp=CAU" alt="Chat"/>
                            </div>
                            <div className="message_chats">
                                <p>Dr.Luy Robin is typing....</p>
                            </div>
                        </div>
                        <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Type message" />
                            <span className="ms-1 text-muted"><i className="bi bi-plus-circle-fill fs-4"></i></span>
                            <span className="ms-3 text-muted"><i className="bi bi-emoji-wink fs-4"></i></span>
                            <span className="ms-3"><i className="bi bi-send-fill fs-4"></i></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}