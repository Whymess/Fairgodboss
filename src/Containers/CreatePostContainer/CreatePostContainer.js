// dependencies
import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux';

// local dependencies



const Table = (props) => {
  return (
    <div>
    
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
)(Table);