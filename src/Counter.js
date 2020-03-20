import React , { useState }from 'react';

function Counter() {
  const [number, setNumber] = useState(0); // 기본값은 파라미터로 설정
  
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1); // 상태 업데이트로 뒤에서 최적화에서 확인
  };
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <div>{number}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;