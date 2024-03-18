import { useState } from "react";



const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData);
    };

    return (
        <form onSubmit={handleConfirm}>
            <label>
                Nombre:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Teléfono:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
                Correo electrónico:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button type="submit">Confirmar</button>
        </form>
    );
};

export default CheckoutForm