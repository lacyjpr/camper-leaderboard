import React from 'react';
import axios from 'axios';

import Table from './Table';

class TableContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            errorMessage: undefined
        };
    }

    componentDidMount() {
        return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then((res) => {
                this.setState({
                    users: res
                });
            })
            .catch((error) => {
                console.log('Unable to fetch users', error);
                return(error);
            });
    }

    render() {
        console.log('this.state.users', this.state.users);
        return (
            <Table/>
        );
    }
}

export default TableContainer;