import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component{
    render() {
        return (
            <table>
                <tr>
                    <th>#</th>
                    <th>Camper</th>
                    <th>Points in last 30 days</th>
                    <th>All time points</th>
                </tr>
                <TableRow users={this.props.users}/>
            </table>
        )
    }
}

export default Table;
