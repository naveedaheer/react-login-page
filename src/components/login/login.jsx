import React from 'react';
import '../../css/formBuilder.css';
import '../../css/main1.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Must initialize state first
    this.state = { showModal: false };
  }

  // Updates the state variable to display the modal
  showModal = () => {
    this.setState({ showModal: true });
  };

  // Updates the state variable to hide the modal
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <div className="page-wrapper p-b-50" style={{ marginTop: '4%' }}>
          <div className="wrapper wrapper--w790" style={{ maxWidth: '35%' }}>
            <div className="card card-5">
              <div className="card-body">
                <form method="POST">
                  <div className="form-row" style={{ marginBottom: 0 }}>
                    <h2 style={{ color: '#222' }}>Venture Creations</h2>
                    <h4 style={{ color: '#222', marginBottom: '30px' }}>RIT Technology Business Incubator</h4>
                    <div className="form-row row row-space" style={{ width: '100%' }}>
                      <div className="col-6" style={{ width: '100%' }}>
                        <div className="input-group-desc">
                          <input className="input--style-5" type="text" name="username" placeholder="Email" />
                        </div>
                      </div>
                    </div>

                    <div className="form-row row row-space" style={{ width: '100%' }}>
                      <div className="col-6" style={{ width: '100%' }}>
                        <div className="input-group-desc">
                          <input className="input--style-5" type="text" name="password" placeholder="Password" />
                        </div>
                      </div>
                    </div>

                    <div className="form-row row row-space" style={{ width: '100%' }}>
                      <div className="col-6" style={{ width: '100%' }}>
                        <div className="input-group-desc">
                          <input type="checkbox" name="remember_me" style={{ width: '25px' }} /> Remember me
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a onClick={this.showModal} style={{ marginBottom: '10px' }}>Forget Password?</a> <br />
                    <button className="btn btn--radius-2 btn--blue submit_btn" type="submit">Login</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>

        {/* The Modal */}
        <div className={"modal " + (this.state.showModal ? 'display-block' : 'display-none')}>

          <div className="modal-content">
            <span className="close" onClick={this.hideModal}>&times;</span>
            <form method="POST" style={{ padding: '5%' }}>
              <div className="form-row" style={{ marginBottom: '30px' }}>
                <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>Reset Password</h2>
                <div className="row row-space" style={{ width: '100%' }}>
                  <div className="col-1" style={{ width: '100%' }}>
                    <div className="input-group-desc">
                      <input className="input--style-5" type="text" name="password" placeholder="Enter your email" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn--radius-2 btn--green submit_btn" type="submit">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;