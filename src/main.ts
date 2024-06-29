import './style.scss'





class customMenu extends HTMLElement {
  connectedCallback() {
    const section = this.getAttribute('section') || 0; 

    let menuHTML = '';

    if (typeof section === 'string' && parseInt(section) === 1) {
      menuHTML += `
      <h1>hello</h1>
      <p>whoareyou</p>
      `
    } else if (typeof section === 'string' && parseInt(section) === 2) {
      menuHTML += `
      <div>
        <h5>Recipe by</h5>
        <p>What</p>
      </div>
      <div>
        <h5>Preparation time (estimate)</h5>
        <p>15 min</p>
      </div>
      <div>
        <h5>Energy</h5>
        <p>1000 kcal</p>
      </div>
      <div>
        <h5>Tools/apparatus</h5>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ol>
      </div>
      `
    } else if (typeof section === 'string' && parseInt(section) === 3) {
      menuHTML += `
      <h5>Step 1</h5>
      <p>do this</p>

      <h5>Step 2</h5>
      <p>do this</p>

      <h5>Step 3</h5>
      <p>do this</p>
      `
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























// THE CONTENT OF NAVBAR
class customHeader extends HTMLElement {
  connectedCallback() {
    
    this.innerHTML = `
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

    <div id="W-menulist" class="">
      <div>
        <img src="images/pizza.jpg"><h2>Menu Western 1</h2><p>Description of menu 1</p></div>
      <div>
        <img src="images/pizza.jpg"><h2>Menu Western 2</h2><p>Description of menu 2</p></div>
      <div>
        <img src="images/pizza.jpg"><h2>Menu Western 3</h2><p>Description of menu 3</p></div>
      <div>
        <img src="images/pizza.jpg"><h2>Menu Western 4</h2><p>Description of menu 4</p></div>
    </div>
    `
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
























// DETECT DARK OR LIGHT MODE
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
console.log(theme);
if (theme == 'dark') {
    document.querySelector('body')?.classList.add('dark-theme');
} else {
    document.querySelector('body')?.classList.add('light-theme');
}




// UNLESS OVERRIDING LIGHT/DARK CONFIGURATIONS
let themeButton = document.querySelector('.theme-button');
let myQuerySelector = document.querySelector("body")
themeButton?.addEventListener('click', () => {
    if (myQuerySelector?.classList.contains('light-theme')) {
        myQuerySelector?.classList.remove('light-theme');
        myQuerySelector?.classList.add('dark-theme');
    } else {
        myQuerySelector?.classList.remove('dark-theme');
        myQuerySelector?.classList.add('light-theme');
    }
});








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