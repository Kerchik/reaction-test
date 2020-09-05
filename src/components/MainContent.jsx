import React from 'react';
import {translate} from '../redux/translate'
import {connect} from 'react-redux'
import s from './MainContent.module.css'

const mapStateToProps = ({language}) => {
    return {
        language: language.language,
    }
}

const MainContent = ({language}) => {
    return (
        <div className={s.main}>
            <div>
                <h2 className={s.textWhite}>{translate[language]['main']['name']}</h2>
                <h3 className={s.textWhite}>{translate[language]['main']['text']}</h3>
                <button>{translate[language]['main']['startButton']}</button>
            </div>
        </div>
    )
}

const MainContentContainer = connect(mapStateToProps, null)(MainContent)
export default MainContentContainer;