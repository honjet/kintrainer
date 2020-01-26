import React, {useReducer, useContext} from 'react';

import InboxProcessItem from './InboxProcessItem';
import DoContext from '@/contexts/doContext';
import InboxReducer from '@/reducers/inboxReducer';

// TODO: インターバル時間はいずれ設定できるようにする
const interval = 3;

const InboxProcess = props => {
  const {inbox, nextState} = props;
  const context = useContext(DoContext);
  const [state, dispatch] = useReducer(InboxReducer, {
    inbox: inbox.map(record => context.newProcess(record.name)),
  });
  const hasWIP = state.inbox.some(item => item.isWIP());
  const resultInbox = () =>
    state.inbox
      .filter(x => x.isDone())
      .map(x => context.newResult(x.name, x.count, x.seconds));

  const itemize = (item, index) => (
    <InboxProcessItem
      key={index}
      item={item}
      interval={interval}
      index={index}
      dispatch={dispatch}
      disabled={hasWIP ? item.isStandby() : false}
    />
  );

  return (
    <div className="InboxProcess">
      <p>※ {interval}秒に1回のペースで行う</p>
      <table>
        <tbody>{state.inbox.map(itemize)}</tbody>
      </table>
      <button
        className="next-btn"
        onClick={() => nextState(resultInbox())}
        disabled={hasWIP}>
        次へ
      </button>
    </div>
  );
};

export default InboxProcess;
