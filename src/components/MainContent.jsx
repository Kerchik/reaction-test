import React, {useState} from 'react';
import {translate} from '../redux/translate'
import {connect} from 'react-redux'
import s from './MainContent.module.css'
import Button from 'react-bootstrap/Button';
import ReactionTest from './ReactionTest';
import {changeBackground} from '../redux/reactionTestReducer'

const mapStateToProps = ({language, reactionTest}) => {
    return {
        language: language.language,
        background: reactionTest.backgroundColorRed,
        startTime: reactionTest.startTime,
    }
}

const MainContent = ({language, background, changeBackground, startTime}) => {
    const reactionTestClick = () => {
        const clickTime = Date.now()
        if (!showReactionTest) {
            return
        }
        if (!background) {
            alert('too early')
            return
        }
        alert(clickTime - startTime)
    }
    const [showReactionTest, setShowReactionTest] = useState(false)
    const enableReactionTest = () => {
        setShowReactionTest(true)
    }
    return (
        <div onClick={reactionTestClick} className={!background ? s.main : s.mainRed}>
            <div>
                {!showReactionTest 
                ? <><h2 className={s.textWhite}>{translate[language]['main']['name']}</h2>
                <h3 className={s.textWhite}>{translate[language]['main']['text']}</h3>
                <Button variant="light" onClick={enableReactionTest}>{translate[language]['main']['startButton']}</Button> </>
                : <ReactionTest language={language} changeBackground={changeBackground}/>}
            </div>
        </div>
    )
}

const MainContentContainer = connect(mapStateToProps, {changeBackground})(MainContent)
export default MainContentContainer;