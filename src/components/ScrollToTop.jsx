import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  return null;
}

export default ScrollToTop;