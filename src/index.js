// write your code here
//Global variables

const ramenMenuDiv = document.getElementById('ramen-menu')
const ramenDetailImage = document.querySelector ('.detail-image')
const ramenNameElement = document.querySelector('.name')
const ramenRestaurantElement = document.querySelector('.restaurant')
const ramenRatingElement = document.getElementById ('rating-display')
const ramenCommentElement = document.getElementById('comment-display')
const ramenForm = document.getElementById('new-ramen')



fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then(ramens => ramens.forEach(renderRamen));


function renderRamen(ramen){
  const ramenImageElement = document.createElement('img');
  ramenImageElement.src = ramen.image;
  ramenMenuDiv.append(ramenImageElement);

  ramenImageElement.addEventListener('click',()=> addRamenListener(ramen));
}
  //click on image and display details
function addRamenListener(ramen) {
console.log(ramen)
ramenDetailImage.src = ramen.image
ramenNameElement.textContent = ramen.name
ramenRestaurantElement.textContent = ramen.restaurant 
ramenRatingElement.textContent= ramen.rating
ramenCommentElement.textContent = ramen.comment
}

//new ramen form
//step 1 selecting HTML element
//step 2 grabbing input data from user
//step 3 sending the input data to DOM tree/server




  ramenForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    let newRamen = {
      "name": event.target['new-name'].value,
      "restaurant": event.target['new-restaurant'].value,
      "image":event.target['new-image'].value,
      "rating":event.target["new-rating"].value,
      "comment":event.target['new-comment'].value
    }
     renderRamen(newRamen)
  }
   )



  
// newRamenForm(); 
// console.log('hello world from line 59')

// const addRamenListener = () => {
  
// }

