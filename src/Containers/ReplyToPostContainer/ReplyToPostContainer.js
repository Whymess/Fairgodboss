// dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {ReplyToPost} from '../../Components/index';
import {addCommentsToPost} from '../../Actions/index';


const ReplyToPostContainer = (props) => {
  return (
    <div>	
    	<ReplyToPost {...props}/>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
   	  Messages: state.message.messages,
      MessageID: state.message.messageToBeRepliedToID
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	 addCommentsToPost: addCommentsToPost
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyToPostContainer);