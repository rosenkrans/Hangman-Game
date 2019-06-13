// $(document).ready(function() {
//     alert("Everything is ready, let's do this"); 
// })  

//hard code the word banana as a variable
var word = "BANANA";
// console.log(word)

//convert word into an array so letters can be counted and referenced
var wordArray = word.split("");
console.log(wordArray) 

for(let i=0; i<wordArray.length; i++){
    var blank = document.createElement('div');
    // blank.id = 'each-letter' + [i];
    blank.className = 'letter';
    blank.setAttribute('value', wordArray[i]);
    document.getElementById('letters').appendChild(blank)
    
}


//Create alphabet string and convert to array
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var alphArray = alphabet.split("");
console.log(alphArray) 

for(let i=0; i<alphArray.length; i++){
    var alphButtons = document.createElement('button');
    alphButtons.className = 'alph-buttons';
    alphButtons.setAttribute('value', alphArray[i]); 
    alphButtons.innerText = alphButtons.getAttribute('value')
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



