<template>
  <div>
    <div class="overflow-hidden auto-padding-side block-container q-py-md" v-if="blocks.featured.length">
      <vue-glide :options="carouselOptions">
        <vue-glide-slide v-for="feature in blocks.featured" :key="feature.id">
          <div class="column col items-center text-center q-gutter-y-xs featured cursor-pointer" @click="showPost(feature)">
            <img v-if="feature.image" :src="feature.image_url" alt="" width="60" height="60" style="object-fit:contain;"/>
            <div class="text-sm text-weight-medium">{{ feature.label }}</div>
            <div v-if="feature.description" class="text-grey-7 text-auto description">{{ feature.description }}</div>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedCarousel',
  data () {
    return {
      carouselOptions: {
        rewind: false,
        perView: 3,
        gap: 5,
        bound: true
      }
    }
  },
  computed: {
    blocks() {
      return this.$store.state.front.blocks
    },
    page_width() {
            return this.$store.state.page_width
        },
    theCircle() {
        if(this.page_width >= 768) return '80px'
        return '65px'
    }
  },
  methods: {
    showPost(featured) {
      if(featured.post) {
        this.$router.push({ name: 'FrontPostShow', params: { slug: featured.post.slug }})
      }
    }
  }
}
</script>
