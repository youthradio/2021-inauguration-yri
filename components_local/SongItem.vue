<template>
  <div class="grid-container pv3">
    <a class="pointer db grid-left" @click.prevent="playSong">
      <div class="relative">
        <img
          class="db w-100"
          :srcset="song.track.album_srcset"
          :src="song.track.album_src"
          loading="lazy"
        />
        <PlayPauseIcon :is-playing="isPlaying" class="playpause" />
      </div>
    </a>
    <div class="pl3 grid-title">
      <HeartIcon class="fr" />
      <h2 class="di fw8 lh-title">{{ song.song_name }}</h2>
      <h2 class="di normal lh-title">{{ song.artist }}</h2>
    </div>
    <div class="pl3-ns lh-copy grid-text measure-wide" v-html="song.text"></div>
  </div>
</template>

<script>
import PlayPauseIcon from './PlayPauseIcon'
import HeartIcon from './HeartIcon'

export default {
  components: {
    PlayPauseIcon,
    HeartIcon,
  },
  mixins: [],
  props: {
    song: {
      type: Object,
      require: true,
      default: null,
    },
    isPlaying: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    playSong() {
      if (this.song.track.preview_url) {
        this.$emit('play-song', {
          isPlaying: this.isPlaying,
          url: this.song.track.preview_url,
          id: this.song.id,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables';

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  .grid-left {
    grid-row: 1/3;
  }
  .grid-text {
    grid-column: 1 /3;
    grid-row: 3;
  }
  .grid-title {
    grid-row: 2;
  }
  @media #{$breakpoint-not-small} {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    .grid-text {
      grid-column: 2;
      grid-row: 2;
    }
    .grid-title {
      grid-row: 1;
    }
  }
}
.playpause {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
