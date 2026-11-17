import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header, { TopBar } from './Header';
import Footer from './Footer';

/** Scroll to top on page change, or to #hash when present. */
function useScrollRestore() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

/** Fade-in elements with the .reveal class as they enter the viewport. */
function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);
}

export default function Layout() {
  useScrollRestore();
  useReveal();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
