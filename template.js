// August 04, 2018: Taken from https://github.com/c8r/x0/blob/master/lib/template.js
// Modified to add extra critical CSS inline with a <style /> tag
module.exports = ({
  html = '',
  css = '',
  scripts,
  js,
  publicPath,
  title = 'x0',
  meta = [],
  links = [],
  static: staticBuild
}) =>
`<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<meta name='generator' content='Compositor x0'>
<title>${title}</title>
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}</style>
<style>body { background-color: #2EAFAC; } a { color: blue; } nav { list-style: none; } nav ul { padding-left: 0; } nav li { display: inline-block; margin-right: 1em; }</style>
${css}
</head>
<div id=root>${html}</div>
${staticBuild ? '' : scripts}
`
