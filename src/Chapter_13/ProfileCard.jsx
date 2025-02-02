import React from "react";
import Card from "./Card";

const profiles = [
    {
        id : 1,
        title : "MIYEON",
        color : "red",
        intro : "저의 생일은 1997년 1월 31일입니다.",
        src : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTlfMTcg%2FMDAxNzI0MDE4MTY4Nzgx.IQBK6_A3vC25_MUvx2EWPweC93ikFXSB-u9rhEOYh-4g.B9CX_DEIVvDX1ZzqGqlkaAAKJ9OdqU7narjjr_lIzSAg.JPEG%2Fofficial%25A3%25DFg%25A3%25DFi%25A3%25DFdle%25A3%25DF3396841741347501347%25A3%25DF7162738243%25A3%25DF0%25A3%25DF1000x1000.jpg&type=sc960_832"
    },
    {
        id : 2,
        title : "WUQI",
        color : "blue",
        intro : "저의 생일은 1999년 09월 23일입니다.",
        src : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjlfMTY2%2FMDAxNzE5NjM4NjkyNDg0.tVQ30JUfbIsYtHQr-XBMnhae6lN68R5et2Eq2zC-4zIg.00axUV81pVZXLJiGSFqpTTytL1d_4ZEHbS-kTAhyIucg.JPEG%2F240628-G-I-DLE-SNS-Updates-with-YUQI-Keep-Running-2.jpeg&type=a340"
    },
    {
        id : 3,
        title : "SOYEON",
        color : "green",
        intro : "저의 생일은 1998년 08월 26일입니다.",
        src : "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb5%2Fcd%2F7f%2Fb5cd7f456fc74cdbd089934d79587154.jpg&type=a340"
    }
]

function ProfileCard(props) {
    return (
        <div style = {{display : "flex"}}>
            {profiles.map((li) => {
                return (
                    <Card key = {li.id} title = {li.title} backgroundColor = {li.color}>
                        <p>안녕하세요. {li.title}입니다.</p>
                        <p>{li.intro}</p>
                        <img src = {li.src} style = {{width: "300px"}}></img>
                    </Card>
                );
            })}
        </div>
    );
}
export default ProfileCard;

// function ProfileCard(props) {
//     return (
//         <Card title = "Soo" backgroundColor = "#4ea04e">
//             <p>안녕하세요. 이수경입니다.</p>
//             <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
//         </Card>
//     );
// }
// export default ProfileCard;