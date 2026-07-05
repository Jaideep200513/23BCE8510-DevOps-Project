/**
 * NexaTech Solutions — Main JavaScript
 * Handles: Navbar, Mobile Menu, Scroll Animations,
 *          Counters, Ripple, Gallery Lightbox,
 *          Contact Form Validation, Scroll-to-Top
 */

'use strict';

/* ══════════════════════════════════════════════
   PAGE LOADER
══════════════════════════════════════════════ */
function initPageLoader() {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }, 900);
  });
}

/* ══════════════════════════════════════════════
   NAVBAR — sticky + scroll class + active link
══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Apply 'scrolled' class for glassmorphism effect
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ══════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════ */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on mobile link click
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ══════════════════════════════════════════════
   SCROLL ANIMATIONS — IntersectionObserver
══════════════════════════════════════════════ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.anim-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   ANIMATED COUNTERS
══════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOutQuad = (t) => t * (2 - t);

  const animateCounter = (el) => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start    = performance.now();

    const update = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = easeOutQuad(progress) * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   RIPPLE EFFECT on Buttons
══════════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      this.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

/* ══════════════════════════════════════════════
   SCROLL TO TOP BUTTON
══════════════════════════════════════════════ */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  const toggle = () => btn.classList.toggle('visible', window.scrollY > 400);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════
   GALLERY FILTERS + LIGHTBOX
══════════════════════════════════════════════ */
function initGallery() {
  // ── Filters ──────────────────────────────
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (match) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.pointerEvents = 'auto';
          item.style.display = '';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          item.style.pointerEvents = 'none';
          setTimeout(() => {
            if (item.style.opacity === '0') item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ── Lightbox ─────────────────────────────
  const lightbox   = document.querySelector('.lightbox');
  const lbInner    = document.querySelector('.lightbox-inner');
  const lbTitle    = document.querySelector('.lightbox-title');
  const lbCat      = document.querySelector('.lightbox-cat');
  const lbClose    = document.querySelector('.lightbox-close');

  if (!lightbox) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const icon  = item.querySelector('.gallery-thumb-img')?.textContent || item.dataset.icon || '🖼️';
      const title = item.dataset.title || 'Gallery Item';
      const cat   = item.dataset.category || 'Gallery';

      if (lbInner) lbInner.textContent = icon;
      if (lbTitle) lbTitle.textContent = title;
      if (lbCat)   lbCat.textContent   = cat.charAt(0).toUpperCase() + cat.slice(1);

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (lbClose) lbClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

/* ══════════════════════════════════════════════
   CONTACT FORM VALIDATION
══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const showError = (field, msg) => {
    field.classList.add('error');
    const errEl = field.parentElement.querySelector('.form-error');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('visible');
    }
  };

  const clearError = (field) => {
    field.classList.remove('error');
    const errEl = field.parentElement.querySelector('.form-error');
    if (errEl) errEl.classList.remove('visible');
  };

  // Real-time validation
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => clearError(field));
    field.addEventListener('blur',  () => validateField(field));
  });

  const validateField = (field) => {
    const val = field.value.trim();
    const type = field.type || field.tagName.toLowerCase();

    if (field.required && !val) {
      showError(field, 'This field is required.');
      return false;
    }

    if (type === 'email' && val) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(val)) {
        showError(field, 'Please enter a valid email address.');
        return false;
      }
    }

    if (field.name === 'phone' && val) {
      const phoneRe = /^[\d\s\+\-\(\)]{7,15}$/;
      if (!phoneRe.test(val)) {
        showError(field, 'Please enter a valid phone number.');
        return false;
      }
    }

    if (field.name === 'message' && val && val.length < 20) {
      showError(field, 'Message should be at least 20 characters.');
      return false;
    }

    clearError(field);
    return true;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('.form-control').forEach(field => {
      if (!validateField(field)) valid = false;
    });

    if (!valid) return;

    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Sending…';
    submitBtn.disabled  = true;

    // Simulate async send (no backend)
    setTimeout(() => {
      form.style.display = 'none';
      const successEl = document.querySelector('.form-success');
      if (successEl) successEl.classList.add('visible');
    }, 1500);
  });
}

/* ══════════════════════════════════════════════
   TICKER DUPLICATION — ensures seamless loop
══════════════════════════════════════════════ */
function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

/* ══════════════════════════════════════════════
   SMOOTH ACTIVE HIGHLIGHT for same-page anchors
══════════════════════════════════════════════ */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════════════════
   TYPEWRITER EFFECT (hero subtitle)
══════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;

  const words = el.dataset.typewriter.split('|');
  let wordIdx  = 0;
  let charIdx  = 0;
  let deleting = false;

  const type = () => {
    const current = words[wordIdx];
    if (deleting) {
      el.textContent = current.slice(0, --charIdx);
    } else {
      el.textContent = current.slice(0, ++charIdx);
    }

    let delay = deleting ? 50 : 80;

    if (!deleting && charIdx === current.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx  = (wordIdx + 1) % words.length;
      delay    = 500;
    }

    setTimeout(type, delay);
  };

  setTimeout(type, 800);
}

/* ══════════════════════════════════════════════
   STAGGER CARDS on visible
══════════════════════════════════════════════ */
function initStagger() {
  const staggerParents = document.querySelectorAll('[data-stagger]');
  staggerParents.forEach(parent => {
    const children = Array.from(parent.children);
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
      child.classList.add('anim-on-scroll');
    });
  });
}

/* ══════════════════════════════════════════════
   INIT ALL
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounters();
  initRipple();
  initScrollTop();
  initGallery();
  initContactForm();
  initTicker();
  initSmoothScrollLinks();
  initTypewriter();
  initStagger();
});
