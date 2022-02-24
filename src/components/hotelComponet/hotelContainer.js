import { connect } from "react-redux";
import { fetch_hotels, popup } from "../../redux/actions/actions";
import {HotelComponent} from './hotelComponent';
import {urls} from '../../helper/urls'

const mapStateToProps = (state)=>({
state
});

const mapDispatchToProps = dispatch=>({
    fetchHotels(){
        dispatch(fetch_hotels(urls.hotels))
    },
    openPopup(truval){
        dispatch(popup(truval))
    }
})

export const HotelContainer = connect(mapStateToProps,mapDispatchToProps)(HotelComponent);