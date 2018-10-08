import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slideshow from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Slideshow />, document.getElementById('root'));
registerServiceWorker();
