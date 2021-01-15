<template>
  <div class="grid-container pv3">
    <a class="pointer db grid-left grow" @click.prevent="playSong">
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
    <div class="pl3 grid-title relative flex">
      <div class="ml-auto order-2 flex items-start">
        <div
          class="flex items-center"
          :style="{
            visibility: hasLiked && !likesLoading ? 'visible' : 'hidden',
          }"
        >
          <span class="b ph1">{{ likesCount }} </span>
          <span class="b">{{ likesCount > 1 ? 'Likes' : 'Like' }}</span>
        </div>
        <a
          :disabled="!hasLiked"
          class="pointer grid-left grow-large"
          @click.prevent="likeSong"
        >
          <HeartIcon :has-liked="hasLiked" class="ph1" />
        </a>
      </div>
      <div class="self-end">
        <h2 class="di fw8 lh-title nowrap-ns">{{ song.song_name }}</h2>
        <h2 class="di normal lh-title nowrap-ns">{{ song.artist }}</h2>
        <h4 class="dn db-ns normal lh-title mv0">
          Selected by {{ song.selected_by }}
        </h4>
      </div>
    </div>
    <div class="pl3-ns lh-copy grid-text measure-wide" v-html="song.text"></div>
  </div>
</template>

<script>
import PlayPauseIcon from './PlayPauseIcon'
import HeartIcon from './HeartIcon'
import { POLLSERVER, POLLID } from '~/post.config'

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
    return {
      hasLiked: false,
      likesCount: '00',
      likesLoading: false,
    }
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
    async likeSong() {
      if (this.hasLiked) return
      this.hasLiked = true
      this.likesLoading = true

      const res = await fetch(
        `${POLLSERVER}/vote_poll/${POLLID}/${this.song.like_id}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      ).then((res) => res.json())
      const like = res.poll.options.find((e) => e.id === this.song.like_id)
      this.likesCount = like.count
      this.likesLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables';

.grid-container {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-template-rows: auto;
  .grid-left {
    grid-row: 1/3;
  }
  .grid-text {
    grid-column: 1 /3;
    grid-row: 3;
  }
  .grid-title {
    grid-row: 1/3;
  }
  @media #{$breakpoint-not-small} {
    grid-template-columns: minmax(150px, 1fr) 3fr;
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
