import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {
  resposta: number = 0;
  nPergunta: number = 0;

  items = [
  {
    icon: 'phone',
    title: 'Telefonia',
    description: 'Editar templates de telefonia'
  },
  {
    icon: 'business',
    title: 'Grupo de Empresas',
    description: 'Editar grupos de empresas'
  },
  {
    icon: 'campaign',
    title: 'Canal de Denúncia',
    description: 'Gerenciar denúncias'
  },
  {
    icon: 'account_tree',
    title: 'Prioridade OP',
    description: 'Editar a prioridade dos bancos para OP'
  },
  {
    icon: 'signal_cellular_alt',
    title: 'Limite de Mailings',
    description: 'Editar limite de mailings'
  },
  {
    icon: 'payments',
    title: 'Cashback',
    description: 'Gerenciar opções de cashback'
  },
]

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service
      .$answer
      .subscribe(s => {
        this.resposta = s
        console.log("resposta: " + s)
        console.log("pergunta: " + this.nPergunta)
      });

    this.service
      .$question
      .subscribe(s => {
        this.nPergunta = s
        console.log("pergunta: " + s)
      });
  }

}
