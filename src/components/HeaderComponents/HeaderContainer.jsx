import Header from './Header'
import {connect} from 'react-redux'
import {changeLanguage} from '../../redux/languageReducer'

const mapStateToProps = ({language}) => {
    return {
        language: language.language,
    }
}

const HeaderContainer = connect(mapStateToProps, {changeLanguage})(Header)
export default HeaderContainer;