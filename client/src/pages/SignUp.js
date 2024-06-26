import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userAcions';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/SignUp.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_id: '',
        user_pw: '',
        nickname: '',
        email: ''
    });
    const [code, setCode] = useState('');
    const [codeInput, setCodeInput] = useState(false);

    const dispatch = useDispatch();
    const userlist = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const change = (e) => {
        if (e.target.name === 'code') setCode(e.target.value);
        else setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const check_ID = () => {
        const state = userlist.find(user => user.user_id === userData.user_id)
        if (state) {
            alert('중복된 아이디입니다.');
            setUserData({ ...userData, user_id: '' });
        } else {
            alert('중복되지 않은 아이디입니다.')
        }
    }

    const email_verification = () => {
        axios.post('http://localhost:8000/api/signup_email', { email: userData.email })
            .then(() => {
                alert('전송완료');
                setCodeInput(true);
            })
            .catch((err) => {
                console.log(err);
                alert('전송실패');
            });
    }
    

    const code_check = () => {
        axios.post('http://localhost:8000/api/code_check', { code: code, email: userData.email })
            .then(() => {
                alert('이메일 인증에 성공했습니다.');
            })
            .catch((err) => {
                console.log(err);
                alert('인증 코드 확인에 실패했습니다.');
            });
    }

    const submit = async (e) => {
        const config = { "Content-Type": 'application/json' };
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/signup', userData, config);
            console.log(response.data);
            alert('등록완료');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <signup>
            <div className="signup_wrap">
                <h2>회원가입</h2>
                <div className="form_top">
                    <span className="star">*</span>
                    필수입력사항
                </div>
                <div className="signup_form">
                    <form onSubmit={submit}>
                        <div className="signup_info">
                            <div className="signup_id">
                                <div className="title">아이디<span className="star">*</span></div>
                                <div className="id info">
                                    <input name="user_id" type="text" placeholder="아이디를 입력해주세요"
                                        value={userData.user_id} onChange={change} />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="중복확인" onClick={() => check_ID()} />
                                </div>
                            </div>
                            <div className="signup_pw">
                                <div className="title">비밀번호<span className="star">*</span></div>
                                <div className="pw info">
                                    <input name="user_pw" type="text" placeholder="비밀번호를 입력해주세요"
                                        onChange={change} />
                                </div>
                            </div>
                            <div className="signup_pw_check">
                                <div className="title">비밀번호확인<span className="star">*</span></div>
                                <div className="pw_check info">
                                    <input type="text" placeholder="비밀번호를 한번 더 입력해주세요" />
                                </div>
                            </div>
                            <div className="signup_name">
                                <div className="title">이름<span className="star">*</span></div>
                                <div className="name info">
                                    <input name="nickname" type="text" placeholder="이름을 입력해주세요"
                                        onChange={change} />
                                </div>
                            </div>
                            <div className="signup_email">
                                <div className="title">이메일<span className="star">*</span></div>
                                <div className="email info">
                                    <input name="email" type="email" placeholder="예: marketkurly@kurly.com"
                                        onChange={change} />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="인증코드 받기" onClick={email_verification} />
                                </div>
                            </div>
                            {codeInput && (
                                        <div className="code info">
                                            <input name="code" type="text" placeholder="인증 코드를 입력해주세요."
                                                value={code} onChange={change} />
                                            <div className="check_button">
                                                <input className="bt_style" type="button" value="인증코드 확인" onClick={code_check} />
                                            </div>
                                        </div>
                                    )}
                            <div className="signup_ph">
                                <div className="title">휴대폰<span className="star">*</span></div>
                                <div className="ph info">
                                    <input type="text" placeholder="숫자만 입력해주세요" />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="인증번호 받기" />
                                </div>
                            </div>
                            <div className="signup_address">
                                <div className="title">주소<span className="star">*</span></div>
                                <div className="address info">
                                    <input className="bt_style" type="button" value="주소 검색" />
                                </div>
                            </div>
                            <div className="address_plus">
                                <div className="title"></div>
                                <div className="info">배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                            </div>
                            <div className="signup_gender">
                                <div className="title">성별</div>
                                <div className="gender">
                                    <div className="man"><input type="radio" name="gender" value="남자" /><span>남자</span></div>
                                    <div className="woman"><input type="radio" name="gender" value="여자" /><span>여자</span></div>
                                    <div className="none"><input type="radio" name="gender" value="선택안함" defaultChecked /><span>선택안함</span></div>
                                </div>
                            </div>
                            <div className="signup_birth">
                                <div className="title">생년월일</div>
                                <div className="birth_date info"> {/* input date랑 다르다고 판단. number의 글자수 제한 안됨. */}
                                    <input type="number" placeholder="YYYY" /><div>/</div>
                                    <input type="number" placeholder="MM" /><div>/</div>
                                    <input type="number" placeholder="DD" />
                                </div>
                            </div>
                        </div>
                        <div className="terms">
                            <div className="title">
                                이용약관동의
                                <span className="star">*</span>
                            </div>
                            <div className="terms_body">
                                <div className="fir">
                                    <input type="checkbox" id="check1" />
                                    <label for="check1"></label>
                                    <span>전체 동의합니다.</span>
                                    <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                </div>
                                <div className="sec">
                                    <input type="checkbox" id="check2" />
                                    <label for="check2"></label>
                                    <span> 이용약관 동의</span>
                                    <span className="sub">(필수)</span>
                                </div>
                                <div className="sec">
                                    <input type="checkbox" id="check3" />
                                    <label for="check3"></label>
                                    <span> 개인정보 수집·이용 동의</span>
                                    <span className="sub">(필수)</span>
                                </div>
                                <div className="sec">
                                    <input type="checkbox" id="check4" />
                                    <label for="check4"></label>
                                    <span> 개인정보 수집·이용 동의</span>
                                    <span className="sub">(선택)</span>
                                </div>
                                <div className="thr">
                                    <input type="checkbox" id="check5" />
                                    <label for="check5"></label>
                                    <span> 무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                                    <span className="sub">(선택)</span>
                                    <div className="thr_sub">
                                        <input type="checkbox" id="check6" />
                                        <label for="check6"></label>
                                        <span>SMS</span>
                                        <input type="checkbox" id="check7" />
                                        <label for="check7"></label>
                                        <span>이메일</span>
                                    </div>
                                </div>
                                <div className="sec">
                                    <input type="checkbox" id="check8" />
                                    <label for="check8"></label>
                                    <span> 본인은 만 14세 이상입니다.</span>
                                    <span className="sub">(필수)</span>
                                </div>
                            </div>
                        </div>
                        <div className="signup_bt_wrap">
                            <input type="submit" value="가입하기" />
                        </div>
                    </form>
                </div>
            </div>
        </signup>
    )
}

export default SignUp;