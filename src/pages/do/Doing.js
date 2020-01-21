import React, {useState, useEffect, useRef} from 'react';
import {Redirect} from 'react-router-dom';

const Doing = props => {
  const {inbox, nextAction} = props;
  const interval = 3; // とりあえず3秒 あとで設定できるようにする
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const count = () => parseInt(elapsedSeconds / interval, 10);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedSeconds(s => s + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="container">
      <h1>Now Training...</h1>
      <dl>
        <dt>
          {inbox.map(a=>a.name).join(',')}: {interval}秒毎に1回
        </dt>
        <dd>
          <p>time: {elapsedSeconds}秒</p>
          <p>count: {count()}回</p>
        </dd>
      </dl>
      <button
        onClick={() =>
          props.history.push({
            pathname: '/done',
            state: {name: name, count: count()},
          })
        }>
        終わった
      </button>
      <button onClick={()=>nextAction(inbox)}>next</button>
    </div>
  );
};

export default Doing;
