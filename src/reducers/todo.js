'use strict';

import { ADD_TODO, COMPLETE_TODO } from '../actions';

export default function todo (state = 0, action) {
    switch (action.type) {
        case ADD_TODO:
            return state + 1;
        case COMPLETE_TODO:
            return state - 1;
        default:
            return state;
    }
}