import { mediaQuery } from "../common/mediaQuery";

export const cut1ResponsiveVideo = () => {
    const video = document.querySelector(".cut-1-video video");
    if (!video) return;
    
    const mq = mediaQuery(); // 取得 MediaQueryList 物件
    
    const updateVideo = (e) => {
        video.src = e.matches ? video.dataset.mobile : video.dataset.desktop;
    };

    // 初始化
    updateVideo(mq);

    // 只在斷點改變時觸發
    mq.addEventListener("change", updateVideo);
};

/**
 * Cut-1 Parallax 效果
 * 當畫面滾動時，影片會產生視差效果
 */
export const cut1Parallax = () => {
    const videoContainer = document.querySelector(".cut-1-video");
    const video = document.querySelector(".cut-1-video video");
    
    if (!videoContainer || !video) return;

    // 影片容器的 parallax 效果
    gsap.to(video, {
        y: "20%", // 向下移動
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
            trigger: videoContainer,
            start: "10% top", // 當容器頂部碰到視窗底部時開始
            end: "bottom top", // 當容器底部碰到視窗頂部時結束
            scrub: true, // 讓動畫跟隨滾動進度
            // markers: true, // 開發時可開啟此選項來調試
        }
    });

    // // 額外的 scale 效果，增加深度感
    // gsap.to(video, {
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: videoContainer,
    //         start: "top bottom",
    //         end: "center center",
    //         scrub: true,
    //     }
    // });
};