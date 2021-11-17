export default [
  {
    path: "/",
    name: "goods",
    components: {
      default: () => import("@/views/ShopGoods"),
    },
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      default: () => import("@/views/ShopCart"),
    },
  },
];
