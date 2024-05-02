import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WORLDWISE</h1>
      <Link to="/product">Product</Link>
    </div>
  );
}
export default HomePage;
