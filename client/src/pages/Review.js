import React from "react";
import { review } from "../images/imgidx";
import WeekItem from "../images/WeekItem";

import "../css/Review.css";

const Review = (props) => {
    let item = props.item - 1;

    return (
        <div className="review_wrap">
            <h2 className="review">상품 후기</h2>
            <div className="review_photo">
                {review.map((idx)=>(
                    <button onClick="loction.href='/review/detail/:id'" key={idx.id}>
                        <img src={idx.src} />
                    </button>
                ))}
            </div>
            <div className="review_top">
                <div className="review_count">총 {review.length}개</div>
                <div className="review_sort">
                    <button className="recommended">추천순</button>
                    <div className="separator"></div>
                    <button className="recent">최근등록순</button>
                </div>
            </div>
            <div className="review_main">
                {review.map((idx) => (
                    <Review_Main idx={idx} item={item}></Review_Main>
                ))}
            </div>
        </div>
    )
}

function Review_Main(props) {
    let strname = props.idx.name;
    let arrname = [...strname];
    let item = props.item;
    
    for (let i = 0; i < arrname.length; i++) {
        if (i > 0) {
            arrname[i] = "*";
        }
    }
    arrname = arrname.join('');

    return (
        <div className="review_main_item">
            <div className="writer_info">
                <p>{arrname}</p>
            </div>
            <article>
                <div className="item"><h3>{WeekItem[item].title}</h3></div>
                <p>{props.idx.desc}</p>
                <div className="photo">
                    <button onClick="location.href='review/detail/:id'"><img src={props.idx.src} /></button>
                </div>
                <footer>
                    <div className="date"><h3>{props.idx.date}</h3></div>
                </footer>
            </article>
        </div>
    )
}

export default Review;
//후기마다 사진 여러개 등록 구현 필요
//후기가 많을경우 후기를 페이지처럼 넘길 수 있도록 구현 필요
//후기 사진 많을 경우 "더보기" 구현 필요
//추후 추천순|최근등록순 정렬 구현 필요