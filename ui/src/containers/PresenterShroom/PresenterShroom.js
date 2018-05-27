import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './PresenterShroom.css';

import CommentCard from '../../components/vume-base-components/CommentCard';
import CommentSection from '../../components/vume-base-components/CommentSection'
import Timer from "../../components/vume-base-components/Timer";
import Button from "../../components/vume-base-components/Button";
import {commentsRef, shroomsRef} from "../../config/firebase";
import Carousel from 'nuka-carousel';

class PresenterShroomContainer extends React.Component {

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

    nextSlide = () => {
        const currentShroomId = this.props.match.params.shroomId;
        // const indexRef = shroomsRef(`${this.props.match.params.shroomId}/index`);
        var updates = {};
        updates[`/${currentShroomId}/index`] = this.state.shrooms[currentShroomId].index+1;
        shroomsRef.update(updates);
    };

    backSlide = () => {
        const currentShroomId = this.props.match.params.shroomId;
        // const indexRef = shroomsRef(`${this.props.match.params.shroomId}/index`);
        var updates = {};
        updates[`/${currentShroomId}/index`] = this.state.shrooms[currentShroomId].index-1;
        shroomsRef.update(updates);
    };

    render() {
        const { shroomId } = this.props.match.params;
        return (
            <div className="presenter-shroom">
                <div className="presenter-shroom__main">
                    <Carousel slideIndex={this.state.shrooms ? this.state.shrooms[shroomId].index : 0}>
                        {this.state.shrooms ? this.state.shrooms[shroomId].images.map((slide,i) => ( <img src={slide} key={i} /> )) : ''}
                    </Carousel>
                </div>
                <div className="presenter-shroom__right">
                    <CommentSection>
                        <CommentCard text={'hey ho here we go sweet'}/>
                    </CommentSection>
                </div>
                <div className="presenter-shroom__bottom">
                    <div className="presenter-shroom__bottom__top">
                        <Timer/>
                    </div>
                    <div className="presenter-shroom__bottom__bottom">
                        <Button text={'Back'} styling={'secondary'} onClick={this.backSlide}/>
                        <Button text={'Next'} styling={'primary'} onClick={this.nextSlide}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(PresenterShroomContainer);