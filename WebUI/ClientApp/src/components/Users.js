import React, { useState } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { CreateUser } from './CreateUser'
import { getUsers, addUser } from '../services/UserService'
import { DisplayBoard } from './DisplayBoard'
import { UsersTable } from './UsersTable'

export const Users = () => {
    const [userData, setUserData] = useState({
        user: {},
        users: [],
        numberOfUsers: 0
    })

    const onChangeForm = e => {
        let user = userData.user
        if (e.target.name === "firstname") {
            user.firstname = e.target.value
        } else if (e.target.name === "lastname") {
            user.lastName = e.target.value;
        } else if (e.target.name === "email") {
            user.email = e.target.value;
        }
        setUserData({ ...userData, user })
    }

    const createUser = e => {
        addUser(userData.user)
            .then(id => {
                setUserData({ ...userData, user: { id: id, firstname: '', lastname: '', email: '' } })
            })
    }

    const getAllUsers = () => {
        getUsers()
            .then(users => {
                setUserData({ ...userData, users: users, numberOfUsers: users.length })
            })
    }

    return (
        <section>
            <Row>
                <Col md="8">
                    <CreateUser
                        onChangeForm={onChangeForm}
                        createUser={createUser}
                        user={userData.user}
                    >
                    </CreateUser>
                </Col>
                <Col md="4">
                    <DisplayBoard
                        numberOfUsers={userData.numberOfUsers}
                        getAllUsers={getAllUsers}
                    >
                    </DisplayBoard>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <UsersTable
                        users={userData.users}
                    ></UsersTable>
                </Col>
            </Row>
        </section>
    )
}