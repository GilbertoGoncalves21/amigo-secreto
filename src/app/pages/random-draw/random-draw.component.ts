import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-random-draw',
  templateUrl: './random-draw.component.html',
  styleUrls: ['./random-draw.component.scss'],
})
export class RandomDrawComponent {

  private _name: string = ''; 
  
  private _names: { position: string; name: string }[] = [];
  
  private _message = new FormControl('Info about the action');
  
  private _displayedColumns: string[] = ['position', 'name'];
  
  private _dataSource = new MatTableDataSource<any>(this._names);

  constructor(private dialog: MatDialog) {}

  get name(): string {
    return this._name;
  }

  get names() {
    return this._names;
  }

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  get message() {
    return this._message
  }

  addName(nome: string) {
    if (nome == null || nome == '') {
      return;
    }

    const nextPosition = this._names.findIndex((item) => item.name === '');

    if (nextPosition !== -1) {
      this._names[nextPosition].name = nome;
    }

    const newPosition = (this._names.length + 1).toString();
    this._names.push({ position: newPosition, name: nome });
    this.updateDataSource();

    this._name = '';
  }

  executeDraw(): void {
    // Embaralhar aleatoriamente a lista de nomes
    const jumbledNames = this.shuffle([...this._names]);

    // Criar uma cópia da lista de nomes para o sorteio
    let namesForDraw = [...jumbledNames];

    // Se a quantidade de pessoas for ímpar, remova uma pessoa aleatória do sorteio
    if (namesForDraw.length % 2 !== 0) {
      const indiceRemovido = Math.floor(
        Math.random() * namesForDraw.length
      );
      namesForDraw.splice(indiceRemovido, 1);
    }

    // Realizar o sorteio e atribuir cada pessoa a outra pessoa na lista, excluindo a própria pessoa
    const draw: { person: string; secretFriend: string; code: string }[] =
      [];
    for (let i = 0; i < namesForDraw.length; i++) {
      const person = namesForDraw[i];
      let cadidates = [...namesForDraw];
      cadidates.splice(i, 1); // Remover a própria pessoa da lista de candidatos
      const indexDraw = Math.floor(Math.random() * cadidates.length);
      const secretFriend = cadidates[indexDraw];
      const code = this.generateUniqueCode();
      draw.push({ person: person, secretFriend: secretFriend, code: code });
    }

    // Exibir o sorteio
    console.log('Sorteio de amigo secreto:');
    draw.forEach((itemDraw) => {
      console.log(
        `${itemDraw.person} -> ${itemDraw.secretFriend} (Código: ${itemDraw.code})`
      );
    });
  }

  cleanNameList(): void {
    // Limpa a lista de nomes
    this._names = [];
    this.updateDataSource();
  }

  private updateDataSource() {
    this._dataSource.data = [...this._names];
  }

  private generateUniqueCode(): string {
    return 'COD' + Math.floor(Math.random() * 1000);
  }

  private shuffle(array: any[]): any[] {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Enquanto ainda houver elementos para embaralhar...
    while (currentIndex !== 0) {
      // Escolha um elemento não embaralhado restante...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E troque-o pelo elemento atual.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
