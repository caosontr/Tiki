import { Formatter } from "../ultilities";
const Products = {
  render: (books) => {
    let html = "";
    books.forEach((book, i) => {
      html += ` <div
    class="item-product px-5 pt-[13px] pb-[26px] h-[317px] flex flex-col justify-between"
  >
  <a href="/book/detail/${i}">
    <img
      src="${book.images[0].small_url}"
      alt=""
      class="max-w-[200px] max-h-[200px]"
    />
    </a>
    <div class="info-product">
    <a href="/book/detail/${i}">
      <h3 class="color-text text-[13px]">
        ${book.name}
      </h3>
      </a>
      <div class="reviews flex items-center my-[6px]">
        <div class="starts text-xs">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <span class="w-[1px] h-[10px] bg-slate-300 m-[6px]"></span>
        <div class="sold text-xs text-[#787878]">Đã bán 1000+</div>
      </div>
      <div class="price color-price flex items-center">
        <span>${Formatter.format(book.original_price)}</span> ₫
        <div
          class="sale ml-[5px] px-[3px] leading-4 border-[1px] border-[#FF424E] rounded-sm max-h-[16px] bg-[#FFF0F1]"
        >
          -23%
        </div>
      </div>
      <div class="slogan color-price flex relative mt-1">
        <i class="fa-solid fa-shield" style="font-size: 18px"></i>
        <span class="text-white absolute -top-1 left-1">$</span>
        <p class="uppercase text-xs pl-1">Rẻ hơn khi hoàn tiền</p>
      </div>
    </div>
  </div>`;
    });
    return `
    <div class="products grid grid-cols-4 gap-x-1.5 gap-y-6  mt-16 ">
             ${html}
            </div>
    `;
  },
};
export default Products;
