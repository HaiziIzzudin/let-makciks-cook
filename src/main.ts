import './style.scss'
import './theme.ts'
import { jsondata } from './menucontents'
import { 
  FeatBtn, 
  
  W0Div, 
  W1Div, 
  W2Div,
  W3Div,
  W0DivFoo, 
  W1DivFoo, 
  W2DivFoo,
  W3DivFoo,

  A0Div, 
  A1Div, 
  A2Div,
  A3Div,
  A0DivFoo, 
  A1DivFoo, 
  A2DivFoo,
  A3DivFoo,
  
  ME0Div, 
  ME1Div, 
  ME2Div,
  ME3Div,
  ME0DivFoo, 
  ME1DivFoo, 
  ME2DivFoo,
  ME3DivFoo,

} from './headerfooter.ts';




export function setupMenu(element: HTMLDivElement) {
  
  let ethnicity: string = 'western';
  let menu_index = 0;

  const setMenu = (ethnicity:string, menu_index:number) => {
    let menuHTML = ''
  
    let imagecover = jsondata(ethnicity, menu_index, 'image')[0]
    let title = jsondata(ethnicity, menu_index, 'title')
    let description = jsondata(ethnicity, menu_index, 'description')
    let author = jsondata(ethnicity, menu_index, 'by')
    let duration = jsondata(ethnicity, menu_index, 'prep')
    let kcalvalue = jsondata(ethnicity, menu_index, 'kcal')
    let itemslist = jsondata(ethnicity, menu_index, 'ingredients')
    let instructlist = jsondata(ethnicity, menu_index, 'instructions')
    let images = jsondata(ethnicity, menu_index, 'image')
  
    menuHTML += `
    <section id="section1">
      <img src="${imagecover}" alt="Menu Image">
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </section>
    `
    menuHTML += `
    <section id="section2">
      <div>
        <h5>Recipe by</h5>
        <p>${author}</p>
      </div>
      <div>
        <h5>Preparation time (estimate)</h5>
        <p>${duration} minutes</p>
      </div>
      <div>
        <h5>Energy</h5>
        <p>${kcalvalue} kcal</p>
      </div>
      <div>
        <h5 style="margin-left: 25px;">Tools/apparatus</h5>
        <ul style="list-style-type: square;">
        ${Array.isArray(itemslist) ? itemslist.map(
          item => `<li>${item}</li>`
        ).join('') : ''}
        </ul>
      </div>
    </section>
    `
    menuHTML += `
    <section id="section34">
      <div>`
      for (let i = 0; i < instructlist.length; i++) {
        menuHTML += `
        <h5>Step ${i+1}</h5>
        <p>${instructlist[i]}</p>
      `}
    menuHTML += `
      </div>
      <div>`
      for (let i = 0; i < images.length; i++) {
        menuHTML += `
        <img src="${images[i]}">
        `
      }
    menuHTML += `</section>`
    
    if (element) { element.innerHTML = menuHTML }
  }
  


  // FEATURED CARD 'LEARN MORE' BUTTON
  if (FeatBtn) {
    FeatBtn.addEventListener('click', () => setMenu('western', 1), true)
  }
  

  // while (true) {
    // WESTERN - HEADER ANCHOR TAG LINKING TO FOOD
  W0Div.addEventListener('click', () => setMenu('western', 0), true)
  W1Div.addEventListener('click', () => setMenu('western', 1), true)
  W2Div.addEventListener('click', () => setMenu('western', 2), true)
  W3Div.addEventListener('click', () => setMenu('western', 3), true)

  // WESTERN - FOOTER ANCHOR TAG LINKING TO FOOD
  W0DivFoo.addEventListener('click', () => setMenu('western', 0), true)
  W1DivFoo.addEventListener('click', () => setMenu('western', 1), true)
  W2DivFoo.addEventListener('click', () => setMenu('western', 2), true)
  W3DivFoo.addEventListener('click', () => setMenu('western', 3), true)



  // ASIAN - HEADER ANCHOR TAG LINKING TO FOOD
  A0Div.addEventListener('click', () => setMenu('asian', 0), true)
  A1Div.addEventListener('click', () => setMenu('asian', 1), true)
  A2Div.addEventListener('click', () => setMenu('asian', 2), true)
  A3Div.addEventListener('click', () => setMenu('asian', 3), true)

  // ASIAN - FOOTER ANCHOR TAG LINKING TO FOOD
  A0DivFoo.addEventListener('click', () => setMenu('asian', 0), true)
  A1DivFoo.addEventListener('click', () => setMenu('asian', 1), true)
  A2DivFoo.addEventListener('click', () => setMenu('asian', 2), true)
  A3DivFoo.addEventListener('click', () => setMenu('asian', 3), true)



  // middleeast - HEADER ANCHOR TAG LINKING TO FOOD
  ME0Div.addEventListener('click', () => setMenu('middleeast', 0), true)
  ME1Div.addEventListener('click', () => setMenu('middleeast', 1), true)
  ME2Div.addEventListener('click', () => setMenu('middleeast', 2), true)
  ME3Div.addEventListener('click', () => setMenu('middleeast', 3), true)

  // middleeast - FOOTER ANCHOR TAG LINKING TO FOOD
  ME0DivFoo.addEventListener('click', () => setMenu('middleeast', 0), true)
  ME1DivFoo.addEventListener('click', () => setMenu('middleeast', 1), true)
  ME2DivFoo.addEventListener('click', () => setMenu('middleeast', 2), true)
  ME3DivFoo.addEventListener('click', () => setMenu('middleeast', 3), true)
  // }
  


  // NI ADALAH DEFAULT VALUE
  setMenu(ethnicity, menu_index)
  
}










setupMenu(document.querySelector<HTMLDivElement>('#specified-menu')!)