import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
  className = '',
  ...rest
}) => {
  const buttonClass = `
    btn
    btn-${variant}
    btn-${size}
    ${fullWidth ? 'btn-full-width' : ''}
    ${loading ? 'btn-loading' : ''}
    ${className}
  `.trim();

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <span className="btn-spinner" aria-hidden="true">
            <i className="bi bi-arrow-repeat"></i>
          </span>
          <span>Carregando...</span>
        </>
      );
    }

    const iconElement = icon && (
      <i className={`bi bi-${icon} btn-icon`} aria-hidden="true"></i>
    );

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children}
          {iconElement}
        </>
      );
    }

    return (
      <>
        {iconElement}
        {children}
      </>
    );
  };

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export const ButtonGroup = ({ children, className = '', ...rest }) => {
  return (
    <div className={`btn-group ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Button;