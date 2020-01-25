import React, {useContext} from 'react';

import DoContext from '@/contexts/doContext';

const Done = props => {
  const {inbox} = props;
  const context = useContext(DoContext);

  const text =
    `${context.nameJa}完了！ ` +
    inbox.map(context.resultText).join(',  ') +
    ' | ';
  const url = 'https://kintrainer.netlify.com/';
  const hashtags = context.hashtags;
  const tweetURI = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
  const encodedURI = encodeURI(tweetURI);

  return (
    <div className="container">
      <h1>{context.nameJa}の成果</h1>
      <p>おつかれさま！</p>
      <p>よくがんばりましたね</p>
      <ul>
        {inbox.map((x, i) => (
          <li key={i}>
            {x.name}: {x.count}回 ({x.seconds}秒)
          </li>
        ))}
      </ul>
      <a href={encodedURI}>ツイートする</a>
    </div>
  );
};

export default Done;
