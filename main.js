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
        }
        
    })

    document.getElementById('alphabetID').appendChild(alphButtons) 
    
}

// for(let i=0; i<alphArray.length; i++){
//     alphButtons.addEventListener('click', function(evt){
//         var alphCompare = document.querySelector('alph-buttons') 
//         //not sure if I need this
//         var wordCompare = document.querySelectorAll('letter')

//         alphCompare.forEach('value'){
//             if(//value of alph-buttons[i] === value of letter[i])
//             {
//                 evt.target.style.backgroundColor = 'green';
//                 //disable alphabet button
//                 //populate the letter in the div
//             }
//             //Else if the letter is not in the word, change the button to red 
//             //and reduce the 5/5 t 4/5 and so on...
//         }
//     }   
// }













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



