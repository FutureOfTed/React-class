import React, { useState } from "react";
import styled from "styled-components";
import { idDuplicateCheck } from "./IdCheck";

const SignupPageHeader = styled.header`
    width : 100%;
    padding : 20px 0;
    text-align : center;
    font-size : 24px;
    font-weight : bold;
    background-color : #007bff;
    color : white;
    box-shadow : 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;      // 반대축
    justify-content : center;  // 중심축
    height : 100vh;
    background-color : #f5f5f5;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column; // 세로 정렬
    gap: 10px;  // 아이디 입력란과 버튼 사이에 간격 추가
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border-color: #007bff;
        outline: 1px solid blue;
    }
`;

const ButtonContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 20px;

    button {
        padding : 10px 20px;
        font-size : 16px;
        background-color : #007bff;
        color : white;
        border : none;
        border-radius : 4px;
        cursor : pointer;
        transition : background-color 0.3s;
        
        &:hover {
            background-color : #0056b3;
        }
    }
`;

const Checkbutton = styled.button`
    background-color : #007bff;
    color : white;
    border : none;
    padding : 8px 12px;
    cursor : pointer;
    margin-left : 8px;
    border-radius : 4px;
    &:hover {
        background-color : #0056b3;
    }
`;

const ErrorMessage = styled.small`
    color : red;
    font-size : 12px;
    font-wegith : 600;
    margin-top : 5px;
    display : block;
`

function Sign_in() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [confirm, setConfirm] = useState('');
    
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    // 중복 검사 했는지 안 했는지
    const [isIdCheck, setIsIdCheck] = useState(false);
    // 아이디 사용 가능한지 아닌지
    const [isIdAvailable, setIsIdAvailable] = useState(false);

    const onChangeIdHandler = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        idCheckHandler(idValue);
    }

    const onChangePasswordHandler = (e) => {
        const {name, value} = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirm);
        } else {
            setConfirm(value);
            passwordCheckHandler(password, value);
        }
    }

    const idCheckHandler = async (id) => {
        const idRegex = /^[a-z\d]{5,10}$/;
        if (id === '') {
            setIdError('아이디를 입력해주세요.')
            setIsIdAvailable(false);
            return false;
        } else if (!idRegex.test(id)) {
            setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
            setIsIdAvailable(false);
            return false;
        }

        if (id.length < 10) return;

        try {
            const responseData = await idDuplicateCheck(id);
            if (responseData) {
                setIdError('사용 가능한 아이디입니다.');
                setIsIdCheck(true);
                setIsIdAvailable(true);
                return true;
            } else {
                setIdError('이미 사용 중인 아이디입니다.');
                setIsIdCheck(false);
                return false;
            }
        } catch (error) {
            alert('서버 오류입니다. 관리자에게 문의하세요.');
            console.error(error);
            return false;
        }
    }

    const passwordCheckHandler = (password, confirm) => {
        const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
        if (password === '') {
            setPasswordError('비밀번호를 입력해주세요.');
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
            return false;
        } else if (confirm !== password) {
            setPasswordError('');
            setConfirmError('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            setPasswordError('');
            setConfirmError('');
            return true;
        }
    }

    const signupHandler = async (e) => {
        e.preventDefault();

        const idCheckresult = await idCheckHandler(id);
        if (idCheckresult) setIdError('');
        else return;
        if (!isIdCheck || !isIdAvailable) {
            alert('아이디 중복 검사를 해주세요.');
            return;
        }

        const passwordCheckResult = passwordCheckHandler(password, confirm);
        if (passwordCheckResult) {
            setPasswordError('');
            setConfirmError('');
        } else {
            return;
        }

        try {
            const responseData = await signup(id, password, confirm);
            if (responseData) {
                localStorage.setItem('loginId', id);
                setOpenModal(true);
            } else {
                alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
            console.error(error);
        }
    }

    return (
        <>
            <SignupPageHeader>회원가입</SignupPageHeader>
            <Wrapper>
                <Form onSubmit = {signupHandler}>
                    <InputWrapper>
                        <InputContainer>
                            <label htmlFor = 'id'>아이디</label>
                            <Input
                                onChange = {onChangeIdHandler}
                                type = "text"
                                id = 'id'
                                name = 'id'
                                value = {id}
                                placeholder = '아이디 입력'
                                theme = 'underLine'
                                maxLength = {10}
                            />
                            <Checkbutton type="button" onClick={idCheckHandler}>중복 확인</Checkbutton>
                            {idError && <ErrorMessage>{idError}</ErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor = 'id'>비밀번호</label>
                            <Input
                                onChange = {onChangePasswordHandler}
                                type = "password"
                                id = 'password'
                                name = 'password'
                                value = {password}
                                placeholder = '비밀번호 입력'
                                theme = 'underLine'
                                maxLength = {16}
                            />
                            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                            <Input
                                onChange = {onChangePasswordHandler}
                                type = "password"
                                id = 'confirm'
                                name = 'confirm'
                                value = {confirm}
                                placeholder = '비밀번호 확인'
                                them = 'underLine'
                                maxLength = {16}
                            />
                            {confirmError && <ErrorMessage>{confirmError}</ErrorMessage>}
                        </InputContainer>
                    </InputWrapper>
                    <ButtonContainer>
                        <button type = "submit">가입하기</button>
                    </ButtonContainer>
                </Form>
                {setOpenModal ? openModal && (<SignupModal />) : null}
            </Wrapper>
        </>
    )
};

export default Sign_in;