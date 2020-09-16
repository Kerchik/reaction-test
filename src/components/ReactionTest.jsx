import React, {useEffect} from 'react'
import {translate} from '../redux/translate'
import s from './ReactionTest.module.css'

const ReactionTest = ({language, changeBackground}) => {
    useEffect(() => {
        const time = Math.random() * (8000 - 1000) + 3000
        setTimeout(() => {
            changeBackground(true, Date.now())
        }, time)
    }, [])
    return (
        <div>
            <h2 className={s.textWhite}>{translate[language]['reaction-test']['explanation']}</h2>
        </div>
    )
}

export default ReactionTest