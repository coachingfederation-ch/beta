import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { supabase } from '../supabase-client.js';

const SECTION_STYLE = {
  maxWidth: 'var(--container-2xl)',
  margin: '0 auto',
  padding: '96px var(--gutter)',
};

const HEADER_ROW = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '24px',
  marginBottom: '48px',
  flexWrap: 'wrap',
  rowGap: '20px',
};

const HEADING_BLOCK = { maxWidth: '560px' };

const SECTION_HEADING = {
  fontSize: 'clamp(30px,3.6vw,46px)',
  fontWeight: 'var(--fw-extrabold)',
  letterSpacing: '-0.02em',
  color: 'var(--text-strong)',
  lineHeight: 1.1,
  margin: 0,
};

const GRID_STYLE = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '20px',
};

const CARD_STYLE = {
  background: 'var(--surface-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)',
};

const CARD_HOVER = {
  transform: 'translateY(-4px)',
  boxShadow: 'var(--shadow-lg)',
  borderColor: 'var(--border-strong)',
};

const IMG_WRAPPER = {
  height: '220px',
  overflow: 'hidden',
  background: 'var(--surface-subtle)',
};

const IMG_STYLE = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform var(--dur-slow) var(--ease-out)',
};

const PLACEHOLDER_STYLE = {
  height: '220px',
  background: 'var(--icf-indigo-50)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CARD_BODY = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  flex: 1,
};

const CATEGORY_STYLE = {
  fontSize: 'var(--fs-overline)',
  fontWeight: 'var(--fw-bold)',
  letterSpacing: 'var(--ls-overline)',
  textTransform: 'uppercase',
  color: 'var(--text-accent)',
};

const TITLE_STYLE = {
  fontSize: 'var(--fs-h3)',
  fontWeight: 'var(--fw-bold)',
  color: 'var(--text-strong)',
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
  margin: 0,
};

const DATE_STYLE = {
  fontSize: '13px',
  color: 'var(--text-subtle)',
};

const EXCERPT_STYLE = {
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-muted)',
  lineHeight: 1.6,
  flex: 1,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  margin: 0,
};

const READ_MORE_ROW = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '8px',
  borderTop: '1px solid var(--border-subtle)',
};

const READ_MORE_STYLE = {
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 'var(--fw-bold)',
  color: 'var(--text-accent)',
  textDecoration: 'none',
};

const LOADING_STYLE = {
  gridColumn: '1 / -1',
  textAlign: 'center',
  padding: '80px 20px',
  color: 'var(--text-muted)',
  fontSize: '15px',
};

const ERROR_STYLE = {
  gridColumn: '1 / -1',
  textAlign: 'center',
  padding: '80px 20px',
  color: 'var(--text-muted)',
};

const ERROR_HEADING = {
  fontSize: '22px',
  fontWeight: 'var(--fw-bold)',
  color: 'var(--text-body)',
  margin: '0 0 8px',
};

const EMPTY_STYLE = {
  gridColumn: '1 / -1',
  textAlign: 'center',
  padding: '80px 20px',
  color: 'var(--text-muted)',
  fontSize: '15px',
};

const RESPONSIVE_CSS = `
.latest-insights-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
@media (max-width: 1024px) {
  .latest-insights-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .latest-insights-grid { grid-template-columns: 1fr; }
}
.latest-insights-card:hover .latest-insights-img {
  transform: scale(1.04);
}
`;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false);

  const href = `article.html?slug=${encodeURIComponent(article.slug)}`;
  const category = article.category?.name || '';
  const img = article.featured_image_url;

  const mergedCard = hovered ? { ...CARD_STYLE, ...CARD_HOVER } : CARD_STYLE;

  return (
    <a
      href={href}
      className="latest-insights-card"
      style={mergedCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {img ? (
        <div style={IMG_WRAPPER}>
          <img
            className="latest-insights-img"
            src={img}
            alt={article.featured_image_alt || article.title || ''}
            loading="lazy"
            style={IMG_STYLE}
          />
        </div>
      ) : (
        <div style={PLACEHOLDER_STYLE}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}
      <div style={CARD_BODY}>
        {category && <span className="icf-overline" style={CATEGORY_STYLE}>{category}</span>}
        <h3 style={TITLE_STYLE}>{article.title}</h3>
        {article.published_at && <span style={DATE_STYLE}>{formatDate(article.published_at)}</span>}
        {article.excerpt && <p style={EXCERPT_STYLE}>{article.excerpt}</p>}
        <div style={READ_MORE_ROW}>
          <span style={DATE_STYLE}>{article.author || ''}</span>
          <span style={READ_MORE_STYLE}>Read more &rarr;</span>
        </div>
      </div>
    </a>
  );
}

function LatestInsights() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    (async () => {
      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('id, title, slug, excerpt, featured_image_url, featured_image_alt, author, published_at, category:categories(name, slug)')
        .eq('status', 'published')
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(4);

      if (!active) return;

      if (fetchError) {
        setError(true);
        setArticles([]);
        return;
      }
      setArticles(data || []);
    })();

    return () => { active = false; };
  }, []);

  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <section style={SECTION_STYLE}>
        <div style={HEADER_ROW}>
          <div style={HEADING_BLOCK}>
            <p className="icf-overline" style={{ margin: '0 0 14px' }}>Coaching in Action</p>
            <h2 style={SECTION_HEADING}>Building a more human future</h2>
          </div>
          <a href="insights.html" className="btn btn-secondary btn-md">Explore Insights</a>
        </div>

        <div className="latest-insights-grid">
          {articles === null && (
            <div style={LOADING_STYLE}>Loading articles…</div>
          )}
          {error && (
            <div style={ERROR_STYLE}>
              <h3 style={ERROR_HEADING}>Could not load articles</h3>
              <p>Please try again later.</p>
            </div>
          )}
          {articles !== null && !error && articles.length === 0 && (
            <div style={EMPTY_STYLE}>No articles published yet.</div>
          )}
          {articles !== null && !error && articles.length > 0 && (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export function mountLatestInsights(rootElement) {
  const root = createRoot(rootElement);
  root.render(<LatestInsights />);
}

export default LatestInsights;
