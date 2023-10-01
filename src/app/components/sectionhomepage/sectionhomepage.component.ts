import { Component, Input, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sectionhomepage',
  templateUrl: './sectionhomepage.component.html',
  styleUrls: ['./sectionhomepage.component.css']
})

export class SectionhomepageComponent implements AfterViewInit {
  @Input() backgroundImageUrl!: string;
  @Input() content!: string;
  @Input() title!: string;
  @Input() name_button!: string;
  @Input() arrow: boolean = false;
  @Input() numberSection!: number;
  scrollTop: number = 0;
  currentHeight: number = 0;

  constructor(private cdr: ChangeDetectorRef) {} // Injete o ChangeDetectorRef

  ngAfterViewInit(): void {
    this.scroll();
  }

  scroll(): void {
    const section_1 = document.getElementById("section-1");
    this.scrollTop = document.documentElement.scrollTop;
    this.currentHeight = section_1!.clientHeight;

    // Force a detecção de mudanças após a atualização da propriedade
    this.cdr.detectChanges();
  }

  // Ouvinte de eventos de rolagem
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Chame a função scroll() sempre que houver uma rolagem
    this.scroll();
  }
}
