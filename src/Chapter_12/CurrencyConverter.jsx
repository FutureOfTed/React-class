import React, { useState } from "react";
import KoreaFlag from './한국 국기.jpg';
import JapanFlag from './일본 국기.jpg';
import ChinaFlag from './중국 국기.jpg';
import USFlag from './미국 국기.jpg';

const styles = {
    currencyCategory: {
        margin: "20px 0",
        border: "2px solid #ccc",
        borderRadius: "15px",
        padding: "15px",
        background: "linear-gradient(135deg, #f9f9f9, #f3f3f3)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    currencyCategoryKRW: {
        background: "linear-gradient(135deg, #ffe4e1, #ffcccc)",
        borderColor: "#ff9999",
    },
    currencyCategoryJPY: {
        background: "linear-gradient(135deg, #e6e6ff, #ccccff)",
        borderColor: "#9999ff",
    },
    currencyCategoryCNY: {
        background: "linear-gradient(135deg, #e5ffe5, #ccffcc)",
        borderColor: "#99cc99",
    },
    currencyCategoryUSD: {
        background: "linear-gradient(135deg, #e5faff, #cceeff)",
        borderColor: "#66b2ff",
    },
    currencyInputContainer: {
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#ffffff",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    currencyLabelImg: {
        width: "30px",
        height: "25px",
        marginRight: "10px",
    },
};

function toJPY(krw) {
    return krw * 0.1;
}

function toCNY(krw) {
    return krw * 0.005;
}

function toUSD(krw) {
    return krw * 0.00075;
}

function tryConvert(amount, convert) {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
}

function CurrencyInput({ scale, amount, onAmountChange }) {
    const scaleNames = {
        krw: { name: "원", flag: KoreaFlag },
        jpy: { name: "엔", flag: JapanFlag },
        cny: { name: "위안", flag: ChinaFlag },
        usd: { name: "달러", flag: USFlag },
    };

    return (
        <div style={styles.currencyInputContainer}>
            <legend>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img
                        src={scaleNames[scale].flag}
                        alt={`${scale} flag`}
                        style={styles.currencyLabelImg}
                    />
                    금액 입력 ({scaleNames[scale].name})
                </div>
            </legend>
            <input
                type="text"
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
                style={{
                    width: "98%",
                    padding: "10px",
                    fontSize: "1em",
                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                }}
            />
        </div>
    );
}

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [scale, setScale] = useState("krw");

    const handleKRWChange = (amount) => {
        setAmount(amount);
        setScale("krw");
    };

    const handleJPYChange = (amount) => {
        setAmount(amount);
        setScale("jpy");
    };

    const handleCNYChange = (amount) => {
        setAmount(amount);
        setScale("cny");
    };

    const handleUSDChange = (amount) => {
        setAmount(amount);
        setScale("usd");
    };

    const krw =
        scale === "jpy"
            ? tryConvert(amount, (value) => value / 0.1)
            : scale === "cny"
            ? tryConvert(amount, (value) => value / 0.005)
            : scale === "usd"
            ? tryConvert(amount, (value) => value / 0.00075)
            : amount;

    const jpy = scale === "krw" ? tryConvert(amount, toJPY) : amount;
    const cny = scale === "krw" ? tryConvert(amount, toCNY) : amount;
    const usd = scale === "krw" ? tryConvert(amount, toUSD) : amount;

    return (
        <div>
            <div style={styles.currencyCategoryKRW}>
                <h2>한국 원 (KRW)</h2>
                <CurrencyInput
                    scale="krw"
                    amount={krw}
                    onAmountChange={handleKRWChange}
                />
            </div>
            <div style={styles.currencyCategoryJPY}>
                <h2>일본 엔 (JPY)</h2>
                <CurrencyInput
                    scale="jpy"
                    amount={jpy}
                    onAmountChange={handleJPYChange}
                />
            </div>
            <div style={styles.currencyCategoryCNY}>
                <h2>중국 위안 (CNY)</h2>
                <CurrencyInput
                    scale="cny"
                    amount={cny}
                    onAmountChange={handleCNYChange}
                />
            </div>
            <div style={styles.currencyCategoryUSD}>
                <h2>미국 달러 (USD)</h2>
                <CurrencyInput
                    scale="usd"
                    amount={usd}
                    onAmountChange={handleUSDChange}
                />
            </div>
        </div>
    );
}
export default CurrencyConverter;
