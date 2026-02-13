/*
Page data notes:
- layout: 'single' | 'stacked'
- for single: image, ratio?, tape?, rotation?, frameWidth?
- for stacked: images: [{ image, ratio?, tape?, rotation?, frameWidth? }, { ... }]
- date: top-left corner text
- location: top-right corner text

Ratio examples:
- '3 / 4' (portrait)
- '4 / 3' (landscape)
- '1 / 1' (square)
- '16 / 9' (wide)

Ordering:
- Photos are in the order listed in albumPages.
- Because we use hidden guard pages for spread-only mode, album page index N appears at flipbook page N + 2.
*/

const PAGE_TEXTURE_URL = './texture2.jpg';

const albumPages = [
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    date: 'Jun 13, 2025',
    location: 'Brooklyn',
    ratio: '3 / 4',
    rotation: -2,
    tape: true
  },
  {
    type: 'photo',
    layout: 'stacked',
    images: [
      { image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80', ratio: '16 / 9', tape: false },
      { image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=900&q=80', ratio: '16 / 9', tape: true }
    ],
    date: 'Jun 14, 2025',
    location: 'Manhattan',
    rotation: 1
  },
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80',
    date: 'Jun 14, 2025',
    location: 'Midtown',
    ratio: '4 / 5',
    rotation: 0.5,
    tape: true
  },
  {
    type: 'photo',
    layout: 'stacked',
    images: [
      { image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80' },
      { image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=900&q=80' }
    ],
    date: 'Jun 15, 2025',
    location: 'Chelsea',
    ratio: '3 / 4',
    rotation: -1
  },
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    date: 'Jun 15, 2025',
    location: 'Chelsea',
    rotation: -1
  },
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80',
    date: 'Jun 15, 2025',
    location: 'Central Park',
    ratio: '3 / 4',
    rotation: 1,
    tape: true
  },
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&q=80',
    date: 'Jun 16, 2025',
    location: 'West Village',
    ratio: '4 / 3',
    rotation: -0.5
  },
  {
    type: 'photo',
    layout: 'single',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80',
    date: 'Jun 16, 2025',
    location: 'New York City',
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

  function updatePageStacks(currentPage) {
    const totalPages = $flipbook.turn('pages');
    const left = document.getElementById('pageStackLeft');
    const right = document.getElementById('pageStackRight');
    const book = document.getElementById('flipbook');

    const leftPages = Math.max(0, currentPage - firstSpreadPage);
    const rightPages = Math.max(0, totalPages - currentPage - 1);

    const leftThickness = Math.min(40, 6 + leftPages * 2.3);
    const rightThickness = Math.min(40, 6 + rightPages * 2.3);

    left.style.width = `${leftThickness}px`;
    right.style.width = `${rightThickness}px`;

    left.style.height = `${book.clientHeight}px`;
    right.style.height = `${book.clientHeight}px`;

    left.style.top = `${book.offsetTop}px`;
    right.style.top = `${book.offsetTop}px`;

    left.style.left = `${book.offsetLeft - leftThickness + 2}px`;
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
        updatePageStacks(page);
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
  updatePageStacks(firstSpreadPage);

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
    updatePageStacks($flipbook.turn('page'));
  });
});
