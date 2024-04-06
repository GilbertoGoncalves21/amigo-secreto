import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-random-draw',
  templateUrl: './random-draw.component.html',
  styleUrls: ['./random-draw.component.scss']
})
export class RandomDrawComponent {
  nome: string = ''; // Variável para armazenar o nome inserido
  nomes: { position: string, name: string }[] = [];
  message = new FormControl('Info about the action');
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<any>(this.nomes);
  
  adicionarNome(nome: string) {
    if (nome == null || nome == '') {
      return;
    }
    
    const proximaPosicao = this.nomes.findIndex(item => item.name === '');
    
    if (proximaPosicao !== -1) {
      this.nomes[proximaPosicao].name = nome;
    }
    
    const newPosition = (this.nomes.length + 1).toString()
    this.nomes.push({ position: newPosition, name: nome });
    this.atualizarDataSource();

    this.nome = '';
  }

  realizarSorteio(): void {
    // Embaralhar aleatoriamente a lista de nomes
    const nomesEmbaralhados = this.shuffle([...this.nomes]);
  
    // Criar uma cópia da lista de nomes para o sorteio
    let nomesParaSorteio = [...nomesEmbaralhados];
  
    // Se a quantidade de pessoas for ímpar, remova uma pessoa aleatória do sorteio
    if (nomesParaSorteio.length % 2 !== 0) {
      const indiceRemovido = Math.floor(Math.random() * nomesParaSorteio.length);
      nomesParaSorteio.splice(indiceRemovido, 1);
    }
  
    // Realizar o sorteio e atribuir cada pessoa a outra pessoa na lista, excluindo a própria pessoa
    const sorteio: { pessoa: string, amigoSecreto: string, codigo: string }[] = [];
    for (let i = 0; i < nomesParaSorteio.length; i++) {
      const pessoa = nomesParaSorteio[i];
      let candidatos = [...nomesParaSorteio];
      candidatos.splice(i, 1); // Remover a própria pessoa da lista de candidatos
      const indiceSorteado = Math.floor(Math.random() * candidatos.length);
      const amigoSecreto = candidatos[indiceSorteado];
      const codigo = this.gerarCodigoUnico();
      sorteio.push({ pessoa, amigoSecreto, codigo });
    }
  
    // Exibir o sorteio
    console.log('Sorteio de amigo secreto:');
    sorteio.forEach(sorteioItem => {
      console.log(`${sorteioItem.pessoa} -> ${sorteioItem.amigoSecreto} (Código: ${sorteioItem.codigo})`);
    });
  }
  
  shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
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

  gerarCodigoUnico(): string {
    // Gera um código único aleatório
    // Você pode implementar sua própria lógica para gerar o código
    // Por exemplo, pode ser um número aleatório ou uma combinação de letras e números
    // Neste exemplo, estou usando um código simples baseado no índice do sorteio
    return 'COD' + Math.floor(Math.random() * 1000);
  }

  limpar(): void {
    // Limpa a lista de nomes
    this.nomes = [];
    this.atualizarDataSource();
  }

  private atualizarDataSource() {
    this.dataSource.data = [...this.nomes]; 
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}