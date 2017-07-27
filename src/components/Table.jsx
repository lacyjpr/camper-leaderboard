import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component{
    render() {
        return (
            <table>
                <TableRow users={this.props.users}/>
            </table>
        )
    }
}

export default Table;
