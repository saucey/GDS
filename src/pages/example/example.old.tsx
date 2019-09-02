import * as React from 'react';
import TopNav from '@govuk-react/top-nav';
import Footer from '@govuk-react/footer';


export class Example extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {

        };

        // console.log(this.props, 'the props')
    }

    render() {
        return (
            <div>
                <TopNav></TopNav>
                <h1>Example page</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default Example;

