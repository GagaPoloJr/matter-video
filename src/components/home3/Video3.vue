<template>
  <div>
    <!-- Video Area Start -->
    <section id="video-area" class="video-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="video-wrapper">
              <b-img :src="posterImg" :img-alt="altText"></b-img>
              <a class="venobox play-button" data-vbtype="video" data-autoplay="true" href="http://youtu.be/ik7SkKD3lcI" target="_blank"><i class="fas fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Video Area End -->
  </div>
</template>

<script>
export default {
  name: 'Video3',
  data(){
    return {
      posterImg: require('../../assets/img/home-3-img/video-poster.jpg'),
      altText: 'Video'
    };
  }

}
</script>