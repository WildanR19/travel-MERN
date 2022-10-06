import React, {Component} from "react";
import InputNumber from "../elements/Form/InputNumber";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import itemDetails from "json/itemDetails.json"
import FeaturedImage from "../parts/FeaturedImage";
import DescriptionDetail from "../parts/DescriptionDetail";
import BookingForm from "../parts/BookingForm";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0,0)
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];

    return (
      <>
        <Header />
        <PageDetailTitle breadcrumb={breadcrumbList} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <DescriptionDetail data={itemDetails} />
            </div>
            <div className="col">
              <BookingForm itemDetails={itemDetails} />
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    )
  }
}

export default DetailsPage