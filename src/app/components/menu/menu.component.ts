import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  right: boolean = true;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuOpen$.subscribe(isOpen => {
      this.right = isOpen;
    });
  }

  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
}
