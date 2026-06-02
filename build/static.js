const fs=require('fs')
const html=require('child_process').execSync('ENV=PROD sptc "server/index.s?uri=/index/ssr"').toString()
const gitioHtml=html.replace(/\/assets\/app\/|crossorigin=/g, '')
fs.writeFileSync(__dirname+'/../server/public/app/index.html', gitioHtml)
const {js, css}=require(__dirname+'/../server/public/app/assets.json')
function rep(fn, pattern, dest) {
  fs.writeFileSync(fn, fs.readFileSync(fn, 'utf8').replace(pattern, dest))
}
rep(__dirname+'/../server/public/app/'+js[0], '/assets/app/', '')
rep(__dirname+'/../server/public/app/'+css[0], '/assets/app/', '')
rep(__dirname+'/../server/public/app/'+css[0], /url\("\/\//g, 'url("https://')

const root = __dirname+'/..'
fs.rmSync(root+'/index.html', {force: true})
fs.rmSync(root+'/client', {recursive: true, force: true})
fs.cpSync(__dirname+'/../server/public/app/index.html', root+'/index.html')
fs.cpSync(__dirname+'/../server/public/app/client', root+'/client', {recursive: true})
