import { Component } from '@angular/core';

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css']
})
export class Slide1Component {

  numberSlide: string = '0%'

  optionsnavigation = [ '0%','-100%', '-200%', '-300%', '-400%'];

  //Função que permite escolher a imagem do slide
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
