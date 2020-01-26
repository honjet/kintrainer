import React from 'react';

import InboxProcess from '@/components/InboxProcess';
import DoContext from '@/contexts/doContext';

const Doing = props => {
  const context = React.useContext(DoContext);

  return (
    <div className="Doing container">
      <h1>Now {context.doingDescription}...</h1>
      <InboxProcess {...props} />
    </div>
  );
};

export default Doing;
