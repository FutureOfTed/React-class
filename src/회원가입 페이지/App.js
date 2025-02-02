import React, {useState, useEffect} from "react";
import Login from "./Login";
import Signin from "./Signin";
import "./App.css";

function App() {
    const [mode, setMode] = useState("LOGIN");

    useEffect(() => {
        fetch("http://localhost:3001/authcheck")
        .then((res) => res.json())
        .then((json) => {
            if (json.isLogin === "True") {
                setMode("WELCOME");
            } else {
                setMode("LOGIN");
            }
        });
    }, []);

    let content = null;

    if (mode === "LOGIN") {
        content = <Login setMode = {setMode}/>
    } else if (mode === "SIGNIN") {
        content = <Signin setMode = {setMode}/>
    } else if (mode === "WELCOME") {
        content = (
            <>
            <h2>메인 페이지에 오신 것을 환영합니다.</h2>
            <p>로그인에 성공하셨습니다.</p>
            <a href = "/logout">로그아웃</a>
            </>
        );
    }

    return <div className = "background">{content}</div>
}

export default App;