(function () {
    'use strict';

    const mediaQuery = () => {
        console.log(window.matchMedia("(max-width: 1024px)"));
        
        return window.matchMedia("(max-width: 1024px)");
    };

    const cut1ResponsiveVideo = () => {
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
    const cut1Parallax = () => {
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

    /**
     * 所有 Swiper 初始化
     */

    function cut2Swipers() {
        return new Swiper(".cut-2-swiper .swiper", {
            parallax: true,
        });
    }

    /**
     * ScrollTrigger 相關設定
     */

    const commonScrollTrigger = (trigger, isMarkers = false) => {
        return gsap.timeline({
            ease: "back.inOut(1.7)",
            scrollTrigger: {
                markers: isMarkers,
                trigger: trigger,
                start: "top 75%",
                end: "75% 75%",
                scrub: 1,
            }
        });
    };

    const cut2Ani = {
        txtFrom: {
            y: mediaQuery() ? "3vw" : "6vw",
            scale: mediaQuery() ? 1.1 : 1.4,
            stagger: 0.5,
            opacity: 0,
            duration: 1
        },
        start() {
            const tl = commonScrollTrigger(".cut-2");
            this.slideTxt1(tl);
            this.slideLine(tl);
            this.slideTxt3(tl);
            this.slide1Pattern();
        },
        slideTxt1(tl) {
            tl.from(".cut-2-slide .txt-1 .inner, .cut-2-slide .txt-2 .inner", this.txtFrom);
        },
        slideLine(tl) {
            tl.from(".cut-2-slide .cut-2-slide-content-line .inner", {
                scale: 0,
                y: mediaQuery() ? "3vw" : "6vw",
                duration: 1,
            }, "<+0.65");
        },
        slideTxt3(tl) {
            tl.from(".cut-2-slide .txt-3 .inner, .cut-2-slide .txt-4 .inner", this.txtFrom, "<+0.65");
        },
        slide1Pattern() {
            gsap.from(".cut-2-slide .cut-2-slide-pattern", {
                scrollTrigger: {
                    trigger: ".cut-2",
                    start: "75% 75%",
                    end: "bottom 75%",
                    scrub: 1,
                  },
                  y: "105%",
                  opacity: 0,
            });
        }
    };

    const cut3Ani = {
        txtVarsProperty: {
            y: "3vw",
            scale: !mediaQuery().matches ? 1.1 : 1.4,
            stagger: 0.15,
            opacity: 0,
            duration: 1
        },
        start() {
            const row1Tl = gsap.timeline({
                // ease: "back.inOut(1.7)",
                scrollTrigger: {
                    markers: true,
                    trigger: ".cut-3-row-1",
                    start: "-20% 75%",
                    end: "+=50%",
                    scrub: 1
                }
            });
            const row2Tl = gsap.timeline({
                // ease: "back.inOut(1.7)",
                scrollTrigger: {
                    // markers: true,
                    trigger: ".cut-3-row-2",
                    start: "-20% 75%",
                    end: "+=50%",
                    scrub: 1
                }
            });
            this.row1TitleAni(row1Tl);
            this.row1SubtitleAni(row1Tl, "<+0.3");
            this.row1TxtAni(row1Tl, "<+0.3");
            this.row1ImgAni(row1Tl, "<+0.3");
            this.row2TitleAni(row2Tl);
            this.row2SubtitleAni(row2Tl, "<+0.3");
            this.row2TxtAni(row2Tl, "<+0.3");
            this.row2ImgAni(row2Tl, "<+0.3");
        },
        row1TitleAni(tl, aniPosition = null) {
            tl.addLabel("title");
            tl.from(".cut-3-row-1 .title", this.txtVarsProperty, aniPosition);
        },
        row1SubtitleAni(tl, aniPosition = null) {
            tl.addLabel("subtitle");
            tl.from(".cut-3-row-1 .subtitle", this.txtVarsProperty, aniPosition);
        },
        row1TxtAni(tl, aniPosition = null) {
            const content = gsap.utils.toArray(".cut-3-row-1 .txt");
            SplitText.create(content, {
                type: "lines, words",
                // mask: "lines",
                autoSplit: true,
                onSplit(self) {
                    return tl.addLabel("txt").from(self.words, {
                        duration: 2,
                        y: 100,
                        autoAlpha: 0,
                        stagger: 0.1
                    });
                }
            });
        },
        row1ImgAni(tl, aniPosition = null) {
            gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: ".cut-3-row-1",
                    start: "top 75%",
                    end: "bottom 75%",
                    scrub: 1
                }
            })
            .from(
                ".cut-3-row-1 .cut-3-img img",
                {
                    duration: 1,
                    scale: 1.2
                },
                aniPosition
            );
        },
        row2TitleAni(tl, aniPosition = null) {
            tl.addLabel("title2");
            tl.from(".cut-3-row-2 .title", this.txtVarsProperty, aniPosition);
        },
        row2SubtitleAni(tl, aniPosition = null) {
            tl.addLabel("subtitle2");
            tl.from(".cut-3-row-2 .subtitle", this.txtVarsProperty, aniPosition);
        },
        row2TxtAni(tl, aniPosition = null) {
            const content = gsap.utils.toArray(".cut-3-row-2 .txt");
            SplitText.create(content, {
                type: "lines, words",
                // mask: "lines",
                autoSplit: true,
                onSplit(self) {
                    return tl.addLabel("txt2").from(self.words, {
                        duration: 2,
                        y: 100,
                        autoAlpha: 0,
                        stagger: 0.1
                    });
                }
            });
        },
        row2ImgAni(tl, aniPosition = null) {
            gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: ".cut-3-row-2",
                    start: "top 75%",
                    end: "bottom 75%",
                    scrub: 1
                }
            })
            .from(
                ".cut-3-row-2 .cut-3-img img",
                {
                    duration: 1,
                    scale: 1.2
                },
                aniPosition
            );
        }
    };

    const formField = () => {
        const formFields = document.querySelectorAll(".form-field");
        
        formFields.forEach(field => {
            const input = field.querySelector("input, textarea");
            
            if (!input) return;
            
            // 檢查初始值
            const checkValue = () => {
                if (input.value.trim() !== "") {
                    field.classList.add("active");
                } else {
                    field.classList.remove("active");
                }
            };
            
            // 初始化時檢查
            checkValue();
            
            // focus 事件 - 添加 active class
            input.addEventListener("focus", () => {
                field.classList.add("active");
            });
            
            // blur 事件 - 檢查是否有值
            input.addEventListener("blur", () => {
                checkValue();
            });
            
            // input 事件 - 即時檢查值的變化
            input.addEventListener("input", () => {
                checkValue();
            });
        });
    };

    const textareaAutoHeight = () => {
        const textareas = document.querySelectorAll("textarea");
        textareas.forEach(textarea => {
            textarea.addEventListener("input", () => {
                textarea.style.height = "auto";
                textarea.style.height = textarea.scrollHeight + "px";
            });
        });
    };

    /**
     * 主入口檔案
     * 模組化版本 - 方便開發維護
     */


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

})();
//# sourceMappingURL=main.js.map
