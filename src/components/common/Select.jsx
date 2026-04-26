export function Select({ label, name, value, onChange, required, children, icon, error }) {
  const inputId = `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-group-custom ${error ? 'has-error' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {icon && (
          <span className="input-icon">
            <i className={`bi bi-${icon}`} aria-hidden="true"></i>
          </span>
        )}
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-field ${icon ? 'has-icon' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        >
          {children}
        </select>
      </div>
      {error && (
        <span id={`${inputId}-error`} className="input-error" role="alert">
          <i className="bi bi-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
}