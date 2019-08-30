import { IAppAction } from '../app-action';
import { IExampleState, getDefaultExampleDataState } from '../state';
import { exampleDataStateActions } from '../actions';

const handlers = {
    [exampleDataStateActions.EXAMPLE_ACTION]: (state: IExampleState, payload: any): IExampleState => {
        return { ...state, isSet: true  }; 
    },
}

const ExampleReducer = (state: IExampleState = getDefaultExampleDataState(), action: IAppAction) => {
      return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action.payload): state;
};

export default ExampleReducer;