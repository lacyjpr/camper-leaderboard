import React from 'react';

class TableRow extends React.Component {
    render() {
        let {users} = this.props;
        let rank = 1;
        // Map users array to table credit: http://www.automationfuel.com/reactjs-tables/
        let row = users.map((users) =>
            <tr key={users.username}>
                <td>{rank++}</td>
                <td>
                    <a href={'https://www.freecodecamp.com/'+users.username} target='_blank'>
                    <img className='avatar' src={users.img} alt='camper avatar picture'></img> {users.username} </a>
                </td>
                <td>{users.recent}</td>
                <td>{users.alltime}</td>
            </tr>
        );
        return (
            <tbody>{row}</tbody>
        )
    }
}

export default TableRow;