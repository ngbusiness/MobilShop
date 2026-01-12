// ===== PODACI ZA DINAMICKI ISPIS =====

const siteData = {
  // Header podaci
  header: {
    logoText: "Mobil<span>Shop</span>",
    logoIcon: "📱",
    phone: "+381 11 123 4567",
    email: "info@mobilshop.rs",
    workHours: "Pon-Sub: 09-20h",
  },

  // Navigacija
  navigation: [
    { name: "Početna", href: "#hero", active: true },
    { name: "Telefoni", href: "#featured-section" },
    { name: "Brendovi", href: "#brands-section" },
    { name: "Kontakt", href: "#contact-section" },
    { name: "O nama", href: "#why-us-section" },
    { name: "Autor", href: "autor.html" },
    { name: "Dokumentacija", href: "Dokumentacija.pdf" },
  ],

  // Hero sekcija
  hero: {
    title: "Pronađite Vaš <span>Savršeni</span> Telefon",
    subtitle: "Najnoviji modeli vodećih proizvođača po najboljim cenama. Besplatna dostava i 2 godine garancije.",
    badge: "NOVO 2024",
    buttons: [
      { text: "Pogledaj ponudu", class: "btn-primary", href: "#featured-section" },
      { text: "Kontaktiraj nas", class: "btn-secondary", href: "#contact-section" },
    ],
  },

  // Naslovi sekcija
  sections: {
    featured: {
      title: "Izdvojeni Telefoni",
      subtitle: "Najpopularniji modeli koje naši kupci obožavaju",
    },
    brands: {
      title: "Brendovi u Ponudi",
      subtitle: "Radimo samo sa proverenim proizvođačima",
    },
    contact: {
      title: "Kontaktirajte Nas",
      subtitle: "Imate pitanja? Pošaljite nam upit i odgovorićemo vam u najkraćem roku.",
    },
    whyUs: {
      title: "Zašto Izabrati Nas?",
    },
  },

  // Proizvodi
  products: [
    {
      id: 1,
      brand: "Apple",
      name: "iPhone 15 Pro Max",
      specs: "256GB | Titanijum | A17 Pro",
      price: 189990,
      oldPrice: 209990,
      badge: "sale",
      image: "assets/img/iphone-15-pro-max.png",
      fullSpecs: {
        Ekran: '6.7" Super Retina XDR',
        Procesor: "A17 Pro",
        RAM: "8GB",
        Memorija: "256GB",
        Kamera: "48MP + 12MP + 12MP",
        Baterija: "4422mAh",
      },
    },
    {
      id: 2,
      brand: "Samsung",
      name: "Galaxy S24 Ultra",
      specs: "512GB | Titanijum | SD 8 Gen 3",
      price: 174990,
      oldPrice: null,
      badge: "new",
      image: "assets/img/s24-ultra.jpg",
      fullSpecs: {
        Ekran: '6.8" Dynamic AMOLED 2X',
        Procesor: "Snapdragon 8 Gen 3",
        RAM: "12GB",
        Memorija: "512GB",
        Kamera: "200MP + 50MP + 12MP + 10MP",
        Baterija: "5000mAh",
      },
    },
    {
      id: 3,
      brand: "Xiaomi",
      name: "14 Ultra",
      specs: "512GB | Crna | SD 8 Gen 3",
      price: 149990,
      oldPrice: 169990,
      badge: "popular",
      image: "assets/img/xiaomi-14-ultra.png",
      fullSpecs: {
        Ekran: '6.73" LTPO AMOLED',
        Procesor: "Snapdragon 8 Gen 3",
        RAM: "16GB",
        Memorija: "512GB",
        Kamera: "50MP + 50MP + 50MP",
        Baterija: "5000mAh",
      },
    },
    {
      id: 4,
      brand: "OnePlus",
      name: "12",
      specs: "256GB | Zelena | SD 8 Gen 3",
      price: 99990,
      oldPrice: null,
      badge: "new",
      image: "assets/img/oneplus-12-green.png",
      fullSpecs: {
        Ekran: '6.82" LTPO AMOLED',
        Procesor: "Snapdragon 8 Gen 3",
        RAM: "12GB",
        Memorija: "256GB",
        Kamera: "50MP + 48MP + 64MP",
        Baterija: "5400mAh",
      },
    },
    {
      id: 5,
      brand: "Google",
      name: "Pixel 8 Pro",
      specs: "256GB | Obsidian | Tensor G3",
      price: 119990,
      oldPrice: 134990,
      badge: "sale",
      image: "assets/img/google-pixel-8-pro.png",
      fullSpecs: {
        Ekran: '6.7" LTPO OLED',
        Procesor: "Google Tensor G3",
        RAM: "12GB",
        Memorija: "256GB",
        Kamera: "50MP + 48MP + 48MP",
        Baterija: "5050mAh",
      },
    },
    {
      id: 6,
      brand: "Samsung",
      name: "Galaxy Z Fold 5",
      specs: "512GB | Crna | Preklopni",
      price: 219990,
      oldPrice: null,
      badge: "popular",
      image: "assets/img/Samsung-Galaxy-Z-Fold-5.png",
      fullSpecs: {
        Ekran: '7.6" + 6.2" Dynamic AMOLED',
        Procesor: "Snapdragon 8 Gen 2",
        RAM: "12GB",
        Memorija: "512GB",
        Kamera: "50MP + 12MP + 10MP",
        Baterija: "4400mAh",
      },
    },
  ],

  // Brendovi
  brands: [
    { name: "Apple", icon: "🍎", count: 24 },
    { name: "Samsung", icon: "📱", count: 38 },
    { name: "Xiaomi", icon: "🔶", count: 45 },
    { name: "Huawei", icon: "🔴", count: 18 },
    { name: "OnePlus", icon: "⚡", count: 12 },
    { name: "Google", icon: "🔵", count: 8 },
  ],

  // Prednosti
  features: [
    {
      icon: "🚚",
      title: "Besplatna Dostava",
      description: "Za sve porudžbine iznad 50.000 RSD dostava je potpuno besplatna.",
    },
    {
      icon: "🛡️",
      title: "2 Godine Garancije",
      description: "Svi uređaji dolaze sa punom proizvođačkom garancijom.",
    },
    {
      icon: "💳",
      title: "Plaćanje na Rate",
      description: "Mogućnost plaćanja do 24 rate bez kamate.",
    },
    {
      icon: "🔄",
      title: "Zamena Starog Telefona",
      description: "Zamenite stari telefon za popust na novi model.",
    },
  ],

  // Footer
  footer: {
    about: "MobilShop je vaša pouzdana destinacija za kupovinu mobilnih telefona od 2015. godine.",
    quickLinks: [
      { name: "Svi telefoni", href: "#" },
      { name: "Akcijske ponude", href: "#" },
      { name: "Novi modeli", href: "#" },
      { name: "Oprema", href: "#" },
    ],
    support: [
      { name: "Česta pitanja", href: "#" },
      { name: "Garancija", href: "#" },
      { name: "Dostava", href: "#" },
      { name: "Reklamacije", href: "#" },
    ],
    contact: {
      address: "Knez Mihailova 25, Beograd",
      phone: "+381 11 123 4567",
      email: "info@mobilshop.rs",
    },
    social: ["📘", "📸", "🐦", "📺"],
    copyright: "© 2026 MobilShop. Sva prava zadržana.",
  },
}

