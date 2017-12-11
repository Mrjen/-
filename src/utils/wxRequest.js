import wepy from 'wepy'

const wxRequest = (params={},url) => {
    return new Promise(function(resolve,reject){
        wepy.showToast({
            title:'加载中',
            icon:'loading'
        });
        let data = params.query || {};
        data.sign = 'SIGN';
        let Cookie = wx.getStorageSync('Cookie');
        console.log('cookie',Cookie);
        var args = {
            url:url,
            data:data,
            header: { 'Content-Type': 'application/json',Cookie:''},
            success(res){
                try{
                    let mode = /(PHPSESSID=.*);/;
                    let cookie = res.header['Set-Cookie'].match(mode)[1];
                    
                    wx.setStorageSync('Cookie', cookie);
                }catch(e){

                }
                resolve(res);
            },
            fail(res){
                reject(res);
            },
            complete(res){
                wepy.hideToast();
            }
        }
        if(Cookie){
            args.header.Cookie = Cookie;
        }else{
            delete args.header.Cookie;
        }
        wepy.request(args)
    });
}

module.exports = {
    wxRequest
}