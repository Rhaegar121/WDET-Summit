const bar = document.querySelector('#mobile-nav');
const menu = document.querySelector('#mobile-menu');
const xmark = document.querySelector('#xmark');

function mobileMenu() {
  if (menu.style.display === 'block' && bar.style.display === 'none') {
    menu.style.display = 'none';
    bar.style.display = 'flex';
  } else {
    menu.style.display = 'block';
    bar.style.display = 'none';
  }
}

bar.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu);
xmark.onclick = () => {
  menu.style.display = 'block';
  bar.style.display = 'none';
};

const speakers = [
  {
    name: 'Chandler Bing',
    position: 'Chairman, Pacific Basin Economic Council (PBEC), United State.',
    description: 'A high-level International Forum of key policy and decision makers shaping the future of the Digital Economy.',
    image: 'photo/Chandler Bing.jpg',
  },

  {
    name: 'Monica Geller',
    position: 'Senior Advisor, Vice-Chair of the NewYork Economic Coorperation Foundation.',
    description: "Find out the latest information and trends in digital technology. What's the next big things?",
    image: 'photo/Monica Geller.jpg',
  },

  {
    name: 'Joey Tribbiani',
    position: 'Chief Executive Officer, U.S Digital Economy Coorperation (UDEC).',
    description: 'Evaluate the growth potential of the Digital Economy in ASEAN and the East Asia region as future growth shifts to this part of Asia.',
    image: 'photo/Joey Tribbiani.jpg',
  },

  {
    name: 'Ross Geller',
    position: 'Founder and Group Executive Chairman, Silverlake Axis Ltd, NewYork.',
    description: 'Understand how the Digital Economy and digital innovation can assist us in building a more sustainable world with the stronger focus on sustainability and sustainable development.',
    image: 'photo/Ross geller.jpg',
  },

  {
    name: 'Rachel Green',
    position: 'Chief Strategy Officer, Intellize Tech Services, NewYork.',
    description: 'Leverage opportunities to network with participants at the Forum and develop new business linkages.',
    image: 'photo/Rachel green.png',
  },

  {
    name: 'Phoebe Buffay',
    position: 'Chair, Co-Founder, People Centered Internet, USA.',
    description: 'The world must embrace this digital future and go big on digital. At the same time, we need to address digital divide and inequalities and promote digital inclusion.',
    image: 'photo/Phoebe buffay.jpg',
  },
];

const card = document.querySelector('.card');

speakers.forEach((i) => {
  card.innerHTML += `<div class="speaker-card">
    <div class="speaker-pic">
        <img src="photo/chess-board.png" alt="" class="overlay">
        <img src="${i.image}" alt="chandler bing picture" class="speaker-img">
    </div>
    <div class="speaker-detail">
        <h3 class="name">${i.name}</h3>
        <p class="position">${i.position}</p>
        <p class="text">${i.description}</p>
    </div>
</div>`;
});
