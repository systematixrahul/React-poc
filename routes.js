const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/", "Index");

routes.add({
    name: "MenProductBlock",
    pattern: "/men-product/",
    page: "men-product"
  });