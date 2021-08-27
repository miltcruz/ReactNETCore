import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap'

export const CreateUser = ({ onChangeForm, createUser, user }) => {

    return (
        <div>
            <h2>Create User</h2>
            <Form>
                <Row>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => onChangeForm(e)}
                            value={user.firstname}
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
                            value={user.lastname}
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
                            value={user.email}
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </FormGroup>
                </Row>
                <Button onClick={(e) => createUser()} color="info" block>Create</Button>
            </Form>
        </div>
    )
}
