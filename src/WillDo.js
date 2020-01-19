import React, {useState} from 'react';
import {withRouter, Route} from 'react-router-dom';

import Doing from './Doing';

const WillDo = props => {
  const [name, setName] = useState('プッシュアップ');

  return (
    <div className="container">
      <h1>種目を決める</h1>
      <p>あなたが行いたい種目名を入力してください。</p>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>{name}</p>
      <button
        onClick={() =>
          props.history.push({pathname: '/doing', state: {name: name}})
        }>
        開始する
      </button>
    </div>
  );
};

export default withRouter(WillDo);