// ===== REGULARNI IZRAZI ZA VALIDACIJU =====

const patterns = {
  // Ime: samo slova, razmaci, min 3 karaktera
  ime: /^[A-Za-zČčĆćŽžŠšĐđ\s]{3,50}$/,

  // Email: standardni email format
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Telefon: srpski format (06X XXX XXXX ili +381...)
  telefon: /^(\+381|0)6[0-9]\s?[0-9]{3}\s?[0-9]{3,4}$/,

  // Poruka: min 10 karaktera
  poruka: /^.{10,500}$/,
}

// Poruke gresaka
const errorMessages = {
  ime: "Ime mora sadržati 3-50 slova (bez brojeva i specijalnih znakova)",
  email: "Unesite validnu email adresu (npr. ime@domen.com)",
  telefon: "Unesite validan broj telefona (npr. 064 123 4567)",
  poruka: "Poruka mora imati između 10 i 500 karaktera",
  uslovi: "Morate prihvatiti uslove korišćenja",
}
// ===== FUNKCIJA ZA PRIKAZ TOAST PORUKE =====
function showToast(message, duration = 3000) {
  let toast = document.getElementById("toast")

  // Ako toast ne postoji, kreiraj ga i ubaci u body
  if (!toast) {
    toast = document.createElement("div")
    toast.id = "toast"
    toast.classList.add("hidden") // Početno sakriven
    document.body.appendChild(toast)
  }

  toast.textContent = message
  toast.classList.remove("hidden")
  toast.classList.add("show")

  // Automatski sakrij nakon duration milisekundi
  setTimeout(() => {
    toast.classList.remove("show")
    toast.classList.add("hidden")
  }, duration)
}

