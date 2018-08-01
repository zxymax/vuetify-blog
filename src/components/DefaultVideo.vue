
<template>

    <v-layout>
      <v-flex>
        <v-card dark color="secondary">
          <vue-plyr>
            <video>
              <source src="http://pcqcafp20.bkt.clouddn.com/StarSizeComparison2.mp4" type="video/mp4">
              <source src="http://pcqcafp20.bkt.clouddn.com/UniverseSizeComparison3D.mp4" type="video/mp4">
            </video>
          </vue-plyr>

        </v-card>
      </v-flex>
    </v-layout>

</template>
<script>
  // custom skin css
  import '../../node_modules/vue-video-player/src/custom-theme.css'

  import 'vue-plyr'
  import 'vue-plyr/dist/vue-plyr.css'
  export default {
    data() {
      return {
        src: 'http://pcqcafp20.bkt.clouddn.com/StarSizeComparison2.mp4'
      }

    }
  }

</script>
<style scoped>

</style>


