import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import WeekItem from "../images/WeekItem";
import { img } from "../images/imgidx";
import "../css/ItemSlide.css";
import 'swiper/css';

const ItemSlide = () => {
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
                    {WeekItem.map((slide) => (//리덕스 사용?
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
                    ))}
                </Swiper>
                <button className="swiper-next swiper_bt">{">"}</button>
            </div>
        </React.Fragment>
    )
}

export default ItemSlide;
//swiper 선택자가 따로 있음
//품목 할인가 자동 구성 필요(소숫점 2번째), 가격의 ','을 제외하고 숫자로 인식 필요