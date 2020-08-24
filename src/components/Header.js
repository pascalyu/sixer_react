import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    renderUser() {
        const { userData, logout } = this.props;

        if (null === userData) {

            return (<i className="fas fa-spinner fa-spin"></i>)
        }

        return (
            <span>
                Hello {userData.name}
                <button className="btn btn-link btn-sm" href="#" onClick={logout}>Logout</button>
            </span>
        );


    }
    render() {
        const { isAuthenticated } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bf-light">
                <Link to="/" className="navbar-brand">Sixer</Link>

                <ul className="navbar-nav mr-auto">
                    <Link to='/'> Profils</Link>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <Link to='/offers'> Offers</Link>
                </ul>


                <span className="navbar-text">
                    {isAuthenticated ?
                        this.renderUser() :
                        <Link to='/registration'> Sign-in</Link>
                    }
                </span>
            </nav >

        )

    }

}

export default Header;