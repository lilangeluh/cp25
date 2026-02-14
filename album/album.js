/*
Page data notes:
- layout: 'single' | 'stacked'
- for single: image, ratio?, tape?, rotation?, frameWidth?
- for stacked: images: [{ image, ratio?, tape?, rotation?, frameWidth? }, { ... }]
- date: top-left corner text
- location: top-right corner text
- meta2Date/meta2Location: optional second line on bottom-right (stacked pages)

Ratio examples:
- '3 / 4' (portrait)
- '4 / 3' (landscape)
- '1 / 1' (square)
- '16 / 9' (wide)

Ordering:
- photos are in the order listed in albumPages.
- hidden guard pages for spread-only mode, album page index N appears at flipbook page N + 2.
*/

const PAGE_TEXTURE_URL = './texture2.jpg';

const albumPages = [
  {
    type: 'photo',
    layout: 'single',
    image: './images/1a.webp',
    date: 'Jul 5, 2045',
    location: 'San Francisco',
    ratio: '3 / 4',
    rotation: -2,
    tape: false
  },
  {
    type: 'photo',
    layout: 'stacked',
    images: [
      { image: './images/2a.webp', ratio: '3 / 2', tape: true },
      { image: './images/2b.webp', ratio: '3 / 2', tape: true }
    ],
    date: 'Jan 30, 2023',
    location: 'Cardiff',
    meta2Date: 'Mar 27, 2023',
    meta2Location: 'Death Valley',
    rotation: 1

    
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/3a.webp',
    date: 'Dec 22, 2024',
    location: 'Lake Tekapo',
    ratio: '4 / 5',
    rotation: 0.5,
    tape: true
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/4a.webp',
    date: 'Dec 27, 2024',
    location: 'Lake Wanaka',
    ratio: '4 / 5',
    rotation: -1
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/5a.webp',
    date: 'Sept 13, 2022',
    location: 'Singapore',
    ratio: '3 / 4',
    rotation: -1
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/6a.webp',
    date: 'Sept 1, 2023',
    location: 'Kyoto',
    ratio: '3 / 4',
    rotation: 1,
    tape: true
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/7a.webp',
    date: 'Oct 3, 2022',
    location: 'Getty Museum',
    ratio: '3 / 4',
    rotation: -0.5
  },
  {
    type: 'photo',
    layout: 'single',
    image: './images/8a.webp',
    date: 'Jan 4, 2022',
    location: 'Del Mar',
    ratio: '3 / 4',
    rotation: 0,
    tape: true
  },
  { type: 'empty' }
];

function normalizePages(pages) {
  return [{ type: 'empty' }, ...pages, { type: 'empty' }];
}

function frameStyle(item, pageData, isStacked) {
  const rawRatio = item.ratio || pageData.ratio || (isStacked ? '16 / 9' : '3 / 4');
  const ratio = isStacked ? normalizeHorizontalRatio(rawRatio) : rawRatio;
  const rotation = item.rotation ?? pageData.rotation ?? 0;
  const defaultWidth = isStacked ? 300 : 320;
  const frameWidth = item.frameWidth || pageData.frameWidth || defaultWidth;
  return `--photo-ratio: ${ratio}; --rotation: ${rotation}deg; --frame-width: ${frameWidth}px;`;
}

function useTape(item, pageData) {
  if (typeof item.tape === 'boolean') return item.tape;
  return !!pageData.tape;
}

function normalizeHorizontalRatio(ratio) {
  const m = /^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/.exec(String(ratio));
  if (!m) return '16 / 9';
  let w = Number(m[1]);
  let h = Number(m[2]);
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return '16 / 9';
  if (w < h) [w, h] = [h, w];
  return `${w} / ${h}`;
}

function randomPastelBackdrop() {
  const tones = [
    [196, 231, 255], // pastel blue
    [224, 237, 255], // airy periwinkle
    [255, 227, 205], // peach
    [255, 214, 227], // soft pink
    [228, 245, 223], // mint
    [248, 235, 255], // lilac
    [255, 239, 198], // butter
    [214, 244, 247]  // aqua
  ];

  const blobs = Array.from({ length: 8 }, () => {
    const [r, g, b] = tones[Math.floor(Math.random() * tones.length)];
    const alpha = (0.3 + Math.random() * 0.22).toFixed(2);
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const size = 28 + Math.floor(Math.random() * 40);
    return `radial-gradient(circle at ${x}% ${y}%, rgba(${r}, ${g}, ${b}, ${alpha}) 0%, rgba(${r}, ${g}, ${b}, 0) ${size}%)`;
  });

  const base = 'linear-gradient(160deg, #fbfbf8 0%, #f5f4ef 52%, #f2f1ec 100%)';
  document.documentElement.style.setProperty('--bg-dynamic', `${blobs.join(', ')}, ${base}`);
}

