import React, {useContext} from 'react';

import DoContext from '@/contexts/doContext';
import InboxDone from '@/components/InboxDone';

const Done = props => {
  const {inbox} = props;
  const context = useContext(DoContext);

  const text =
    `${context.nameJa}完了！ ` +
    inbox.map(context.resultTweetText).join(',  ') +
    ' | ';
  const url = 'https://kintrainer.netlify.com/';
  const hashtags = context.hashtags;
  const tweetURI = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
  const encodedURI = encodeURI(tweetURI);

  return (
    <div className="Done container">
      <h2>{context.nameJa}の成果</h2>
      <p>おつかれさま！よくがんばりましたね！</p>
      <InboxDone inbox={inbox} />
      <a className="tweet-btn" href={encodedURI}>
        ツイートする
      </a>
    </div>
  );
};

export default Done;
