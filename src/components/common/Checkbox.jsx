export function Checkbox({
  name,
  checked,
  onChange,
  children,
  disabled = false,
  indeterminate = false,
  className = ''
}) {
  return (
    <label className={`checkbox-label ${disabled ? 'checkbox-disabled' : ''} ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={input => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
      />
      <span className="checkbox-indicator"></span>
      <span className="checkbox-text">{children}</span>
    </label>
  );
}