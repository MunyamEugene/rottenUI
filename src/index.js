import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/reducers/store';
import './index.css';
import VoteContainer from './components/voteComponent/voteContainer';

ReactDOM.render(
  <Provider store={store}>
    <VoteContainer />
    <App />
  </Provider>,
  document.getElementById('root'),
);
