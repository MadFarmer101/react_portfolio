import React from "react"
import NetlifyForm from 'react-netlify-form'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }


    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, company, phone } = this.state;
      return (
        <form id="form" onSubmit={this.handleSubmit}>
          <p>
            <label>
            <i class="address book icon"></i> <input type="text" name="name" placeholder="Your name..." value={name} onChange={this.handleChange} required/>
            </label>
          </p>
          <p>
            <label>
            <i class="building icon"></i> <input type="text" name="company" placeholder="Your company..." value={company} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
            <i class="envelope icon"></i> <input type="email" name="email" placeholder="Your email..." value={email} onChange={this.handleChange} required/>
            </label>
          </p>
          <p>
            <label>
            <i class="phone icon"></i><input type="text" name="phone" placeholder="Your phone..." value={phone} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
            <i class="bullhorn icon"></i><textarea name="message">
                Congratulations! You're Hired! ;)
            </textarea>
            </label>
          </p>
          <p>
            <button class="ui animated button" type="submit" tabindex="0">
              <div class="visible content">Send</div>
              <div class="hidden content">
                <i class="paper plane icon"></i>
              </div>
            </button>
          </p>
        </form>
      );
    }
  }

  export default Contact;