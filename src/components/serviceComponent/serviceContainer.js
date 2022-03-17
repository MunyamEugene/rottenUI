import { connect } from 'react-redux';
import ServiceComponent from './serviceComponent';

const mapStateToProps = (state) => ({
  state,
});
const ServiceContainer = connect(mapStateToProps, null)(ServiceComponent);
export default ServiceContainer;
