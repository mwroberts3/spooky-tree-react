import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="form-box">
        <h3>Send Message</h3>
      <div className="inner-boundaries">
        <form data-netlify="true">
          <label for="name">Name</label>
          <input type="text" />
          <label for="name">Email</label>
          <input type="text" />
          <label for="subject">Subject</label>
          <input className="subject" type="text" />
          <label for="message">Message</label>
          <textarea
            name="message"
            id="emailMessage"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" name="" id="" />
        </form>
      <div className="direct-contact-info">
        <h4>Direct Contact Info</h4>
        <p>
          <a href="mailto:dstukuls@hotmail.com"
            ><i className="fas fa-envelope"></i> dstukuls@hotmail.com</a>
        </p>
        <p><i className="fas fa-phone"></i> (857) 236 - 4578</p>
        <p>
          <a href="https://www.facebook.com/pages/category/Record-Label/Spooky-Tree-Records-112834568739466/">
                <i className="fab fa-facebook-square"></i> facebook
          </a>
        </p>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Contact