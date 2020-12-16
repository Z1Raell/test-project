import { getElementError } from '@testing-library/react';
import React, { useState } from 'react';
import firebase from 'firebase'


const AddGoods = () => {
    const [goods, setGoods] = useState({
        title: "",
        photo: "",
        description: "",
        price: null,
        discount: null,
    });

    const hendleCheng = ({ target: { value, id } }) => {
        setGoods(prev => ({
            ...prev, ...{
                [id]: value
            }
        }))
    }

    const hendleSubmit = () => {
        const db = firebase.database();
        const key = 'products'
        db.ref(key).push(goods)    
    }

    return (
        <>
            <form onSubmit={hendleSubmit}>
                <input type="text" placeholder="enter goods title " minLength="20" maxLength="60" required onChange={hendleCheng} id="title"/>
                <input type="text" placeholder="enter goods url photo" required onChange={hendleCheng} id="photo"/>
                <textarea placeholder="enter goods description" maxLength="200" onChange={hendleCheng} id="description"/>
                <input type="number" min="0.01" step="0.01" required placeholder="enter price" onChange={hendleCheng} id="price"/>
                <input type="number" min="10" max="90" step="1" id="discount" placeholder="enter discount" onChange={hendleCheng} />
                <input type="date" placeholder="enter the end date of the discount" id="date"/>
            </form>
        </>
    );
}

export default AddGoods;
