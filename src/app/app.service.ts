import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _answer = new BehaviorSubject<number>(0);
  public $answer = this._answer.asObservable();

  private _question = new BehaviorSubject<number>(1);
  public $question = this._question.asObservable();

  nPergunta: number = 1;
  resposta: number = 0;

  constructor() { }

  question(resposta: number) {
    this.resposta = resposta;
    this._answer.next(resposta)
  }

  proximo() {
    this.nPergunta += 1;
    this._question.next(this.nPergunta);

    this._answer.next(0);
  }

}
