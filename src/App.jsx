import React from 'react';

import Banner from './components/Banner';
import TableContainer from './components/TableContainer';
import Footer from './components/Footer';

class App extends React.Component {    
    render() {
        return (
            <div>
                <Banner/>
                <TableContainer/>
                <Footer/>
            </div>
      
        );
    }
}

export default App;
