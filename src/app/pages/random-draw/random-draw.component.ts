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

  set name(value: string) {
    this._name = value.trim();
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
  }

  cleanNameList(): void {
    this._names = [];
    this.updateDataSource();
  }

  private updateDataSource() {
    this._dataSource.data = [...this._names];
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
