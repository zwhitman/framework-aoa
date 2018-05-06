import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select('count')
  }
  addCount() {
    this.store.dispatch({type: 'INC'})
  }

  ngOnInit() {
  }

}
