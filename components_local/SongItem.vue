<template>
  <div class="flex">
    <div class="w-30">
      <a class="pointer db" @click.prevent="playSong">
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
    </div>
    <div class="w-70">
      <h2 class="mt0">{{ song.song_name }}</h2>
      <h3 class="mt0">{{ song.artist }}</h3>
      <div v-html="song.text"></div>
    </div>
  </div>
</template>

<script>
import PlayPauseIcon from './PlayPauseIcon'

export default {
  components: {
    PlayPauseIcon,
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
@import '~@/css/vars';
@import '~@/css/mixins';

.playpause {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
