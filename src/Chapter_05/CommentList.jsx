import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id : 1,
        name : "제니",
        comment : "안녕하세요, 블랙핑크입니다.",
    },
    {
        id : 2,
        name : "로제",
        comment : "리액트 재미있어요~!",
    },
    {
        id : 3,
        name : "리사",
        comment : "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment key = {comment.id} name = {comment.name} comment = {comment.comment}/>
                );
            })}
        </div>
    );
}
export default CommentList;



// function CommentList(props) {
//     return (
//         <div>
//             <Comment name = {"제니"} comment = {"안녕하세요, 블랙핑크입니다."}/>
//         {/* <Comment name = {"로제"} comment = {"리액트 재미있어요."}>
//         */}
//         </div>
//     );
// }
// export default CommentList;