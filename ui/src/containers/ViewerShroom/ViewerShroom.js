import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { upVoteComment } from "../../actions/entities/commentActions";
import './ViewerShroom.css';

import CommentCard from '../../components/vume-base-components/CommentCard';
import ReactionSelector from '../../components/vume-base-components/ReactionSelector';
import InputButtonMolecule from "../../components/vume-base-components/InputButtonMolecule";
import CommentSection from "../../components/vume-base-components/CommentSection";

class ViewerShroomContainer extends React.Component {
    render() {
        return (
            <div className="viewer-shroom">
                <div className="viewer-shroom__main"></div>
                <div className="viewer-shroom__right">
                    <CommentSection>
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