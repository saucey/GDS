import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer} from './root-reducer';
import { rootEpic} from './root-epic';
// import { Provider } from 'react-redux';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

export {store};