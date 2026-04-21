import { useState, useEffect } from "react";
interface AvatarProps {
 initials: string;
 accent: string;
size: number;
}import Header from "@/components/header";
const posts = [
{
id: 1,
category: "Strategy",
title: "How Enterprise Teams Are Redefining Collaboration in the Age of AI in Nutrition",
excerpt:
"A look at how forward-thinking organizations are restructuring their workflows—and the cultural shifts required to make it stick across every level of the org chart.",
author: { name: "Miriam Okafor", role: "Chief Strategy Officer" },
date: "April 14, 2026",
readTime: "7 min read",
tag: "Featured",
accent: "#C8A96E",
initials: "MO",
},
{
id: 2,
category: "Product",
title: "Building for Scale: Lessons from Our Platform Overhaul",
excerpt:
"After 18 months of incremental patches, we made the call to rebuild from scratch. Here's what we learned and what we'd do differently.",
author: { name: "James Rutherford", role: "VP of Engineering" },
date: "April 9, 2026",
readTime: "10 min read",
tag: null,
accent: "#6E8FC8",
initials: "JR",
},
{
id: 3,
category: "Leadership",
title: "The Quiet Signals That Predict Team Burnout Before It Happens",
excerpt:
"Data from across 200 engineering teams reveals early-warning patterns most managers overlook—and simple interventions that work.",
author: { name: "Ayasha Brightwell", role: "Head of People & Culture" },
date: "March 31, 2026",
readTime: "6 min read",
tag: null,
accent: "#8FC86E",
initials: "AB",
},
{
id: 4,
category: "Finance",
title: "The CFO's New Mandate: Turning Cost Centers Into Growth Drivers",
excerpt:
"Modern finance leadership demands more than budget stewardship. We explore how the best CFOs are becoming architects of organizational agility.",
author: { name: "Tobias Engel", role: "Partner, Advisory Services" },
date: "March 22, 2026",
readTime: "8 min read",
tag: null,
accent: "#C86E8F",
initials: "TE",
},
{
id: 5,
category: "Technology",
title: "Why Most Digital Transformations Fail at the Last Mile",
excerpt:
"The technology is rarely the problem. It's the gap between deployment and adoption that kills enterprise initiatives—and here's how to close it.",
author: { name: "Priya Shankar", role: "Director of Digital Strategy" },
date: "March 18, 2026",
readTime: "9 min read",
tag: null,
accent: "#8E6EC8",
initials: "PS",
},
{
id: 6,
category: "Operations",
title: "Supply Chain Resilience: From Reactive to Predictive",
excerpt:
"Leading operators are no longer just stress-testing their supply chains—they're instrumenting them with real-time intelligence that predicts disruption weeks in advance.",
author: { name: "Conrad Hessel", role: "SVP Global Operations" },
date: "March 12, 2026",
readTime: "11 min read",
tag: null,
accent: "#C8736E",
initials: "CH",
},
{
id: 7,
category: "Culture",
title: "Designing for Inclusion: What the Research Actually Says",
excerpt:
"Beyond task forces and workshops—the structural, measurable changes that move the needle on belonging and representation inside large organizations.",
author: { name: "Dana Whitmore", role: "Chief People Officer" },
date: "March 5, 2026",
readTime: "7 min read",
tag: null,
accent: "#6EC8B8",
initials: "DW",
},
{
id: 8,
category: "Strategy",
title: "The Second Mover Advantage: When Waiting Pays Off",
excerpt:
"Conventional wisdom rewards the pioneer. But in volatile markets, the company that watches, learns, and moves second often captures far more durable ground.",
author: { name: "Alek Novak", role: "Managing Director, Growth" },
date: "February 27, 2026",
readTime: "8 min read",
tag: null,
accent: "#C8A96E",
initials: "AN",
},
{
id: 9,
category: "Product",
title: "Pricing Strategy in the Age of Value-Based Selling",
excerpt:
"Your product's price is also your positioning. Companies that understand this are unlocking revenue and loyalty that pure cost-plus models will never capture.",
author: { name: "Liesel van Dorn", role: "Head of Product Marketing" },
date: "February 19, 2026",
readTime: "6 min read",
tag: null,
accent: "#6E8FC8",
initials: "LV",
},
{
id: 10,
category: "Leadership",
title: "Executive Communication in a Skeptical Organization",
excerpt:
"When trust in leadership erodes, every message lands differently.The playbook for rebuilding credibility through transparency, consistency, and deliberate visibility.",
author: { name: "Marcus Obi", role: "Executive Coach & Advisor" },
date: "February 11, 2026",
readTime: "10 min read",
tag: null,
accent: "#8FC86E",
initials: "MO",
},
];

