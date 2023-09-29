import NavBarCustom from "./NavBarCustom";
import "./../customCss/customCSS.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import mainImage from "./../assets/mainImage.jpg";
//images
import elon from "./../assets/elon.jpg";
import mark from "./../assets/mark.jpg";
import Footer from "./Footer";

const HomePage = ({ cardList }) => {
  const cardSteps = [
    {
      id: 0,
      icon: "bi bi-bank",
      title: "Evaluate Property",
      content: "Evaluation is very important for your property buy and sell",
    },
    {
      id: 1,
      icon: "bi bi-person",
      title: "Meet your agent",
      content: "We are here to help you to get your best agent for discussion",
    },
    {
      id: 2,
      icon: "bi bi-cash-coin",
      title: "Close the deal",
      content: "Get to connect with us to help you close the deal",
    },
  ];

  const cardsDeals = [
    {
      id: 0,
      url: "https://www.brittany.com.ph/wp-content/uploads/2022/09/Studio-units-are-smartly-designed-to-maximize-the-space-to-accommodate-multiple-rooms.-1024x678.jpg",
      title: "2 BR Condominium 100 SQM",
      location: "Makati",
      Price: "5M",
    },
    {
      id: 1,
      url: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
      title: "House and Lot",
      location: "Quezon City",
      Price: "5M",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80",
      title: "House and Lot with Pool",
      location: "Tondo",
      Price: "5M",
    },
    {
      id: 3,
      url: "https://www.brittany.com.ph/wp-content/uploads/2022/09/The-lofts-upper-level-lets-the-owner-have-more-space-below.-Photo-from-Garbutt-Dumas-Realtors-1024x683.jpg",
      title: "2 BR Condominium 100 SQM",
      location: "Pateros",
      Price: "5M",
    },
    {
      id: 4,
      url: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      title: "4 BR Condominium 180 SQM",
      location: "Marikina",
      Price: "5M",
    },
    {
      id: 5,
      url: "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg",
      title: "3 BR Condominium 130 SQM",
      location: "Cavite",
      Price: "5M",
    },
  ];

  const cardsAgent = [
    {
      id: 0,
      img: elon,
      slogan:
        '"I am so pleased to got such as best services & I recommend them."',
      name: "Elon Musk",
      position: "Agent",
      socials: "5M",
    },
    {
      id: 1,
      img: mark,
      slogan:
        '"I am so pleased to got such as best services & I recommend them."',
      name: "Mark Zuckerberg",
      position: "Agent",
      socials: "5M",
    },
  ];

  return (
    <>
      <div className="col-xs-12 col-md-6">
        <NavBarCustom />
        <Headings />
      </div>
      <div className="col-xs-12 col-md-6">
        <LeftImage />
      </div>
      <div className="col-xs-12 col-md-12">
        <Section />
      </div>
      <div className="col-xs-12 col-md-12">
        <SectionRooms cardList={cardList} />
      </div>
      <div className="col-xs-12 col-md-12">
        <Section2 />
      </div>
      <div className="col-xs-12 col-md-12">
        <SectionSteps cardStepsList={cardSteps} />
      </div>
      <div className="col-xs-12 col-md-12">
        <Section3 />
      </div>
      <div className="col-xs-12 col-md-12">
        <SectionDeals cardDealLists={cardsDeals} />
      </div>
      <div className="col-xs-12 col-md-12">
        <SectionTopAgent cardAgentLists={cardsAgent} />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

const LeftImage = () => {
  return (
    <div>
      <img src={mainImage} className="mainImage shadow rounded" alt="new"></img>
    </div>
  );
};

const Headings = () => {
  return (
    <div className="header">
      <h1 className="main-header">
        Smart Real Estate
        <br />
      </h1>
      <h1 className="main-header">
        Dreams Come True
        <br />
      </h1>
      <p className="sub-header">
        Residence is a service to manage your property on one platform. Provides
        valuation, Sell, Buy, Mortgage & others real estate services worldwide.
      </p>
      <Button variant="primary shadow rounded">Get Started</Button>
    </div>
  );
};

const Section = () => {
  return (
    <div className="section1-header">
      <div className="padding"></div>
      <h1 className="section1-main-header">Featured Homes</h1>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-2 center">
          <p>Property</p>
        </div>
        <div className="col-xs-12 col-md-2 center">
          <p>Appartment</p>
        </div>
        <div className="col-xs-12 col-md-2 center">
          <p>Land</p>
        </div>
        <div className="col-xs-12 col-md-2 center">
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

const SectionRooms = ({ cardList }) => {
  return (
    <div className="row rooms">
          {/*<div className="padding"></div>*/}

      <ul>
        {cardList.map((card) => (
          <div className="col-xs-12 col-md-4" key={card.id}>
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={card.url} />
              <Card.Body>
                <NavLink to={`/product/${card.id}`}>
                  <Card.Title>{card.title}</Card.Title>
                </NavLink>
                <Card.Text>
                  <span>
                    <i className="bi bi-geo-alt"></i> {card.location}
                  </span>
                </Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="section1-header">
      <div className="padding"></div>
      <h1 className="section1-main-header">We Follow 3 steps</h1>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-12 center">
          <p>
            Lorem ipsum dolor sit ame, consectetur adipiscing elit.<br></br>
            Donec mollis lorem ac maximus tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionSteps = ({ cardStepsList }) => {
  return (
    <div className="row sectionSteps">
      {cardStepsList.map((card) => (
        <div
          className="col-xs-12 col-md-4"
          key={card.id}
          style={{ display: "flex !important" }}
        >
          <Card key={card.id}>
            <Card.Body>
              <div>
                <h1>
                  <i className={card.icon}></i>
                </h1>
              </div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.content}</Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="row justify-content-end">
        <div className="padding"></div>
        <div className="col-md-6">
          <h1 className="section2-main-header">Why choose us?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DbdHHtg2EbM?si=yDIbanyDkrMg4OPU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-xs-12 col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Property Insurance</Card.Title>
              <Card.Text>First you should meet with agents</Card.Text>
            </Card.Body>
          </Card>
          <div className="padding2"></div>
          <Card>
            <Card.Body>
              <Card.Title>Tax </Card.Title>
              <Card.Text>First you should meet with agents</Card.Text>
            </Card.Body>
          </Card>
          <div className="padding2"></div>
          <Card>
            <Card.Body>
              <Card.Title>Lowest Commission</Card.Title>
              <Card.Text>First you should meet with agents</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

const SectionDeals = ({ cardDealLists }) => {
  return (
    <div className="row newestDeals">
      <div className="padding"></div>
      <div className="col-xs-12 col-md-12">
        <h1 className="section3-main-header">Newest Deals</h1>
        <p>2000+ available best deal real property in Residence</p>
      </div>
      <ul>
        {cardDealLists.map((card) => (
          <div
            className="col-xs-12 col-md-4"
            key={card.id}
            style={{ paddingBottom: "30px" }}
          >
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={card.url} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  <span>
                    <i className="bi bi-geo-alt"></i> {card.location}
                  </span>
                </Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

const SectionTopAgent = ({ cardAgentLists }) => {
  return (
    <div className="row agents">
      <div className="col-xs-12 col-md-12">
        <h1 className="section3-main-header">Get Connected with top agent</h1>
        <p>
          Lorem ipsum dolor sit ame, consectetur adipiscing elit.<br></br>
          Donec mollis lorem ac maximus tincidunt.
        </p>
        <Agents cardAgentLists={cardAgentLists} />
      </div>
    </div>
  );
};

const Agents = ({ cardAgentLists }) => {
  return (
    <div className="row justify-content-center agents">
      {cardAgentLists.map((card) => (
        <div
          className="col-xs-12 col-md-4"
          key={card.id}
          style={{ paddingBottom: "30px" }}
        >
          <Card style={{ width: "35rem" }}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Text>{card.slogan}</Card.Text>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.position}</Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

// const Testimonials = () => {
//   return (
//     <div className="row justify-content-center">
//       <div className="card">
//         <div className="row card-body">
//           <div className="col-sm-6">
//             <h5 className="card-title">...</h5>
//             <p className="card-text">....</p>
//             <a href="#" className="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//           <img className="col-sm-6" src="Images/template.png" alt="sans" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default HomePage;
