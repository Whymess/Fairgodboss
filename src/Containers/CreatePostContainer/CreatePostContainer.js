// dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {CreatePost} from '../../Components/index';
import {createNewPostForUser} from '../../Actions/index';

const CreatePostContainer = (props) => {
  return (
    <div>	
    	<CreatePost {...props}/>
    </div>
  );
};


const mapStateToProps = (state) => {
    
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	 createNewPostForUser:createNewPostForUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostContainer);