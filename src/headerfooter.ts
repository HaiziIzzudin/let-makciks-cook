import { jsondata, menulen } from './menucontents'


// THE CONTENT OF NAVBAR
class customHeader extends HTMLElement {
  connectedCallback() {
    
    let navHTML = ''

    navHTML += `
    <nav>
      
      <div class="nav-flex">
      
        <img src="https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/logo.png" id="logo">
        
        <div class="c-iblk">
          
          <a href="index.html">Home</a>
          
          <span>
            <a href="#" id="W-ddown">Western<i class="fa-solid fa-caret-down"></i></a>
            <a href="#" id="A-ddown">Asian<i class="fa-solid fa-caret-down"></i></a>
            <a href="#" id="ME-ddown">Middle East<i class="fa-solid fa-caret-down"></i></a>
          </span>
          
          <a href="forms.html" class="ripple">Want to be featured?</a>
          
          <a href="#" id="x-button" class=""><i class="fa-solid fa-circle-xmark"></i></a>

          <a href="#" class="theme-button"><i class="fa-solid fa-circle-half-stroke"></i></a>
          

        </div>
      
      </div>
    
    </nav>
    
    
    <div id="W-menulist" class="">`
    for (let k = 0; k < menulen('western'); k++) {
      navHTML += `
      <div id="W${k}">
        <img src="${jsondata('western', k, 'image')[0]}">
        <h2>${jsondata('western', k, 'title')}</h2>
      </div>
      `
    } navHTML += `</div>
    <div id="A-menulist" class="">`

    for (let k = 0; k < menulen('asian'); k++) {
      navHTML += `
      <div id="A${k}">
        <img src="${jsondata('asian', k, 'image')[0]}">
        <h2>${jsondata('asian', k, 'title')}</h2>
      </div>
      `
    } navHTML += `</div>
    <div id="ME-menulist" class="">`

    for (let k = 0; k < menulen('middleeast'); k++) {
      navHTML += `
      <div id="ME${k}">
        <img src="${jsondata('middleeast', k, 'image')[0]}">
        <h2>${jsondata('middleeast', k, 'title')}</h2>
      </div>
      `
    } navHTML += `</div>`
    
    

    this.innerHTML = navHTML
  }
}
customElements.define ('custom-header', customHeader)





class customFooter extends HTMLElement {
  connectedCallback() {
    let footerHTML = `
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

      <div id="sitemap-link">
        <h5>Western</h5>`
        for (let k = 0; k < menulen('western'); k++) {
          footerHTML += `<a href="#" id="W${k}F">${jsondata('western', k, 'title')}</a>`}
        footerHTML += `</div>
        
      <div id="sitemap-link">
        <h5>Asian</h5>`
        for (let k = 0; k < menulen('asian'); k++) {
          footerHTML += `<a href="#" id="A${k}"F>${jsondata('asian', k, 'title')}</a>`}
        footerHTML += `</div>
      
      <div id="sitemap-link">
        <h5>Middle East</h5>`
        for (let k = 0; k < menulen('middleeast'); k++) {
          footerHTML += `<a href="#" id="ME${k}F">${jsondata('middleeast', k, 'title')}</a>`}
        footerHTML += `</div>
      <div id="sitemap-link sitemap-main">
        <a href="index.html">Home</a>
        <a href="forms.html">Be Featured!</a>
        <a href="#">Carrers</a>
      </div>

    </footer>
    `

    this.innerHTML = footerHTML
  }
}
customElements.define ('custom-footer', customFooter)




///////////////////////////////////////
/// ADD QUERY SELECTOR FOR DROPDOWN ///
///////////////////////////////////////
let xbtn = document.querySelector("#x-button");

/// FOR WESTERN
let Wddown = document.querySelector('#W-ddown');
let Wrespon = document.querySelector('#W-menulist');

// WDDOWN ON MOUSEENTER
Wddown?.addEventListener('mouseenter', () => {
  Wrespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});
Wrespon?.addEventListener('mouseenter', () => {
  Wrespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});

