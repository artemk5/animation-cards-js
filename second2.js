
var  heightBlock = document.getElementById("block").clientHeight;
var  heightSmall1 = document.getElementById("small1").clientHeight;
var small1 = document.getElementById('small1');
var small2 = document.getElementById('small2');

window.addEventListener('scroll' , function(){
   
    small1.style.transform = "translateY(0)";
    small2.style.transform = "translateY(0)";

    var myBlock = document.getElementById("block").getBoundingClientRect();
    const screenHeight = window.screen.height

    if ( myBlock.top <  (screenHeight / 1.5 )  )  {
        document.getElementById("block").style.backgroundColor = "lightblue";

            if ( ((heightBlock - heightSmall1 ) / 2)  > ((screenHeight/ 1.5 -  myBlock.top ) / 5 )){

                var yUp2 = "translateY(" + Math.round((screenHeight/ 1.5 -  myBlock.top ) / 5 )  + 'px' + ")";
                var yUp1 = "translateY(" + Math.round((myBlock.top - screenHeight/ 1.5  ) / 5 )  + 'px' + ")";
                small2.style.transform = yUp2;
                small1.style.transform = yUp1;

            }else{
                yUp1 = "translateY(" + (( heightSmall1 - heightBlock) / 2)  + 'px' + ")";
                small1.style.transform = yUp1;
                yUp2 = "translateY(" + ((heightBlock - heightSmall1 ) / 2)  + 'px' + ")";
                small2.style.transform = yUp2;
            }
    }else{
        
        document.getElementById("block").removeAttribute("style");
        
    }
});

small1.addEventListener('click' , function(e){
    small1.classList.toggle('active');
});