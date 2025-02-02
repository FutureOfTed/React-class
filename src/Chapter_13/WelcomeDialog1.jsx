import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomeDialog1(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">어서 오세요</h1>
            <p className = "Dialog-message">우리 사이트에 방문하신 것을 환영합니다.</p>
        </FancyBorder>
    );
}
export default WelcomeDialog1;