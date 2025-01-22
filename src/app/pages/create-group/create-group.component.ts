import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RealizeDrawService } from 'src/app/services/realize-draw.service';
import { EditNameDialogComponent } from 'src/app/shared/edit-name-dialog/edit-name-dialog.component';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' },
];

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent {
  private readonly _title: string = 'Criar um grupo';
  newName: string = '';
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  secretSantaResult: { giver: string; receiver: string }[] = [];

  constructor(
    private dialog: MatDialog,
    private realizeDrawService: RealizeDrawService
  ) {}

  get title(): string {
    return this._title;
  }

  @ViewChild(MatTable) table: MatTable<PeriodicElement> | null = null;

  onInputChange(): void {
    if (this.newName.trim()) {
      this.addName();
    }
  }
  
  addName(): void {
    if (this.newName.trim()) {
      const newElement: PeriodicElement = {
        position: this.dataSource.data.length + 1,
        name: this.newName.trim(),
      };
  
      this.dataSource.data.push(newElement);
      this.newName = ''; 
      this.table?.renderRows();
    }
  }

  editName(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(EditNameDialogComponent, {
      width: '400px',
      height: '250px',
      data: { name: element.name }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        element.name = result;
        this.dataSource.data = [...this.dataSource.data];
        this.table?.renderRows();
      }
    });
  }

  removeData(element: PeriodicElement) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
      this.table?.renderRows();
    }
  }

  finalizeDraw(): void {
    const dialogRef = this.dialog.open(EditNameDialogComponent, {
      width: '400px',
      height: '250px',
      data: { name: '' } // Inicia com um nome vazio
    });

    dialogRef.afterClosed().subscribe((groupName: string) => {
      if (groupName && groupName.trim()) {
        // Realiza o sorteio
        const results = this.realizeDrawService.performDraw(
          this.dataSource.data.map((element) => element.name)
        );
  
        // Salva no banco com o nome do grupo
        this.realizeDrawService.saveDraw(groupName.trim(), results).subscribe(
          () => {
            console.log('Sorteio salvo com sucesso!');
            alert(`Sorteio "${groupName}" finalizado e salvo com sucesso!`);
          },
          (error: any) => {
            console.error('Erro ao salvar o sorteio:', error);
            alert('Erro ao salvar o sorteio. Tente novamente.');
          }
        );
      } else {
        alert('Nome do grupo é obrigatório para finalizar o sorteio!');
      }
    });
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
}
