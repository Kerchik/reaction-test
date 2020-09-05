const initialState = {
    language: "ru"
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE': {
            return {...state, language: action.language}
        }
        default: {
            return initialState
        }
    }
}

export const changeLanguage = (language) => {
    return {type: 'CHANGE_LANGUAGE', language}
}

export default languageReducer