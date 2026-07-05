import React from 'react';

export const AnimatedBackground: React.FC = () => {
  // 25 floating particles with random positions, delays, durations, and twinkling effects
  const particles = [
    { top: '8%', left: '4%', size: 'w-1 h-1', delay: '0s', duration: '20s', type: 'up' },
    { top: '15%', left: '88%', size: 'w-1.5 h-1.5', delay: '3.5s', duration: '25s', type: 'down' },
    { top: '22%', left: '16%', size: 'w-1 h-1', delay: '1s', duration: '22s', type: 'up' },
    { top: '30%', left: '72%', size: 'w-1.5 h-1.5', delay: '5.5s', duration: '28s', type: 'down' },
    { top: '38%', left: '9%', size: 'w-1 h-1', delay: '2s', duration: '21s', type: 'up' },
    { top: '45%', left: '80%', size: 'w-1.5 h-1.5', delay: '7s', duration: '26s', type: 'down' },
    { top: '52%', left: '14%', size: 'w-1 h-1', delay: '9s', duration: '23s', type: 'up' },
    { top: '58%', left: '86%', size: 'w-1.5 h-1.5', delay: '4s', duration: '29s', type: 'down' },
    { top: '65%', left: '26%', size: 'w-1 h-1', delay: '0.5s', duration: '24s', type: 'up' },
    { top: '72%', left: '90%', size: 'w-1.5 h-1.5', delay: '8s', duration: '31s', type: 'down' },
    { top: '78%', left: '6%', size: 'w-1 h-1', delay: '6s', duration: '22s', type: 'up' },
    { top: '85%', left: '78%', size: 'w-1.5 h-1.5', delay: '1.5s', duration: '27s', type: 'down' },
    { top: '92%', left: '18%', size: 'w-1 h-1', delay: '11s', duration: '25s', type: 'up' },
    
    // Middle section particles
    { top: '50%', left: '48%', size: 'w-1 h-1', delay: '3s', duration: '20s', type: 'up' },
    { top: '25%', left: '42%', size: 'w-1.5 h-1.5', delay: '7.5s', duration: '27s', type: 'down' },
    { top: '75%', left: '52%', size: 'w-1 h-1', delay: '10s', duration: '26s', type: 'up' },
    { top: '60%', left: '35%', size: 'w-1.5 h-1.5', delay: '2s', duration: '23s', type: 'down' },
    { top: '40%', left: '58%', size: 'w-1 h-1', delay: '5s', duration: '24s', type: 'up' },
    { top: '15%', left: '54%', size: 'w-1.5 h-1.5', delay: '9.5s', duration: '28s', type: 'down' },
    { top: '88%', left: '42%', size: 'w-1 h-1', delay: '12s', duration: '22s', type: 'up' },
    
    // Additional floating indicators
    { top: '5%', left: '68%', size: 'w-1 h-1', delay: '1s', duration: '19s', type: 'down' },
    { top: '95%', left: '62%', size: 'w-1.5 h-1.5', delay: '13s', duration: '25s', type: 'up' },
    { top: '33%', left: '30%', size: 'w-1 h-1', delay: '4.5s', duration: '21s', type: 'up' },
    { top: '68%', left: '68%', size: 'w-1.5 h-1.5', delay: '6.5s', duration: '29s', type: 'down' },
    { top: '82%', left: '33%', size: 'w-1 h-1', delay: '8.5s', duration: '24s', type: 'up' }
  ];

  // Drifting binary code columns (extremely faint, 0.02 opacity, technical aesthetics)
  const codeBlocks = [
    { top: '18%', left: '12%', content: '0101\n1010\n0110', duration: '35s', type: 'up' },
    { top: '55%', left: '85%', content: '1010\n0101\n1100', duration: '40s', type: 'down' },
    { top: '78%', left: '22%', content: '0110\n1100\n0011', duration: '32s', type: 'up' },
    { top: '35%', left: '72%', content: '1100\n0011\n1010', duration: '34s', type: 'down' },
  ];

  return (
    <div className="fixed inset-0 -z-50 w-full h-full bg-[#05070F] overflow-hidden pointer-events-none">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Grid Scan Laser Sweeps */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.25)] animate-laser-sweep pointer-events-none" />
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-mint/15 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-laser-sweep [animation-delay:7.5s] pointer-events-none" />

      {/* Precise Custom glow colors requested by user */}
      {/* Glow 1: Royal Blue - Top Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blue-glow opacity-80 animate-glow" />
      
      {/* Glow 2: Mint Green - Bottom Right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] rounded-full mint-glow opacity-70 animate-glow [animation-delay:5s]" />
      
      {/* Glow 3: Electric Blue - Center Right */}
      <div className="absolute top-[35%] right-[5%] w-[45vw] h-[45vw] rounded-full electric-glow opacity-60 animate-pulse-slow" />

      {/* Glow 4: Mint Green - Bottom Left */}
      <div className="absolute bottom-[5%] left-[-5%] w-[45vw] h-[45vw] rounded-full mint-glow opacity-60 animate-glow [animation-delay:8s]" />

      {/* Glow 5: Electric Blue - Bottom Center/Right */}
      <div className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] rounded-full electric-glow opacity-50 animate-pulse-slow [animation-delay:6s]" />

      {/* Faint Rotating Wireframes */}
      <div className="absolute top-[18%] right-[-6%] w-[400px] h-[400px] rounded-full border border-white/[0.012] border-dashed animate-spin-very-slow pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-8%] w-[500px] h-[500px] rounded-full border border-white/[0.01] border-double animate-spin-very-slow [animation-duration:75s] pointer-events-none" />
      
      {/* Drifting Binary Watermarks */}
      {codeBlocks.map((block, idx) => (
        <pre
          key={`bin-${idx}`}
          className={`absolute font-mono text-[8px] leading-normal tracking-widest select-none pointer-events-none text-brand/3 whitespace-pre ${
            block.type === 'up' ? 'animate-float-slow' : 'animate-float-reverse'
          }`}
          style={{
            top: block.top,
            left: block.left,
            animationDuration: block.duration,
            opacity: 0.02,
          }}
        >
          {block.content}
        </pre>
      ))}

      {/* Floating Particles (Twinkling Stars) */}
      {particles.map((p, idx) => (
        <div
          key={`part-${idx}`}
          className={`absolute rounded-full ${p.size} ${
            idx % 2 === 0 
              ? 'bg-brand/30 shadow-[0_0_6px_rgba(59,130,246,0.25)]' 
              : 'bg-brand-mint/25 shadow-[0_0_6px_rgba(16,185,129,0.2)]'
          } ${
            p.type === 'up' ? 'animate-float-slow' : 'animate-float-reverse'
          } ${
            idx % 3 === 0 ? 'animate-twinkle' : ''
          }`}
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070F]/50 to-[#05070F]" />
    </div>
  );
};
