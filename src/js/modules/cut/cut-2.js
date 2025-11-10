import { mediaQuery } from "../common/mediaQuery";
import { commonScrollTrigger } from "../common/scroll-trigger";

export const cut2Ani = {
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
