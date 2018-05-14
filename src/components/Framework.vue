<template>
    <div>
        {{ name }}
        {{ stars }}
        {{ version }}
        {{ starsCount() }}
    </div>
</template>

<script>
export default {
  name: 'framework',
  props: {
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      validator: value => value.includes('http')
    },
    stars: {
      type: Number,
      required: true
    },
    version: {
      type: Number,
      default: 1
    }
  },
  methods: {
    updateVersion() {
      this.$emit('update', this.name);
    },
    starsCount() {
      if (this.stars > 50000) {
        return 'a lot';
      }
      return 'quite a lot';
    }
  }
};
</script>