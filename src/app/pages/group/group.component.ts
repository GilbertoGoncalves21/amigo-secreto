import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  navigateToGroup(id: number): void {
    this.router.navigate(['/group', id]);
  }

  addGroup(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Adicionar Grupo',
        message: 'Deseja realmente criar um novo grupo?'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Usuário confirmou. Criando grupo...');
        this.router.navigate(['/create-group']);
      } else {
        console.log('Usuário cancelou.');
      }
    });
  }
}
