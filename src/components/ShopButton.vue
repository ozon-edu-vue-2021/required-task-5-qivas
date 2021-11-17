<template>
  <button
    class="shop-button"
    :class="[
      `shop-button_${variant}`,
      `shop-button_${size}`,
      { 'shop-button_disabled': disabled },
    ]"
    :type="type"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ShopButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.shop-button {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.2s ease-in;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  border-radius: 6px;
}

.shop-button_disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.shop-button_fullwidth {
  width: 100%;
}

.shop-button_primary {
  background-color: #f91155;
  box-shadow: rgba(170, 15, 61, 0.24);
}

.shop-button_primary:hover {
  background-color: #aa0f3dff;
}

.shop-button_secondary {
  background-color: #1e88e5;
  box-shadow: 0 4px 8px rgba(54, 123, 245, 0.24);
}

.shop-button_secondary:hover {
  background-color: #0b69ba;
}
</style>
