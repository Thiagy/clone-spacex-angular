import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectionmain',
  templateUrl: './sectionmain.component.html',
  styleUrls: ['./sectionmain.component.css']
})
export class SectionmainComponent {
  @Input() title!:string;
  @Input() content!:string;
  @Input() backgroundImageUrl!: string;
}
