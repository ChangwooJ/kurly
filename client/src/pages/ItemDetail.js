import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/actions/itemActions';
import { useParams, useNavigate } from "react-router-dom";
import Review from "./Review";
import QnA from "./QnA";

import '../css/ItemDetail.css';
import axios from "axios";

const ItemDetail = () => {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === 'true';
    const nickname = sessionStorage.getItem("ss_nickname");
    const { item_id } = useParams(); //동적 라우트 매개변수는 라우트 설정과 훅에서의 이름이 서로 일치해야함.
    const [quantity, setQuantitiy] = useState(1);
    const [totalPrice, setTotalPrice] = useState("0");

    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const itemdetail = items.find(item => item.id === parseInt(item_id));

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    if (!itemdetail) { //렌더링 제어.
        return <div>Loading...</div>
    }

    const addCart = async () => {
        if(isLoggedIn === true){
            try {
                const response = await axios.post('http://localhost:8000/api/addcart', { nickname: nickname, item_id: itemdetail.id, num: quantity });
                console.log(response.data);
                alert('장바구니 담기 완료');
            } catch (err) {
                console.error(err);
            }
        }
        else {
            alert('로그인을 먼저 해주세요.');
            navigate("/login");
        }
    }

    return (
        <article>
            <div className="info_wrap">
                <div className="info_img">
                    <img src={itemdetail.src} />
                </div>
                <div className="info_text_wrap">
                    <div className="main_info">
                        <p className="title">{itemdetail.title}</p>
                        <p className="disc">{itemdetail.discount}%</p>
                        <p className="disc_price">{itemdetail.disc_price}원</p>
                        <p className="price">{itemdetail.price}원</p>
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
                                {itemdetail.title}
                                <Quantity quantity={quantity} setQuantitiy={setQuantitiy} />
                                <p className="sel_discP">{itemdetail.disc_price}원</p>
                                <p className="sel_price">{itemdetail.price}원</p>
                            </dd>
                        </dl>
                    </div>
                    <div className="price_info">
                        총 상품금액: <h2>{totalPrice}</h2><h3>원</h3>
                    </div>
                    <div className="add_Bt">
                        <button >♡</button>
                        <button className="add_cart" onClick={addCart}>장바구니 담기</button>
                    </div>
                </div>
            </div>
            <Review item_id={item_id}></Review>
            <QnA item_id={item_id}></QnA>
        </article>
    )

    function Quantity(props) {
        const cal = (num) => {
            if (num < 0) {
                if (props.quantity > 1) {
                    props.setQuantitiy((prev) => prev + num);
                }
            } else props.setQuantitiy((prev) => prev + num);
        }

        TotalPrice();

        return (
            <div className="quan_bt">
                <input type="button" value="–" onClick={() => cal(-1)} />
                {props.quantity}
                <input type="button" value="+" onClick={() => cal(1)} />
            </div>
        )
    }

    function TotalPrice(){
        let disc_price = itemdetail.disc_price;
        let tempPrice = disc_price.replace(/[,]/gim, '');
        let totalPrice = tempPrice * quantity;

        totalPrice = totalPrice.toLocaleString('en-US');
        setTotalPrice(totalPrice);
    }

}

export default ItemDetail;