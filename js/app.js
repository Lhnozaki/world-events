//Make history, or better yet...make the World Events page interactive with events or event listeners for each exercise below.

// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in the h3 element and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.

function italics() {
    bread.style.fontStyle = 'italic';
    bread.style.color = 'cornflowerblue';
}

// 2. The Birth of the Internet
// Find the onmouseover event in the h3 element and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

function changeContent(){
    webby.innerHTML = webContents;
}

// 3. The Boxer Rebellion
// Find the onclick event in div id of 'fightDaPower' and create a function that will convert the Chinese text in the same div element into English (the English content is provided below).

var revolution = 'Boxer Uprising or Yihetuan Movement was an anti-imperialist uprising which took place in China towards the end of the Qing dynasty between 1899 and 1901. It was initiated by the Militia United in Righteousness, known in English as the "Boxers," and was motivated by proto-nationalist sentiments and opposition to foreign imperialism and associated Christian missionary activity.';

function translation(){
    fightDaPower.innerHTML = revolution;
}

// 4. The Great Depression
// Add an event listener to the h3 element id of 'hardTimes' and create a function to display the contents in the div element of 'depress'.

hardTimes.addEventListener('click', display1);

function display1(){
    if (depress.style.display === 'none'){
        depress.style.display = 'block';
    }else{
        depress.style.display = 'none';
    }
}

// 5. Apollo 11
// Add an event listener to the h3 element id of 'blastOff' and create a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener('click', MJ);

function MJ (){
    if (moonWalk.style.display === 'none'){
        moonWalk.style.display = 'block'
    }else{
        moonWalk.style.display = 'none';
    }
}

// 6. The American Civil War
// Add an event listener to the div element id of 'freedom' and create a function to remove all instances of 'corn' in the content.

freedom.addEventListener('click', mase);

function mase(){
    freedom.innerHTML = freedom.innerHTML.replace(/corn/g, '');
}

// 7. The Renaissance
// Add an event listener to the div element id of 'rebirth' and create a function to remove all the lowercase and uppercase z's in the content. 

rebirth.addEventListener('click', noMoreZs);

function noMoreZs(){
    rebirth.innerHTML = rebirth.innerHTML.replace(/z/gi, '');
}

// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element id of 'showBooks' and create a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];

showBooks.addEventListener('click', random);

function random(){
    mustRead.innerHTML = classics[Math.floor(Math.random() * classics.length)];
}

// 9. World War II
// Add an event listener to the image element and create a function that will toggle between images when hovering (mouseover) on the image.

// use the following image reference:
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73

var newImg = document.getElementsByTagName('img');
newImg[9].id = 'wwii';

wwii.addEventListener('mouseover', nine);

function nine(){
    if(wwii.src === "https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg"){
        wwii.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73';
    }else{
        wwii.src = "https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg"
    }
}


// 10. The Industrial Revolution
// Add an event listener to the h3 element and create a function that will reverse the contents in the div element id of 'gameChanger'

gameChanger.addEventListener('mouseover', weird);

function weird(){
    var contents = gameChanger.innerText;
    var step1 = contents.split('');
    var step2 = step1.reverse();
    var step3 = step2.join('');
    gameChanger.innerText = step3;
}

// Final Boss
// Add event listeners for the thumbs up and thumbs down images that will count the number of times the thumb has been clicked on. 

var voting = document.getElementsByClassName('fas fa-thumbs-up');

for (i=0;i<voting.length;i++){
    voting[i].addEventListener('click', counter);
}

function counter(){
    var x = this.querySelectorAll('.up')[0];
    //var y = this.querySelectorAll('.down')[0];
    x.innerHTML++;
    //y.innerHTML++;
}

var voting2 = document.getElementsByClassName('fas fa-thumbs-down');

for (i=0;i<voting.length;i++){
    voting2[i].addEventListener('click', counter2);
}

function counter2(){
    //var x = this.querySelectorAll('.up')[0];
    var y = this.querySelectorAll('.down')[0];
    //x.innerHTML++;
    y.innerHTML++;
}

