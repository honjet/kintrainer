import React, {useContext} from 'react';

import DoContext from '@/contexts/DoContext'
import {addAction, changeAction, removeAction} from '@/reducers/inboxReducer'

const InboxItem = props => {
  const {item, index, isBeforeLast, isLast, dispatch} = props;
  const context = useContext(DoContext);

  const handleNameChange = name => {
    dispatch(changeAction(context.newItem(name), index));
    if (isBeforeLast && !name) {
      dispatch(removeAction(index));
    }
    if (isLast && name) {
      dispatch(addAction(context.newItem('')));
    }
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
    </li>
  );
};

export default React.memo(InboxItem);