// ===== FUNKCIJE ZA DINAMICKO KREIRANJE SADRZAJA =====

// Formatiranje cene
function formatPrice(price) {
  return price.toLocaleString("sr-RS") + " RSD"
}

// Kreiranje headera
function renderHeader() {
  const header = document.getElementById("header")
  const data = siteData.header

  header.innerHTML = `
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <div class="logo-icon">${data.logoIcon}</div>
                    <div class="logo-text">${data.logoText}</div>
                </div>
                <div class="header-info">
                    <div class="header-info-item">
                        <span>📞</span>
                        <span>${data.phone}</span>
                    </div>
                    <div class="header-info-item">
                        <span>✉️</span>
                        <span>${data.email}</span>
                    </div>
                    <div class="header-info-item">
                        <span>🕐</span>
                        <span>${data.workHours}</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

// Kreiranje navigacije
function renderNavigation() {
  const nav = document.getElementById("main-nav")
  const navItems = siteData.navigation

  let menuHTML = ""
  navItems.forEach((item) => {
    const activeClass = item.active ? "active" : ""
    menuHTML += `<li><a href="${item.href}" class="${activeClass}">${item.name}</a></li>`
  })

  nav.innerHTML = `
        <div class="nav-container">
            <button class="mobile-menu-toggle" aria-label="Otvori meni">☰</button>
            <ul class="nav-menu">
                ${menuHTML}
            </ul>
            <div class="nav-search">
                <input type="search" placeholder="Pretraži telefone..." id="search-input">
            </div>
        </div>
    `

  // Dodaj event listener za mobilni meni
  setupMobileMenu()
}

// Kreiranje hero sekcije
function renderHero() {
  const hero = document.getElementById("hero")
  const data = siteData.hero

  let buttonsHTML = ""
  data.buttons.forEach((btn) => {
    buttonsHTML += `<a href="${btn.href}" class="btn ${btn.class}">${btn.text}</a>`
  })

  hero.innerHTML = `
        <div class="container">
            <div class="hero-content">
                <div class="hero-text animate-in">
                    <h1>${data.title}</h1>
                    <p>${data.subtitle}</p>
                    <div class="hero-buttons">
                        ${buttonsHTML}
                    </div>
                </div>
                <div class="hero-image">
                    <div class="hero-phone-display">
                        <div class="phone-mockup">
                            <div class="phone-screen">📱</div>
                        </div>
                        <div class="hero-badge pulse">${data.badge}</div>
                    </div>
                </div>
            </div>
        </div>
    `
}

// Kreiranje proizvoda
function renderProducts() {
  const container = document.getElementById("featured-products")
  const titleEl = document.getElementById("featured-title")
  const subtitleEl = document.getElementById("featured-subtitle")

  titleEl.textContent = siteData.sections.featured.title
  subtitleEl.textContent = siteData.sections.featured.subtitle
  subtitleEl.className = "section-subtitle text-center"
  titleEl.className = "text-center"

  let productsHTML = ""

  siteData.products.forEach((product, index) => {
    const badgeClass = product.badge === "sale" ? "badge-sale" : product.badge === "new" ? "badge-new" : "badge-popular"
    const badgeText = product.badge === "sale" ? "Akcija" : product.badge === "new" ? "Novo" : "Popularno"

    const oldPriceHTML = product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""

    productsHTML += `
            <div class="product-card animate-in" style="animation-delay: ${index * 0.1}s" data-product-id="${product.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-specs">${product.specs}</p>
                    <div class="product-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-details" data-id="${product.id}">Detalji</button>
                        <button class="btn btn-accent btn-cart" data-id="${product.id}">🛒 Korpa</button>
                    </div>
                </div>
            </div>
        `
  })

  container.innerHTML = productsHTML

  // Dodaj event listenere za proizvode
  setupProductEvents()
}

// Kreiranje brendova
function renderBrands() {
  const container = document.getElementById("brands-container")
  const titleEl = document.getElementById("brands-title")

  titleEl.textContent = siteData.sections.brands.title
  titleEl.className = "text-center"

  let brandsHTML = ""

  siteData.brands.forEach((brand, index) => {
    brandsHTML += `
            <div class="brand-card animate-in" style="animation-delay: ${index * 0.1}s" data-brand="${brand.name}">
                <div class="brand-icon">${brand.icon}</div>
                <div class="brand-name">${brand.name}</div>
                <div class="brand-count">${brand.count} modela</div>
            </div>
        `
  })

  container.innerHTML = brandsHTML

  // Dodaj event listenere za brendove
  setupBrandFilter()
}

// Kreiranje prednosti
function renderFeatures() {
  const container = document.getElementById("why-us-container")
  const titleEl = document.getElementById("why-us-title")

  titleEl.textContent = siteData.sections.whyUs.title
  titleEl.className = "text-center"

  let featuresHTML = ""

  siteData.features.forEach((feature, index) => {
    featuresHTML += `
            <div class="feature-card animate-in" style="animation-delay: ${index * 0.1}s">
                <div class="feature-icon">${feature.icon}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `
  })

  container.innerHTML = featuresHTML
}

// Kreiranje footera
function renderFooter() {
  const footer = document.getElementById("footer")
  const data = siteData.footer

  let quickLinksHTML = ""
  data.quickLinks.forEach((link) => {
    quickLinksHTML += `<li><a href="${link.href}">${link.name}</a></li>`
  })

  let supportLinksHTML = ""
  data.support.forEach((link) => {
    supportLinksHTML += `<li><a href="${link.href}">${link.name}</a></li>`
  })

  let socialHTML = ""
  data.social.forEach((icon) => {
    socialHTML += `<a href="#" class="social-link">${icon}</a>`
  })

  footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>O Nama</h3>
                    <p>${data.about}</p>
                    <div class="social-links">
                        ${socialHTML}
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Brzi Linkovi</h3>
                    <ul>${quickLinksHTML}</ul>
                </div>
                <div class="footer-section">
                    <h3>Podrška</h3>
                    <ul>${supportLinksHTML}</ul>
                </div>
                <div class="footer-section">
                    <h3>Kontakt</h3>
                    <p>📍 ${data.contact.address}</p>
                    <p>📞 ${data.contact.phone}</p>
                    <p>✉️ ${data.contact.email}</p>
                </div>
            </div>
            <div class="footer-bottom">
                ${data.copyright}
            </div>
        </div>
    `
}

