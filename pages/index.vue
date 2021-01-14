<template>
  <div class="vh-100-ns flex flex-column bg-dark-gray assistant relative">
    <MenuHeader class="z-10" :menu-fixed="true" />
    <!-- Slider div container -->
    <div ref="container" class="h-100 w-100">
      <!-- Additional required wrapper -->
      <div>
        <!-- Slides -->
        <div
          class="h-100 min-vh-100 bg-dark-gray flex justify-center items-center relative"
        >
          <div class="flex items-center absolute w-100 h-100 white items-end">
            <div class="absolute w-100 h-100 z--1 op o-50">
              <video
                class="db w-100"
                autoplay
                loop
                muted
                playsinline
                poster="gifs/open.jpg"
                defaultMuted
              >
                <source src="gifs/open.mp4" type="video/mp4" />
                <source src="gifs/open.webp" type="video/webp" />
              </video>
            </div>
            <article class="measure ml6-ns ph3 relative center tc">
              <h1 class="day-sans f1-ns f3 lh-title">
                What a Trump-Free White House Sounds Like
              </h1>
              <h3 class="roboto-mono fw3 f3-ns f4 lh-title">10 Songs</h3>
              <h4 class="assistant normal">By Zoe Harwood</h4>
              <h4 class="assistant normal">12.02.20</h4>
            </article>
            <small class="absolute left-1 bottom-1 o-20"
              >Photo by Youtube / Matthias Niessner</small
            >
          </div>
        </div>
        <div
          class="h-100 min-vh-100 bg-dark-gray flex justify-center items-center relative"
        >
          <article class="ph3 white flex-ns flex-wrap justify-center h-auto">
            <div
              class="measure lh-copy center"
              v-html="articleData.intro.text"
            ></div>
            <div class="center flex items-center h-auto measure ph3-ns">
              <div>
                <video
                  class="db w-100"
                  autoplay
                  loop
                  muted
                  playsinline
                  :poster="`${articleData.intro.image}.jpg`"
                >
                  <source
                    :src="`${articleData.intro.image}.webp`"
                    type="video/webp"
                  />
                  <source
                    :src="`${articleData.intro.image}.mp4`"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </article>
        </div>
        <template v-for="(scenario, i) in scenarios">
          <scenario-question
            ref="scenarios"
            :key="`scenario-prompt-${i}`"
            :scenario="scenario"
            :next="(i + 1) % scenarios.length"
            @next-page="nextPage"
          ></scenario-question>
        </template>
        <div
          class="h-100 min-vh-100 bg-dark-gray flex justify-center items-center relative"
        >
          <article class="measure lh-copy ph3 white">
            <div v-html="articleData.conclusion.text"></div>
            <ShareContainer
              :title="postData.title"
              :description="postData.description"
              :tweet-message="postData.tweetMessage"
              :vertical-mode="false"
            />
          </article>
        </div>
        <div
          class="h-100 min-vh-100 bg-dark-gray flex justify-center items-center relative"
        >
          <article class="white measure ml6-ns ph3 relative center lh-copy">
            <h3 class="roboto-mono fw6 f3-ns f4 lh-title">CREDITS</h3>
            <div v-html="articleData.credits.text"></div>

            <template v-for="credit in articleData.credits.list">
              <dl :key="credit.ttitle" class="lh-title mv2">
                <dt class="dib b green">{{ credit.title }}:</dt>
                <dd class="di ml0">{{ credit.names }}</dd>
              </dl>
            </template>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonUtils from '../mixins/CommonUtils'
import POSTCONFIG from '../post.config'
import MenuHeader from '~/components/Header/MenuHeader'
import ShareContainer from '~/components/Custom/ShareContainer'
import ScenarioQuestion from '~/components/Custom/ScenarioQuestion'

import ArticleData from '~/data/data.json'

export default {
  components: {
    MenuHeader,
    ShareContainer,
    ScenarioQuestion,
  },
  mixins: [CommonUtils],
  asyncData(ctx) {
    return {
      postData: POSTCONFIG,
      articleData: ArticleData.content[0],
      scenarios: ArticleData.content[0].scenarios,
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import '~@/assets/css/styles';

.disable-mouse {
  pointer-events: none;
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
button {
  font-family: $assistant;
}
</style>
