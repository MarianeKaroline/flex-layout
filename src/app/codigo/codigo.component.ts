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
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxLayoutGap="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlex="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    },
    {
      questao: 2,
      html: [
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column-reverse" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="row" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    },
    {
      questao: 3,
      html: [
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center end" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center center" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    },
    {
      questao: 4,
      html: [
        {
          texto: [
            {
              p: '<div fxFlex="16" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxFlexOffset="16" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    },
    {
      questao: 5,
      html: [
        {
          texto: [
            {
              p: '<div fxLayout="row wrap" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxLayout="row" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxLayout="column wrap" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    },
    {
      questao: 6,
      html: [
        {
          texto: [
            {
              p: '<div fxLayout="column wrap" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" fxFlex.lt-md="100%" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxLayout="column wrap" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23" fxFlex.lt-sm="100%" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        },
        {
          texto: [
            {
              p: '<div fxLayout="column wrap" fxLayoutGap="16px" class="container">'
            },
            {
              p: '<div fxFlexOffset="23"  fxFlex.md="100%" class="admin" *ngFor="let item of items">'
            },
            {
              p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
            },
            {
              p: '<span>'
            },
            {
              p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
            },
            {
              p: '</span>'
            },
            {
              p: '<h3 class="title">{{ item.title }}</h3>'
            },
            {
              p: '<p>{{ item.description }}</p>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            },
            {
              p: '</div>'
            }
          ]
        }
      ]

    }
  ]

  respo: number = 0;
  perg: number = 0;

  questao = [
    {
      p: '<div fxLayout="column wrap" fxLayoutGap="16px" class="container">'
    },
    {
      p: '<div fxFlexOffset="23"  fxFlex.md="100%" class="admin" *ngFor="let item of items">'
    },
    {
      p: '<div fxLayout="column" fxLayoutAlign="center start" class="card">'
    },
    {
      p: '<span>'
    },
    {
      p: '<mat-icon aria-hidden="false">{{ item.icon }}</mat-icon>'
    },
    {
      p: '</span>'
    },
    {
      p: '<h3 class="title">{{ item.title }}</h3>'
    },
    {
      p: '<p>{{ item.description }}</p>'
    },
    {
      p: '</div>'
    },
    {
      p: '</div>'
    },
    {
      p: '</div>'
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

}
