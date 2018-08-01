<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>


            <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in getCards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
              @click="cards(card)"
              :class="card.isClass ? 'animated  flash delay-2s':''"
            >
              <v-card style="cursor:pointer;" class="card"
                >
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>


              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getCards'])
    },
    data: () => ({


    }),
    methods: {
      ...mapActions(['cards'])
      // goModuleLink(card) {
      //   let src = card.src
      //   let func = ()=> {

      //     if(timer == null) {
      //      console.log(1)
      //      timer = 1
      //     }else {
      //      console.log(0)
      //      timer = null
      //     }
      //   }
      //   function abc() {
      //     console.log(11111)
      //   }
      //   let timer = setInterval(abc(), 100)
      //   setTimeout(()=>{
      //     clearInterval(timer)
      //   }, 2000)
      //   if(card.isClass == false) {
      //     card.isClass = true
      //   }


      // }

    }
  }
</script>
<style scoped>
/* .card{
  opacity: .5;
}
.card:hover{
  opacity: 1;
} */
/* .card{
  display: none;
} */
</style>

