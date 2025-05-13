import { Component, OnInit } from '@angular/core';
import {
  EditNameDialogComponent,
  EMPTY,
  Group,
  Integrant,
} from 'src/app/shared';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RealizeDrawService } from 'src/app/services/realize-draw/realize-draw.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
  private _form: FormGroup;
  private _participants: Integrant[] = [];
  private _displayedColumns: string[] = ['name', 'code', 'edit', 'delete'];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private drawService: RealizeDrawService
  ) {
    this._form = this.fb.group({
      groupName: [EMPTY, Validators.required],
      integrantName: [EMPTY, Validators.required],
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  get groupName(): AbstractControl<any, any> | null {
    return this.form.get('groupName');
  }

  get participants(): Integrant[] {
    return this._participants;
  }

  get integrantName(): AbstractControl<any, any> | null {
    return this.form.get('integrantName');
  }

  ngOnInit(): void {
    const groupId = +this.route.snapshot.paramMap.get('id')!;

    if (groupId !== 0) {
      const groupStr = localStorage.getItem('createdGroup');
      if (groupStr) {
        const group: Group = JSON.parse(groupStr);

        if (group.id === groupId) {
          this._participants = group.participants;
          this.groupName?.setValue(group.name);
        } else {
          console.warn('Grupo não encontrado');
        }
      } else {
        console.warn('Nenhum grupo encontrado no localStorage');
      }
    } else {
      this._participants = [];
      this.groupName?.reset();
    }
  }

  createGroup() {
    if (this._participants.length < 2) {
      console.warn('É necessário pelo menos dois participantes para o sorteio');
      return;
    }

    const dialogRef = this.dialog.open(EditNameDialogComponent, {
      width: '300px',
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.trim()) {
        const sortedParticipants = this.drawService.realizeDraw(
          this._participants
        );

        const groupData: Group = {
          id: Math.floor(Math.random() * 3000),
          name: result.trim(),
          participants: sortedParticipants,
        };

        localStorage.setItem('createdGroup', JSON.stringify(groupData));
        console.log('Grupo salvo no cache com sorteio:', groupData);
        this.router.navigate(['/groups']);
      } else {
        console.warn('Nome do grupo não informado');
      }
    });
  }

  sendCode(participant: any) {
    console.log('Enviando código para', participant.name);
  }

  addParticipant() {
    if (this.integrantName?.invalid) return;

    const name = this.integrantName?.value;
    const newParticipant: Integrant = {
      id: Math.random() * 1000,
      name: name,
      code: '',
    };

    this._participants = [...this._participants, newParticipant];
    this.integrantName?.reset();
  }

  deleteParticipant(participant: Integrant) {
    this._participants = this._participants.filter(
      (p) => p.id !== participant.id
    );
    console.log('Participante removido:', participant.name);
  }

  editParticipant(participant: Integrant) {
    const dialogRef = this.dialog.open(EditNameDialogComponent, {
      width: '300px',
      data: { name: participant.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        participant.name = result;
        console.log('Nome atualizado:', participant);
      }
    });
  }
}
