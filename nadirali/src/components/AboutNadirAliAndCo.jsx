import { Link } from 'react-router-dom'
import { asset } from '../data/siteData'

export default function AboutNadirAliAndCo() {
	return <section className="intro shell"><div><p className="eyebrow dark">ABOUT NADIR ALI & CO.</p><h2>Music, made with history.</h2><p>It all started in 1885 when Ali, a musician in the British Army, and his cousin Imam Baksh decided to import brass instruments. The family began manufacturing instruments at Jali Kothi around 1911.</p><p>Today, every stage from cutting brass sheet to polishing, assembling and packing is completed by our skilled team in Meerut.</p><Link className="text-button" to="/nadir-ali-2/">Read our history →</Link></div><img src={asset('faez-aftab-nadir-ali-and-company.jpg')} alt="Faez Aftab with a trumpet" /></section>
}
