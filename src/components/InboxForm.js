import React, {useContext, useReducer} from 'react';

import DoContext from '@/contexts/doContext';
import InboxReducer from '@/reducers/inboxReducer';
import InboxFormItem from './InboxFormItem';

const InboxForm = props => {
  const {nextState} = props;
  const context = useContext(DoContext);
  const [state, dispatch] = useReducer(InboxReducer, context.initialState);
  const lastIndex = state.inbox.size - 1;

  const handleClickNext = () => {
    nextState(state.inbox.filter(x => !x.isEmpty()));
  };

  const inboxItem = (item, index) => (
    <InboxFormItem
      key={index}
      item={item}
      index={index}
      dispatch={dispatch}
      isLast={index === state.inbox.size - 1}
      isBeforeLast={index === state.inbox.size - 2}
    />
  );

  return (
    <div>
      <ul>{state.inbox.map(inboxItem)}</ul>
      <button onClick={handleClickNext}>次へ</button>
    </div>
  );
};

export default InboxForm;
