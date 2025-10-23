import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [message, setMessage] = useState("");

    // ✅ Access context functions properly
    const generalCtx = useContext(GeneralContext);

    const handleSellClick = async () => {
        try {
            const res = await axios.post("http://localhost:3002/sellOrder", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
            });

            setMessage(res.data.message);

            setTimeout(() => {
                generalCtx.closeSellWindow(); // ✅ Correct usage
            }, 1000);
        } catch (error) {
            if (error.response && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        }
    };

    const handleCancelClick = () => {
        generalCtx.closeSellWindow(); // ✅ Correct usage
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span style={{ color: "red" }}>{message}</span>
                <div>
                    <Link className="btn btn-red" onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
