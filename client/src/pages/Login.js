import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import user from "../elements/User";
import "../css/Login.css";

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const checkUser = (e) => {
        e.preventDefault();
        const state = user.find(u => u.id === id && u.pw === pw);
        if(state){
            navigate(-1);
        }else{
            alert('아이디 또는 비밀번호를 확인해주세요.');
        }
    }

    return (
        <login>
            <div className="login_wrap">
                <h2>로그인</h2>
                <form onSubmit={checkUser}>
                    <div className="login_form">
                        <p><input 
                            className="login id" 
                            type="text" name="id" 
                            placeholder="아이디를 입력해주세요."
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            /></p>
                        <p><input 
                            className="login pw" 
                            type="password" name="pw" 
                            placeholder="비밀번호를 입력해주세요."
                            value={pw}
                            onChange={(e)=>setPw(e.target.value)}
                            /></p>
                    </div>
                    <div className="find_my_account">
                        <a href="/find_my/id">아이디 찾기</a>
                        <div className="separator"></div>
                        <a href="/find_my/pw">비밀번호 찾기</a>
                    </div>
                    <div className="login_bt_wrap">
                        <input className="login_bt" type="submit" value="로그인" />
                        <input className="sign_up" type="button" value="회원가입" />
                    </div>
                </form>
            </div>
        </login>
    )
}

export default Login;
//별다른 효과는 아직 없는 상태. 로그인에 성공하면 홈페이지로 이동하는게 전부이다.
//이후 백엔드 연결시에 상태업데이트가 필요하고, 쿠키나 세션에 대한 개념이 없기에 추가적인 공부나 혹은 대체법이 필요.
//구현이 어느정도 되면 로그인 상태를 이용해 다른 페이지에 영향을 미치도록 세부적인 조정이 필요하다.