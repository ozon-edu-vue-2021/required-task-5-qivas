<template>
  <Layout>
    <template v-slot:title> Корзина </template>
    <template v-slot:content>
      <div class="shop-cart__content">
        <section v-if="cart.length > 0" class="shop-cart__goods">
          <ShopCartItem
            v-for="product in cart"
            :key="product.id"
            :id="product.id"
            :name="product.dish"
            :description="product.description"
            :price="product.price"
            :count="product.count"
            :image-name="product.image"
            @removeFromCart="removeFromCartHandler(product)"
            class="shop-cart__good-item"
          />
        </section>
        <section v-else class="shop-cart__cart-empty">
          <h3 class="shop-cart__ordering-title">Ваша корзина пока пуста</h3>
        </section>
        <section class="shop-cart__ordering">
          <div class="shop-cart__ordering-card">
            <h3 class="shop-cart__ordering-title">Оформление заказа</h3>
            <div class="shop-cart__ordering-info">
              <b>Ваша корзина</b>
              <span>{{ getCount }} {{ productNoun }}</span>
            </div>
            <span class="shop-cart__separator" />
            <div class="shop-cart__ordering-info">
              <b>Общая стоимость</b>
              <span>{{ getTotal }} ₽</span>
            </div>
            <ShopButton
              variant="secondary"
              size="fullwidth"
              @click="checkoutHandler"
            >
              Оформить заказ
            </ShopButton>
          </div>
        </section>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ShopCartItem from "@/components/ShopCartItem";
import ShopButton from "@/components/ShopButton";
import { mapState, mapGetters, mapActions } from "vuex";
import { getNoun } from "@/utils/getNoun";

export default {
  name: "ShopCart",
  components: {
    ShopCartItem,
    ShopButton,
    Layout,
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotal", "getCount"]),
    productNoun() {
      return getNoun(this.getCount, "товар", "товара", "товаров");
    },
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    removeFromCartHandler(product) {
      this.removeFromCart(product.id);
      this.$notify({
        text: `Товар ${product.dish} удален из корзины`,
      });
    },
    checkoutHandler() {
      const order =
        this.cart.length > 0 ? JSON.stringify(this.cart) : "Корзина пока пуста";
      alert(order);
    },
  },
};
</script>

<style>
.shop-cart__content {
  display: grid;
  grid-template-columns: 3fr minmax(30%, 300px);
  gap: 32px;
}

.shop-cart__ordering-card {
  padding: 16px;
  border: 1px solid #e8e8e8;
}

.shop-cart__good-item {
  margin-bottom: 20px;
}

.shop-cart__ordering-title {
  margin: 0 0 16px;
}
.shop-cart__ordering-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.shop-cart__separator {
  display: block;
  width: 100%;
  height: 1px;
  background: #e8e8e8;
  margin-bottom: 16px;
}
</style>
