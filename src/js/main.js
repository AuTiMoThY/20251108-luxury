/**
 * 主入口檔案
 * 模組化版本 - 方便開發維護
 */

import { cut1ResponsiveVideo, cut1Parallax } from "./modules/cut/cut-1";
import { cut2Swipers } from "./modules/swipers/cut-2-swiper";
import { cut2Ani } from "./modules/cut/cut-2";
import { cut3Ani } from "./modules/cut/cut-3";
import { formField, textareaAutoHeight } from "./modules/common/form-field";

// DOM 載入完成後執行
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    document.body.classList.remove("loading");

    gsap.registerPlugin(ScrollTrigger, SplitText);

    cut1ResponsiveVideo();
    cut1Parallax();
    cut2Swipers();
    formField();
    textareaAutoHeight();

    cut2Ani.start();
    cut3Ani.start();
});