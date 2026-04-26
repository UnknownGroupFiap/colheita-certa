export function Alert({
  type = 'info',
  children,
  icon,
  dismissible = false,
  onDismiss
}) {
  const typeIcons = {
    success: 'check-circle',
    error: 'exclamation-circle',
    warning: 'exclamation-triangle',
    info: 'info-circle'
  };

  const defaultIcon = icon || typeIcons[type];

  return (
    <div className={`alert alert-${type}`} role="alert">
      {defaultIcon && <i className={`bi bi-${defaultIcon}`}></i>}
      <div className="alert-content">{children}</div>
      {dismissible && (
        <button
          className="alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <i className="bi bi-x"></i>
        </button>
      )}
    </div>
  );
}