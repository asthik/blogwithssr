import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFormdata } from './redux/user/useraction';
import Homepage from './components/Homepage';
import Blogpage from './components/Blogpage';
import CommentsPage from './components/Commentspage';
import PageNotFound from './components/Pagenotfound';

class App extends React.Component {
  handleAdd = (item) => {
    let newdata  = [...this.props.data];
    newdata.push(item);
    this.props.setFormdata({ data: newdata });
  }

  handleComments = (commentItem, id) => {
    // console.log(commentItem);
    let cloneData = [...this.props.data.data];
    cloneData[commentItem.id].comments = commentItem.comments;
    this.props.setFormdata({ data: cloneData });

  }
  // below for homepage func comp
  addTodo = (entryvalue) => {
    let newTodos  = [...this.props.data, {...entryvalue}];
    this.props.setFormdata({ data: newTodos });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => 
              <Homepage {...props} otherProps={this.props.data} onAdd={this.handleAdd} addTodo={this.addTodo} />} />
          <Route path="/blog" render={(props) => 
              <Blogpage {...props} blogProps={this.props.data} />} 
              />
          <Route path="/comments/:id" render={(props) => {
              const id = parseInt(props.match.params.id);
              const data = this.props.data.data[id];
              if(data) {
                  return <CommentsPage {...props} {...data} id={id} commentsAdd={this.handleComments}/>
              } else return <PageNotFound />
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.data
});

const mapDispatchToProps = { setFormdata };

export default connect(mapStateToProps, mapDispatchToProps)(App);
