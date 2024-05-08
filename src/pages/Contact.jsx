function Contact() {
  return (
    <div className="contactContainer">
      <div className="container">
        <form>
          <div className="row formRow">
            <div className="col-6">
              <input
                type="text"
                name="name"
                className="form-control formInput"
                placeholder="Name"
              ></input>
            </div>
            <div className="col-6">
              <input
                type="email"
                name="email"
                className="form-control formInput"
                placeholder="Email address"
              ></input>
            </div>
          </div>

          <div className="row formRow">
            <div className="col">
              <input
                type="text"
                name="subject"
                className="form-control formInput"
                placeholder="Subject"
              ></input>
            </div>
          </div>

          <div className="row formRow">
            <div className="col">
              <textarea
                rows={3}
                name="message"
                className="form-control formInput"
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
