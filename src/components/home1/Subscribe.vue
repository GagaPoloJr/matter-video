<template>
  <div class="">
    <!-- Get Free Download Area Start -->
    <section class="subscribe-area bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-7">
                    <div class="section-title-area">
                        <SectionSubHeading subTitle="Subscribe to our Newsletter" />
                        <SectionHeading title="Get the latest news and offers" />
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-5 subscribe-form-part">
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
    <!-- Get Free Download Area End -->
  </div>
</template>

<script>
import SectionHeading from '@/components/default/SectionHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'

export default {
  name: 'Subscribe',
  components: {
    SectionHeading,
    SectionSubHeading
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
