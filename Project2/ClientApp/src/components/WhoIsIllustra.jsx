import NavBarCustom from "./NavBarCustom";
import WhoIsPng from "../assets/Whois1.png"
import WeAre from "../assets/WeAre1.png"
import Footer from "./Footer"

const WhoIsIllustra = () => {
    return (
        <>    
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <NavBarCustom />
                </div>
            </div>
            
            <div className="row">
                <div className="col-xs-12 col-md-12">
                    <img src={WhoIsPng} alt="new" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-12">
                    {/*<h1 className="wdwdHeader">*/}
                    {/*    What Do We Do?*/}
                    {/*</h1>*/}
                    {/*<p className="wdwdtext">Illustra Realty Incorporated is a real estate marketing company that markets and sells condominiums,<br/>*/}
                    {/*    vertical homes, and other high-end leisure./residential projects for the largestt and most renowned<br/> developers*/}
                    {/*    in the Philippines.</p>*/}
                    {/*<p className="wdwdtext">We sustain and grow networks with many partners, while advocating for ethical business and marketing<br/> practices,*/}
                    {/*    honesty, transparency, and professionalism. We want you to own your dream condo, in the most<br/> convenient and hassle-free*/}
                    {/*way possible.</p>*/}
                    {/*<p className="wdwdtext">We are also open to finding dedicated, driven, and innovative people to join our growing family of<br/> illustrados and grow*/}
                    {/*    alongside us. We believe that anyone, given the right skills, training, and<br/> mindset, can become an illustrado!</p>*/}
                    <img src={WeAre} alt="new" />

                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-12">
                    <Footer />
                </div>
            </div>
      </>

  );
};

export default WhoIsIllustra;
