console.log('theme.ts loaded')

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
