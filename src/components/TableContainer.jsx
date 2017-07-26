import React from 'react';

import Api from './api/Api';
import Table from './Table';

class TableContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            errorMessage: undefined
        };

        //this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        Api.getUsers()
        .then(function(res) {
            console.log('Api response', res);
            this.setState({
                users: res
            });
        })
        .catch(error => {
            this.setState({
                errorMessage: error.message
            });
        });

        console.log('state.users', this.state.users);
    }
    render() {
        return (
            <Table/>
        );
    }
}

export default TableContainer;