import React from "react";
import OfferList from "./OfferList";
import { offerListFetch } from "../../actions/action";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import Messager from "../Messager";

const mapStateToProps = state => ({

    ...state.offerList
});

const mapDispatchToProps = {
    offerListFetch
};
class OfferListContainer extends React.Component {

    getQueryParamPage() {
        return Number(this.props.match.params.page) || 1

    }
    componentDidMount() {


        this.props.offerListFetch(this.getQueryParamPage());

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
                <Messager message="No Offers"></Messager>
            )
        }
        return (
            <div>
                <OfferList posts={posts} />

            </div>)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(OfferListContainer);