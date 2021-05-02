import React from 'react';

const Contact = () => {
    return (
        <section className="container" id="contact">
            <div className="section-title">
                <h2>Contact</h2>
            </div>
            <div className="row text-center">
            <div class="col-lg-12 mt-5 mt-lg-0">

                <form action="" method="post" role="form">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="text-center"><button type="submit" class="btn btn-info">Send Message</button></div>
                </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;