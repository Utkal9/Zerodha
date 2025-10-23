import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [message, setMessage] = useState("");

    const generalCtx = useContext(GeneralContext);

    // ✅ Reset fields when UID changes
    useEffect(() => {
        setStockQuantity(1);
        setStockPrice(0.0);
        setMessage("");
    }, [uid]);

    const handleBuyClick = async () => {
        try {
            const res = await axios.post("http://localhost:3002/newOrder", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY",
            });
            setMessage(res.data.message);
            setTimeout(() => {
                generalCtx.closeBuyWindow();
            }, 1000);
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };

    const handleCancelClick = () => {
        generalCtx.closeBuyWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            step="0.05"
                            value={stockPrice}
                            onChange={(e) => setStockPrice(e.target.value)}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span style={{ color: "green" }}>{message}</span>
                <div>
                    <Link className="btn btn-green" onClick={handleBuyClick}>
                        Buy
                    </Link>
                    <Link className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;
