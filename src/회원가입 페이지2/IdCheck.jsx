import axios from "axios";

export const idDuplicateCheck = async (id) => {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users");
        return response.data.isAvailable;
    } catch (error) {
        console.error("아이디 중복 확인 오류 : ", error);
        return false;
    }
};