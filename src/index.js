const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');
const detailInfo = document.getElementById('ramen-detail');
const ramenName = document.querySelector('.name');
const ramenRest = document.querySelector('.restaurant');
const ramenDetail = document.querySelector('.detail-image')
const ramenRating = document.querySelector('#rating-display');
const ramenComment = document.querySelector('#comment-display');


document
.getElementById('new-ramen')
.addEventListener('submit', (e) => {
    e.preventDefault();
    let createNew = {
        name: e.target.elements['name'].value,
        restaurant: e.target.elements['restaurant'].value,
        image: e.target.elements['image'].value,
        rating: e.target.elements['rating'].value,
        comment: e.target.elements['new-comment'].value
    };
    
    renderRamen(createNew)
    e.target.reset();
});

fetch(ramenAPI)
.then((res) => res.json())
.then(renderRamens);


function renderRamens(ramens) {
   ramens.forEach(renderRamen);
};

function renderRamen(ramen) {
   const image = document.createElement('img');
   image.src = ramen.image;
   ramenMenu.append(image);

    image.addEventListener('click', () => {
        currentRamen = ramen;
        showInfo(ramen);
    });
};

function showInfo(ramen) {
ramenName.innerText = ramen.name;
ramenRest.innerText = ramen.restaurant;
ramenDetail.src = ramen.image;

ramenRating.innerText = ramen.rating;
ramenComment.innerText = ramen.comment;
};