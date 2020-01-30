import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt); //あらかじめ使用するアイコンを追加しておく

import '@/css/main.css.scss';

ReactDOM.render(<App />, document.getElementById('root'));
