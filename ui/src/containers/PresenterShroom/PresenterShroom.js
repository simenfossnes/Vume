import React from 'react';
import PropTypes from 'prop-types';

import './PresenterShroom.css';

import CommentCard from '../../components/vume-base-components/CommentCard';
import CommentSection from '../../components/vume-base-components/CommentSection'
import Timer from "../../components/vume-base-components/Timer";
import Button from "../../components/vume-base-components/Button";

class PresenterShroomContainer extends React.Component {
    render() {
        return (
            <div className="presenter-shroom">
                <div className="presenter-shroom__main"></div>
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
                        <Button text={'Back'} styling={'secondary'}/>
                        <Button text={'Next'} styling={'primary'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PresenterShroomContainer;