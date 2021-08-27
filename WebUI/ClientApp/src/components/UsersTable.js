import React from 'react'
import { Table } from 'reactstrap'

export const UsersTable = ({ users }) => {
    if (users.length === 0) return null

    const UserRow = (user, index) => {
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    const userTable = users.map((user, index) => UserRow(user, index))

    return (
        <div>
            <h2>Users</h2>
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
                    {userTable}
                </tbody>
            </Table>
        </div>
    )
}