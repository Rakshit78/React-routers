import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams
} from "react-router-dom";

function Nav() {
  return (
    <>
      <ProductDeyails />
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">Avout</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/portfolio">Portfolio</Link>
      <br />
      <Link to={`product/:productId`}>Product</Link>
      <br />
    </>
  );
}
let laptops = [
  { name: "macbook-air", price: 127000 },
  { name: "dell-laptop", price: 47000 },
  { name: "HP-laptop", price: 49000 },
  { name: "Toshiba-laptop", price: 51000 }
];
function Home() {
  return <h1>Home</h1>;
}
function Contact() {
  return <h1>contact</h1>;
}
function Portfolio() {
  return <h1>portfolio</h1>;
}
function About() {
  return <h1>about</h1>;
}
// child of producdetails
function Laptops() {
  return (
    <ol>
      {laptops.map((elem) => {
        return (
          <Link to={`/product/${elem.name}`}>
            {" "}
            <li key={elem.name}>{elem.name}</li>
          </Link>
        );
      })}
    </ol>
  );
}
// actual route :priductId
function ProductDeyails() {
  const element = useParams();
  const { productId, price } = element;
  console.log(element);
  return (
    <>
      <Laptops />
      <h1>Product Page:{productId} </h1>
      <h1>
        Price :
        {laptops.map((elem) => {
          if (elem.name === productId) {
            return <p>{elem.price}</p>;
          }
        })}
      </h1>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path={`product/:productId`} element={<ProductDeyails />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
export default App;
