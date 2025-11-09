import { commonScrollTrigger } from "../common/scroll-trigger";
import { mediaQuery } from "../common/mediaQuery";

export const cut3Ani = {
    txtVarsProperty : {
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
                start: "10% 75%",
                end: "50% 75%",
                scrub: 1
            }
        });
        const row2Tl = gsap.timeline({
            // ease: "back.inOut(1.7)",
            scrollTrigger: {
                // markers: true,
                trigger: ".cut-3-row-2",
                start: "10% 75%",
                end: "center 75%",
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
        tl.from(".cut-3-row-1 .title", this.txtVarsProperty, aniPosition);
    },
    row1SubtitleAni(tl, aniPosition = null) {
        tl.from(".cut-3-row-1 .subtitle", this.txtVarsProperty, aniPosition);
    },
    row1TxtAni(tl, aniPosition = null) {
        const content = gsap.utils.toArray(".cut-3-row-1 .txt");
        SplitText.create(content, {
            type: "lines, words",
            // mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return tl.from(self.words, {
                    duration: 2,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.1
                });
            }
        });
    },
    row1ImgAni(tl, aniPosition = null) {
        tl.from(".cut-3-row-1 .cut-3-img img", {
            duration: 1,
            scale: 1.2,
        }, aniPosition);
    },
    row2TitleAni(tl, aniPosition = null) {
        tl.from(".cut-3-row-2 .title", this.txtVarsProperty, aniPosition);
    },
    row2SubtitleAni(tl, aniPosition = null) {
        tl.from(".cut-3-row-2 .subtitle", this.txtVarsProperty, aniPosition);
    },
    row2TxtAni(tl, aniPosition = null) {
        const content = gsap.utils.toArray(".cut-3-row-2 .txt");
        SplitText.create(content, {
            type: "lines, words",
            // mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return tl.from(self.words, {
                    duration: 2,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.1
                });
            }
        });
    },
    row2ImgAni(tl, aniPosition = null) {
        tl.from(".cut-3-row-2 .cut-3-img img", {
            duration: 1,
            scale: 1.2,
        }, aniPosition);
    },
};
