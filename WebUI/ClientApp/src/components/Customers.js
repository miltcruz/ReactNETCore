import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { CreateCustomer } from './CreateCustomer'
import { getCustomers, addCustomer } from '../services/CustometService'
import { DisplayBoard } from './DisplayBoard'
import { CustomersTable } from './CustomersTable'

export const Customers = () => {
    const [customerData, setCustomerData] = useState({
        customer: {},
        customers: [],
        numberOfCustomers: 0
    })

    const onChangeForm = e => {
        let customer = customerData.customer
        if (e.target.name === "firstname") {
            customer.firstname = e.target.value
        } else if (e.target.name === "lastname") {
            customer.lastName = e.target.value;
        } else if (e.target.name === "email") {
            customer.email = e.target.value;
        }
        setCustomerData({ ...customerData, customer })
    }

    const createCustomer = e => {
        addCustomer(customerData.customer)
            .then(id => {
                setCustomerData({ ...customerData, customer: { id: id, firstname: '', lastname: '', email: '' } })
            })
    }

    const getAllCustomers = () => {
        getCustomers()
            .then(customers => {
                setCustomerData({ ...customerData, customers: customers, numberOfCustomers: customers.length })
            })
    }

    return (
        <section>
            <Row>
                <Col md="8">
                    <CreateCustomer
                        onChangeForm={onChangeForm}
                        createCustomer={createCustomer}
                        customer={customerData.customer}
                    >
                    </CreateCustomer>
                </Col>
                <Col md="4">
                    <DisplayBoard
                        numberOfCustomers={customerData.numberOfCustomers}
                        getAllCustomers={getAllCustomers}
                    >
                    </DisplayBoard>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <CustomersTable
                        customers={customerData.customers}
                    ></CustomersTable>
                </Col>
            </Row>
        </section>
    )
}