import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./main.css";
import ads from "./assets/ads.png";
import adsen from "./assets/adsen.png";
import psp from "./assets/psp.png";
import gea from "./assets/gea.png";
import dentalpoint from "./assets/dentalpoint.png";
import albius from "./assets/albius.png";
import women from "./assets/women.jpg";
import gsa from "./assets/gsa.jpg";
import gsp from "./assets/gsp.png";
import tepe from "./assets/tepe.png";
import ciu from "./assets/ciu.jpg";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
        <span className="span">{children} </span>
      </motion.div>
    </div>
  );
}

export function Paralax() {
  return (
    <section className="section">
      {" "}
      <ParallaxText baseVelocity={-0.8}>
        <img style={{ width: "40vh", height: "20vh" }} src={gea} />{" "}
        <img style={{ width: "20vh", height: "20vh" }} src={psp} />
        <img style={{ width: "40vh", height: "20vh" }} src={dentalpoint} />
        <img style={{ width: "40vh", height: "20vh" }} src={albius} />
        <img style={{ width: "40vh", height: "20vh" }} src={women} />
        <img style={{ width: "40vh", height: "20vh" }} src={gsa} />
        <img style={{ width: "40vh", height: "20vh" }} src={gsp} />
        <img style={{ width: "28vh", height: "20vh" }} src={ciu} />
        <img style={{ width: "40vh", height: "20vh" }} src={tepe} />
        <img style={{ width: "40vh", height: "20vh" }} src={ads} />
      </ParallaxText>
    </section>
  );
}

export function Paralaxen() {
  return (
    <section className="section">
      {" "}
      <ParallaxText baseVelocity={-0.8}>
        <img style={{ width: "40vh", height: "20vh" }} src={gea} />{" "}
        <img style={{ width: "20vh", height: "20vh" }} src={psp} />
        <img style={{ width: "40vh", height: "20vh" }} src={dentalpoint} />
        <img style={{ width: "40vh", height: "20vh" }} src={albius} />
        <img style={{ width: "40vh", height: "20vh" }} src={women} />
        <img style={{ width: "40vh", height: "20vh" }} src={gsa} />
        <img style={{ width: "40vh", height: "20vh" }} src={gsp} />
        <img style={{ width: "28vh", height: "20vh" }} src={ciu} />
        <img style={{ width: "40vh", height: "20vh" }} src={tepe} />
        <img style={{ width: "40vh", height: "20vh" }} src={adsen} />
      </ParallaxText>
    </section>
  );
}
