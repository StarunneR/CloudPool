function aplayer(aplayerId, content) {
  var head = document.head || document.getElementsByTagName('head')[0];
  head += '<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css">';
  head += '<script src="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js">';
  document.getElementsByTagName('head')[0].innerHTML += head;
  return '<div id="aplayer' + String(aplayerId) + '"></div></script>' +
  '<script>const ap' + String(aplayerId) + ' = new APlayer({container: document.getElementById("aplayer' + String(aplayerId) + '"),lrcType: 3,loop: "all",mutex: true,preload:"auto",audio: [' +
  hexo.render.renderSync({
    text: content,
    engine: ''
  }).replace(/HOST/g, hexo.theme.config.aplayer.host) +
  ']});</script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends:true,async:true});