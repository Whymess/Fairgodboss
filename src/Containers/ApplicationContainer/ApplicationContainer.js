 // dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {Application } from '../../Components/index';

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

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationContainer);