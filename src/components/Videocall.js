import React from "react";
import Navg from "./Navg";

export default function VideoCall() {
    return (
        <div>
            <Navg />
            <div class="container-fluid">
                <div class="row d-flex">
                    <div class="col-12 col-md-8">
                        <div class="vides_call bg-image d-flex">
                            <img src="images/video.png" class="" alt="logo" />
                        </div>
                        <div class="Docter_tittle">
                            <h2>
                                Dr.Rainer Mere <span>10.50</span>
                            </h2>
                        </div>
                        <div class="Docter_sec">
                            <img src="images/profile.png" />
                        </div>
                        <div class="text-white text-start title btn-green" style={{ alignSelf: ' flex-end;', width: ' -webkit-fill-available;', height: '60px;' }}>
                            <div class="p-2" style={{ textAlign: '-webkit-center;' }}>
                                <div class="d-flex justify-content-around align-items-center w-250">
                                    <span class=""><i class="bi bi-mic-mute-fill fs-3"></i></span>
                                    <span class=""><i class="bi bi-camera-video-off-fill fs-3"></i></span>
                                    <span class="text-danger"><i class="bi bi-telephone-fill fs-3"></i></span>
                                    <span class=""><i class="bi bi-record-circle fs-3"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 vides_chat">
                        <div class="">
                            <div class="row online_row">
                                <div class="col-lg-2">
                                    <div class="col-2 mx-0 px-0 align-self-center">
                                        <img src="./images/video.png" alt="mdo" width="45" height="45"
                                            class="rounded-pill mx-auto d-block me-3" />
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="online_hours">
                                        <h3>Dr.Rainer Mere <span>last online 55 hour ago</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="message_box">
                            <div class="message_chat_rig ">
                                <p>
                                    Hi Docter,this is the message from the patient explaning their problem.
                                </p>
                            </div>
                            <div class="message_chat_left">
                                <p>
                                    Hi Docter,this is the message from the patient explaning their problem.
                                </p>
                            </div>
                            <div class="message_chat_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7ImTqH-AG4bO9qAoi5YfC8FTn-5kr89VZSjy0_6x6bWn5qiYzBMN97D8-752erop5PE&usqp=CAU" />
                            </div>
                            <div class="message_chats">
                                <p>Dr.Luy Robin is typing....</p>
                            </div>
                        </div>
                        <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Type message" />
                            <a class="ms-1 text-muted"><i class="bi bi-plus-circle-fill fs-4"></i></a>
                            <a class="ms-3 text-muted"><i class="bi bi-emoji-wink fs-4"></i></a>
                            <a class="ms-3"><i class="bi bi-send-fill fs-4"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}