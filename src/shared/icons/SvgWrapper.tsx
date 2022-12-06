import { ReactNode } from 'react';

interface SvgWrapperProps {
  width: number
  height: number
  viewBox: string
  color?: string
  children: ReactNode
}

export const SvgWrapper = ({
  width,
  height,
  viewBox,
  color,
  children,
}: SvgWrapperProps) => (
  <svg
    style={{ pointerEvents: 'none' }}
    fill={color || 'currentColor'}
    stroke="none"
    width={width}
    height={height}
    viewBox={viewBox}
  >
    {children}
  </svg>
);
