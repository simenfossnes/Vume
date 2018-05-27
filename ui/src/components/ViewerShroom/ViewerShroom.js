import React from 'react';
import PropTypes from 'prop-types';
import './ViewerShroom.css';

import CommentCard from '../vume-base-components/CommentCard';
import ReactionSelector from '../vume-base-components/ReactionSelector';
import InputButtonMolecule from "../vume-base-components/InputButtonMolecule/InputButtonMolecule";
import CommentSection from "../vume-base-components/CommentSection/CommentSection";

const ViewerShroom = (props) => (
    <div className="viewer-shroom">
        <div className="viewer-shroom__main"></div>
        <div className="viewer-shroom__right">
            <CommentSection>
                <CommentCard text={'hey ho here we go sweet'}/>
            </CommentSection>
        </div>
        <div className="viewer-shroom__bottom">
            <div className="viewer-shroom__bottom__top">
                <ReactionSelector/>
            </div>
            <div className="viewer-shroom__bottom__bottom">
                <InputButtonMolecule/>
            </div>
        </div>
    </div>
);

ViewerShroom.propTypes = {

};

export default ViewerShroom;