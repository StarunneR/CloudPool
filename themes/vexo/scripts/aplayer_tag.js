function aplayer(args, content) {
  let aplayerId = String(args[0]);

  return '<div id="aplayer' + aplayerId + '" class="aplayerJS"></div>' +
  '<script>const ap' + aplayerId + ' = new APlayer({container: document.getElementById("aplayer' + aplayerId + '"),' +
  'lrcType: 3,loop: "none",mutex: true,preload:"auto",' +
  
  'audio: ['+ hexo.render.renderSync({text: content,engine: ''}).replace(/HOST/g, hexo.theme.config.aplayer.host) +']});' +
  'ap'+aplayerId+'.on("play", function(){document.title=document.getElementById("aplayer'+aplayerId+'").getElementsByClassName("aplayer-music")[0].innerText;}); </script>'
  //+ '<script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js" integrity="sha512-YsR46MmyChktsyMMou+Bs74oCa/CDdwft7rJ5wlnmDzMj1mzqncsfJamEEf99Nk7IB0JpTMo5hS8rxB49FUktQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends:true,async:true});

  //'<div class="slider"><input type="checkbox" id="toggle" /><label for="toggle"></label></div>' +
  //<input id="toggle" type="checkbox" onchange="alert(this.checked)"/><label for="toggle"></label>' +