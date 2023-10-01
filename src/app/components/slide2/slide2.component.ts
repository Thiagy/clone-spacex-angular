import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css']
})
export class Slide2Component {

  numberSlide: string = '0%';
  currentIndex: number = 0; // Inicialize o currentIndex com 0
  conditionVideo: boolean = false; 

  // Arrays de vídeos e suas propriedades
  sectionsVideo = [
    { title: 'ON-ORBIT', text: 'View Earth from 300km up', urlimg: '/assets/imagem/humanFlight/on-orbit.jpg', value: '0%', urliframe: 'https://www.youtube.com/embed/A_sEusdoTIM' },
    { title: 'LAUNCH', text: 'Watch as the crew prepares for liftoff', urlimg: '/assets/imagem/humanFlight/launch-crop.jpg', value: '-100%', urliframe: 'https://www.youtube.com/embed/TeVbYCIFVa8' },
    { title: 'SPLASHDOWN', text: 'Watch as the crew prepares for landing', urlimg: '/assets/imagem/humanFlight/Splashdown_Photo_01.jpg', value: '-200%', urliframe: 'https://www.youtube.com/embed/oTH3mq7SsK4' },
    { title: 'TRAINING', text: 'Watch as crew prepares for launch day', urlimg: '/assets/imagem/humanFlight/Training_01.jpg', value: '-300%', urliframe: 'https://www.youtube.com/embed/FMi_m9-e9MU' }
  ];

  constructor(private elementRef: ElementRef) {}

  // Função que permite escolher a imagem do slide
  slide(num: string, currentIndex: number): void {
    this.numberSlide = num;
    this.currentIndex = currentIndex; // Atualize o currentIndex

    const iframe: HTMLIFrameElement | null = this.elementRef.nativeElement.querySelector('iframe');
    if (iframe) {
      iframe.src = this.sectionsVideo[currentIndex].urliframe;
    }
  }

  rightArrowSlide(): void {
    if (this.currentIndex < this.sectionsVideo.length - 1) {
      this.currentIndex++; // Incrementar o currentIndex
      this.numberSlide = this.sectionsVideo[this.currentIndex].value;
      this.slide(this.numberSlide, this.currentIndex);
    }
  }
  
  leftArrowSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--; // Decrementar o currentIndex
      this.numberSlide = this.sectionsVideo[this.currentIndex].value;
      this.slide(this.numberSlide, this.currentIndex);
    }
  }

  showVideo(): void {
    // Alterna o estado atual entre true e false
    this.conditionVideo = !this.conditionVideo;
  }
}
