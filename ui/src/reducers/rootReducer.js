import {combineReducers} from 'redux';

import shrooms from './entities/shroomReducer';
import comments from './entities/commentReducer';
import reactions from './entities/reactionReducer';

import home from './scenes/homeReducer';
import shroomCreator from './scenes/shroomCreatorReducer';
import viewerShroom from './scenes/viewerShroomReducer';
import presenterShroom from './scenes/presenterShroomReducer';

const rootReducer = combineReducers({
    entities: combineReducers({
        shrooms,
        comments,
        reactions
    }),
    scenes: combineReducers({
        home,
        shroomCreator,
        viewerShroom,
        presenterShroom
    })
});

export default rootReducer;