// Postavljanje naslova kontakt sekcije
function renderContactTitles() {
  const titleEl = document.getElementById("contact-title")
  const subtitleEl = document.getElementById("contact-subtitle")

  titleEl.textContent = siteData.sections.contact.title
  titleEl.className = "text-center"
  subtitleEl.textContent = siteData.sections.contact.subtitle
  subtitleEl.className = "section-subtitle text-center"
}

// ===== VALIDACIJA FORME =====

function validateField(field, pattern, errorElementId) {
  const value = field.value.trim()
  const errorElement = document.getElementById(errorElementId)

  if (value === "") {
    field.classList.remove("success", "error")
    errorElement.textContent = ""
    return false
  }

  if (pattern.test(value)) {
    field.classList.remove("error")
    field.classList.add("success")
    errorElement.textContent = ""
    return true
  } else {
    field.classList.remove("success")
    field.classList.add("error")
    const fieldName = errorElementId.replace("-error", "")
    errorElement.textContent = errorMessages[fieldName]
    return false
  }
}

function setupFormValidation() {
  const form = document.getElementById("contact-form")
  const imeField = document.getElementById("ime")
  const emailField = document.getElementById("email")
  const telefonField = document.getElementById("telefon")
  const porukaField = document.getElementById("poruka")
  const usloviField = document.getElementById("uslovi")
  const budzetField = document.getElementById("budzet")
  const budzetOutput = document.getElementById("budzet-output")

  // Real-time validacija
  imeField.addEventListener("input", () => validateField(imeField, patterns.ime, "ime-error"))
  emailField.addEventListener("input", () => validateField(emailField, patterns.email, "email-error"))
  telefonField.addEventListener("input", () => validateField(telefonField, patterns.telefon, "telefon-error"))
  porukaField.addEventListener("input", () => validateField(porukaField, patterns.poruka, "poruka-error"))

  // Budzet slider
  budzetField.addEventListener("input", () => {
    budzetOutput.textContent = formatPrice(Number.parseInt(budzetField.value))
  })

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validacija svih polja
    const isImeValid = validateField(imeField, patterns.ime, "ime-error")
    const isEmailValid = validateField(emailField, patterns.email, "email-error")
    const isTelefonValid = validateField(telefonField, patterns.telefon, "telefon-error")

    // Provera uslova
    const usloviError = document.getElementById("uslovi-error")
    let isUsloviValid = true
    if (!usloviField.checked) {
      usloviError.textContent = errorMessages.uslovi
      isUsloviValid = false
    } else {
      usloviError.textContent = ""
    }

    // Ako je sve validno
    if (isImeValid && isEmailValid && isTelefonValid && isUsloviValid) {
      // Prikupi podatke
      const formData = {
        ime: imeField.value.trim(),
        email: emailField.value.trim(),
        telefon: telefonField.value.trim(),
        brend: document.getElementById("brend").value,
        budzet: budzetField.value,
        interesovanja: Array.from(document.querySelectorAll('input[name="interesovanje"]:checked')).map(
          (cb) => cb.value,
        ),
        poruka: porukaField.value.trim(),
      }

      // Prikazi uspesnu poruku
      showFormSuccess(formData)
    }
  })
}

