<template>
  <div class="footer q-px-sm q-py-lg bg-brand text-white">
    <q-list dense v-if="shop">
      <q-item  v-if="shop.name">
          <q-item-section side>
            <q-icon color="white" name="eva-home-outline" />
        </q-item-section>
        <q-item-section >
          <q-item-section>
            <q-item-label class="text-weight-bold text-md">{{ shop.name }}</q-item-label>
          </q-item-section>
        </q-item-section>
      </q-item>
      <q-item v-if="shop.phone">
        <q-item-section side >
          <q-icon color="white" name="eva-phone-call-outline"/>
        </q-item-section>
        <q-item-section >
          <q-item-label class="text-weight-medium">{{ shop.phone }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="shop.address">
        <q-item-section side top>
          <q-icon color="white" name="eva-pin-outline"/>
        </q-item-section >
        <q-item-section>
          <q-item-section>
            <div class="" v-html="shop.address"></div>
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  computed: {
    shop() {
      return this.$store.state.shop
    }
  }
}
</script>
