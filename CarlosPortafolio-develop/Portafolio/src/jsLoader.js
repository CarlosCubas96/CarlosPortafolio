// Carga específica por página
const page = document.body.dataset.page;

switch (page) {
  case 'index':
    import('./js/main.js');
    break;
  case 'about':
    import('./js/about.js');
    break;
  default:
    console.log('Sin script específico');
}
