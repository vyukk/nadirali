import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 'case-study-providence-anesthesia',
      badge: 'Case Study',
      title: 'How Providence Anesthesia is positioning for growth with Amperos\'s agentic workforce',
      excerpt: 'Faced with surging surgical case volumes and payer staffing delays, Providence Anesthesia deployed Amperos to handle first-touch denials and accelerate cash flow.',
      date: 'October 2026',
      readTime: '6 min read',
      author: 'David Reynolds, CFO'
    },
    {
      id: 'boulder-care-telehealth-substance-use',
      badge: 'Case Study',
      title: 'Boulder Care engages Amperos to automate denial and collections work with AI agents',
      excerpt: 'Rapid national expansion required a scalable billing engine. Discover how Boulder Care reduced administrative overhead while increasing recovery on complex behavioral claims.',
      date: 'September 2026',
      readTime: '8 min read',
      author: 'Mitzi Yue, SVP of Finance'
    },
    {
      id: 'playbook-2026-denial-reduction',
      badge: 'RCM Insights',
      title: 'The 2026 Playbook for Denials & AR Backlog Reduction',
      excerpt: 'A comprehensive analysis of Medicare Advantage prior authorization denials, NCCI edits, and the tactical steps leading health groups are taking to protect margins.',
      date: 'August 2026',
      readTime: '10 min read',
      author: 'Amperos Research Team'
    },
    {
      id: 'ai-vs-offshore-billing',
      badge: 'Industry Trends',
      title: 'Why Traditional Offshore Medical Billing is Giving Way to Agentic AI',
      excerpt: 'Human call centers are expensive, slow, and error-prone. Explore how deterministic AI workflows with clinical specialist oversight are rewriting the unit economics of collections.',
      date: 'July 2026',
      readTime: '5 min read',
      author: 'Alex Thompson, CEO'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white pt-28 pb-20">
      <div className="container max-w-5xl flex flex-col gap-12">
        
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a39893]">
            Insights & Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#fcf7f4]">
            Stories from the forefront of revenue cycle innovation
          </h1>
          <p className="text-base sm:text-lg text-white/70">
            Read how forward-thinking clinical groups, CFOs, and billing leaders are transforming their collections with Amperos.
          </p>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#141210] border border-white/10 p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                  <span className="rounded-sm border border-stone-200/30 px-2 py-0.5 font-medium text-stone-200 uppercase tracking-wide">
                    {post.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="size-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-serif text-[#fcf7f4] leading-tight group-hover:text-amber-200 transition-colors">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>By {post.author}</span>
                <span className="flex items-center gap-1 text-amber-200 font-medium group-hover:translate-x-0.5 transition-transform">
                  Read article <ArrowRight className="size-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}

