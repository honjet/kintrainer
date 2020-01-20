import React from 'react';
import {Redirect, Link} from 'react-router-dom';

const Done = props => {
  if (props.location.state === undefined) {
    return <Redirect to="/" />;
  }

  const {name, count} = props.location.state;
  const text = `${name}を${count}回やったぞ！`;
  const url = 'https://kintrainer.netlify.com/';
  const hashtags = 'ワークアウト,筋トレ,kintrainer';
  const tweetURI = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
  const encodedURI = encodeURI(tweetURI);

  return (
    <div className="container">
      <h1>トレーニング成果</h1>
      <p>おつかれさまでした！</p>
      <ul>
        <li>
          {name}: {count}回
        </li>
      </ul>
      <ul>
        <li>
          <a href={encodedURI}>Twitterへ投稿</a>
        </li>
        <li>
          <Link to="/">最初に戻る</Link>
        </li>
      </ul>
    </div>
  );
};

export default Done;
