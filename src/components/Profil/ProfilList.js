import React, { Component } from 'react';
import timeago from "timeago.js"

class ProfilList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { posts } = this.props;
        return (

            <ul>
                {posts && posts.map(post => (

                    <div className="card mb-3 p-3 shadow-sm" key={post.id}>
                        {post.summary}
                        <p className="card-text border-top">
                            <big className="text-muted">
                                {post.price} € / day
                            </big>

                        </p>
                    </div>

                ))}

            </ul>

        )
    }

}
export default ProfilList;