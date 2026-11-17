import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { img } from '../../data/site';

function Lightbox({ item, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (item && d && !d.open) d.showModal();
    if (!item && d?.open) d.close();
  }, [item]);
  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <button className="lightbox__close" aria-label="Close" onClick={onClose}><Icon name="x" /></button>
      {item && (
        <>
          <img src={img(item.src)} alt={item.caption} />
          <p>{item.caption}</p>
        </>
      )}
    </dialog>
  );
}

/** Grid of images that open full-size in a lightbox. */
export default function Gallery({ items, variant = 'cert' }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className={`gallery gallery--${variant}`}>
        {items.map((it) => (
          <button
            key={it.src}
            className={`gallery__item reveal${it.portrait ? ' gallery__item--portrait' : ''}`}
            onClick={() => setActive(it)}
          >
            <img src={img(it.src)} alt={it.caption} loading="lazy" />
            <span className="gallery__cap">{it.label}</span>
          </button>
        ))}
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}
