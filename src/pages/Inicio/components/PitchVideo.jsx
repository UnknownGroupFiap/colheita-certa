function PitchVideo() {
  return (
    <section className="pitch-video-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pitch Video</h2>
          <p className="section-subtitle">
            Conheça nossa proposta em poucos minutos
          </p>
        </div>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/FL9ThVxMK0g" 
            title="Pitch Video - Colheita Certa"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default PitchVideo;
