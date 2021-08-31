import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export const Weather = (props) => {

    const [forecasts, setForecasts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/weatherforecast');
            const data = await response.json();
            setForecasts(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const renderForecastsTable = (forecasts) => {
        return (
            <Table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp(C)</th>
                        <th>Temp(F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }


    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts);

    return (
        <div>
            <h1 id="tabelLabel">Weather Forecast</h1>
            {contents}
        </div>
    );
}

