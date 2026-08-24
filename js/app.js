/**
 * Bar do Giba - Interactive Application Logic
 * Moema, São Paulo - SP
 */

(function () {
  'use strict';

  // --- App State ---
  // --- App State ---
  let currentLang = localStorage.getItem('giba_lang') || 'pt';
  let currentCategory = 'all';
  let searchQuery = '';
  let cart = []; // [{ item: itemObject, qty: number }]

  // --- DOM Element References ---
  const header = document.getElementById('siteHeader');
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const currentLangFlag = document.getElementById('currentLangFlag');
  const currentLangCode = document.getElementById('currentLangCode');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const categoryTabs = document.getElementById('categoryTabs');
  const menuItemsGrid = document.getElementById('menuItemsGrid');
  const reviewsGrid = document.getElementById('reviewsGrid');
  const cartNavBtn = document.getElementById('cartNavBtn');
  const cartCount = document.getElementById('cartCount');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBody = document.getElementById('cartBody');
  const cartTotal = document.getElementById('cartTotal');
  const btnCheckoutWhatsApp = document.getElementById('btnCheckoutWhatsApp');
  const reservationForm = document.getElementById('reservationForm');
  const resNameInput = document.getElementById('resName');
  const resPhoneInput = document.getElementById('resPhone');
  const resDateInput = document.getElementById('resDate');
  const resTimeSelect = document.getElementById('resTime');
  const resGuestsSelect = document.getElementById('resGuests');
  const resNotesInput = document.getElementById('resNotes');
  const liveStatusBadge = document.getElementById('liveStatusBadge');
  const liveStatusText = document.getElementById('liveStatusText');
  const toastContainer = document.getElementById('toastContainer');

  // --- Format Currency (BRL) ---
  function formatPrice(amount) {
    return `R$ ${amount.toFixed(2).replace('.', ',')}`;
  }

  // --- Toast Notification Helper ---
  function showToast(message, icon = '🥟') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Real-time Open/Closed Status ---
  function updateLiveStatus() {
    try {
      // Get current São Paulo time
      const spDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      const day = spDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const currentDecimalHour = spDate.getHours() + spDate.getMinutes() / 60;
      
      const schedule = RESTAURANT_INFO.scheduleDays[day];
      let isOpen = false;

      if (schedule && !schedule.closed) {
        if (currentDecimalHour >= schedule.open && currentDecimalHour < schedule.close) {
          isOpen = true;
        }
      }

      if (liveStatusBadge && liveStatusText) {
        if (isOpen) {
          liveStatusBadge.classList.remove('closed');
          liveStatusText.textContent = TRANSLATIONS[currentLang].badge_open;
        } else {
          liveStatusBadge.classList.add('closed');
          liveStatusText.textContent = TRANSLATIONS[currentLang].badge_closed;
        }
      }
    } catch (e) {
      console.warn("Status calculation fallback:", e);
    }
  }

  // --- Set Language ---
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem('giba_lang', lang);
    } catch (e) {}

    // Update HTML dir and lang attributes
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update language button display
    const flags = { pt: '🇧🇷', en: '🇺🇸', ar: '🇸🇦' };
    const codes = { pt: 'PT', en: 'EN', ar: 'AR' };
    if (currentLangFlag) currentLangFlag.textContent = flags[lang];
    if (currentLangCode) currentLangCode.textContent = codes[lang];

    // Update active class in dropdown
    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update static translations in DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) {
        if (val.includes('<') || val.includes('&') || val.includes('<strong>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update page title & meta description
    if (TRANSLATIONS[lang].meta_title) {
      document.title = TRANSLATIONS[lang].meta_title;
    }
    const metaDescEl = document.getElementById('meta-description');
    if (metaDescEl && TRANSLATIONS[lang].meta_desc) {
      metaDescEl.setAttribute('content', TRANSLATIONS[lang].meta_desc);
    }

    // Update input placeholders
    if (menuSearchInput && TRANSLATIONS[lang].menu_search_placeholder) {
      menuSearchInput.placeholder = TRANSLATIONS[lang].menu_search_placeholder;
    }
    if (resNameInput && TRANSLATIONS[lang].form_name_placeholder) {
      resNameInput.placeholder = TRANSLATIONS[lang].form_name_placeholder;
    }
    if (resPhoneInput && TRANSLATIONS[lang].form_phone_placeholder) {
      resPhoneInput.placeholder = TRANSLATIONS[lang].form_phone_placeholder;
    }
    if (resNotesInput && TRANSLATIONS[lang].form_notes_placeholder) {
      resNotesInput.placeholder = TRANSLATIONS[lang].form_notes_placeholder;
    }

    // Update select options (Time & Guests)
    if (resTimeSelect && TRANSLATIONS[lang].res_time_options) {
      const selectedTime = resTimeSelect.value;
      const opts = TRANSLATIONS[lang].res_time_options;
      Array.from(resTimeSelect.options).forEach(opt => {
        if (opts[opt.value]) {
          opt.textContent = opts[opt.value];
        }
      });
      resTimeSelect.value = selectedTime;
    }

    if (resGuestsSelect && TRANSLATIONS[lang].res_guests_options) {
      const selectedGuests = resGuestsSelect.value;
      const opts = TRANSLATIONS[lang].res_guests_options;
      Array.from(resGuestsSelect.options).forEach(opt => {
        if (opts[opt.value]) {
          opt.textContent = opts[opt.value];
        }
      });
      resGuestsSelect.value = selectedGuests;
    }

    // Re-render components that depend on language
    renderMenuItems();
    renderReviews();
    renderCart();
    updateLiveStatus();
  }

  // --- Render Menu Items ---
  function renderMenuItems() {
    if (!menuItemsGrid) return;

    const filtered = MENU_ITEMS.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const trans = item.translations[currentLang] || item.translations.pt;
      const matchesSearch = !searchQuery || 
        trans.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        trans.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      const emptyMsg = currentLang === 'ar' ? 'لم يتم العثور على أطباق مطابقة للبحث.' :
                       currentLang === 'en' ? 'No dishes found matching your search.' :
                       'Nenhum quitute encontrado para sua busca.';
      menuItemsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <p style="font-size: 1.1rem;">${emptyMsg}</p>
        </div>
      `;
      return;
    }

    menuItemsGrid.innerHTML = filtered.map(item => {
      const trans = item.translations[currentLang] || item.translations.pt;
      const badgeText = trans.badge || item.badge || '';
      const badgeHtml = badgeText ? `<span class="dish-badge">${badgeText}</span>` : '';
      const btnText = TRANSLATIONS[currentLang].btn_add_to_cart || 'Adicionar';

      return `
        <div class="dish-card" data-id="${item.id}">
          <div class="dish-image-wrap">
            <img src="${item.image}" alt="${trans.name}" loading="lazy">
            ${badgeHtml}
          </div>
          <div class="dish-content">
            <div class="dish-header">
              <h3 class="dish-title">${trans.name}</h3>
              <span class="dish-price">${formatPrice(item.price)}</span>
            </div>
            <p class="dish-desc">${trans.desc}</p>
            <div class="dish-footer">
              <button class="btn-add-item" data-add-id="${item.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <span>${btnText}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Add to Cart event listeners
    document.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-add-id');
        addToCart(id);
      });
    });
  }

  // --- Render Reviews ---
  function renderReviews() {
    if (!reviewsGrid) return;

    reviewsGrid.innerHTML = REVIEWS.map(rev => {
      const quote = rev.quote[currentLang] || rev.quote.pt;
      const role = (typeof rev.role === 'object') ? (rev.role[currentLang] || rev.role.pt) : rev.role;
      return `
        <div class="review-card">
          <div>
            <div class="review-stars">★★★★★</div>
            <p class="review-quote">"${quote}"</p>
          </div>
          <div class="review-author">
            <div class="author-avatar">${rev.avatar}</div>
            <div>
              <div class="author-name">${rev.author}</div>
              <div class="author-role">${role}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Cart / Comanda Operations ---
  function addToCart(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.item.id === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ item, qty: 1 });
    }

    updateCartBadge();
    renderCart();

    const trans = item.translations[currentLang] || item.translations.pt;
    const toastMsg = currentLang === 'ar' ? `تمت إضافة "${trans.name}" إلى السلة` :
                     currentLang === 'en' ? `Added "${trans.name}" to order tab` :
                     `"${trans.name}" adicionado à comanda!`;
    showToast(toastMsg, '🥟');
  }

  function modifyCartQty(itemId, delta) {
    const idx = cart.findIndex(c => c.item.id === itemId);
    if (idx === -1) return;

    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }

    updateCartBadge();
    renderCart();
  }

  function updateCartBadge() {
    const totalCount = cart.reduce((sum, c) => sum + c.qty, 0);
    cartCount.textContent = totalCount;
    cartCount.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  function renderCart() {
    if (!cartBody) return;

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <span class="empty-icon">🍺</span>
          <p>${TRANSLATIONS[currentLang].cart_empty}</p>
        </div>
      `;
      cartTotal.textContent = formatPrice(0);
      btnCheckoutWhatsApp.disabled = true;
      btnCheckoutWhatsApp.style.opacity = '0.5';
      return;
    }

    btnCheckoutWhatsApp.disabled = false;
    btnCheckoutWhatsApp.style.opacity = '1';

    let sum = 0;
    cartBody.innerHTML = `
      <div class="cart-items-list">
        ${cart.map(c => {
          const itemTotal = c.item.price * c.qty;
          sum += itemTotal;
          const trans = c.item.translations[currentLang] || c.item.translations.pt;

          return `
            <div class="cart-item">
              <div class="cart-item-info">
                <div class="cart-item-title">${trans.name}</div>
                <div class="cart-item-price">${formatPrice(c.item.price)} × ${c.qty} = ${formatPrice(itemTotal)}</div>
              </div>
              <div class="cart-item-actions">
                <button class="qty-btn" data-cart-minus="${c.item.id}">-</button>
                <span style="font-weight: 700; min-width: 20px; text-align: center;">${c.qty}</span>
                <button class="qty-btn" data-cart-plus="${c.item.id}">+</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    cartTotal.textContent = formatPrice(sum);

    // Event listeners for cart item quantity buttons
    document.querySelectorAll('[data-cart-minus]').forEach(btn => {
      btn.addEventListener('click', () => {
        modifyCartQty(btn.getAttribute('data-cart-minus'), -1);
      });
    });

    document.querySelectorAll('[data-cart-plus]').forEach(btn => {
      btn.addEventListener('click', () => {
        modifyCartQty(btn.getAttribute('data-cart-plus'), 1);
      });
    });
  }

  function openCart() {
    cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- WhatsApp Order Checkout ---
  function checkoutViaWhatsApp() {
    if (cart.length === 0) return;

    let total = 0;
    let message = `*Olá, Bar do Giba! Gostaria de fazer o seguinte pedido:*\n\n`;

    cart.forEach(c => {
      const itemTotal = c.item.price * c.qty;
      total += itemTotal;
      const trans = c.item.translations.pt; // Portuguese for the Brazilian restaurant staff
      message += `• *${c.qty}x* ${trans.name} (${formatPrice(itemTotal)})\n`;
    });

    message += `\n*Total Estimado:* ${formatPrice(total)}\n`;
    message += `\n_Pedido gerado pelo site oficial do Bar do Giba._\n_Por favor, informe o endereço de entrega ou se é para retirada/mesa!_`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/551155359220?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  // --- Table Reservation Submission ---
  function handleReservationSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const notes = document.getElementById('resNotes').value.trim();

    if (!name || !phone || !date) {
      const errorMsg = currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 
                       currentLang === 'en' ? 'Please fill in all required fields.' : 
                       'Por favor, preencha todos os campos obrigatórios.';
      alert(errorMsg);
      return;
    }

    // Format reservation date in friendly Brazilian format (DD/MM/YYYY)
    const dateParts = date.split('-');
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : date;

    let message = `*SOLICITAÇÃO DE RESERVA - BAR DO GIBA*\n\n`;
    message += `👤 *Nome:* ${name}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    message += `📅 *Data:* ${formattedDate}\n`;
    message += `⏰ *Horário:* ${time}\n`;
    message += `👥 *Pessoas:* ${guests}\n`;
    if (notes) {
      message += `📝 *Observações:* ${notes}\n`;
    }
    message += `\n_Reserva solicitada pelo site oficial do Bar do Giba._`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/551155359220?text=${encoded}`;

    showToast(currentLang === 'ar' ? 'جاري تحويلك إلى واتساب لتأكيد الحجز...' : 
              currentLang === 'en' ? 'Redirecting to WhatsApp to confirm reservation...' : 
              'Redirecionando para o WhatsApp para confirmar sua reserva!', '📅');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      reservationForm.reset();
    }, 800);
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Scroll header styling & active link highlight
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Highlight active nav item on scroll
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
          if (navLink) navLink.classList.add('active');
        }
      });
    });

    // Mobile nav toggle
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close mobile nav when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    // Category Tabs Filter
    if (categoryTabs) {
      categoryTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderMenuItems();
      });
    }

    // Menu Live Search
    if (menuSearchInput) {
      menuSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderMenuItems();
      });
    }

    // Language Dropdown Selector
    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    // Cart Open / Close
    cartNavBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) {
        closeCart();
      }
    });

    // Cart Checkout via WhatsApp
    if (btnCheckoutWhatsApp) {
      btnCheckoutWhatsApp.addEventListener('click', checkoutViaWhatsApp);
    }

    // Reservation Form
    if (reservationForm) {
      reservationForm.addEventListener('submit', handleReservationSubmit);
    }

    // Set default date for reservation form to today
    const resDateInput = document.getElementById('resDate');
    if (resDateInput) {
      const today = new Date().toISOString().split('T')[0];
      resDateInput.min = today;
      resDateInput.value = today;
    }
  }

  // --- Initialize App ---
  function init() {
    setLanguage(currentLang);
    setupEventListeners();
    updateLiveStatus();
    updateCartBadge();
    setInterval(updateLiveStatus, 60000); // Check open/closed status every minute
  }

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
