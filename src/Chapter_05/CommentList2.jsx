import React from "react";
import Comment from "./Comment";
import DdoryImage1 from "./또리사진1.jpg";
import DdoryImage2 from "./또리사진2.jpg";
import DdoryImage3 from "./또리사진3.jpg";
import DdoryImage4 from "./또리사진4.jpg";
import DdoryImage5 from "./또리사진5.jpg";

const comments = [
    {
        id : 1,
        name : "또리1",
        comment : "내가 진짜 또리야!",
        image : DdoryImage1,
    },
    {
        id : 2,
        name : "또리2",
        comment : "내가 또리1보다 귀여워!",
        image : DdoryImage2,
    },
    {
        id : 3,
        name : "또리3",
        comment : "내가 또리2보다는 착해.",
        image : DdoryImage3,
    },
    {
        id : 4,
        name : "또리4",
        comment : "아냐 내가 진짜 또리야!",
        image : DdoryImage4,
    },
    {
        id : 5,
        name : "또리5",
        comment : "또리1, 또리4는 거짓말을 하고 있어!",
        image : DdoryImage5,
    }
];

function CommentList2(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment key = {comment.id} name = {comment.name} comment = {comment.comment} image = {comment.image}/>
                );
            })}
        </div>
    );
}
export default CommentList2;