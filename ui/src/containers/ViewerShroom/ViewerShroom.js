import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { upVoteComment } from "../../actions/entities/commentActions";
import { commentsRef, shroomsRef } from '../../config/firebase';
import './ViewerShroom.css';

import CommentCard from '../../components/vume-base-components/CommentCard';
import ReactionSelector from '../../components/vume-base-components/ReactionSelector';
import InputButtonMolecule from "../../components/vume-base-components/InputButtonMolecule";
import CommentSection from "../../components/vume-base-components/CommentSection";
import Carousel from 'nuka-carousel';

class ViewerShroomContainer extends React.Component {

    state = {
        comments: {},
        shrooms: null
    };

    componentDidMount() {
        commentsRef.on('value', snap => {
            this.setState({comments: snap.val()});
        });
        shroomsRef.on('value', snap => {
            this.setState({shrooms: snap.val()});
        });
    }

    render() {
        const { shroomId } = this.props.match.params;

        return (
            <div className="viewer-shroom">
                <div className="viewer-shroom__main">
                    <Carousel slideIndex={this.state.shrooms ? this.state.shrooms[shroomId].index : 0}>
                        {this.state.shrooms ? this.state.shrooms[shroomId].images.map((slide,i) => ( <img src={slide} key={i} /> )) : ''}
                    </Carousel>
                </div>
                <div className="viewer-shroom__right">
                    <CommentSection>
                        {Object.values(this.state.comments).map(comment => (
                            <CommentCard text={comment.text} score={4} timestamp={Date.now()} handleUpvote={() => this.props.upVoteComment('123')}/>
                        ))}
                        <CommentCard text={'hey ho here we go sweet'} score={4} timestamp={Date.now()} handleUpvote={() => this.props.upVoteComment('123')}/>
                    </CommentSection>
                </div>
                <div className="viewer-shroom__bottom">
                    <div className="viewer-shroom__bottom__top">
                        <ReactionSelector
                            happyHandler={() => console.log('happy')}
                            sadHandler={() => console.log('sad')}
                            surprisedHandler={() => console.log('surprised')}
                            shockedHandler={() => console.log('shocked')}
                        />
                    </div>
                    <div className="viewer-shroom__bottom__bottom">
                        <InputButtonMolecule inputPlaceholder={'Post a Question'} buttonText={'Ask'} buttonStyling={'quaternary'} onSubmit={(comment) => console.log(comment)}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    upVoteComment
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ViewerShroomContainer);