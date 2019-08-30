
export interface IExampleState {
    isSet: boolean;
}

export const defaultState: IExampleState = { 
    isSet: false
};

export const getDefaultExampleDataState = (options?: any) => { return {...defaultState,...options }; };