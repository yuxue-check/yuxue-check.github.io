// 網站統計（GoatCounter，免費、不用 cookie、不收個資）。CODE 留空就完全不載入。
(function(){
  var CODE = 'yuxue-check'; // 董事長註冊後填入，例如 'yuxue-check'
  window.ycCount = function(name){ try{ if(window.goatcounter && goatcounter.count) goatcounter.count({path: name, title: name, event: true}); }catch(_){} };
  if(!CODE) return;
  var s=document.createElement('script'); s.async=true; s.src='https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter','https://'+CODE+'.goatcounter.com/count'); document.head.appendChild(s);
})();
