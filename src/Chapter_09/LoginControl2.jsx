import React, { useState } from "react";

function UserGreeting(props) {
    return <h1 style = {{color : "green"}}>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1 style = {{color : "red"}}>회원가입을 해주세요.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    );
}

function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lastLoginTime, setLastLoginTime] = useState(null);
    const [lastLogoutTime, setLastLogoutTime] = useState(null);


    const handleLoginClick = () => {
        setIsLoggedIn(true);
        setLastLoginTime(new Date().toLocaleTimeString());
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setLastLogoutTime(new Date().toLocaleTimeString());
    };

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div style = {{backgroundColor : isLoggedIn ? "#e0ffe0" : "#ffe0e0", padding : "20px", borderRadius : "8px"}}>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            <div style = {{marginTop : "10px", fontStyle : "italic"}}>
                {isLoggedIn && lastLoginTime && <p>로그인 시간 : {lastLoginTime}</p>}
                {!isLoggedIn && lastLogoutTime && <p>로그아웃 시간 : {lastLogoutTime}</p>}
            </div>
        </div>
    );
}
export default LoginControl2;