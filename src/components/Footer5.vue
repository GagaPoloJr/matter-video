<template>
  <div>
    <!-- Footer Start -->
    <footer class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="copyright-wrapper d-flex justify-content-between align-items-center">
                        <div class="copyright-text">
                            <p>© 2020 – <a href="https://andit.co/" target="_blank">AndIT</a> | All Rights Reserved</p>
                        </div><!--copyright-text-->
                        <!--Footer Logo-->
                        <div class="footer-logo">
                            <b-img :src="require('../assets/img/home-5-img/home-5-footer-logo.png')" img-alt="RATH"></b-img>
                        </div>

                        <div class="terms-policy">
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <!--terms-policy-->
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>

export default {
  name: 'Footer5',
}
</script>