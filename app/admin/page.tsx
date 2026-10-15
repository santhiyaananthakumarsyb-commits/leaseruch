
import Link from "next/link";
import styles from "./admin.module.css";

const sections = [
  { icon: "▦", label: "Overview", active: true },
  { icon: "▤", label: "Pages", active: false },
  { icon: "▧", label: "Blogs", active: false },
  { icon: "☷", label: "FAQs", active: false },
  { icon: "▣", label: "Media Library", active: false },
  { icon: "⚙", label: "Settings", active: false },
];

const overview = [
  {
    label: "Website pages",
    value: "7",
    description: "Existing page routes",
  },
  {
    label: "Blog posts",
    value: "—",
    description: "CMS connection pending",
  },
  {
    label: "FAQs",
    value: "—",
    description: "CMS connection pending",
  },
  {
    label: "Media files",
    value: "—",
    description: "Storage connection pending",
  },
];

export default function AdminDashboard() {
  return (
    <div className={styles.admin}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>L</span>
          <span>
            <strong>LeaseRush</strong>
            <small>Content Studio</small>
          </span>
        </Link>

        <div className={styles.menuLabel}>WORKSPACE</div>

        <nav className={styles.navigation} aria-label="Admin navigation">
          {sections.map((section) => (
            <div
              key={section.label}
              className={`${styles.navItem} ${
                section.active ? styles.active : ""
              } ${!section.active ? styles.disabled : ""}`}
              aria-current={section.active ? "page" : undefined}
              title={
                section.active
                  ? "Current page"
                  : "Available in a future milestone"
              }
            >
              <span className={styles.navIcon} aria-hidden="true">
                {section.icon}
              </span>
              <span>{section.label}</span>
              {!section.active && (
                <span className={styles.comingSoon}>Soon</span>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.adminAvatar}>A</div>
          <div>
            <strong>Administrator</strong>
            <small>Local development</small>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <span className={styles.breadcrumb}>Workspace / Overview</span>
            <h1>Dashboard</h1>
          </div>

          <Link href="/" className={styles.viewSite}>
            ↗ View website
          </Link>
        </header>

        <section className={styles.welcome}>
          <div>
            <span className={styles.eyebrow}>CONTENT MANAGEMENT</span>
            <h2>Welcome to LeaseRush Content Studio</h2>
            <p>
              Manage your website content, pages, blogs, FAQs, and
              images from one place.
            </p>
          </div>
          <div className={styles.welcomeIcon} aria-hidden="true">
            ✎
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Website overview</h2>
              <p>Initial project overview, before CMS integration.</p>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {overview.map((item) => (
              <article className={styles.statCard} key={item.label}>
                <span className={styles.statLabel}>{item.label}</span>
                <strong className={styles.statValue}>{item.value}</strong>
                <span className={styles.statDescription}>
                  {item.description}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Content management</h2>
              <p>These sections will become editable in upcoming milestones.</p>
            </div>
          </div>

          <div className={styles.contentGrid}>
            <article className={styles.contentCard}>
              <div className={styles.contentIcon}>▤</div>
              <h3>Website pages</h3>
              <p>
                Edit homepage sections, About Us, Careers, and Terms.
              </p>
              <span className={styles.status}>Coming next</span>
            </article>

            <article className={styles.contentCard}>
              <div className={styles.contentIcon}>▧</div>
              <h3>Blog posts</h3>
              <p>
                Create articles, edit content, and manage publication.
              </p>
              <span className={styles.status}>Coming next</span>
            </article>

            <article className={styles.contentCard}>
              <div className={styles.contentIcon}>☷</div>
              <h3>FAQs</h3>
              <p>
                Update frequently asked questions and their answers.
              </p>
              <span className={styles.status}>Coming next</span>
            </article>

            <article className={styles.contentCard}>
              <div className={styles.contentIcon}>▣</div>
              <h3>Media library</h3>
              <p>
                Upload and replace logos, banners, and website images.
              </p>
              <span className={styles.status}>Coming next</span>
            </article>
          </div>
        </section>

        <footer className={styles.footer}>
          LeaseRush Content Studio · Development version
        </footer>
      </main>
    </div>
  );
}
