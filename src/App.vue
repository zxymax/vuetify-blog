<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app

    >
      <v-layout row>
        <v-flex>


          <v-card>
 <v-card-media
          src="../static/images/face.gif"
          height="200px"
        >
        </v-card-media>

            <v-card-actions>
              <v-btn>Jorna Jan</v-btn>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="show">
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">当前位置</v-subheader>
        <v-layout>
          <v-flex>
            <v-card>
              <v-container

              >
                <v-layout>
                  <v-flex>
                    <v-card v-if="showCard.src">
                      <v-card-media
                        :src="showCard.src"
                        height="150px">
                      </v-card-media>
                    </v-card>
                    <v-card v-else>
                      <default-video ></default-video>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
    <canvas class="background"></canvas>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">{{title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar>
          <img src="../static/images/zr_1.jpg"
            alt="John">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Particles from 'particlesjs'
  import DefaultVideo from '@/components/DefaultVideo.vue'

  export default {
    computed: {
      ...mapGetters(['showCard'])
    },
    components: {
      DefaultVideo
    },
    data: () => ({
      title: '张小鱼部落',
      drawer: true,
      show: false,
      menuItems: [
          {
            action: 'home',
            title: 'Home',
            link: '/home'
          },
          {
            action: 'insert_drive_file',
            title: '面试题',
            items: [
              { title: '阿里前端面试题', link: '/aliInterviewQues' }
            ]
          },
          {
            action: 'theaters',
            title: 'Javascript',
            items: [
              { title: 'AboutThis', link: '/aboutThis' },
              { title: 'Vuex', link: '/vuex' }
            ]
          },
          {
            action: 'move_to_inbox',
            title: 'Youtube',
            items: [
              { title: 'MaxVuetifyjs', link: '/MaxVuetifyjs' }
            ]
          }
        ]
    }),
    methods: {

    },
    props: {
      source: String
    },
    mounted() {
      Particles.init({
        selector: '.background'
      });

    },
  }
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}

.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>

