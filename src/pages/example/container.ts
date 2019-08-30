import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IAppState } from '../../store/state';
import { Example } from './example';
import { IAppAction } from '../../store/app-action';

const mapStateToProps = (state: IAppState) => {

    return {
        example: state.exampleContainer
    };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppAction>) => {
    return {
    };
};

export const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example);