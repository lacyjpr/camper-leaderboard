import React from 'react';
import TableRow from './TableRow';


class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Leaderboard</th>
                    </tr>
                    <tr>
                        <th className="rank">#</th>
                        <th className="camper">Camper</th>
                        <th className="month"><p onClick={this.props.handleRecent}>Points in last 30 days</p></th>
                        <th className="allTime"><p onClick={this.props.handleAllTime}>All time points</p></th>
                    </tr>
                </thead>
                <TableRow users={this.props.users}/>
            </table>
        );
    }
}

export default Table;
