import React from 'react';
import '../css/EquipmentTable.css'

const EquipmentTable = ({equipments}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>NAME</th>
                <th>COLOR</th>
                <th>HEIGHT</th>
                <th>WIDTH</th>
                <th>FREQUENCY</th>
                <th>ORIGIN</th>
            </tr>
            </thead>
            <tbody>
            {equipments?.map(value => (
                <tr>
                    <td>{value.name}</td>
                    <td>{value.color}</td>
                    <td>{value.height}</td>
                    <td>{value.width}</td>
                    <td>{value.frequency}</td>
                    <td>{value.origin}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EquipmentTable;