const categoryColors: Record<string, { bg: string; text: string }> = {
Strategy:   { bg: "#FFF8EC", text: "#A07830" },
Product:    { bg: "#EEF3FF", text: "#3A5FAA" },
Leadership: { bg: "#F0F9EC", text: "#3A7A20" },
Finance:    { bg: "#FFF0F5", text: "#A0304A" },
Technology: { bg: "#F3EEFF", text: "#6230AA" },
Operations: { bg: "#FFF2EE", text: "#AA4A30" },
Culture:    { bg: "#EEFAF8", text: "#207A6E" },
};

function useWindowWidth() {
const [width, setWidth] = useState(
typeof window !== "undefined" ? window.innerWidth : 1440
);
useEffect(() => {
const handler = () => setWidth(window.innerWidth);
window.addEventListener("resize", handler);
return () => window.removeEventListener("resize", handler);
}, []);
return width;
}

function CategoryBadge({ cat }: { cat: string }) {
const c = categoryColors[cat] || { bg: "#F0F0F0", text: "#555" };
return (
<span
style={{
fontFamily: "'Trebuchet MS',sans-serif",
fontSize: 10.5,
fontWeight: 700,
letterSpacing: "0.12em",
textTransform: "uppercase",
padding: "4px 10px",
borderRadius: 2,
background: c.bg,
color: c.text,
whiteSpace: "nowrap",
flexShrink: 0,
}}
>
{cat}
</span>
);
}

function Avatar({ initials, accent, size }: AvatarProps) {
return (
<div
style={{
width: size,
height: size,
borderRadius: "50%",
flexShrink: 0,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontFamily: "'Trebuchet MS',sans-serif",
fontSize: Math.round(size * 0.3),
fontWeight: 700,
background: accent + "22",
color: accent,
border: "1.5px solid " + accent + "55",
}}
>
{initials}
</div>
);
}

function MetaText({ children }:any) {
return (
<span
style={{
fontFamily: "'Trebuchet MS',sans-serif",
fontSize: 12,
color: "#999",
}}
>
{children}
</span>
);
}

function Dot() {
return (
<span
style={{
width: 3,
height: 3,
borderRadius: "50%",
background: "#CCC",
display: "inline-block",
verticalAlign: "middle",
flexShrink: 0,
}}
/>
);
}

function ArrowIcon() {
return (
<svg width="15" height="15" viewBox="0 0 16 16" fill="none">
<path
d="M3 8h10M9 4l4 4-4 4"
stroke="currentColor"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
);
}

