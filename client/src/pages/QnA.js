import React from "react";
import qnas from "../elements/Qnas";

import "../css/QnA.css";

const QnA = () => {
    return (
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
    )
}

function Qna_List(props) {
    const list = props.list;
    let checked = "";
    let strwriter = list.writer;
    let arrwriter = [...strwriter];
    
    for (let i = 0; i < arrwriter.length; i++) {
        if (i === 1) {
            arrwriter[i] = "*";
        }
    }
    arrwriter = arrwriter.join('');

    if (list.secret === true) {
        list.title = "비밀글입니다.";
    }

    if (list.checked === true) {
        checked = "답변완료";
    } else if (list.checked === false) {
        checked = "답변대기";
    }

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