import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import AppWrapper from '../../hocs/app-wrapper'

// import { createSelector } from 'reselect'
// const TodoListItem = () => {
//     const thisState = useSelector(state => state);
//     console.log(thisState, 'this is the ststae')
//     return (<p>To do list item</p>);
// }

interface ExampleProps {
    isSet: string
}

const ExampleScreen = () => {
    const select = useSelector((state: any) => state);

    console.log(select.exampleContainer.isSet, 'the redux state')

    return (
        <div>
            <span>Number of done todos:</span>
        </div>
    )
}

const Example = AppWrapper(ExampleScreen)
export { Example };