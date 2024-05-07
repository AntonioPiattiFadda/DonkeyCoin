import React, { useEffect, useRef, Children, cloneElement } from "react";
import { gsap } from "gsap";

const ScrollAnimationWrapper = ({
  children,
  animation = "fadeInUp",
  index = 0,
  baseDelay = 0.2,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const delay = baseDelay * index; // Calcula el delay basado en el índice del elemento
    gsap.set(element, { autoAlpha: 0 });
    const onEnter = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let animationParams = { delay: delay }; // Parámetros comunes de animación ajustados para mantener el elemento visible

          switch (animation) {
            case "fadeInUp":
              gsap.fromTo(
                element,
                { y: 50 },
                { ...animationParams, autoAlpha: 1, y: 0, duration: 1 }
              );
              break;
            case "fadeInUpNav":
              gsap.fromTo(
                element,
                { y: 10 },
                { ...animationParams, autoAlpha: 1, y: 0, duration: 0.5 }
              );
              break;
            case "fadeInDown":
              gsap.fromTo(
                element,
                { y: -50 },
                { ...animationParams, autoAlpha: 1, y: 0, duration: 1 }
              );
              break;
            case "fadeInLeft":
              gsap.fromTo(
                element,
                {
                  x: -150,
                },
                { ...animationParams, autoAlpha: 1, x: 0, duration: 1 }
              );
              break;
            case "fadeInRight":
              gsap.fromTo(
                element,
                { x: 150 },
                { ...animationParams, autoAlpha: 1, x: 0, duration: 1 }
              );
              break;
            case "bounce":
              gsap.fromTo(
                element,
                { scale: 0.3, autoAlpha: 0, delay: delay },
                { scale: 1, autoAlpha: 1, ease: "bounce.out", duration: 1 }
              );
              break;
            default:
              gsap.to(element, animationParams);
          }
          // Desconectar el observador para este elemento después de la animación
          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(onEnter, { threshold: 0.05 });
    observer.observe(element);

    return () => observer.disconnect(); // Asegúrate de desconectar el observer cuando el componente se desmonte
  }, [animation, index, baseDelay]); // Añade `index` y `baseDelay` a las dependencias

  // Clona el elemento hijo único y le aplica el ref
  if (React.Children.count(children) !== 1) {
    console.error(
      "ScrollAnimationWrapper expects a single React element as a child."
    );
    return null;
  }

  const childElement = Children.only(children);
  const childWithRef = cloneElement(childElement, { ref });

  return childWithRef;
};

export default ScrollAnimationWrapper;
