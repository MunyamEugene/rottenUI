import { connect } from "react-redux"
import ServiceComponent from "./serviceComponent"
const mapStateToProps = (state)=>({
    state
});


export const ServiceContainer = connect(mapStateToProps,null)(ServiceComponent);

