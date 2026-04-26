export function Spinner({
  size = 'md',
  variant = 'primary',
  className = '',
  label = 'Loading'
}) {
  const classes = [
    'spinner',
    `spinner-${size}`,
    `spinner-${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
    </div>
  );
}