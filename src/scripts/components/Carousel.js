import Swiper from 'swiper/bundle';

/** Composante Carousel de Timtools */
export default class Carousel {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    // Options par défaut pour la librairie Swiper
    this.defaultOptions = {
      slidesPerView: 1
      ,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      },
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    let options = this.defaultOptions;

    // Gestion des paramètres différents lorsqu'on veut avoir
    // 2 slides visibles sur grand écran et une seule sur petit écran
    if (this.element.dataset.carousel == 'single') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
        },
      };
    }

    if (this.element.dataset.carousel == 'double') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            426: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    // Instanciation d'un nouveau Swiper avec les options
    new Swiper(this.element, options);
  }
}
