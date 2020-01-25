import React, {useReducer, useContext} from 'react';

import InboxProcessItem from './InboxProcessItem';
import DoContext from '@/contexts/DoContext';
import {inboxReducer} from '@/reducers/inboxReducer';

const InboxProcess = props => {
  const {inbox, nextState} = props;
  const context = useContext(DoContext);
  const initItem = item => ({
    data: item,
    processStatus: context.processStatus.STANDBY,
  });
  const [state, dispatch] = useReducer(inboxReducer, {
    inbox: inbox.map(x => initItem(x)),
  });
  const hasProgress = state.inbox.some(
    item => item.processStatus === context.processStatus.PROGRESS,
  );

  const inboxItem = (item, index) => (
    <InboxProcessItem
      key={index}
      item={item}
      index={index}
      dispatch={dispatch}
      disabled={
        hasProgress
          ? item.processStatus === context.processStatus.STANDBY
          : false
      }
    />
  );
  const resultInbox = state.inbox
    .filter(x => x.processStatus == context.processStatus.DONE)
    .map(x => x.data);

  return (
    <div>
      <dl>{state.inbox.map(inboxItem)}</dl>
      <button onClick={() => nextState(resultInbox)} disabled={hasProgress}>次へ</button>
    </div>
  );
};

export default InboxProcess;
