console.log('theme.ts loaded')

// DETECT DARK OR LIGHT MODE
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
console.log(theme);
if (theme == 'dark') {
  document.querySelector('body')?.classList.add('dark-theme');
} else {
  document.querySelector('body')?.classList.add('light-theme');
}