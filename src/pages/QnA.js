import React from "react";
import qnas from "../elements/Qnas";

import "../css/QnA.css";

const QnA = () => {
    return (
        <div className="qna_list_wrap">
            <div className="qna_head_wrap">
                <table> {/* table 태그를 사용하여 테이블을 감싸줍니다 */}
                    <thead>
                        <tr>
                            <th className="title">제목</th> {/* width 속성을 설정하여 너비를 조정합니다 */}
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
            <td className="writer">{list.writer}</td>
            <td className="date">{list.date}</td>
            <td className="checked">{checked}</td>
        </tr>
    )
}

export default QnA;