import axios from 'axios';

var Api = {
    getUsers: function() {
        return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then((res) => {
                console.log(res);
                return (res);
            })
            .catch((error) => {
                console.log('Unable to fetch users', error);
                return(error);
            }); 
    }
};

export default Api;