function showFormSuccess(data) {
  const form = document.getElementById("contact-form")
  const successDiv = document.getElementById("form-success")

  const brendText = data.brend ? data.brend.charAt(0).toUpperCase() + data.brend.slice(1) : "Nije izabrano"
  const interesovanjaText = data.interesovanja.length > 0 ? data.interesovanja.join(", ") : "Nije izabrano"

  successDiv.innerHTML = `
        <div class="form-success-icon">✅</div>
        <h3>Hvala Vam, ${data.ime}!</h3>
        <p>Vaš upit je uspešno poslat. Odgovorićemo vam u najkraćem roku na ${data.email}.</p>
        <div class="submitted-data">
            <h4>Poslati podaci:</h4>
            <p><strong>Ime:</strong> ${data.ime}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefon:</strong> ${data.telefon}</p>
            <p><strong>Brend:</strong> ${brendText}</p>
            <p><strong>Budžet:</strong> ${formatPrice(Number.parseInt(data.budzet))}</p>
            <p><strong>Interesovanja:</strong> ${interesovanjaText}</p>
            <p><strong>Poruka:</strong> ${data.poruka || "Nema poruke"}</p>
        </div>
        <button class="btn btn-primary" onclick="resetForm()" style="margin-top: 1rem;">Pošalji novi upit</button>
    `

  form.classList.add("hidden")
  successDiv.classList.remove("hidden")
}

