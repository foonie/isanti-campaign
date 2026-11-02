"use client";

import { useEffect } from "react";

export default function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealed = new WeakSet<Element>();
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function stop() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }

    function start() {
      stop();
      if (preference.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || revealed.has(entry.target)) return;
            revealed.add(entry.target);
            observer?.unobserve(entry.target);
            if (entry.target.matches(":focus-within")) return;

            const animation = entry.target.animate(
              [
                { opacity: 0, transform: "translateY(22px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 650,
                delay: Number(entry.target.getAttribute("data-reveal-order") ?? 0) * 65,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "backwards",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
            animation.oncancel = () => animations.delete(animation);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -24px 0px" },
      );

      elements.forEach((element) => {
        if (!revealed.has(element)) observer?.observe(element);
      });
    }

    function showFocusedContent(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest("[data-reveal]");
      if (!element) return;
      revealed.add(element);
      observer?.unobserve(element);
      element.getAnimations().forEach((animation) => {
        if (animations.has(animation)) animation.finish();
      });
    }

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", showFocusedContent);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", showFocusedContent);
    };
  }, []);

  return null;
}
