import React, {useContext, useReducer} from 'react';

import DoContext from '@/contexts/DoContext';
import {inboxReducer} from '@/reducers/inboxReducer';
import InboxFormItem from './InboxFormItem';

const InboxForm = props => {
  const {nextState} = props;
  const context = useContext(DoContext);
  const [state, dispatch] = useReducer(inboxReducer, context.initialState);
  const lastIndex = state.inbox.length - 1;

  const clickNextButton = () => {
    nextState(state.inbox.filter(x => !x.isEmpty()));
  };

  const inboxItem = (item, index) => (
    <InboxFormItem
      key={index}
      item={item}
      index={index}
      dispatch={dispatch}
      isLast={index === state.inbox.length - 1}
      isBeforeLast={index === state.inbox.length - 2}
    />
  );

  return (
    <div>
      <ul>{state.inbox.map(inboxItem)}</ul>
      <button onClick={clickNextButton}>次へ</button>
    </div>
  );
};

export default InboxForm;
