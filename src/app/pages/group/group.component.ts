import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, Group } from 'src/app/shared';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups: Group[] = [];

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    const storedGroup = localStorage.getItem('createdGroup');
    if (storedGroup) {
      const parsed = JSON.parse(storedGroup);
      this.groups = [parsed];
    }
  }

  navigateToGroup(id: number): void {
    this.router.navigate(['/group', id]);
  }

  trackById(index: number, item: Group) {
    return item.id;
  }

  addGroup(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      panelClass: 'custom-dialog',
      data: {
        title: 'Adicionar Grupo',
        message: 'Deseja realmente criar um novo grupo?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/group/0']);
      }
    });
  }
}
