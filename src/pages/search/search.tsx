import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import AppWrapper from '../../hocs/app-wrapper'
import InputField from '@govuk-react/input-field';
import FormElWrapper from '../../components/wrappers/form-el-wrapper'
import InputEl from '../../components/form-elements/input-el'
import SelectEl from '../../components/form-elements/select-el'

import {
    Main,
    Input,
    Label,
    GridRow,
    GridCol,
    Select,
    Button,
    DateField,
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
    },[values]);

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
                        <SelectEl extraTopSpace={true} hint="" label="Reason for you search" data={data} />
                    </FormElWrapper>
                    {/* <Input value={email} onChange={(e: any) => setEmail(e.target.value)} /> */}
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-half">
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
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <SelectEl extraTopSpace={false} hint="" label="Unique ID" data={data} />
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
                        <SelectEl extraTopSpace={false} hint="" label="Sex" data={data} />
                    </FormElWrapper>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-third">
                    <FormElWrapper>
                        <SelectEl hint="" label="Ethnicity" extraTopSpace={false} data={data} />
                    </FormElWrapper>
                </GridCol>
            </GridRow>
            {/* <InputEl hint="For example, crime reference, location or collar number" label="Justification" type="text" name="search" value={input} onChange={(e: any) => setInput(e.target.value)} /> */}
            <Button>Search</Button>
        </Main>
    )
}

const Search = AppWrapper(SearchScreen)
export { Search };