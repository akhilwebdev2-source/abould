import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (hash) {
      lastHash.current = hash;
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
        // Only scroll to top if we didn't just come from a hash link on the same page
        // But for simplicity in this app, always scroll top on route change without hash
        window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToAnchor;
