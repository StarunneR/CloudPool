function aplayer(args, content) {
  var aplayerId = args[0];
  return '<div id="aplayer' + String(aplayerId) + '"></div></script>'
  //'<div class="slider"><input type="checkbox" id="toggle" /><label for="toggle"></label></div>' +
  //<input id="toggle" type="checkbox" onchange="alert(this.checked)"/><label for="toggle"></label>' +
  + '<script id="aplayerJS">const ap' + String(aplayerId) + ' = new APlayer({container: document.getElementById("aplayer' + String(aplayerId) + '"),lrcType: 3,loop: "all",mutex: true,preload:"auto",audio: ['
  + hexo.render.renderSync({text: content,engine: ''}).replace(/HOST/g, hexo.theme.config.aplayer.host) +']});</script>'
  //+ '<script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js" integrity="sha512-YsR46MmyChktsyMMou+Bs74oCa/CDdwft7rJ5wlnmDzMj1mzqncsfJamEEf99Nk7IB0JpTMo5hS8rxB49FUktQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'
  //+ '<script>var jsmediatags = window.jsmediatags;jsmediatags.read("https://cps3storage.s3.ap-southeast-1.amazonaws.com/kaf/SINGLES/CAN-VERSE.mp3", {onSuccess: function(tag) {console.log(tag);},onError: function(error) {console.log(error);}});</script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends:true,async:true});