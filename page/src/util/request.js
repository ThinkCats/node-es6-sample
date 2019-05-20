// eslint-disable-next-line react/no-typos
import axios from 'axios';

async function get(url) {
    return await axios.get(url);
}

async function post(url, data) {
    return await axios({
        method: 'post',
        url: url,
        data: data
    });
}