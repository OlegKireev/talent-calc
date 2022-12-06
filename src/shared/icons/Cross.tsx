import { SvgWrapper } from './SvgWrapper';

interface IconCrossProps {
  width?: number,
  height?: number,
  color?: string,
}

export const IconCross = ({
  width,
  height,
  color,
}: IconCrossProps) => (
  <SvgWrapper
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    color={color}
  >
    <path
      d="M17.414 6.586a2 2 0 0 0-2.828 0L12 9.172 9.414 6.586a2 2 0 1 0-2.828 2.828L9.171 12l-2.585 2.586a2 2 0 1 0 2.828 2.828L12 14.828l2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 0 0 0-2.828L14.829 12l2.585-2.586a2 2 0 0 0 0-2.828z"
    />
  </SvgWrapper>
);
