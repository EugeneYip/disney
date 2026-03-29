import React, { useState } from "react";

const ICON_PATHS = {
  spark: [
    { type: "path", d: "M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Z" },
    { type: "path", d: "M5 18l.8 2.2L8 21l-2.2.8L5 24l-.8-2.2L2 21l2.2-.8L5 18Z", transform: "translate(0 -2)" },
    { type: "path", d: "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" }
  ],
  castle: [
    { type: "path", d: "M4 21V10l3 2V6l3 2V3l2 2 2-2v5l3-2v6l3-2v11H4Z" },
    { type: "path", d: "M10 21v-4a2 2 0 0 1 4 0v4" },
    { type: "path", d: "M7 14h.01M17 14h.01", linecap: "round" }
  ],
  film: [
    { type: "rect", x: "3", y: "5", width: "18", height: "14", rx: "2" },
    { type: "path", d: "M7 5v14M17 5v14M3 9h4M17 9h4M3 15h4M17 15h4" }
  ],
  globe: [
    { type: "circle", cx: "12", cy: "12", r: "9" },
    { type: "path", d: "M3 12h18M12 3c2.5 2.4 4 5.7 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.7-4-9s1.5-6.6 4-9Z" }
  ],
  layers: [
    { type: "path", d: "M12 3 3 8l9 5 9-5-9-5Z" },
    { type: "path", d: "M3 12l9 5 9-5" },
    { type: "path", d: "M3 16l9 5 9-5" }
  ],
  network: [
    { type: "circle", cx: "6", cy: "6", r: "2" },
    { type: "circle", cx: "18", cy: "6", r: "2" },
    { type: "circle", cx: "12", cy: "18", r: "2" },
    { type: "path", d: "M8 6h8M7.4 7.4l3.2 8M16.6 7.4l-3.2 8" }
  ],
  scale: [
    { type: "path", d: "M12 4v16M6 7h12M4 20h16" },
    { type: "path", d: "M8 7 5 12h6L8 7Zm8 0-3 5h6l-3-5Z" }
  ],
  chart: [
    { type: "path", d: "M4 20V6M4 20h16" },
    { type: "path", d: "M8 16v-4M12 16V8M16 16v-7" }
  ],
  puzzle: [
    { type: "path", d: "M9 4h3a2 2 0 1 1 4 0h3v5a2 2 0 1 0 0 4v5h-5a2 2 0 1 1-4 0H5v-5a2 2 0 1 0 0-4V4h4Z" }
  ],
  compass: [
    { type: "circle", cx: "12", cy: "12", r: "9" },
    { type: "path", d: "M15.5 8.5 14 14l-5.5 1.5L10 10l5.5-1.5Z" }
  ],
  building: [
    { type: "rect", x: "4", y: "4", width: "16", height: "17", rx: "1" },
    { type: "path", d: "M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2M11 21v-4h2v4" }
  ],
  arrow: [
    { type: "path", d: "M5 12h14" },
    { type: "path", d: "m13 6 6 6-6 6" }
  ],
  book: [
    { type: "path", d: "M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" },
    { type: "path", d: "M8 4v16" }
  ],
  clock: [
    { type: "circle", cx: "12", cy: "12", r: "9" },
    { type: "path", d: "M12 7v5l3 2" }
  ],
  menu: [
    { type: "path", d: "M4 7h16M4 12h16M4 17h16", linecap: "round" }
  ],
  translate: [
    { type: "path", d: "M4 6h8M8 4v2c0 4-2 7-5 9" },
    { type: "path", d: "M4 15c2 0 5 1 8 4" },
    { type: "path", d: "M15 6h5" },
    { type: "path", d: "M17.5 4v2" },
    { type: "path", d: "M14 18l3.5-8 3.5 8" },
    { type: "path", d: "M15.2 15h4.6" }
  ]
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const nodes = ICON_PATHS[name] || ICON_PATHS.spark;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
      {nodes.map((node, idx) => {
        if (node.type === "path") {
          return <path key={idx} d={node.d} transform={node.transform} strokeLinecap={node.linecap || "round"} strokeLinejoin="round" />;
        }
        if (node.type === "circle") {
          return <circle key={idx} cx={node.cx} cy={node.cy} r={node.r} />;
        }
        if (node.type === "rect") {
          return <rect key={idx} x={node.x} y={node.y} width={node.width} height={node.height} rx={node.rx || 0} />;
        }
        return null;
      })}
    </svg>
  );
}

function LangBlock({ mode, en, zh, enClassName = "", zhClassName = "" }) {
  if (mode === "en") return <div className={enClassName}>{en}</div>;
  if (mode === "zh") return <div className={zhClassName}>{zh}</div>;
  return (
    <div className="space-y-1.5">
      <div className={enClassName}>{en}</div>
      <div className={zhClassName || "text-stone-600"}>{zh}</div>
    </div>
  );
}

