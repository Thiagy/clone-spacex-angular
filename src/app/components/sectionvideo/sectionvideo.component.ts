import { Component } from '@angular/core';

@Component({
  selector: 'app-sectionvideo',
  templateUrl: './sectionvideo.component.html',
  styleUrls: ['./sectionvideo.component.css']
})
export class SectionvideoComponent {
  conditionVideo: boolean = false; // Variável para controlar o estado atual

  showVideo(): void {
    // Alterna o estado atual entre true e false
    this.conditionVideo = !this.conditionVideo;
  }
}
