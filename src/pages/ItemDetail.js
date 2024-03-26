import React, { useState } from "react";
import WeekItem from "../images/WeekItem";
import { useParams } from "react-router-dom";
import Review from "./Review";
import QnA from "./QnA";

import '../css/ItemDetail.css';

const ItemDetail = () => {
    const { item } = useParams(); //동적 라우트 매개변수는 라우트 설정과 훅에서의 이름이 서로 일치해야함.

    const [quantity, setQuantitiy] = useState(1);

    return (
        <article>
            <div className="info_wrap">
                <div className="info_img">
                    <img src={WeekItem[item - 1].src} />
                </div>
                <div className="info_text_wrap">
                    <div className="main_info">
                        <p className="title">{WeekItem[item - 1].title}</p>
                        <p className="disc">{WeekItem[item - 1].discount}%</p>
                        <p className="disc_price">{WeekItem[item - 1].disc_price}원</p>
                        <p className="price">{WeekItem[item - 1].price}원</p>
                    </div>
                    <div className="sub_info"> {/*추후에 유동적인 데이터 표시가 가능하게 수정필요*/}
                        <dl>
                            <dt>배송</dt>
                            <dd>샛별배송<h5>23시 전 주문시 내일 아침 7시 전 도착<br />(대구·부산·울산 샛별배송 운영시간 별도 확인)</h5></dd>
                        </dl>
                        <dl>
                            <dt>판매자</dt>
                            <dd>컬리</dd>
                        </dl>
                        <dl>
                            <dt>포장타입</dt>
                            <dd>상온(종이포장)<h5>택배배송은 에코포장이 스티로폼으로 대체됩니다.</h5></dd>
                        </dl>
                        <dl>
                            <dt>판매단위</dt>
                            <dd>1개</dd>
                        </dl>
                        <dl className="item_select">
                            <dt>상품선택</dt>
                            <dd>
                                {WeekItem[item - 1].title}
                                <Quantity quantity={quantity} setQuantitiy={setQuantitiy}/>
                                <p className="sel_discP">{WeekItem[item-1].disc_price}원</p>
                                <p className="sel_price">{WeekItem[item-1].price}원</p>
                            </dd>
                        </dl>
                    </div>
                    <div className="price_info">
                        총 상품금액: <h2>{WeekItem[item-1].disc_price}</h2><h3>원</h3>
                    </div>
                    <div className="add_Bt">
                        <button >♡</button>
                        <button className="add_cart">장바구니 담기</button>
                    </div>
                </div>
            </div>
            <Review item={item}></Review>
            <QnaTitle></QnaTitle>
        </article>
    )
}

function Quantity(props) {
    const cal = (num) => {
        if(num < 0){
            if(props.quantity > 1){
                props.setQuantitiy((prev) => prev + num);
            }
        } else props.setQuantitiy((prev) => prev + num);
    }

    return (
        <div className="quan_bt">
            <input type="button" value="–" onClick={()=>cal(-1)}/>
            {props.quantity}
            <input type="button" value="+" onClick={()=>cal(1)}/>
        </div>
    )
}

function QnaTitle(props) {
    return(
        <div className="qna_wrap">
            <div className="qna_button">
                <button>문의하기</button>
            </div>
            <div className="qna_title_wrap">
                <h2 className="qna_title">상품 문의</h2>
                <ul>
                    <li>상품에 대한 문의를 남기는 공간입니다.
                        해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                    <li>배송관련, 주문(취소,교환,환불)관련 문의 및 요청사항은 마이컬리 내 1:1문의에 남겨주세요.</li>
                </ul>
            </div>
            <QnA></QnA>
        </div>
    )
}

export default ItemDetail;
//개수 조절할때 총 가격 변동 구현 필요