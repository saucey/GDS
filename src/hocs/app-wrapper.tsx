import React from "react";
import TopNav from '@govuk-react/top-nav';
import Footer from '@govuk-react/footer';

const AppWrapper = (WrappedComponent: React.FunctionComponent) => {
    return (props: any) => {

        return (
            <div>
                <TopNav />
                    {/* <WrappedComponent {...hookProps} {...props} /> */}
                    <WrappedComponent />
                <Footer />
            </div>
        );
    };
};

export default AppWrapper;
