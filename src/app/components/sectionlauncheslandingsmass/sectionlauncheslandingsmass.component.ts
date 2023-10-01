import { Component, Input, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sectionlauncheslandingsmass',
  templateUrl: './sectionlauncheslandingsmass.component.html',
  styleUrls: ['./sectionlauncheslandingsmass.component.css']
})
export class SectionlauncheslandingsmassComponent implements AfterViewInit {
  @Input() content!: string;
  @Input() numberSection!: number;
  scrollTop: number = 0;
  currentHeight: number = 0;

  titleNumber1: string = '';
  titleNumber2: string = '';
  titleNumber3: string = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {} 

  ngAfterViewInit(): void {
    this.scroll();
    this.launches();
    this.landings();
    this.reflights();
  }

  scroll(): void {
    const section_1 = document.getElementById("section-2");
    this.scrollTop = document.documentElement.scrollTop;
    this.currentHeight = section_1!.clientHeight;

    // Força a detecção de mudanças após a atualização das propriedades
    this.cdr.detectChanges();
  }

  // Função para buscar dados de lançamentos
  async launches() {
    try {
      const response: any[] | undefined = await this.http.get<any[]>('https://api.spacexdata.com/v4/launches').toPromise();
      if (response) {
        this.titleNumber1 = response.length.toString();
      } else {
        this.titleNumber1 = 'N/A'; // Ou outro valor padrão de sua escolha
      }
    } catch (error) {
      console.error('Erro ao buscar dados de lançamentos:', error);
      this.titleNumber1 = 'Erro'; // Ou outro valor padrão em caso de erro
    }
  }

  // Função para buscar dados de pousos
  async landings() {
    try {
      const response: any[] | undefined = await this.http.get<any[]>('https://api.spacexdata.com/v4/landpads').toPromise();
      if (response && response.length > 0) {
        this.titleNumber2 = response[0].launches.length.toString();
      } else {
        this.titleNumber2 = 'N/A'; // Ou outro valor padrão de sua escolha
      }
    } catch (error) {
      console.error('Erro ao buscar dados de pousos:', error);
      this.titleNumber2 = 'Erro'; // Ou outro valor padrão em caso de erro
    }
  }

  // Função para buscar dados de revoos
  async reflights() {
    try {
      const response: any[] | undefined = await this.http.get<any[]>('https://api.spacexdata.com/v4/rockets').toPromise();
      if (response && response.length > 0 && response[0].mass && response[0].mass.kg) {
        this.titleNumber3 = response[0].mass.kg.toString();
      } else {
        this.titleNumber3 = 'N/A'; // Ou outro valor padrão de sua escolha
      }
    } catch (error) {
      console.error('Erro ao buscar dados de revoos:', error);
      this.titleNumber3 = 'Erro'; // Ou outro valor padrão em caso de erro
    }
  }

  // Ouvinte de eventos de rolagem
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Chame a função scroll() sempre que houver uma rolagem
    this.scroll();
  }
}
