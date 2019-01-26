// 自动推送百度
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

// 统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0fba45b28373b06b59b2ba4484854127";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// js 跳转
console.log('test1111');

// var webrefer=document.referrer;
// if(webrefer.search("baidu.com")){window.location.href='http://'+document.domain};

// 自动推送360
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?98712cedb3f4dd87ad409e004b766c50":"https://jspassport.ssl.qhimg.com/11.0.1.js?98712cedb3f4dd87ad409e004b766c50";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
