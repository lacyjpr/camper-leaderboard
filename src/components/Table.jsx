import React from 'react';
import TableRow from './TableRow';


class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="4" className="leaderboard">Leaderboard</th>
                    </tr>
                    <tr>
                        <th className="rank">#</th>
                        <th className="camper">Camper</th>
                        <th className={'month' + (this.props.sortedRecent ? ' sorted' : ' null')} onClick={this.props.handleRecent}>Points in last 30 days</th>
                        <th className={'allTime' + (this.props.sortedAllTime ? ' sorted' : ' null')} onClick={this.props.handleAllTime}>All time points</th>
                    </tr>
                </thead>
                <TableRow users={this.props.users}/>
            </table>
        );
    }
}

export default Table;
