import React from 'react';

import Banner from './components/Banner';
import TableContainer from './components/TableContainer';

class App extends React.Component {    
    render() {
        return (
            <div>
                <Banner/>
                <TableContainer/>
            </div>
      
        );
    }
}

export default App;
