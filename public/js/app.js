'use strict';

console.log('app.js is alive!')

let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {

    const data = xhttp.response;
    console.log(data);
    
    var imgUrl = data.articleImage;

    let elementH1 = document.createElement('h1');
    let elementP = document.createElement('p');
    let elementImg = document.createElement('img');

    elementH1.textContent = data.headline;
    elementP.textContent = data.intro;
    elementImg.setAttribute('src', imgUrl);

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);
    document.getElementById('Exercise1').appendChild(elementImg);
}



//Creates h1 and p element
// const headline = document.createElement('h1');
// const intro = document.createElement('p');

// xhttp.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200){
//         document.getElementById('Exercise1').innerHTML = xhttp.responseType('html');

//         // document.createElement('h1');
//         // document.createElement('p');



//         document.getElementById('Exercise1').appendChild(h1);
//         document.getElementById('Exercise1').appendChild(p);

//         headline.textContent();
//     }
// };

// xhttp.open('GET', dataUrl, true);
// xhttp.responseType = 'html';




// xhttp.send();