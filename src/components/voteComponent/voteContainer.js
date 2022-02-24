import { connect } from 'react-redux';
import { urls } from '../../helper/urls';
import { popup,ratedService,canselVote,create_vote, fetch_services } from '../../redux/actions/actions';
import {VoteComponent} from './voteComponent';

const mapStateToProps = (state)=>({
    state
})

const mapDispatchToProps = dispatch =>({
    closePopup(falsvalue){
        dispatch(popup(falsvalue))
    },
    rateService(service){
        dispatch(ratedService(service))
    },
    canselRate(canseled){
        dispatch(canselVote(canseled))
    },
    saveRate(url,vote){
        dispatch(create_vote(url,vote))
    },
    fetchServices(){
        dispatch(fetch_services(urls.services))
    }
})

export const VoteContainer = connect(mapStateToProps,mapDispatchToProps)(VoteComponent);