import Header from '../Header';
import Footer from '../Footer';

export function PageLayout({
  children,
  hero = null,
  className = '',
  fullWidth = false
}) {
  return (
    <>
      <Header />

      {hero && (
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content animate-fade-in">
            {hero}
          </div>
        </section>
      )}

      <main className={`main ${className}`}>
        {fullWidth ? (
          children
        ) : (
          <div className="container">
            {children}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export function HeroSection({
  title,
  subtitle,
  actions,
  variant = 'primary'
}) {
  return (
    <div className={`hero-section hero-${variant}`}>
      <h1 className="hero-title animate-slide-up">
        {title}
      </h1>
      {subtitle && (
        <p className="hero-subtitle animate-slide-up"
           style={{animationDelay: '100ms'}}>
          {subtitle}
        </p>
      )}
      {actions && (
        <div className="hero-actions animate-scale-in"
             style={{animationDelay: '200ms'}}>
          {actions}
        </div>
      )}
    </div>
  );
}

export function Section({
  title,
  subtitle,
  children,
  className = '',
  centered = false
}) {
  return (
    <section className={`section ${className}`}>
      {(title || subtitle) && (
        <div className={`section-header ${centered ? 'text-center' : ''}`}>
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function Grid({
  children,
  cols = 3,
  gap = 'default',
  className = ''
}) {
  const gapClass = gap === 'large' ? 'gap-lg' : gap === 'small' ? 'gap-sm' : '';

  return (
    <div className={`grid grid-${cols} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}

export function Container({
  children,
  size = 'default',
  className = ''
}) {
  const sizeClass = size === 'small' ? 'container-sm' :
                    size === 'large' ? 'container-lg' : '';

  return (
    <div className={`container ${sizeClass} ${className}`}>
      {children}
    </div>
  );
}

export default PageLayout;