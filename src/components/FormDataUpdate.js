import React, { useState } from 'react';
import './FormDataUpdate.css';

function FormDataUpdate() {
    const [data, setData] = useState({
        username: '',
        lastname: '',
        age:''
    });
    const [form, setForm] = useState({
        username: '',
        lastname: '',
        age:''
    });
    const [submit, submitted] = useState(false);

    const printValues = e => {
        e.preventDefault();
        setForm({
            username: data.username,
            lastname: data.lastname,
            age: data.age
        });
        submitted(true);
    };

    const updateField = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='login-container'>
            <h2>Update</h2>
            <form onSubmit={printValues}>
                <label>
                    FirstName:
                    <input className='input-field'
                        value={data.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    LastName:
                    <input className='input-field'
                        value={data.lastname}
                        name="lastname"
                        type="lastname"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input className='input-field'
                        value={data.age}
                        name="age"
                        type="number"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button className='submit-btn'>Submit</button>
            </form>

            <p>{submit ? form.username : null}</p>

            <p>{submit ? form.lastname : null}</p>

            <p>{submit ? form.age : null}</p>
        </div>
    );
}

export default FormDataUpdate;
