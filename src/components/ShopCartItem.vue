<template>
  <article class="shop-cart-item">
    <img :src="imgPath" class="shop-cart-item__image" alt="product" />
    <div class="shop-cart-item__info">
      <div class="shop-cart-item__header">
        <h3 class="shop-cart-item__header-text">{{ name }}</h3>
      </div>
      <div class="shop-cart-item__body">
        <p class="shop-cart-item__description">
          {{ description }}
        </p>
        <p class="shop-cart-item__count">
          Кол-во: <b>{{ count }}</b>
        </p>
      </div>
    </div>
    <span class="shop-cart-item__price"> {{ price }} ₽ </span>
    <ShopButton
      class="form__submit-button shop-cart-item__remove-button"
      variant="secondary"
      @click="$emit('removeFromCart')"
    >
      ✕
    </ShopButton>
  </article>
</template>

<script>
import ShopButton from "@/components/ShopButton";

export default {
  name: "ShopCartItem",
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: null,
    },
    count: {
      type: Number,
      default: null,
    },
    imageName: {
      type: Number,
      default: 1,
    },
  },
  components: {
    ShopButton,
  },
  computed: {
    imgPath() {
      return require(`../assets/images/${this.imageName}.webp`);
    },
  },
};
</script>

<style scoped>
.shop-cart-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #e8e8e8;
}

.shop-cart-item__image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.shop-cart-item__info {
  padding: 0 25px;
}

.shop-cart-item__header-text {
  margin: 0 0 10px;
}

.shop-cart-item__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 50px;
  overflow: hidden;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  line-height: 1.5;
  font-size: 16px;
  color: #333333;
}

.shop-cart-item__count {
  line-height: 1.5;
  font-size: 16px;
  color: #333333;
}

.shop-cart-item__price {
  margin-left: auto;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
}

.shop-cart-item__remove-button {
  position: absolute;
  right: 10px;
  top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  font-size: 10px;
  background: #e8e8e8;
  border-radius: 50%;
}

.shop-cart-item__remove-button:hover {
  background-color: #bebcbc;
}
</style>
