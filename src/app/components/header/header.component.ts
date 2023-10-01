import { Component, HostListener } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  lastScrollTop = 0;
  headerOpacity = 1;
  isMenuOpen = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const distanceTop = document.documentElement.scrollTop;
    if (distanceTop > this.lastScrollTop) {
      this.headerOpacity = 0;
    } else {
      this.headerOpacity = 1;
    }
    this.lastScrollTop = distanceTop;
  } 

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  getLittleBarStyles(index: number) {
    if (this.isMenuOpen) {

      document.body.style.overflow = "hidden";
  
      if (index === 0) {
        return {
          position: 'absolute',
          bottom: '0',
          transform: 'rotate(45deg)'
        };
      } else if (index === 1) {
        return {
          display: 'none'
        };
      } else if (index === 2) {
        return {
          position: 'absolute',
          transform: 'rotate(-45deg)',
          bottom: '0'
        };
      }
    }else{
      
      document.body.style.overflow = "auto";
    }
  
    return {}; 
  }
  
  
}
