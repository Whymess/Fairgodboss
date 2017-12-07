// dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {CreatePost} from '../../Components/index'


const CreatePostContainer = (props) => {
  return (
    <div>	
    	<CreatePost/>
    </div>
  );
};


const mapStateToProps = (state) => {
    
  return {
     
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostContainer);