import React from "react";
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a
                            href={learnMore}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            Learn More{" "}
                            <i className="fa-solid fa-right-long"></i>
                        </a>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
