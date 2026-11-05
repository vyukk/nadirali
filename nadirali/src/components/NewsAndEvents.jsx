import { Link } from 'react-router-dom'
import { asset, news } from '../data/siteData'

export default function NewsAndEvents() {
	return <section className="news-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow dark">FROM OUR JOURNAL</p><h2>News & Events</h2></div><Link className="text-button" to="/news/">View all →</Link></div><div className="news-grid">{news.map((item) => <article className="news-card" key={item.title}><img src={asset(item.image)} alt="" /><div><p className="date">{item.date}</p><h3>{item.title}</h3><Link className="text-button" to="/news/">Continue reading →</Link></div></article>)}</div></div></section>
}
