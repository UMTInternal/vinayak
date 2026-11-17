import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { company, services, img } from '../data/site';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', dropdown: true },
  { to: '/service-areas', label: 'Areas' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <span><Icon name="clock" /> {company.hours}</span>
        <span className="topbar__right">
          <a href={`mailto:${company.email}`}><Icon name="mail" /> {company.email}</a>
          <a href={company.phones[1].href}><Icon name="phone" /> {company.phones[1].label}</a>
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => { setOpen(false); setSubOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap header__inner">
        <Link to="/" className="brand" aria-label="Vinayak Relocation home">
          <img src={img('logo.png')} alt="Vinayak Relocation Packers & Movers" width="720" height="409" />
        </Link>

        <nav className={`nav${open ? ' is-open' : ''}`} id="nav" aria-label="Main">
          {links.map((l) =>
            l.dropdown ? (
              <div className={`nav__group${subOpen ? ' is-open' : ''}`} key={l.to}>
                <div className="nav__row">
                  <NavLink to={l.to} className="nav__link">{l.label}</NavLink>
                  <button
                    className="nav__toggle"
                    aria-label="Show services"
                    aria-expanded={subOpen}
                    onClick={() => setSubOpen((v) => !v)}
                  >
                    <Icon name="chevron" />
                  </button>
                </div>
                <div className="dropdown">
                  {services.map((s) => (
                    <NavLink key={s.slug} to={`/services/${s.slug}`} className="dropdown__item">
                      <span className="dropdown__ic"><Icon name={s.icon} /></span>
                      <span>
                        <strong>{s.title}</strong>
                        <small>{s.short.split('.')[0]}.</small>
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">{l.label}</NavLink>
            )
          )}
          <Link to="/contact" className="nav__mobile-cta btn btn--primary">Get free quote</Link>
        </nav>

        <div className="header__actions">
          <a href={company.phones[0].href} className="header__call">
            <span className="header__call-ic"><Icon name="phone" /></span>
            <span><small>Call us</small>{company.phones[0].label}</span>
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm hide-sm">Free quote</Link>
          <button
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
