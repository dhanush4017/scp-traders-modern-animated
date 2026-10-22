import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search, ShoppingCart, UserRound, Headset, Truck, Smartphone, Menu,
  ChevronDown, ChevronRight, ArrowRight, Package, ShieldCheck,
  Users, CalendarDays, ChartNoAxesColumnIncreasing, FileText, CheckCircle2,
  MapPin, Mail, Phone, X, Sparkles, MessageCircle, Eye, Factory,
  Layers, Award, Check, Flame, Zap
} from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "919840000000";

const categories = [
  { title: "PET Jars", subtitle: "Clear jars in multiple capacities", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
  { title: "PET Bottles", subtitle: "Bottles for everyday packaging", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80" },
  { title: "Plastic Jars", subtitle: "Round, square and utility jars", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80" },
  { title: "Honey Jars", subtitle: "Honey bottles and flip-top jars", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80" },
  { title: "Edible Oil Bottles", subtitle: "Square & round CTC bottles", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80" },
  { title: "Water Bottles", subtitle: "PET drinking water bottles & jars", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80" },
  { title: "Water Cans", subtitle: "20L & heavy-duty mineral jars", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80" },
  { title: "Peanut Candy", subtitle: "Wide-mouth jars for confectionery", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
  { title: "Bubble Top Can", subtitle: "5L - 20L commercial water cans", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80" },
  { title: "New Items", subtitle: "Latest additions & custom moulds", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
];

const products = [
  { 
    name: "Pickle PET Jar", 
    category: "PET Jars", 
    size: "500 ml", 
    neck: "83 mm Wide Mouth",
    material: "100% Virgin Food-Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Square transparent PET jar designed for pickles, pastes, and food packaging." 
  },
  { 
    name: "330ml Pickle PET Jar", 
    category: "PET Jars", 
    size: "330 ml", 
    neck: "63 mm Wide Mouth",
    material: "100% Virgin Food-Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Compact airtight jar ideal for pickle, spice powder, and food sampling." 
  },
  { 
    name: "50ml Sample PET Jar", 
    category: "PET Jars", 
    size: "50 ml", 
    neck: "38 mm Neck",
    material: "High Clarity PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Small-capacity PET jar for cosmetics, ointments, and travel packaging." 
  },
  { 
    name: "100ml PET Jar", 
    category: "PET Jars", 
    size: "100 ml", 
    neck: "46 mm Neck",
    material: "Food Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Clear PET jar for spices, confectionery, and pharmaceutical goods." 
  },
  { 
    name: "470ml Square PET Jar", 
    category: "PET Jars", 
    size: "470 ml", 
    neck: "73 mm Neck",
    material: "Food Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Square profile jar designed for retail pantry shelves and snacks packaging." 
  },
  { 
    name: "3000ml (3L) Bulk PET Jar", 
    category: "PET Jars", 
    size: "3000 ml (3 L)", 
    neck: "100 mm with Handle",
    material: "Heavy-duty Food Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Large capacity PET jar equipped with sturdy grip for commercial kitchens." 
  },
  { 
    name: "2000ml Square CTC PET Bottle", 
    category: "PET Bottles", 
    size: "2000 ml (2 L)", 
    neck: "38 mm CTC Neck Finish",
    material: "High Impact Virgin PET",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", 
    detail: "Square PET bottle with tamper-evident CTC neck finish for liquids." 
  },
  { 
    name: "500ml Standard PET Bottle", 
    category: "PET Bottles", 
    size: "500 ml", 
    neck: "28 mm PCO Neck",
    material: "Crystal Clear PET",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", 
    detail: "Everyday versatile PET bottle for juices, water, and FMCG liquids." 
  },
  { 
    name: "500ml Dish Wash PET Bottle", 
    category: "PET Bottles", 
    size: "500 ml", 
    neck: "28 mm Push-Pull / Flip",
    material: "Chemical Resistant PET",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", 
    detail: "Ergonomic bottle shape designed for dishwashing gels and detergents." 
  },
  { 
    name: "5000ml (5L) Edible Oil PET Bottle", 
    category: "Edible Oil Bottles", 
    size: "5000 ml (5 L)", 
    neck: "46 mm CTC with Handle",
    material: "Heavy-duty Virgin PET",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", 
    detail: "Heavyweight 5L PET bottle with built-in ergonomic handle for edible oils." 
  },
  { 
    name: "250ml Olive Oil PET Bottle", 
    category: "Edible Oil Bottles", 
    size: "250 ml", 
    neck: "31.5 mm ROPP / CTC",
    material: "UV Resistant Amber/Clear PET",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", 
    detail: "Premium slender bottle crafted for virgin olive oil and gourmet liquids." 
  },
  { 
    name: "Plain Round PET Jar", 
    category: "Plastic Jars", 
    size: "100ml / 200ml / 500ml", 
    neck: "63 mm / 83 mm",
    material: "100% Food Grade PET",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=85", 
    detail: "Classic cylindrical plain round jar with multiple closure cap options." 
  },
  { 
    name: "400ml Pure Ghee PET Jar", 
    category: "Plastic Jars", 
    size: "400 ml", 
    neck: "73 mm Air-tight Seal",
    material: "Heat-stable Food Grade PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Round PET jar with induction sealing suitability for pure cow ghee." 
  },
  { 
    name: "500g Honey Squeezy Bottle", 
    category: "Honey Jars", 
    size: "500 g / 370 ml", 
    neck: "38 mm Silicone Valve Cap",
    material: "Food Grade PET",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", 
    detail: "Squeeze-friendly transparent bottle with drip-free silicone valve cap." 
  },
  { 
    name: "250g Flip-top Honey Bottle", 
    category: "Honey Jars", 
    size: "250 g / 200 ml", 
    neck: "38 mm Flip-top",
    material: "Food Grade PET",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", 
    detail: "Compact retail honey bottle with flip-top dispenser." 
  },
  { 
    name: "1 Litre Edible Oil Bottle", 
    category: "Edible Oil Bottles", 
    size: "1000 ml (1 L)", 
    neck: "36 mm CTC Tamper Proof",
    material: "100% Virgin PET",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", 
    detail: "High strength 1L bottle for sunflower, sesame, groundnut, and coconut oils." 
  },
  { 
    name: "2 Litre Square Oil Bottle", 
    category: "Edible Oil Bottles", 
    size: "2000 ml (2 L)", 
    neck: "36 mm CTC",
    material: "Food Grade PET",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", 
    detail: "Square body design allowing maximum shelf-space efficiency in transit." 
  },
  { 
    name: "1000ml PET Water Bottle", 
    category: "Water Bottles", 
    size: "1000 ml (1 L)", 
    neck: "28 mm PCO / Alaska",
    material: "Lightweight High Clarity PET",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", 
    detail: "Standard packaged drinking water bottle with rib grip structure." 
  },
  { 
    name: "20L Round Mineral Water Jar", 
    category: "Water Cans", 
    size: "20 Litres", 
    neck: "55 mm Standard",
    material: "Extra Heavy-duty PET",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85", 
    detail: "Round 20L transparent bubble top water jar for water suppliers." 
  },
  { 
    name: "560ml Green Tea & Confectionery Jar", 
    category: "Peanut Candy", 
    size: "560 ml", 
    neck: "73 mm Cap",
    material: "Clear PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Airtight cylindrical jar for dry snacks, peanut candy, and herbal teas." 
  },
  { 
    name: "5L Bubble Top Water Can", 
    category: "Bubble Top Can", 
    size: "5 Litres", 
    neck: "46 mm Screw Cap",
    material: "Heavy-duty Food Grade PET",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85", 
    detail: "5-litre water dispenser bottle with integrated handle for homes and offices." 
  },
  { 
    name: "Premium Cookie & Bakery Jar", 
    category: "New Items", 
    size: "1000 ml - 2500 ml", 
    neck: "90 mm Wide Opening",
    material: "Food Grade Transparent PET",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", 
    detail: "Hexagonal / round wide-mouth jar crafted for biscuits and confectionery." 
  }
];

const filterCategories = [
  "All", 
  "PET Jars", 
  "PET Bottles", 
  "Plastic Jars", 
  "Honey Jars", 
  "Edible Oil Bottles", 
  "Water Bottles", 
  "Water Cans"
];

const industries = [
  { name: "Pickles & Food", desc: "Wide mouth PET jars with leak-proof induction seals", icon: Package },
  { name: "Edible Oils & Ghee", desc: "CTC tamper-evident bottles with integrated handle", icon: Factory },
  { name: "Honey & Syrups", desc: "Drip-free squeeze bottles & flip-top cap jars", icon: Layers },
  { name: "Water & Beverages", desc: "500ml to 20L bubble-top cans & drinking water bottles", icon: Award },
  { name: "FMCG & Chemicals", desc: "Detergent bottles & commercial utility containers", icon: ShieldCheck },
];

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeProductCategory, setActiveProductCategory] = useState(categories[0].title);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    product: "PET Jars",
    qty: "1000 pcs",
    note: ""
  });

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = (p.name + " " + p.category + " " + p.size + " " + p.detail).toLowerCase().includes(search.toLowerCase());
    const matchesFilter = selectedFilter === "All" || p.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getWhatsAppLink = (productName, size) => {
    const text = encodeURIComponent(`Hello SCP TRADERS, I would like to inquire about wholesale pricing and MOQ for ${productName} (${size}).`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.phone) {
      showNotice("Please enter your name and phone number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello SCP TRADERS,\nI want a quotation:\nName: ${quoteForm.name}\nPhone: ${quoteForm.phone}\nProduct Required: ${quoteForm.product}\nQuantity: ${quoteForm.qty}\nNote: ${quoteForm.note || 'None'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    showNotice("Thank you! Opening WhatsApp to send your quotation request.");
  };

  return (
    <div className="site-shell" onMouseLeave={() => setActiveMenu(null)}>
      {/* 1. ANIMATED TOP MARQUEE TICKER */}
      <div className="marquee-bar">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span> Welcome to SCP TRADERS — Tamil Nadu's Premier PET Packaging Partner</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 100% Virgin Food-Grade PET Jars & Bottles</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Direct Factory Wholesale Rates & Custom Mould Support</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Available from 50ml to 20 Litres</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Reliable Pan-India & Tamil Nadu Dispatch</div>
          <div className="marquee-item"><span className="marquee-dot"></span> Welcome to SCP TRADERS — Tamil Nadu's Premier PET Packaging Partner</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 100% Virgin Food-Grade PET Jars & Bottles</div>
        </div>
      </div>

      {/* 2. TOPBAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-links">
            <span className="top-badge-state">📍 Tamil Nadu, India</span>
            <a href="tel:+919840000000"><Phone size={14} /> +91 98400 00000</a>
            <a href="#contact"><Mail size={14} /> sales@scptraders.com</a>
          </div>
          <div className="top-right">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SCP%20Traders`} target="_blank" rel="noreferrer" className="top-whatsapp-link">
              <MessageCircle size={15} /> Instant WhatsApp Order
            </a>
            <a href="#quote-form"><Sparkles size={14} /> Request Bulk Quote</a>
          </div>
        </div>
      </div>

      {/* 3. MAIN HEADER */}
      <header className="main-header">
        <div className="container header-main">
          <a className="brand" href="#home" aria-label="SCP TRADERS home">
            <img className="brand-logo" src="/src/scp-traders-logo.png" alt="SCP TRADERS Logo" />
          </a>
          
          <form className="search-box" onSubmit={e => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>
            <Search size={20} />
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              placeholder="Search jars, bottles, caps, capacities (e.g. 500ml, 1L)..." 
              aria-label="Search products" 
            />
            {search && <button className="clear-search" type="button" onClick={() => setSearch("")} aria-label="Clear search"><X size={16}/></button>}
          </form>

          <div className="header-actions">
            <button className="cart-button" onClick={() => showNotice(`You have added ${cartCount} items to your RFQ list.`)} aria-label="RFQ Enquiry List">
              <ShoppingCart size={22} />
              <span className="cart-count">{cartCount}</span>
            </button>
            <a href="#quote-form" className="header-quote-btn">
              <FileText size={17} /> Get a Quote
            </a>
            <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* NAVIGATION WITH WOW-FACTOR 3-COLUMN DROPDOWN */}
        <nav className={`navigation ${mobileMenu ? "navigation-open" : ""}`} aria-label="Main navigation">
          <div className="container nav-inner">
            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}>
              <a href="#home" onClick={() => { setMobileMenu(false); setActiveMenu(null); }}>Home</a>
            </div>
            
            {/* ULTRA-MODERN DROPDOWN: Opens on hover, closes automatically on leave */}
            <div 
              className="nav-item" 
              onMouseEnter={() => setActiveMenu("Products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a 
                href="#products" 
                onClick={() => { setMobileMenu(false); setActiveMenu(null); }}
              >
                All Products <ChevronDown className="nav-chevron" size={13}/>
              </a>
              {activeMenu === "Products" && (
                <div 
                  className="unique-mega-dropdown"
                  onMouseEnter={() => setActiveMenu("Products")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {/* Column 1: Category Selection */}
                  <div className="dropdown-col-cats">
                    <span className="dropdown-col-title">Categories</span>
                    {categories.map(cat => (
                      <button 
                        type="button" 
                        key={cat.title}
                        className={`dropdown-cat-btn ${activeProductCategory === cat.title ? "is-active" : ""}`}
                        onMouseEnter={() => setActiveProductCategory(cat.title)}
                        onClick={() => { setSelectedFilter(cat.title); setSearch(""); setActiveMenu(null); setMobileMenu(false); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                      >
                        <span>{cat.title}</span>
                        <ChevronRight size={14}/>
                      </button>
                    ))}
                  </div>

                  {/* Column 2: Items in Selected Category */}
                  <div className="dropdown-col-items">
                    <div className="dropdown-col-items-header">
                      <h4><Flame size={17} style={{ color: 'var(--orange)' }} /> {activeProductCategory} Range</h4>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>Food Grade PET</span>
                    </div>
                    <div className="dropdown-items-scroll">
                      {products.filter(p => p.category === activeProductCategory).map(p => (
                        <div 
                          key={p.name} 
                          className="dropdown-item-row"
                          onClick={() => { setSearch(p.name); setActiveMenu(null); setMobileMenu(false); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <span>{p.name}</span>
                          <small>{p.size}</small>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="dropdown-view-all-link" 
                      type="button"
                      onClick={() => { setSelectedFilter(activeProductCategory); setSearch(""); setActiveMenu(null); setMobileMenu(false); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                      View All {activeProductCategory} Catalogue <ArrowRight size={14}/>
                    </button>
                  </div>

                  {/* Column 3: Factory Spotlight / Bestseller Card */}
                  <div className="dropdown-col-spotlight">
                    <span className="spotlight-badge"><Zap size={13}/> FACTORY HIGHLIGHT</span>
                    <div className="spotlight-image">
                      <img src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=500&q=80" alt="Bestseller PET Jar" />
                    </div>
                    <div className="spotlight-info">
                      <h5>500ml Pickle Jar</h5>
                      <p>83mm Wide Mouth airtight lid. Tested 100% leak-proof for pickles, pastes & ghee.</p>
                    </div>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SCP%20Traders,%20I%20want%20to%20order%20500ml%20Pickle%20Jar%20wholesale`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="spotlight-whatsapp-cta"
                      onClick={() => setActiveMenu(null)}
                    >
                      <MessageCircle size={15}/> Instant WhatsApp Price
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}><a href="#categories" onClick={() => setMobileMenu(false)}>Categories</a></div>
            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}><a href="#industries" onClick={() => setMobileMenu(false)}>Industries Served</a></div>
            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}><a href="#about" onClick={() => setMobileMenu(false)}>About Us</a></div>
            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}><a href="#quote-form" onClick={() => setMobileMenu(false)}>Request Quote</a></div>
            <div className="nav-item" onMouseEnter={() => setActiveMenu(null)}><a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a></div>
          </div>
        </nav>
      </header>

      {/* 4. HERO SECTION WITH ATTENTION-GRABBING 3D VISUALS */}
      <section className="hero" id="home">
        <div className="hero-mesh-1"></div>
        <div className="hero-mesh-2"></div>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-badge-pill">
              <span className="hero-badge-dot"></span>
              <span>SCP TRADERS • PACKAGING EXCELLENCE</span>
            </div>
            <h1>
              Engineered for Quality. <br />
              <span className="text-highlight">Built to Inspire.</span>
            </h1>
            <p>
              Your trusted partner for premium Food-Grade <strong>PET Bottles</strong>, <strong>Jars</strong>, 
              and <strong>Industrial Packaging Materials</strong> across Tamil Nadu & India. Crystal-clear transparency, 
              leak-proof precision seals, and direct factory pricing.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#products">
                Explore Products <ArrowRight size={18}/>
              </a>
              <a 
                className="whatsapp-button-hero" 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20SCP%20Traders,%20I%20am%20looking%20for%20PET%20Bottles%20and%20Jars%20quotation.`} 
                target="_blank" 
                rel="noreferrer"
              >
                <MessageCircle size={19} /> Chat on WhatsApp
              </a>
            </div>
            <div className="hero-proof">
              <span><CheckCircle2 size={18} /> 100% Virgin Food-Grade PET</span>
              <span><CheckCircle2 size={18} /> 50ml to 20L Available</span>
              <span><CheckCircle2 size={18} /> Bulk Dispatch in 24-48 Hours</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=90" alt="Clear PET Bottles and Jars" />
              <div className="hero-image-overlay"></div>
            </div>
            {/* Animated Floating Badges & Floating Capacity Chip */}
            <div className="hero-badge-floating">
              <span>FACTORY DIRECT</span>
              <strong>WHOLESALE RATES</strong>
              <small>TAMIL NADU & PAN-INDIA</small>
            </div>

            <div className="hero-capacity-chip">
              ✨ 50ml • 500ml • 1L • 5L • 20L
            </div>

            <div className="hero-floating-card-bottom">
              <div className="floating-icon">
                <Package size={22}/>
              </div>
              <div>
                <strong>50+ Mould Designs</strong>
                <span>Jars, Bottles & Custom Caps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST HIGHLIGHT STRIP */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <div className="trust-icon"><ShieldCheck size={26}/></div>
            <div className="trust-text">
              <strong>100% Food-Grade PET</strong>
              <small>Certified safe for food, oils & water</small>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Award size={26}/></div>
            <div className="trust-text">
              <strong>Leak-Proof Guaranteed</strong>
              <small>Precision air-tight cap fittings</small>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Factory size={26}/></div>
            <div className="trust-text">
              <strong>Direct Factory Pricing</strong>
              <small>Maximum savings on bulk supply</small>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Truck size={26}/></div>
            <div className="trust-text">
              <strong>24-48h Fast Dispatch</strong>
              <small>Reliable logistics across India</small>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATEGORIES SHOWCASE GRID */}
      <section className="section categories-section" id="categories">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow-accent"><Sparkles size={14}/> DISCOVER BY RANGE</span>
              <h2>Product <em>Categories</em></h2>
              <p>Explore our complete inventory of PET Jars, Bottles, Cans, and customized packaging solutions.</p>
            </div>
            <a 
              className="primary-button" 
              style={{ height: '44px', padding: '0 20px', fontSize: '13.5px' }} 
              href="#products" 
              onClick={() => setSelectedFilter("All")}
            >
              View Full Catalogue <ArrowRight size={15}/>
            </a>
          </div>

          <div className="category-grid">
            {categories.map((cat, i) => (
              <div 
                key={cat.title} 
                className="category-card"
                onClick={() => {
                  setSelectedFilter(cat.title);
                  setSearch("");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="category-image-wrap">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                  <span className="category-number-badge">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="category-card-info">
                  <div>
                    <h3>{cat.title}</h3>
                    <p>{cat.subtitle}</p>
                  </div>
                  <div className="category-hover-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTS SECTION WITH ANIMATED FILTER PILLS */}
      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow-accent"><Package size={14}/> POPULAR PRODUCTS</span>
              <h2>Featured <em>PET Products & Specifications</em></h2>
              <p>Direct wholesale items ready for order. Click any product to view technical specifications or inquire instantly on WhatsApp.</p>
            </div>
          </div>

          <div className="product-filter-pills">
            {filterCategories.map(filterName => (
              <button
                key={filterName}
                type="button"
                className={`filter-pill ${selectedFilter === filterName ? 'is-active' : ''}`}
                onClick={() => { setSelectedFilter(filterName); setSearch(""); }}
              >
                {filterName}
              </button>
            ))}
          </div>

          {(search || selectedFilter !== "All") && (
            <div className="search-status-bar">
              <span>
                Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length === 1 ? '' : 's'} 
                {selectedFilter !== "All" && ` in Category: “${selectedFilter}”`}
                {search && ` matching “${search}”`}
              </span>
              <button type="button" onClick={() => { setSelectedFilter("All"); setSearch(""); }}>
                Reset Filters
              </button>
            </div>
          )}

          <div className="product-grid">
            {filteredProducts.map((p) => (
              <div className="product-card-modern" key={p.name}>
                <div className="product-image-container">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="product-badge-cat">{p.category}</span>
                  <button 
                    type="button" 
                    className="product-quick-view-btn" 
                    onClick={() => setSelectedProduct(p)}
                    aria-label={`View specs for ${p.name}`}
                  >
                    <Eye size={14} /> Quick View
                  </button>
                </div>
                <div className="product-info-wrap">
                  <div className="product-meta-row">
                    <span className="product-size-tag">{p.size}</span>
                    <span className="product-grade-tag"><Check size={12} /> Food Grade</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="product-desc">{p.detail}</p>
                  
                  <div className="product-card-actions">
                    <a 
                      href={getWhatsAppLink(p.name, p.size)} 
                      target="_blank" 
                      rel="noreferrer"
                      className="whatsapp-enquire-btn"
                    >
                      <MessageCircle size={16} /> WhatsApp Price
                    </a>
                    <button 
                      type="button" 
                      className="add-quote-btn" 
                      onClick={() => {
                        setCartCount(cartCount + 1);
                        showNotice(`Added "${p.name}" to your Quote List!`);
                      }}
                      title="Add to quotation list"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '16px' }}>
                <Package size={42} style={{ color: 'var(--blue)', margin: '0 auto 12px' }} />
                <h3>No products found for this filter</h3>
                <p style={{ color: '#64748b' }}>Try picking another category or clear your search term.</p>
                <button 
                  type="button" 
                  className="primary-button" 
                  style={{ marginTop: '16px' }}
                  onClick={() => { setSelectedFilter("All"); setSearch(""); }}
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES SERVED */}
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 40px', display: 'block' }}>
            <span className="eyebrow-accent"><Factory size={14}/> TAILORED PACKAGING</span>
            <h2>Industries We <em>Cater To</em></h2>
            <p style={{ margin: '0 auto' }}>From food processing factories to retail beverage brands, our PET packaging meets stringent quality standards.</p>
          </div>

          <div className="industries-grid">
            {industries.map(ind => {
              const IconComp = ind.icon;
              return (
                <div className="industry-box" key={ind.name}>
                  <div className="industry-icon-circle">
                    <IconComp size={24} />
                  </div>
                  <h4>{ind.name}</h4>
                  <p>{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. ABOUT SCP TRADERS */}
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85" alt="PET manufacturing and trading" />
            <div className="about-image-label">
              <span>SCP TRADERS</span>
              <strong>Dedicated to Quality & Reliability</strong>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow-accent">ABOUT OUR COMPANY</span>
            <h2>Packaging Solutions Built For <em>Your Growth.</em></h2>
            <p>
              At <strong>SCP TRADERS</strong>, we specialize in supplying high-performance PET jars, 
              bottles, containers, and packaging accessories tailored for commercial manufacturers, 
              distributors, and retail brands.
            </p>
            <div className="about-features-list">
              <div className="about-feature-item"><CheckCircle2 size={18} /> High Transparency Virgin PET</div>
              <div className="about-feature-item"><CheckCircle2 size={18} /> Air-tight & Leak-proof Closures</div>
              <div className="about-feature-item"><CheckCircle2 size={18} /> Custom Neck, Color & Moulds</div>
              <div className="about-feature-item"><CheckCircle2 size={18} /> GST Invoicing & Wholesale Logistics</div>
            </div>
            <a className="primary-button" href="#quote-form">
              Work With Us <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* 10. QUICK QUOTE SECTION */}
      <section className="quote-section" id="quote-form">
        <div className="quote-glow"></div>
        <div className="container quote-layout">
          <div className="quote-info">
            <span className="eyebrow-accent" style={{ color: 'var(--orange)' }}>DIRECT FACTORY ENQUIRY</span>
            <h2>Request a Fast Wholesale <span>Quotation</span></h2>
            <p>
              Tell us your packaging specifications, container capacity, and quantity required. 
              Our team will reply with wholesale prices within 30 minutes.
            </p>
            
            <div className="quote-quick-contacts">
              <a href="tel:+919840000000" className="contact-pill-item">
                <div className="contact-pill-icon"><Phone size={20}/></div>
                <div>
                  <small style={{ color: '#94a3b8' }}>Direct Call Support</small>
                  <strong style={{ display: 'block' }}>+91 98400 00000</strong>
                </div>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SCP%20Traders`} target="_blank" rel="noreferrer" className="contact-pill-item">
                <div className="contact-pill-icon"><MessageCircle size={20}/></div>
                <div>
                  <small style={{ color: '#94a3b8' }}>WhatsApp Business Helpdesk</small>
                  <strong style={{ display: 'block' }}>Chat with SCP Team</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="quote-form-card">
            <h3>Get Instant Quote</h3>
            <p>Fill in details to connect with our trading team.</p>
            <form onSubmit={handleQuoteSubmit}>
              <div className="form-group-row">
                <div className="form-field">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ramesh Kumar"
                    value={quoteForm.name} 
                    onChange={e => setQuoteForm({...quoteForm, name: e.target.value})} 
                  />
                </div>
                <div className="form-field">
                  <label>WhatsApp / Mobile *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. 98400 12345"
                    value={quoteForm.phone} 
                    onChange={e => setQuoteForm({...quoteForm, phone: e.target.value})} 
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label>Product Category</label>
                  <select 
                    value={quoteForm.product} 
                    onChange={e => setQuoteForm({...quoteForm, product: e.target.value})}
                  >
                    {categories.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Estimated Quantity</label>
                  <select 
                    value={quoteForm.qty} 
                    onChange={e => setQuoteForm({...quoteForm, qty: e.target.value})}
                  >
                    <option value="500 - 1000 pcs">500 - 1,000 pcs (Sample / Trial)</option>
                    <option value="1,000 - 5,000 pcs">1,000 - 5,000 pcs</option>
                    <option value="5,000 - 20,000 pcs">5,000 - 20,000 pcs</option>
                    <option value="20,000+ pcs">20,000+ pcs (Bulk Commercial)</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Specific Size / Additional Details</label>
                <textarea 
                  rows="3" 
                  placeholder="e.g. 500ml Pickle Jar with red caps, 2L Oil Bottles..."
                  value={quoteForm.note} 
                  onChange={e => setQuoteForm({...quoteForm, note: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                <MessageCircle size={18} /> Send Quotation via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home">
              <img className="brand-logo" src="/src/scp-traders-logo.png" alt="SCP TRADERS" />
            </a>
            <p>
              Your trusted partner for high-grade PET jars, bottles, and wholesale packaging materials in Tamil Nadu & Pan-India.
            </p>
            <div className="footer-social-links">
              <a href="tel:+919840000000" className="footer-social-btn" title="Call Us"><Phone size={17}/></a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="footer-social-btn" title="WhatsApp"><MessageCircle size={17}/></a>
              <a href="mailto:sales@scptraders.com" className="footer-social-btn" title="Email"><Mail size={17}/></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#categories">Product Categories</a>
            <a href="#products">Featured Products</a>
            <a href="#industries">Industries Served</a>
            <a href="#about">About SCP Traders</a>
          </div>

          <div className="footer-col">
            <h4>Product Ranges</h4>
            <a href="#products" onClick={() => setSelectedFilter("PET Jars")}>PET Jars</a>
            <a href="#products" onClick={() => setSelectedFilter("PET Bottles")}>PET Bottles</a>
            <a href="#products" onClick={() => setSelectedFilter("Edible Oil Bottles")}>Edible Oil Bottles</a>
            <a href="#products" onClick={() => setSelectedFilter("Water Cans")}>20L Water Cans</a>
            <a href="#products" onClick={() => setSelectedFilter("Honey Jars")}>Honey Jars</a>
          </div>

          <div className="footer-col">
            <h4>Contact Details</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>SCP TRADERS, Industrial Estate, Tamil Nadu, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+91 98400 00000 / +91 98400 11111</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>sales@scptraders.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <span>© 2026 SCP TRADERS. All rights reserved.</span>
            <span>Food-Grade Certified PET Packaging</span>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP PILL */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20SCP%20Traders,%20I%20have%20an%20enquiry%20regarding%20PET%20Bottles%20and%20Jars.`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab-sticky"
        aria-label="Chat with SCP Traders on WhatsApp"
      >
        <span className="whatsapp-fab-icon"><MessageCircle size={24} /></span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* 13. TOAST */}
      {notice && (
        <div className="toast-notice" role="alert">
          <CheckCircle2 size={20} />
          <span>{notice}</span>
        </div>
      )}

      {/* 14. PRODUCT SPECS QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-card" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              <div className="modal-image-wrap">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <span className="modal-category-tag">{selectedProduct.category}</span>
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.detail}</p>

                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td>Capacity / Size:</td>
                      <td>{selectedProduct.size}</td>
                    </tr>
                    <tr>
                      <td>Neck Finish:</td>
                      <td>{selectedProduct.neck || "Standard Neck"}</td>
                    </tr>
                    <tr>
                      <td>Raw Material:</td>
                      <td>{selectedProduct.material || "100% Virgin Food-Grade PET"}</td>
                    </tr>
                    <tr>
                      <td>Quality Standard:</td>
                      <td>Airtight, Leak-proof & Recyclable</td>
                    </tr>
                    <tr>
                      <td>Minimum Order:</td>
                      <td>500 - 1,000 pcs (Custom trial batches available)</td>
                    </tr>
                  </tbody>
                </table>

                <div className="modal-actions">
                  <a 
                    href={getWhatsAppLink(selectedProduct.name, selectedProduct.size)} 
                    target="_blank" 
                    rel="noreferrer"
                    className="primary-button" 
                    style={{ flex: 1, height: '44px' }}
                  >
                    <MessageCircle size={18} /> Enquire on WhatsApp
                  </a>
                  <button 
                    type="button" 
                    className="primary-button" 
                    style={{ background: '#f1f5f9', color: '#1e293b', border: '1px solid #dce4ee', height: '44px', boxShadow: 'none' }}
                    onClick={() => {
                      setCartCount(cartCount + 1);
                      showNotice(`Added "${selectedProduct.name}" to Quote List!`);
                      setSelectedProduct(null);
                    }}
                  >
                    + Add to RFQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
