import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  respo: number = 0;
  perg: number = 0;

  items = [
    {
      pergunta: 'Como definir o tamanho dos cards?',
      respostas: [
        {
          resp: '<div fxLayoutGap="23"></div>'
        },
        {
          resp: '<div fxFlex="23"></div>'
        },
        {
          resp: '<div fxFlexOffset="23"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os elementos do card em coluna (ordem uniforme)?',
      respostas: [
        {
          resp: '<div fxLayout="column-reverse"></div>'
        },
        {
          resp: '<div fxLayout="column"></div>'
        },
        {
          resp: '<div fxLayout="row"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os elementos do card no meio da div?',
      respostas: [
        {
          resp: '<div fxLayoutAlign="center start"></div>'
        },
        {
          resp: '<div fxLayoutAlign="center end"></div>'
        },
        {
          resp: '<div fxLayoutAlign="center center"></div>'
        }
      ]
    },
    {
      pergunta: 'Como colocar espaçamentos entre os cards?',
      respostas: [
        {
          resp: '<div fxFlex="16"></div>'
        },
        {
          resp: '<div fxFlexOffset="16"></div>'
        },
        {
          resp: '<div fxLayoutGap="16px"></div>'
        },
      ]
    },
    {
      pergunta: 'Como deixar os cards em 2 linhas?',
      respostas: [
        {
          resp: '<div fxLayout="row wrap"></div>'
        },
        {
          resp: '<div fxLayout="row"></div>'
        },
        {
          resp: '<div fxLayout="column wrap"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os cards com o width 100% quando a tela for menor que 960px?',
      respostas: [
        {
          resp: '<div fxFlex.lt-md="100%"></div>'
        },
        {
          resp: '<div fxFlex.lt-sm="100%"></div>'
        },
        {
          resp: '<div fxFlex.md="100%">'
        }
      ]
    }
  ]

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service
      .$answer
      .subscribe(s => this.respo = s);

    this.service
      .$question
      .subscribe(s => this.perg = s);
  }

  question(resposta: number) {
    this.service.question(resposta);
  }

}