function SectionShell({ id, eyebrow, icon, titleEn, titleZh, mode, children, right }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[28px] border border-stone-200/90 bg-white/70 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur md:p-7">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#FCFAF2] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2} />
            <span>{eyebrow}</span>
          </div>
          <LangBlock
            mode={mode}
            en={<h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 md:text-[30px]">{titleEn}</h2>}
            zh={<h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 md:text-[30px]">{titleZh}</h2>}
            zhClassName="font-serif text-2xl font-semibold tracking-tight text-stone-900 md:text-[30px]"
          />
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}

function MiniKpi({ mode, labelEn, labelZh, valueEn, valueZh, tone = "plum" }) {
  const toneMap = {
    plum: "border-[#622954]/15 bg-[#622954]/6 text-[#622954]",
    teal: "border-[#2E5C6E]/15 bg-[#2E5C6E]/6 text-[#2E5C6E]",
    bronze: "border-[#A67C52]/15 bg-[#A67C52]/7 text-[#8A6138]"
  };
  return (
    <div className={`rounded-2xl border px-3 py-3 ${toneMap[tone]}`}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70">
        {mode === "zh" ? labelZh : labelEn}
      </div>
      <div className="mt-2 text-lg font-semibold leading-none">{mode === "zh" ? valueZh : valueEn}</div>
    </div>
  );
}

function Badge({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${className}`}>{children}</span>;
}

function StatBar({ label, value, max, color, suffix = "", note }) {
  const width = `${Math.max(10, (value / max) * 100)}%`;
  return (
    <div className="space-y-1.5">
      <div className="flex items-end justify-between gap-4 text-sm">
        <div className="font-medium text-stone-700">{label}</div>
        <div className="text-right">
          <div className="font-semibold text-stone-900">{value.toLocaleString()}{suffix}</div>
          {note ? <div className="text-[11px] text-stone-500">{note}</div> : null}
        </div>
      </div>
      <div className="h-2.5 rounded-full bg-stone-200">
        <div className="h-2.5 rounded-full" style={{ width, backgroundColor: color }} />
      </div>
    </div>
  );
}

export default function DisneyCorporateStrategyInfrastructure() {
  const [mode, setMode] = useState("en");
  const [toggleOpen, setToggleOpen] = useState(false);

  const nav = [
    { id: "overview", en: "Overview", zh: "總覽", icon: "compass" },
    { id: "timeline", en: "Expansion Logic", zh: "擴張邏輯", icon: "clock" },
    { id: "scope", en: "Industry Scope", zh: "產業範圍", icon: "layers" },
    { id: "relatedness", en: "Relatedness", zh: "相關性", icon: "network" },
    { id: "five-levels", en: "Five Levels", zh: "五層次框架", icon: "building" },
    { id: "hq", en: "HQ Design", zh: "總部設計", icon: "scale" },
    { id: "economics", en: "Economics", zh: "經濟邏輯", icon: "chart" },
    { id: "answers", en: "Study Answers", zh: "七題作答", icon: "book" }
  ];

  const timeline = [
    {
      year: "1923",
      enTitle: "Animation studio founded",
      zhTitle: "動畫工作室成立",
      enBody: "The original asset was creative content making. This is the root of the whole corporate system.",
      zhBody: "最初的核心資產是內容創作能力。整個企業系統都從這裡長出來。"
    },
    {
      year: "1937",
      enTitle: "Snow White proves feature-length storytelling",
      zhTitle: "《白雪公主》證明長篇動畫可行",
      enBody: "Disney showed it could create full-length cinematic IP, not just shorts.",
      zhBody: "Disney 證明自己不只會做短篇，也能把角色與故事拉成長篇電影。"
    },
    {
      year: "1955",
      enTitle: "Disneyland opens",
      zhTitle: "Disneyland 開幕",
      enBody: "A content company moved into physical monetization. Parks became a high-margin way to turn stories into recurring cash flow.",
      zhBody: "內容公司進入實體變現。樂園成為把故事轉成高利潤、可重複現金流的方式。"
    },
    {
      year: "1957",
      enTitle: "Walt’s synergy map",
      zhTitle: "Walt 的協同地圖",
      enBody: "Creative talent sits at the center, feeding TV, music, publications, licensing, and Disneyland. The franchise machine is old, not new.",
      zhBody: "以 Creative Talent 為中心，向外連到電視、音樂、出版、授權與 Disneyland。這套 franchise machine 很早就存在，不是近年的新發明。"
    },
    {
      year: "1971",
      enTitle: "Disney World scales the resort model",
      zhTitle: "Disney World 放大度假園區模式",
      enBody: "The firm proved the park system could be a destination engine, not a single-site curiosity.",
      zhBody: "公司證明樂園不只是單點景點，而是可擴張的目的地型商業模式。"
    },
    {
      year: "1984–2005",
      enTitle: "Eisner expands cross-selling",
      zhTitle: "Eisner 時期放大交叉銷售",
      enBody: "Television, stores, home video, parks, and branding were pushed harder under a stronger central synergy logic.",
      zhBody: "在更強的中央協同邏輯下，電視、商店、家用影音、樂園與品牌管理被更積極地串起來。"
    },
    {
      year: "2006–2019",
      enTitle: "Iger adds Pixar, Marvel, Lucasfilm, Fox, and Disney+",
      zhTitle: "Iger 納入 Pixar、Marvel、Lucasfilm、Fox 與 Disney+",
      enBody: "Iger’s three pillars were creative content, technology, and international expansion. The firm moved from owning stories to owning more of the distribution stack too.",
      zhBody: "Iger 的三大支柱是創意內容、科技、與國際擴張。公司不只擴大內容，也逐步掌握更多配銷與平台能力。"
    },
    {
      year: "2020–2022",
      enTitle: "Chapek recentralizes via DMED",
      zhTitle: "Chapek 透過 DMED 再集中化",
      enBody: "The question shifted from portfolio logic to organizational fit. The issue was no longer whether Disney had synergy, but whether HQ was structuring it correctly.",
      zhBody: "問題從組合邏輯轉向組織契合。重點不再只是 Disney 有沒有 synergy，而是總部有沒有用對方式去組織它。"
    }
  ];

  const industries = [
    {
      icon: "film",
      enTitle: "Film and TV content production",
      zhTitle: "影視內容製作",
      enBody: "Studios, animation, franchise development, sequel and character pipelines.",
      zhBody: "電影、動畫、角色宇宙、續作與 franchise 開發。",
      chips: ["Disney Studios", "Pixar", "Marvel", "Lucasfilm", "Fox"]
    },
    {
      icon: "layers",
      enTitle: "Streaming and media distribution",
      zhTitle: "串流與媒體配銷",
      enBody: "Disney+, Hulu, and ESPN+ moved Disney closer to direct-to-consumer control.",
      zhBody: "Disney+、Hulu、ESPN+ 讓 Disney 更接近直接面向消費者。",
      chips: ["Disney+", "Hulu", "ESPN+"]
    },
    {
      icon: "building",
      enTitle: "Broadcast and cable networks",
      zhTitle: "廣播與有線電視頻道",
      enBody: "ABC and ESPN remain part of the broader monetization and promotion system.",
      zhBody: "ABC 與 ESPN 仍是整體變現與推廣系統的一部分。",
      chips: ["ABC", "ESPN", "Disney Channel"]
    },
    {
      icon: "castle",
      enTitle: "Parks, resorts, and cruises",
      zhTitle: "樂園、度假村與郵輪",
      enBody: "The physical world converts IP into premium, recurring, high-margin experiences.",
      zhBody: "實體世界把 IP 轉成高價值、可重複、高利潤的體驗。",
      chips: ["Disneyland", "Disney World", "Cruise Line", "Aulani"]
    },
    {
      icon: "spark",
      enTitle: "Consumer products and licensing",
      zhTitle: "消費品與授權",
      enBody: "Merchandise, publishing, games, retail, and licensing extend the lifetime value of every franchise.",
      zhBody: "商品、出版、遊戲、零售與授權延長每個 franchise 的生命週期價值。",
      chips: ["Merchandise", "Publishing", "Retail", "Games"]
    }
  ];

  const resources = [
    {
      kind: "Public goods",
      kindZh: "公共財型資產",
      color: "#2E5C6E",
      en: ["Brand equity", "Characters and IP library", "Best practices", "Audience trust"],
      zh: ["品牌資產", "角色與 IP 庫", "最佳實務", "觀眾信任"]
    },
    {
      kind: "Private goods",
      kindZh: "私人財型資產",
      color: "#622954",
      en: ["Distribution decisions", "Streaming infrastructure", "Scarce creative attention", "Budget allocation"],
      zh: ["配銷決策", "串流基礎設施", "稀缺創意注意力", "預算分配"]
    }
  ];

  const fiveLevels = [
    {
      icon: "spark",
      enTitle: "Firm level",
      zhTitle: "企業層次",
      enBody: "Disney wins when scope, positioning, activities, resources, knowledge, leadership, and control fit together. This is where the Chapek problem becomes visible.",
      zhBody: "當範疇、定位、活動、資源、知識、領導與控制彼此契合時，Disney 才能贏。Chapek 的問題主要就在這一層暴露。"
    },
    {
      icon: "layers",
      enTitle: "Industry level",
      zhTitle: "產業層次",
      enBody: "Disney is not in one industry. Film, streaming, parks, networks, and licensing each have different economics, competitors, and profit structures.",
      zhBody: "Disney 並不只在單一產業競爭。電影、串流、樂園、頻道與授權，各自有不同的經濟結構、競爭者與利潤邏輯。"
    },
    {
      icon: "network",
      enTitle: "Meso or cluster level",
      zhTitle: "中觀或群聚層次",
      enBody: "This is where complements matter. The value of films, parks, merchandise, cruises, and channels rises because they feed one another.",
      zhBody: "這一層重點在互補。電影、樂園、商品、郵輪與頻道彼此抬高對方的價值。"
    },
    {
      icon: "building",
      enTitle: "Macro or national level",
      zhTitle: "總體或國家層次",
      enBody: "Demand conditions, regulation, labor systems, and local institutions shape how well Disney can operate in different markets.",
      zhBody: "各地需求條件、法規、勞動體系與制度環境，會改變 Disney 在不同市場的可行性。"
    },
    {
      icon: "globe",
      enTitle: "Meta or supranational level",
      zhTitle: "超國家層次",
      enBody: "Geopolitics, cross-border regulation, and platform competition affect international expansion and ownership constraints, especially in mainland China and Europe.",
      zhBody: "地緣政治、跨境規則與平台競爭，會影響國際擴張與持股限制，特別是在大陸地區與歐洲。"
    }
  ];

  const ceoModels = [
    {
      nameEn: "Walt Disney",
      nameZh: "Walt Disney",
      years: "1923–1966",
      tone: "#A67C52",
      en: "Creative talent at the center. The original synergy logic treated stories as seeds for multiple businesses.",
      zh: "以 Creative Talent 為中心。最早的協同邏輯，是把故事當成多事業延伸的種子。"
    },
    {
      nameEn: "Michael Eisner",
      nameZh: "Michael Eisner",
      years: "1984–2005",
      tone: "#2E5C6E",
      en: "Centralized branding and aggressive cross-promotion. Strong growth, but late-stage overpush created conflict and fatigue.",
      zh: "集中品牌管理與積極交叉推廣。成長很強，但後期 push 過度，帶來衝突與疲乏。"
    },
    {
      nameEn: "Bob Iger",
      nameZh: "Bob Iger",
      years: "2005–2020",
      tone: "#566C5C",
      en: "Decentralized creative accountability with five SBUs, while HQ focused on big bets: Pixar, Marvel, Lucasfilm, BamTech, Fox, Disney+.",
      zh: "讓五個 SBU 承擔創意與損益責任，總部則專注於大型押注：Pixar、Marvel、Lucasfilm、BamTech、Fox、Disney+。"
    },
    {
      nameEn: "Bob Chapek",
      nameZh: "Bob Chapek",
      years: "2020–2022",
      tone: "#622954",
      en: "Re-centralized budgeting and distribution through DMED. The central question became whether efficiency gains outweighed the damage to creative feedback loops.",
      zh: "透過 DMED 重集中化預算與配銷。核心問題變成，效率提升是否足以抵消對創意回饋機制的傷害。"
    }
  ];

  const qas = [
    {
      qEn: "Q1. How did Disney enter new businesses over time?",
      qZh: "Q1. Disney 如何一步步進入新事業？",
      aEn: "The cleanest pattern is content creation first, adjacent monetization next, and control over monetization paths after that. Disney did not diversify randomly. It repeatedly moved into businesses that could either reuse stories or improve its ability to capture more value from those stories.",
      aZh: "最乾淨的主線是：先有內容創作，再進入相鄰變現，之後再補上對變現路徑的控制。Disney 不是隨機多角化，而是反覆進入那些能重複使用故事、或提高故事變現能力的事業。"
    },
    {
      qEn: "Q2. Is Disney in one industry?",
      qZh: "Q2. Disney 是不是單一產業公司？",
      aEn: "No. It competes across at least five industries with very different economics: content production, streaming distribution, broadcast and cable, parks and cruises, and consumer products and licensing. The right characterization is related diversification, not one industry and not unrelated diversification.",
      aZh: "不是。它至少跨五個經濟邏輯差很多的產業：內容製作、串流配銷、廣播與有線電視、樂園與郵輪、消費品與授權。最準確的定性是 related diversification，不是單一產業，也不是 unrelated diversification。"
    },
    {
      qEn: "Q3. How related are Disney’s businesses?",
      qZh: "Q3. Disney 各事業到底有多相關？",
      aEn: "They look weakly related by product form, but highly related by resources. Characters, story worlds, brand, creative talent, audience access, and multiplatform monetization capabilities travel across the whole portfolio.",
      aZh: "若看產品形式，相關性不高；若看資源，相關性很高。角色、故事宇宙、品牌、創意人才、觀眾接觸點、跨平台變現能力，都能在整個組合中移動。"
    },
    {
      qEn: "Q4. What is shared across businesses?",
      qZh: "Q4. 事業之間共享了甚麼？",
      aEn: "Shared resources include IP, brand, and platform infrastructure. Shared activities include franchise planning, cross-promotion, release-window design, and marketing. Shared knowledge includes storytelling, audience insight, yield management, and international adaptation.",
      aZh: "共享資源包括 IP、品牌與平台基礎設施。共享活動包括 franchise 規劃、交叉推廣、窗口設計與行銷。共享知識包括敘事能力、受眾洞察、收益管理與國際在地化。"
    },
    {
      qEn: "Q5. What should corporate headquarters actually do?",
      qZh: "Q5. 總部真正應該做甚麼？",
      aEn: "HQ creates value when it chooses the right portfolio, allocates capital, governs the brand, designs the distribution architecture, and coordinates without crushing creativity. Disney is a case where organization design is part of corporate advantage, not a side detail.",
      aZh: "總部的價值，在於選對組合、配置資本、治理品牌、設計配銷架構，並且在協調的同時不壓垮創意。Disney 這個案例顯示，組織設計本身就是 corporate advantage 的一部分，不是旁枝末節。"
    },
    {
      qEn: "Q6. Is Disney worth more than the sum of its parts?",
      qZh: "Q6. Disney 是否真的大於各部分總和？",
      aEn: "Generally yes, but only when the franchise machine is working and the organizational fit is preserved. The strongest evidence is that parks monetize IP at much higher margins than streaming, so the value of a franchise becomes visible only at the corporate-system level.",
      aZh: "大體上是，但前提是 franchise machine 要順利運作，而且組織契合不能被破壞。最強的證據是，樂園把 IP 變現的利潤率遠高於串流，所以 franchise 的真正價值只有放在整個 corporate system 中才看得出來。"
    },
    {
      qEn: "Q7. Why might Disney be a preferred buyer of franchises?",
      qZh: "Q7. 為何 Disney 可能是 franchise 的首選買家？",
      aEn: "Because Disney can extract more total lifetime value than almost any other owner. It can turn the same IP into films, streaming series, attractions, merchandise, cruises, publishing, live events, and global licensing. That is corporate advantage in practice.",
      aZh: "因為 Disney 能比幾乎任何其他買家都萃取出更高的總生命週期價值。它可以把同一個 IP 轉成電影、串流影集、樂園設施、商品、郵輪、出版、現場活動與全球授權。這就是 corporate advantage 的實務版。"
    }
  ];

  const monetization = [
    { en: "Theatrical release", zh: "院線上映" },
    { en: "Streaming series", zh: "串流影集" },
    { en: "Park attractions", zh: "樂園設施" },
    { en: "Merchandise", zh: "商品銷售" },
    { en: "Cruises and resorts", zh: "郵輪與度假體驗" },
    { en: "Publishing and games", zh: "出版與遊戲" },
    { en: "Live events", zh: "現場活動" },
    { en: "Global licensing", zh: "全球授權" }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF2] text-stone-800 selection:bg-[#622954]/15">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[32px] border border-stone-200 bg-gradient-to-b from-white to-[#F7F2E8] shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
          <div className="grid gap-8 px-5 py-6 md:grid-cols-[1.4fr,0.9fr] md:px-8 md:py-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                <Badge className="border-stone-200 bg-white/80 text-stone-600">STRT 6200</Badge>
                <Badge className="border-stone-200 bg-white/80 text-stone-600">Session 12</Badge>
                <Badge className="border-stone-200 bg-white/80 text-stone-600">Corporate Strategy</Badge>
                <Badge className="border-stone-200 bg-white/80 text-stone-600">English Primary</Badge>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#622954]/15 bg-[#622954]/6 px-4 py-2 text-sm font-medium text-[#622954]">
                  <Icon name="castle" className="h-4 w-4" />
                  <span>The Walt Disney Company</span>
                </div>
                <LangBlock
                  mode={mode}
                  en={<h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl">Corporate Strategy Infrastructure</h1>}
                  zh={<h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl">企業策略視覺化基礎設施</h1>}
                  zhClassName="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl"
                />
                <LangBlock
                  mode={mode}
                  en={<p className="max-w-3xl text-base leading-7 text-stone-600 md:text-lg">A reader-facing, bilingual study system built around Disney’s expansion logic, related diversification, corporate advantage, and the organizational question that sits underneath the Chapek-Iger reversal.</p>}
                  zh={<p className="max-w-3xl text-base leading-7 text-stone-600 md:text-lg">面向讀者的雙語學習系統，核心圍繞 Disney 的擴張邏輯、related diversification、corporate advantage，以及 Chapek 與 Iger 反轉背後真正的組織問題。</p>}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <MiniKpi mode={mode} labelEn="2022 Revenue" labelZh="2022 營收" valueEn="$83.7B" valueZh="837 億美元" tone="teal" />
                <MiniKpi mode={mode} labelEn="Streaming loss" labelZh="串流虧損" valueEn="$4B" valueZh="40 億美元" tone="plum" />
                <MiniKpi mode={mode} labelEn="Disney+ early scale" labelZh="Disney+ 初期成長" valueEn="100M subs / 18 months" valueZh="18 個月破 1 億訂戶" tone="bronze" />
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200/90 bg-white/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.04)] md:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Core Read</div>
                <Icon name="network" className="h-5 w-5 text-[#2E5C6E]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-2xl border border-[#2E5C6E]/15 bg-[#2E5C6E]/6 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2E5C6E]">
                    {mode === "zh" ? "核心判斷" : "Current thesis"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-2 text-sm leading-6 text-stone-700">Disney is not a loose conglomerate. It is a resource-linked franchise system whose value depends on whether HQ can coordinate without weakening creativity.</p>}
                    zh={<p className="mt-2 text-sm leading-6 text-stone-700">Disney 不是鬆散型 conglomerate，而是以資源連結起來的 franchise system。它能不能創造價值，取決於總部是否能在不削弱創意的前提下完成協調。</p>}
                  />
                </div>
                <div className="rounded-2xl border border-[#A67C52]/20 bg-[#A67C52]/8 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A6138]">
                    {mode === "zh" ? "最安全口頭結論" : "Safest oral position"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-2 text-sm leading-6 text-stone-700">Disney is generally worth more than the sum of its parts, but only conditionally. The franchise machine creates value only when resources, businesses, and organization fit together.</p>}
                    zh={<p className="mt-2 text-sm leading-6 text-stone-700">Disney 整體通常高於各部分之和，但這不是自動成立。只有當資源、事業與組織彼此契合時，franchise machine 才真的創造價值。</p>}
                  />
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {mode === "zh" ? "很多人會漏掉的點" : "What many readers miss"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-2 text-sm leading-6 text-stone-700">The hardest part of this case is not proving Disney has synergy. It is explaining which kinds of shared resources create value, which kinds create conflict, and what that means for HQ design.</p>}
                    zh={<p className="mt-2 text-sm leading-6 text-stone-700">這個案例最難的，不是證明 Disney 有 synergy，而是說清楚哪一種共享資源會創造價值、哪一種會製造衝突，以及這對總部設計代表甚麼。</p>}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="sticky top-0 z-20 mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white/85 px-3 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.05)] backdrop-blur">
          <div className="flex min-w-max items-center gap-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#FCFAF2] px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-[#2E5C6E]/30 hover:text-[#2E5C6E]"
              >
                <Icon name={item.icon} className="h-4 w-4" />
                <span>{mode === "zh" ? item.zh : item.en}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <SectionShell id="overview" eyebrow="overview" icon="compass" titleEn="Why this case matters" titleZh="這個案例為甚麼重要" mode={mode}>
            <div className="grid gap-4 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="space-y-4">
                <LangBlock
                  mode={mode}
                  en={<p className="text-[15px] leading-7 text-stone-700">This is a strong corporate strategy case because Disney clearly shows both the power and the limit of related diversification. The businesses are broad, but they are tied together by reusable resources rather than by superficial product similarity. The real analytical task is to explain how value is created, where it is appropriated, and how organization design either supports or breaks that process.</p>}
                  zh={<p className="text-[15px] leading-7 text-stone-700">這是一個很強的 corporate strategy 案例，因為 Disney 同時清楚展示了 related diversification 的力量與極限。它的事業很廣，但彼此不是靠表面上的產品相似，而是靠可重複使用的資源連結。真正的分析任務，是說明價值如何被創造、在哪裡被取得，以及組織設計如何支撐或破壞這個過程。</p>}
                />
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="layers" className="h-4 w-4 text-[#2E5C6E]" />Portfolio logic</div>
                    <LangBlock mode={mode} en={<p className="text-sm leading-6 text-stone-600">Not random adjacency. Disney repeatedly moved into businesses that reuse or amplify IP.</p>} zh={<p className="text-sm leading-6 text-stone-600">不是隨機相鄰擴張，而是不斷進入那些能重用或放大 IP 的事業。</p>} />
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="network" className="h-4 w-4 text-[#622954]" />Resource logic</div>
                    <LangBlock mode={mode} en={<p className="text-sm leading-6 text-stone-600">Relatedness sits in stories, characters, brand, talent, and multiplatform monetization.</p>} zh={<p className="text-sm leading-6 text-stone-600">相關性主要存在於故事、角色、品牌、人才與跨平台變現能力。</p>} />
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="scale" className="h-4 w-4 text-[#A67C52]" />Organization logic</div>
                    <LangBlock mode={mode} en={<p className="text-sm leading-6 text-stone-600">HQ adds value only if coordination improves economics without choking the creative engine.</p>} zh={<p className="text-sm leading-6 text-stone-600">總部只有在協調能改善經濟效果、又不扼殺創意引擎時，才真的創造價值。</p>} />
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {mode === "zh" ? "一眼看懂 Disney 的企業邏輯" : "Disney in one visual"}
                </div>
                <div className="grid place-items-center py-2">
                  <div className="relative flex h-[320px] w-full max-w-[340px] items-center justify-center">
                    <div className="absolute inset-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#622954]/20 bg-[#622954]/8 p-4 text-center shadow-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#622954]">Core</div>
                      <div className="mt-2 text-sm font-semibold text-stone-900">Creative IP</div>
                      <div className="text-xs text-stone-500">Brand · Characters · Story worlds</div>
                    </div>
                    {[
                      { top: "6%", left: "38%", labelEn: "Film", labelZh: "電影" },
                      { top: "24%", right: "5%", labelEn: "Streaming", labelZh: "串流" },
                      { bottom: "18%", right: "7%", labelEn: "Parks", labelZh: "樂園" },
                      { bottom: "6%", left: "39%", labelEn: "Products", labelZh: "商品" },
                      { bottom: "20%", left: "6%", labelEn: "Cruises", labelZh: "郵輪" },
                      { top: "24%", left: "4%", labelEn: "Networks", labelZh: "頻道" }
                    ].map((node) => (
                      <div key={node.labelEn} className="absolute">
                        <div style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }} className="absolute" />
                        <div
                          style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}
                          className="rounded-2xl border border-stone-200 bg-white px-3 py-2 text-center text-sm font-medium text-stone-700 shadow-sm"
                        >
                          {mode === "zh" ? node.labelZh : node.labelEn}
                        </div>
                      </div>
                    ))}
                    <svg className="absolute inset-0 h-full w-full text-stone-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6">
                      <path d="M50 22 L50 36" />
                      <path d="M63 31 L57 40" />
                      <path d="M65 67 L57 59" />
                      <path d="M50 78 L50 64" />
                      <path d="M36 67 L43 59" />
                      <path d="M35 31 L43 40" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="timeline" eyebrow="history" icon="clock" titleEn="From stories to monetization paths" titleZh="從故事走向變現路徑" mode={mode}>
            <div className="grid gap-4 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="arrow" className="h-4 w-4 text-[#A67C52]" />Expansion formula</div>
                <div className="space-y-3">
                  {[
                    { en: "1. Create stories", zh: "1. 創造故事" },
                    { en: "2. Reuse them across adjacent businesses", zh: "2. 把故事延伸到相鄰事業" },
                    { en: "3. Build channels that capture more of the value", zh: "3. 建立能攔截更多價值的渠道" },
                    { en: "4. Defend the system through brand and coordination", zh: "4. 用品牌與協調守住整個系統" }
                  ].map((step, idx) => (
                    <div key={step.en} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-3">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2E5C6E] text-xs font-semibold text-white">{idx + 1}</div>
                      <div className="text-sm leading-6 text-stone-700">{mode === "zh" ? step.zh : step.en}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item.year} className="relative rounded-[22px] border border-stone-200 bg-white p-4 pl-5 shadow-sm">
                    <div className="absolute left-0 top-4 h-[calc(100%-2rem)] w-px bg-stone-200" />
                    <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-[#622954]" />
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{item.year}</div>
                        <LangBlock
                          mode={mode}
                          en={<h3 className="mt-1 text-lg font-semibold text-stone-900">{item.enTitle}</h3>}
                          zh={<h3 className="mt-1 text-lg font-semibold text-stone-900">{item.zhTitle}</h3>}
                          zhClassName="mt-1 text-lg font-semibold text-stone-900"
                        />
                      </div>
                    </div>
                    <LangBlock mode={mode} en={<p className="mt-2 text-sm leading-6 text-stone-600">{item.enBody}</p>} zh={<p className="mt-2 text-sm leading-6 text-stone-600">{item.zhBody}</p>} />
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell id="scope" eyebrow="scope" icon="layers" titleEn="Not one industry. Not unrelated diversification." titleZh="不是單一產業，也不是不相關多角化" mode={mode}>
            <div className="grid gap-4 xl:grid-cols-[1.1fr,0.9fr]">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {industries.map((item) => (
                  <div key={item.enTitle} className="rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2E5C6E]/8 text-[#2E5C6E]">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </div>
                    <LangBlock
                      mode={mode}
                      en={<h3 className="text-base font-semibold text-stone-900">{item.enTitle}</h3>}
                      zh={<h3 className="text-base font-semibold text-stone-900">{item.zhTitle}</h3>}
                      zhClassName="text-base font-semibold text-stone-900"
                    />
                    <LangBlock mode={mode} en={<p className="mt-2 text-sm leading-6 text-stone-600">{item.enBody}</p>} zh={<p className="mt-2 text-sm leading-6 text-stone-600">{item.zhBody}</p>} />
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <Badge key={chip} className="border-stone-200 bg-stone-50 text-stone-600">{chip}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {mode === "zh" ? "應如何定性" : "How to characterize Disney"}
                  </div>
                  <div className="mt-3 grid gap-3">
                    {[
                      {
                        state: "Incorrect",
                        stateZh: "不精準",
                        bodyEn: "Calling it one industry makes profit analysis too vague.",
                        bodyZh: "若把它當成單一產業，對利潤來源的分析會過度模糊。",
                        color: "#C46243"
                      },
                      {
                        state: "Incorrect",
                        stateZh: "不精準",
                        bodyEn: "Calling it unrelated diversification misses the shared resource system.",
                        bodyZh: "若把它當成 unrelated diversification，就會看不到共享資源系統。",
                        color: "#A67C52"
                      },
                      {
                        state: "Best read",
                        stateZh: "最佳判讀",
                        bodyEn: "Related diversification built around creative IP, characters, brand equity, franchise development, and multiplatform monetization.",
                        bodyZh: "以創意 IP、角色、品牌資產、franchise 開發與跨平台變現為核心的 related diversification。",
                        color: "#2E5C6E"
                      }
                    ].map((row) => (
                      <div key={row.bodyEn} className="rounded-2xl border border-stone-200 bg-white p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: row.color }}>
                          {mode === "zh" ? row.stateZh : row.state}
                        </div>
                        <LangBlock mode={mode} en={<p className="mt-2 text-sm leading-6 text-stone-700">{row.bodyEn}</p>} zh={<p className="mt-2 text-sm leading-6 text-stone-700">{row.bodyZh}</p>} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="mb-2 text-sm font-semibold text-stone-800">Exhibit logic, simplified</div>
                  <LangBlock
                    mode={mode}
                    en={<p className="text-sm leading-6 text-stone-600">Walt’s 1957 map already shows the core logic. Streaming is new. The franchise system is not. The modern version simply adds digital distribution and stronger direct-to-consumer control.</p>}
                    zh={<p className="text-sm leading-6 text-stone-600">Walt 1957 年的圖已經把核心邏輯畫出來了。新的是串流，不是 franchise system 本身。現代版本只是多了數位配銷與更強的直面消費者能力。</p>}
                  />
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="relatedness" eyebrow="relatedness" icon="network" titleEn="Relatedness is about resources, not products" titleZh="相關性看資源，不看產品表面" mode={mode}>
            <div className="grid gap-4 lg:grid-cols-[0.95fr,1.05fr]">
              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {mode === "zh" ? "核心共享系統" : "Shared system"}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="spark" className="h-4 w-4 text-[#622954]" />Resources</div>
                    <ul className="space-y-2 text-sm leading-6 text-stone-600">
                      {(mode === "zh"
                        ? ["角色與 IP 庫", "Disney 品牌", "創意人才", "BamTech 串流基礎設施", "ABC / ESPN 配銷資產"]
                        : ["Characters and IP library", "Disney brand", "Creative talent", "BamTech streaming infrastructure", "ABC / ESPN distribution assets"]
                      ).map((item) => (
                        <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#622954]" /> <span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="puzzle" className="h-4 w-4 text-[#2E5C6E]" />Activities and knowledge</div>
                    <ul className="space-y-2 text-sm leading-6 text-stone-600">
                      {(mode === "zh"
                        ? ["franchise 規劃", "跨平台交叉推廣", "窗口管理", "受眾洞察", "收益管理與在地化"]
                        : ["Franchise planning", "Cross-platform promotion", "Window management", "Audience insight", "Yield management and localization"]
                      ).map((item) => (
                        <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2E5C6E]" /> <span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-sm font-semibold text-stone-800">
                    {mode === "zh" ? "重要提醒" : "Important warning"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-2 text-sm leading-6 text-stone-600">Product similarity can mislead. Movies, cruises, parks, and merchandise do not look alike. The better question is whether the same resource base makes each business more competitive.</p>}
                    zh={<p className="mt-2 text-sm leading-6 text-stone-600">產品相似度很容易誤導。電影、郵輪、樂園與商品看起來不像同一類生意。真正應問的是，同一組資源是否讓各事業都更有競爭力。</p>}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {resources.map((box) => (
                    <div key={box.kind} className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: box.color }}>
                        {mode === "zh" ? box.kindZh : box.kind}
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-600">
                        {(mode === "zh" ? box.zh : box.en).map((item) => (
                          <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: box.color }} /> <span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rounded-[24px] border border-stone-200 bg-white p-5">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {mode === "zh" ? "這對企業策略代表甚麼" : "What this means for corporate strategy"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="text-sm leading-7 text-stone-700">Public goods travel easily across the portfolio. Private goods need explicit coordination and often generate conflict. Disney’s corporate-center problem sits exactly here. The case is not merely about having synergies. It is about governing different kinds of synergies correctly.</p>}
                    zh={<p className="text-sm leading-7 text-stone-700">公共財型資產可以比較容易地在組合中流動。私人財型資產則需要明確協調，也更容易產生衝突。Disney 的 corporate center 問題，就卡在這裡。這個案例不只是「有沒有 synergy」，而是「不同類型的 synergy 要怎麼被正確治理」。</p>}
                  />
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="five-levels" eyebrow="framework" icon="building" titleEn="The Five Levels read on Disney" titleZh="用五層次框架重讀 Disney" mode={mode}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {fiveLevels.map((item) => (
                <div key={item.enTitle} className="rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-stone-700">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<h3 className="text-base font-semibold text-stone-900">{item.enTitle}</h3>}
                    zh={<h3 className="text-base font-semibold text-stone-900">{item.zhTitle}</h3>}
                    zhClassName="text-base font-semibold text-stone-900"
                  />
                  <LangBlock mode={mode} en={<p className="mt-2 text-sm leading-6 text-stone-600">{item.enBody}</p>} zh={<p className="mt-2 text-sm leading-6 text-stone-600">{item.zhBody}</p>} />
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[24px] border border-[#A67C52]/18 bg-[#A67C52]/7 p-5">
              <LangBlock
                mode={mode}
                en={<p className="text-sm leading-7 text-stone-700">The course-level lesson is that Disney cannot be explained by a single lens. Industry economics matter. Complementarities matter. National institutions matter. But the decisive managerial problem in this case is whether firm-level organization design is aligned with a multibusiness system built on shared resources.</p>}
                zh={<p className="text-sm leading-7 text-stone-700">課程層次的重點是，Disney 不能被單一視角解釋。產業經濟重要，互補關係重要，國家制度也重要。但這個案例最決定性的管理問題，是企業層次的組織設計，是否和一個建立在共享資源上的多事業系統相契合。</p>}
              />
            </div>
          </SectionShell>

          <SectionShell
            id="hq"
            eyebrow="organization"
            icon="scale"
            titleEn="HQ design decides whether synergy becomes value or conflict"
            titleZh="總部設計決定 synergy 會變成價值還是衝突"
            mode={mode}
            right={<Badge className="border-[#622954]/15 bg-[#622954]/6 text-[#622954]">Walt → Eisner → Iger → Chapek</Badge>}
          >
            <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="grid gap-4 md:grid-cols-2">
                {ceoModels.map((model) => (
                  <div key={model.nameEn} className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: model.tone }}>{model.years}</div>
                    <LangBlock
                      mode={mode}
                      en={<h3 className="mt-2 text-lg font-semibold text-stone-900">{model.nameEn}</h3>}
                      zh={<h3 className="mt-2 text-lg font-semibold text-stone-900">{model.nameZh}</h3>}
                      zhClassName="mt-2 text-lg font-semibold text-stone-900"
                    />
                    <LangBlock mode={mode} en={<p className="mt-3 text-sm leading-6 text-stone-600">{model.en}</p>} zh={<p className="mt-3 text-sm leading-6 text-stone-600">{model.zh}</p>} />
                  </div>
                ))}
              </div>
              <div className="space-y-4 rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {mode === "zh" ? "Disney 總部最應該做的六件事" : "Six HQ value-creation jobs"}
                  </div>
                  <div className="mt-3 grid gap-3">
                    {[
                      ["Portfolio choice", "組合選擇"],
                      ["Franchise orchestration", "franchise 協調"],
                      ["Capital allocation", "資本配置"],
                      ["Distribution architecture", "配銷架構"],
                      ["Brand governance", "品牌治理"],
                      ["Organization and control design", "組織與控制設計"]
                    ].map(([en, zh], idx) => (
                      <div key={en} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-3 py-3 text-sm text-stone-700">
                        <div className="grid h-6 w-6 place-items-center rounded-full bg-stone-100 text-xs font-semibold text-stone-700">{idx + 1}</div>
                        <span>{mode === "zh" ? zh : en}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-sm font-semibold text-stone-800">
                    {mode === "zh" ? "最乾淨的總結" : "Cleanest takeaway"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-2 text-sm leading-6 text-stone-600">HQ creates value when it coordinates without crushing creativity. The case gives strong evidence that Chapek’s centralization pushed too far in the direction of control.</p>}
                    zh={<p className="mt-2 text-sm leading-6 text-stone-600">總部真正創造價值的前提，是能協調而不壓垮創意。案例提供了很強的證據，顯示 Chapek 的集中化把控制推得太前面了。</p>}
                  />
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="economics" eyebrow="economics" icon="chart" titleEn="The sum-of-parts test and segment economics" titleZh="整體高於分部總和的檢驗與分部經濟學" mode={mode}>
            <div className="grid gap-4 lg:grid-cols-[1.02fr,0.98fr]">
              <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="chart" className="h-4 w-4 text-[#2E5C6E]" />2022 segment breakdown</div>
                <div className="space-y-5">
                  <StatBar label={mode === "zh" ? "DMED 營收" : "DMED revenue"} value={55040} max={55040} color="#2E5C6E" note={mode === "zh" ? "66% 營收占比" : "66% of revenue"} />
                  <StatBar label={mode === "zh" ? "DPEP 營收" : "DPEP revenue"} value={28705} max={55040} color="#A67C52" note={mode === "zh" ? "34% 營收占比" : "34% of revenue"} />
                  <div className="h-px bg-stone-200" />
                  <StatBar label={mode === "zh" ? "DMED 營業利益" : "DMED operating income"} value={4216} max={7905} color="#2E5C6E" note={mode === "zh" ? "35% 利益占比" : "35% of segment operating income"} />
                  <StatBar label={mode === "zh" ? "DPEP 營業利益" : "DPEP operating income"} value={7905} max={7905} color="#A67C52" note={mode === "zh" ? "65% 利益占比" : "65% of segment operating income"} />
                </div>
                <div className="mt-5 rounded-2xl border border-[#A67C52]/18 bg-[#A67C52]/7 p-4">
                  <LangBlock
                    mode={mode}
                    en={<p className="text-sm leading-6 text-stone-700">The economic roles differ. Streaming and media distribution help capture audience access and keep Disney relevant in the new stack. Parks monetize the same IP at far higher margins. The corporate system matters because no single unit reveals the full economics.</p>}
                    zh={<p className="text-sm leading-6 text-stone-700">兩個分部扮演的經濟角色不同。串流與媒體配銷有助於掌握觀眾接觸與新時代的存在感；樂園則用同一批 IP 以更高利潤率變現。也正因如此，只有放回 corporate system 才看得到完整經濟學。</p>}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {mode === "zh" ? "Collis & Montgomery acid test" : "Collis & Montgomery acid test"}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="text-sm leading-7 text-stone-700">The corporation’s businesses must not be worth more to another owner. Under Iger, the answer is broadly yes: Disney’s system appears to deepen the value of acquired franchises. Under Chapek, the answer becomes shakier because creative backlash, organizational friction, and weak streaming economics suggest value leakage at the corporate level.</p>}
                    zh={<p className="text-sm leading-7 text-stone-700">企業的各事業不應該在別的 owner 手中更有價值。Iger 時期，大致可回答 yes，因為 Disney 的系統明顯能放大被收購 franchise 的價值。Chapek 時期，答案就比較不穩，因為創意反彈、組織摩擦與偏弱的串流經濟學，都暗示 corporate level 出現價值流失。</p>}
                  />
                </div>
                <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="spark" className="h-4 w-4 text-[#622954]" />Why Disney can be a preferred buyer</div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {monetization.map((item) => (
                      <div key={item.en} className="rounded-2xl border border-stone-200 bg-white px-3 py-3 text-sm text-stone-700">
                        {mode === "zh" ? item.zh : item.en}
                      </div>
                    ))}
                  </div>
                  <LangBlock
                    mode={mode}
                    en={<p className="mt-4 text-sm leading-6 text-stone-600">This is the practical meaning of corporate advantage. Disney can often justify premium acquisition prices because its platform can generate more lifetime value from a franchise than most alternative owners.</p>}
                    zh={<p className="mt-4 text-sm leading-6 text-stone-600">這就是 corporate advantage 的實務意義。Disney 往往能合理支付較高收購價格，因為它的平台能從同一個 franchise 中擷取出比多數其他 owner 更高的生命週期價值。</p>}
                  />
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="answers" eyebrow="study mode" icon="book" titleEn="Seven study answers, tightened for fast review" titleZh="七題作答，壓縮成快速複習版" mode={mode}>
            <div className="space-y-3">
              {qas.map((item, idx) => (
                <details key={item.qEn} className="group rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm open:bg-stone-50/70">
                  <summary className="flex cursor-pointer list-none items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2E5C6E] text-xs font-semibold text-white">{idx + 1}</div>
                    <div className="flex-1">
                      <LangBlock
                        mode={mode}
                        en={<h3 className="text-base font-semibold text-stone-900">{item.qEn}</h3>}
                        zh={<h3 className="text-base font-semibold text-stone-900">{item.qZh}</h3>}
                        zhClassName="text-base font-semibold text-stone-900"
                      />
                    </div>
                    <div className="rounded-full border border-stone-200 p-1 text-stone-500 transition group-open:rotate-180"><Icon name="arrow" className="h-4 w-4 rotate-90" /></div>
                  </summary>
                  <div className="pl-10 pt-3">
                    <LangBlock mode={mode} en={<p className="text-sm leading-7 text-stone-700">{item.aEn}</p>} zh={<p className="text-sm leading-7 text-stone-700">{item.aZh}</p>} />
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[24px] border border-[#622954]/15 bg-[#622954]/6 p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#622954]">
                  {mode === "zh" ? "90 秒口頭總結" : "90-second oral synthesis"}
                </div>
                <LangBlock
                  mode={mode}
                  en={<p className="text-sm leading-7 text-stone-700">Disney is a strong corporate strategy case because it shows both the power and the limit of related diversification. Its businesses are broad, but they are tied together by shared resources such as creative IP, brand, franchise development capability, and multiplatform monetization. Walt’s original synergy map, Eisner’s cross-selling model, and Iger’s content, technology, and international strategy all reinforced that system. But Chapek’s restructuring also shows that diversification alone does not create value. Corporate advantage depends on fit between resources, businesses, organization, and control. Disney is worth more than the sum of its parts when that fit is strong and when headquarters coordinates the franchise machine without undermining creativity.</p>}
                  zh={<p className="text-sm leading-7 text-stone-700">Disney 是很強的 corporate strategy 案例，因為它同時展示了 related diversification 的力量與極限。它的事業很廣，但彼此由共享資源連結，例如創意 IP、品牌、franchise 開發能力，以及跨平台變現能力。Walt 最早的 synergy 地圖、Eisner 的交叉銷售模式、以及 Iger 的內容、科技、國際化三支柱，都在強化這套系統。但 Chapek 的重組也顯示，多角化本身不會自動創造價值。真正的 corporate advantage 取決於資源、事業、組織與控制之間是否契合。當這個契合存在，而且總部能協調 franchise machine 而不破壞創意時，Disney 才真正大於各部分之和。</p>}
                />
              </div>
              <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {mode === "zh" ? "資料底盤" : "Source base"}
                </div>
                <ul className="space-y-2 text-sm leading-6 text-stone-600">
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" /> The Walt Disney Company case</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" /> Creating Corporate Advantage</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" /> Strategy for the Real World, Chapters 1–7</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" /> Existing Disney report, slides, and working notes</li>
                </ul>
                <LangBlock
                  mode={mode}
                  en={<p className="mt-4 text-sm leading-6 text-stone-600">This page is intentionally built for reading first. Dense facts are translated into timelines, flywheels, bars, and compact answer blocks so the logic is easier to retain.</p>}
                  zh={<p className="mt-4 text-sm leading-6 text-stone-600">這個頁面刻意以閱讀體驗優先。把密集事實轉成時間線、flywheel、長條圖與精簡作答模組，讓整體邏輯更容易記住。</p>}
                />
              </div>
            </div>
          </SectionShell>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        {toggleOpen ? (
          <div className="rounded-2xl border border-stone-200 bg-white/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur">
            <div className="grid gap-2">
              {[
                { key: "en", label: "EN" },
                { key: "zh", label: "中文" },
                { key: "bi", label: "EN + 中文" }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setMode(item.key);
                    setToggleOpen(false);
                  }}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${mode === item.key ? "bg-[#2E5C6E] text-white" : "bg-[#FCFAF2] text-stone-700 hover:bg-stone-100"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <button
          onClick={() => setToggleOpen((v) => !v)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-stone-700 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur transition hover:text-[#2E5C6E]"
          aria-label="Toggle language"
        >
          <Icon name="translate" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
