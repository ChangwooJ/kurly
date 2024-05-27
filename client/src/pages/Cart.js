import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../redux/actions/cartActions";

import '../css/Cart.css';

const Cart = () => {
    const [checkbox, setCheckbox] = useState([]);
    const nickname = sessionStorage.getItem("ss_nickname");
    const [items, setItem] = useState(0);
    const [checkAll, setCheckAll] = useState(false);
    const [quantity, setQuantity] = useState({});
    const [price, setPrice] = useState({});
    const [originalPrice, setOriginalPrice] = useState({}); // 원래 가격을 저장할 상태

    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts.carts);

    useEffect(() => {
        dispatch(fetchCarts());
    }, [dispatch]);

    useEffect(() => {
        if (carts && Array.isArray(carts)) {
            const mycart = carts.filter(cart => cart.user_nickname === nickname);
            setItem(mycart.length);

            const initialCheckbox = {};
            const initialQuantities = {};
            const initialPrices = {};
            const initialOriginalPrices = {}; // 원래 가격을 초기화

            mycart.forEach(cart => {
                initialPrices[cart.id] = cart.disc_price;
                initialOriginalPrices[cart.id] = cart.disc_price; // 원래 가격 저장
                initialQuantities[cart.id] = Number(cart.num);
                initialCheckbox[cart.id] = false;
            });

            setPrice(initialPrices);
            setOriginalPrice(initialOriginalPrices); // 원래 가격 설정
            setQuantity(initialQuantities);
            setCheckbox(initialCheckbox);
        }
    }, [carts, nickname]);

    const CheckAll = () => {
        const temp = !checkAll;
        setCheckAll(temp);

        for (let i = 0; i < checkbox.length; i++) {
            setCheckbox(i + 1, temp);
        }
    };

    const CheckOne = (id) => {
        setCheckbox(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const updateTotalPrice = (id, quantity) => {
        const disc_price = originalPrice[id]; // 원래 가격을 사용
        if (disc_price) {
            const tempPrice = disc_price.replace(/[,]/gim, '');
            const totalPrice = (tempPrice * quantity).toLocaleString('en-US');
            setPrice(prevState => ({
                ...prevState,
                [id]: totalPrice
            }));
        }
    };

    return (
        <cart>
            <div className="cartP_wrap">
                <h2>장바구니</h2>
                <div className="cart_wrap">
                    <div className="cart_main_wrap">
                        <div className="cart_checkBar">
                            <input type="checkbox" id="cart0" checked={checkAll} onChange={CheckAll} />
                            <label htmlFor="cart0"></label>전체선택
                            <div className="separator"></div>
                            <button className="selc_delete">선택삭제</button>
                        </div>
                        <div className="cart_main">
                            {items === 0 ? (
                                <div className="cart_empty">장바구니에 담긴 상품이 없습니다.</div>
                            ) : (
                                carts.filter(cart => cart.user_nickname === nickname).map((cart) => (
                                    <div className="cart_item" key={cart.id}>
                                        <label>
                                            <input type="checkbox" className="cart_list" checked={checkbox[cart.id] || false} onChange={() => CheckOne(cart.id)} />
                                            <p className="cart_title">{cart.title}</p>
                                            <Quantity id={cart.id} quantity={quantity[cart.id]} setQuantity={setQuantity} price={price[cart.id]} updateTotalPrice={updateTotalPrice} />
                                            <p className="cart_price">{price[cart.id]}</p>
                                        </label>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="cart_side_wrap">

                    </div>
                </div>
                <div className="order">
                    <input className="order_bt" type="button" value="주문하기" />
                </div>
            </div>
        </cart>
    );

    function Quantity({ id, quantity, setQuantity, price, updateTotalPrice }) {
        const cal = (num) => {
            if (num < 0 && quantity > 1) {
                setQuantity(prevState => {
                    const newQuantity = prevState[id] + num;
                    updateTotalPrice(id, newQuantity);
                    return {
                        ...prevState,
                        [id]: newQuantity
                    };
                });
            } else if (num > 0) {
                setQuantity(prevState => {
                    const newQuantity = prevState[id] + num;
                    updateTotalPrice(id, newQuantity);
                    return {
                        ...prevState,
                        [id]: newQuantity
                    };
                });
            }
        };

        return (
            <div className="quan_bt">
                <input type="button" value="–" onClick={() => cal(-1)} />
                {quantity}
                <input type="button" value="+" onClick={() => cal(1)} />
            </div>
        );
    }
}

export default Cart;
