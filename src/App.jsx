import React from 'react';

import Banner from './components/Banner';
import Table from './components/Table';

class App extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <Table/>
            </div>
      
        );
    }
}

export default App;
