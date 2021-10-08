'use strict';

let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    let data = xhttp.response;
    
    let form = document.createElement('form');
    form.id = 'formData';
    form.name = 'formData';
    form.method = 'POST';

    let tBox1 = document.createElement('input');
    tBox1.id = 'tBox1';
    tBox1.name = 'tBox1';

    let tBox2 = document.createElement('input');
    tBox2.id = 'tBox2';
    tBox2.name = 'tBox2';

    let tBox3 = document.createElement('input');
    tBox3.id = 'tBox3';
    tBox3.name = 'tBox3';

    let btnSubmit = document.createElement('input');
    btnSubmit.type = 'submit';
    btnSubmit.id = 'btnSubmit';
    btnSubmit.name = 'btnSubmit';
    btnSubmit.value = 'submit';

    tBox1.value = data.headline;
    tBox2.value = data.intro;
    tBox3.value = data.articleImage;

    tBox1.style.display = 'block';
    tBox2.style.display = 'block';
    tBox3.style.display = 'block';

    document.getElementById('Exercise2').appendChild(form);
    document.getElementById('formData').appendChild(tBox1);
    document.getElementById('formData').appendChild(tBox2);
    document.getElementById('formData').appendChild(tBox3);
    document.getElementById('formData').appendChild(btnSubmit);
}