import React from "react";

function Food(props){
    return(
        <div>
            <h1>{`이 음식의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 음식의 가격은 ${props.price}원입니다.`}</h2>
        </div>
    );
}
export default Food;