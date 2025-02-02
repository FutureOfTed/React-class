import React from "react";
import Food from "./Food";

function Price(props){
    return(
        <div>
            <Food name="제육덮밥" price={6000}></Food>
            <Food name="불고기" price={6500}></Food>
            <Food name="투움바파스타" price={7000}></Food>
            <Food name="돈까스" price={8000}></Food>
        </div>
    );
}
export default Price;