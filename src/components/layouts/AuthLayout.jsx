import Header from '../Header';

export function AuthLayout({
  children,
  className = ''
}) {
  return (
    <>
      <Header />
      <main className={`main auth-main ${className}`} style={{
        minHeight: 'calc(100vh - 80px)',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)'
      }}>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  );
}