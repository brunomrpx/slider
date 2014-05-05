slider
======

*Slider simples feito em Javascript*

**Utilização**

importar o arquivo CSS e o arquivo JS para dentro de sua página.

```html
<link href="css/slider.css" rel="stylesheet">
<script src="js/slider.js"></script>
```

Criar uma estrutura de DIVs semelhante ao exemplo a seguir (adapte conforme sua necessidade):

```html
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
```

Após isso, o Slider deve ser iniciado:

```javascript
Slider.start();
```

Largura, algura e tempo de transição dos banners podem ser passados como parâmetros da seguinte forma:

```javascript
Slider.start({
	width: 900,
	height: 200,
	time: 5000
});
```
