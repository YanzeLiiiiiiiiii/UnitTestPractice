import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import AlertBanner from './AlertBanner'
export default function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    // optionType is 'scoops' or 'toppings
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
                // TODO: handle error response
                setError(true)
            });
    }, [optionType]);

    if (error) {
        // @ts-ignore
        return <AlertBanner />;
    }
    // TODO: replace `null` with ToppingOption when available
    const ItemComponent = optionType === "scoops" ? ScoopOption : null;

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    return <Row>{optionItems}</Row>;
}