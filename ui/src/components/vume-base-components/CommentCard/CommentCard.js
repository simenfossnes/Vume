import React from 'react';
import PropTypes from 'prop-types';

import './CommentCard.css';

const timestampToNow = (timestamp) => {
    // convert the timestamp to new seconds
};

class CommentCard extends React.Component {

    state = {
        upVoteOptionsActive: false
    };

    toggleUpVoteOptionsActive = () => {
        this.setState((prevState)=>({upVoteOptionsActive: !prevState.upVoteOptionsActive}))
    };

    render() {
        return (
            <div className="comment-card" style={{position: 'relative'}} onClick={!this.state.upVoteOptionsActive ? this.toggleUpVoteOptionsActive : null}>
                <div className="comment-card__text">
                    {this.props.text}
                </div>
                <div className="comment-card__footer">
                    <div className="comment-card__timestamp">15 secs ago</div>
                    <div className="comment-card__score">4 votes</div>
                </div>
                {this.state.upVoteOptionsActive ?
                    <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor:'rgba(200,255,200,0.9)', zIndex: 3, borderRadius: 12}}>
                        <div onClick={this.props.handleUpvote ? this.props.handleUpvote : null}>
                            upvote
                        </div>
                        <div onClick={this.toggleUpVoteOptionsActive}>
                            x
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        );
    }
}

CommentCard.propTypes = {
    text: PropTypes.string,
    handleUpvote: PropTypes.func,
    timestamp: PropTypes.number,
    score: PropTypes.number,
};

CommentCard.defaultProps = {
    text: "This is some text inside of a div block. ariose ntaories" +
        "ntoiearn stoienarsoi tenaroies ntoairen stoiaerns otienars.",
};

export default CommentCard;