function resetForm() {
  const form = document.getElementById("contact-form")
  const successDiv = document.getElementById("form-success")

  form.reset()
  form.querySelectorAll("input, textarea, select").forEach((field) => {
    field.classList.remove("success", "error")
  })
  document.getElementById("budzet-output").textContent = "100,000 RSD"

  successDiv.classList.add("hidden")
  form.classList.remove("hidden")
}

// ===== MOBILNI MENI =====

function setupMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle")
  const menu = document.querySelector(".nav-menu")

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active")
      toggle.textContent = menu.classList.contains("active") ? "✕" : "☰"
    })

    // Zatvori meni kada se klikne na link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active")
        toggle.textContent = "☰"
      })
    })
  }
}

// ===== MODAL ZA PROIZVODE =====

function showProductModal(productId) {
  const product = siteData.products.find((p) => p.id === productId)
  if (!product) return

  const modal = document.getElementById("modal")
  const modalBody = document.getElementById("modal-body")

  let specsHTML = ""
  for (const [key, value] of Object.entries(product.fullSpecs)) {
    specsHTML += `<li><span>${key}</span><span>${value}</span></li>`
  }

  const oldPriceHTML = product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""

  modalBody.innerHTML = `
        <div class="modal-product-image">
  <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-product-info">
            <div class="product-brand">${product.brand}</div>
            <h2>${product.name}</h2>
            <div class="product-price" style="margin: 1rem 0;">
                <span class="price-current">${formatPrice(product.price)}</span>
                ${oldPriceHTML}
            </div>
            <p>${product.specs}</p>
            <div class="modal-specs">
                <h4>Specifikacije:</h4>
                <ul>${specsHTML}</ul>
            </div>
            <div class="product-actions">
                <button class="btn btn-accent btn-cart" data-id="${product.id}">🛒 Dodaj u korpu</button>
                <a href="#contact-section" class="btn btn-primary" onclick="closeModal()">Pošalji upit</a>
            </div>
        </div>
    `

  modal.classList.remove("hidden")
}

function closeModal() {
  const modal = document.getElementById("modal")
  modal.classList.add("hidden")
}

function setupProductEvents() {
  // Detalji dugmici
  document.querySelectorAll(".btn-details").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"))
      showProductModal(productId)
    })
  })

  // Korpa dugmici
  document.querySelectorAll(".btn-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"))
      const product = siteData.products.find((p) => p.id === productId)
      if (product) {
        showToast(`${product.name} je dodat u korpu!`)
      }
    })
  })
}


// Modal close events
function setupModalEvents() {
  const modal = document.getElementById("modal")
  const closeBtn = document.querySelector(".modal-close")

  closeBtn.addEventListener("click", closeModal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
}

// ===== FILTER PO BRENDU =====

function setupBrandFilter() {
  document.querySelectorAll(".brand-card").forEach((card) => {
    card.addEventListener("click", function () {
      const brandName = this.getAttribute("data-brand")
      filterProductsByBrand(brandName)
    })
  })
}

function filterProductsByBrand(brandName) {
  const container = document.getElementById("featured-products")
  const filteredProducts = siteData.products.filter((p) => p.brand === brandName)

  if (filteredProducts.length === 0) {
    container.innerHTML = `<p class="text-center" style="grid-column: 1/-1;">Nema proizvoda za izabrani brend.</p>`
    return
  }

  // Dinamicki prikazi filtrirane proizvode
  let productsHTML = ""
  filteredProducts.forEach((product, index) => {
    const badgeClass = product.badge === "sale" ? "badge-sale" : product.badge === "new" ? "badge-new" : "badge-popular"
    const badgeText = product.badge === "sale" ? "Akcija" : product.badge === "new" ? "Novo" : "Popularno"

    const oldPriceHTML = product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""

    productsHTML += `
            <div class="product-card animate-in" style="animation-delay: ${index * 0.1}s" data-product-id="${product.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-specs">${product.specs}</p>
                    <div class="product-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-details" data-id="${product.id}">Detalji</button>
                        <button class="btn btn-accent btn-cart" data-id="${product.id}">🛒 Korpa</button>
                    </div>
                </div>
            </div>
        `
  })

  productsHTML += `<button class="btn btn-secondary" onclick="renderProducts()" style="grid-column: 1/-1; margin-top: 1rem;">Prikaži sve proizvode</button>`

  container.innerHTML = productsHTML
  setupProductEvents()

  // Scroll do proizvoda
  document.getElementById("featured-section").scrollIntoView({ behavior: "smooth" })
}

// ===== PRETRAGA =====

function setupSearch() {
  const searchInput = document.getElementById("search-input")

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim()

      if (query.length < 2) {
        renderProducts()
        return
      }

      const filteredProducts = siteData.products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.specs.toLowerCase().includes(query),
      )

      displayFilteredProducts(filteredProducts)
    })
  }
}

