import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/searchReducer';

const rootReducer = combineReducers({
    search: movieSearchReducer
});

export default rootReducer;
