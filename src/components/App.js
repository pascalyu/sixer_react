import React from "react";
import { Route, Switch } from "react-router";

import ProfilListContainer from "./Profil/ProfilListContainer";
import RegistrationContainer from "./RegistrationContainer";
import LoginForm from './LoginForm';
import Header from "./Header";
import { userFetch, userSetId, userLogout } from "../actions/action";
import { requests } from "../agent";
import { connect } from "react-redux";
import OfferListContainer from "./Offer/OfferListContainer";


class App extends React.Component {

    componentDidMount() {


    }

    componentDidUpdate(prevProps) {


    }
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');
        if (token) {
            requests.setToken(token)
        }
    }
    render() {
        const { isAuthenticated, userData, userLogout } = this.props;

        return (

            <div>
                <Header></Header>
                <div>
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/registration" component={RegistrationContainer} />
                        <Route path="/offers" component={OfferListContainer} />
                        <Route path="/" component={ProfilListContainer} />

                    </Switch>
                </div>
            </div>
        )
    }

}
export default connect(null, null)(App);