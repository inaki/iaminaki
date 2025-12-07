'use client';

import { useEffect, useRef, useState } from 'react';
import Vivus from 'vivus';
import { useRouter } from 'next/navigation';

const NAV_DELAY_MS = 450;

export default function AnimatedIcon({ src, svgId, navigateTo, className, playOnClick = true }) {
  const router = useRouter();
  const vivusRef = useRef(null);
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadSvg = async () => {
      if (!src) return;
      const response = await fetch(src);
      if (!response.ok) return;
      const text = await response.text();
      if (isMounted) {
        setMarkup(text);
      }
    };

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, [src]);

  useEffect(() => {
    if (!svgId || !markup) return undefined;

    vivusRef.current = new Vivus(svgId, {
      type: 'delayed',
      duration: 180,
      start: 'autostart',
    });

    return () => {
      if (vivusRef.current?.stop) {
        vivusRef.current.stop();
      }
      vivusRef.current = null;
    };
  }, [markup, svgId]);

  const handleClick = () => {
    if (playOnClick && vivusRef.current?.reset) {
      vivusRef.current.stop().reset().play();
    }

    if (navigateTo) {
      window.setTimeout(() => router.push(navigateTo), NAV_DELAY_MS);
    }
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      role="img"
      aria-label={svgId}
      dangerouslySetInnerHTML={{ __html: markup }}
      suppressHydrationWarning
    />
  );
}