export default function Blog() {
const [hovered, setHovered] = useState<number | null>(null);
const width = useWindowWidth();

// Breakpoints optimised for web app contexts
const isXXL = width >= 1600;
const isXL  = width >= 1280 && width < 1600;
const isLG  = width >= 1024 && width < 1280;
const isMD  = width >= 768  && width < 1024;
const isSM  = width < 768;

// Fluid spacing
const px = isXXL ? 80 : isXL ? 60 : isLG ? 40 : isMD ? 28 : 16;
const maxW = isXXL ? 1760 : 1400;

// Hero layout
const heroTemplate = isSM
? "1fr"
: isMD
? "1fr 1fr"
: isLG
? "1.5fr 1fr 1fr"
: isXL
? "1.7fr 1fr 1fr"
: "1.9fr 1fr 1fr";

// Bottom grid columns
const gridTemplate = isSM
? "1fr"
: isMD
? "1fr 1fr"
: isLG
? "1fr 1fr 1fr"
: isXL
? "repeat(4, 1fr)"
: "repeat(4, 1fr)";

const featured   = posts[0];
const secondary  = posts.slice(1, 3);
const gridPosts  = posts.slice(3);

const cardShadow = (id: number) =>
hovered === id
? "0 10px 36px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)"
: "0 2px 10px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)";

const cardTransform = (id: number) =>
hovered === id ? "translateY(-3px)" : "translateY(0)";

return (
<div
style={{
fontFamily: "'Georgia','Times New Roman',serif",
background: "#F7F6F2",
minHeight: "",
paddingBottom: 80,
color: "#1A1A1A",
}}
>
{/* ── GLOBAL STYLE TAG for scrollbar & selection ── */}
<style>{`* { box-sizing: border-box; margin: 0; padding: 0; } button:hover { opacity: 0.88; }`}</style>
  {/* ══ HEADER ══════════════════════════════════════════════════════ */}
 <Header/>

  {/* ══ HERO ROW ════════════════════════════════════════════════════ */}
  <section
    style={{
      maxWidth: maxW,
      margin: " auto 0",
      padding: `0 ${px}px`,
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: heroTemplate,
        gap: 20,
        alignItems: "stretch",
        padding:"100px 0px 0px 60px"
      }}
    >
      {/* ── FEATURED CARD ── */}
      <article
        style={{
          background: "#fff",
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: cardShadow(featured.id),
          transform: cardTransform(featured.id),
          transition: "box-shadow 0.25s ease, transform 0.25s ease",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={() => setHovered(featured.id)}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={{ height: 5, background: featured.accent }} />
        <div
          style={{
            padding: isXXL
              ? "48px 52px 52px"
              : isXL
              ? "40px 44px 44px"
              : "30px 32px 36px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 22,
            }}
          >
            <CategoryBadge cat={featured.category} />
            <span
              style={{
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: featured.accent,
                border: `1px solid ${featured.accent}`,
                padding: "3px 10px",
                borderRadius: 2,
              }}
            >
              {featured.tag}
            </span>
          </div>

          <h2
            style={{
              fontSize: isXXL ? 32 : isXL ? 27 : 22,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "-0.015em",
              color: "#279300",
              marginBottom: 16,
            }}
          >
            {featured.title}
          </h2>

          <p
            style={{
              fontFamily: "'Trebuchet MS',sans-serif",
              fontSize: 15,
              color: "#555",
              lineHeight: 1.75,
              marginBottom: 32,
              flex: 1,
            }}
          >
            {featured.excerpt}
          </p>

          {/* Author row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            <Avatar
              initials={featured.initials}
              accent={featured.accent}
              size={44}
            /><div>
              <p
                style={{
                  fontFamily: "'Trebuchet MS',sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#222",
                  marginBottom: 2,
                }}
              >
                {featured.author.name}
              </p>
              <p
                style={{
                  fontFamily: "'Trebuchet MS',sans-serif",
                  fontSize: 12,
                  color: "#999",
                }}
              >
                {featured.author.role}
              </p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MetaText>{featured.date}</MetaText>
              <Dot />
              <MetaText>{featured.readTime}</MetaText>
            </div>
          </div>

          <button
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#111",
              color: "#FFF",
              fontFamily: "'Trebuchet MS',sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
              padding: "13px 24px",
              borderRadius: 2,
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.18s",
            }}
          >
            Read Article
            <ArrowIcon />
          </button>
        </div>
      </article>

      {/* ── SECONDARY HERO CARDS ── */}
      {secondary.map((post) => (
        <article
          key={post.id}
          style={{
            background: "#fff",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: cardShadow(post.id),
            transform: cardTransform(post.id),
            transition: "box-shadow 0.25s ease, transform 0.25s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
          }}
          onMouseEnter={() => setHovered(post.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={{ height: 4, background: post.accent }} />
          <div
            style={{
              padding: isXXL ? "32px 32px 36px" : "24px 26px 30px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <CategoryBadge cat={post.category} />
              <MetaText>{post.readTime}</MetaText>
            </div>

            <h3
              style={{
                fontSize: isXXL ? 21 : isXL ? 18 : 16,
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#111",
                marginBottom: 12,
                letterSpacing: "-0.005em",
              }}
            >
              {post.title}
            </h3>

            <p
              style={{
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: 13.5,
                color: "#666",
                lineHeight: 1.7,
                flex: 1,
                marginBottom: 20,
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderTop: "1px solid #F0EDE8",
                paddingTop: 18,
              }}
            >
              <Avatar initials={post.initials} accent={post.accent} size={34} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'Trebuchet MS',sans-serif",fontSize: 13,
                    fontWeight: 700,
                    color: "#222",
                    marginBottom: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post.author.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: 12,
                    color: "#999",
                  }}
                >
                  {post.date}
                </p>
              </div>
              <span style={{ color: "#C0BAB0", fontSize: 20, flexShrink: 0 }}>
                →
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>

  {/* ══ SECTION LABEL ════════════════════════════════════════════════ */}
  <div
    style={{
      maxWidth: maxW,
      margin: "52px auto 0",
      padding: `0 ${px}px`,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <p
        style={{
          fontFamily: "'Trebuchet MS',sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#888",
          whiteSpace: "nowrap",
        }}
      >
        More Articles
      </p>
      <div
        style={{ flex: 1, height: 1, background: "#E0DDD6" }}
      />
      <p
        style={{
          fontFamily: "'Trebuchet MS',sans-serif",
          fontSize: 11,
          color: "#BBB",
          whiteSpace: "nowrap",
        }}
      >
        {gridPosts.length} articles
      </p>
    </div>
  </div>

  {/* ══ BOTTOM GRID ══════════════════════════════════════════════════ */}
  <section
    style={{
      maxWidth: maxW,
      margin: "20px auto 0",
      padding: `0 ${px}px`,
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: gridTemplate,
        gap: isXXL ? 20 : 16,
      }}
    >
      {gridPosts.map((post) => (
        <article
          key={post.id}
          style={{
            background: "#fff",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: cardShadow(post.id),
            transform: cardTransform(post.id),
            transition: "box-shadow 0.22s ease, transform 0.22s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
          }}
          onMouseEnter={() => setHovered(post.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Left accent stripe */}
          <div
            style={{
              width: 4,
              background: post.accent,
              flexShrink: 0,
            }}
          />

          <div
            style={{
              padding: isXXL ? "22px 24px" : "18px 20px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 11,
                flexWrap: "wrap",
              }}
            >
              <CategoryBadge cat={post.category} />
              <MetaText>{post.readTime}</MetaText>
            </div>

            <h4
              style={{
                fontSize: isXXL ? 16 : 14.5,
                fontWeight: 700,
                lineHeight: 1.45,
                color: "#111",
                marginBottom: 8,
                letterSpacing: "-0.003em",
              }}
            >
              {post.title}
            </h4>

            <p
              style={{
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: 12.5,
                color: "#777",
                lineHeight: 1.65,
                flex: 1,
                marginBottom: 16,
              }}
            >
              {post.excerpt}</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Avatar initials={post.initials} accent={post.accent} size={28} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#222",
                    marginBottom: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post.author.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: 11,
                    color: "#AAA",
                  }}
                >
                  {post.date}
                </p>
              </div>
              <span
                style={{
                  color: "#C8C2B8",
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
</div>

);
}