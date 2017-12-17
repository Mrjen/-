// 主域名
const apiUrl = "https://utest.playonwechat.com"
// 授权
const auth = apiUrl +  '/music/App/registry'
// 首页数据
const Home = apiUrl + '/music/App/home'
// 收藏歌曲
const Collect = apiUrl + '/music/App/collection'
// 取消收藏
const disCollect = apiUrl + '/music/App/disCollection'  
// 点击添加人气
const Addflower = apiUrl + '/music/App/flower'
// 我的收藏
const myCollect = apiUrl + '/music/App/myCollection'
// 获取老师列表
const teacherList = apiUrl + '/music/App/teacherlist'
//获取官方频道
const official = apiUrl + '/music/App/official'
// 获取老师的歌曲
const teacherMusic = apiUrl + '/music/App/teacherMusic'
// 收藏老师
const collectTeacher = apiUrl + '/music/App/collectTeacher'
// 取消收藏老师
const disCollectTeacher = apiUrl + '/music/App/disCollectTeacher'
// 我收藏的老师
const myCollectTeacher = apiUrl + '/music/App/myCollectTeacher'
// 获取音乐页面数据
const delicateAndMusics = apiUrl + '/music/App/delicateAndMusics'
// 周排行榜
const weekFlowerRanking  = apiUrl + '/music/App/weekFlowerRanking'
// 月榜
const moonthFlowerRanking = apiUrl + '/music/App/weekFlowerRanking'
// 启动页广告
const statAd = apiUrl + '/music/App/startAd'
// 分享二维码
const shareCode = apiUrl + '/music/App/shareQrcode'
// 统计歌曲
const songPlayCount = apiUrl + '/music/App/play'


module.exports = {
    Home,
    auth,
    Collect,
    disCollect,
    Addflower,
    myCollect,
    teacherList,
    official,
    teacherMusic,
    collectTeacher,
    disCollectTeacher,
    myCollectTeacher,
    delicateAndMusics,
    weekFlowerRanking,
    moonthFlowerRanking,
    statAd,
    shareCode,
    songPlayCount
}