/* 1. useState와 useEffect로 data loading*/

import React, {useState, useEffect} from "react";
import axios from "axios";

function Practice() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    // useEffect에 첫 번째 파라미터로 등록하는 함수에는 async를 사용 X
    useEffect(() => {
        // 내부에서 async를 사용하는 새로운 함수를 선언
        const fetchUsers = async () => {
            try {
                // 요청이 시작할 때 error와 users를 초기화
                setError(null);
                setUsers(null);
                // loading 상태를 true로 변경
                setLoading(true);
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                // res.data 안에 API 데이터가 있다.
                setUsers(res.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    // 로딩 상태가 활성황 됐을 때 렌더링 될 문구
    if (loading) return <div>로딩 중...</div>;

    // 에러 발생 시 렌더링 될 문구
    if (error) return <div>에러가 발생했습니다</div>

    // users 값이 없을 때 null을 보여주도록 처리
    if (!users) return null;

    return (
        <ul>
            {/*users 배열을 렌더링*/}
            {users.map((users) => (
                <li key = {users.id}>
                    {users.username} ({users.name})
                </li>
            ))}
        </ul>
    );
};

export default Practice;