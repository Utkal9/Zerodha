import React from "react";
function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h5 className="text-muted mt-3">
                    Free equity investments and flat ₹20 traday and F&O trades
                </h5>
            </div>
            <div className="row p-5">
                <div className="col-4 p-5 text-center">
                    <img src="media/images/pricingEquity.svg" />
                    <h2 className="fs-3">Free equity delivery</h2>
                    <p className="mt-3 text-muted">
                        All equity delivery investments (NSE, BSE), are
                        absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src="media/images/intradayTrades.svg" />
                    <h2 className="fs-3">Intraday and F&O trades</h2>
                    <p className="mt-3 text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed
                        order on intraday trades across equity, currency, and
                        commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src="media/images/pricingMF.svg" />
                    <h2 className="fs-3">Free direct MF</h2>
                    <p className="mt-3 text-muted">
                        All direct mutual fund investments are absolutely free —
                        ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
