import React, { Component } from 'react';
import timeago from "timeago.js"
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

class OfferList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { posts } = this.props;
        return (


            <ul>
                {posts && posts.map(post => (

                    <div className="card mb-3 p-3 shadow-sm" key={post.id}>
                        <h6>{post.title}</h6>
                        <div>{post.description}</div>
                        <p className="card-text border-top">
                            <big className="text-muted">
                                {post.price}
                            </big>

                        </p>
                    </div>

                ))}

            </ul>

        )
    }

}
export default OfferList;