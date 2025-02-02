import React from "react";

const styles = {
    wrapper: {
        margin : 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "3px solid brown",
        borderRadius: 30,
        backgroundColor : "lightgray",
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 14,
    },
};

function Comment(props) {
    return (
        <div style = {styles.wrapper}>
            <div style = {styles.imageContainer}>
                <img alt = ""
                src = {props.image}
                style = {styles.image}
                />
            </div>

            <div style = {styles.contentContainer}>
                <span style = {styles.nameText}> {props.name} </span>
                <span style = {styles.commentText}> {props.comment} </span>
            </div>
        </div>
    );
}
export default Comment;

// function Comment(props) {
//     return (
//         <div>
//             <h1>내가 만든 첫 컴포넌트</h1>
//         </div>
//     );
// }
// export default Comment;