import React, { useState } from 'react';
import './Homepage.scss';
import './App.scss';
import { connect } from 'react-redux';
import { setFormdata } from '../redux/user/useraction';

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

    const handleSave = e => {
      e.preventDefault();
      let newTodos  = [...props.data, {
        "title" : title, 
        "contents" : contents, 
        "author" : author           
      }];
      console.log('NEW TODOS ARE: ', newTodos);
      props.setFormdata(newTodos);
      setTitle('');
      setContents('');
      setAuthor('');
      props.history.push('/blog');
    }
  

    return (
      <div className="homepage">
        <form onSubmit={handleSave} className="formcontainer">
            <h2>Designer's Blog</h2>
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
            <input type="submit" value="Submit" className={btnClass} />
        </form>
      </div>
    );
}

const mapStateToProps = state => ({
    data: state.user.data
});
const mapDispatchToProps = { setFormdata };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);