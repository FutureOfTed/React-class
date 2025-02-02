import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color : grey;
    border : 2px solid palevioletred;
`;
const RoundedButton = styled(Button)`
    border-radius : 16px
`;

function Sample2(props) {
    return (
        <div>
            <Button>Normal</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    );
}
export default Sample2;