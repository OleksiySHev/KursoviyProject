import React, {useEffect, useState} from 'react';
import EquipmentTable from "../components/EquipmentTable";
import axios from "axios";
import '../css/EquipmentPage.css'
import ModalEquipment from "../components/ModalEquipment";

const EquipmentPage = () => {
    const [equipments, setEquipments] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/equipment')
            .then(res => {
                setEquipments(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className={'equipmentPage'}>
            <div className={'equipmentPage__title'}>
                ТАБЛИЦЯ ОБЛАДНАННЯ
            </div>
            <EquipmentTable equipments={equipments}/>
            <ModalEquipment/>
        </div>
    );
};

export default EquipmentPage;