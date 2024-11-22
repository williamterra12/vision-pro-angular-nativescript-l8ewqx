import { Component } from '@angular/core';
import { TNSPlayer } from '@nativescript/audio';

@Component({
  selector: 'ns-vr-ball',
  templateUrl: './vr-ball.component.html',
  styleUrls: ['./vr-ball.component.css']
})
export class VRBallComponent {
  ballColor = '#FF4081';
  private player: TNSPlayer;
  private colors = ['#FF4081', '#3F51B5', '#4CAF50', '#FFC107', '#9C27B0'];
  private currentColorIndex = 0;

  constructor() {
    this.player = new TNSPlayer();
    this.player.debug = true;
    this.initializeAudio();
  }

  async initializeAudio() {
    try {
      await this.player.initFromFile({
        audioFile: '~/assets/pop.mp3',
        loop: false,
      });
    } catch (err) {
      console.error('Error initializing audio:', err);
    }
  }

  onBallTap() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.ballColor = this.colors[this.currentColorIndex];
    
    this.player.play()
      .catch(err => console.error('Error playing sound:', err));
  }
}