import React from 'react';
import {translate} from '../../redux/translate'
import s from './Header.module.css'

const Header = ({language, changeLanguage}) => {
    const handleSelectChange = (e) => {
        if (e.target.value in translate) {
            changeLanguage(e.target.value)
        }
    }
    return (
        <div className={s.header}>
            <select className={s.langSelect} value={language} onChange={handleSelectChange}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
    )
}

export default Header