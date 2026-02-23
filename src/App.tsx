import { motion } from "motion/react";
import { Droplets, ShieldCheck, Clock, Star, CheckCircle2, ArrowRight, Menu, X, Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  price: string;
  features: string[];
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: "cleaning",
    title: "Weekly Cleaning",
    description: "Comprehensive weekly maintenance to keep your pool sparkling year-round.",
    icon: <Droplets className="w-6 h-6" />,
    price: "From $149/mo",
    features: ["Skimming & Vacuuming", "Wall Brushing", "Filter Cleaning", "Chemical Balancing"],
    image: "https://picsum.photos/seed/pool1/800/600"
  },
  {
    id: "repair",
    title: "Equipment Repair",
    description: "Expert diagnostics and repair for pumps, filters, heaters, and salt systems.",
    icon: <ShieldCheck className="w-6 h-6" />,
    price: "Quote Required",
    features: ["Pump Replacement", "Leak Detection", "Heater Repair", "Automation Setup"],
    image: "https://picsum.photos/seed/pool2/800/600"
  },
  {
    id: "maintenance",
    title: "Chemical Service",
    description: "Professional water testing and balancing using eco-friendly, pet-safe products.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    price: "From $89/mo",
    features: ["Water Analysis", "Eco-Friendly Chemicals", "Salt Cell Cleaning", "Conditioner Check"],
    image: "https://picsum.photos/seed/pool3/800/600"
  },
  {
    id: "algae",
    title: "Algae Removal",
    description: "Transform your green pool back to blue with our intensive recovery treatment.",
    icon: <Clock className="w-6 h-6" />,
    price: "From $299",
    features: ["Shock Treatment", "Algaecide Application", "Flocculation", "Deep Filter Clean"],
    image: "https://picsum.photos/seed/pool4/800/600"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner in Miami",
    content: "Crystal Clear has been maintaining our pool for 2 years. They are reliable, professional, and our pool has never looked better. Highly recommend!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    content: "Best pool service in the city. Their transparent pricing and detailed weekly reports make my job so much easier. Pet-safe chemicals are a huge plus.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Emily Davis",
    role: "Homeowner",
    content: "They saved our summer! Our pool turned green overnight and they had it crystal clear in 48 hours. The technicians are super friendly.",
    rating: 5,
    date: "3 days ago"
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    title: "5 Signs Your Pool Pump Needs Repair",
    excerpt: "Don't wait for a total failure. Learn the early warning signs of pump trouble.",
    date: "Oct 12, 2023",
    category: "Maintenance",
    image: "https://picsum.photos/seed/blog1/600/400"
  },
  {
    title: "Eco-Friendly Pool Care: Why It Matters",
    excerpt: "Discover how pet-safe and eco-friendly chemicals protect your family and the environment.",
    date: "Oct 05, 2023",
    category: "Eco-Care",
    image: "https://picsum.photos/seed/blog2/600/400"
  },
  {
    title: "Winterizing Your Pool in Florida",
    excerpt: "Everything you need to know about maintaining your pool during the cooler months.",
    date: "Sep 28, 2023",
    category: "Seasonal",
    image: "https://picsum.photos/seed/blog3/600/400"
  }
];

const FAQS = [
  {
    question: "How often should my pool be cleaned?",
    answer: "For most residential pools, we recommend a professional cleaning once a week to maintain proper chemical balance and prevent algae growth."
  },
  {
    question: "Are your chemicals safe for pets and children?",
    answer: "Absolutely. We prioritize eco-friendly and pet-safe cleaning methods. Our chemicals are carefully balanced to ensure they are effective yet gentle on swimmers and the environment."
  },
  {
    question: "Do I need to be home for the service?",
    answer: "No, as long as our technicians have access to your pool area, you don't need to be home. We provide digital service reports after every visit."
  },
  {
    question: "What is included in the free quote?",
    answer: "Our free quote includes a full on-site assessment of your pool's condition, equipment check, and a customized maintenance or repair plan tailored to your needs."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-primary p-2 rounded-lg">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-display font-bold ${isScrolled ? "text-slate-900" : "text-white"}`}>
            Crystal Clear <span className="text-brand-primary">Pools</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Gallery", "Testimonials", "FAQ", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-brand-primary transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
        >
          {["Services", "Gallery", "Testimonials", "FAQ", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 font-medium py-2 border-bottom border-slate-100"
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-primary text-white w-full py-3 rounded-xl font-semibold">
            Get a Free Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/hero-pool/1920/1080"
          alt="Luxury Pool"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-semibold uppercase tracking-wider">#1 Rated Pool Service in Miami</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Crystal Clear Water, <br />
            <span className="text-brand-primary">Worry-Free</span> Summer.
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg">
            Professional pool cleaning, repair, and maintenance. Eco-friendly, pet-safe methods with 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-secondary transition-all flex items-center justify-center gap-2 group">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
              View Our Services
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-10 h-10 rounded-full border-2 border-slate-900"
                  alt="User"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/60 text-xs font-medium">Trusted by 500+ Local Homeowners</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Request a Quote</h3>
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                100% Secure
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="john@example.com" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 appearance-none">
                  <option>Weekly Cleaning</option>
                  <option>Equipment Repair</option>
                  <option>Algae Removal</option>
                  <option>Chemical Only</option>
                </select>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/30">
                Get My Free Quote
              </button>
              <p className="text-center text-[10px] text-slate-400">
                By clicking, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Our Professional Services</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          From routine maintenance to complex repairs, we provide comprehensive pool care solutions tailored to your specific needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-brand-primary font-bold">{service.price}</span>
              <button className="text-slate-400 hover:text-brand-primary transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Real Results, Real Pools</h2>
            <p className="text-slate-500 max-w-xl">
              See the transformation for yourself. Our before-and-after gallery showcases the quality and care we bring to every pool.
            </p>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-emerald-100 p-2 rounded-full">
              <ShieldCheck className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">100% Satisfaction</p>
              <p className="text-xs text-slate-500">Guaranteed Results</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 h-[400px]">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/before${i}/800/1000`}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Before</div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/after${i}/800/1000`}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">After</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium">Algae Removal & Chemical Balancing - Miami Beach</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-4 text-xs font-bold uppercase">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="font-bold">4.9/5 on Google Reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={`https://i.pravatar.cc/100?u=${t.name}`} className="w-12 h-12 rounded-full" alt={t.name} />
              <div>
                <h4 className="font-bold text-sm">{t.name}</h4>
                <p className="text-xs text-slate-400">{t.role} • {t.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-900 py-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Common Questions</h2>
          <p className="text-white/60">Everything you need to know about our pool services and care methods.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all ${openIdx === idx ? "bg-white/5" : ""}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 pb-6 text-white/60 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4">Pool Care Tips & News</h2>
          <p className="text-slate-500 max-w-xl">
            Stay informed with our latest articles on pool maintenance, equipment upgrades, and water safety.
          </p>
        </div>
        <button className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Posts <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <article key={idx} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/2]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                {post.category}
              </div>
            </div>
            <p className="text-xs text-slate-400 font-medium mb-2">{post.date}</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{post.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold text-slate-900">
                Crystal Clear <span className="text-brand-primary">Pools</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Providing top-tier pool cleaning and maintenance services in Miami and surrounding areas. Eco-friendly, reliable, and professional.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Services", "Gallery", "Testimonials", "FAQ", "Blog"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 text-sm hover:text-brand-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#" className="text-slate-500 text-sm hover:text-brand-primary transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                4600 E Washington St, Suite 305, Phoenix, AZ 85034
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                hello@crystalclearpools.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Crystal Clear Pools. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}
