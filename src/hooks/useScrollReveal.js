import { useEffect } from 'react';

/**
 * Hook to automatically reveal elements on scroll using IntersectionObserver.
 * It queries elements with the '.reveal-element' class and adds the '.revealed' class
 * when they enter the viewport.
 */
export default function useScrollReveal(dependency = null) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -12% 0px', // Animates slightly before fully visible
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Give a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-element');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [dependency]);
}
