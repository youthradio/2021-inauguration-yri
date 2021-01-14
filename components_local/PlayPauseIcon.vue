<template>
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    viewBox="0 0 42 42"
  >
    <g>
      <circle
        cx="21"
        cy="21"
        r="21"
        fill="#00EBAB"
        :class="isPlaying ? 'fade' : ''"
      />
      <path d="M30 20l-15 9V12l15 8z" fill="#000" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    isPlaying: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.fade {
  animation: 0.5s ease-in-out 0.5s infinite alternate fade;
}
@keyframes fade {
  from {
    fill: #00ebab;
  }
  to {
    fill: rgba(white, 0.5);
  }
}
</style>
