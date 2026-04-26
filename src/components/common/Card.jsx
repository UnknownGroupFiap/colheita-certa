export function Card({
  children,
  title,
  subtitle,
  footer,
  className = '',
  variant = 'default',
  hoverable = false,
  bordered = true
}) {
  const classes = [
    'card',
    variant !== 'default' && `card-${variant}`,
    hoverable && 'card-hoverable',
    !bordered && 'card-borderless',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}