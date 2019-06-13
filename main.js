// $(document).ready(function() {
//     alert("Everything is ready, let's do this"); 
// })  



    //hard code the word banana as a variable
    var word = "banana";
    // console.log(word)
    //convert word into an array so letters can be counted and referenced
    var arraySplit = word.split("");
    console.log(arraySplit) 

    //display array letters on screen
    // document.getElementById("letters").innerHTML = arraySplit;
    //get number of letters in array to use for number of blanks to create
    // var wordLength = arraySplit.length;
    // console.log(wordLength) 

    //create a separate div for each letter in the word
    for(let i=0; i<arraySplit.length; i++){
        var blank = document.createElement('div');
        blank.id = 'each-letter' + [i];
        blank.innerText = '_ ';
        document.getElementById('letters').appendChild(blank); 

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



