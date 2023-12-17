import React from "react";
import "./navbarbtn.scss";

let NavbarBtn = ({coins}) => {
    return (
        <>
            <button className="tip-button">
                <span className="tip-button__text">{coins}</span>
                <div className="coin-wrapper">
                    <div className="coin">
                        <div className="coin__middle"></div>
                        <div className="coin__back"></div>
                        <div className="coin__front"></div>
                    </div>
                </div>
            </button>
        </>
    )
}

export default NavbarBtn;