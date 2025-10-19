import React from "react";
function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h2>The Zerodha Universe</h2>
                <p>
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/smallcaseLogo.png"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">
                        Thematic investment platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/streakLogo.png"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">
                        Algo & strategy platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/sensibullLogo.svg"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">
                        options trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/goldenpiLogo.png"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">
                        Bonds trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/dittoLogo.png"
                        style={{ width: "200px" }}
                    />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5"
                    style={{ width: "16%", margin: "0 auto" }}
                >
                    Sign up Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
