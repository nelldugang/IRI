// import { NavLink } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
/*import { useParams } from "react-router-dom";*/
import NavBarCustom from "./NavBarCustom";
import Footer from "./Footer";

const ProductView = ({ cardList }) => {
  return (
    <>
      <div className="col-xs-12 col-md-6">
        <NavBarCustom />
      </div>
      <div className="col-xs-12 col-md-12">
        <ProductHeader cardList={cardList} />
      </div>
      <div className="col-xs-12 col-md-12">
        <ProductDetails cardList={cardList} />
      </div>
          <div>
          <Footer />
          </div>
    </>
  );
};

const ProductHeader = ({ cardList }) => {
  //const { id } = useParams();
  //const productTest = cardList.find((list) => list.id == id);
  //const { url } = productTest;
  //const backgroundStyle = {
  //  backgroundImage: `url(${url})`,
  //  opacity: 0.7,
  //  backgroundRepeat: "no-repeat",
  //  backgroundSize: "cover",
  //  height: "30em",
  //};

  return (
    <div className="row">
      {/*<div className="product-section" style={backgroundStyle}></div>*/}
    </div>
  );
};

const ProductDetails = ({ cardList }) => {
  //const { id } = useParams();
  //const productTest = cardList.find((list) => list.id == id);
  //const { title, location, price } = productTest;
    return (
      <>
    <div className="row">
      {/*<div className="col-xs-12 col-md-12">*/}
      {/*  <div className="col-xs-12 col-md-12">{title}</div>*/}
      {/*  <div className="col-xs-12 col-md-12">{location}</div>*/}
      {/*  <div className="col-xs-12 col-md-12">{price}</div>*/}
          {/*</div>*/}
                <div className="col-xs-12 col-md-3"><span className="productViewText">Blandit aliquam etiam erat velit scelerisque in dictum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Convallis a cras semper auctor neque vitae tempus quam.</span></div>
                <div className="col-xs-12 col-md-3"><img src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/33.jpg" alt="new" className="img-fluid"/></div>
                <div className="col-xs-12 col-md-6"><img src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/rre.jpg" alt="new" className="img-fluid" /></div>
            </div>
            <br />
            <br />
    <div className="row">
                <div className="col-xs-12 col-md-6"><img src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/gh.jpg" alt="new" className="img-fluid" /></div>
                <div className="col-xs-12 col-md-3"><img src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/ghghhg.jpg" alt="new" className="img-fluid" /></div>
                <div className="col-xs-12 col-md-3"><span classname="productviewtext">blandit aliquam etiam erat velit scelerisque in dictum. metus vulputate eu scelerisque felis imperdiet proin fermentum leo. vitae aliquet nec ullamcorper sit amet risus nullam eget felis. convallis a cras semper auctor neque vitae tempus quam.</span></div>
    </div>
            <br />
            <br />
        </>
  );
};

export default ProductView;
