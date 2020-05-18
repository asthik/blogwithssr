import React from 'react';
import { renderRoutes } from 'react-router-config';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default App;