import React from 'react';
import './Blogpage.scss';
import { connect } from 'react-redux';
import { setFormdata } from '../redux/user/useraction';

const Blogpage = (props) => {
    let loopArr = props.data;

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

const mapStateToProps = state => ({
    data: state.user.data
});

export default connect(mapStateToProps)(Blogpage);