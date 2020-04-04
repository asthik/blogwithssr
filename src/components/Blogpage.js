import React from 'react';
import './Blogpage.scss';
import { Link } from 'react-router-dom';

const Blogpage = (props) => {
    let loopArr = props.blogProps.data == undefined ? props.blogProps : props.blogProps.data;

    return (
        <div className="blogpage">
            <h2 style={{textAlign: "center"}}>Blog View</h2>
            {loopArr.map((e,i,arr) => 
                <div key={i} className="cardArea">
                    <div>
                        <span className="sections">Blog title </span>
                        <span className="sections anchor" onClick={(ev) => {
                            props.history.push("/comments/" + i);
                        }}>{e.title}</span>
                    </div>
                    <div>
                        <span className="sections" >Contents </span>
                        <span className="sections" >{e.contents}</span>
                    </div>
                    <div>
                        <span className="sections" >Author </span>
                        <span className="sections">{e.author}</span>
                    </div>
                </div>
            )}
        </div>
        );
}

export default Blogpage;