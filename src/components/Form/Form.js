import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form style={{ height: "90vh" }}
        onSubmit={this.submitForm}
        action="https://formspree.io/f/meqpkola"
        method="POST"
      >
        <div style={{ boxShadow: "3px 3px 5px 5px #17A2B8", width: "450px", margin: "auto", padding: "50px", marginTop: "100px", borderRadius: "10px" }}>
          <input style={{ height: "43px", width: "350px", borderRadius: "10px", marginBottom: "7px", padding: "15px", fontSize: "20px" }} placeholder="Your Name" type="name" name="name" /> <br />
          <input style={{ height: "43px", width: "350px", borderRadius: "10px", marginBottom: "7px", padding: "15px", fontSize: "20px" }} placeholder="Your Email" type="email" name="email" /> <br />
          <input style={{ height: "70px", width: "350px", borderRadius: "10px", marginBottom: "7px", padding: "15px", fontSize: "20px" }} placeholder="Your Message" type="text" name="message" /> <br />
          {status === "SUCCESS" ? <p style={{ color: "green", fontSize: "20px", textAlign: "center" }}>Thanks.Your message is delivered successfully</p> : <button class="bg-info" style={{ height: "40px", color: "white", width: "350px", borderRadius: "10px", marginBottom: "7px", padding: "3px" }}> <b>Submit</b> </button>}
          {status === "ERROR" && <p style={{ color: "red", fontSize: "20px", textAlign: "center" }}>Ooops! There was an error. Please complete the form first.</p>}
        </div>
        <div style={{ width: "500px", margin: "auto", paddingLeft: "50px", paddingTop: "15px", marginTop: "20px", borderRadius: "30px" }}>
          <a target="_blank" href="https://github.com/NusratJahanNisha">  <button style={{ height: "40px", width: "400px", borderRadius: "10px", marginBottom: "7px", padding: "3px" }} type="button" class="btn btn-info ml-2"> <b> Github</b></button></a> <br />
          <a target="_blank" href="https://www.linkedin.com/in/nusrat-jahan-nisha-3788b61ba/"> <button type="button" style={{ height: "40px", width: "400px", borderRadius: "10px", marginBottom: "7px", padding: "3px" }} class="btn btn-outline-info ml-2"> <b> LinkedIn</b> </button></a>
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}