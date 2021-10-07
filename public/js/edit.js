'use strict';

let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    let data = xhttp.response;
    
    let tBox1 = document.createElement('input');
    let tBox2 = document.createElement('input');
    let tBox3 = document.createElement('input');
    let btnUpdate = document.createElement('button');

    tBox1.value = data.headline;
    tBox2.value = data.intro;
    tBox3.value = data.articleImage;
    btnUpdate.textContent = 'Update';
    

    tBox1.style.display = 'block';
    tBox2.style.display = 'block';
    tBox3.style.display = 'block';
    btnUpdate.addEventListener('click', updateTextBoxes);

    document.getElementById('Exercise2').appendChild(tBox1);
    document.getElementById('Exercise2').appendChild(tBox2);
    document.getElementById('Exercise2').appendChild(tBox3);
    document.getElementById('Exercise2').appendChild(btnUpdate);

}

const updateTextBoxes = () => {
    console.log('Button pushed');
}