import React, {useContext} from 'react';
import DoContext from '@/contexts/doContext';

const InboxDone = props => {
  const {inbox} = props;
  const context = useContext(DoContext);

  const itemize = (item, index) => {
    const className = index % 2 == 0 ? 'even' : 'odd';
    return (
      <tr key={index} className={className}>
        <td>{item.name}</td>
        <td>{context.resultText(item)}</td>
      </tr>
    );
  };

  return (
    <div className="InboxDone container">
      <table>
        <tbody>{inbox.map(itemize)}</tbody>
      </table>
    </div>
  );
};

export default InboxDone;
