import './style.scss'
import * as menuJSON from './../xml2jsParse/menu.json'


const menuKindSelect = menuJSON.recipe

const menuSelectWestern = menuKindSelect.western[0] // no selection

const WesternMenuSelection = menuSelectWestern.menu // yg ni kita expose utk index selection

type MenuType = {
  title: string[];
  description: string[];
  by: string[];
  preptime: string[];
  kcal: string[];
  ingredients: { item: string[] }[];
  instructions: { step: string[] }[];
  images: { image: string[] }[];
};





let menuArr: string[] = []; // Empty array of strings
let menuDesc: string[] = []; // Empty array of strings
let menuBy: string[] = []; // Empty array of strings
let menuPrep: string[] = []; // Empty array of strings
let menuKcal: string[] = []; // Empty array of strings

let menuPhoto: string[] = []; // Empty array of strings
let listSteps: string[]; // Empty array of strings
let listItems: string; // Empty array of strings

// Add elements later
for (let i = 0; i < WesternMenuSelection.length; i++) {
  const menu = WesternMenuSelection[i] as MenuType;
  
  listItems = (menu.ingredients[0].item).map((item) => `<li>${item}</li>`).join('');
  listSteps = (menu.instructions[0].step).map((step) => `${step}`).map((step) => step);
  const listImages = (menu.images[0].image).map((image) => `${image}`).map((image) => image);
  
  menuArr.push(menu.title[0])
  menuDesc.push(menu.description[0])
  menuBy.push(menu.by[0])
  menuPrep.push(menu.preptime[0])
  menuKcal.push(menu.kcal[0])

  menuPhoto.push(listImages[0])
}













// THE CONTENT OF NAVBAR
class customHeader extends HTMLElement {
  connectedCallback() {
    
    let navHTML = ''

    navHTML += `
    <nav>
      
      <div class="nav-flex">
      
        <img src="images/logo.png" id="logo">
        
        <div class="c-iblk">
          
          <a href="index.html">Home</a>
          
          <span>
            <a href="#" id="W-ddown">Western<i class="fa-solid fa-caret-down"></i></a>
            <a href="#">Asian<i class="fa-solid fa-caret-down"></i></a>
            <a href="#">Middle East<i class="fa-solid fa-caret-down"></i></a>
          </span>
          
          <a href="#" class="ripple">Want to be featured?</a>
          
          <a href="#" id="x-button" class=""><i class="fa-solid fa-circle-xmark"></i></a>

          <a href="#" class="theme-button"><i class="fa-solid fa-circle-half-stroke"></i></a>
          

        </div>
      
      </div>
    
    </nav>
    
    
    <div id="W-menulist" class="">`
    
    for (let k = 0; k < menuArr.length; k++) {
      navHTML += `
      <div id="W${k}">
        <img src="${menuPhoto[k]}">
        <h2>${menuArr[k]}</h2>
        <p>${menuDesc[k]}</p>
      </div>
      `
    }
    
    
    navHTML += '</div>'

    this.innerHTML = navHTML
  }
}
customElements.define ('custom-header', customHeader)














// UPON CLICKING, SET MENU SELECTOR TO CORRESPONDING OUTPUT


async function updateReturnCookie(value: number): Promise<number> {
  document.cookie = `menuselection=${value}`;

  let cookieString = document.cookie;
  console.log('cookie=' + cookieString)
  
  let cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('menuselection=')) {
      const value = parseInt(cookie.split('=')[1]);
      return value;
    }
  }
  return 0;
}

console.log('cookietest =' + updateReturnCookie(0))


let menuselector:number = 0;
let myDiv: HTMLDivElement | null;

myDiv = document.getElementById('W0') as HTMLDivElement;
myDiv.addEventListener('click', async () => {
  menuselector = await updateReturnCookie(0);
  window.location.href = './menu.html';
});

myDiv = document.getElementById('W1') as HTMLDivElement;
myDiv.addEventListener('click', async () => {
  menuselector = await updateReturnCookie(1);
  window.location.href = './menu.html';
});










class customMenu extends HTMLElement {
  
  connectedCallback() {
    const section = this.getAttribute('section') || 0; 

    let menuHTML = '';

    if (typeof section === 'string' && parseInt(section) === 1) {
      menuHTML += `
      <h1>${menuArr[menuselector]}</h1>
      <p>${menuDesc[menuselector]}</p>
      `
    } else if (typeof section === 'string' && parseInt(section) === 2) {
      menuHTML += `
      <div>
        <h5>Recipe by</h5>
        <p>${menuBy[menuselector]}</p>
      </div>
      <div>
        <h5>Preparation time (estimate)</h5>
        <p>${menuPrep[menuselector]} minutes</p>
      </div>
      <div>
        <h5>Energy</h5>
        <p>${menuKcal[menuselector]} kcal</p>
      </div>
      <div>
        <h5 style="margin-left: 25px;">Tools/apparatus</h5>
        <ul style="list-style-type: square;">
          ${listItems}
        </ul>
      </div>
      `
    } else if (typeof section === 'string' && parseInt(section) === 3) {
      
      for (let i = 0; i < listSteps.length; i++) {
        menuHTML += `
        <h5>Step ${i+1}</h5>
        <p>${listSteps[i]}</p>
        `
      }
    }
    else if (typeof section === 'string' && parseInt(section) === 4) {
      menuHTML += `
      <img src="images/pizza.jpg">
      `
    }
    this.innerHTML = menuHTML;
  }
}
customElements.define ('custom-menu', customMenu)



















































































































































class customFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div>
        <img src="images/logo.png" id="logo">
        <p><i>Let Makciks Cook</i>is a website dedicated to sharing recipes and cooking tutorials for variety
        of menus, including Western, Asian, and Middle East.
        <br><br>
        Our company address:<br>
        Jalan Kiambang,<br>
        12345 Off Jalan Petra,<br>
        Selangor D.E..
        <br><br>
        Any enquiries, kindly email to:<br>
        <a href="mailto:customersupport@makcikscook.com">customersupport@makcikscook.com</a>
        </p>
      </div>

      <div class="sitemap-link">
        <h5>Western</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link">
        <h5>Asian</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link">
        <h5>Middle East</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link sitemap-main">
        <a href="index.html">Home</a>
        <a href="#">Be Featured!</a>
        <a href="#">Carrers</a>
      </div>

    </footer>
    `
  }
}
customElements.define ('custom-footer', customFooter)



















// ADD QUERY SELECTOR FOR DROPDOWN
let Wddown = document.querySelector('#W-ddown');
let Wrespon = document.querySelector('#W-menulist');
let xbtn = document.querySelector("#x-button")

Wddown?.addEventListener('mouseenter', () => {
  Wrespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});
Wrespon?.addEventListener('mouseenter', () => {
  Wrespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});
Wddown?.addEventListener('mouseleave', () => {
  Wrespon?.classList.remove('show');
  xbtn?.classList.remove('xbtn-show'); 
});
Wrespon?.addEventListener('mouseleave', () => {
  Wrespon?.classList.remove('show'); 
  xbtn?.classList.remove('xbtn-show');
});





















////// NANTI KALAU PACKAGE.JSON ROSAK KO MASUKKAN BALIK EA
// "dev": "vite --host",
// "build": "tsc && vite build",
// "preview": "vite preview"