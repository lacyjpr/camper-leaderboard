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

        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        Api.getUsers().then((res) => {
            this.setState({
                users: res
            });
        }, (error) => {
            this.setState({
                errorMessage: error.message
            });
        });
        console.log(this.state.users);
    }
    render() {
        return (
            <Table/>
        );
    }
}

export default TableContainer;