import { Component } from '@angular/core';

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.css']
})
export class Slide3Component {

  numberSlide: string = '0%';

  images = [
    '/assets/imagem/humanFlight/slider-footer/1.jpg',
    '/assets/imagem/humanFlight/slider-footer/2.webp',
    '/assets/imagem/humanFlight/slider-footer/3.jpg',
    '/assets/imagem/humanFlight/slider-footer/4.jpeg',
    '/assets/imagem/humanFlight/slider-footer/5.jpg',
    '/assets/imagem/humanFlight/slider-footer/6.webp',
    '/assets/imagem/humanFlight/slider-footer/7.webp',
    '/assets/imagem/humanFlight/slider-footer/8.webp',
    '/assets/imagem/humanFlight/slider-footer/9.jpg',
    '/assets/imagem/humanFlight/slider-footer/10.webp',
    '/assets/imagem/humanFlight/slider-footer/11.webp',
    '/assets/imagem/humanFlight/slider-footer/12.jpg',
    '/assets/imagem/humanFlight/slider-footer/13.webp'
  ];

  optionsnavigation = [ '0%','-42.29%', '-84.58%', '-127.4%', '-170.16%', '-212.45%', '-255.1%', '-298.03%', '-340.32%', '-383%', '-453.5%'];

  // Função que permite escolher a imagem do slide
  slide(num: string): void {
    this.numberSlide = num;
  }

  // Função que move imagem para a direita
  rightArrowSlide(): void {
    const currentIndex = this.optionsnavigation.indexOf(this.numberSlide);

    // Verifica se o índice não é o último
    if (currentIndex < this.optionsnavigation.length - 1) {
      this.numberSlide = this.optionsnavigation[currentIndex + 1];
    }
  }

  // Função que move imagem para a esquerda
  leftArrowSlide(): void {
    const currentIndex = this.optionsnavigation.indexOf(this.numberSlide);

    // Verifica se o índice não é o primeiro
    if (currentIndex > 0) {
      this.numberSlide = this.optionsnavigation[currentIndex - 1];
    }
  }
}
