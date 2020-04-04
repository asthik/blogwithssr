import React, { useState } from 'react';
import './Commentspage.scss';

const Commentspage = props => {
    const [comments, setComments] = useState('');
    
    function returnTags() {
        return  <div className="existComment">
                    <span className="label-headers"><b>Comments: </b></span>
                    <span>{props.comments}</span>
                </div>
    }

    const handleSubmit = e => {
      e.preventDefault();
      props.commentsAdd({
          "comments" : comments,
           "id": props.id
      });
      setComments('');
    }
  
    return (
        <div className="commentspage container">
            <form onSubmit={handleSubmit}>
            <h2>Comments Section</h2>
                <div>
                    <span className="label-headers"><b>Title: </b></span>
                    <span>{props.title}</span>
                </div>
                <div>
                    <span className="label-headers"><b>Contents: </b></span>
                    <span>{props.contents}</span>
                </div>
                
                {props.comments !== undefined ? returnTags(): ''}
                <div>
                    <span className="label-headers"><b>Add Comments:</b></span>
                    <textarea name="comments" onChange={e => setComments(e.target.value)} 
                    value={comments}></textarea>
                </div>
                <input type="Submit" value="Add" className="submitBtn"/>
            </form>
        </div>
    );

}
export default Commentspage;
