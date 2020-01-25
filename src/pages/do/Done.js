import React, {useContext} from 'react';

import DoContext from '@/contexts/DoContext';

const Done = props => {
  const {inbox} = props;
  const context = useContext(DoContext);

  const text =
    `${context.nameJa}完了！ ` +
    inbox.map(x => `${x.name}: ${x.count}回 (${x.seconds}秒)`).join(',  ') +
    ' | ';
  const url = 'https://kintrainer.netlify.com/';
  const hashtags = '筋トレーナー';
  const tweetURI = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
  const encodedURI = encodeURI(tweetURI);

  return (
    <div className="container">
      <h1>トレーニング成果</h1>
      <p>おつかれさまでした！</p>
      <ul>
        {inbox.map((x, i) => (
          <li key={i}>
            {x.name}: {x.count}回 ({x.seconds}秒)
          </li>
        ))}
      </ul>
      <a href={encodedURI}>Twitterへ投稿</a>
    </div>
  );
};

export default Done;
