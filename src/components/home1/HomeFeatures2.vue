<template>
  <div class="">
    <!-- Features 2 Area Start -->
    <section id="features2" class="features-1-area features-2-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="features-1-wrapper">
                        <div class="features-1-mobile-mockup">
                            <b-img :src="require('../../assets/img/features-2-mockup-mobile.png')" img-alt="Features2"></b-img>
                        </div>

                        <div class="features-1-all-box features-2-all-box">

                            <div class="panel-group" id="accordion6" role="tablist">

                                <!-- Single Features Box-->
                                <b-card no-body class="panel">
                                    <b-card-header header-tag="header" class="panel-heading" role="tab">
                                        <h4 class="panel-title">
                                            <a block v-b-toggle.accordion-1><i class="flaticon-map"></i> Google Map Integrated</a>
                                        </h4>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis. Nullam tellus turpis, mo lestie ac urna quis.
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <!-- Single Features Box-->

                                <!-- Single Features Box-->
                                <b-card no-body class="panel">
                                    <b-card-header header-tag="header" class="panel-heading" role="tab">
                                        <h4 class="panel-title">
                                            <a block v-b-toggle.accordion-2><i class="flaticon-social-media"></i> Social Apps Connected</a>
                                        </h4>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis. Nullam tellus turpis, mo lestie ac urna quis.
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <!-- Single Features Box-->

                                <!-- Single Features Box-->
                                <b-card no-body class="panel">
                                    <b-card-header header-tag="header" class="panel-heading" role="tab">
                                        <h4 class="panel-title">
                                            <a block v-b-toggle.accordion-3><i class="flaticon-shield"></i> Advanced Data Encryption</a>
                                        </h4>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis. Nullam tellus turpis, mo lestie ac urna quis.
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <!-- Single Features Box-->
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Features 2 Area End -->
  </div>
</template>

<script>
export default {
  name: 'HomeFeatures2',
}
</script>