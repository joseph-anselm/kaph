import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import styles from "../styles/Home.module.css";
import * as Icon from "react-bootstrap-icons";

import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Badge,
  Nav,
  NavDropdown,
  Jumbotron,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container fluid className={styles.section1}>
        <Row>
          <div className=" p-2 me-auto text-gray rounded text-center">
            <div className="grid justify-center">
              <img
                src="img/kaphfooterlogo.png"
                width={150}
                alt="kaph logo"
                className="flex justify-center"
              />
              <h2>We Are KGLS </h2>
            </div>
            <p>
              We are commited to ensuring high quality and professional service
              delivery and exceptional business support solutions that
              continously adds value to individuals and businesses.
            </p>
          </div>
        </Row>

        <Container>
          <Row className="m-10 text-center justify-center ">
            <>
              <Link href="/services">
                <Card
                  className="bg-light m-4 p-2 text-white "
                  style={{ width: "18rem" }}
                >
                  <Card.Img src="img/tab-1.jpg" alt="Card image" />
                  <Card.ImgOverlay className={styles.servicecards}>
                    <Card.Title>Global Sourcing </Card.Title>
                    <Card.Text>
                      We understand the diverse need of different clients, that
                      is why our sourcing services are scalable..
                    </Card.Text>
                    <Badge bg="warning" text="dark">
                      More
                    </Badge>
                  </Card.ImgOverlay>
                </Card>
              </Link>

              <Link href="/services">
                <Card
                  className="bg-light m-4 p-2 text-white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img src="img/tab-2.jpg" alt="Card image" />
                  <Card.ImgOverlay className={styles.servicecards}>
                    <Card.Title>Protocol Service</Card.Title>
                    <Card.Text>
                      KGSL uses internationally recognized procedures to create
                      a welcoming environment for people conducting business in
                      Nigeria.
                    </Card.Text>
                    <Badge bg="warning" text="dark">
                      More
                    </Badge>
                  </Card.ImgOverlay>
                </Card>
              </Link>

              <Link href="/services">
                <Card
                  className="bg-light m-4 p-2 text-white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img src="img/tab-3.jpg" alt="Card image" />
                  <Card.ImgOverlay>
                    <div className={styles.servicecards}>
                      <Card.Title>General Contracting</Card.Title>
                      <Card.Text>
                        Our vision is our mission. KGSL is ready to turn your
                        dreams into reality...
                      </Card.Text>
                      <Badge bg="warning" text="dark">
                        More
                      </Badge>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </>
          </Row>
        </Container>

        {/* <Container className="m-10">
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/img/bg-2.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/img/bg-2.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/img/bg-2.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </Container>

      <div className={styles.section3}>
        <Row>
          <Col>
            <Card className="bg-dark text-white text-center relative justify-center align-middle">
              <Card.Img src="/img/bg-3.jpg" alt="Card image" />
              <Card.ImgOverlay className={styles.cards}>
                <Card.Title>
                  <h1>Excellence</h1>
                </Card.Title>
                <Card.Text>
                  We are completely defined by Professional ethics and
                  excellence which reflects and guides all our clients deals and
                  deliverables.
                </Card.Text>
                <Button href="#" className={styles.btn}>
                  Get Started
                </Button>
              </Card.ImgOverlay>
            </Card>

            {/* <div class="mt-4 p-5 bg-primary text-white rounded relative">
              <h1>Jumbotron Example</h1>
              <p>Lorem ipsum...</p>
            </div> */}
          </Col>
        </Row>
      </div>

      <Container className="m-10">
        <Row>
          <div className="p-1 me-auto text-gray rounded text-center">
            <h1>Our Core Values</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p> */}
          </div>
        </Row>

        <Row className={styles.sectionchild}>
          <Col xs={6} md={3}>
            <div className={styles.iconstab}>
              <Icon.Globe2 size={96} />
              <h5>Quality</h5>
            </div>
          </Col>
          <Col xs={6} md={3} className={styles.iconstab}>
            <Icon.UiChecks size={96} />
            <h5>Professionalism</h5>
          </Col>

          <Col xs={6} md={3}>
            <Icon.Bank size={96} />
            <h5>Excellence</h5>
          </Col>
          <Col xs={6} md={3}>
            <Icon.Bank size={96} />
            <h5>Competence</h5>
          </Col>
          {/* <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Block level button
              </Button>
            </div> */}
        </Row>
      </Container>
    </div>
  );
}
