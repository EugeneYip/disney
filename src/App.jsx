import React, { useState } from "react";

const ICONS = {
  spark: [
    { t: "path", d: "M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Z" },
    { t: "path", d: "M5 17l.7 1.8L8 19.5l-1.3.5L5 22l-.7-2-1.3-.5 2.3-.7L5 17Z" },
    { t: "path", d: "M19 15l.7 1.8L22 17.5l-1.3.5L19 20l-.7-2-1.3-.5 2.3-.7L19 15Z" }
  ],
  castle: [
    { t: "path", d: "M4 21V10l3 2V6l3 2V3l2 2 2-2v5l3-2v6l3-2v11H4Z" },
    { t: "path", d: "M10 21v-4a2 2 0 0 1 4 0v4" },
    { t: "path", d: "M7 14h.01M17 14h.01", cap: "round" }
  ],
  film: [
    { t: "rect", x: 3, y: 5, w: 18, h: 14, rx: 2 },
    { t: "path", d: "M7 5v14M17 5v14M3 9h4M17 9h4M3 15h4M17 15h4" }
  ],
  globe: [
    { t: "circle", cx: 12, cy: 12, r: 9 },
    { t: "path", d: "M3 12h18M12 3c2.5 2.4 4 5.7 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.7-4-9s1.5-6.6 4-9Z" }
  ],
  layers: [
    { t: "path", d: "M12 3 3 8l9 5 9-5-9-5Z" },
    { t: "path", d: "M3 12l9 5 9-5" },
    { t: "path", d: "M3 16l9 5 9-5" }
  ],
  network: [
    { t: "circle", cx: 6, cy: 6, r: 2 },
    { t: "circle", cx: 18, cy: 6, r: 2 },
    { t: "circle", cx: 12, cy: 18, r: 2 },
    { t: "path", d: "M8 6h8M7.4 7.4l3.2 8M16.6 7.4l-3.2 8" }
  ],
  scale: [
    { t: "path", d: "M12 4v16M6 7h12M4 20h16" },
    { t: "path", d: "M8 7 5 12h6L8 7Zm8 0-3 5h6l-3-5Z" }
  ],
  chart: [
    { t: "path", d: "M4 20V6M4 20h16" },
    { t: "path", d: "M8 16v-4M12 16V8M16 16v-7" }
  ],
  puzzle: [{ t: "path", d: "M9 4h3a2 2 0 1 1 4 0h3v5a2 2 0 1 0 0 4v5h-5a2 2 0 1 1-4 0H5v-5a2 2 0 1 0 0-4V4h4Z" }],
  compass: [
    { t: "circle", cx: 12, cy: 12, r: 9 },
    { t: "path", d: "M15.5 8.5 14 14l-5.5 1.5L10 10l5.5-1.5Z" }
  ],
  building: [
    { t: "rect", x: 4, y: 4, w: 16, h: 17, rx: 1 },
    { t: "path", d: "M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2M11 21v-4h2v4" }
  ],
  arrow: [
    { t: "path", d: "M5 12h14" },
    { t: "path", d: "m13 6 6 6-6 6" }
  ],
  book: [
    { t: "path", d: "M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" },
    { t: "path", d: "M8 4v16" }
  ],
  clock: [
    { t: "circle", cx: 12, cy: 12, r: 9 },
    { t: "path", d: "M12 7v5l3 2" }
  ],
  translate: [
    { t: "path", d: "M4 6h8M8 4v2c0 4-2 7-5 9" },
    { t: "path", d: "M4 15c2 0 5 1 8 4" },
    { t: "path", d: "M15 6h5" },
    { t: "path", d: "M17.5 4v2" },
    { t: "path", d: "M14 18l3.5-8 3.5 8" },
    { t: "path", d: "M15.2 15h4.6" }
  ],
  grid: [
    { t: "rect", x: 4, y: 4, w: 6, h: 6, rx: 1 },
    { t: "rect", x: 14, y: 4, w: 6, h: 6, rx: 1 },
    { t: "rect", x: 4, y: 14, w: 6, h: 6, rx: 1 },
    { t: "rect", x: 14, y: 14, w: 6, h: 6, rx: 1 }
  ],
  stack: [
    { t: "path", d: "M4 7h16" },
    { t: "path", d: "M6 12h12" },
    { t: "path", d: "M8 17h8" }
  ]
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const nodes = ICONS[name] || ICONS.spark;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
      {nodes.map((n, i) => {
        if (n.t === "path") return <path key={i} d={n.d} strokeLinecap={n.cap || "round"} strokeLinejoin="round" />;
        if (n.t === "circle") return <circle key={i} cx={n.cx} cy={n.cy} r={n.r} />;
        if (n.t === "rect") return <rect key={i} x={n.x} y={n.y} width={n.w} height={n.h} rx={n.rx || 0} />;
        return null;
      })}
    </svg>
  );
}

function tr(mode, en, zh) {
  return mode === "zh" ? zh : en;
}

function Badge({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${className}`}>{children}</span>;
}

function SummaryCard({ title, value, subtitle, tone = "stone" }) {
  const styles = {
    stone: "border-stone-200 bg-white",
    teal: "border-[#2E5C6E]/16 bg-[#2E5C6E]/7",
    plum: "border-[#622954]/16 bg-[#622954]/7",
    bronze: "border-[#A67C52]/18 bg-[#A67C52]/8"
  };
  return (
    <div className={`min-w-[210px] rounded-2xl border px-3.5 py-2.5 ${styles[tone]}`}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{title}</div>
      <div className="mt-1 text-sm font-semibold text-stone-900">{value}</div>
      {subtitle ? <div className="mt-1 hidden text-[11px] leading-4 text-stone-500 xl:block">{subtitle}</div> : null}
    </div>
  );
}

function InfoCard({ icon, title, children, tone = "stone" }) {
  const tones = {
    stone: "border-stone-200 bg-stone-50",
    teal: "border-[#2E5C6E]/14 bg-[#2E5C6E]/6",
    bronze: "border-[#A67C52]/18 bg-[#A67C52]/7"
  };
  return (
    <div className={`rounded-[22px] border p-4 ${tones[tone]}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
        <Icon name={icon} className="h-4 w-4 text-stone-600" />
        <span>{title}</span>
      </div>
      <div className="text-sm leading-6 text-stone-600">{children}</div>
    </div>
  );
}

function SectionShell({ id, eyebrow, icon, title, children, right }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-[26px] border border-stone-200/90 bg-white/72 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.035)] backdrop-blur sm:p-5 lg:p-7">
      <div className="mb-4 flex flex-col gap-3 xl:mb-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#FCFAF2] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2} />
            <span>{eyebrow}</span>
          </div>
          <h2 className="max-w-[24ch] font-serif text-[1.7rem] font-semibold leading-tight tracking-tight text-stone-900 sm:text-[1.95rem]">{title}</h2>
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}

