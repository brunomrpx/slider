/*
* Slider Simples - Utilizando Apenas Javascript Puro
*
*
* Criado por: Bruno Paixão
* 
*/

// Objeto para controle do slider
Slider = {

	divSliderContainer  : document.querySelector(".slider-container"),
	banners             : document.querySelectorAll(".banner"),
  previousButton      : document.querySelector(".previous-button"),
  nextButton          : document.querySelector(".next-button"),
  divBannerNumbers    : null,  
  bannerNumbers       : null,  
	selectedBannerIndex : 0,
  rotationInterval    : null,
  // Padrão de tempo para cada banner
  time                : 2000 ,
  // Padrão de largura
  width               : 700,
  // Padrão de altura
  height              : 200,

  // Inicia o funcionamento do slider
	start : function(settings) {

    this.configure(settings);           
    this.divBannerNumbers = document.createElement("div");
    this.divBannerNumbers.className = "banner-numbers";

    for (var i = 0; i < this.banners.length; i++) {

      if (i != 0) {                    
        this.hideElement(this.banners[i]);
      }

      // Enquanto o mouse estiver sobre o banner, não irá ser feita a rotação
      this.banners[i].onmouseover = function() {
        Slider.stopRotationInterval();
      }

      this.banners[i].onmouseout = function() {
        Slider.startRotation();
      }

      // Cria os botões representando os números dos banners
      bannerNumber = document.createElement("button");
      bannerNumber.className = "banner-number";
      bannerNumber.innerHTML = i + 1;
      bannerNumber.onclick = (function(index) {
        return function() {
          Slider.selectedBannerIndex = index;
          Slider.refreshBanners();
          Slider.restartRotationInterval();
        }
      })(i);
      this.divBannerNumbers.appendChild(bannerNumber);
    }

    // Cria os botões para controlar o fluxo dos banners
    previousButton = document.createElement("button");
    previousButton.innerHTML = "&#10094;";
    previousButton.className = "button previous-button";

    nextButton = document.createElement("button");
    nextButton.innerHTML = "&#10095;";  
    nextButton.className = "button next-button";

    this.divSliderContainer.appendChild(previousButton);
    this.divSliderContainer.appendChild(nextButton);
    this.divSliderContainer.appendChild(this.divBannerNumbers);
    this.bannerNumbers = document.querySelectorAll(".banner-number");

    previousButton.onclick = function() {
      Slider.previousBanner();
      Slider.restartRotationInterval();
    } 

    nextButton.onclick = function() {
      Slider.nextBanner();
      Slider.restartRotationInterval();
    }   

    this.refreshBanners();
    this.startRotation();
  },

  // Configurações
  configure : function(settings) {
    this.time   = settings.time ? settings.time : this.time;
    this.width  = settings.width ? settings.width : this.width;
    this.height = settings.height ? settings.height : this.height;

    this.divSliderContainer.style.width = this.width;
    this.divSliderContainer.style.height = this.height;

    // Configura os botões de rotação para ficarem na parte média vertical do banner
    style  = document.createElement("style");
    style.innerHTML = ".slider-container .button { top: " 
                      + (this.height / 2) 
                      + "; margin-top: -25px }";
    document.body.appendChild(style);
  },

  // Inicia a rotação automática dos banners
  startRotation : function() {      
    this.rotationInterval = setInterval(function() {
      Slider.nextBanner();
      if (Slider.selectedBannerIndex == Slider.banners.length - 1) {
        Slider.selectedBannerIndex = -1;
      }
    }, Slider.time);
  },

  // Reinicia a contagem do tempo de rotação
  restartRotationInterval : function() {
    clearInterval(this.rotationInterval);
    this.startRotation();
  },

  // Para a rotação dos banners
  stopRotationInterval : function() {
    clearInterval(this.rotationInterval)
  },

  // Avança para o próximo banner
  nextBanner : function() {
    newIndex = this.selectedBannerIndex + 1;
    if (this.banners[newIndex]) {
      this.selectedBannerIndex = newIndex;
    } else {
      this.selectedBannerIndex = 0;
    }
    this.refreshBanners();
  },

  // Volta um banner
  previousBanner : function() {
    newIndex = this.selectedBannerIndex - 1;
    if (this.banners[newIndex]) {
      this.selectedBannerIndex = newIndex;
    } else {
      this.selectedBannerIndex = this.banners.length - 1;
    }
    this.refreshBanners();
  },
	
  // Atualiza a visualização com o banner selecionado
  refreshBanners : function() {            
    for (var i = 0; i < this.banners.length; i++) {
      if (i != this.selectedBannerIndex) {          
        this.hideElement(this.banners[i]);
        this.bannerNumbers[i].className = "banner-number";
      } else {          
        this.showElement(this.banners[i], "block");      
        this.bannerNumbers[i].className += " selected-banner-number";
      }
    }
  },    

  // Deixa um elemento invisível
  hideElement : function(element) {      
    element.style.display = "none";
  },

  // Exibe um elemento
  showElement : function(element, display) {
    element.style.display = display;
  }
}


