import React, {useState} from 'react';
import '../css/Modal.css'
import axios from "axios";
import Modal from "react-modal";

const ModalEquipment = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [frequency, setFrequency] = useState("");
    const [origin, setOrigin] = useState("");
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal} className={"modal-button"}>ADD NEW EQUIPMENTS</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal window news"
            >
                <div className={"modal"}>
                    <div className={"modal-close"}>
                        <button onClick={closeModal} >Закрити</button>
                    </div>
                    <div className={"modal-container"}>
                        <label>
                            Name
                            <input type="text" onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label>
                            Color
                            <input type="text" onChange={(e) => setColor(e.target.value)}/>
                        </label>
                        <label>
                            Height
                            <input type="number" onChange={(e) => setHeight(Number(e.target.value))}/>
                        </label>
                        <label>
                            Width
                            <input type="number" onChange={(e) => setWidth(Number(e.target.value))}/>
                        </label>
                        <label>
                            Frequency
                            <input type="text" onChange={(e) => setFrequency(e.target.value)}/>
                        </label>
                        <label>
                            Origin
                            <input type="text" onChange={(e) => setOrigin(e.target.value)}/>
                        </label>
                        <button onClick={() => {
                            axios.post("http://localhost:3000/equipment", {name, color, height, width, frequency, origin})
                                .then(res => {
                                    alert("Well done!");
                                    closeModal();
                                    window.location.href = '/equipments'
                                })
                                .catch(error => {
                                    alert("Some error")
                                })
                        }} className={"modal-button"}>Додати</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ModalEquipment;