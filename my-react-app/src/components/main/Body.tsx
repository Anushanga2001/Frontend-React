import "bootstrap/dist/css/bootstrap.min.css";
import "./body.css"

function Body() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Welcome to New Emarald Frinter Shipping</h1>
      <p className="text-center text-muted mb-5">
        We have more than 20 years of experice in this industry. We now the correct direction of this thing!
      </p>

      <div className="row g-4">
        {/* Track Shipment */}
          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="box">
                <h5 className="card-title">Track Shipment</h5>
                <p className="card-text">
                  Enter your tracking number and stay updated on your shipment status in real time.
                </p>
              </div>
            </div>
          </div>

        {/* Our Services */}
          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="box">
                <h5 className="card-title">Our Services</h5>
                <p className="card-text">
                  From freight forwarding to express delivery, we offer tailored logistics solutions.
                </p>
              </div>
            </div>
          </div>
        {/* Pricing */}
          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="box">
                <h5 className="card-title">Pricing</h5>
                <p className="card-text">
                  Get transparent and competitive pricing for all your shipping needs.
                </p>
              </div>
            </div>
          </div>

        {/* About Us */}
          <div className="col-md-3">
            <div className="card h-100 text-center shadow-sm">
              <div className="box">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Learn more about our history, values, and commitment to reliable global shipping.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Body;