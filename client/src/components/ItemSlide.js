import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/actions/itemActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { img } from "../images/imgidx";
import "../css/ItemSlide.css";
import 'swiper/css';

const ItemSlide = () => {
    const dispatch = useDispatch();
    const slides = useSelector(state => state.items.items);

    useEffect(()=>{
        dispatch(fetchItems());
    },[dispatch]);

    return (
        <React.Fragment>
            <div className="slide_wrap">
                <button className="swiper-prev swiper_bt">{"<"}</button>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next"
                    }}
                //끝에 오면 navigation off
                >
                {swiper(slides)}
                </Swiper>
                <button className="swiper-next swiper_bt">{">"}</button>
            </div>
        </React.Fragment>
    )
}

function swiper(props) {
    const swiperSlide = [];
    for (let i = 0; i < props.length; i++) {
        const slide = props[i];
        swiperSlide.push(
            <SwiperSlide>
                <a href={"/itemDetail/" + slide.id}>
                    <div className="slide_item" key={slide.id}><img src={slide.src} width="110%" /></div>
                    <button className="slide_additem"><img src={img.addCart} /> 담기</button>
                    <div className="slide_item_info" key={slide.id}>
                        <p className="item_title">{slide.title}</p>
                        <p className="item_price">{slide.price}{"원"}</p>
                        <p className="item_discount">{slide.discount}{"%"}</p>
                        <p className="item_disc_price">{slide.disc_price}{"원"}</p>
                    </div>
                </a>
            </SwiperSlide>
        );
    }

    return swiperSlide;
}

export default ItemSlide;
//swiper 선택자가 따로 있음
//품목 할인가 자동 구성 필요(소숫점 2번째), 가격의 ','을 제외하고 숫자로 인식 필요