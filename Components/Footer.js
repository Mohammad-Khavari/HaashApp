import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Footer = () => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        
        <footer className="bg-secondary d-flex justify-content-end">
            <p className="px-4">
                Time : {date.toLocaleTimeString()} <br />
                Date : {date.toLocaleDateString()}
            </p>
        </footer>
    );
};

export default Footer;
