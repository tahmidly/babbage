const ENROLL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeKd2ZqZRwi-WOPNQOxXFGsEwLyyeMNWOWyHkMAeAYsNt3kcQ/viewform?usp=send_form';

const INSTRUCTOR = {
    name: 'মো. রফিকুল ইসলাম',
    title: 'প্রধান শিক্ষক ও প্রতিষ্ঠাতা',
    bio: 'হাই স্কুল শিক্ষার্থীদের জন্য বাংলায় প্রোগ্রামিং শেখানোর ৫+ বছরের অভিজ্ঞতা। ICT সিলেবাস, প্রতিযোগিতামূলক প্রোগ্রামিং ও NHSPC প্রস্তুতিতে বিশেষজ্ঞ।',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    specialty: 'পাইথন, সি, NHSPC',
};

const COURSES = [
    {
        id: 'python-ict',
        tag: 'প্রোগ্রামিং',
        title: 'পাইথন + ICT',
        desc: 'পাইথন দিয়ে প্রোগ্রামিংয়ের ভিত্তি গড়ে তোলো। ICT সিলেবাসের সমস্যা সমাধান, অ্যালগরিদম, ডেটা হ্যান্ডলিং এবং হাতে-কলমে কোডিং — সব কিছু শূন্য থেকে শুরু। ক্লাস ৯–১০-এর জন্য উপযুক্ত।',
        longDesc: 'এই কোর্সে পাইথন প্রোগ্রামিং ভাষা ও NCTB ICT সিলেবাস একসাথে শেখানো হয়। ভেরিয়েবল, লুপ, ফাংশন, লিস্ট, ফাইল হ্যান্ডলিং থেকে শুরু করে বোর্ড পরীক্ষার প্র্যাকটিক্যাল পর্যন্ত — সব কিছু বাংলায় ধাপে ধাপে। ছোট ছোট প্রজেক্ট করে শেখার মাধ্যমে প্রোগ্রামিংয়ে দক্ষতা অর্জন করো।',
        lessons: '৩২টি পাঠ',
        time: '১৪ ঘণ্টা ৩০ মি.',
        level: 'শুরু থেকে',
        grade: 'ক্লাস ৯–১০',
        language: 'বাংলা',
        price: 'বিনামূল্যে',
        img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop',
        outcomes: [
            'পাইথন সিনট্যাক্স ও মৌলিক প্রোগ্রামিং ধারণা',
            'ICT বইয়ের সমস্যা সমাধান ও অ্যালগরিদমিক চিন্তা',
            'লিস্ট, স্ট্রিং ও ফাইল নিয়ে কাজ করা',
            'বোর্ড theory ও practical প্রশ্নের প্রস্তুতি',
            'ছোট প্রজেক্ট তৈরি করে কোডিং অনুশীলন',
        ],
        includes: [
            '৩২টি ভিডিও পাঠ',
            'ICT সিলেবাসভিত্তিক নোট',
            'কুইজ ও অনুশীলন',
            'প্রজেক্ট গাইড',
            'কমিউনিটি সাপোর্ট',
        ],
        curriculum: [
            {
                title: 'পাইথন পরিচিতি ও মৌলিক ধারণা',
                items: ['পাইথন ইনস্টল ও সেটআপ', 'ভেরিয়েবল ও ডেটা টাইপ', 'ইনপুট-আউটপুট', 'অপারেটর'],
            },
            {
                title: 'নিয়ন্ত্রণ প্রবাহ ও লুপ',
                items: ['if-elif-else', 'for ও while লুপ', 'break ও continue', 'নেস্টেড লুপ'],
            },
            {
                title: 'ফাংশন ও ডেটা স্ট্রাকচার',
                items: ['ফাংশন সংজ্ঞা', 'লিস্ট ও টিউপল', 'ডিকশনারি', 'স্ট্রিং ম্যানিপুলেশন'],
            },
            {
                title: 'ICT সিলেবাস ও প্রজেক্ট',
                items: ['ICT বইয়ের সমস্যা সমাধান', 'ফাইল রিড-রাইট', 'মিনি প্রজেক্ট', 'বোর্ড প্রস্তুতি'],
            },
        ],
        audience: 'ক্লাস ৯–১০-এর ICT ও প্রোগ্রামিং শেখা শুরু করতে চাওয়া শিক্ষার্থীদের জন্য। অভিজ্ঞতা লাগে না।',
    },
    {
        id: 'c-ict',
        tag: 'প্রোগ্রামিং',
        title: 'সি + ICT',
        desc: 'সি প্রোগ্রামিং ভাষা ও ICT পাঠ্যক্রম একসাথে শেখো। লজিক বিল্ডিং, ডেটা স্ট্রাকচার, মেমরি ধারণা এবং দক্ষ, গঠনমূলক কোড লেখা — বোর্ড পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি।',
        longDesc: 'সি প্রোগ্রামিং হলো ICT সিলেবাসের মূল ভাষা। এই কোর্সে ভেরিয়েবল, কন্ডিশন, লুপ, অ্যারে, ফাংশন, পয়েন্টারের মৌলিক ধারণা এবং বোর্ড practical-এর জন্য প্রয়োজনীয় সব বিষয় বাংলায় ব্যাখ্যা করা হয়। কোড লিখে ও ডিবাগ করে শেখার উপর জোর দেওয়া হয়।',
        lessons: '৩৬টি পাঠ',
        time: '১৬ ঘণ্টা',
        level: 'শুরু থেকে',
        grade: 'ক্লাস ৯–১২',
        language: 'বাংলা',
        price: 'বিনামূল্যে',
        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
        outcomes: [
            'সি প্রোগ্রামিং সিনট্যাক্স ও কম্পাইলেশন',
            'অ্যারে, ফাংশন ও স্ট্রাকচার্ড প্রোগ্রামিং',
            'মেমরি ও পয়েন্টারের মৌলিক ধারণা',
            'ICT practical ও theory প্রশ্ন সমাধান',
            'দক্ষ ও পাঠযোগ্য কোড লেখার অভ্যাস',
        ],
        includes: [
            '৩৬টি ভিডিও পাঠ',
            'সি প্রোগ্রামিং নোট',
            'কোড উদাহরণ ও অনুশীলন',
            'মক টেস্ট',
            'Q&A সেশন',
        ],
        curriculum: [
            {
                title: 'সি পরিচিতি ও মৌলিক সিনট্যাক্স',
                items: ['Hello World ও কম্পাইলার', 'ডেটা টাইপ ও ভেরিয়েবল', 'অপারেটর', 'scanf ও printf'],
            },
            {
                title: 'নিয়ন্ত্রণ প্রবাহ',
                items: ['if-else ও switch', 'for, while, do-while', 'নেস্টেড লুপ', 'সাধারণ সমস্যা সমাধান'],
            },
            {
                title: 'অ্যারে ও ফাংশন',
                items: ['১D ও 2D অ্যারে', 'ফাংশন সংজ্ঞা', 'call by value', 'রিকার্সন পরিচিতি'],
            },
            {
                title: 'ICT বোর্ড প্রস্তুতি',
                items: ['সিলেবাসভিত্তিক সমস্যা', 'ফাইল হ্যান্ডলিং', 'practical টিপস', 'মক পরীক্ষা'],
            },
        ],
        audience: 'ICT সিলেবাসে সি প্রোগ্রামিং শেখা বা বোর্ড পরীক্ষায় ভালো করতে চাওয়া হাই স্কুল শিক্ষার্থীদের জন্য।',
    },
    {
        id: 'nhspc-prep',
        tag: 'প্রতিযোগিতা',
        title: 'NHSPC প্রস্তুতি',
        desc: 'জাতীয় হাই স্কুল প্রোগ্রামিং প্রতিযোগিতার জন্য সম্পূর্ণ প্রস্তুতি। প্রতিযোগিতামূলক সমস্যা সমাধান, অ্যালগরিদম, টাইমড মক কনটেস্ট — দক্ষতা ক্রমাগত বাড়াও।',
        longDesc: 'NHSPC (জাতীয় হাই স্কুল প্রোগ্রামিং প্রতিযোগিতা) বাংলাদেশের সবচেয়ে বড় হাই স্কুল প্রোগ্রামিং প্রতিযোগিতা। এই কোর্সে সমস্যা প্যাটার্ন, অ্যালগরিদম, ডেটা স্ট্রাকচার, টাইম কমপ্লেক্সিটি এবং past problem solving শেখানো হয়। নিয়মিত মক কনটেস্টে অংশ নিয়ে প্রকৃত পরীক্ষার অভিজ্ঞতা অর্জন করো।',
        lessons: '২৮টি পাঠ',
        time: '১২ ঘণ্টা ৪৫ মি.',
        level: 'মধ্যম',
        grade: 'ক্লাস ৯–১২',
        language: 'বাংলা',
        price: 'বিনামূল্যে',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        outcomes: [
            'প্রতিযোগিতামূলক সমস্যা সমাধান কৌশল',
            'অ্যালগরিদম ও ডেটা স্ট্রাকচারের প্রয়োগ',
            'সময় ও মেমরি কমপ্লেক্সিটি বিশ্লেষণ',
            'NHSPC past problem practice',
            'মক কনটেস্টে দক্ষতা বৃদ্ধি',
        ],
        includes: [
            '২৮টি ভিডিও পাঠ',
            'অ্যালগরিদম নোট',
            'Past problem সেট',
            'টাইমড মক কনটেস্ট',
            'মেন্টর ফিডব্যাক',
        ],
        curriculum: [
            {
                title: 'প্রতিযোগিতামূলক প্রোগ্রামিং পরিচিতি',
                items: ['NHSPC ফরম্যাট', 'সমস্যা পড়ার কৌশল', 'I/O টেমপ্লেট', 'টেস্ট কেস চিন্তা'],
            },
            {
                title: 'অ্যালগরিদম ও ডেটা স্ট্রাকচার',
                items: ['সর্টিং ও সার্চিং', 'গ্রাফ পরিচিতি', 'DP ও গ্রিডি', 'স্ট্যাক ও কিউ'],
            },
            {
                title: 'সমস্যা সমাধান অনুশীলন',
                items: ['Easy ও Medium সমস্যা', 'Past NHSPC problems', 'Code review', 'অপটিমাইজেশন'],
            },
            {
                title: 'মক কনটেস্ট ও প্রস্তুতি',
                items: ['টাইমড মক', 'কনটেস্ট স্ট্র্যাটেজি', 'মানসিক প্রস্তুতি', 'ফাইনাল রিভিশন'],
            },
        ],
        audience: 'NHSPC-তে অংশ নিতে চাওয়া এবং ইতিমধ্যে মৌলিক প্রোগ্রামিং জানা শিক্ষার্থীদের জন্য।',
    },
];

