import { commonScrollTrigger } from "../common/commonScrollTrigger";
import { mediaQuery } from "../common/mediaQuery";

export const cut3Ani = {
    rowScrollTrigger: {
        start: "-20% 75%",
        end: "+=50%",
        scrub: 1
    },
    imgScrollTrigger: {
        start: "top 75%",
        end: "bottom 75%",
        scrub: 1
    },
    txtVarsProperty: {
        y: "3vw",
        scale: !mediaQuery().matches ? 1.1 : 1.4,
        stagger: 0.15,
        opacity: 0,
        duration: 1
    },
    splitText(el, tl, aniPosition = null) {
        SplitText.create(el, {
            type: "lines, words",
            // mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return tl.addLabel("txt").from(self.lines, {
                    scale: 1.25,
                    duration: 2,
                    y: 50,
                    autoAlpha: 0,
                    stagger: 0.5
                }, aniPosition);
            }
        });
    },
    start() {
        const row1Tl = gsap.timeline({
            // ease: "back.inOut(1.7)",
            scrollTrigger: {
                // markers: true,
                trigger: ".cut-3-row-1",
                ...this.rowScrollTrigger
            }
        });
        const row2Tl = gsap.timeline({
            // ease: "back.inOut(1.7)",
            scrollTrigger: {
                // markers: true,
                trigger: ".cut-3-row-2",
                ...this.rowScrollTrigger
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
        this.splitText(content, tl, aniPosition);
    },
    row1ImgAni(tl, aniPosition = null) {
        gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: ".cut-3-row-1",
                ...this.imgScrollTrigger
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
        this.splitText(content, tl, aniPosition);

    },
    row2ImgAni(tl, aniPosition = null) {
        gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: ".cut-3-row-2",
                ...this.imgScrollTrigger
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
