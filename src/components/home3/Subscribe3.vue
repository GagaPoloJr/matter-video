<template>
  <div>
    <!-- Subscribe Area Start -->
    <section class="subscribe-area home-3-primary-dark-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12">
            <div class="section-title-area text-center">
              <SectionHeading2 :title="title" :titleInner="titleInner" />
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 subscribe-form-part">
            <div class="subscribe-box">
              <b-form inline @submit.prevent="makeToast('success')">
                <b-input
                  type="email"
                  id="newsletter_email"
                  required
                  placeholder="Enter your email"
                ></b-input>

                <b-button type="submit" variant="transparent theme-button">Subscribe</b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Subscribe Area End -->
  </div>
</template>

<script>
import SectionHeading2 from '@/components/default/SectionHeading2'

export default {
  name: 'Subscribe3',
  components: {
    SectionHeading2,
  },

  data() {
    return {
      title: 'Newsletter',
      titleInner: 'Subscribe',
    };
  },

  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Subscribe done.', {
        title: `Congratulations!`,
        variant: variant,
        solid: true
      })
    }
  }

}
</script>