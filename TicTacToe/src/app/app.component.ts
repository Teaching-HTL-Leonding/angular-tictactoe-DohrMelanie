import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicTacToe';
  currentPlayer = 'X';
  boxes: HTMLElement[] = Array.from({ length: 9 });

  onBoxClick(index: number, event: MouseEvent) {
    console.log('Box clicked', index);
    const clickedElement = event.target as HTMLElement; // Access the DOM element
    clickedElement.innerText = this.currentPlayer;

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}
