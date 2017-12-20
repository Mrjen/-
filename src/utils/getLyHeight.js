import {formtime} from './utils';
let setTime = null;
let time = null;

function getLyHeight(params,view,scale){
        // params当前播放歌曲对象
        //view页面this对象
        //scale歌曲长度s跟歌词行数总高度h的比例

        clearInterval(setTime)
        clearInterval(time) 

        let lycHeight = params.word.length*50+5;
        let lycriesStatus = view.lycriesStatus;
        let _height = lycHeight*scale?lycHeight*scale:0;
        let data = {};
        let state = wx.getBackgroundAudioManager();
        let _currentTime = null;
        let _duration = view.currentMusic.duration;
        let musicBarWidth = null;
        
        // console.log('timetimetimetimetime',time)
            setTime = setInterval(function(){
             _currentTime = view.currentMusic.currentTime?view.currentMusic.currentTime:0;
             musicBarWidth = (510/_duration)*state.currentTime;
            if(_currentTime<state.currentTime){
                view.currentMusic.currentTime = state.currentTime;
                view.currentMusic.fromCurrentTime = formtime(state.currentTime,1);
                view.musicBarWidth = musicBarWidth;
                view.$apply();
            }else{
                view.musicBarWidth = 0;
                clearInterval(setTime)
                view.$apply();
            }
        },1000)
        //清空所有的定时器
          time = setInterval(() => {
        //   console.log(_height);
          if (_height < lycHeight) {
            _height = _height + 0.4;
            lycriesStatus = 1;
          } else {
            clearInterval(time);
            _height = lycHeight;
            lycriesStatus = 0;
          }
          view.LyHeight = _height/2;
          view.lycriesStatus = lycriesStatus;
          view.$apply();
        },30);

        //获取音乐播放状态
        view.currentTime = state.currentTime;
        view.$apply();
}

function getMusicBarPorgerss(){
       
}

module.exports = {
    getLyHeight
}


