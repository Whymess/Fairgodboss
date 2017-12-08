// dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies
import {MessageBoard} from '../../Components/index';
import {addCommentsToPost} from '../../Actions/index';

const MessageBoardContainer = (props) => {
  return (
    <div>	
    	<MessageBoard {...props}/>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
     Messages: state.message.messages
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addCommentsToPost: addCommentsToPost
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoardContainer);