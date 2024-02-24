import { Component } from '@angular/core';

@Component({
  selector: 'app-random-draw',
  templateUrl: './random-draw.component.html',
  styleUrls: ['./random-draw.component.scss']
})
export class RandomDrawComponent {
  nome: string = ''; // Variável para armazenar o nome inserido
  nomes: string[] = []; // Array para armazenar os nomes adicionados

  adicionarNome(): void {
    if (this.nome.trim()) { // Verifica se o nome não está vazio ou consiste apenas de espaços em branco
      this.nomes.push(this.nome); // Adiciona o nome à lista de nomes
      this.nome = ''; // Limpa o campo de entrada
    }
  }

  realizarSorteio(): void {
    if (this.nomes.length > 0) { // Verifica se há nomes na lista
      // Realiza o sorteio
      const indiceSorteado = Math.floor(Math.random() * this.nomes.length);
      const nomeSorteado = this.nomes[indiceSorteado];
      console.log(`O nome sorteado é: ${nomeSorteado}`);

      // Aqui você pode adicionar mais lógica conforme necessário
    }
  }

  limpar(): void {
    // Limpa a lista de nomes
    this.nomes = [];
  }
}
