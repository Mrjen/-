// 主域名
const apiUrl = "https://utest.playonwechat.com"
const mock = "https://easy-mock.com/mock/5a2e35eee576811460c0f506/banyeyinyue/home"

const test = 'https://utest.playonwechat.com/music/App/home?kid=459'

// 授权
const auth = apiUrl +  '/music/App/registry'
// 首页数据
const Home = apiUrl + '/music/App/home'
// 收藏歌曲
const Collect = apiUrl + '/music/App/collection'
// 取消收藏
const disCollect = apiUrl + '/music/App/disCollection'   
// 我的收藏
const myCollect = apiUrl + '/music/App/myCollection'
// 收听排行榜
const Ranking  = apiUrl + '/music/App/ranking'
// 启动页广告
const statAd = apiUrl + '/music/App/startAd'
// 分享二维码
const shareCode = apiUrl + '/music/App/shareQrcode'
// 用户类型
const userType = apiUrl + '/music/App/updateUserType'
// 统计歌曲
const songPlayCount = apiUrl + '/music/App/play'



module.exports = {
    mock,
    test,
    Home,
    auth,
    Collect,
    disCollect,
    myCollect,
    Ranking,
    statAd,
    shareCode,
    userType,
    songPlayCount
}