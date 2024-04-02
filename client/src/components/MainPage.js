import React, { useEffect, useState } from "react";
import ItemSlide from "./ItemSlide";
import "../css/MainPage.css"
import { img } from "../images/imgidx";
import Axios from 'axios';

const MainPage = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:8000/api/item').then((response)=>{
            setItems(response.data);
        })
    },[])

    return(
        <React.Fragment>
            <div className="main_page">
                <h2>이주의 혜택<img src={img.week} height="35"/> {">"}</h2>
                <h4 className="desc">지금 만날 수 있는 혜택 상품만 모아</h4>
                <ItemSlide items={items}></ItemSlide>
            </div>
        </React.Fragment>
    )
}

export default MainPage;

//ItemSlide.js로 모든 카테고리의 쇼핑 슬라이드를 만드려고 했으나,
//ItemSlide.js에서 props.map()같은 방식의 사용이 안된다.
//다른 방법을 통해 구조만 남겨두고 api를 바꾸는 방식을