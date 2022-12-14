import React, {Component} from 'react';
import Header from "../parts/Header";
import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";
import Stepper, {Numbering, Meta, MainContent, Controller} from "../elements/Stepper";
import Button from "../elements/Button";
import itemDetails from "json/itemDetails.json"

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: ''
    }
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    window.scroll(0,0)
  }

  render() {
    const data = this.state
    const checkout = {
      duration: 3
    }

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation data={data} checkout={checkout} itemDetails={itemDetails} onChange={this.onChange} />
        )
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instructions below',
        content: (
          <Payment data={data}
                   checkout={checkout}
                   itemDetails={itemDetails}
                   onChange={this.onChange} />
        )
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: (
          <Completed />
        )
      }
    }
    return (
      <>
        <Header />
        <Stepper steps={steps}>
          {
            (prevStep, nextStep, currentStep, steps) => (
              <>
                <Numbering data={steps} current={currentStep} style={{marginBottom: 50}} />
                <Meta data={steps} current={currentStep} />
                <MainContent data={steps} current={currentStep} />

                {currentStep === 'bookingInformation' && (
                  <Controller>
                    {
                      data.firstName !== ''
                      && data.lastName !== ''
                      && data.email !== ''
                      && data.phone !== ''
                      && (
                        <Button className="btn mb-3" type="button" isPrimary isBlock hasShadow onClick={nextStep}>
                          Continue to book
                        </Button>
                      )
                    }
                    <Button className="btn" type="link" isBlock isLight href={`/properties/${itemDetails._id}`}>Cancel</Button>

                  </Controller>
                )}

                {currentStep === 'payment' && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Book
                          </Button>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}

                {currentStep === "completed" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href=""
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            )
          }
        </Stepper>
      </>
    );
  }
}

export default Checkout;