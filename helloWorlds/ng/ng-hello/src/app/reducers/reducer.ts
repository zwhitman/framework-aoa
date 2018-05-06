import { Action } from '@ngrx/store';

export function reducer(state: number= 0, action: Action) {

  switch (action.type) {

		case 'INC':
		  return state = state+1

		default:
			return state;
	}
}
