import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ScrollServiceService {

  private scrollSubject = new Subject<number>();

  constructor() { }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrollSubject.next(scrollTop);
  }
  
}
