// $(document).ready(function() {
//     alert("Everything is ready, let's do this"); 
// })  

//word bank set to randomly pick a word
var words = ['BANANA', 'PEPPER', 'TOMATO', 'ONION', 'SQUASH', 'EGGPLANT', 'CABBAGE', 'LETTUCE', 'ARUGULA', 'RASPBERRIES', 'LIMES', 'BLACKBERRIES', 'STRAWBERRIES', 'PLUMS', 'COLLARDS', 'OKRA']
var word = words[Math.floor(Math.random()*words.length)]

//convert word into an array so letters can be counted and referenced
var wordArray = word.split("");
console.log(wordArray) 
//create a div for each letter in the word and add same class and dynamic value
for(let i=0; i<wordArray.length; i++){
    var blank = document.createElement('div');
    blank.className = 'letter';
    blank.dataset.letter = wordArray[i];
    document.getElementById('letters').appendChild(blank)
}

//Create alphabet string and convert to array
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var alphArray = alphabet.split("");
console.log(alphArray) 

//refresh page when click Clear button
$('.btn-warning').on('click', function(){
    window.location.reload()
})

//create a button for each alphabet letter and add class and value and visible letter
for(let i=0; i<alphArray.length; i++){
    var alphButtons = document.createElement('button');
    alphButtons.className = 'alph-buttons';
    alphButtons.dataset.letter = alphArray[i]; 
    alphButtons.innerText = alphArray[i];
    alphButtons.addEventListener('click', function(evt){
        if(wordArray.includes(evt.target.dataset.letter)){
            evt.target.style.backgroundColor = 'green';
            //get all divs with data-letter that = alphabet dataset.letter
            //populate text in the div to show on screen
            let allLetterClass = document.querySelectorAll('.letter')
            allLetterClass.forEach((matching) => {
                if(matching.getAttribute('data-letter') === evt.target.dataset.letter){
                    matching.innerHTML = matching.getAttribute('data-letter')
                } 
            })
        }
        
        //Else if the letter is not in the word, change the button to red 
        else{
            evt.target.style.backgroundColor = 'red';
            
            //update remaining tries each time a wrong letter is clicked
            var remainTries = Number($(`.remain`).text())-1;
            console.log(remainTries)
            $(`.remain`).text(remainTries);
            if(remainTries<=0){
                //Unhide lose screen. The cake is a lie.
                setTimeout(function(){
                    $('.game-screen').addClass('hidden')
                    $('.lose-screen').removeClass('hidden')
                }, 500)
                document.querySelector('.game-screen').classList.add('hidden')
            }
            //make cake fade with each wrong click
            var cakeAnimation = document.getElementById('cake')
            cakeAnimation.style.opacity = remainTries/6;
        }
        //disable the button after clicking
        evt.target.style.zIndex = -1;

        let counter = 0;
        document.querySelectorAll('.letter').forEach((updateBlank) => {
            //if letters match, update counter    
            if(updateBlank.getAttribute('data-letter')===updateBlank.innerHTML){
                counter++;
                //if all blanks are filled, unhide win screen
                if(counter === document.querySelectorAll('.letter').length){
                    setTimeout(function(){
                        $('.game-screen').addClass('hidden')
                        $('.win-screen').removeClass('hidden')
                    }, 500)
                    
                    
                }

            }
        })
        

    })
    //put alphabet letters in a row
    document.getElementById('alphabetID').appendChild(alphButtons) 
    
}




// Window load event used just in case window height is dependant upon content
// Pushes footer to bottom of page
$(window).bind("load", function() { 
       
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
        
    positionFooter();
    
    function positionFooter() {
    
             footerHeight = $footer.height();
             footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    
            if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                $footer.css({
                     position: "absolute"
                }).animate({
                     top: footerTop
                })
            } else {
                $footer.css({
                     position: "static"
                })
            }
            
    }

    $(window)
            .scroll(positionFooter)
            .resize(positionFooter)
            
});



