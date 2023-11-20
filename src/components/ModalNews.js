import React, {useState} from 'react';
import '../css/Modal.css'
import axios from "axios";
import Modal from "react-modal";

const ModalNews = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [imgSource, setImgSource] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState(0);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal} className={"modal-button"}>ADD NEW NEWS</button>
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
                            Title
                            <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                        <label>
                            Img Source
                            <input type="text" onChange={(e) => setImgSource(e.target.value)}/>
                        </label>
                        <label>
                            Text
                            <input type="text" onChange={(e) => setText(e.target.value)}/>
                        </label>
                        <label>
                            Date
                            <input type="number" onChange={(e) => setDate(Number(e.target.value))}/>
                        </label>
                        <button onClick={() => {
                            axios.post("http://localhost:3000/news", {title, imgSource, text, date})
                                .then(res => {
                                    alert("Well done!");
                                    closeModal();
                                    window.location.href = '/news'
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

export default ModalNews;