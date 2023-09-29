import illustraTrans from "./../assets/illustra-trans.png";

const Footer = () => {
    return (
        <div className="row justify-content-center footer">
            <div className="col-xs-12 col-md-2">
                <p>Useful links</p>
                <ul>
                    <li>Find Property</li>
                    <li>Sell Property</li>
                    <li>Get Agent</li>
                    <li>Listing</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-2">
                <p>About</p>
                <ul>
                    <li>About Us</li>
                    <li>How it Works</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-2">
                <p>Terms</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Copyright Policy</li>
                    <li>Security</li>
                    <li>Fees and Charge</li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-2">
                <p>
                    <img
                        src={illustraTrans}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Illustra"
                    />
                </p>
                <ul>
                    <li>59 West 46th street, New York City.</li>
                    <li>email@realestate.com</li>
                </ul>
            </div>
            <Social />
        </div>
    );
};

const Social = () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <hr></hr>
                <h1 className="icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100094528410139"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>
                </h1>
                <h1 className="icons">
                    <a
                        href="https://www.linkedin.com/in/adrian-vincent-opinion-11bbb1193/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                </h1>
                <h1 className="icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100094528410139"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </h1>
                <h1 className="icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100094528410139"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </h1>
                <br></br>
                <br></br>
                Copyright 2023 Real estate, inc. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;