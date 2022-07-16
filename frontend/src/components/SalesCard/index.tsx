import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    useEffect(() => {
        axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data);
            })
    }, [])

    return (
        <div className="dem-card">
            <h2 className="dem-titulo-vendas">Vendas</h2>
            <div>
                <div className="dem-formulario-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dem-formulario"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dem-formulario-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dem-formulario"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>


            <div>
                <table className="dem-tabela-vendas">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="show992">#341</th>
                            <th className="show576">08/08/2022</th>
                            <th>Anakin</th>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <th>R$ 1000.00</th>
                            <th>
                                <div className="dem-botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="show992">#341</th>
                            <th className="show576">08/08/2022</th>
                            <th>Anakin</th>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <th>R$ 1000.00</th>
                            <th>
                                <div className="dem-botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="show992">#341</th>
                            <th className="show576">08/08/2022</th>
                            <th>Anakin</th>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <th>R$ 1000.00</th>
                            <th>
                                <div className="dem-botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default SalesCard;
