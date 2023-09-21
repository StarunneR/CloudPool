function aplayer(args, content) {
  var aplayerId = args[0];
  return '<div id="aplayer' + String(aplayerId) + '"></div></script>' +
  '<script>const ap' + String(aplayerId) + ' = new APlayer({container: document.getElementById("aplayer' + String(aplayerId) + '"),lrcType: 3,loop: "all",mutex: true,preload:"auto",audio: [' +
  hexo.render.renderSync({
    text: content,
    engine: ''
  }).replace(/HOST/g, hexo.theme.config.aplayer.host) +
  ']});</script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends:true,async:true});