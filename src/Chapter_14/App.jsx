import React from "react";
// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요없이 컴포넌트 트리로 곧바로 전달하게 해줌
// 여기서는 현재 테마를 위한 컨텍스트를 생성하며 기본값은 'Light'입니다.
const ThemeContext = React.createContext('Light');

function App(props) {
    return (
        <ThemeContext.Provider value = "dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    // 이 Toolbar 컴포넌트는 TimedButton에 time을 넘겨주기 위해서 'theme' props를 가져야만 한다.
    // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적
    return (
        <div>
            <ThemedButton />;
        </div>
    );
}

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme = {value} />}
        </ThemeContext.Consumer>
    )
}

function Button(props) {
    return <button>{props.theme}</button>;
}
export default App;