<template>

    <v-content>

        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>

                <v-card>
                    <v-toolbar prominent extended>
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-toolbar-title>Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-card-media src="https://vuetifyjs.com/static/doc-images/lists/ali.png" height="300px">
                        <v-layout column class="media">
                            <v-card-title>
                                <v-btn dark icon>
                                    <v-icon>chevron_left</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn dark icon class="mr-3">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn dark icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="white--text pl-5 pt-5">
                                <div class="display-1 pl-5 pt-5">Ali Conners</div>
                            </v-card-title>
                        </v-layout>
                    </v-card-media>

                    <v-list two-line>
                        <div v-for="(item, index) in items">
                            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                            <v-list-tile avatar v-else :key="item.title" @click="">
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </div>



                    </v-list>

                    <v-footer height="auto">
                        <v-card
                                flat
                                tile
                                class="indigo lighten-1 white--text text-xs-center">
                            <v-card-text>
                                <v-btn
                                        v-for="icon in icons"
                                        :key="icon"
                                        icon
                                        class="mx-3 white--text">
                                    <v-icon size="24px">{{ icon }}</v-icon>
                                </v-btn>
                            </v-card-text>
                            <v-card-text class="white--text pt-0">Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>
                            <v-card-text class="white--text">&copy;2018 — <strong>Vuetify</strong></v-card-text>
                        </v-card>
                    </v-footer>
                </v-card>


            </v-flex>
        </v-layout>
    </v-content>


</template>

<script>
export default {
  data () {
    return {
      items: [
        { header: 'Today' }
      ],
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      apiKey:'bd3d36011795444f94b2056070e92f4a'
    }
  },
  async  mounted() {

        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`)
        const json = await res.json()

        for (let article of json.articles) {
          if (article.urlToImage && article.urlToImage.indexOf('https://') > -1) {
            this.items.push({
              avatar: article.urlToImage,
              title: article.title,
              subtitle: ``
            });
          }
          this.items.push({ divider: true, inset: true });
        }
    }
}
</script>

<style>
    .media {
        height: 100%;
        margin: 0;
    }
</style>