<template>
  <div>
    <header class="page-header">
      <router-link to="/" class="page-header__item page-header__logo">
        <i class="fas fa-store"></i>
        <span>My-shop</span>
      </router-link>
      <router-link to="/cart" class="page-header__item page-header__cart">
        <i class="fal fa-shopping-cart"></i>
        <span>Корзина</span>
      </router-link>
    </header>
    <div class="page-header__ballast" />
  </div>
</template>

<script>
export default {
  name: "ShopHeader",
};
</script>

<style>
.page-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  padding: 15px 25px;
  background: #ffffff;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

.page-header__item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #005bff;
  font-weight: 600;
  text-transform: uppercase;
}

.page-header__item > i {
  margin-right: 10px;
}

.page-header__logo {
  font-size: 36px;
  color: #2c3e50;
}

.page-header__cart {
  margin-left: auto;
}

.page-header__ballast {
  height: 80px;
}
</style>
