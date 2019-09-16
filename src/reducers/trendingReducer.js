import { FETCH_TRENDING } from '../actions/trendingActions';
import { FETCH_LOADING } from '../actions/loadingActions';

const initialState = {
  articles: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRENDING:
      return { ...state, articles: action.payload, loading: false };
    case FETCH_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
