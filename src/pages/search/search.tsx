import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import AppWrapper from '../../hocs/app-wrapper'
import InputField from '@govuk-react/input-field';
import FormElWrapper from '../../components/wrappers/form-el-wrapper'
import InputEl from '../../components/form-elements/input-el'
import SelectEl from '../../components/form-elements/select-el'
import OperatorSymbol from '../../components/reuseablestyles'

import {
    Main,
    Input,
    Label,
    GridRow,
    GridCol,
    Select,
    Button,
    DateField,
    Tabs,
    // LeadParagraph,
    // Paragraph,
    // ListNavigation,
    // Header
} from 'govuk-react';
// import Main from '@govuk-react/main';

const SearchScreen = () => {
    const select = useSelector((state: any) => state);
    const [email, setEmail] = useState('');
    const [input, setInput] = useState('');
    const [values, setValues] = useState({ search: '' });

    useEffect(() => {
        if (values && values !== values) setValues(values);
        // Update the document title using the browser API
    }, [values]);

    const handleChange = (event: any) => {
        console.log(values, 'values')
        event.persist();
        const vals = setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values, 'the values after the set values')
    };

    console.log(email, 'the state of the email text')
    console.log(input, 'the input from the reusable component')

    // const handleChange = () => {
    //     console.log('changed the values')
    // }
    const onDateOfBirthchange = (e: any) => {
        console.log(e, 'this is the on date birth')
        console.log(e.target.value, 'the target')
    }

    const data = ['GOV.UK elements option 1', 'GOV.UK elements option 2', 'GOV.UK elements option 3']
    const dataYears = ['1 year', '2 years', '3 years', '4 years', '5 years']


    const [tabIndex, setTabIndex] = React.useState(1);

    const handleTabChange = (newTabIndex: any) => setTabIndex(newTabIndex);

    const handleClick = ({ e, index }: any) => {
        return handleTabChange(index);
    }

    const firstPanel = () => {
        return (
            <div>
                <h1>first panel</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        )
    }

    return (
        <Main>
            <FormElWrapper>
                <InputEl hint="For example Fred Smith: 15/05/1980" label="Search terms" type="text" name="search" value={values.search} onChange={(e: any) => handleChange(e)} />
            </FormElWrapper>
            <GridRow>
                <GridCol setWidth="one-half">
                    <FormElWrapper>
                        <InputEl hint="For exmple, crime reference, location or collar number" label="Justification" type="text" name="justification" value={input} onChange={(e: any) => handleChange(e)} />
                    </FormElWrapper>
                </GridCol>
                <GridCol setWidth="one-half">
                    <FormElWrapper>
                        <SelectEl extraTopSpace={true} label="Reason for you search" data={data} />
                    </FormElWrapper>
                    {/* <Input value={email} onChange={(e: any) => setEmail(e.target.value)} /> */}
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol style={{ 'border': '1px solid red' }}>
                    <FormElWrapper>
                        <DateField
                            onChange={(e: any) => handleChange(e)}
                            inputNames={{
                                day: 'dayInputName',
                                month: 'monthInputName',
                                year: 'yearInputName',
                            }}>
                        </DateField>
                    </FormElWrapper>
                </GridCol>
                <GridCol setWidth="" style={{ 'border': '1px solid red' }}>
                    <div style={{'display': 'flex', 'justifyContent': 'flex-start'}}>
                        <OperatorSymbol>+ / -</OperatorSymbol>
                        {/* <div style={{'border': 'border 1px solid red' }}> */}
                        <SelectEl fixed={true} width={'150px'} extraTopSpace={false} data={dataYears} roundedCorners={true} />
                        {/* </div> */}
                        <div>Or</div>
                        <div>
                            <InputEl hint="" label="Age" />
                        </div>
                        <OperatorSymbol>+ / -</OperatorSymbol>
                        <SelectEl fixed={true} width={'150px'} extraTopSpace={false} data={dataYears} roundedCorners={true} />
                    </div>
                </GridCol>

            </GridRow>
            <GridRow>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <SelectEl extraTopSpace={false} label="Unique ID" data={data} />
                    </FormElWrapper>
                </GridCol>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <InputEl hint="" label="Enter ID" name="ID" onChange={(e: any) => handleChange(e)} />
                    </FormElWrapper>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <SelectEl extraTopSpace={false} label="Sex" data={data} />
                    </FormElWrapper>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <SelectEl label="Ethnicity" extraTopSpace={false} data={data} />
                    </FormElWrapper>
                </GridCol>
            </GridRow>
            {/* <InputEl hint="For example, crime reference, location or collar number" label="Justification" type="text" name="search" value={input} onChange={(e: any) => setInput(e.target.value)} /> */}
            <Button>Search</Button>
            <Tabs>
                <Tabs.Title>Content</Tabs.Title>
                <Tabs.List>
                    {[
                        {
                            content: 'People',
                            href: '#first-panel',
                        },
                        {
                            content: 'Organisations',
                            href: '#second-panel',
                        },
                        {
                            content: 'OCGS',
                            href: '#third-panel',
                        },
                        {
                            content: 'Vehicles',
                            href: '#fourth-panel',
                        },
                    ].map(({ content, href }, index) => (
                        <Tabs.Tab
                            key={index}
                            onClick={(e: any) => handleClick({ e, index })}
                            selected={tabIndex === index}
                            href={href}
                        >
                            {content}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                {[
                    {
                        content: firstPanel(),
                        id: 'first-panel',
                    },
                    {
                        content: 'Panel content 2',
                        id: 'second-panel',
                    },
                    {
                        content: 'Panel content 3',
                        id: 'third-panel',
                    },
                    {
                        content: 'Panel content 4',
                        id: 'fourth-panel',
                    },
                ].map(({ content, id }, index) => (
                    <Tabs.Panel
                        selected={tabIndex === index}
                        id={id}
                    >
                        {content}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </Main>
    )
}

const Search = AppWrapper(SearchScreen)
export { Search };