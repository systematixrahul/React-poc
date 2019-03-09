const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/", "Index");

routes.add({
    name: "MenProductBlock",
    pattern: "/men-product/",
    page: "men-product"
  });
  routes.add({
    name: "AllCategoryProductBlock",
    pattern: "/all-category/",
    page: "all-category"
  });
  routes.add({
    name: "Login",
    pattern: "/login/",
    page: "login/"
  });

  routes.add({
    name: "Men Product Detail",
    pattern: "/men-product-detail/",
    page: "men-product-detail/"
  });
  routes.add({
    name: "Customer Care",
    pattern: "/customer-care/",
    page: "customer-care/"
  });