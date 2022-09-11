import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="form-box">
        <h3>Send Message</h3>
      <div className="inner-boundaries">
        <form data-netlify="true">
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="name">Email</label>
          <input type="text" />
          <label htmlFor="subject">Subject</label>
          <input className="subject" type="text" />
          <label htmlFor="message">Message</label>
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
          <a href="https://www.facebook.com/pages/category/Record-Label/Spooky-Tree-Records-112834568739466/"> <FaFacebook/>
          </a>
        </p>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Contact