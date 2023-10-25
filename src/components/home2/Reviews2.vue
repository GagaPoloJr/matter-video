<template>
  <!-- Reviews Area Start -->
  <section id="reviews" class="reviews-area">
      <div class="container-fluid padding-zero">

          <div class="section-title-area text-center">
              <SectionHeading :title="title" />
          </div>

          <!-- Row Start-->
          <div class="row">
              <div class="col-lg-12">
                  <!-- Single Review Slider Item Start-->
                  <div class="comment-slide-1 review-from-client-slider position-relative">
                      <nav>
                          <div class="nav nav-tabs nav-fill" id="nav-tab1" role="tablist">
                              <a class="nav-item nav-link active wow zoomIn" id="1" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/6.png')" img-alt="Rath"></b-img>
                              </a>
                              <a class="nav-item nav-link wow zoomIn" id="2" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/5.png')" img-alt="Rath"></b-img>
                              </a>
                              <a class="nav-item nav-link wow zoomIn" id="3" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/4.png')" img-alt="Rath"></b-img>
                              </a>
                              <a class="nav-item nav-link wow zoomIn" id="4" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/3.png')" img-alt="Rath"></b-img>
                              </a>
                              <a class="nav-item nav-link wow zoomIn" id="5" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/2.png')" img-alt="Rath"></b-img>
                              </a>
                              <a class="nav-item nav-link wow zoomIn" id="6" data-wow-duration="1.2s" data-wow-delay=".5s">
                                  <b-img :src="require('../../assets/img/home-2-img/review-img/1.png')" img-alt="Rath"></b-img>
                              </a>
                          </div>
                      </nav>
                      <div class="tab-content home-2-review-slider" id="nav-tabContent1">

                        <carousel :margin="15" :loop="true" :autoplay="true" :autoplaySpeed="false" :dots="false" :nav="false" :items="5" :responsive="{0:{items:1,nav:false},480:{items:1,nav:false},600:{items:1,nav:false},900:{items:1,nav:false},1200:{items:1,nav:false}}">
                            <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/6.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                            <h5>Davi jones</h5>
                                            <h6>Owner, The Black Pearl</h6>
                                      </div>
                                  </div>
                                  <P>A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them.</P>
                              </div>
                          </div>
                          <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/5.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                            <h5>Michal Doe</h5>
                                            <h6>CEO, The White Pearl</h6>
                                      </div>
                                  </div><P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius odit, iusto eligendi at inventore explicabo temporibus officiis veniam dignissimos! temporibus officiis veniam dign!</P>
                              </div>
                            </div>
                          <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/4.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                            <h5>John Doe</h5>
                                            <h6>Founder, The Black Pearl</h6>
                                      </div>
                                  </div><P>A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along.</P>
                              </div> 
                            </div>
                          <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/3.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                          <h5>Davi jones</h5>
                                          <h6>Owner, The Black Pearl</h6>
                                      </div>
                                  </div><P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusamus in nobis sunt quia qui odit cum dolorem officiis ducimus cum dolorem officiis ducimus cum dolorem officiis ducimus.</P>
                              </div>
                            </div>
                          <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/2.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                          <h5>Suraiya Aysha</h5>
                                          <h6>CEO, AyshaTech</h6>
                                      </div>
                                  </div>
                                  <P>Sapiente ratione itaque rerum esse, alias minima rem autem, perferendis voluptatem repudiandae quia quos tempore ipsum quidem voluptatem repudiandae quia quos tempore ipsum quidem.</P>
                              </div>
                          </div>
                          <div class="tab-pane">
                              <div class="review-comment-box">
                                  <div class="review-img-box">
                                      <b-img :src="require('../../assets/img/home-2-img/review-img/1.png')" img-alt="Rath"></b-img>
                                      <div class="review-content">
                                          <h5>Abraham Linkon</h5>
                                          <h6>Founder, TechisTech</h6>
                                      </div>
                                  </div>
                                  <P>Inventore, eius veniam libero rerum beatae iure ex, facilis modi? Tempora libero pariatur debitis nullal fugiat autem explicabo doloremque culpa explicabo doloremque culpa.</P>
                              </div>
                          </div>
                        </carousel>

                      </div>
                  </div>
                  <!-- Single Review Slider Item End-->
              </div>
          </div>
          <!-- Row End-->
      </div>
  </section>
<!-- Reviews Area End -->
</template>

<script>
import SectionHeading from '@/components/default/SectionHeading'

// Carousel Add
import carousel from 'vue-owl-carousel'

export default {
  name: 'Reviews2',
  components: {
    SectionHeading,
    carousel
  },
  data(){
    return{
        title: 'What Our Clients Say'
    }
  }
}
</script>
<style scoped>
/* Home2 review slider css */
.review-from-client-slider .tab-content {
    min-height: 360px;
    height: auto;
	width: 600px;
	margin: 0 auto;
    min-width: 200px;
    display: flex;
	flex-direction: column;
	justify-content: center;
}
.review-comment-box {
	width: 100%;
}
.home-2-review-slider .owl-carousel .owl-item img {
	width: 70px;
	height: auto;
}

</style>