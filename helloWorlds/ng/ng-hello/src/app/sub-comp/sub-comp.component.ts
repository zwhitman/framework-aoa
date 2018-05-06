import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select('count')
  }

  ngOnInit() {
  }

}
