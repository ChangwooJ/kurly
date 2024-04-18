import React, { useState } from "react";

import "../css/SignUp.css";

const SignUp = () => {
    const [yyyy, setYyyy] = useState();
    const [mm, setMm] = useState();
    const [dd, setDd] = useState();

    return (
        <signup>
            <div className="signup_wrap">
                <h2>회원가입</h2>
                <div className="form_top">
                    <span className="star">*</span>
                    필수입력사항
                </div>
                <div className="signup_form">
                    <form>
                        <div className="signup_info">
                            <div className="signup_id">
                                <div className="title">아이디<span className="star">*</span></div>
                                <div className="id info">
                                    <input type="text" placeholder="아이디를 입력해주세요" />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="중복확인"/>
                                </div>
                            </div>
                            <div className="signup_pw">
                                <div className="title">비밀번호<span className="star">*</span></div>
                                <div className="pw info">
                                    <input type="text" placeholder="비밀번호를 입력해주세요" />
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
                                    <input type="text" placeholder="이름을 입력해주세요" />
                                </div>
                            </div>
                            <div className="signup_email">
                                <div className="title">이메일<span className="star">*</span></div>
                                <div className="email info">
                                    <input type="text" placeholder="예: marketkurly@kurly.com" />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="중복확인"/>
                                </div>
                            </div>
                            <div className="signup_ph">
                                <div className="title">휴대폰<span className="star">*</span></div>
                                <div className="ph info">
                                    <input type="text" placeholder="숫자만 입력해주세요" />
                                </div>
                                <div className="check_button">
                                    <input className="bt_style" type="button" value="인증번호 받기"/>
                                </div>
                            </div>
                            <div className="signup_address">
                                <div className="title">주소<span className="star">*</span></div>
                                <div className="address info">
                                    <input className="bt_style" type="button" value="주소 검색"/>
                                </div>
                            </div>
                            <div className="address_plus">
                                <div className="title"></div>
                                <div className="info">배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                            </div>
                            <div className="signup_gender">
                                <div className="title">성별</div>
                                <div className="gender">
                                    <div className="man"><input type="radio" name="gender" value="남자"/><span>남자</span></div>
                                    <div className="woman"><input type="radio" name="gender" value="여자"/><span>여자</span></div>
                                    <div className="none"><input type="radio" name="gender" value="선택안함" checked/><span>선택안함</span></div>
                                </div>
                            </div>
                            <div className="signup_birth">
                                <div className="title">생년월일</div>
                                <div className="birth_date info"> {/* input date랑 다르다고 판단. number의 글자수 제한 안됨. */}
                                    <input type="number" placeholder="YYYY"/><div>/</div>
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
                                <div></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </signup>
    )
}

export default SignUp;