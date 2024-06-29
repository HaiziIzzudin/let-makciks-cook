import { jsondata } from './menucontents'



export function setupMenu(ethnicity:string, menu_index:number, element: HTMLDivElement) {
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
  
  element.innerHTML = menuHTML
}




