import React from "react";
function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className="row text-center p-5 mt-5 mb-5 text-muted">
                <h2>Zerodha Products</h2>
                <h4>Sleek, modern, and intuitive trading platforms</h4>
                <p className="mt-3 mb-3">
                    Check out our{" "}
                    <a href="#" style={{ textDecoration: "none" }}>
                        investment offerings →
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
