import React, {useContext} from 'react';

import Doing from './Doing';
import DoContext from '@/contexts/doContext';
import InboxForm from '@/components/InboxForm';

const WillDo = props => {
  const {nextState} = props;
  const context = useContext(DoContext);

  return (
    <div className="WillDo container">
      <h1>{context.nameJa}メニューを決める</h1>
      <InboxForm nextState={nextState} />
    </div>
  );
};

export default WillDo;
