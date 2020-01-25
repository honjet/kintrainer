import React, {useState, useContext, useEffect} from 'react';

import DoContext from '@/contexts/DoContext';
import {changeAction, replaceAction} from '@/reducers/inboxReducer';

const InboxProcessItem = props => {
  const {item, index, disabled, dispatch} = props;
  const context = useContext(DoContext);
  const [seconds, setSeconds] = useState(0);
  const interval = 3;
  const count = () => parseInt(seconds / interval, 10);
  const [processStatus, setStatus] = useState(context.processStatus.STANDBY);

  const nextStatus = () => {
    switch (processStatus) {
      case context.processStatus.STANDBY:
        setStatus(context.processStatus.PROGRESS);
        dispatch(
          changeAction(
            {
              ...item,
              processStatus: context.processStatus.PROGRESS,
            },
            index,
          ),
        );
        return;
      case context.processStatus.PROGRESS:
        setStatus(context.processStatus.DONE);
        dispatch(
          changeAction(
            {
              data: context.newResult(item.data, count(), seconds),
              processStatus: context.processStatus.DONE,
            },
            index,
          ),
        );
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (processStatus === context.processStatus.PROGRESS) {
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
        <button onClick={nextStatus} disabled={disabled}>
          {item.data.name}
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
