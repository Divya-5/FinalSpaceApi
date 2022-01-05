const space_containers = document.getElementById('space_container');
const space_number = 47;

const fetchSpace = async() => {
    for(let i=1; i<=space_number; i++){
    await getSpace(i);
    }
}
const getSpace = async id => {
    const url = `https://finalspaceapi.com/api/v0/character/${id}`;
    const res = await fetch(url);
    const space = await res.json();
    createSpaceCard(space);
    console.log(space)
}
const createSpaceCard = space => {
const spaceEl = document.createElement('div');
spaceEl.classList.add('space');
const {id, name, img_url, species} = space;
// const type=types[0].type.name;
const spaceInnerHTML = `
<div class="img-container">
<img src="${img_url}"  alt="${name}">
  </div>
  <div class="info">
  <span class="number">${id}</span>
  <h3 class="name">${name}</h3>
  <small class="species">Species: <span>${species}</span></small>
</div>

`; 
spaceEl.innerHTML = spaceInnerHTML;
space_containers.appendChild(spaceEl);
}

fetchSpace();
//${space.name}
