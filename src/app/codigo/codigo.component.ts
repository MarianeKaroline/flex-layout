import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnInit {

  codigo = [
    {
      questao: 1,
      html: [
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="row" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column-reverse" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },
    {
      questao: 2,
      html: [
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center center" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center start" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },
    {
      questao: 3,
      html: [
        {
          texto:
            '<div fxLayout="row wrap" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="column wrap" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },
    {
      questao: 4,
      html: [
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxFlex="16" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxFlexOffset="16" class="container">' +
            '  <div class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },
    {
      questao: 5,
      html: [
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxFlex="23" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxLayoutGap="23" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxFlexOffset="23" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },
    {
      questao: 6,
      html: [
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxFlex="23" fxFlex.lt-md="100%" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxFlex="23" fxFlex.lt-sm="100%" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        },
        {
          texto:
            '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">' +
            '  <div fxFlex="23" fxFlex.md="100%" class="admin" *ngFor="let item of items">' +
            '    <div fxLayout="column" fxLayoutAlign="center end" class="card">' +
            '      <span>' +
            '        <mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>' +
            '      </span>' +
            '      <h3 class="title">{{ item.title }}</h3>' +
            '      <p>{{ item.description }}</p>' +
            '    <div>' +
            '  </div>' +
            '</div>'
        }
      ]

    },

  ]

  respo: number = 0;
  perg: number = 0;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service
      .$answer
      .subscribe(s => this.respo = s);

    this.service
      .$question
      .subscribe(s => this.perg = s);
  }

}
