import React from 'react';

import ModuleTabs from './components/ModuleTabs';

import './App.css';

class App extends React.Component {
  render() {


    // const result = <ModuleTabs titles={ [ 'First', 'Second', 'Last' ] } />;


    // const result = new ModuleTabs({ title: [ 'First', 'Second', 'Last' ] })
    

    return (
      <div>
          <h1>
            Example of module tabs
          </h1>

          <ModuleTabs titles={ [ 'First', 'Second', 'Last' ] }  children={[ 'First page', 'Second page', 'Third page' ]}/>

          <ModuleTabs titles={ [ 'First', 'Second', 'Last' ] }>
            <div>
              Ipsum dolor sit, amet consectetur adipisicing elit.
              Labore quasi voluptatibus quo eum in illum pariatur doloremque maiores 
              nihil id quos deserunt reprehenderit quia velit autem vero, inventore consectetur assumenda.
            </div>

            <div style={ { backgroundColor: 'red' } }>
              Sit, amet consectetur adipisicing elit.
              Labore quasi voluptatibus quo eum in illum pariatur doloremque maiores 
              nihil id quos deserunt reprehenderit quia velit autem vero, inventore consectetur assumenda.
            </div>

            <div>
              Amet consectetur adipisicing elit.
              Labore quasi voluptatibus quo eum in illum pariatur doloremque maiores 
              nihil id quos deserunt reprehenderit quia velit autem vero, inventore consectetur assumenda.
            </div>
          </ModuleTabs>

          <ModuleTabs>
            <div>
              Ipsum dolor sit, amet consectetur adipisicing elit.
              Labore quasi voluptatibus quo eum in illum pariatur doloremque maiores 
              nihil id quos deserunt reprehenderit quia velit autem vero, inventore consectetur assumenda.
            </div>

            <div>
              Sit, amet consectetur adipisicing elit.
              Labore quasi voluptatibus quo eum in illum pariatur doloremque maiores 
              nihil id quos deserunt reprehenderit quia velit autem vero, inventore consectetur assumenda.
            </div>
          </ModuleTabs>
      </div>
    );
  }
}

export default App;
