import { printf, router } from "./ultilities";
import { books } from "../db.json";
import NotFound from "./pages/notFound";
import HomePage from "./pages/homePages";
import DetailProductPage from "./pages/detailProduct";
router.on({
  "/": () => printf('#app',HomePage.render(books),HomePage),
  "/book/detail/:id": (data) =>printf('#app',DetailProductPage.render(books,data.data.id),DetailProductPage),
});
router.notFound(function () {
  render("#app", NotFound)
})
router.resolve();