function ExhibitFrame({ number, title, subtitle, children }) {
  return (
    <div className="rounded-[24px] border border-stone-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
      <div className="border-b border-stone-200 bg-stone-50/90 px-4 py-3.5 sm:px-5">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">Exhibit {number}</div>
        <div className="mt-1 text-sm font-semibold text-stone-900 sm:text-[15px]">{title}</div>
        {subtitle ? <div className="mt-0.5 text-[12px] leading-5 text-stone-500">{subtitle}</div> : null}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function StatBar({ label, value, max, color, note }) {
  const width = `${Math.max(12, (value / max) * 100)}%`;
  return (
    <div className="space-y-1.5">
      <div className="flex items-end justify-between gap-3 text-sm">
        <div className="min-w-0 font-medium text-stone-700">{label}</div>
        <div className="shrink-0 text-right">
          <div className="font-semibold text-stone-900">{value.toLocaleString()}</div>
          {note ? <div className="text-[11px] text-stone-500">{note}</div> : null}
        </div>
      </div>
      <div className="h-2 rounded-full bg-stone-200">
        <div className="h-2 rounded-full" style={{ width, backgroundColor: color }} />
      </div>
    </div>
  );
}

const TIMELINE = [
  ["1923", "Animation studio founded", "動畫工作室成立", "The original asset was creative content making. This is the root of the corporate system.", "最初的核心資產是內容創作能力。整個企業系統都從這裡長出來。"],
  ["1937", "Snow White proves feature-length storytelling", "《白雪公主》證明長篇動畫可行", "Disney showed it could create full-length cinematic IP, not just shorts.", "Disney 證明自己不只會做短篇，也能把角色與故事拉成長篇電影。"],
  ["1955", "Disneyland opens", "Disneyland 開幕", "A content company moved into physical monetization. Parks became a high-margin way to turn stories into recurring cash flow.", "內容公司進入實體變現。樂園成為把故事轉成高利潤、可重複現金流的方式。"],
  ["1957", "Walt’s synergy map", "Walt 的協同地圖", "Creative talent sits at the center, feeding TV, music, publications, licensing, and Disneyland. The franchise machine is old, not new.", "以 Creative Talent 為中心，向外連到電視、音樂、出版、授權與 Disneyland。這套 franchise machine 很早就存在，不是近年的新發明。"],
  ["1971", "Disney World scales the resort model", "Disney World 放大度假園區模式", "The firm proved the park system could be a destination engine, not a single-site curiosity.", "公司證明樂園不只是單點景點，而是可擴張的目的地型商業模式。"],
  ["1984–2005", "Eisner expands cross-selling", "Eisner 時期放大交叉銷售", "Television, stores, home video, parks, and branding were pushed harder under a stronger central synergy logic.", "在更強的中央協同邏輯下，電視、商店、家用影音、樂園與品牌管理被更積極地串起來。"],
  ["2006–2019", "Iger adds Pixar, Marvel, Lucasfilm, Fox, and Disney+", "Iger 納入 Pixar、Marvel、Lucasfilm、Fox 與 Disney+", "Iger’s three pillars were creative content, technology, and international expansion. Disney moved from owning stories to owning more of the distribution stack too.", "Iger 的三大支柱是創意內容、科技、與國際擴張。公司不只擴大內容，也逐步掌握更多配銷與平台能力。"],
  ["2020–2022", "Chapek recentralizes via DMED", "Chapek 透過 DMED 再集中化", "The question shifted from portfolio logic to organizational fit. The issue was no longer whether Disney had synergy, but whether HQ was structuring it correctly.", "問題從組合邏輯轉向組織契合。重點不再只是 Disney 有沒有 synergy，而是總部有沒有用對方式去組織它。"]
];

const INDUSTRIES = [
  ["film", "Film and TV content production", "影視內容製作", "Studios, animation, franchise development, sequel and character pipelines.", "電影、動畫、角色宇宙、續作與 franchise 開發。", ["Disney Studios", "Pixar", "Marvel", "Lucasfilm", "Fox"]],
  ["layers", "Streaming and media distribution", "串流與媒體配銷", "Disney+, Hulu, and ESPN+ moved Disney closer to direct-to-consumer control.", "Disney+、Hulu、ESPN+ 讓 Disney 更接近直接面向消費者。", ["Disney+", "Hulu", "ESPN+"]],
  ["building", "Broadcast and cable networks", "廣播與有線電視頻道", "ABC and ESPN remain part of the broader monetization and promotion system.", "ABC 與 ESPN 仍是整體變現與推廣系統的一部分。", ["ABC", "ESPN", "Disney Channel"]],
  ["castle", "Parks, resorts, and cruises", "樂園、度假村與郵輪", "The physical world converts IP into premium, recurring, high-margin experiences.", "實體世界把 IP 轉成高價值、可重複、高利潤的體驗。", ["Disneyland", "Disney World", "Cruise Line", "Aulani"]],
  ["spark", "Consumer products and licensing", "消費品與授權", "Merchandise, publishing, games, retail, and licensing extend the lifetime value of every franchise.", "商品、出版、遊戲、零售與授權延長每個 franchise 的生命週期價值。", ["Merchandise", "Publishing", "Retail", "Games"]]
];

const RESOURCES = [
  ["Public goods", "公共財型資產", "#2E5C6E", ["Brand equity", "Characters and IP library", "Best practices", "Audience trust"], ["品牌資產", "角色與 IP 庫", "最佳實務", "觀眾信任"]],
  ["Private goods", "私人財型資產", "#622954", ["Distribution decisions", "Streaming infrastructure", "Scarce creative attention", "Budget allocation"], ["配銷決策", "串流基礎設施", "稀缺創意注意力", "預算配置"]]
];

const FIVE_LEVELS = [
  ["spark", "Firm level", "企業層次", "Disney wins when scope, positioning, activities, resources, knowledge, leadership, and control fit together. This is where the Chapek problem becomes visible.", "當範疇、定位、活動、資源、知識、領導與控制彼此契合時，Disney 才能贏。Chapek 的問題主要就在這一層暴露。"],
  ["layers", "Industry level", "產業層次", "Disney is not in one industry. Film, streaming, parks, networks, and licensing each have different economics, competitors, and profit structures.", "Disney 並不只在單一產業競爭。電影、串流、樂園、頻道與授權，各自有不同的經濟結構、競爭者與利潤邏輯。"],
  ["network", "Meso or cluster level", "中觀或群聚層次", "This is where complements matter. The value of films, parks, merchandise, cruises, and channels rises because they feed one another.", "這一層重點在互補。電影、樂園、商品、郵輪與頻道彼此抬高對方的價值。"],
  ["building", "Macro or national level", "總體或國家層次", "Demand conditions, regulation, labor systems, and local institutions shape how well Disney can operate in different markets.", "各地需求條件、法規、勞動體系與制度環境，會改變 Disney 在不同市場的可行性。"],
  ["globe", "Meta or supranational level", "超國家層次", "Geopolitics, cross-border regulation, and platform competition affect international expansion and ownership constraints, especially in mainland China and Europe.", "地緣政治、跨境規則與平台競爭，會影響國際擴張與持股限制，特別是在大陸地區與歐洲。"]
];

const CEOS = [
  ["Walt Disney", "Walt Disney", "1923–1966", "Creative talent at the center. The original synergy logic treated stories as seeds for multiple businesses.", "以 Creative Talent 為中心。最早的協同邏輯，是把故事當成多事業延伸的種子。", "#A67C52"],
  ["Michael Eisner", "Michael Eisner", "1984–2005", "Centralized branding and aggressive cross-promotion. Strong growth, but late-stage overpush created conflict and fatigue.", "集中品牌管理與積極交叉推廣。成長很強，但後期 push 過度，帶來衝突與疲乏。", "#2E5C6E"],
  ["Bob Iger", "Bob Iger", "2005–2020", "Decentralized creative accountability with five SBUs, while HQ focused on big bets: Pixar, Marvel, Lucasfilm, BamTech, Fox, and Disney+.", "讓五個 SBU 承擔創意與損益責任，總部則專注於大型押注：Pixar、Marvel、Lucasfilm、BamTech、Fox、Disney+。", "#566C5C"],
  ["Bob Chapek", "Bob Chapek", "2020–2022", "Re-centralized budgeting and distribution through DMED. The central question became whether efficiency gains outweighed the damage to creative feedback loops.", "透過 DMED 重集中化預算與配銷。核心問題變成，效率提升是否足以抵消對創意回饋機制的傷害。", "#622954"]
];

const QA = [
  ["Q1. How did Disney enter new businesses over time?", "Q1. Disney 如何一步步進入新事業？", "The cleanest pattern is content creation first, adjacent monetization next, and control over monetization paths after that. Disney did not diversify randomly. It repeatedly moved into businesses that could either reuse stories or improve its ability to capture more value from those stories.", "最乾淨的主線是：先有內容創作，再進入相鄰變現，之後再補上對變現路徑的控制。Disney 不是隨機多角化，而是反覆進入那些能重複使用故事、或提高故事變現能力的事業。"],
  ["Q2. Is Disney in one industry?", "Q2. Disney 是不是單一產業公司？", "No. It competes across at least five industries with very different economics: content production, streaming distribution, broadcast and cable, parks and cruises, and consumer products and licensing. The right characterization is related diversification, not one industry and not unrelated diversification.", "不是。它至少跨五個經濟邏輯差很多的產業：內容製作、串流配銷、廣播與有線電視、樂園與郵輪、消費品與授權。最準確的定性是 related diversification，不是單一產業，也不是 unrelated diversification。"],
  ["Q3. How related are Disney’s businesses?", "Q3. Disney 各事業到底有多相關？", "They look weakly related by product form, but highly related by resources. Characters, story worlds, brand, creative talent, audience access, and multiplatform monetization capabilities travel across the whole portfolio.", "若看產品形式，相關性不高；若看資源，相關性很高。角色、故事宇宙、品牌、創意人才、觀眾接觸點、跨平台變現能力，都能在整個組合中移動。"],
  ["Q4. What is shared across businesses?", "Q4. 事業之間共享了甚麼？", "Shared resources include IP, brand, and platform infrastructure. Shared activities include franchise planning, cross-promotion, release-window design, and marketing. Shared knowledge includes storytelling, audience insight, yield management, and international adaptation.", "共享資源包括 IP、品牌與平台基礎設施。共享活動包括 franchise 規劃、交叉推廣、窗口設計與行銷。共享知識包括敘事能力、受眾洞察、收益管理與在地化。"],
  ["Q5. What should corporate headquarters actually do?", "Q5. 總部真正應該做甚麼？", "HQ creates value when it chooses the right portfolio, allocates capital, governs the brand, designs the distribution architecture, and coordinates without crushing creativity. Disney is a case where organization design is part of corporate advantage, not a side detail.", "總部的價值，在於選對組合、配置資本、治理品牌、設計配銷架構，並且在協調的同時不壓垮創意。Disney 這個案例顯示，組織設計本身就是 corporate advantage 的一部分，不是旁枝末節。"],
  ["Q6. Is Disney worth more than the sum of its parts?", "Q6. Disney 是否真的大於各部分總和？", "Generally yes, but only when the franchise machine is working and the organizational fit is preserved. The strongest evidence is that parks monetize IP at much higher margins than streaming, so the value of a franchise becomes visible only at the corporate-system level.", "大體上是，但前提是 franchise machine 要順利運作，而且組織契合不能被破壞。最強的證據是，樂園把 IP 變現的利潤率遠高於串流，所以 franchise 的真正價值只有放在整個 corporate system 中才看得出來。"],
  ["Q7. Why might Disney be a preferred buyer of franchises?", "Q7. 為何 Disney 可能是 franchise 的首選買家？", "Because Disney can extract more total lifetime value than almost any other owner. It can turn the same IP into films, streaming series, attractions, merchandise, cruises, publishing, live events, and global licensing. That is corporate advantage in practice.", "因為 Disney 能比幾乎任何其他買家都萃取出更高的總生命週期價值。它可以把同一個 IP 轉成電影、串流影集、樂園設施、商品、郵輪、出版、現場活動與全球授權。這就是 corporate advantage 的實務版。"]
];

const MONETIZATION = [
  ["Theatrical release", "院線上映"],
  ["Streaming series", "串流影集"],
  ["Park attractions", "樂園設施"],
  ["Merchandise", "商品銷售"],
  ["Cruises and resorts", "郵輪與度假體驗"],
  ["Publishing and games", "出版與遊戲"],
  ["Live events", "現場活動"],
  ["Global licensing", "全球授權"]
];

const EXHIBIT7_TOP = [
  ["Media Networks", "媒體網路", "#2E5C6E", ["ABC Television Group", "ABC Entertainment", "ABC News", "ABC Owned TV Stations", "ABC Family", "Disney Channels Worldwide"], ["ABC 電視集團", "ABC 娛樂", "ABC 新聞", "ABC 自有電視台", "ABC Family", "Disney 全球頻道"]],
  ["Parks and Resorts", "樂園與度假村", "#566C5C", ["Disneyland", "Walt Disney World", "Tokyo Disney Resort", "Disneyland Paris", "Hong Kong Disneyland", "Shanghai Disney Resort", "Disney Cruise Line", "Aulani"], ["Disneyland", "Walt Disney World", "Tokyo Disney Resort", "Disneyland Paris", "香港 Disneyland", "上海 Disney Resort", "Disney Cruise Line", "Aulani"]],
  ["Studio Entertainment", "影視工作室", "#622954", ["Walt Disney Studios", "Marvel Studios", "Lucasfilm", "Touchstone", "Disney Nature", "Walt Disney Animation", "Pixar", "Disney Music", "Disney Theatrical"], ["Walt Disney Studios", "Marvel Studios", "Lucasfilm", "Touchstone", "Disney Nature", "Walt Disney Animation", "Pixar", "Disney Music", "Disney Theatrical"]]
];

const EXHIBIT7_BOTTOM = [
  ["Consumer Products and Interactive Media", "消費品與互動媒體", "#A67C52", ["Disney Consumer Products", "Disney Publishing", "Disney Store", "Disney Interactive Media", "Disney Interactive Games"], ["Disney Consumer Products", "Disney Publishing", "Disney Store", "Disney Interactive Media", "Disney Interactive Games"]],
  ["Streaming Services", "串流服務", "#8F5C38", ["Disney+", "ESPN+", "Hulu"], ["Disney+", "ESPN+", "Hulu"]]
];

const NAV = [
  ["overview", "Overview", "總覽", "compass"],
  ["timeline", "Expansion Logic", "擴張邏輯", "clock"],
  ["scope", "Industry Scope", "產業範圍", "layers"],
  ["relatedness", "Relatedness", "相關性", "network"],
  ["five-levels", "Five Levels", "五層次框架", "building"],
  ["hq", "HQ Design", "總部設計", "scale"],
  ["exhibits", "Exhibits 6–9", "Exhibits 6–9", "grid"],
  ["economics", "Economics", "經濟邏輯", "chart"],
  ["answers", "Quick Answers", "快速作答", "book"]
];

export default function DisneyCorporateStrategyInfrastructure() {
  const [mode, setMode] = useState("en");
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFAF2] text-stone-800 selection:bg-[#622954]/15">
      <div className="mx-auto max-w-[1420px] px-3 pb-24 pt-4 sm:px-5 xl:px-8 xl:pt-6">
        <header className="overflow-hidden rounded-[30px] border border-stone-200 bg-gradient-to-b from-white to-[#F7F2E8] shadow-[0_22px_60px_rgba(0,0,0,0.045)]">
          <div className="grid gap-5 px-4 py-5 sm:px-5 sm:py-6 xl:grid-cols-[1.45fr,0.85fr] xl:gap-8 xl:px-8 xl:py-8">
            <div className="space-y-5 xl:pr-4">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                <Badge className="border-stone-200 bg-white/80 text-stone-600">STRT 6200</Badge>
                <Badge className="border-stone-200 bg-white/80 text-stone-600">Session 12</Badge>
                <Badge className="border-stone-200 bg-white/80 text-stone-600">Corporate Strategy</Badge>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#622954]/15 bg-[#622954]/6 px-3.5 py-1.5 text-sm font-medium text-[#622954]">
                  <Icon name="castle" className="h-4 w-4" />
                  <span>The Walt Disney Company</span>
                </div>
                <h1 className="max-w-[11ch] font-serif text-[2.4rem] font-semibold leading-[0.98] tracking-tight text-stone-900 sm:text-[3.45rem] xl:text-[4.85rem]">
                  {tr(mode, "Corporate Strategy Infrastructure", "企業策略視覺化基礎設施")}
                </h1>
                <p className="max-w-[68ch] text-[15px] leading-7 text-stone-600 sm:text-base xl:text-[17px] xl:leading-8">
                  {tr(mode, "A reader-facing bilingual system for Disney’s expansion logic, related diversification, corporate advantage, and the organization problem underneath the Chapek-Iger reversal.", "一個面向讀者的雙語閱讀系統，聚焦 Disney 的擴張邏輯、related diversification、corporate advantage，以及 Chapek 與 Iger 反轉背後真正的組織問題。")}
                </p>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3 xl:max-w-[840px]">
                <SummaryCard title={tr(mode, "2022 revenue", "2022 營收")} value={tr(mode, "$83.7B", "837 億美元")} subtitle={tr(mode, "Case-opening scale", "案例開頭的整體規模")} tone="teal" />
                <SummaryCard title={tr(mode, "Streaming loss", "串流虧損")} value={tr(mode, "$4B", "40 億美元")} subtitle={tr(mode, "2022 DTC drag", "2022 年 DTC 壓力")} tone="plum" />
                <SummaryCard title={tr(mode, "Disney+ early scale", "Disney+ 初期速度")} value={tr(mode, "100M subs / 18 months", "18 個月破 1 億訂戶")} subtitle={tr(mode, "Fast scale, harder economics", "規模很快，經濟性更難")} tone="bronze" />
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200/90 bg-white/82 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.035)] sm:p-5 xl:self-stretch">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">At a glance</div>
                <Icon name="stack" className="h-5 w-5 text-[#2E5C6E]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <InfoCard icon="compass" title={tr(mode, "Main point", "主線")} tone="teal">
                  {tr(mode, "Disney is not a loose conglomerate. It is a resource-linked franchise system whose value depends on whether HQ can coordinate without weakening creativity.", "Disney 不是鬆散型 conglomerate，而是以資源連結起來的 franchise system。它能否創造價值，取決於總部是否能在不削弱創意的前提下完成協調。")}
                </InfoCard>
                <InfoCard icon="chart" title={tr(mode, "Best reading", "最佳讀法")} tone="bronze">
                  {tr(mode, "Disney is generally worth more than the sum of its parts, but only conditionally. The franchise machine works only when resources, businesses, and organization fit together.", "Disney 整體通常高於各部分之和，但不是自動成立。只有當資源、事業與組織彼此契合時，franchise machine 才真的成立。")}
                </InfoCard>
                <InfoCard icon="puzzle" title={tr(mode, "Where the case gets difficult", "這案真正難點")}>
                  {tr(mode, "This case is difficult because different shared resources create value in different ways, and HQ has to govern them differently.", "這個案例真正難在不同共享資源的價值創造方式不同，總部也必須用不同方式治理它們。")}
                </InfoCard>
              </div>
            </div>
          </div>
        </header>

        <div className="sticky top-2 z-30 mt-4 rounded-[24px] border border-stone-200 bg-white/90 px-2.5 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.05)] backdrop-blur md:top-3 xl:px-3 xl:py-2.5">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <SummaryCard title={tr(mode, "Main point", "主線")} value={tr(mode, "Resource-linked franchise system", "資源連結型 franchise system")} subtitle={tr(mode, "Not a loose conglomerate", "不是鬆散 conglomerate")} tone="teal" />
            <SummaryCard title={tr(mode, "Key numbers", "關鍵數字")} value={tr(mode, "34% revenue / 65% op. income", "34% 營收 / 65% 利益")} subtitle={tr(mode, "DPEP versus DMED", "DPEP 對比 DMED")} tone="bronze" />
            <SummaryCard title={tr(mode, "Safest read", "最穩判讀")} value={tr(mode, "More than the sum of its parts, conditionally", "大於各部分總和，但有條件")} subtitle={tr(mode, "Fit matters", "關鍵在組織契合")} tone="plum" />
          </div>
          <div className="mt-1 flex gap-2 overflow-x-auto">
            {NAV.map(([id, en, zh, icon]) => (
              <a key={id} href={`#${id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-200 bg-[#FCFAF2] px-3 py-1.5 text-[12px] font-medium text-stone-700 transition hover:border-[#2E5C6E]/28 hover:text-[#2E5C6E] xl:text-[13px]">
                <Icon name={icon} className="h-4 w-4" />
                <span>{tr(mode, en, zh)}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-5 xl:mt-6 xl:space-y-6">
          <SectionShell id="overview" eyebrow="overview" icon="compass" title={tr(mode, "Why this case matters", "這個案例為甚麼重要")}>
            <div className="grid gap-4 xl:grid-cols-[1.08fr,0.92fr]">
              <div className="space-y-4">
                <p className="max-w-[68ch] text-[15px] leading-7 text-stone-700">
                  {tr(mode, "Disney is a strong corporate strategy case because it shows both the power and the limit of related diversification. The businesses are broad, but they are tied together by reusable resources rather than by superficial product similarity. The analytical job is to explain how value is created, where it is appropriated, and how organization design either supports or breaks that process.", "這是一個很強的 corporate strategy 案例，因為 Disney 同時清楚展示了 related diversification 的力量與極限。它的事業很廣，但彼此不是靠表面上的產品相似，而是靠可重複使用的資源連結。真正的分析任務，是說明價值如何被創造、在哪裡被取得，以及組織設計如何支撐或破壞這個過程。")}
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  <InfoCard icon="layers" title="Portfolio logic">{tr(mode, "Disney repeatedly moved into businesses that reuse or amplify IP.", "Disney 反覆進入那些能重用或放大 IP 的事業。")}</InfoCard>
                  <InfoCard icon="network" title="Resource logic">{tr(mode, "Relatedness sits in stories, characters, brand, talent, and multiplatform monetization.", "相關性主要存在於故事、角色、品牌、人才與跨平台變現能力。")}</InfoCard>
                  <InfoCard icon="scale" title="Organization logic">{tr(mode, "HQ adds value only if coordination improves economics without choking the creative engine.", "總部只有在協調能改善經濟效果、又不扼殺創意引擎時，才真正創造價值。")}</InfoCard>
                </div>
              </div>

              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "Disney in one visual", "一眼看懂 Disney 的企業邏輯")}</div>
                <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                  <div className="relative mx-auto aspect-square max-w-[360px]">
                    <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#622954]/18 bg-[#622954]/8 text-center shadow-sm">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#622954]">Core</div>
                      <div className="mt-1 text-sm font-semibold text-stone-900">Creative IP</div>
                      <div className="mt-1 max-w-[82px] text-[11px] leading-4 text-stone-500">Brand · Characters · Story worlds</div>
                    </div>
                    <svg className="absolute inset-0 h-full w-full text-stone-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.55">
                      <path d="M50 22 L50 36" />
                      <path d="M69 32 L58 40" />
                      <path d="M72 68 L59 58" />
                      <path d="M50 78 L50 64" />
                      <path d="M28 68 L41 58" />
                      <path d="M31 32 L42 40" />
                    </svg>
                    {[
                      [{ top: "2%", left: "50%", transform: "translateX(-50%)" }, "Film", "電影"],
                      [{ top: "20%", right: "0%" }, "Streaming", "串流"],
                      [{ bottom: "20%", right: "0%" }, "Parks", "樂園"],
                      [{ bottom: "2%", left: "50%", transform: "translateX(-50%)" }, "Products", "商品"],
                      [{ bottom: "20%", left: "0%" }, "Cruises", "郵輪"],
                      [{ top: "20%", left: "0%" }, "Networks", "頻道"]
                    ].map(([style, en, zh]) => (
                      <div key={en} style={style} className="absolute z-10 rounded-2xl border border-stone-200 bg-white px-3 py-2 text-center text-[13px] font-medium text-stone-700 shadow-sm">
                        {tr(mode, en, zh)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="timeline" eyebrow="history" icon="clock" title={tr(mode, "From stories to monetization paths", "從故事走向變現路徑")}>
            <div className="grid gap-4 xl:grid-cols-[0.86fr,1.14fr]">
              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="arrow" className="h-4 w-4 text-[#A67C52]" />Expansion formula</div>
                <div className="space-y-2.5">
                  {[
                    ["1. Create stories", "1. 創造故事"],
                    ["2. Reuse them across adjacent businesses", "2. 把故事延伸到相鄰事業"],
                    ["3. Build channels that capture more of the value", "3. 建立能攔截更多價值的渠道"],
                    ["4. Defend the system through brand and coordination", "4. 用品牌與協調守住整個系統"]
                  ].map(([en, zh], idx) => (
                    <div key={en} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white px-3 py-3">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2E5C6E] text-xs font-semibold text-white">{idx + 1}</div>
                      <div className="text-sm leading-6 text-stone-700">{tr(mode, en, zh)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {TIMELINE.map(([year, enTitle, zhTitle, enBody, zhBody]) => (
                  <div key={year} className="relative rounded-[22px] border border-stone-200 bg-white px-4 py-3.5 pl-5 shadow-sm sm:px-5 sm:py-4 sm:pl-6">
                    <div className="absolute left-3 top-4 h-[calc(100%-2rem)] w-px bg-stone-200 sm:left-4" />
                    <div className="absolute left-[0.39rem] top-5 h-3 w-3 rounded-full bg-[#622954] sm:left-[0.65rem]" />
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{year}</div>
                    <h3 className="mt-1 text-[1.02rem] font-semibold leading-6 text-stone-900">{tr(mode, enTitle, zhTitle)}</h3>
                    <p className="mt-1.5 max-w-[65ch] text-sm leading-6 text-stone-600">{tr(mode, enBody, zhBody)}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell id="scope" eyebrow="scope" icon="layers" title={tr(mode, "Not one industry. Not unrelated diversification.", "不是單一產業，也不是不相關多角化")}>
            <div className="grid gap-4 xl:grid-cols-[1.08fr,0.92fr]">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {INDUSTRIES.map(([icon, enTitle, zhTitle, enBody, zhBody, chips]) => (
                  <div key={enTitle} className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2E5C6E]/8 text-[#2E5C6E]">
                      <Icon name={icon} className="h-5 w-5" />
                    </div>
                    <h3 className="text-[15px] font-semibold leading-6 text-stone-900">{tr(mode, enTitle, zhTitle)}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-stone-600">{tr(mode, enBody, zhBody)}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {chips.map((chip) => (
                        <Badge key={chip} className="border-stone-200 bg-stone-50 text-stone-600">{chip}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "How to characterize Disney", "應如何定性")}</div>
                  <div className="mt-3 grid gap-3">
                    {[
                      ["Too vague", "太模糊", "Calling Disney one industry makes profit analysis too vague.", "若把 Disney 當成單一產業，利潤來源分析會過度模糊。", "#C46243"],
                      ["Misses the system", "會漏掉系統性", "Calling it unrelated diversification misses the shared resource system.", "若把它當成 unrelated diversification，就會看不到共享資源系統。", "#A67C52"],
                      ["Best reading", "最佳判讀", "Related diversification built around creative IP, characters, brand equity, franchise development, and multiplatform monetization.", "以創意 IP、角色、品牌資產、franchise 開發與跨平台變現為核心的 related diversification。", "#2E5C6E"]
                    ].map(([enState, zhState, enBody, zhBody, color]) => (
                      <div key={enState} className="rounded-2xl border border-stone-200 bg-white p-4">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color }}>{tr(mode, enState, zhState)}</div>
                        <p className="mt-1.5 text-sm leading-6 text-stone-700">{tr(mode, enBody, zhBody)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <InfoCard icon="network" title="Exhibit 6, in one sentence">{tr(mode, "Walt’s 1957 map already shows the core logic. Streaming is new. The franchise system is not.", "Walt 1957 年的圖已經把核心邏輯畫出來了。新的是串流，不是 franchise system 本身。")}</InfoCard>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="relatedness" eyebrow="relatedness" icon="network" title={tr(mode, "Relatedness is about resources, not products", "相關性看資源，不看產品表面")}>
            <div className="grid gap-4 xl:grid-cols-[0.96fr,1.04fr]">
              <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "Shared system", "核心共享系統")}</div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="spark" className="h-4 w-4 text-[#622954]" />Resources</div>
                    <ul className="space-y-2 text-sm leading-6 text-stone-600">
                      {tr(mode, ["Characters and IP library", "Disney brand", "Creative talent", "BamTech streaming infrastructure", "ABC / ESPN distribution assets"], ["角色與 IP 庫", "Disney 品牌", "創意人才", "BamTech 串流基礎設施", "ABC / ESPN 配銷資產"]).map((item) => (
                        <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#622954]" /><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="puzzle" className="h-4 w-4 text-[#2E5C6E]" />Activities and knowledge</div>
                    <ul className="space-y-2 text-sm leading-6 text-stone-600">
                      {tr(mode, ["Franchise planning", "Cross-platform promotion", "Window management", "Audience insight", "Yield management and localization"], ["franchise 規劃", "跨平台交叉推廣", "窗口管理", "受眾洞察", "收益管理與在地化"]).map((item) => (
                        <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2E5C6E]" /><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-sm font-semibold text-stone-800">{tr(mode, "Important reminder", "重要提醒")}</div>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">{tr(mode, "Product similarity can mislead. Movies, cruises, parks, and merchandise do not look alike. The better question is whether the same resource base makes each business more competitive.", "產品相似度很容易誤導。電影、郵輪、樂園與商品看起來不像同一類生意。真正應問的是，同一組資源是否讓各事業都更有競爭力。")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  {RESOURCES.map(([enKind, zhKind, color, enList, zhList]) => (
                    <div key={enKind} className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color }}>{tr(mode, enKind, zhKind)}</div>
                      <ul className="mt-2.5 space-y-2 text-sm leading-6 text-stone-600">
                        {tr(mode, enList, zhList).map((item) => (
                          <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "What this means for corporate strategy", "這對企業策略代表甚麼")}</div>
                  <p className="max-w-[67ch] text-sm leading-7 text-stone-700">{tr(mode, "Public goods travel easily across the portfolio. Private goods need explicit coordination and often generate conflict. Disney’s corporate-center problem sits exactly here. The case is not merely about having synergies. It is about governing different kinds of synergies correctly.", "公共財型資產可以比較容易地在組合中流動。私人財型資產則需要明確協調，也更容易產生衝突。Disney 的 corporate center 問題，就卡在這裡。這個案例不只是「有沒有 synergy」，而是「不同類型的 synergy 要怎麼被正確治理」。")}</p>
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="five-levels" eyebrow="framework" icon="building" title={tr(mode, "The Five Levels read on Disney", "用五層次框架重讀 Disney")}>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {FIVE_LEVELS.map(([icon, enTitle, zhTitle, enBody, zhBody]) => (
                <div key={enTitle} className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-stone-700">
                    <Icon name={icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold leading-6 text-stone-900">{tr(mode, enTitle, zhTitle)}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">{tr(mode, enBody, zhBody)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[24px] border border-[#A67C52]/18 bg-[#A67C52]/7 p-4 sm:p-5">
              <p className="max-w-[73ch] text-sm leading-7 text-stone-700">{tr(mode, "Disney cannot be explained by a single lens. Industry economics matter. Complementarities matter. National institutions matter. But the decisive managerial issue in this case is whether firm-level organization design is aligned with a multibusiness system built on shared resources.", "Disney 不能被單一視角解釋。產業經濟重要，互補關係重要，國家制度也重要。但這個案例最決定性的管理問題，是企業層次的組織設計，是否和一個建立在共享資源上的多事業系統相契合。")}</p>
            </div>
          </SectionShell>

          <SectionShell id="hq" eyebrow="organization" icon="scale" title={tr(mode, "HQ design decides whether synergy becomes value or conflict", "總部設計決定 synergy 會變成價值還是衝突")} right={<Badge className="border-[#622954]/15 bg-[#622954]/6 text-[#622954]">Walt → Eisner → Iger → Chapek</Badge>}>
            <div className="grid gap-4 xl:grid-cols-[1.08fr,0.92fr]">
              <div className="grid gap-3 md:grid-cols-2">
                {CEOS.map(([enName, zhName, years, enBody, zhBody, tone]) => (
                  <div key={enName} className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: tone }}>{years}</div>
                    <h3 className="mt-1.5 text-[1.02rem] font-semibold leading-6 text-stone-900">{tr(mode, enName, zhName)}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{tr(mode, enBody, zhBody)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "Six HQ value-creation jobs", "Disney 總部最應該做的六件事")}</div>
                  <div className="mt-3 grid gap-2.5">
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
                        <span>{tr(mode, en, zh)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-sm font-semibold text-stone-800">{tr(mode, "Cleanest takeaway", "最乾淨的總結")}</div>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">{tr(mode, "HQ creates value when it coordinates without crushing creativity. The case gives strong evidence that Chapek’s centralization pushed too far in the direction of control.", "總部真正創造價值的前提，是能協調而不壓垮創意。案例提供了很強的證據，顯示 Chapek 的集中化把控制推得太前面了。")}</p>
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="exhibits" eyebrow="visual exhibits" icon="grid" title={tr(mode, "Exhibits 6–9, rebuilt as denser native visuals", "Exhibits 6–9，重建成更像原生 exhibit 的高密度圖版")}>
            <div className="grid gap-4 xl:grid-cols-2">
              <ExhibitFrame number="6" title={tr(mode, "Walt Disney’s original synergy conception", "Walt Disney 最早的協同概念")} subtitle={tr(mode, "Creative Talent at the center, feeding multiple business lines", "以 Creative Talent 為中心，向外連到多條商業線")}>
                <div className="rounded-[22px] border border-stone-200 bg-[#FCFAF2] p-3 sm:p-4">
                  <div className="relative mx-auto aspect-[1.08/1] max-w-[500px]">
                    <svg className="absolute inset-0 h-full w-full text-stone-300" viewBox="0 0 100 92" fill="none" stroke="currentColor" strokeWidth="0.55">
                      <path d="M50 44 L50 18" />
                      <path d="M62 44 L82 27" />
                      <path d="M62 52 L85 60" />
                      <path d="M50 56 L50 79" />
                      <path d="M38 52 L15 60" />
                      <path d="M38 44 L18 27" />
                      <path d="M31 44 L10 44" />
                      <path d="M69 44 L90 44" />
                    </svg>
                    <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#622954]/18 bg-[#622954]/8 text-center shadow-sm">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#622954]">Core</div>
                      <div className="mt-1 text-sm font-semibold text-stone-900">Creative Talent</div>
                    </div>
                    {[
                      [{ left: "50%", top: "3%", transform: "translateX(-50%)" }, "TV", "電視"],
                      [{ right: "3%", top: "16%" }, "Music", "音樂"],
                      [{ right: "0%", top: "40%", transform: "translateY(-50%)" }, "Merchandise / Licensing", "商品 / 授權"],
                      [{ right: "4%", bottom: "12%" }, "Disneyland", "Disneyland"],
                      [{ left: "50%", bottom: "0%", transform: "translateX(-50%)" }, "16mm Films", "16mm 影片"],
                      [{ left: "4%", bottom: "12%" }, "Publications", "出版"],
                      [{ left: "0%", top: "40%", transform: "translateY(-50%)" }, "Comic Strips", "漫畫條漫"],
                      [{ left: "4%", top: "16%" }, "Cross-use", "跨用"]
                    ].map(([style, en, zh]) => (
                      <div key={en} style={style} className="absolute z-10 rounded-2xl border border-stone-200 bg-white px-3 py-2 text-center text-[12px] font-medium leading-4 text-stone-700 shadow-sm">
                        {tr(mode, en, zh)}
                      </div>
                    ))}
                  </div>
                </div>
              </ExhibitFrame>

              <ExhibitFrame number="7" title={tr(mode, "Iger-era multi-divisional structure", "Iger 時期的多事業結構")} subtitle={tr(mode, "Focused redraw of the five major divisions and accountability split", "重點在五個主要事業群與責任分工")}>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-stone-200 bg-[#FCFAF2] px-4 py-3 text-center text-sm font-semibold text-stone-900">The Walt Disney Company</div>
                  <div className="grid gap-3 xl:grid-cols-3">
                    {EXHIBIT7_TOP.map(([enTitle, zhTitle, tone, enItems, zhItems]) => (
                      <div key={enTitle} className="rounded-[20px] border border-stone-200 bg-white p-3.5 shadow-sm">
                        <div className="rounded-xl px-2.5 py-2 text-[12px] font-semibold leading-5 text-white" style={{ backgroundColor: tone }}>
                          {tr(mode, enTitle, zhTitle)}
                        </div>
                        <div className="mt-3 space-y-1.5 text-[12px] leading-5 text-stone-600">
                          {tr(mode, enItems, zhItems).map((item) => (
                            <div key={item} className="rounded-lg bg-stone-50 px-2.5 py-1.5">{item}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3 xl:grid-cols-2">
                    {EXHIBIT7_BOTTOM.map(([enTitle, zhTitle, tone, enItems, zhItems]) => (
                      <div key={enTitle} className="rounded-[20px] border border-stone-200 bg-white p-3.5 shadow-sm">
                        <div className="rounded-xl px-2.5 py-2 text-[12px] font-semibold leading-5 text-white" style={{ backgroundColor: tone }}>
                          {tr(mode, enTitle, zhTitle)}
                        </div>
                        <div className="mt-3 space-y-1.5 text-[12px] leading-5 text-stone-600">
                          {tr(mode, enItems, zhItems).map((item) => (
                            <div key={item} className="rounded-lg bg-stone-50 px-2.5 py-1.5">{item}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ExhibitFrame>

              <ExhibitFrame number="8" title={tr(mode, "Revenue by geographic region", "地理區域營收結構")} subtitle={tr(mode, "The key read is structure and direction rather than exact annual plotting", "重點不是精確年度點位，而是結構與方向")}>
                <div className="grid gap-4 xl:grid-cols-[0.92fr,1.08fr]">
                  <div className="space-y-3 rounded-[22px] border border-stone-200 bg-[#FCFAF2] p-4">
                    <div className="text-sm font-semibold text-stone-800">{tr(mode, "What to read from this exhibit", "這張圖要讀出甚麼")}</div>
                    {[
                      ["Americas", tr(mode, "Dominant region", "主導區域"), "82%", "#2E5C6E"],
                      ["Europe", tr(mode, "Secondary", "次要"), "36%", "#8A6138"],
                      ["Asia Pacific", tr(mode, "Secondary", "次要"), "31%", "#622954"]
                    ].map(([label, note, width, color]) => (
                      <div key={label}>
                        <div className="flex items-center justify-between gap-2 text-[12px] text-stone-600"><span className="font-medium">{label}</span><span>{note}</span></div>
                        <div className="mt-1 h-2 rounded-full bg-stone-200"><div className="h-2 rounded-full" style={{ width, backgroundColor: color }} /></div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      {[
                        ["Since 2005", "<25%", tr(mode, "International revenue stayed below one quarter of total revenue.", "國際營收對總營收貢獻長期未超過四分之一。")],
                        ["2022", "<20%", tr(mode, "By 2022, the international share had dropped below one fifth.", "到 2022 年，國際收入比重進一步下滑。")],
                        ["Americas note", "~95%", tr(mode, "Around 95% of the Americas base is North America.", "Americas 內約 95% 其實是北美。")]
                      ].map(([label, value, body]) => (
                        <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</div>
                          <div className="mt-1.5 text-lg font-semibold text-stone-900">{value}</div>
                          <div className="mt-1 text-sm leading-6 text-stone-600">{body}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl border border-[#A67C52]/18 bg-[#A67C52]/7 p-4">
                      <p className="text-sm leading-6 text-stone-700">{tr(mode, "Disney is global in footprint, but not equally global in revenue contribution. International expansion matters, yet the company still remains heavily anchored in North America.", "Disney 的版圖很全球化，但營收貢獻並不平均。國際擴張很重要，但公司依然高度錨定在北美市場。")}</p>
                    </div>
                  </div>
                </div>
              </ExhibitFrame>

              <ExhibitFrame number="9" title={tr(mode, "2022 segment revenues and operating income", "2022 分部營收與營業利益")} subtitle={tr(mode, "The clearest exhibit for a conditional sum-of-parts judgment", "最能直接支持條件式 sum-of-parts 判斷的 exhibit")}>
                <div className="grid gap-4 xl:grid-cols-[0.98fr,1.02fr]">
                  <div className="rounded-[22px] border border-stone-200 bg-[#FCFAF2] p-4">
                    <div className="mb-3 text-sm font-semibold text-stone-800">{tr(mode, "Data table", "數值表")}</div>
                    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                      <div className="grid grid-cols-[1.5fr,0.9fr,0.9fr] bg-stone-50 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                        <div className="px-3 py-2">Segment</div>
                        <div className="px-3 py-2 text-right">Revenue</div>
                        <div className="px-3 py-2 text-right">Op. income</div>
                      </div>
                      {[
                        ["Disney Media and Entertainment Distribution", "DMED", "55,040", "4,216"],
                        ["Disney Parks, Experiences and Products", "DPEP", "28,705", "7,905"]
                      ].map(([full, short, rev, op]) => (
                        <div key={short} className="grid grid-cols-[1.5fr,0.9fr,0.9fr] border-t border-stone-200 text-sm text-stone-700">
                          <div className="px-3 py-3 leading-5"><span className="font-medium text-stone-900">{short}</span><div className="text-[12px] text-stone-500">{full}</div></div>
                          <div className="px-3 py-3 text-right font-medium">{rev}</div>
                          <div className="px-3 py-3 text-right font-medium">{op}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                      <div className="mb-3 text-sm font-semibold text-stone-800">{tr(mode, "Revenue mix", "營收占比")}</div>
                      <div className="space-y-4">
                        <StatBar label="DMED" value={55040} max={55040} color="#2E5C6E" note={tr(mode, "66% of revenue", "66% 營收占比")} />
                        <StatBar label="DPEP" value={28705} max={55040} color="#A67C52" note={tr(mode, "34% of revenue", "34% 營收占比")} />
                      </div>
                    </div>
                    <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                      <div className="mb-3 text-sm font-semibold text-stone-800">{tr(mode, "Operating income mix", "營業利益占比")}</div>
                      <div className="space-y-4">
                        <StatBar label="DMED" value={4216} max={7905} color="#2E5C6E" note={tr(mode, "35% of operating income", "35% 利益占比")} />
                        <StatBar label="DPEP" value={7905} max={7905} color="#A67C52" note={tr(mode, "65% of operating income", "65% 利益占比")} />
                      </div>
                    </div>
                  </div>
                </div>
              </ExhibitFrame>
            </div>
          </SectionShell>

          <SectionShell id="economics" eyebrow="economics" icon="chart" title={tr(mode, "The sum-of-parts test and segment economics", "整體高於分部總和的檢驗與分部經濟學")}>
            <div className="grid gap-4 xl:grid-cols-[1.02fr,0.98fr]">
              <div className="rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="chart" className="h-4 w-4 text-[#2E5C6E]" />2022 segment breakdown</div>
                <div className="space-y-5">
                  <StatBar label={tr(mode, "DMED revenue", "DMED 營收")} value={55040} max={55040} color="#2E5C6E" note={tr(mode, "66% of revenue", "66% 營收占比")} />
                  <StatBar label={tr(mode, "DPEP revenue", "DPEP 營收")} value={28705} max={55040} color="#A67C52" note={tr(mode, "34% of revenue", "34% 營收占比")} />
                  <div className="h-px bg-stone-200" />
                  <StatBar label={tr(mode, "DMED operating income", "DMED 營業利益")} value={4216} max={7905} color="#2E5C6E" note={tr(mode, "35% of segment operating income", "35% 利益占比")} />
                  <StatBar label={tr(mode, "DPEP operating income", "DPEP 營業利益")} value={7905} max={7905} color="#A67C52" note={tr(mode, "65% of segment operating income", "65% 利益占比")} />
                </div>
                <div className="mt-5 rounded-2xl border border-[#A67C52]/18 bg-[#A67C52]/7 p-4">
                  <p className="text-sm leading-6 text-stone-700">{tr(mode, "The economic roles differ. Streaming and media distribution help capture audience access and keep Disney relevant in the new stack. Parks monetize the same IP at far higher margins. The corporate system matters because no single unit reveals the full economics.", "兩個分部扮演的經濟角色不同。串流與媒體配銷有助於掌握觀眾接觸與新時代的存在感；樂園則用同一批 IP 以更高利潤率變現。也正因如此，只有放回 corporate system 才看得到完整經濟學。")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Collis & Montgomery acid test</div>
                  <p className="max-w-[66ch] text-sm leading-7 text-stone-700">{tr(mode, "The corporation’s businesses must not be worth more to another owner. Under Iger, the answer is broadly yes: Disney’s system appears to deepen the value of acquired franchises. Under Chapek, the answer becomes shakier because creative backlash, organizational friction, and weak streaming economics suggest value leakage at the corporate level.", "企業的各事業不應該在別的 owner 手中更有價值。Iger 時期，大致可回答 yes，因為 Disney 的系統明顯能放大被收購 franchise 的價值。Chapek 時期，答案就比較不穩，因為創意反彈、組織摩擦與偏弱的串流經濟學，都暗示 corporate level 出現價值流失。")}</p>
                </div>
                <div className="rounded-[24px] border border-stone-200 bg-[#FCFAF2] p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-800"><Icon name="spark" className="h-4 w-4 text-[#622954]" />Why Disney can be a preferred buyer</div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {MONETIZATION.map(([en, zh]) => (
                      <div key={en} className="rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700">{tr(mode, en, zh)}</div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{tr(mode, "This is the practical meaning of corporate advantage. Disney can often justify premium acquisition prices because its platform can generate more lifetime value from a franchise than most alternative owners.", "這就是 corporate advantage 的實務意義。Disney 往往能合理支付較高收購價格，因為它的平台能從同一個 franchise 中擷取出比多數其他 owner 更高的生命週期價值。")}</p>
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="answers" eyebrow="quick review" icon="book" title={tr(mode, "Seven study answers, tightened for fast review", "七題作答，壓縮成快速複習版")}>
            <div className="space-y-3">
              {QA.map(([enQ, zhQ, enA, zhA], idx) => (
                <details key={enQ} className="group rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm open:bg-stone-50/70">
                  <summary className="flex cursor-pointer list-none items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2E5C6E] text-xs font-semibold text-white">{idx + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold leading-6 text-stone-900">{tr(mode, enQ, zhQ)}</h3>
                    </div>
                    <div className="rounded-full border border-stone-200 p-1 text-stone-500 transition group-open:rotate-180"><Icon name="arrow" className="h-4 w-4 rotate-90" /></div>
                  </summary>
                  <div className="pl-10 pt-3">
                    <p className="max-w-[70ch] text-sm leading-7 text-stone-700">{tr(mode, enA, zhA)}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              <div className="rounded-[24px] border border-[#622954]/15 bg-[#622954]/6 p-4 sm:p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#622954]">{tr(mode, "Quick recap", "快速總結")}</div>
                <p className="max-w-[72ch] text-sm leading-7 text-stone-700">{tr(mode, "Disney is a strong corporate strategy case because it shows both the power and the limit of related diversification. Its businesses are broad, but they are tied together by shared resources such as creative IP, brand, franchise development capability, and multiplatform monetization. Walt’s original synergy map, Eisner’s cross-selling model, and Iger’s content, technology, and international strategy all reinforced that system. But Chapek’s restructuring also shows that diversification alone does not create value. Corporate advantage depends on fit between resources, businesses, organization, and control.", "Disney 是很強的 corporate strategy 案例，因為它同時展示了 related diversification 的力量與極限。它的事業很廣，但彼此由共享資源連結，例如創意 IP、品牌、franchise 開發能力，以及跨平台變現能力。Walt 最早的 synergy 地圖、Eisner 的交叉銷售模式、以及 Iger 的內容、科技、國際化三支柱，都在強化這套系統。但 Chapek 的重組也顯示，多角化本身不會自動創造價值。真正的 corporate advantage 取決於資源、事業、組織與控制之間是否契合。")}</p>
              </div>
              <div className="rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{tr(mode, "Three things worth retaining", "這一頁最值得記住的三點")}</div>
                <ul className="space-y-2.5 text-sm leading-6 text-stone-600">
                  {[
                    tr(mode, "Disney’s corporate logic is old. Streaming is a new carrier, not a new logic.", "Disney 的 corporate logic 很早就存在，串流只是新載體，不是新邏輯。"),
                    tr(mode, "Relatedness sits in resources, not product form.", "相關性在資源，不在產品形式。"),
                    tr(mode, "Whether Disney is worth more than the sum of its parts depends on whether HQ can coordinate without suffocating creativity.", "是否大於各部分總和，關鍵在總部能否協調而不扼殺創意。")
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionShell>
        </div>
      </div>

      <div className="fixed bottom-3 right-3 z-40 flex flex-col items-end gap-2 md:bottom-5 md:right-5">
        {toggleOpen ? (
          <div className="rounded-2xl border border-stone-200 bg-white/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur">
            <div className="grid gap-2">
              {[
                ["en", "EN"],
                ["zh", "中文"]
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setMode(key);
                    setToggleOpen(false);
                  }}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${mode === key ? "bg-[#2E5C6E] text-white" : "bg-[#FCFAF2] text-stone-700 hover:bg-stone-100"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <button
          onClick={() => setToggleOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-stone-700 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur transition hover:text-[#2E5C6E] md:h-12 md:w-12"
          aria-label="Toggle language"
        >
          <Icon name="translate" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
