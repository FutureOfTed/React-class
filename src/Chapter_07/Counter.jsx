import React, {useState} from "react";

// function Counter(props) {
//     var count = 1;
//     return (
//         <div>
//             <p> 총 {count}번 클릭했습니다. </p>
//             <button onClick = {() => count++}>
//                 클릭
//             </button>
//         </div>
//     );
// }
// export default Counter;

// function Counter(props) {
//     const [ count, setCount ] = useState(0);

//     return (
//         <div>
//             <p> 총 {count}번 클릭했습니다. </p>
//             <button onClick = {()=> setCount(count + 1)}>
//                 클릭
//             </button>
//         </div>
//     );
// }
// export default Counter;

function Counter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count} 번 클릭했습니다.`;
    });

    return (
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick = {() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
export default Counter;