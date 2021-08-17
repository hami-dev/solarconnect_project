import React, { useState, useRef } from 'react';
import Result from 'components/Result';
import DateTime from 'components/DateTime';
import 'styles/app.scss';

function App() {
  const inputNums = useRef(null);
  const [arrData, setArrData] = useState('');

  const getValueFromInput = () => {
    const inputValue = inputNums.current.value;
    return inputValue;
  };

  const handleArrData = () => {
    const value = getValueFromInput();
    setArrData(value);
  };

  const handleOnClick = () => {
    handleArrData();
  };

  const pressHandler = (e) => {
    if (e.key === 'Enter') {
      handleArrData();
    }
  };

  return (
    <div className="wrapper">
      <DateTime type="ko-KR" />
      <input
        type="text"
        ref={inputNums}
        placeholder="숫자를 입력해주세요"
        onKeyPress={pressHandler}
      />
      <button onClick={handleOnClick}>SORT</button>
      <div className="wrapper__result">
        <Result inputValue={arrData} desc={false} />
        <Result inputValue={arrData} desc={true} />
      </div>
      <DateTime type="en-US" />
    </div>
  );
}

export default App;
