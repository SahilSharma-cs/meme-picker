import { catsData } from "./data.js"
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModalCloseBtn =  document.getElementById('meme-modal-close-btn')
let selectedCat = null

emotionRadios.addEventListener("change",highlight)
memeModalCloseBtn.addEventListener('click',closeModal)
getImageBtn.addEventListener('click',renderCat)

function highlight(e){
    const radio = document.getElementsByClassName('radios')
    for(let radios of radio){
        radios.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight') // e.target.id , .prentElement , classList.add()
}

function closeModal(){
    memeModal.style.display= 'none'
}

// render cat img and loading spinner in modal
function renderCat(){
    const catObject = getSingleObject()
    selectedCat = catObject

    memeModal.style.display= 'flex'
    memeModalInner.innerHTML=`
        <div class="loading">
            <img src="./images/loading.gif" alt="loading">
            <p>Loading...</p>
        </div>
    `
    setTimeout(function(){

    memeModalInner.innerHTML = `
        <div class='img-container'>
            <img
                class="cat-img"
                src ="./images/${catObject.image}"
                alt ="${catObject.alt}"
            >
            <div class="overlay">
                <img class="download" src="./images/download.svg" alt="download the cat images or gif">
            </div>
        </div>
    `},1500)
}

function getSingleObject(){
    const singleObject = getMatchingArray()

    if (singleObject.length === 1){
        return singleObject[0]
    } else{
        const randomNumber = Math.floor(Math.random()*singleObject.length)
        return singleObject[randomNumber]
    }
    return singleObject
}

function getMatchingArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedOption = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked

        const matchingCatArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedOption) && cat.isGif
            }else{
                return cat.emotionTags.includes(selectedOption)
            }
        })
        return matchingCatArray
    }
}

memeModalInner.addEventListener('click',function(e){
    if (e.target.classList.contains('download')){
        downloadImage(`./images/${selectedCat.image}`)
    }
})

function downloadImage(imageSrc){
    const link = document.createElement('a')
    link.href= imageSrc
    link.download = selectedCat.image
    link.click()
}

// render radio

function getEmotionArray(cats){
    let emotionArray = []
    for (let cat of cats){
        for( let emotion of cat.emotionTags){
                if (!emotionArray.includes(emotion)){   //i learn .includes in array
                emotionArray.push(emotion) // push in array
            }
        }
    }
    return emotionArray
}

function renderEmotion(cats){
let radioItems = '' // create empty string variable
const emotions = getEmotionArray(cats)
for (let emotion of emotions){   
    radioItems += `
    <div class=radios>
        <label for="${emotion}">${emotion}</label>
        <input
            type =  "radio"
            id = "${emotion}"
            name = "emotion"
            value = "${emotion}"
        >
    </div>
`
}
emotionRadios.innerHTML = radioItems
}

renderEmotion(catsData)
