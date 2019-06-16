// $(document).ready(function() {
//     alert("Everything is ready, let's do this"); 
// })  

//hard code the word banana as a variable
var word = "BANANA";
// console.log(word)

//convert word into an array so letters can be counted and referenced
var wordArray = word.split("");
console.log(wordArray) 
//create a div for each letter in the word and add same class and dynamic value
for(let i=0; i<wordArray.length; i++){
    var blank = document.createElement('div');
    // blank.id = 'each-letter' + [i];
    blank.className = 'letter';
    blank.dataset.letter = wordArray[i];
    document.getElementById('letters').appendChild(blank)
}

//Create alphabet string and convert to array
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var alphArray = alphabet.split("");
console.log(alphArray) 

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
        //and reduce the 5/5 t 4/5 and so on...
        else{
            evt.target.style.backgroundColor = 'red';
            
            var remainTries = Number($(`.remain`).text())-1;
            console.log(remainTries)
            $(`.remain`).text(remainTries);
            if(remainTries<=0){
                alert('You are out of tries. The cake is a lie.')
            }
        }
        //disable the button after clicking
        evt.target.style.zIndex = -1;
        let counter = 0;
        document.querySelectorAll('.letter').forEach((test) => {
            
            if(test.getAttribute('data-letter')===test.innerHTML){
                counter++;
                if(counter === document.querySelectorAll('.letter').length){
                    setTimeout(function() {alert('You win!')}, 200)
                }
            }
        })
        

    })

    document.getElementById('alphabetID').appendChild(alphButtons) 
    
}













// Window load event used just in case window height is dependant upon content
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



