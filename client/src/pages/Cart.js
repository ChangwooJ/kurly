import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../redux/actions/cartActions";

const Cart = () => {
    const [checkbox, setCheckbox] = useState([]);
    const nickname = sessionStorage.getItem("ss_nickname");
    const [items, setItem] = useState(0);
    const [checkAll, setCheckAll] = useState(false);
    const [quantity, setQuantitiy] = useState({});
    const [price, setPrice] = useState({});

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
            mycart.forEach(cart => {
                initialPrices[cart.id] = cart.disc_price;
                initialQuantities[cart.id] = Number(cart.num);
                initialCheckbox[cart.id] = false;
            });
            setPrice(initialPrices);
            setQuantitiy(initialQuantities);
            setCheckbox(initialCheckbox);
        }
    }, [carts, nickname]);

    const CheckAll = () => {
        const temp = !checkAll;
        setCheckAll(temp);

        for(let i=0; i<checkbox.length; i++){
            setCheckbox[i+1]()
        }
    }

    const CheckOne = (id) => {
    }

    return(
        <cart>
            <div className="cartP_wrap">
                <h2>장바구니</h2>
                <div className="cart_wrap">
                    <div className="cart_main_wrap">
                        <div className="cart_checkBar">
                            <input type="checkbox" id="cart0" checked={checkAll} onChange={CheckAll}/>
                            <label for="cart0"></label>전체선택
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
                                            <input type="checkbox" className="cart_list" checked={checkbox[cart.id].checked || false} onChange={CheckOne(cart.id)}/>
                                            {cart.title}
                                            <Quantity id={cart.id} quantity={quantity[cart.id]} setQuantitiy={setQuantitiy} />
                                            {price[cart.id]}
                                        </label>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="cart_side_wrap">

                    </div>
                </div>
            </div>
        </cart>
    )

    function Quantity({ id, quantity, setQuantitiy }) {
        const cal = (num) => {
            if (num < 0) {
                if (quantity > 1) {
                    setQuantitiy(prevState => ({
                        ...prevState,
                        [id]: prevState[id] + num
                    }));
                }
            } else {
                setQuantitiy(prevState => ({
                    ...prevState,
                    [id]: prevState[id] + num
                }));
            }
        }

        TotalPrice();

        return (
            <div className="quan_bt">
                <input type="button" value="–" onClick={() => cal(-1)} />
                {quantity}
                <input type="button" value="+" onClick={() => cal(1)} />
            </div>
        )
    }

    function TotalPrice(){
        let disc_price = price; //price가 문자열로 인식이 안됨 수정필요
        let tempPrice = disc_price.replace(/[,]/gim, '');
        let totalPrice = tempPrice * quantity;

        totalPrice = totalPrice.toLocaleString('en-US');
        setPrice(totalPrice);
    }
}

export default Cart;