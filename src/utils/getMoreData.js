import {wxRequest} from './wxRequest';
import api from './api';
import Tips from './tip';

async function getMoreData(data, url, view, cb) {
    let json = await wxRequest(data, url);
    typeof cb == 'function' && cb(json)
}

module.exports = {
    getMoreData
}