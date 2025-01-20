import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeSix from "./components/HomeSix/index.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeTwoSingle from "./components/HomeTwo/index-single.jsx";
import HomeThreeSingle from "./components/HomeThree/index-single.jsx";
import HomeFourSingle from "./components/HomeFour/index-single.jsx";
import HomeFiveSingle from "./components/HomeFive/index-single.jsx";
import HomeSixSingle from "./components/HomeSix/index-single.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
     
     
     
      {
        path: "/home-two",
        element: <HomeTwo />
      },
     
      {
        path: "/home-three",
        element: <HomeThree />
      },
     
      {
        path: "/home-four",
        element: <HomeFour />
      },
     
      {
        path: "/home-five",
        element: <HomeFive />
      },
      {
        path: "/home-six",
        element: <HomeSix />
      },
      {
        path: "/home-one-single",
        element: <HomeOneSingle/>
      },
      {
        path: "/home-two-single",
        element: <HomeTwoSingle />
      },
     
      {
        path: "/home-three-single",
        element: <HomeThreeSingle />
      },
     
      {
        path: "/home-four-single",
        element: <HomeFourSingle />
      },
     
      {
        path: "/home-five-single",
        element: <HomeFiveSingle />
      },
      {
        path: "/home-six-single",
        element: <HomeSixSingle />
      },
      
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/products-details",
        element: <ProductsDetails />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/contact-pages",
        element: <Contact Pages />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/team-details",
        element: <TeamDetails />
      },
      {
        path: "/testimonial",
        element: <Testimonial />
      },
      {
        path: "/projects-details",
        element: <ProjectsDetails />
      },
      {
        path: "/Faq",
        element: <Faq />
      },
      {
        path: "/service-details",
        element: <ServicesDetails />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
     
     
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
