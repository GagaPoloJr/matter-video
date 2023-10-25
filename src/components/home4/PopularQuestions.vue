<template>
    <!-- FAQ Area Start -->
    <section id="faq" class="faq-area">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <div class="section-title-area text-center">
                          <SectionHeading2 :title="title" :titleInner="titleInner" /> 
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- FAQ List Left Side Start -->
                <div class="col-12 col-sm-12">
                    <div class="faq-wrapper">
                        <div class="faq-all-box">
                            <div class="panel-group" id="accordion6" role="tablist">

                                <div class="col-12 col-sm-12 col-md-6">

                                    <!-- Single Features Box-->
                                    <b-card no-body class="panel">
                                        <b-card-header header-tag="header" class="panel-heading" role="tab">
                                            <h4 class="panel-title">
                                                <a block v-b-toggle.accordion-1>Does this app contain “In-app Purchase”?</a>
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
                                                <a block v-b-toggle.accordion-2>What if I am on vacation during the challenge?</a>
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

                                </div>
                                <div class="col-12 col-sm-12 col-md-6">

                                    <!-- Single Features Box-->
                                    <b-card no-body class="panel">
                                        <b-card-header header-tag="header" class="panel-heading" role="tab">
                                            <h4 class="panel-title">
                                                <a block v-b-toggle.accordion-3>How do I edit/delete a workout?</a>
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

                                    <!-- Single Features Box-->
                                    <b-card no-body class="panel">
                                        <b-card-header header-tag="header" class="panel-heading" role="tab">
                                            <h4 class="panel-title">
                                                <a block v-b-toggle.accordion-4>What if I don’t want my workouts highlighted on the social feed?</a>
                                            </h4>
                                        </b-card-header>
                                        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
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
                <div class="col-12 text-center">
                    <a href="sample-faq.pdf" target="_blank" class="theme-button"><i class="far fa-file-pdf"></i> Download More FAQ in PDF</a>
                </div>
                <!-- FAQ List Left Side End -->
            </div>
        </div>
    </section>
    <!-- FAQ Area End -->
</template>

<script>

import SectionHeading2 from '@/components/default/SectionHeading2'

export default {
  name: 'PopularQuestions',

  components: {
    SectionHeading2
  },

  data() {
    return {
      title: 'Questions & Answers',
      titleInner: 'Popular',
      };
    },
}
</script>

<style scoped>
.faq-area .card-header.panel-heading {
	padding: 0;
}
.faq-area #accordion6 .panel-title a {
	min-height: auto;
}
.faq-area #accordion6 .card-body {
    border-bottom: 1px solid transparent;
	padding-left: 0;
}
.faq-area .card-header {
	border-bottom: 1px solid transparent;
}
</style>