const SITE = {
    whatsapp: 'https://wa.me/8801712383115',
    youtube: 'https://www.youtube.com/@babbage.academy',
    facebook: 'https://www.facebook.com/cbabbage.academy',
    bkash: '01712383115',
};

function getEnrollPageUrl(courseId) {
    return courseId ? `enrollment.html?course=${encodeURIComponent(courseId)}` : 'enrollment.html';
}

function buildCourseSelectOptions(preselect = '') {
    if (typeof COURSES === 'undefined') return '<option value="">— কোর্স নির্বাচন করো —</option>';
    return '<option value="">— কোর্স নির্বাচন করো —</option>' + COURSES.map((c) =>
        `<option value="${c.id}"${c.id === preselect ? ' selected' : ''}>${c.title}</option>`
    ).join('');
}

function populateCourseSelect(selectEl, preselect = '') {
    if (!selectEl) return;
    selectEl.innerHTML = buildCourseSelectOptions(preselect);
}

function getCurrentPage() {
    if (document.body.dataset.page) return document.body.dataset.page;
    const file = window.location.pathname.split('/').pop() || 'index.html';
    if (file === '' || file === 'index.html') return 'home';
    return file.replace('.html', '');
}

const NAV_ITEMS = [
    { page: 'home', label: 'হোম', homeHref: '#home', href: 'index.html', section: 'home' },
    { page: 'all-courses', label: 'সব কোর্স', href: 'all-courses.html', section: 'courses' },
    { page: 'about-us', label: 'আমাদের সম্পর্কে', href: 'about-us.html' },
    { page: null, label: 'বৈশিষ্ট্য', homeHref: '#features', href: 'index.html#features', section: 'features' },
    { page: null, label: 'প্রশ্নোত্তর', homeHref: '#faq', href: 'index.html#faq', section: 'faq' },
];

function renderSiteHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    const current = getCurrentPage();
    const isHome = current === 'home';

    const navLinks = NAV_ITEMS.map((item) => {
        const href = isHome && item.homeHref ? item.homeHref : item.href;
        const active = item.page === current ? ' active' : '';
        const sectionAttr = isHome && item.section ? ` data-section="${item.section}"` : '';
        return `<li><a href="${href}" class="nav-link${active} hover:text-brand-700 transition"${sectionAttr}>${item.label}</a></li>`;
    }).join('');

    el.className = 'site-header sticky top-0 z-30';
    el.innerHTML = `
        <nav class="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2.5 group">
                <img src="assets/images/logo.png" alt="ব্যাবেজ একাডেমি লোগো"
                    class="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <span class="font-bold text-xl md:text-2xl text-gray-900">ব্যাবেজ একাডেমি</span>
            </a>
            <ul class="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">${navLinks}</ul>
            <div class="flex items-center gap-2 sm:gap-3">
                <a href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"
                    class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube"
                    class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook"
                    class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </div>
        </nav>`;
}

function renderSiteFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    el.id = 'contact';
    el.className = 'bg-gradient-to-b from-white to-brand-50 border-t border-gray-100';
    if (document.body.classList.contains('flex-col')) {
        el.classList.add('mt-auto', 'w-full');
    }
    el.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                    <h4 class="font-bold text-gray-900 mb-4">Courses</h4>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li><a href="course-details.html?id=python-ict" class="hover:text-brand-700">Python + ICT</a></li>
                        <li><a href="course-details.html?id=c-ict" class="hover:text-brand-700">C + ICT</a></li>
                        <li><a href="course-details.html?id=nhspc-prep" class="hover:text-brand-700">NHSPC Prep</a></li>
                        <li><a href="all-courses.html" class="hover:text-brand-700">All Courses</a></li>
                        <li><a href="enrollment.html" class="hover:text-brand-700">Enrollment</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-4">Company</h4>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li><a href="about-us.html" class="hover:text-brand-700">About Us</a></li>
                        <li><a href="terms-and-conditions.html" class="hover:text-brand-700">Terms &amp; Conditions</a></li>
                        <li><a href="privacy-policy.html" class="hover:text-brand-700">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-4">Connect</h4>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li><a href="${SITE.whatsapp}" target="_blank" rel="noopener" class="hover:text-brand-700">WhatsApp</a></li>
                        <li><a href="${SITE.youtube}" target="_blank" rel="noopener" class="hover:text-brand-700">YouTube</a></li>
                        <li><a href="${SITE.facebook}" target="_blank" rel="noopener" class="hover:text-brand-700">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 border-t border-gray-100 pt-10">
                <div>
                    <p>© <span class="copyright-year"></span> Babbage Academy. All rights reserved.</p>
                    <p class="mt-1 text-xs">Font — <a href="https://lipighor.com"
                            class="hover:text-brand-700 underline underline-offset-2" target="_blank"
                            rel="noopener">lipighor.com</a></p>
                </div>
                <div class="flex flex-wrap items-center justify-center sm:justify-end gap-3">
                    <a href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 hover:border-brand-200 transition">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                    </a>
                    <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 hover:border-brand-200 transition">
                        <i class="fa-brands fa-youtube text-lg"></i>
                    </a>
                    <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook"
                        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 hover:border-brand-200 transition">
                        <i class="fa-brands fa-facebook-f text-lg"></i>
                    </a>
                </div>
            </div>
        </div>`;
}

function renderSiteChrome() {
    renderSiteHeader();
    renderSiteFooter();
}

function initSite(options = {}) {
    renderSiteChrome();
    initScrollProgress();
    initBackToTop();
    initCopyrightYear();
    initPolicyUpdatedDate();
    if (options.reveal !== false) initReveal();
}

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toBnNumber(value) {
    return String(value).split('').map((d) => BN_DIGITS[+d] ?? d).join('');
}

function initCopyrightYear() {
    const year = toBnNumber(new Date().getFullYear());
    document.querySelectorAll('.copyright-year').forEach((el) => {
        el.textContent = year;
    });
}

const BN_MONTHS = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

function initPolicyUpdatedDate() {
    const now = new Date();
    const text = `${BN_MONTHS[now.getMonth()]} ${toBnNumber(now.getFullYear())}`;
    document.querySelectorAll('.policy-updated').forEach((el) => {
        el.textContent = text;
    });
}

function initScrollProgress() {
    const progress = document.getElementById('scroll-progress');
    const header = document.querySelector('.site-header');
    if (!progress && !header) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) {
            progress.style.transform = `scaleX(${docHeight > 0 ? scrollTop / docHeight : 0})`;
        }
        header?.classList.toggle('scrolled', scrollTop > 24);
    }, { passive: true });
}

function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'উপরে ফিরে যাও');
        btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(btn);
    }

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
}

function initReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
    if (!revealEls.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
        revealEls.forEach((el) => el.classList.add('revealed'));
        return;
    }

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => obs.observe(el));
}

function handleEnrollmentSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const courseId = data.course || '';
    const course = typeof getCourseById === 'function' ? getCourseById(courseId) : null;

    sessionStorage.setItem('enrollmentData', JSON.stringify({
        ...data,
        courseTitle: course?.title || data.course,
        submittedAt: new Date().toISOString(),
    }));

    window.location.href = `enrollment-success.html${courseId ? `?course=${encodeURIComponent(courseId)}` : ''}`;
}
