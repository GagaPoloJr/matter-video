<template>
  <div class="">
    <!-- Video Area Start -->
    <section id="video-area" class="video-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="video-wrapper">
                        <b-img :src="posterImg" :img-alt="altText"></b-img>
                        <a class="venobox play-button" data-vbtype="video" data-autoplay="true" href="http://youtu.be/ik7SkKD3lcI" target="_blank"><i class="fas fa-play"></i></a>
                    </div>
                    <p>{{ videoSubTitle }}</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Video Area End -->
  </div>
</template>

<script>
export default {
  name: 'Video1',
  data(){
    return {
      posterImg: require('../../../assets/img/video-area-video-poster.jpg'),
      altText: 'Video',
      videoSubTitle: 'Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.'
    };
  }
}
</script>