import React, {useState, useContext, useEffect} from 'react';

import DoContext from '@/contexts/doContext';
import {changeAction, replaceAction} from '@/reducers/inboxReducer';

const InboxProcessItem = props => {
  const {item, index, interval, disabled, dispatch} = props;
  const context = useContext(DoContext);
  const [seconds, setSeconds] = useState(0);
  const count = () => parseInt(seconds / interval, 10);
  const [processStatus, setStatus] = useState(context.processStatus.STANDBY);

  const handleStatus = () => {
    switch (processStatus) {
      case context.processStatus.STANDBY:
        setStatus(context.processStatus.WIP);
        dispatch(changeAction(item.wip(), index));
        return;
      case context.processStatus.WIP:
        setStatus(context.processStatus.DONE);
        dispatch(changeAction(item.done(count(), seconds), index));
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (processStatus == context.processStatus.WIP) {
        setSeconds(s => s + 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [processStatus]);

  return (
    <>
      <dt>
        <button onClick={handleStatus} disabled={disabled}>
          {item.isWIP() ? 'ストップ' : item.name}
        </button>
        {processStatus}
      </dt>
      <dd>
        {seconds}秒, {count()}回
      </dd>
    </>
  );
};

export default InboxProcessItem;
