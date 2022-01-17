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
      pergunta: 'Como deixar os elementos do card em coluna com ordem normal?',
      respostas: [
        {
          resp: '<div fxLayout="column"></div>'
        },
        {
          resp: '<div fxLayout="row"></div>'
        },
        {
          resp: '<div fxLayout="column-reverse"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os elementos do card no meio da div?',
      respostas: [
        {
          resp: '<div fxLayoutAlign="center center"></div>'
        },
        {
          resp: '<div fxLayoutAlign="center start"></div>'
        },
        {
          resp: '<div fxLayoutAlign="center end"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os cards em uma linha mas quebrando ela?',
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
      pergunta: 'Como colocar espaçamentos entre os cards?',
      respostas: [
        {
          resp: '<div fxLayout="row wrap" fxLayoutGap="16px"></div>'
        },
        {
          resp: '<div fxLayout="row wrap" fxFlex="16"></div>'
        },
        {
          resp: '<div fxLayout="row wrap" fxFlexOffset="16"></div>'
        }
      ]
    },
    {
      pergunta: 'Como definir o tamanho dos cards?',
      respostas: [
        {
          resp: '<div fxFlex="23"></div>'
        },
        {
          resp: '<div fxLayoutGap="23"></div>'
        },
        {
          resp: '<div fxFlexOffset="23"></div>'
        }
      ]
    },
    {
      pergunta: 'Como deixar os cards com o width 100% quando a tela for menor 960px?',
      respostas: [
        {
          resp: '<div fxFlex="23" fxFlex.lt-md="100%"></div>'
        },
        {
          resp: '<div fxFlex="23" fxFlex.lt-sm="100%"></div>'
        },
        {
          resp: '<div fxFlex="23" fxFlex.md="100%">'
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
