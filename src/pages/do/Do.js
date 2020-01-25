import React, {useState} from 'react';

import WillDo from './WillDo';
import Doing from './Doing';
import Done from './Done';

const DoState = {
  WILL_DO: 'will_do',
  DOING: 'doing',
  DONE: 'done',
};

const Do = props => {
  const [state, setState] = useState(DoState.WILL_DO);
  const [inbox, setInbox] = useState(null);
  const nextState = (stateName, childInbox) => {
    setInbox(childInbox);
    setState(stateName);
  };

  switch (state) {
    case DoState.WILL_DO:
      return <WillDo nextState={a => nextState(DoState.DOING, a)} />;
    case DoState.DOING:
      return (
        <Doing inbox={inbox} nextState={a => nextState(DoState.DONE, a)} />
      );
    case DoState.DONE:
      return <Done inbox={inbox} />;
    default:
      throw Error();
  }
};

export default Do;
