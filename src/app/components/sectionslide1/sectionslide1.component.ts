import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectionslide1',
  templateUrl: './sectionslide1.component.html',
  styleUrls: ['./sectionslide1.component.css']
})
export class Sectionslide1Component {
  
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() content!: string;
  @Input() backgroundImageUrl!: string;
  @Input() numberSlide: string = '-0'

}
