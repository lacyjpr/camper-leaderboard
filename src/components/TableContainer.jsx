import React from 'react';
import axios from 'axios';

import Table from './Table';

class TableContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            errorMessage: undefined,
            sortedRecent: true,
            sortedAllTime: false
        };

        this.sortRecent = this.sortRecent.bind(this);
        this.sortAllTime = this.sortAllTime.bind(this);
    }

    componentDidMount() {
        return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then((response) => {
                this.setState({
                    users: response.data
                });
            })
            .catch((error) => {
                console.log('Unable to fetch users', error);
                return(error);
            });
    }

    sortRecent() {
        this.setState({
            users: this.state.users.sort((a, b) => {
                return b.recent - a.recent;
            }),
            sortedRecent: true,
            sortedAllTime: false
        });
    }
    
    sortAllTime() {
        this.setState({
            users: this.state.users.sort((a, b) => {
                return b.alltime - a.alltime;
            }),
            sortedRecent: false,
            sortedAllTime: true
        });
    }
    
    render() {
        return (
            <Table users={this.state.users} handleRecent={this.sortRecent} handleAllTime={this.sortAllTime} sortedRecent={this.state.sortedRecent} sortedAllTime={this.state.sortedAllTime}/>
        );
    }
}

export default TableContainer;