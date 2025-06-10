$(document).ready(function() {
  $('#galeria').magnificPopup({
    delegate: 'a', 
    type: 'image', 
    gallery: {
      enabled: true, 
      navigateByImgClick: true, 
    },
    image: {
      tError: '<a href="%url%">A imagem #%curr%</a> não pôde ser carregada.', 
      titleSrc: function(item) {
        
        return item.el.find('img').attr('alt'); 
      }
    },
    callbacks: {
      open: function() {
       
      },
      close: function() {
       
      }
    }
  });
});