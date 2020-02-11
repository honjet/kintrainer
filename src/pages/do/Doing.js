import React from 'react';

import InboxProcess from '@/components/InboxProcess';
import DoContext from '@/contexts/doContext';

const Doing = props => {
  const context = React.useContext(DoContext);

  return (
    <div className="Doing container">
      <h2>Now {context.doingDescription}...</h2>
      <InboxProcess {...props} />
    </div>
  );
};

export default Doing;
