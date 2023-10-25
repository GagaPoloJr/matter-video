<template>
  <div class="counter-box" >
    <b-img :src="countImg" :img-alt="altText"></b-img>
    <div class="count-content">
      <countTo class="counter" :startVal='startVal' :endVal='endval' :duration='3000' :separator='separator' />
        {{amountText}}
      </div>
    <h5 class="count-text">{{countText}}</h5>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: 'CountItem',
  components: {
    countTo
  },
  props: {
    countImg: String,
    altText: String,
    endval: Number,
    separator: String,
    amountText: String,
    countText: String
  },
  data(){
    return{
      startVal: 0,
      endVal: 500000
    }
  }
}
</script>
