const initialState = {
    reactionTestOn: false,
    backgroundColorRed: false 
}

const reactionTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_REACTION_TEST': {
            return {...state, reactionTestOn: action.reactionTestOn}
        }
        case 'RED_BACKGROUND': {
            console.log(action.background)
            return {...state, backgroundColorRed: action.background}
        }
        default: {
            return initialState
        }
    }
}

export const changeLanguage = (reactionTestOn) => {
    return {type: 'HANDLE_REACTION_TEST', reactionTestOn}
}
export const changeBackground = (background) => {
    return {type: 'RED_BACKGROUND', background}
}

export default reactionTestReducer