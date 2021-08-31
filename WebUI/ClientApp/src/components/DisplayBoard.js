import React from 'react'
import { Button } from 'reactstrap'

export const DisplayBoard = ({ numberOfCustomers, getAllCustomers }) => {

    const style = {
        displayBoard: {
            backgroundColor: '#96a8a0',
            width: '100%',
            padding: '5%',
            marginTop: '5%',
            textAlign: 'center'
        },
        title: { color: 'white' },
        number: {
            color: 'green',
            fontSize: '75px'
        }
    }

    return (
        <div style={style.displayBoard}>
            <h4 style={style.title}>
                Customers
            </h4>
            <div style={style.number}>
                {numberOfCustomers}
            </div>
            <div>
                <Button onClick={(e) => getAllCustomers()} color="success">Get All Customers</Button>
            </div>
        </div>
    )
}
