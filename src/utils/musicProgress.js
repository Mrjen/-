function getMusicBar(){
    const status = wx.getBackgroundAudioManager();
    console.log(status)
}

module.exports ={
    getMusicBar
}