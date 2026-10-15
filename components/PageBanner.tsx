import "../styles/page-banner.css";

export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay" />
      <div className="page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        <p className="page-banner-crumbs">
          <a href="/">Home</a> <span>/</span> {title}
        </p>
      </div>
    </section>
  );
}