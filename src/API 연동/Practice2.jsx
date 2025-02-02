// 2. 버튼을 눌러서 API 재요청
// (fetchUsers 함수를 바깥으로 꺼내주고, 버튼을 만들어서 해당 함수 연결)

import React, {useState, useEffect} from "react";
import axios from "axios";

function Practice2() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    // 함수를 바깥으로 꺼내기
    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {/* users 배열을 렌더링 */}
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

export default Practice2;