import React, {useState} from "react";

function Login(props) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>    
            <h2>로그인</h2>
            <div className = "form">
                <p>
                    <input
                        className = "login"
                        type = "text"
                        name = "username"
                        placeholder = "아이디"
                        onChange = {event => {
                            setId(event.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        className = "login"
                        type = "password"
                        name = "pw"
                        placeholder = "비밀번호"
                        onChange = {event => {
                            setPassword(event.target.value);
                        }}
                    />
                </p>

                <p>
                    <input
                        className = "button"
                        type = "submit"
                        value = "로그인"
                        onClick = {() => {
                            const userData = {
                                userId : id,
                                userPassword : password,
                            };
                            fetch("http://ocalhost:3001/login", {
                                method : "post",    // method : 통신 방법
                                headers : {         // headers : API 응답에 대한 정보를 담음
                                    "content-type" : "application/json",
                                },
                                body : JSON.stringify(userData) // userData라는 객체를 보냄
                            })
                            .then((res) => res.json())
                            .then((json) => {
                                if (json.isLogin === "True") {
                                    props.setMode("WELCOME");
                                }
                                else {
                                    alert(json.isLogin)
                                }
                            });
                        }}
                    />
                </p>

                <p>
                    계정이 없으신가요?
                    <button onClick = {() => {
                        props.setMode("SIGNIN");
                    }}>회원가입</button>
                </p>
            </div>
        </div>
    );
}

export default Login;