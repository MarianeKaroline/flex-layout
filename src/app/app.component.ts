import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  respo: number = 0;
  perg: number = 0;

  title = 'Manutencao';

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service
      .$answer
      .subscribe(s => this.respo = s);

    this.service
      .$question
      .subscribe(s => this.perg = s);
  }

  proximo() {
    this.service.proximo();
  }
}
