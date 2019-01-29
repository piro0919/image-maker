import Pages from 'containers/pages';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import 'ress';
import { createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const store = createStore(reducers());

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-weight: 400;
    height: 100%;
    line-height: 1.2;
    overflow: hidden !important;
    -webkit-overflow-scrolling: touch;
    width: 100%;
  
    body {
      font-size: 1.4rem;
      height: 100%;
      width: 100%;
    
      #root {
        height: 100%;
        width: 100%;

        * {
          appearance: none;
          
          &:focus {
            outline: none;
          }
        }
  
        a {
          line-height: 0;
        }

        ul {
          list-style: none;
        }
      }
    }
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter
      basename={process.env.NODE_ENV === 'development' ? '' : '/image-maker'}
    >
      <Switch>
        <Route component={Pages} exact={true} path="/" />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
