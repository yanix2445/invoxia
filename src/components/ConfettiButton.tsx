'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export function ConfettiButton() {
  useEffect(() => {
    confetti();
  }, []);

  return <div>Hello World</div>;
}
