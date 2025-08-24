const mainContainer=document.getElementById('main-container');
const places=document.createElement('section');

const h1=document.createElement('h1');
h1.innerText='list of name';
places.appendChild(h1);
const  ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='rahman';
ul.appendChild(li1);
places.appendChild(ul);

const li2=document.createElement('li');
li2.innerText='kajal';
ul.appendChild(li2);


//easier to create section
const bookSection=document.createElement('section');
bookSection.innerHTML=`
<h1>books i need to read</h1>
<ul>
  <li>physics</li>
  <li>chemisttry</li>
</ul>
`
mainContainer.appendChild(bookSection);