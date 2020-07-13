import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from  './images/skyinLogo.jpeg'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';
Cookies.set('favicon_image',logo)
let SetFavicon = () => {
    if (document.getElementById('favicon')) {
    
      document.getElementById('favicon').href = Cookies.get('favicon_image')
    }
  }
  if (Cookies.get('favicon_image')) {
    SetFavicon()
  } else {
    
  }
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
