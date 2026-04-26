export function Skeleton({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
  animation = 'pulse'
}) {
  const classes = [
    'skeleton',
    `skeleton-${variant}`,
    `skeleton-${animation}`,
    className
  ].filter(Boolean).join(' ');

  const style = {
    ...(width && { width }),
    ...(height && { height })
  };

  const skeletons = Array.from({ length: count }, (_, i) => (
    <div key={i} className={classes} style={style} aria-hidden="true" />
  ));

  return count === 1 ? skeletons[0] : <>{skeletons}</>;
}