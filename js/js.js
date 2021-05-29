window.onload=function(){

    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var theCounter = document.getElementById('theCounter');
    var currentValue = 0;

    function increaseNumber() {
        currentValue+=1;
        theCounter.innerHTML=currentValue;
    }

    function decreaseNumber() {
        currentValue-=1;
        theCounter.innerHTML=currentValue;
    }

    plusButton.addEventListener('click',increaseNumber);
    minusButton.addEventListener('click',decreaseNumber);

};