function displayFilteredProducts(products) {
  const container = document.getElementById("featured-products")

  if (products.length === 0) {
    container.innerHTML = `<p class="text-center" style="grid-column: 1/-1;">Nema rezultata pretrage.</p>`
    return
  }

  let productsHTML = ""
  products.forEach((product, index) => {
    const badgeClass = product.badge === "sale" ? "badge-sale" : product.badge === "new" ? "badge-new" : "badge-popular"
    const badgeText = product.badge === "sale" ? "Akcija" : product.badge === "new" ? "Novo" : "Popularno"

    const oldPriceHTML = product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""

    productsHTML += `
            <div class="product-card animate-in" style="animation-delay: ${index * 0.1}s" data-product-id="${product.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-specs">${product.specs}</p>
                    <div class="product-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-details" data-id="${product.id}">Detalji</button>
                        <button class="btn btn-accent btn-cart" data-id="${product.id}">🛒 Korpa</button>
                    </div>
                </div>
            </div>
        `
  })

  container.innerHTML = productsHTML
  setupProductEvents()
}

// ===== AKTIVNA NAVIGACIJA PRI SKROLOVANJU =====

function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-menu a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  })
}

// ===== Podaci za autora =====
const autorData = {
    ime: "Nikola Gajić",
    brojIndeksa: "160/23",
    slika: "assets/img/ng23.jpg",
    tekst: "Student sam ICT-a, zainteresovan za web development i moderne tehnologije. " +
           "Ovo je dinamički kreirana stranica autora pomoću JavaScript-a."
};

// ===== Funkcija za kreiranje autor stranice =====
function kreirajAutorStranicu(data) {
    const root = document.getElementById("autor-root");

    // Kreiranje glavnog kontejnera
    const container = document.createElement("div");
    container.className = "author-container";

    // Slika
    const img = document.createElement("img");
    img.src = data.slika;
    img.alt = data.ime;
    img.className = "author-image";
    container.appendChild(img);

    // Ime i prezime
    const ime = document.createElement("div");
    ime.className = "author-name";
    ime.textContent = data.ime;
    container.appendChild(ime);

    // Broj indeksa
    const indeks = document.createElement("div");
    indeks.className = "author-index";
    indeks.textContent = `Broj indeksa: ${data.brojIndeksa}`;
    container.appendChild(indeks);

    // Tekst
    const tekst = document.createElement("div");
    tekst.className = "author-text";
    tekst.textContent = data.tekst;
    container.appendChild(tekst);

    // Dugme nazad
    const btn = document.createElement("a");
    btn.href = "index.html";
    btn.className = "btn-back";
    btn.textContent = "Nazad na Početnu";
    container.appendChild(btn);

    // Ubacivanje u root div
    root.appendChild(container);
}

// Ako postoji div za autora, kreiraj sadržaj
const autorRoot = document.getElementById("autor-root");
if (autorRoot) {
    kreirajAutorStranicu(autorData);
}

// ===== INICIJALIZACIJA =====

document.addEventListener("DOMContentLoaded", () => {
  // Dinamicki ispis svih sekcija
  renderHeader()
  renderNavigation()
  renderHero()
  renderProducts()
  renderBrands()
  renderFeatures()
  renderContactTitles()
  renderFooter()

  // Postavljanje event listenera
  setupFormValidation()
  setupModalEvents()
  setupSearch()
  setupScrollSpy()
})
