import React from "react";
import { img } from "../images/imgidx";
import "../css/header.css";

const Header = () => {
    return(
        <header id="header">
            <div className="header_top">
                <div className="user">
                    <div className="user_join">
                        <a href="/signup">회원가입</a>
                    </div>
                    <div className="user_login">
                        <a href="/login">로그인</a>
                    </div>
                    <div className="costomer_service">
                        <a href="/user/service">고객센터</a>
                    </div>
                </div>
            </div>
            <div className="header_middle">
                <div className="logo">
                        <a href="/"><img src={img.kurly}/></a>
                </div>
                <div className="search">
                    <input type="text" placeholder="검색어를 입력해주세요" />
                    <img src={img.search}/>
                </div>
                <div className="myitem_info">
                    <div className="delivery_address">
                        <a href="/mypage/mysetting/address"><img src={img.location}/></a>
                    </div>
                    <div className="dibs">
                        <a href="/mypage/myitem/dips"><img src={img.dips}/></a>
                    </div>
                    <div className="shopping_cart">
                        <a href="/mypage/myitem/cart"><img src={img.cart}/></a>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="main_menu">
                    <ul>
                        <li className="menu"><a href="/menu/category"><img src={img.category}/> 카테고리</a>
                            <ul className="category"> {/*나중에 템플릿화하기+db활용*/}
                                <li><a href="/menu/category/vegetable"><img src={img.vege} width="25" height="25"/>  채소</a></li>
                                <li><a href="/menu/category/fruit"><img src={img.fruit} width="25" height="25"/>  과일</a></li>
                                <li><a href="/menu/category/fisheries"><img src={img.fish} width="25" height="25"/>  수산</a></li>
                                <li><a href="/menu/category/drink"><img src={img.drink} width="25" height="25"/>  음료</a></li>
                                <li><a href="/menu/category/meal_kit"><img src={img.meal} width="25" height="25"/>  밀키트</a></li>
                            </ul>
                        </li>
                        <li className="menu"><a href="/menu/new_item">신상품</a></li>
                        <li className="menu"><a href="/menu/best_item">베스트</a></li>
                        <li className="menu"><a href="/menu/frugal_shop">알뜰쇼핑</a></li>
                        <li className="menu"><a href="/menu/sale">특가/혜택</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;