import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap'

export const CreateCustomer = ({ onChangeForm, createCustomer, customer }) => {

    return (
        <div>
            <h2>Create Customer</h2>
            <Form>
                <Row>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => onChangeForm(e)}
                            value={customer.firstname}
                            className="form-control"
                            placeholder="First Name"
                            required
                        />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={(e) => onChangeForm(e)}
                            value={customer.lastname}
                            className="form-control"
                            placeholder="Last Name"
                            required
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col-md-12">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => onChangeForm(e)}
                            value={customer.email}
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </FormGroup>
                </Row>
                <Button onClick={(e) => createCustomer()} color="info" block>Create</Button>
            </Form>
        </div>
    )
}
