<template>
  <article class="shop-card">
    <img :src="imgPath" class="shop-card__image" alt="product" />
    <div class="shop-card__info">
      <div class="shop-card__header">
        <h3 class="shop-card__header-text">{{ name }}</h3>
      </div>
      <div class="shop-card__body">
        <p class="shop-card__description">
          {{ description }}
        </p>
      </div>
      <div class="shop-card__footer">
        <span class="shop-card__price">{{ price }} ₽</span>
        <ShopButton @click="$emit('addToCart')"> В корзину </ShopButton>
      </div>
    </div>
  </article>
</template>

<script>
import ShopButton from "@/components/ShopButton";

export default {
  name: "ShopCard",
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
.shop-card {
  border: 1px solid #e8e8e8;
}

.shop-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.shop-card__info {
  padding: 15px 20px 25px;
}

.shop-card__header-text {
  margin: 0 0 10px;
}

.shop-card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 72px;
  overflow: hidden;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  line-height: 1.5;
  font-size: 16px;
  color: #333;
}
.shop-card__price {
  font-size: 20px;
  font-weight: 600;
}

.shop-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
