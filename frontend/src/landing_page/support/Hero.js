import React from "react";
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mb-5" id="supportWrapper">
                <h6 className="">Support Portal</h6>
                <a href="" className="text-white">
                    Track Tickets
                </a>
            </div>
            <div className="row p-5 mb-5 mt-5">
                <div className="col-1"></div>
                <div className="col-4">
                    <h5 className="">
                        Search for an answer or browse help topic to create a
                        ticket
                    </h5>
                    <input
                        className="form-control p-3"
                        placeholder="Eg: how do i active F&O, Why is my order getting rejected.."
                    />
                    <br />
                    <a href="" className="text-white supportHeroLink">
                        Track Account Opening
                    </a>
                    <a href="" className="text-white supportHeroLink">
                        Track Segment activation
                    </a>
                    <a href="" className="text-white supportHeroLink">
                        Intraday margins
                    </a>
                    <a href="" className="text-white supportHeroLink">
                        Kite user mannual
                    </a>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <h5 className="">Featured</h5>
                    <ol>
                        <li>
                            <a
                                href=""
                                className="text-white"
                                style={{ lineHeight: "2.5" }}
                            >
                                Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-white"
                                style={{ lineHeight: "2.5" }}
                            >
                                Latest Intraday leverages - MIS & CO
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    );
}

export default Hero;
