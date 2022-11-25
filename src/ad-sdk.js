window.TencentGDT = window.TencentGDT || [];
window.TencentGDT.push({
  placement_id: '11**99', // String，广告位id
  appid: 'appid',
  type: 'rewardVideo', // String，广告类型，请根据广告类型填写对应的type值
  display_type: 'banner',
  onComplete: function(res) { // Function，广告位初始化回调方法，已激励视频接入为例
      if(res.code == 0) {
          // 激励视频实例化，注意：插屏广告、模板广告方位为：renderAd
          var video = new window.TencentGDT.NATIVE.rewardVideoAd( function(res) {
              // 激励视频回调参数
              console.log(res);
          });
          // 激励视频加载方法
          video.loadAd();
          // 激励视频播放方法
          video.showAd();
      }
  }
});

(function () {
  var doc = document,
      h = doc.getElementsByTagName('head')[0],
      s = doc.createElement('script');
  s.async = true;
  s.src = '//qzs.gdtimg.com/union/res/union_sdk/page/h5_sdk/i.js';
  h && h.insertBefore(s, h.firstChild)
})();