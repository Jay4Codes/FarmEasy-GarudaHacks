import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({email: "", password: "", phone : ""})
  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  const signup = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/buyer/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name ,email: credentials.email, password: credentials.password, phone : credentials.phone, address: credentials.address})
    })
      const json = await response.json()
      if(json.success){
        localStorage.setItem('token', json.authtoken)
        alert('You have successfully registered')
        navigate('/loginbuyer')
      }
  }
  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <h2 className="text-center">Create Your Buyer's Account</h2>
                <form className="text-left clearfix">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={credentials.address}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      value={credentials.phone}
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-main text-center" onClick={signup}>
                      Sign In
                    </button>
                  </div>
                </form>
                <p className="mt-20">
                  Already hava an account ?<Link to="/login"> Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
