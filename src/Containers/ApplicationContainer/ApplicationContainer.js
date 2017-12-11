 // dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {Application } from '../../Components/index';
import {LoginUser} from '../../Actions/index';

const ApplicationContainer = (props) => {
  return (
    <div>	
    	<Application {...props}/>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
     Messages: state.message.messages
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    LoginUser: LoginUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationContainer);