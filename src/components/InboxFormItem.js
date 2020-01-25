import React, {useContext} from 'react';

import DoContext from '@/contexts/doContext';
import {addAction, changeAction, removeAction} from '@/reducers/inboxReducer';

const InboxFormItem = props => {
  const {item, index, isBeforeLast, isLast, dispatch} = props;
  const context = useContext(DoContext);

  const handleNameChange = name => {
    dispatch(changeAction(context.newRecord(name), index));
    if (isBeforeLast && !name) {
      dispatch(removeAction(index));
    }
    if (isLast && name) {
      dispatch(addAction(context.newRecord('')));
    }
  };

  const handleDeleteClick = () => {
    dispatch(removeAction(index));
  };

  return (
    <li>
      <input
        type="text"
        name={`${context.name}_name_${index}`}
        id={`${context.name}_name_${index}`}
        value={item.name}
        onChange={e => handleNameChange(e.target.value)}
      />
      <button onClick={handleDeleteClick}>×</button>
    </li>
  );
};

export default React.memo(InboxFormItem);
