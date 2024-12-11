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
  title = 'Tic Tac Toe';
  currentPlayer = 'X';
  message = "";
  gameOver = false;

  boxes: HTMLDivElement[][] = Array(3).fill(null).map(() =>
    Array(3).fill(null).map(() => {
      const div = document.createElement('div');
      div.innerText = '';
      return div;
    })
  );

  onBoxClick(i: number, j: number, event: MouseEvent) {
    if (this.gameOver) {
      return;
    }
    this.boxes[i][j] = event.target as HTMLDivElement;
    this.boxes[i][j].innerText = this.currentPlayer;

    if (this.checkWin()) {
      this.message = this.currentPlayer + ' won!';
      this.gameOver = true;
    }
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWin(): boolean {
    for (let y = 0; y < 3; y++) {
      console.log(this.boxes[y]);
      if (this.boxes[y] !== null && this.boxes[y].every(cell => cell && cell.innerText === this.currentPlayer)) {
        return true;
      }
      console.log("after");
    }

    for (let x = 0; x < 3; x++) {
      let columnWin = true;
      for (let y = 0; y < 3; y++) {
        if (this.boxes[y][x] && this.boxes[y][x].innerText !== this.currentPlayer) {
          columnWin = false;
          break;
        }
      }
      if (columnWin) {
        return true;
      }
    }

    // Check main diagonal
    let mainDiagonalWin = true;
    for (let i = 0; i < 3; i++) {
      if (this.boxes[i][i] && this.boxes[i][i].innerText !== this.currentPlayer) {
        mainDiagonalWin = false;
        break;
      }
    }
    if (mainDiagonalWin) {
      return true;
    }

    // Check anti-diagonal
    let antiDiagonalWin = true;
    for (let i = 0; i < 3; i++) {
      if (this.boxes[i][3 - 1 - i] && this.boxes[i][3 - 1 - i].innerText !== this.currentPlayer) {
        antiDiagonalWin = false;
        break;
      }
    }
    if (antiDiagonalWin) {
      return true;
    }
    return false;
  }
}
