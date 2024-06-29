import * as menuJSON from './../xml2jsParse/menu.json'


// TYPE INFERENCE
type MenuType = {
  title: string[];
  description: string[];
  by: string[];
  preptime: string[];
  kcal: string[];
  ingredients: { item: string[] }[];
  instructions: { step: string[] }[];
  images: { image: string[] }[];
}[];


export function jsondata(ethnicity:string, menu_index:number, attribute:string) {
  const menuKindSelect = menuJSON.recipe // load menu.json, then recipe root tags
  let MenuArr: MenuType;

  if (ethnicity === 'western') {
    MenuArr = (menuKindSelect.western[0]).menu // yg ni kita expose utk index selection
  } else if (ethnicity === 'asian') {
    MenuArr = (menuKindSelect.asian[0]).menu // yg ni kita expose utk index selection
  } else if (ethnicity === 'middleeast') {
    MenuArr = (menuKindSelect.middleeast[0]).menu // yg ni kita expose utk index selection
  } else {
    throw new Error('Invalid ethnicity');
  }

  const menu = MenuArr[menu_index];

  if        (attribute === 'title') {
    return menu.title[0]
  } else if (attribute === 'description') {
    return menu.description[0]
  } else if (attribute === 'by') {
    return menu.by[0]
  } else if (attribute === 'prep') {
    return menu.preptime[0]
  } else if (attribute === 'kcal') {
    return menu.kcal[0] 
  } else if (attribute === 'ingredients') { // return ingredients array
    return menu.ingredients[0].item 
  } else if (attribute === 'instructions') { // return instructions array
    return menu.instructions[0].step 
  } else if (attribute === 'image') { // return photo array
    return menu.images[0].image 
  } else {
    throw new Error('Invalid attribute');
  }
}


export function menulen(ethnicity:string) {
  const menuKindSelect = menuJSON.recipe // load menu.json, then recipe root tags
  let MenuArr: MenuType;

  if (ethnicity = 'western') {
    MenuArr = (menuKindSelect.western[0]).menu // yg ni kita expose utk index selection
  } else if (ethnicity = 'asian') {
    MenuArr = (menuKindSelect.asian[0]).menu // yg ni kita expose utk index selection
  } else if (ethnicity = 'middleeast') {
    MenuArr = (menuKindSelect.middleeast[0]).menu // yg ni kita expose utk index selection
  } else {
    throw new Error('Invalid ethnicity');
  }

  return MenuArr.length
}



console.log(jsondata('western', 1, 'title'))
console.log(jsondata('western', 0, 'description'))