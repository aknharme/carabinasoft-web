import { type FC } from 'react';

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
}

export const Logo: FC<LogoProps> = ({ showText = true, className = '', iconClassName = 'w-9 h-9' }) => {
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* High-Fidelity SVG of the custom "CS" Monogram */}
      <svg
        viewBox="15 10 60 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassName} shrink-0 text-white`}
      >
        {/* The 'C' Path */}
        <path
          d="M 40,15 A 22,22 0 1,0 40,59 H 48 V 49 H 40 A 12,12 0 1,1 40,25 H 48 V 15 Z"
          fill="currentColor"
        />
        {/* The 'S' Path */}
        <path
          d="M 72,15 H 52 V 37 H 72 V 59 H 52 V 49 H 62 V 27 H 72 Z"
          fill="currentColor"
        />
        {/* Connection line between C and S */}
        <path
          d="M 39,37 H 51 L 62,47"
          stroke="#3B82F6"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Typography aligned with the branding */}
      {showText && (
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-white font-extrabold text-lg tracking-wider font-sans">
            CARABINA
          </span>
          <span className="text-brand font-bold text-[10px] tracking-[0.25em] mt-0.5 uppercase">
            SOFTWARE
          </span>
        </div>
      )}
    </div>
  );
};
