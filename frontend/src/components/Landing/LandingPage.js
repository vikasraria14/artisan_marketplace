import Slideshow from "./SlideShow";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CategoryBox from "./CategoryBox";
import { useHistory, Link } from "react-router-dom";

const LandingPage = () => {
    const category={
        category:"Boquet"
    }
    const history=useHistory()
    const checkLoggedIn=()=>{
      const username = window.localStorage.getItem("username")
      if(username)
      {

      }
      else
      {
          history.push('/login')
      }
  }
  checkLoggedIn()
  return (
    <div>
      <Header />
      <Slideshow />
      <div className="categories">
        <Link className="categoryBox category1" to={{ pathname: '/', state: { category:"painting" } } }>
          <CategoryBox name={"Paintings"} />
        </Link>
        <Link className="categoryBox category2" to={{ pathname: '/', state: { category:"toy" } }}>
          <CategoryBox name={"Toys"}/>
        </Link>
        <Link className="categoryBox category3" to={{ pathname: '/', state: { category:"decor" } }}>
          <CategoryBox  name={"Home Decor"}/>
        </Link>
      </div>
      <div className="categories ">
        <Link className="categoryBox category4" to={{ pathname: '/', state: { category:"clothes" } }}>
          <CategoryBox  name={"Clothes"}/>
        </Link>
        <Link className="categoryBox category5" to={{ pathname: '/', state: { category:"jewellery" } }}>
          <CategoryBox  name={"Jewellery"}/>
        </Link>
        <Link className="categoryBox category6" to={{ pathname: '/', state: { category:"utensils" } }}>
          <CategoryBox  name={"Utensil"}/>
        </Link>
      </div>

      <Footer />
    </div>
  );
};
export default LandingPage;
