import React from 'react';

export function ScissorsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6L16 14M8 14L16 6" />
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
    </svg>
  );
}

export function BeardIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="10" rx="6" ry="7" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="9" cy="8.5" r="0.7" fill="currentColor" />
      <circle cx="15" cy="8.5" r="0.7" fill="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11c.5-1 2-1 3-1s2.5 0 3 1" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14c0 2 2 4 4 4s4-2 4-4c0-2-1-3-4-3s-4 1-4 3z" />
    </svg>
  );
}

export function RazorIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="6" y="8" width="12" height="2" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="8" y="10" width="8" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth={1} />
      <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

export function ShowerIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M8 6a4 4 0 1 1 8 0v2" strokeWidth={2} />
      <rect x="6" y="8" width="12" height="2" rx="1" strokeWidth={2} />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
      <circle cx="14" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

export function CombIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="8" width="16" height="4" rx="2" strokeWidth={2} />
      <line x1="6" y1="8" x2="6" y2="12" strokeWidth={2} />
      <line x1="8" y1="8" x2="8" y2="12" strokeWidth={2} />
      <line x1="10" y1="8" x2="10" y2="12" strokeWidth={2} />
      <line x1="12" y1="8" x2="12" y2="12" strokeWidth={2} />
      <line x1="14" y1="8" x2="14" y2="12" strokeWidth={2} />
      <line x1="16" y1="8" x2="16" y2="12" strokeWidth={2} />
      <line x1="18" y1="8" x2="18" y2="12" strokeWidth={2} />
    </svg>
  );
}

export function UserIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" strokeWidth={2} />
      <path d="M4 20c0-4 8-4 8-4s8 0 8 4" strokeWidth={2} />
    </svg>
  );
}

export function ColorIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Hair strands */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8C6 10 8 12 12 12C16 12 18 10 18 8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10C5 12 7 14 12 14C17 14 19 12 19 10" />
      {/* Paint brush - larger and clearer */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4L22 6L20 8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6L24 6" />
      {/* Brush handle */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6L24 8" />
      {/* Color drops - larger */}
      <circle cx="21" cy="7" r="1" fill="currentColor" />
      <circle cx="23" cy="5" r="1" fill="currentColor" />
    </svg>
  );
}

export function ScalpIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Head outline */}
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Hair outline */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6C6 8 8 10 12 10C16 10 18 8 18 6" />
      {/* Scalp massage - clearer hands */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15L6 18L9 15" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15L18 18L15 15" />
      {/* Fingers */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16L5 17" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 16L19 17" />
      {/* Massage dots */}
      <circle cx="10" cy="16" r="1.2" fill="currentColor" />
      <circle cx="14" cy="16" r="1.2" fill="currentColor" />
      <circle cx="12" cy="18" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacialIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Face outline */}
      <ellipse cx="12" cy="10" rx="6" ry="7" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Eyes */}
      <circle cx="9" cy="8.5" r="0.7" fill="currentColor" />
      <circle cx="15" cy="8.5" r="0.7" fill="currentColor" />
      {/* Nose */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 10L12 12" />
      {/* Mouth */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13c.5-1 2-1 3-1s2.5 0 3 1" />
      {/* Facial treatment steam - more visible */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3L7 5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 3L17 5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19L7 17" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 19L17 17" />
      {/* Additional steam lines */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L8 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2L16 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20L8 18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 20L16 18" />
    </svg>
  );
}

export function BeardDyeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Face outline */}
      <ellipse cx="12" cy="10" rx="6" ry="7" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Eyes */}
      <circle cx="9" cy="8.5" r="0.7" fill="currentColor" />
      <circle cx="15" cy="8.5" r="0.7" fill="currentColor" />
      {/* Beard area */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14c0 2 2 4 4 4s4-2 4-4c0-2-1-3-4-3s-4 1-4 3z" />
      {/* Dye brush - larger and clearer */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5L20 7L18 9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7L22 7" />
      {/* Brush bristles - more visible */}
      <line x1="18" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth={1.5} />
      <line x1="18" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth={1.5} />
      <line x1="18" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth={1.5} />
      {/* Dye bottle - larger */}
      <rect x="19" y="11" width="4" height="7" rx="1" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 18L21 20" />
      {/* Bottle cap */}
      <rect x="19.5" y="10" width="3" height="1" rx="0.5" stroke="currentColor" strokeWidth={1} fill="none" />
    </svg>
  );
} 