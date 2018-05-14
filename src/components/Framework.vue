<template>
    <div class="card">
        <img class="card-img-top logo"
             :src="imageUrl"
             alt="logo">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ name }} has {{ starsCount }} of stars, {{ stars }} to be precise. If you want to update version, click on the button below</p>
            <button type="button"
                    class="btn btn-primary"
                    @click="updateVersion">Update version</button>
            <button type="button" 
                    class="btn btn-warning"
                    @click="updateStars">Update stars</button>
        </div>
        <div class="card-footer">
            <small class="text-muted">Current version: {{ version }}</small>
        </div>
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
    updateStars() {
      this.$emit('stars', this.name);
    },
  },
  computed: {
    starsCount() {
      console.log(`Calculating number of stars for ${this.name}`);
      if (this.stars > 50000) {
        return 'a lot';
      }
      return 'quite a lot';
    }
  }
};
</script>

<style lang="scss" scoped>
$image-size: 100px;

.logo {
  height: $image-size;
  width: $image-size;
  margin: 0 auto;
}
</style>