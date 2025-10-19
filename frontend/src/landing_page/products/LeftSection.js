import React from "react";
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>
                            Try Demo <i className="fa-solid fa-right-long"></i>
                        </a>
                        <a
                            href={learnMore}
                            style={{
                                textDecoration: "none",
                                marginLeft: "50px",
                            }}
                        >
                            Learn More{" "}
                            <i className="fa-solid fa-right-long"></i>
                        </a>
                    </div>
                    <div>
                        <a href={googlePlay} style={{ textDecoration: "none" }}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a
                            href={appStore}
                            style={{
                                textDecoration: "none",
                                marginLeft: "50px",
                            }}
                        >
                            <img src="media/images/appstoreBadge.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
