document.addEventListener("DOMContentLoaded", function () {
  const markers = document.querySelectorAll(".marker");
  const infoPanel = document.getElementById("info-panel");
  const infoTitle = document.getElementById("info-title");
  const infoDescription = document.getElementById("info-description");
  const closeBtn = document.getElementById("close-btn");
  const infoImagesContainer = document.querySelector(".info-images");

  // Hamburger Menu (Mobile)
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerOptions = document.querySelector(".hamburger-options");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const scatterMapEl = document.getElementById("scatter-map");
  const scatterPopup = document.getElementById("scatter-popup");
  const scatterLocation = document.getElementById("scatter-location");
  const scatterImg = document.getElementById("scatter-img");
  const scatterCaption = document.getElementById("scatter-caption");
  const scatterCoords = document.getElementById("scatter-coords");
  const scatterPoints = [
    { location: "Hooker Valley Trail", caption: "Mt Sefton's snow against the blue sky on the way of Kea Point hike", img: "../images/D1.JPG", coords: "-43.723, 170.091", lat: -43.723, lng: 170.091 },
    { location: "Hermitage Hotel", caption: "View of Aoraki and Hooker Valley from the Hermitage Alpine Restaurant", img: "../images/D2.JPG", coords: "-43.731, 170.096", lat: -43.731, lng: 170.096 },
    { location: "Tasman Lake", caption: "A giant piece of iceberg floating on the Tasman Lake", img: "../images/D3.JPG", coords: "-43.769, 170.164", lat: -43.769, lng: 170.164 },
    { location: "Aoraki", caption: "Views of Aoraki and Lake Pukaki on the drive there", img: "../images/D4.JPG", coords: "-43.735, 170.096", lat: -43.735, lng: 170.096 },
    { location: "Lake Tekapo", caption: "Sunrise at Tekapo, about 1.5 hours south of Aoraki", img: "../images/D5.JPG", coords: "-44.004, 170.483", lat: -44.004, lng: 170.483 },
    { location: "Lake Pukaki", caption: "The largest of three roughly parallel alpine lakes running north-south along the northern edge of the Mackenzie Basin", img: "../images/D6.JPG", coords: "-44.041, 170.190", lat: -44.041, lng: 170.19 },
    { location: "Lupin Flowers", caption: "Fields of lupin flowers in hooker valley along the hiking trails", img: "../images/D7.JPG", coords: "-43.728, 170.103", lat: -43.728, lng: 170.103 },
    { location: "Tasman Lake", caption: "On the Glacier Explorers jetty sightseeing the Tasman Glacier", img: "../images/D8.JPG", coords: "-43.776, 170.158", lat: -43.776, lng: 170.158 }
  ];

  // For timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineEl = document.querySelector(".timeline");

  const infoData = {
    peak: {
      title: "Aoraki",
      content: `
        <p>
          <b>Aoraki / Mount Cook</b> is the highest mountain in New Zealand. Its height, as of 2014, is listed as 3,724
          metres (12,218 feet). It is situated in the Southern Alps, the mountain range that runs the length of the
          South Island. A popular tourist destination, it is also a favourite challenge for mountain climbers. Aoraki
          consists of three summits: from south to north, the Low Peak (11,788 ft), the Middle Peak (12,195 ft) and the
          High Peak. The summits lie slightly south and east of the main divide of the Southern Alps, with the Tasman
          Glacier to the east and the Hooker Glacier to the southwest. Mount Cook is ranked 10th in the world by
          topographic isolation.
        </p>
        <div class="info-image-full">
          <img src="../images/A1.jpg" alt="Panoramic view of The Peak">
          <span class="info-caption">Aoraki peak from Mt Tasman summit - 21 March 1983 - Wikipedia</span>
        </div>
        <p>
          In the traditions of the Ngāi Tahu iwi an early name for the South Island is Te Waka o Aoraki ('Aoraki's
          Canoe'). In the past many believed it meant "Cloud Piercer", a romantic rendering of the name's
          components: ao (world, daytime, cloud, etc.) and raki or rangi (day, sky, weather, etc.). Historically,
          the Māori name has been spelt Aorangi, using the northern dialect.
        </p>
        <p>
          Aoraki became known to Māori after their arrival in New Zealand some time around the 14th century CE. The
          first Europeans who may have seen Aoraki / Mount Cook were members of Abel Tasman's crew, who saw a "large
          land uplifted high" (probably some part of the Southern Alps) while off the west coast of the South Island,
          just north of present-day Greymouth on 13 December 1642 during Tasman's first Pacific voyage. The English name
          of Mount Cook was given to the mountain in 1851 by Captain John Lort Stokes to honour Captain James Cook who
          surveyed and circumnavigated the islands of New Zealand in 1770. Captain Cook did not sight the mountain
          during his exploration.
        </p>
        <div class="info-image-row">
          <img src="../images/A2.jpg" alt="The Peak detail 1">
          <img src="../images/A3.jpg" alt="The Peak detail 2">
        </div>
        <p>
          In January 1885 the Hooker and Mueller Valleys were gazetted as the Hooker Glacier Recreation Reserve. In 1887
          the Government permanently reserved an area of 97,800 acres of the Tasman Valley above the Mueller Valley
          confluence, which was known as the Tasman Recreation Reserve or Tasman Park. The Hooker Glacier reserve was
          expanded in 1890, becoming the 38,000-acre Aorangi Domain.
        </p>
        <p>
          In 1953, Tasman Park and Aorangi Domain became the Mount Cook National Park. The park as established covered
          151,780 acres of the Southern Alps, including the Mueller, Hooker, and Tasman glaciers and the eastern slopes
          of Mount Cook and Mount Tasman. The park is managed by the Department Of Conservation and Ngāi Tahu, the iwi
          who hold mana whenua status of the land.
        </p>
      `,
      images: []
    },
    "mid-altitude": {
      title: "Mt Sefton & The Tasman Glacier",
      content: `
        <p>
          Mount Sefton is a mountain in the Aroarokaehe Range of the Southern Alps of New Zealand, just 12 kilometres
          (7.5 mi) south of Aoraki. To the south lies Mount Brunner, and to the north The Footstool, both more than 400
          metres (1,300 ft) shorter.
        </p>
        <p>
          The mountain is prominently visible from Mount Cook Village in the Hooker Valley, with Tuckett Glacier flowing
          down the south-eastern side of the mountain and Mueller Glacier in the valley below it. With a height of 3,151
          metres (10,338 ft), Mount Sefton is the 13th-highest peak in the Southern Alps, and the 4th-highest mountain
          in New Zealand when excluding peaks of little prominence that are closer than a kilometre to a higher peak.
        </p>
        <div class="info-image-full">
          <img src="../images/B1.jpg" alt="Panoramic view of The Peak">
          <span class="info-caption">Mueller Hut with Mt Sefton (middle) and Aoraki (right) during sunrise - Wikipedia</span>
        </div>
        <p>
          Glaciers cover 40% of the Aoraki National Park area, notably the Tasman Glacier in the Tasman Valley east of
          Aoraki / Mount Cook which is the largest glacier in New Zealand. A majority of glaciers in New Zealand lie
          within Aoraki / Mount Cook National Park, such as the Tasman Glacier, Hooker Glacier, Murchison
          Glacier and Mueller Glacier, while further north in the park lie the Godley Glacier, Classen Glacier, Grey
          Glacier and Maud Glacier. All of these glaciers terminate at proglacial lakes formed in recent decades due to
          a sustained period of shrinking.
        </p>
        <p>
          At 14.6 miles in length, Tasman Glacier is still New Zealand's longest glacier, despite shrinking considerably
          from the 1990s onwards. It is as much as 2.5 mi wide and 2,000 ft thick, and lies entirely within the borders
          of Aoraki / Mount Cook National Park. The glacier covers an area of 39 sq miles and starts at a height of
          9,800 ft above sea level. Snowfall during the winter and spring seasons may accumulate up to 160 ft. After the
          summer melt, 23 ft may remain in the high altitude glacier head.
        </p>
        <div class="info-image-row">
          <img src="../images/B2.jpg" alt="The Peak detail 1">
          <img src="../images/B3.JPG" alt="The Peak detail 2">
        </div>
        <p>
          Although its upper reaches are snow-covered, rocks carried by the glacier are exposed by ablation along its
          course, and the lower glacier is entirely rock-covered. The rock cover helps insulate the ice from the
          sunlight and slows down the melting process.
        </p>
        <p>
          The glacier remained at a constant 17 mi in length for all of its recorded history in the 20th century before
          starting its current period of rapid melting in the 1990s. Between 2000 and 2008 alone, the glacier terminus
          receded 3.7 km. Since the 1990s the terminus has retreated about 590 ft a year on average. The glacier is now
          in a period of faster retreat where the rate of retreat is calculated to be between 1,565 to 2,697 ft each
          year. It is estimated that the Tasman Glacier will eventually disappear and the terminal Tasman Lake will
          reach a maximum size in 10 to 19 years time.
        </p>
        <p>
          A large calving event was possibly triggered, or at least contributed to, by the 2011 Christchurch
          earthquake on 22 February 2011. On this day 33 to 44 million short tons of ice dropped from the terminal face
          of the Tasman Glacier and fell into the Tasman Lake. Boats were hit with tsunami waves of up to 11 ft as the
          ice fell into the Tasman Lake under the glacier.
        </p>
        <div class="info-image-full">
          <img src="../images/B4.JPG" alt="Panoramic view of The Peak">
          <span class="info-caption">Face of the Tasman Glacier in December 2024</span>
        </div>
      `,
      images: []
    },
    "lower-altitude": {
      title: "Hooker Valley",
      content: `
        <p>
          The Aoraki / Mount Cook National Park is a popular tourist destination. There are numerous walking tracks, the
          most popular being the Hooker Valley Track, a relatively short track that takes around three hours to
          complete. At only 5 km (3.1 mi) length and gaining only about 100 m (330 ft) in height, the well formed track
          can be walked by tourists with a wide range of level of fitness.
        </p>
        <p>
          The track is maintained by the Department of Conservation and has views of Aoraki and access to
          the proglacial Hooker Lake, typically with icebergs floating in it. Hooker Valley Track has been named one of
          the "best day walks in New Zealand".
        </p>
        <div class="info-image-full">
          <img src="../images/C2.jpg" alt="Panoramic view of The Peak">
          <span class="info-caption">Bridge over Stocking Stream during a winter hike - Pseudopanax@Wikimedia</span>
        </div>
        <p>
          The lookout point at the end of the Hooker Valley Track is the closest any walking track comes to Aoraki /
          Mount Cook, and reveals completely unobstructed views of the highest mountain in New Zealand, with Hooker
          Glacier in the valley below. There is also access to the shore of the glacial lake. The vegetation around the
          track is open alpine tussock, and as such the track offers clear views of the mountains surrounding the wide
          valley floor of the Hooker Valley.
        </p>
        <div class="info-image-full">
          <img src="../images/C1.jpg" alt="Panoramic view of The Peak">
          <span class="info-caption">Tourists around the entrance of hikes near the Hermitage Hotel</span>
        </div>
        <p>
          The park is also popular with astrophotographers and star-gazers because of the low levels of light pollution.
          The national park has been used as a filming location for numerous films.
        </p>
        <p>
          Additionally, More than 400 species of plants are found in Aoraki / Mount Cook National Park, including more
          than 100 introduced plant species such as the colourful Russell lupin, wild cherry, snowberries, and wilding
          pines. Most parts of the national park are either at higher altitude or in the proglacial valleys such as the
          Hooker Valley and Tasman Valley, where the soil of the valley floors and moraine walls do not support forest
          growth. As a result, the only pockets of forest and native bush, such as silver beech and tōtara trees, can be
          found in the park are along the southern edge of the Hooker Valley and the lower slopes of Sealy Range.
        </p>
        <div class="info-image-row">
          <img src="../images/C3.JPG" alt="The Peak detail 1">
          <img src="../images/C5.JPG" alt="The Peak detail 2">
        </div>
        <p>
          The plant life in the majority of the park consists mostly of alpine plants. Between 4,300 and 6,200 ft and in
          the valleys, the vegetation is predominantly snow tussock grassland, as well as golden speargrass,
          large mountain daisies, and Mount Cook lily, the largest buttercup in the world. All of these plants flower in
          the warmer months from November to February – early in the season in the valley floors, and later at higher
          altitudes. At the highest rocks of Aoraki / Mount Cook, around 14 species of lichen have been found.
        </p>
        <p>
          The native vegetation continues to be under threat by introduced plant species ranging from non-native trees
          through to lupins, broom and non-native grasses. These are mostly contained in the valley floors of the Tasman
          and Hooker Valley, since they are the most accessible parts of the park.
        </p>
        <p>
          There are about 35 species of birds in the park including the kea, the only alpine parrot, Australasian
          Harrier, silvereye, a small omnivorous passerine bird, New Zealand falcon, and the pipit. The tiny New Zealand
          rock wren, a threatened species, is the only permanent alpine bird in New Zealand.
        </p>
        <div class="info-image-row">
          <img src="../images/C4.JPG" alt="The Peak detail 1">
          <img src="../images/C6.JPG" alt="The Peak detail 2">
        </div>
      `,
      images: []
    }
  };

  // ---------- Info Panel Markers (Desktop) ----------
  markers.forEach((marker) => {
    marker.addEventListener("click", function () {
      const dataKey = this.dataset.info;
      const data = infoData[dataKey];
      infoTitle.textContent = data.title;
      if (data.content) {
        infoDescription.innerHTML = data.content;
      } else {
        infoDescription.innerHTML = `<p>${data.text}</p><p>${data.extraText}</p>`;
      }
      infoImagesContainer.innerHTML = "";
      infoPanel.classList.add("active");
      if (window.innerWidth <= 768) {
        hamburgerMenu.style.display = "none";
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    infoPanel.classList.remove("active");
    if (window.innerWidth <= 768) {
      hamburgerMenu.style.display = "flex";
    }
  });

  // ---------- Hamburger Menu (Mobile) ----------
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerOptions.style.display =
        hamburgerOptions.style.display === "flex" ? "none" : "flex";
    });
    const hamburgerLinks = hamburgerOptions.querySelectorAll("a");
    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const dataKey = this.dataset.info;
        const data = infoData[dataKey];
        infoTitle.textContent = data.title;
        if (data.content) {
          infoDescription.innerHTML = data.content;
        } else {
          infoDescription.innerHTML = `<p>${data.text}</p><p>${data.extraText}</p>`;
        }
        infoImagesContainer.innerHTML = "";
        infoPanel.classList.add("active");
        hamburgerOptions.style.display = "none";
        hamburgerMenu.style.display = "none";
      });
    });
  }

  // ---------- Hamburger Menu Scroll Behavior (Mobile Only) ----------
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) {
      const bgHeight = document.getElementById("bg1").offsetHeight;
      if (window.scrollY < bgHeight) {
        hamburgerMenu.style.display = "flex";
      } else {
        hamburgerMenu.style.display = "none";
      }
    }
  });

  // ---------- Map Markers Popup (Click to Open) ----------
  let activeScatterMarker = null;
  let scatterMap = null;

  function closeScatterPopup() {
    if (activeScatterMarker) {
      const el = activeScatterMarker.getElement && activeScatterMarker.getElement();
      if (el) el.classList.remove("is-active");
    }
    activeScatterMarker = null;
    scatterPopup.classList.remove("active");
  }

  function updateScatterPopupPosition(anchorX, anchorY) {
    const offset = 16;
    const popupWidth = scatterPopup.offsetWidth;
    const popupHeight = scatterPopup.offsetHeight;

    let left = anchorX - popupWidth / 2;
    let top = anchorY + offset;

    if (left + popupWidth > window.innerWidth - 8) {
      left = window.innerWidth - popupWidth - 8;
    }
    if (left < 8) left = 8;
    if (top + popupHeight > window.innerHeight + window.scrollY - 8) {
      top = anchorY - popupHeight - offset;
    }
    if (top < window.scrollY + 8) top = window.scrollY + 8;

    scatterPopup.style.left = left + "px";
    scatterPopup.style.top = top + "px";
    scatterPopup.style.transform = "translate(0,0)";
  }

  function openScatterPopup(point, marker, latlng) {
    if (activeScatterMarker === marker && scatterPopup.classList.contains("active")) {
      closeScatterPopup();
      return;
    }

    if (activeScatterMarker) {
      const prevEl = activeScatterMarker.getElement && activeScatterMarker.getElement();
      if (prevEl) prevEl.classList.remove("is-active");
    }
    activeScatterMarker = marker;
    const markerEl = marker.getElement && marker.getElement();
    if (markerEl) markerEl.classList.add("is-active");

    scatterLocation.textContent = point.location || "Location";
    scatterImg.src = point.img || "";
    scatterImg.alt = point.location || "Map photo";
    scatterCaption.textContent = point.caption || "";

    if (point.coords) {
      scatterCoords.textContent = point.coords;
      scatterCoords.style.display = "block";
    } else {
      scatterCoords.style.display = "none";
    }

    scatterPopup.classList.add("active");
    const mapRect = scatterMapEl.getBoundingClientRect();
    const containerPoint = scatterMap.latLngToContainerPoint(latlng);
    const anchorX = mapRect.left + window.scrollX + containerPoint.x;
    const anchorY = mapRect.top + window.scrollY + containerPoint.y;
    updateScatterPopupPosition(anchorX, anchorY);
  }

  function initScatterMap() {
    if (!scatterMapEl || !window.L) return;

    scatterMap = window.L.map(scatterMapEl, {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView([-43.79, 170.16], 9);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(scatterMap);

    const icon = window.L.divIcon({
      className: "scatter-map-icon",
      html: "<span class=\"scatter-map-dot\"></span>",
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    const bounds = [];
    scatterPoints.forEach((point) => {
      const marker = window.L.marker([point.lat, point.lng], { icon }).addTo(scatterMap);
      bounds.push([point.lat, point.lng]);
      marker.on("click", (e) => openScatterPopup(point, marker, e.latlng));
    });

    if (bounds.length) {
      scatterMap.fitBounds(bounds, { padding: [40, 40] });
    }

    scatterMap.on("click", closeScatterPopup);
  }

  initScatterMap();

  document.addEventListener("click", function (e) {
    if (e.target.closest(".scatter-map-icon")) return;
    if (scatterPopup.classList.contains("active") && !scatterPopup.contains(e.target)) {
      closeScatterPopup();
    }
  });

  window.addEventListener("resize", closeScatterPopup);
  window.addEventListener("resize", function () {
    if (scatterMap) scatterMap.invalidateSize();
  });
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeScatterPopup();
  });
 


  // ---------- Timeline Fade-in on Scroll ----------
  function checkTimelineVisibility() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    timelineItems.forEach((item) => {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        item.classList.add("visible");
      }
    });
  }
  timelineItems.forEach((item) => item.classList.add("visible"));
  window.addEventListener("scroll", checkTimelineVisibility);
  checkTimelineVisibility();

  if (timelineEl) {
    const syncTimelineLineWidth = () => {
      timelineEl.style.setProperty("--timeline-line-width", `${timelineEl.scrollWidth}px`);
    };
    const syncTimelineConnectors = () => {
      const timelineRect = timelineEl.getBoundingClientRect();
      const lineY = timelineRect.top + timelineRect.height / 2;
      timelineItems.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        let connectorLen = 0;
        if (idx % 2 === 0) {
          // Odd card (top lane)
          connectorLen = lineY - itemRect.bottom;
        } else {
          // Even card (bottom lane)
          connectorLen = itemRect.top - lineY;
        }
        item.style.setProperty("--connector-len", `${Math.max(24, Math.round(connectorLen))}px`);
      });
    };

    syncTimelineLineWidth();
    syncTimelineConnectors();
    window.addEventListener("resize", syncTimelineLineWidth);
    window.addEventListener("resize", syncTimelineConnectors);
    window.addEventListener("load", syncTimelineLineWidth);
    window.addEventListener("load", syncTimelineConnectors);
    setTimeout(syncTimelineConnectors, 80);
    setTimeout(syncTimelineConnectors, 260);

    timelineEl.addEventListener(
      "wheel",
      function (e) {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        e.preventDefault();
        timelineEl.scrollLeft += e.deltaY;
      },
      { passive: false }
    );
  }
});
