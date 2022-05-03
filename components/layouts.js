import React from "react";
import Menubar from "./menubar";
import Footer from "./footer";
import Head from "next/dist/shared/lib/head";
import Header2 from "./header2";
import Header from "./header";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Layout({ children, title }) {
  const router = useRouter();
  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;
  const showHeader3 = router.asPath === "/contact" ? true : false;
  const showHeader4 = router.asPath === "/services" ? true : false;

  return (
    <>
      <Head>
        <title>Welcome to Kaph Global Solutions Limited - {Layout.title}</title>
        <link rel="icon" href="/img/favicon.png" />

        <meta
          name="google-site-verification"
          content="LCuDCIfe0pJ2jlIqnY_0ABT5-j-4Q00j7EqvK0Xw3JA"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Menubar />
      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      {showHeader3 && <Header2 />}
      {showHeader4 && <Header2 />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