// WDDOWN ON MOUSELEAVE
Wddown?.addEventListener('mouseleave', () => {
  Wrespon?.classList.remove('show');
  xbtn?.classList.remove('xbtn-show'); 
});
Wrespon?.addEventListener('mouseleave', () => {
  Wrespon?.classList.remove('show'); 
  xbtn?.classList.remove('xbtn-show');
});



/// FOR ASIAN
let Addown = document.querySelector('#A-ddown');
let Arespon = document.querySelector('#A-menulist');

// Addown ON MOUSEENTER
Addown?.addEventListener('mouseenter', () => {
  Arespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});
Arespon?.addEventListener('mouseenter', () => {
  Arespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});

// Addown ON MOUSELEAVE
Addown?.addEventListener('mouseleave', () => {
  Arespon?.classList.remove('show');
  xbtn?.classList.remove('xbtn-show'); 
});
Arespon?.addEventListener('mouseleave', () => {
  Arespon?.classList.remove('show'); 
  xbtn?.classList.remove('xbtn-show');
});



/// FOR MIDDLEEAST
let MEddown = document.querySelector('#ME-ddown');
let MErespon = document.querySelector('#ME-menulist');

// MEddown ON MOUSEENTER
MEddown?.addEventListener('mouseenter', () => {
  MErespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});
MErespon?.addEventListener('mouseenter', () => {
  MErespon?.classList.add('show'); 
  xbtn?.classList.add('xbtn-show');
});

// MEddown ON MOUSELEAVE
MEddown?.addEventListener('mouseleave', () => {
  MErespon?.classList.remove('show');
  xbtn?.classList.remove('xbtn-show'); 
});
MErespon?.addEventListener('mouseleave', () => {
  MErespon?.classList.remove('show'); 
  xbtn?.classList.remove('xbtn-show');
});







// HEADER - ANCHOR TAG LINKING TO FOOD
export const W0Div = document.getElementById('W0') as HTMLElement;
export const W1Div = document.getElementById('W1') as HTMLElement;
export const W2Div = document.getElementById('W2') as HTMLElement;
export const W3Div = document.getElementById('W3') as HTMLElement;

// FOOTER - ANCHOR TAG LINKING TO FOOD
export const W0DivFoo = document.getElementById('W0F') as HTMLElement;
export const W1DivFoo = document.getElementById('W1F') as HTMLElement;
export const W2DivFoo = document.getElementById('W2F') as HTMLElement;
export const W3DivFoo = document.getElementById('W3F') as HTMLElement;








// FEAT BUTTON CSS ANIMATION ON CLICK
const menuclickarea = document.getElementById('W-menulist') as HTMLDivElement; // receive click
export const FeatBtn = document.getElementById('featured-btn') as HTMLButtonElement; // receive click
export const fatfooter = document.getElementById('sitemap-link') as HTMLDivElement; // receive click

const showMenu = document.getElementById('specified-menu') as HTMLDivElement; // reactions
const featuredcard = document.getElementById('featured-card') as HTMLDivElement; // reactions

menuclickarea.addEventListener('click', () => {
  showMenu.classList.add('specified-menu-show');
  featuredcard.classList.add('featured-card-hide');
  featuredcard.classList.remove('featured-card-show');
})
FeatBtn.addEventListener('click', () => {
  showMenu.classList.add('specified-menu-show');
  featuredcard.classList.add('featured-card-hide');
  featuredcard.classList.remove('featured-card-show');
})
fatfooter.addEventListener('click', () => {
  showMenu.classList.add('specified-menu-show');
  featuredcard.classList.add('featured-card-hide');
  featuredcard.classList.remove('featured-card-show');
})














// UNLESS OVERRIDING LIGHT/DARK CONFIGURATIONS
let themeButton = document.querySelector('.theme-button');
let myQuerySelector = document.querySelector("body");
themeButton?.addEventListener('click', () => {
  if (myQuerySelector?.classList.contains('light-theme')) {
    console.log('changing to dakr theme')
    myQuerySelector?.classList.remove('light-theme');
    myQuerySelector?.classList.add('dark-theme');
  } else {
    console.log('changing to light theme')
    myQuerySelector?.classList.remove('dark-theme');
    myQuerySelector?.classList.add('light-theme');
  }
});
