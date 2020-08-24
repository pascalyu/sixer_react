import { PROFIL_LIST_REQUEST,PROFIL_LIST_ADD,PROFIL_LIST_RECEIVE,PROFIL_LIST_ERROR } from "../actions/constants";
import { hydraPageCount } from "../apiUtils";

export default (state = {
    posts: null,
    isFetching: false,
    currentPage: 1,
    pageCount: null
}, action) => {
    switch (action.type) {
        case PROFIL_LIST_REQUEST:
            state = {
                ...state,
                isFetching: true,
            };
            return state;
        case PROFIL_LIST_RECEIVE:
            state = {
                ...state,
                posts: action.data['hydra:member'],
                isFetching: false,
                pageCount:hydraPageCount(action.data),
            }
            return state;
        case PROFIL_LIST_ERROR:
            return {
                ...state,
                posts: null,
                isFetching: false,
            }


        case PROFIL_LIST_ADD:
            state = {
                ...state,
                posts: state.posts ? state.posts.concat(action.data) : action.data,
                isFetching: false,
            }
            return state;
      

        default: return state;

    }

}