import { IAppAction } from '../app-action';
// import { IAppError } from '../../models';
// import { IGeoLocation } from '../../models/geolocation';

export const exampleDataStateActions = {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION',
}

export const fetchGeoLocation = (): IAppAction => ({
    type: exampleDataStateActions.EXAMPLE_ACTION,
    payload: true
});