import React from 'react';
import '../../CSS/NoPosts.css';

import {Title} from '../../Components/index';

export default () => {

  return (
  	<div className="container_for_no_posts">
  		<Title/>
	      <div className="no_posts"> 
	      		

	      		There are currently no posts... add one!


	      		
	      </div>
	      <button className="create_post"> Create new Post </button> 
     </div>

    )
}