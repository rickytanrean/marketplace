<template>
  <div class="column full-height relative bg-white box-shadow">
    <q-img v-if="product.asset" :src="product.asset.src" ratio="1" @click="show(product.slug)" class="cursor-pointer" />
    <q-img v-else src="/static/no_image.png" ratio="1" @click="show(product.slug)" class="cursor-pointer">
    </q-img>
    <div class="relative col column q-gutter-y-xs justify-between q-pb-md q-px-sm q-pt-sm overflow-hidden full-width">
      <div>
        <div class="flex justify-between items-center">
          <q-rating 
            data-nosnippet="true"
            readonly
            v-model="rating"
            color="accent"
            icon="ion-star-outline"
            icon-selected="ion-star"
            icon-half="ion-star-half"
            :size="ratingSize"
          />
            <favorite-button :product_id="product.id" />
        </div>
        <div class="full-width q-mt-xs">
          <q-item-label class="text-subtitle ellipsis-2-lines cursor-pointer" @click="show(product.slug)">{{ product.title }}</q-item-label>
        </div>
      </div>
     <div class="card-price-container">
        <div class="card-price text-secondary">
          <span class="prefix">Rp</span>
           <span class="amount">{{ $money(parseInt(product.pricing.default_price)- getDIscountAmount) }}</span>
        </div>
        <div v-if="getDiscountPercent" class="card-discount text-strike text-grey-8">
          <span class="prefix">Rp</span>
          <span class="amount">{{ $money(parseInt(product.pricing.default_price)) }}</span>
          </div>
      </div>
    </div>
       <div v-if="getDiscountPercent" class="absolute top-0 z-50 bg-secondary text-white" style="padding:2px;font-size:13px;">{{ getDiscountPercent }}%</div>
  </div>
</template>
<script>
import FavoriteButton from 'components/FavoriteButton.vue'
export default {
  name: 'ProductCard',
  props: { 
    product: Object,
    grabbing: Boolean
  },
  components: { FavoriteButton },
  data() {
    return {
      rating: this.product.rating? parseFloat(this.product.rating) : 0.0
    }
  },
  computed: {
    getDIscountAmount() {
      if(this.product.pricing.is_discount) {
        if(this.product.pricing.discount_type == 'PERCENT') {
          return (parseInt(this.product.pricing.default_price)*parseInt(this.product.pricing.discount_amount))/100
        }else {
          return parseInt(this.product.pricing.discount_amount)
        }
      }
      return 0
    },
    getDiscountPercent() {
       if(this.product.pricing.is_discount) {
        if(this.product.pricing.discount_type == 'PERCENT') {
          return parseInt(this.product.pricing.discount_amount)
        }else {
          return parseInt((parseInt(this.product.pricing.discount_amount) / parseInt(this.product.pricing.default_price))*100)
        }
      }
      return 0
    },
    ratingSize() {
      if(window.innerWidth < 481) {
        return '.9rem'
      }
      return '1.1rem'
    }
  },
  methods: {
    show(slug) {
      if(this.grabbing) return
      this.$router.push({name: 'ProductShow', params: { slug: slug }})
    },
  }
}
</script>