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
          
          <a href="#" class="ripple">Want to be featured?</a>
          
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
        <p>${jsondata('western', k, 'description')}</p>
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












export let ethnicity:string;
export let menu_index:number;
let myDiv: HTMLDivElement | null;


export function gotoMenu(ethnicity:string, menu_index:number) {
  ethnicity = ethnicity
  menu_index = menu_index
  console.info('menudata=' + ethnicity + menu_index)
}






myDiv = document.getElementById('W0') as HTMLDivElement;
myDiv.addEventListener('click', () => {
  gotoMenu('western', 0)
});
myDiv = document.getElementById('W1') as HTMLDivElement;
myDiv.addEventListener('click', () => {
  gotoMenu('western', 1)
});