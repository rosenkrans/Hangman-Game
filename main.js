// $(document).ready(function() {
//     alert("Everything is ready, let's do this"); 
// })  


    //hard code the word banana as a variable
    var word = "banana";
    // console.log(word)
    //convert word into an array so letters can be counted and referenced
    var arraySplit = word.split("");
    console.log(arraySplit) 

    //create same class but separate div for each letter in the word
    // for(let i=0; i<arraySplit.length; i++){
    //     var blank = document.createElement('div');
    //     blank.id = 'each-letter' + [i];
    //     blank.innerText = '_ ';
    //     document.getElementById('letters').appendChild(blank); 

    // }

    for(let i=0; i<arraySplit.length; i++){
        var blank = document.createElement('div');
        // blank.id = 'each-letter' + [i];
        blank.className = 'letter';
        blank.setAttribute('value', arraySplit[i]);
        document.getElementById('letters').appendChild(blank)
        
    }

    // document.getElementsByClassName('letter').setAttribute(arraySplit[i])

    
    



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



