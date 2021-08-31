import React from 'react'
import { Table } from 'reactstrap'

export const CustomersTable = ({ customers }) => {
    if (customers.length === 0) return null

    const CustomerRow = (customer, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
            </tr>
        )
    }

    const customerTable = customers.map((customer, index) => CustomerRow(customer, index))

    return (
        <div>
            <h2>Customers</h2>
            <Table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {customerTable}
                </tbody>
            </Table>
        </div>
    )
}