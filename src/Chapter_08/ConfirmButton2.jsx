import React, {useState} from "react";

function ConfirmButton2 (props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleClick = () => {
        setIsConfirmed ((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button onClick = {handleClick} disabled = {isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}
export default ConfirmButton2;