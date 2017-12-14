import wxRequest from './wxRequest';
import api from './api';
import Tips from './tip';

 async function getMoreData(data,url){
    Tips.loading();
    let json = await wxRequest({},url);
    return json;
}