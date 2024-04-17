import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchQnas } from "../redux/actions/qnaActions";

import "../css/QnA.css";

const QnA = (props) => {
    let item_id = props.item_id;

    const dispatch = useDispatch();
    const qnalist = useSelector(state => state.qnas.qnas);
    const qnas = qnalist.filter(qna => qna.item_id === parseInt(item_id));

    useEffect(() => {
        dispatch(fetchQnas());
    }, []);

    return (
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
            <div className="qna_list_wrap">
                <div className="qna_head_wrap">
                    <table>
                        <thead>
                            <tr>
                                <th className="title">제목</th>
                                <th className="writer">작성자</th>
                                <th className="date">작성일</th>
                                <th className="checked">답변상태</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="qna_list">
                    <table>
                        <tbody>
                            {qnas.map((list) => (
                                <Qna_List list={list}></Qna_List>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Qna_List(props) {
    const list = props.list;
    let checked = "";
    let strwriter = list.nickname;
    let arrwriter = [...strwriter];

    for (let i = 0; i < arrwriter.length; i++) {
        if (i === 1) {
            arrwriter[i] = "*";
        }
    }
    arrwriter = arrwriter.join('');

    if (list.secret === 1) {
        list.title = "비밀글입니다.";
    }

    if (list.answered === 1) {
        checked = "답변완료";
    } else if (list.answered === 0) {
        checked = "답변대기";
    }
    console.log(list.date);
    //boolean 값이 0 or 1로 나오는데 SELECT IF 문으로 해결은 가능하나 동시에 쓰는 법을 모름.
    return (
        <tr key={list.id}>
            <td className="title">{list.title}</td>
            <td className="writer">{arrwriter}</td>
            <td className="date">{list.date}</td>
            <td className="checked">{checked}</td>
        </tr>
    )
}

export default QnA;
//문의 순서(최근 날짜가 상단에 오게 정렬)
//시간이 T00:00:00.000Z이런 형식으로 나오게 되는 문제.