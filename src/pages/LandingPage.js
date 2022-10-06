import React, {Component} from 'react';
import Header from "../parts/Header";
import landingPage from 'json/landingPage.json'
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

//
// const LandingPage = (props) => {
//   const refMostPicked = React.createRef()
//
//   return (
//     <>
//       <Header {...this.props}/>
//       <Hero data={landingPage.hero} refMostPicked={this.refMostPicked} />
//       <MostPicked data={landingPage.mostPicked} refMostPicked={this.refMostPicked}/>
//       <Categories data={landingPage.categories}  />
//       <Testimony data={landingPage.testimonial} />
//       <Footer />
//     </>
//   );
// };
//
// export default LandingPage;

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0,0)
  }

  render() {
    return (
      <>
        <Header {...this.props}/>
        <Hero data={landingPage.hero} refMostPicked={this.refMostPicked} />
        <MostPicked data={landingPage.mostPicked} refMostPicked={this.refMostPicked}/>
        <Categories data={landingPage.categories}  />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}