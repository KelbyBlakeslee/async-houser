import { createStore } from 'redux';
import houser_reducer from './redux/reducer';

export default createStore(houser_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );