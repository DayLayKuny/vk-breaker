import React from "react";
import "./User.css";
import { GrUserSettings } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { SiHackaday } from "react-icons/si";

function User () {
    return (
        <div className="all-user">
            <div className="all-headerfs">
                <div className="headerf">
                    <div className="headers">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="User" />
                        <h2>Name</h2>
                        <div className="buttons">
                            <button><GrUserSettings className="setfa" /></button>
                            <button><IoLogOutOutline className="outfa" /></button>
                        </div>
                        <button><SiHackaday className="setfa"/> Hacked</button>
                    </div>
                </div>
            </div>
            <div className="main-headiv">
                    <div className="mainfs">
                        <div className="mainf">
                            <p>Аватар</p>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="User" />
                            <p>Конфигурации</p>
                                <div className="butdel">
                                <p>Профиль:</p>
                                <button>Delete</button> 
                                </div>
                        </div>
                        <div className="mains">
                            <h3>Информация Профиля</h3>
                            <div className="all-infoitems">
                                <div className="infoitem">
                                    <span>IP Адрес:</span>
                                    <p>93.185.38.143</p>
                                </div>
                                <div className="infoitem">
                                    <span>Местоположение:</span>
                                    <p>Армения / Абовян</p>
                                </div>
                                <div className="infoitem">
                                    <span>Имя:</span>
                                    <p>	Adolf</p>
                                </div>
                                <div className="infoitem">
                                    <span>ID:</span>
                                    <p>	26698</p>
                                </div>
                                <div className="infoitem">
                                    <span>Почта:</span>
                                    <p>adolfhiler@gmail.com</p>
                                </div>
                                <div className="infoitem">
                                    <span>Дата регистрации:</span>
                                    <p>	Вчера в 19:45</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default User