<template>
  <Layout>
    <template v-slot:title> Лучшие товары </template>
    <template v-slot:content>
      <div class="shop-goods__content">
        <ShopCard
          v-for="product in goods"
          :key="product.id"
          :id="product.id"
          :name="product.dish"
          :description="product.description"
          :price="product.price"
          :image-name="product.image"
          @addToCart="addToCartHandler(product)"
        />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ShopCard from "@/components/ShopCard";
import { mapActions, mapState } from "vuex";

export default {
  name: "ShopGoods",
  components: {
    ShopCard,
    Layout,
  },
  computed: {
    ...mapState(["goods"]),
  },
  methods: {
    ...mapActions(["addToCart"]),
    addToCartHandler(product) {
      this.addToCart(product);
      this.$notify({
        type: "success",
        text: `Товар ${product.dish} успешно добавлен в корзину`,
      });
    },
  },
};
</script>

<style>
.shop-goods__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
}
</style>
