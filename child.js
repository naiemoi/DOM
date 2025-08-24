//create element and set inner Text or innerHTML
const newchild=document.createElement('li');
newchild.innerText='Ronaldo';

//find the  parent where the chile set
const playerList=document.getElementById('player-list');

//append the child to the parent
playerList.appendChild(newchild);