function generatePageHTML(pageData) {
  switch (pageData.type) {
    case 'photo': {
      const metaParts = [pageData.date, pageData.location].filter(Boolean);
      const meta = metaParts.length ? `<span class="page-meta">${metaParts.join(' - ')}</span>` : '';
      const meta2Parts = [pageData.meta2Date, pageData.meta2Location].filter(Boolean);
      const meta2 = meta2Parts.length ? `<span class="page-meta-secondary">${meta2Parts.join(' - ')}</span>` : '';

      if (pageData.layout === 'stacked' && Array.isArray(pageData.images) && pageData.images.length) {
        const stackedFrames = pageData.images.slice(0, 2).map((item) => {
          const tapeClass = useTape(item, pageData) ? 'with-tape' : '';
          const style = frameStyle(item, pageData, true);
          return `
            <div class="photo-frame ${tapeClass}" style="${style}">
              <div class="photo-media">
                <img src="${item.image}" alt="Photo" loading="lazy">
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="page-content">
            ${meta}
            ${meta2}
            <div class="photo-wrapper stacked">
              ${stackedFrames}
            </div>
          </div>
          <div class="gradient"></div>
        `;
      }

      return `
        <div class="page-content">
          ${meta}
          <div class="photo-wrapper">
            <div class="photo-frame ${pageData.tape ? 'with-tape' : ''}" style="${frameStyle(pageData, pageData, false)}">
              <div class="photo-media">
                <img src="${pageData.image}" alt="Photo" loading="lazy">
              </div>
            </div>
          </div>
        </div>
        <div class="gradient"></div>
      `;
    }

    case 'empty':
    default:
      return `
        <div class="page-content empty-page">
          <div class="page-decoration"></div>
        </div>
        <div class="gradient"></div>
      `;
  }
}

$(document).ready(function() {
  const $flipbook = $('#flipbook');
  const $indicators = $('#indicators');
  const pages = normalizePages(albumPages);
  const firstSpreadPage = 2;
  let maxSpreadStart = 2;

  randomPastelBackdrop();

  if (PAGE_TEXTURE_URL) {
    document.documentElement.style.setProperty('--page-texture-image', `url('${PAGE_TEXTURE_URL}')`);
  }

  pages.forEach((pageData) => {
    const pageHTML = generatePageHTML(pageData);
    $flipbook.append($(`<div class="page">${pageHTML}</div>`));
  });

  function spreadIndexFromPage(currentPage) {
    if (currentPage <= firstSpreadPage) return 0;
    return Math.floor((currentPage - firstSpreadPage) / 2);
  }

  function spreadStartPage(spreadIndex) {
    return Math.min(maxSpreadStart, firstSpreadPage + spreadIndex * 2);
  }

  function updatePageStacks() {
    const left = document.getElementById('pageStackLeft');
    const right = document.getElementById('pageStackRight');
    const book = document.getElementById('flipbook');

    left.style.height = `${book.clientHeight}px`;
    right.style.height = `${book.clientHeight}px`;

    left.style.top = `${book.offsetTop}px`;
    right.style.top = `${book.offsetTop}px`;
    left.style.left = `${book.offsetLeft - 24}px`;
    right.style.left = `${book.offsetLeft + book.clientWidth - 2}px`;
  }

  function updateIndicators(currentPage) {
    const spread = spreadIndexFromPage(currentPage);
    $('.indicator').removeClass('active');
    $(`.indicator[data-spread="${spread}"]`).addClass('active');
  }

  function updateNavButtons(currentPage) {
    $('#prevBtn').prop('disabled', currentPage <= firstSpreadPage);
    $('#nextBtn').prop('disabled', currentPage >= maxSpreadStart);
  }

  $flipbook.turn({
    width: 900,
    height: 600,
    autoCenter: true,
    elevation: 50,
    gradients: true,
    acceleration: true,
    display: 'double',
    duration: 1000,
    pages: pages.length,
    when: {
      turning: function(event, page) {
        if (page < firstSpreadPage) {
          setTimeout(() => $flipbook.turn('page', firstSpreadPage), 0);
          return false;
        }
        if (page > maxSpreadStart + 1) {
          setTimeout(() => $flipbook.turn('page', maxSpreadStart), 0);
          return false;
        }

        updateIndicators(page);
        updateNavButtons(page);
      },
      turned: function(event, page) {
        updateIndicators(page);
        updateNavButtons(page);
        updatePageStacks();
      }
    }
  });

  const totalPages = $flipbook.turn('pages');
  maxSpreadStart = Math.max(firstSpreadPage, totalPages - 2);
  const spreads = Math.floor((maxSpreadStart - firstSpreadPage) / 2) + 1;

  for (let i = 0; i < spreads; i++) {
    const isActive = i === 0 ? ' active' : '';
    const $dot = $(`<button class="indicator${isActive}" data-spread="${i}"></button>`);
    $dot.on('click', function() {
      const targetPage = spreadStartPage(i);
      $flipbook.turn('page', targetPage);
    });
    $indicators.append($dot);
  }

  $('#prevBtn').on('click', function() {
    const current = $flipbook.turn('page');
    const target = Math.max(firstSpreadPage, current - 2);
    $flipbook.turn('page', target);
  });

  $('#nextBtn').on('click', function() {
    const current = $flipbook.turn('page');
    const target = Math.min(maxSpreadStart, current + 2);
    $flipbook.turn('page', target);
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      $('#nextBtn').trigger('click');
    } else if (e.key === 'ArrowLeft') {
      $('#prevBtn').trigger('click');
    }
  });

  $flipbook.turn('page', firstSpreadPage);
  updateIndicators(firstSpreadPage);
  updateNavButtons(firstSpreadPage);
  updatePageStacks();

  $(window).on('resize', function() {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();

    let bookWidth;
    let bookHeight;

    if (windowWidth <= 740) {
      bookWidth = windowWidth * 0.95;
      bookHeight = windowHeight * 0.6;
    } else if (windowWidth <= 960) {
      bookWidth = 700;
      bookHeight = 480;
    } else {
      bookWidth = 900;
      bookHeight = 600;
    }

    $flipbook.turn('size', bookWidth, bookHeight);
    updatePageStacks();
  });
});
