import { connect } from "react-redux"
import urls from "../../helper/urls"
import { authenticate,logoutUser } from "../../redux/actions/actions"
import AuthComponent from "./authComponent"

const mapStateToProps=(state)=>({
    state
})
const mapDispatchToProps=(dispatch)=>({
    login(){
        dispatch(authenticate(urls.auth))
    },
    logout(){
        dispatch(logoutUser(urls.logout))
    }
})

export const AuthContainer = connect(mapStateToProps,mapDispatchToProps)(AuthComponent);