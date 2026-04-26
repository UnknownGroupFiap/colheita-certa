import React, { useState } from 'react';

export const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  icon,
  required = false,
  placeholder,
  disabled = false,
  className = '',
  inputProps = {},
  ...rest
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';
  const inputType = isPasswordField && showPassword ? 'text' : type;

  return (
    <div className={`input-group-custom ${className} ${error ? 'has-error' : ''}`}>
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

        <input
          id={inputId}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`input-field ${icon ? 'has-icon' : ''} ${isPasswordField ? 'has-password-toggle' : ''} ${icon && isPasswordField ? 'has-both' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...inputProps}
          {...rest}
        />

        {isPasswordField && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            tabIndex={-1}
          >
            <i className={`bi bi-${showPassword ? 'eye-slash' : 'eye'}`}></i>
          </button>
        )}
      </div>

      {error && (
        <span id={`${inputId}-error`} className="input-error" role="alert">
          <i className="bi bi-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
};

