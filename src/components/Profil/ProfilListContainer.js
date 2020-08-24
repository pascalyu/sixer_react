import React from "react";
import ProfilList from "./ProfilList";
import { profilListFetch, profilListSetPage } from "../../actions/action";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import Messager from "../Messager";

const mapStateToProps = state => ({

    ...state.profilList
});

const mapDispatchToProps = {
    profilListFetch
};
class ProfilListContainer extends React.Component {

    getQueryParamPage() {
        return Number(this.props.match.params.page) || 1

    }
    componentDidMount() {


        this.props.profilListFetch(this.getQueryParamPage());

    }

    render() {
        const { posts, isFetching, currentPage, pageCount } = this.props;
        console.log(pageCount);
        if (isFetching) {
            return (<div>
                <Spinner></Spinner>
            </div>
            )
        }
        if (posts == null || 0 === posts.length) {
            return (
                <Messager message="No Profil"></Messager>
            )
        }
        return (
            <div>
                <ProfilList posts={posts} />

            </div>)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilListContainer);