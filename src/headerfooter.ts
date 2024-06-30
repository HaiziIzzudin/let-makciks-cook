import { jsondata, menulen } from './menucontents'


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
    }
    
    
    navHTML += '</div>'

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
          footerHTML += `<a href="#" id="W${k}">${jsondata('western', k, 'title')}</a>`}
        footerHTML += `</div>
        
      <div id="sitemap-link">
        <h5>Asian</h5>`
        for (let k = 0; k < menulen('asian'); k++) {
          footerHTML += `<a href="#" id="W${k}">${jsondata('asian', k, 'title')}</a>`}
        footerHTML += `</div>
      
      <div id="sitemap-link">
        <h5>Middle East</h5>`
        for (let k = 0; k < menulen('middleeast'); k++) {
          footerHTML += `<a href="#" id="W${k}">${jsondata('middleeast', k, 'title')}</a>`}
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





export const W0Div = document.getElementById('W0') as HTMLElement;
export const W1Div = document.getElementById('W1') as HTMLElement;





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
