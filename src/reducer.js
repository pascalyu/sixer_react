import { combineReducers } from "redux";
import offerList from "./reducers/OfferListReducer";
import profilList from "./reducers/ProfilListReducer";
import registration from "./reducers/RegistrationReducer";

import auth from "./reducers/AuthReducer";
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    auth,
    registration,
    offerList,
    profilList,
    router: routerReducer,
    form: formReducer
})