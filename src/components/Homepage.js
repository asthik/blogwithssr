import React, { useState } from 'react';
import './Homepage.scss';
import { connect } from 'react-redux';
import {setFormdata} from '../redux/user/useraction';

const Homepage = (props) => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [author, setAuthor] = useState('');

    let btnClass = "submitBtn";
    if(title.trim() === "" ||
        contents.trim() === "" ||
        author.trim() === ""){
        btnClass = btnClass + " disabled";
    }
    // const { otherProps, onAdd } = this.props;
    
    const handleSave = e => {
      e.preventDefault();
      props.addTodo({
          "title" : title, 
          "contents" : contents, 
          "author" : author
      });
      setTitle('');
      setContents('');
      setAuthor('');
      props.history.push('/blog');
    }
  
    return (
      <div className="homepage">
        <form onSubmit={handleSave} className="formcontainer">
            <h2>Designer's Blog</h2>
            {/* <h4>Details for the Blog</h4> */}
            <div className="labels">
                    <span>Blog Title:</span>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="labels">
                <span>Contents:</span>
                <textarea name="contents" onChange={e => setContents(e.target.value)} 
                value={contents}></textarea>
            </div>
            <div className="labels">
                <span>Author:</span>
                <input type="text" className="" value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>
            <input type="Submit" value="Submit" className={btnClass} />
        </form>
      </div>
    );
}

export default Homepage;