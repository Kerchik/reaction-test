const initialState = {
    reactionTestOn: false,
    backgroundColorRed: false,
    startTime: null
}

const reactionTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_REACTION_TEST': {
            return {...state, reactionTestOn: action.reactionTestOn}
        }
        case 'RED_BACKGROUND': {
            console.log(action.background)
            return {
                ...state,
                backgroundColorRed: action.background,
                startTime: action.startTime
                }
        }
        default: {
            return initialState
        }
    }
}

export const changeLanguage = (reactionTestOn) => {
    return {type: 'HANDLE_REACTION_TEST', reactionTestOn}
}
export const changeBackground = (background, startTime) => {
    return {type: 'RED_BACKGROUND', background, startTime}
}

export default reactionTestReducer