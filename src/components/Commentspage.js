import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Commentspage.scss';
import { connect } from 'react-redux';
import { setFormdata } from '../redux/user/useraction';

const Commentspage = props => {
    const [comments, setComments] = useState('');
    let id = props.match.params.id;
    let currData = props.data[id];
    
    function returnTags() {
        return  <div className="existComment">
                    <span className="label-headers"><b>Comments: </b></span>
                    <span>{currData.comments}</span>
                </div>
    }

    const handleSubmit = e => {
      e.preventDefault();
      let commentObj = {
        "comments" : comments,
        "id": id
      };
      let cloneData = [...props.data];
      cloneData[commentObj.id].comments = commentObj.comments;
      props.setFormdata(cloneData);
      setComments('');
    }
  
    return (
        <div className="commentspage container">
            <form onSubmit={handleSubmit}>
            <h2>Comments Section</h2>
                <Link to="/" className="links">Home</Link>
                <div>
                    <span className="label-headers"><b>Title: </b></span>
                    <span>{currData.title}</span>
                </div>
                <div>
                    <span className="label-headers"><b>Contents: </b></span>
                    <span>{currData.contents}</span>
                </div>
                
                {currData.comments !== undefined ? returnTags(): ''}
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

const mapStateToProps = state => ({
    data: state.user.data
});

export default connect(mapStateToProps, {setFormdata})(Commentspage);