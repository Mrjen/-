/*  参数说明
currentData = {
   oldList          旧的播放列表
   newList          新的播放列表
   changeList       是否切换当前播放列表
   idx              播放歌曲在列表中的位置
   cycle            是否循环列表
   Dom              当前操作对象
   Next             切换下一首
}
 */


function playMusic(currentData){
    let oldList = currentData.oldList;
    let newList = currentData.newList?currentData.newList:oldList;
    let i = currentData.idx || 0;
    let changeList = currentData.changeList;
    let cycle = currentData.cycle;
    if(changeList){
        console.log("切换列表")
        wx.playBackgroundAudio({
            dataUrl: newList[i].audio,
            title: newList[i].name,
            success(res){
                wx.onBackgroundAudioStop(function(){
                    let midx = wx.getStorageSync('midx');
                    midx = (midx+1===newList.length)?0:(midx+1);
                    let currentMusic = newList[midx];
                    wx.setStorageSync('currentMusic',currentMusic)
                    wx.playBackgroundAudio({
                        dataUrl:newList,
                        title:""
                    })
                })
            }
        });
    }else{
        console.log("不切换列表");
        wx.playBackgroundAudio({
            dataUrl: newList[i].audio,
            title: newList[i].name
        });
    }
}


function playMusic1(currentData){
    let oldList = currentData.oldList;
    let i = currentData.idx || 0;
    let changeList = currentData.changeList;
    let cycle = currentData.cycle;
    if (changeList) {
        console.log("切换播放列表")

        if (cycle) {
            console.log("单曲循环")
            wx.playBackgroundAudio({
                dataUrl: oldList[i].audio,
                title: oldList[i].name
            });
            wx.onBackgroundAudioStop(function () {
                wx.playBackgroundAudio({
                    dataUrl: oldList[i].audio,
                    title: oldList[i].name
                });
                wx.setStorageSync('currentSong',oldList[i])
            })
        } else {
            console.log("列表循环 获取钢歌曲播放状态")
            wx.playBackgroundAudio({
                dataUrl: oldList[i].audio,
                title: oldList[i].name
            });
            wx.setStorageSync('currentSong',oldList[i])
            for (let j = 0; j < oldList.length; j++) {
                oldList[j].playing = 0;
              }
            oldList[i].playing = 1;
            that.currentSong = oldList[i];
            wx.onBackgroundAudioStop(function(){
                console.log("歌曲播放完毕");
                i = i + 1;
                if(i==oldList.length){i = 0}
                wx.playBackgroundAudio({
                    dataUrl: oldList[i].audio,
                    title: oldList[i].name
                });
               for(let j=0;j<oldList.lenght;j++){
                   oldList[j].playing = 0;
               }
               wx.setStorageSync('currentSong',oldList[i])
               wx.setStorageSync('idx',i)
               oldList[i].playing = 1;
               that.currentSong = oldList[i];
            })
        }
    } else {
        console.log("下一曲、上一曲、事件处理", "i", i, oldList.length);
        //默认播放列表第一首
        // console.log(next,"next")
        if (next>0) {
            //next 为1就是下一曲为0 是上一曲
            console.log("切换下一首歌","i",i);

            if((i+1)===oldList.length){
                i = 0;
              }else{
                i = i+1;
              }
            console.log("i",i)
            // console.log(oldList, "iii的值是多少", i);
            wx.setStorageSync('currentSong',oldList[i])
            wx.setStorageSync("idx",i)
            wx.playBackgroundAudio({
                dataUrl: oldList[i].audio,
                title: oldList[i].name
            });
            for (let j = 0; j < oldList.length; j++) {
                oldList[j].playing = 0;
            }
            oldList[i].playing = 1;
            that.currentSong = oldList[i];

            wx.onBackgroundAudioStop(function () {
                console.log("我执行了几次")
                if (i < oldList.length) {
                    wx.playBackgroundAudio({
                        dataUrl: oldList[i].audio,
                        title: oldList[i].name,
                    });
                    i++;
                    wx.setStorageSync('currentSong', oldList[i]);
                } else {
                    i = 0;
                    wx.playBackgroundAudio({
                        dataUrl: oldList[i].audio,
                        title: oldList[i].name,
                    });
                }
            })
        }else if(next===0){
           //切换上一首歌曲
           console.log("切换上一首歌曲  这里看下i是多少：",i);
           i = i -1 ;
           if(i<0){
               i =  oldList.length-1;
           }
           for(let j = 0; j < oldList.length; j++){
              oldList[j].playing = 0;
           }
           oldList[i].playing = 1;
           that.currentSong = oldList[i];
           wx.setStorageSync('idx',i)
           wx.playBackgroundAudio({
             dataUrl: oldList[i].audio,
             title: oldList[i].name
          });
          wx.setStorageSync('currentSong',oldList[i])
        }else if(next<0){
            // 这里没有切换动作播放第一首
            console.log('这里没有切换动作播放第一首',i);
            wx.playBackgroundAudio({
                dataUrl: oldList[i].audio,
                title: oldList[i].name,
            });
        }

    }
}

module.exports ={
    playMusic
}