function getCourseById(id) {
    return COURSES.find((course) => course.id === id);
}

const BOOK_ICON = '<svg class="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 012-2h6v16H6a2 2 0 00-2 2V5zM20 5a2 2 0 00-2-2h-6v16h6a2 2 0 012 2V5z"/></svg>';
const CLOCK_ICON = '<svg class="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

function renderCourseCards(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = COURSES.map((c, i) => `
        <article class="reveal interactive-card rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white" style="transition-delay:${i * 0.1}s">
            <a href="course-details.html?id=${c.id}" class="block">
                <div class="relative h-44 overflow-hidden">
                    <img src="${c.img}" alt="${c.title}" class="w-full h-full object-cover" />
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-brand-800 text-xs font-semibold">#${c.tag}</span>
                </div>
            </a>
            <div class="p-6">
                <h3 class="font-bold text-xl text-gray-900"><a href="course-details.html?id=${c.id}" class="hover:text-brand-700 transition">${c.title}</a></h3>
                <p class="text-gray-500 text-sm mt-3 leading-relaxed">${c.desc}</p>
                <div class="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-600">
                    <span class="flex items-center gap-1">${BOOK_ICON}${c.lessons}</span>
                    <span class="flex items-center gap-1">${CLOCK_ICON}${c.time}</span>
                </div>
                <a href="course-details.html?id=${c.id}" class="btn-gradient btn-shine mt-5 w-full py-3.5 rounded-full text-white text-[15px] text-center block">কোর্সে ভর্তি হও</a>
            </div>
        </article>
    `).join('');
}
