// 3. useReducer로 요청 상태 관리
// Practice 컴포넌트에서 useState 대신에 useReducer를 사용해서 구현
// userReducer를 사용하여 LOADING, SUCCESS, ERROR 액션에 따라 다르게 처리

import React, {useReducer, useEffect} from "react";
import axios from "axios";

// reducer 함수 정의, state와 action을 인수로 받음
// action의 type에 따라서 loading, data, error 값을 설정하는 과정을 구현
function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading : true,
                data : null,
                error : null,
            };
        case "SUCCESS":
            return {
                loading : false,
                data : action.data,
                error : null,
            };
        case "ERROR":
            return {
                loading : false,
                data : null,
                error : action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    };
};

// Practice3 컴포넌트에서 reducer 함수와 useReducer Hook을 사용
function Practice3() {
    // useReducer Hook에서 reducer 함수와 초기 state값을 전달
    const [state, dispatch] = useReducer(reducer, {
        loading : false,
        data : null,
        error : null,
    });

    // fetchUsers 함수 정의
    const fetchUsers = async () => {
        // 요청 상태(LOADING, SUCCESS, ERROR)에 따라 dispatch 호출
        // 기본으로 `type : LOADING"` dispatch가 호출됨
        dispatch({type : "LOADING"});
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({type : "SUCCESS", data : response.data});
        } catch (e) {
            dispatch ({type : "ERROR", error : e});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // state.data를 users 키워드로 조회
    const {loading, data : users, error} = state;

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error occured..</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick = {fetchUsers}>불러오기</button>
        </>
    );
};

export default Practice3;