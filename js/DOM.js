// const mainElem = document.getElementById('main');

// const pElem = document.createElement('p');
// pElem.innerText = 'Second - Added with JS';
// pElem.classList.add('main-p')

// mainElem.appendChild(pElem);

// const mainParagraphChildren = document.getElementsByClassName('main-p');

// for(let p of mainParagraphChildren) {
//     p.innerText += ' FROM JS'
// }

// const headerThrees = document.getElementsByClassName('header-3');
// // [h3, h3, h3]

// for(let hThree of headerThrees) {
//     hThree.classList.add('red');
// }

const name = document.getElementById('name');

// click, change

const submitBtn = document.getElementById('submit-btn');
const submitClickHandler = (event) => {
    event.preventDefault();
    alert('hello, you clicked on the button')
}

submitBtn.addEventListener('click', submitClickHandler)