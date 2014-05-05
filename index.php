<!doctype>
<html>
  <head>
    <title>Testando</title>
    <meta charset="utf-8">
    <link href="css/slider.css" rel="stylesheet">    
  </head>
  <body>    
    <div class="slider-container"> 
      <div class="banner">
        <a href="">
          <img src="images/img1.jpg" alt="Imagem 2">
          <span class="legend">Descrição da imagem 1</span>
        </a>
      </div>     
      <div class="banner">
        <a href="">
          <img src="images/img2.jpg" alt="Imagem 1">
          <span class="legend">Descrição da imagem 2</span>
        </a>
      </div>               
    </div>
    <script src="js/slider.js"></script>    
    <script>    

    Slider.start({
      // width  :  960,
      // height : 360,
      time  : 3000
    });

    </script>
  </body>
</html>
