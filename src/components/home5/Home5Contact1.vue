<template>
  <div>
    <!-- Contact Area Start -->
    <section id="contact" class="contact-area">
        <!-- Google map Start-->
        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663571253!2d89.56355961535166!3d22.813715829825558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1556602760023!5m2!1sen!2sbd" style="border:0" allowfullscreen></iframe>
        </div>
        <!-- Google map End-->

        <!-- Contact Form Start-->
        <div class="contact-form-area">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-8">
                        <!--contact-left-text-->
                        <div class="contact-form-wrapper">
                            <form id="contact-form" method="post">
                                <div class="form-group">
                                    <label for="name">Full Name</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <!--form-group-->
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <!--form-group-->
                                <div class="message-area form-group">
                                    <label for="message">Write Message</label>
                                    <textarea class="form-control" id="message" rows="3" required></textarea>
                                </div>
                                <!--message-area-->
                                <div class="d-flex message-button-wrap">
                                    <div class="subm-btn theme-button">
                                        <input type="submit" class="btn contact-btn" value="Send Message">
                                    </div>
                                    <div class="sending-gif" style="display: none">
                                        <b-img :src="require('../../assets/img/loading.gif')" img-alt="sending"></b-img>
                                    </div>
                                </div>
                                <!--d-flex-->
                            </form><!--form-->
                            <div class="success-msg alert alert-success" style="display: none">
                                <strong>Success!</strong> Email Send Successfully.
                            </div>

                        </div>
                        <!--contact-form-->
                    </div>
                    <!--col-md-8-->

                    <div class="col-12 col-sm-12 col-md-4">
                        <div class="section-title-area"><h2 class="section-heading">Get in touch</h2></div>
                        <div class="contact-address">
                            <ul>
                                <li><span><i class="flaticon-home"></i></span>121 King Street, Melbourne Victoria 3000 Australia</li>
                                <li><span><i class="flaticon-e-mail-envelope"></i></span>contact@mail.com</li>
                                <li><span><i class="flaticon-call"></i></span>+123 (214) 457 888</li>
                            </ul>
                        </div>
                        <!--contact-address-->
                    </div>
                    <!--col-md-4-->
                </div>
                <!--row-->
            </div>
            <!--container-->
        </div>
        <!-- Contact Form End-->
    </section>
    <!-- Contact Area End -->
  </div>
</template>

<script>
export default {
  name: 'HomeContact1',
}
</script>