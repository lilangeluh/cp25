const CHAIRS = [
  {
    id: "chair-01",
    serial: "C11153",
    name: "Airport Chair",
    caption: "Ergonomically optimized for uncertainty",
    color: "#d0def4",
    model: "models/airport.glb",
    ambientSound: "audio/airport.mp3",
    materials: ["Cantilevered alloy beam", "Powder coat finish", "USB shelves"],
    manufacturing: "Metropolitan Transit Fabrications",
    waitTime: "Average dwell time: 18 minutes",
    specs: [
      { label: "Weight Capacity", value: "330 pounds per seat" },
      { label: "Dimensions", value: "69″ W × 26″ D × 33.5″ – 34″ H overall" },
      { label: "Shipping Weight", value: "83 Pounds" },
      { label: "Zone", value: "International Terminal E" },
      { label: "Dwell", value: "18-minute delay window" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Description",
        body:
          "Our 3-Seat Airport Lounge Beam Seating is a modern design classic that has stood the test of time in airports and busy waiting areas worldwide. This flexible design fits with any décor, from your upscale office environment to almost any service center or even in hospitals, social security offices, automotive dealerships and a wide variety of public institutions. While it's built to the tough standards of busy transportation terminals, this sturdy airport beam seating looks professional and meets the demands of heavy traffic in style.",
        feeling:
          "On the day when Eutropia’s inhabitants feel the grip of weariness and no one can bear any longer his job, his relatives, his house and his life, debts, the people he must greet or who greet him, then the whole citizenry decides to move to the next city, which is there waiting for them, empty and good as new; there each will take up a new job, a different wife, will see another landscape on opening his window, and will spend his time with different pastimes, friends, gossip. So their life is renewed from move to move, among cities whose exposure or declivity or streams or winds make each site somehow different from the others.",
      },
      {
        title: "Features",
        body:
          "Seats and backs of our classic airport chairs are constructed of firm, molded polyurethane with metal interior plates for superior strength and firm support. Surfaces are textured for an upholstered appearance, yet their molded polyurethane quality will not tear like a fabric or vinyl. When it comes to beam seating, leather options are expensive and almost impossible to repair, making this molded polyurethane 3-Seater the best choice. Strong frames are stainless steel to provide excellent scratch and scrape resistance. The main support of each unit is a 1.8-millimeter-thick powder coated steel beam that ensures the utmost in strength. Not intended for outdoor use.",
        feeling:
          "If on arriving at Trude I had not read the city’s name written in big letters, I would have thought I was landing at the same airport from which I had taken off. The suburbs they drove me through were no different from the others, with the same little greenish and yellowish houses. Following the same signs we swung around the same flower beds in the same squares. The downtown streets displayed goods, packages, signs that had not changed at all.",
      },
    ],
    footer: {
      primary: "Product data sourced from InStockChairs — 3-Seat Airport Seating",
      secondary: "Secondary notes: excerpted from Invisible Cities, Italo Calvino (1972)",
    },
  },
  {
    id: "chair-02",
    serial: "H-6570C",
    name: "Park Bench",
    caption: "Collects conversations and falling leaves",
    color: "#f4d0d5",
    model: "models/parkbench.glb",

    ambientSound: "audio/park.mp3",
    materials: ["Cedar slats", "Cast-iron arms", "Rain-softened bolts"],
    manufacturing: "Civic Seating Labs",
    waitTime: "Average dwell time: 7 minutes",
    specs: [
      { label: "Material", value: "Hardware: Stainless Steel, Seats and Frame: Resinwood" },
      { label: "Capacity", value: "600 lbs" },
      { label: "Size", value: "72″ x 29″ x 33″" },
      { label: "Weight", value: "139 lbs" },
      { label: "Color", value: "Cedar" },
      { label: "Usage", value: "Cannot be stained, painted or engraved." },
      { label: "Dwell", value: "7-minute leaf watch" },
    ],
    steps: [
      {
        title: "Verify all parts are present before beginning.",
        feeling: "I worried a lot. Will the garden grow, will the rivers flow in the right direction, will the earth turn as it was taught, and if not how shallI correct it?",
      },
      {
        title: "With one person holding the left leg and another person holding the right leg, insert a rounded-edge board between each leg, in line with the front of the legs. From underneath, attach the front board to the supports by fastening screws through the pre-drilled holes on the underside of the leg. Do not overtighten.",
        feeling: "Was I right, was I wrong, will I be forgiven,\ncan I do better?",
      },
      {
        title: "Align the center leg with the center of the installed boards and attach with screws fastened through the pre-drilled holes.",
        feeling: "Will I ever be able to sing, even the sparrows\ncan do it and I am, well,\nhopeless.",
      },
      {
        title: "Install the next seat board adjacent to the front rounded baord using the 3/8″ spacers to ensure an even 3/8″ gap between boards. Attach with screws fastened through the pre-drilled holes.",
        feeling: "Is my eyesight fading or am I just imagining it,\nam I going to get rheumatism,\nlockjaw, dementia?",
      },
      {
        title: "Repeat step 3 for all remaining boards, using the spacers to align and fasten them.",
        feeling: "Finally I saw that worrying had come to nothing.\nAnd I gave it up. And took my old body\nand went out into the morning,\nand sang.",
      },
    ],
    footer: {
      primary: "Product data sourced from uline — laguna bench, 6’ cedar (h-6570c)",
      secondary: "Secondary notes: “I Worried” by Mary Oliver, Swan (2010)",
    },
  },
  {
    id: "chair-03",
    serial: "BC765",
    name: "Restaurant Booth",
    caption: "Absorbs warmth, amplifies waiting",
    color: "#e8f1d8",
    model: "models/restaurant.glb",
    ambientSound: "audio/restaurant.mp3",
    materials: ["Vinyl upholstery", "Maple trim", "Steel cleats"],
    manufacturing: "Borderline Fixtures",
    waitTime: "Average dwell time: 25 minutes",
    specs: [
      { label: "Length", value: "48″" },
      { label: "Height", value: "42″" },
      { label: "Back Upholstery", value: "Vinyl: BC675 Cranberry" },
      { label: "Style", value: "12 Channel" },
      { label: "Warranty", value: "1-Year" },
      { label: "Seat Material", value: "Padded" },
      { label: "Dwell", value: "25-minute appetizer pause" },
    ],
    notesType: "highlights",
    notes: [
      {
        title: "Product Highlights",
        items: [
          "Upholstered and constructed in the USA",
          "High density foam for commercial use",
          "Choose from a large range of upholstery options to match your restaurant style",
          "Available in standard shapes: single, deuce-single, double, deuce-double, wall bench, corner L shape, 1/2 circle, 3/4 circle",
          "Mix upholstery materials on seat and back",
          "Outside back is unfinished as standard. This applies to: wall bench, L-shape, 1/2 circle and 3/4 circle. Single booths come with a fully finished rear back",
        ],
        feeling: `
          Food was how my mother expressed her love. 
          I could always feel her affection radiating from the lunches she packed and the meals she prepared for me just the way I liked them. 
          I can hardly speak Korean, but in H Mart it feels like I’m fluent. 
          I fondle the products, pronounce their names aloud—chamoe melon, danmuji. 
          I fill my shopping cart with every snack that has glossy packaging decorated with a familiar cartoon. 
          I think about the time Mom showed me how to fold the little plastic card inside bags of Jolly Pong, how to use it as a spoon to shovel caramel puffed rice into my mouth, and how it inevitably fell down my shirt and spread all over the car. 
          I remember the snacks Mom told me she ate when she was a kid and how I tried to imagine her at my age. 
          I wanted to like all the things she did, to embody her completely.`,
      },
    ],
    footer: {
      primary: "Product Data Sourced from Restaurant Furniture — 12-Channel Back Restaurant Booth with Padded Base",
      secondary: "Secondary notes: excerpted from Crying in H Mart by Michelle Zauner (2021)",
    },
  },
  {
    id: "chair-04",
    serial: "C-50B",
    name: "Hospital Chair",
    caption: "Tested for indefinite patience",
    color: "#f3e4d4",
    model: "models/hospital.glb",
    ambientSound: "audio/ambient-foyer.mp3",
    materials: ["Sanitized vinyl", "IV-pole bracket", "Powder-coated frame"],
    manufacturing: "Vestibule Systems",
    waitTime: "Average dwell time: 19 minutes",
    specs: [
      { label: "Finish", value: "Black powder coated frame" },
      { label: "Glides", value: "Nylon" },
      { label: "Seat", value: "Firm foam padded" },
      { label: "Seat Thickness", value: "2″" },
      { label: "Leg Diameter", value: "1.5″" },
      { label: "Weight", value: "300 lbs" },
      { label: "Dimensions", value: "17.5″ x 18″ x 18″" },
      { label: "Dwell", value: "19-minute vitals wait" },
    ],
    steps: [
      {
        title: "Remove all components from packaging and verify that all listed parts are included. Place them on a flat, clean surface. Do not tighten any fasteners until all are loosely installed.",
        feeling: "Illness is the night-side of life, a second citizenship everyone eventually claims.\nWe prefer to use only the good passport, but sooner or later we must identify ourselves as citizens of that other place.",
      },
      {
        title: "Position the seat cushion upside down. Align the holes on the underside of the seat with the mounting points on the two side frames. Insert one bolt with washer through each mounting hole. Loosely thread the lock nuts from below.",
        feeling: "No one imagines that illness exists free of metaphors.\nIt is almost impossible to take up residence in the kingdom of the ill unshaped by the lurid symbols that landscape it.",
      },
      {
        title: "Position the backrest between the rear posts of the frame. Align the holes and insert the bolts through the frame into the backrest mounting inserts. Hand-tighten until all bolts are in place.",
        feeling: "My subject is not the disease itself, but the fantasies and taboos surrounding it—not the real geography of illness, but the imaginative maps we draw to make sense of it.",
      },
      {
        title: "Align each armrest with its mounting holes on the top of the side frames. Insert the provided bolts and tighten evenly. Verify that the armrests are level and secure.",
        feeling: "Illness, like death, is now regarded as an indecent event, something to deny.\nThe shame surrounding it leads to silence, secrecy, and the polite fictions of recovery.",
      },
       {
        title: "Once all components are properly aligned, tighten all bolts securely using the screwdriver and wrench. Do not overtighten. Ensure that the seat and backrest remain level.",
        feeling: "We think of cancer as obscene, in the original sense: ill-omened, abominable, something offensive to the senses, something to conceal.",
      },
       {
        title: "Press or screw one glide into the bottom of each leg. Check that all four glides are fully seated to prevent unevenness or floor damage.",
        feeling: "To fall ill is to cross a border into the invisible.\nThe body becomes a place of suspicion, a house that can no longer be trusted.",
      },
       {
        title: "Set the chair upright on a level surface. Apply gentle pressure to verify stability and confirm that all hardware is secure.",
        feeling: "The patient’s own body turns foreign, opaque.\nWhat can’t be perceived must be translated by specialists, as if one’s tissues were a secret text.",
      },
    ],
    footer: {
      primary: "Product data sourced from Medical Device Depot — Clinton C-50B Flat Top Blood Drawing Chair",
      secondary: "Secondary notes: excerpts from Illness as Metaphor by Susan Sontag (1978) — on the language of the body and waiting for diagnosis",
    },
  },
  
  {
    id: "chair-05",
    serial: "H-3019",
    name: "Bus Stop Bench",
    caption: "Suitable for recurring lateness",
    color: "#dcd6f4",
    model: "models/busstop.glb",

    ambientSound: "audio/bus.mp3",
    materials: ["Perforated steel seat", "Route plaques", "Transit-grade bolts"],
    manufacturing: "Orderly Works, Ltd.",
    waitTime: "Average dwell time: 11 minutes",
    specs: [
      { label: "Dimensions", value: "Seating (Steel Flat Bars): 1/4 x 1 1/2″" },
      { label: "Frame Tubing Diameter", value: "1 5/8″" },
      { label: "Capacity", value: "900 lbs" },
      { label: "Weight", value: "192 lbs" },
      { label: "Headway", value: "11-minute intervals" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Product Description",
        body:
          "Constructed from commercial-grade steel with a thermoplastic coating, the Courtyard Bench is designed for durability in shared outdoor spaces. Measuring six feet in length, it features a contoured perforated seat, rounded edges, and a stable, welded frame with a black powder-coated finish. Weather-resistant and low-maintenance, it’s suited for courtyards, entryways, and park walkways — places built for pause. Its surface resists fading and rust, allowing it to endure seasons of sunlight, rain, and use without visible fatigue.",
        feeling:
          "The natural tendency of attention when left to itself is to wander to ever new things; and so soon as the interest of its object is over, so soon as nothing new is to be noticed there, it passes, in spite of our will, to something else. If we wish to keep it upon one and the same object, we must seek constantly to find out something new about the latter, especially if other powerful impressions are attracting us away.",
      },
      {
        title: "Commuter features",
        body:
          "The bench holds the quiet rhythm of waiting. It is the midpoint of errands, a resting line between departure and return. Every scuff and scratch carries the trace of shoes that stopped briefly before moving on. The steel gathers warmth from the afternoon, releasing it slowly as the light fades — a small, constant exchange between the body and what supports it. To sit here is to practice patience in public, to feel time stretch just enough to notice it.",
        feeling: "Though the spontaneous drift of thought is all the other way, the attention must be kept strained on that one object until at last it grows, so as to maintain itself before the kind with ease. This strain of attention is the fundamental act of will.",
      },
    ],
    footer: {
      primary: "Product data sourced from Uline — Courtyard Bench without Back (H-3019)",
      secondary: "Secondary notes: excerpted from How to Do Nothing by Jenny Odell (2019) — on attention, stillness, and the politics of pause",
    },
  },
  {
    id: "chair-06",
    serial: "88-626EN-08FA05-SR#",
    name: "Movie Theater Seat",
    caption: "Reliable under dramatic tension",
    model: "models/theater.glb",

    color: "#f5ec9a",
    ambientSound: "audio/ambient-atrium.mp3",
    materials: ["Velvet upholstery", "Powdered brass arms", "Program holder"],
    manufacturing: "Atrium Assembly Co.",
    waitTime: "Average dwell time: 15 minutes",
    specs: [
      { label: "Upholstery Material", value: "Fabric" },
      { label: "Colors", value: "Red" },
      { label: "Seat Back Style", value: "Fixed Seat Back" },
      { label: "Seat Cushion", value: "Gravity Lift Seat Bottom Mechanism" },
      { label: "Seatback Height", value: "39.6″" },
      { label: "Seat Surface", value: "20″" },
      { label: "Armrest Height", value: "24.5″" },
      { label: "Dwell", value: "15-minute intermission" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Seat profile",
        body:
          "Designed for private screenings and shared silences, the Seatcraft Mirage offers a balance of comfort and control. Upholstered in top-grain leather with power recline, adjustable headrests, and fold-out tray tables, each seat is its own enclosure. LED base lighting and ambient cup holders trace faint outlines in the dark, while the soft motor hum of recline becomes part of the pre-show ritual. Built with a hardwood frame and steel support, the Mirage translates the cinema’s architecture of anticipation into domestic space — a theater reduced to one’s own measured breathing.",
        feeling: "We come to this place for magic.\nWe come to AMC Theatres to laugh, to cry, to care.\nBecause we need that, all of us.\nThat indescribable feeling we get when the lights begin to dim,\nand we go somewhere we’ve never been before.\nNot just entertained, but somehow reborn.\nTogether.\nDazzling images on a huge silver screen.\nSound that I can feel.\nSomehow, heartbreak feels good in a place like this.\nOur heroes feel like the best parts of us,\nand stories feel perfect and powerful.\nBecause here, they are.",
      },
    ],
    footer: {
      primary: "Product data sourced from 4Seating — Seatcraft Mirage Home Theater Seats",
      secondary: "Secondary notes: AMC Theatres pre-show script featuring Nicole Kidman (2021)",
    },
  },
  
  
  
  {
    id: "chair-07",
    serial: "ZZSET14",
    name: "Meditation Cushion",
    caption: "Designed to outlast thought",
    color: "#cfe9da",
    ambientSound: "audio/ambient-gallery.mp3",
    materials: ["Buckwheat hull fill", "Canvas wrap", "Cotton straps"],
    manufacturing: "Gallery Support Unit",
    waitTime: "Average dwell time: 12 minutes",
    specs: [
      { label: "Year", value: "2021 — seasonal restock" },
      { label: "Type", value: "Zafu + Zabuton floor set" },
      { label: "Dimensions", value: "Round cushion Ø15\" × 5\"; mat 30\" × 40\"" },
      { label: "Fill", value: "Recycled buckwheat hulls, cotton batting" },
      { label: "Colorway", value: "Slate Calm / Natural Linen" },
      { label: "Weight", value: "Carries 4 lbs of quiet" },
      { label: "Use", value: "For waiting without movement" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Cushion form",
        body:
          "The Classic Zafu + Zabuton Set provides a stable and comfortable foundation for seated meditation. The round zafu cushion supports healthy posture by slightly elevating the hips, while the rectangular zabuton mat cushions the knees and ankles. Each piece is handcrafted in Massachusetts using 100% cotton twill and filled with recycled buckwheat hulls and soft cotton batting for natural support. The removable cover is machine washable, making it suitable for both daily practice and long-term use. Designed to align the spine and relieve pressure, this set transforms any corner into a quiet space for grounding and reflection.",
        feeling: "WE'RE PASSING THROUGH TIME AND SPACE. OUR EARS ARE IN EXCELLENT CONDITION.\nA SOUND IS HIGH OR LOW, SOFT OR LOUD, OF A CERTAIN TIMBRE, LASTS A CERTAIN LENGTH OF TIME,\nAND HAS AN ENVELOPE.\nIs it high?\nIs it low?\nIs it in the middle?\nIs it soft?\nIs it loud?\nAre there two?\nAre there more than two?\nIs it a piano?\nWhy isn’t it?\nWas it an airplane?\nIs it a noise?\nIs it music?\nIs it softer than before?\nIs it supersonic?\nWhen will it stop?\nWhat’s coming?\nIs it time?\nIs it very short?\nVery long?\nJust medium?\nIf I had something to see, would it be theatre?",
      },
    ],
    footer: {
      primary: "Product data sourced from DharmaCrafts — Zafu + Zabuton Classic Meditation Set",
      secondary: "Secondary notes: excerpted from Silence: Lectures and Writings by John Cage (1961)",
    },
  },
  {
    id: "chair-08",
    serial: "RP6973",
    name: "Salon Chair",
    caption: "Supports slow metamorphosis under fluorescent light",
    color: "#dde5f4",
    ambientSound: "audio/ambient-porch.mp3",
    materials: ["Hydraulic base", "Chrome arms", "Soft leather wrap"],
    manufacturing: "Porchline Works",
    waitTime: "Average dwell time: 20 minutes",
    specs: [
      { label: "Year", value: "2023 — current production model" },
      { label: "Type", value: "Professional salon styling chair" },
      { label: "Dimensions", value: "24\" W × 35\" D × 33–39\" H (adjustable)" },
      { label: "Seat Height", value: "21\"–27\" (hydraulic range)" },
      { label: "Frame", value: "Polished cast aluminum base with T-shaped footrest" },
      { label: "Upholstery", value: "Premium vinyl — stain resistant and easy to clean" },
      { label: "Hydraulics", value: "Precision piston pump with 360° swivel" },
      { label: "Capacity", value: "Supports up to 350 lbs" },
      { label: "Weight", value: "Holds 58 lbs of stillness" },
      { label: "Use", value: "For the waiting that happens mid-transformation" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Product Description",
        body:
          "The Takara Belmont Odin Styling Chair merges minimalist design with ergonomic precision. Built on a durable cast aluminum frame, it features gently curved arms, a supportive high-density foam seat, and a hydraulic base for smooth height adjustment. The chair’s upholstery is available in multiple vinyl finishes, all resistant to color fade, stains, and wear from repeated cleaning. The T-shaped footrest and sleek silhouette create a modern balance between comfort and restraint — a chair designed to endure years of motion and pause. With its low profile and quiet mechanism, the Odin transforms the routine of waiting into a subtle performance of gesture and care.",
        feeling:
          "What I know is that the nail salon is more than a place of work and workshop for beauty; it is also a place where our children are raised—a number of whom, like cousin Victor, will get asthma from years of breathing the noxious fumes into their still-developing lungs. The salon is also a kitchen where, in the back rooms, our women squat on the floor over huge woks that pop and sizzle over electric burners, cauldrons of phở simmer and steam up the cramped spaces with aromas of cloves, cinnamon, ginger, mint, and cardamom mixing with formaldehyde, toluene, acetone, Pine-Sol, and bleach.",
      },
      {
        title: "Client comfort",
        body:
          "Here, waiting feels almost ornamental. The chair holds the weight of stories told in passing — small transformations, mirrored and repeated. Its frame remembers each turn, each tilt of the head toward a reflection. The air smells faintly of product and patience. Beneath the hum of dryers and quiet conversation, this is where people learn to be seen again.",
        feeling:
          "It’s a makeshift classroom where we arrive, fresh off the boat, the plane, the depths, hoping the salon would be a temporary stop—until we get on our feet, or rather, until our jaws soften around English syllables—bend over workbooks at manicure desks, finishing homework for nighttime ESL classes that cost a quarter of our wages. I won’t stay here long, we might say. I’ll get a real job soon. But more often than not, sometimes within months, even weeks, we will walk back into the shop, heads lowered, our manicure drills inside paper bags tucked under our arms, and ask for our jobs back.",
      },
    ],
    footer: {
      primary: "Product data sourced from Aria Chairs — Takara Belmont Odin Luxury Styling Chair",
      secondary: "Secondary notes: excerpted from On Earth We’re Briefly Gorgeous by Ocean Vuong (2019)",
    },
  },
  {
    id: "chair-09",
    serial: "B315-GY",
    name: "Office Chair",
    caption: "For professional waiting, spinning in place since 2015",
    color: "#f7e4e4",
    ambientSound: "audio/ambient-nightwatch.mp3",
    materials: ["Mesh backrest", "Gas lift", "Casters"],
    manufacturing: "Midnight Fixtures",
    waitTime: "Average dwell time: 32 minutes",
    specs: [
    { label: "Year", value: "2024 — current production" },
    { label: "Type", value: "Adjustable office task chair" },
    { label: "Dimensions", value: "25\" W × 25\" D × 35–40\" H (adjustable)" },
    { label: "Seat Height", value: "18.5\"–23.5\"" },
    { label: "Upholstery", value: "Durable polyester fabric" },
    { label: "Frame", value: "Nylon base with dual-wheel casters" },
    { label: "Adjustment", value: "Pneumatic gas lift for height control" },
    { label: "Weight Capacity", value: "250 lbs" },
    { label: "Weight", value: "Carries 24 lbs of routine" },
    { label: "Use", value: "For waiting disguised as productivity" },
      { label: "Dwell", value: "32-minute email gap" },
    ],
    notesType: "paragraphs",
    notes: [
      {
        title: "Product Description",
        body:
          "The Beyond Basics Adjustable Task Chair is a functional staple designed for continuous use in office and home settings. Upholstered in durable polyester fabric, it features a contoured seat and backrest for ergonomic support during long hours of sitting. The pneumatic gas lift allows for easy height adjustment, while the 5-star nylon base and dual-wheel casters provide smooth mobility across surfaces. Its armless design encourages free movement and compact placement in smaller spaces. Available in multiple colors, the chair balances practicality with quiet neutrality — a standard for the unseen hours of daily work.",
        feeling: "as the brick of the afternoon stores the rose heat of the journey\nas the rose buds a green room to breathe\nand blossoms like the wind\nas the thinning birches whisper their silver stories of the wind to the\nurgent in the trucks\nas the leaves of the hedge store the light\nthat the moment thought it had lost\nas the nest of her wrist beats like the chest of a wren in the turning air\nas the chorus of the earth find their eyes in the sky\nand unwrap them to each other in the teeming dark\nhold everything dear",
      },
      {
        title: "Workday features",
        body:
          "This chair holds the posture of persistence. It waits with the body through repetition — the soft whir of the swivel, the small rise and fall of adjustment. Each shift marks the passage of unseen time, the slow choreography of thought. It collects the weight of tasks and hesitations, holding them evenly, asking for nothing but return.",
        feeling:
          "the calligraphy of birds across the morning\nthe million hands of the axe, the soft hand of the earth\none step ahead of time\nthe broken teeth of tribes and their long place\nsteppe-scattered and together\nclay's small, surviving handle, the near ghost of a jug\ncarrying itself towards us through the soil\nthe pledge of offered arms, the single sheet that is our common walking\nthe map of the palm held\nin a knot\nbut given as a torch\nhold everything dear\nthe paths they make towards us and how far we open towards them\nthe justice of a grass that unravels palaces but shelters the songs of the searching\nthe vessel that names the waves, the jug of this life, as it fills with the days\nas it sinks to become what it loves\nmemory that grows into a shape the tree always knew as a seed\nthe words\nthe bread\nthe child who reaches for the truths beyond the door\nthe yearning to begin again together\nanimals keen inside the parliament of the world\nthe people in the room the people in the street the people\nhold everything dear",
      },
    ],
    footer: {
      primary: "Product data sourced from Walmart Business — Boss Office Products Beyond Basics Adjustable Task Chair",
      secondary: "Secondary notes: excerpted from Hold Everything Dear by John Berger (2007)",
    },
  },
];

const params = new URLSearchParams(window.location.search);
const chairId = params.get("id") || "chair-01";

const loaderEl = document.querySelector(".loader");
const loaderProgress = document.querySelector(".loader__progress");
const loaderLabelEl = document.querySelector(".loader__label");
const loaderPhrasesContainer = document.querySelector(".loader__phrases");
const cursorEl = document.querySelector(".cursor");
const titleSerialEl = document.querySelector(".detail-title__serial");
const titleNameEl = document.querySelector(".detail-title__name");
const titleCaptionEl = document.querySelector(".detail-title__caption");
const specListEl = document.getElementById("specList");
const manualStepsEl = document.getElementById("manualSteps");
const specimenPlaceholder = document.querySelector(".specimen-placeholder");
const viewerEl = document.getElementById("chairViewer");
const backLinkEl = document.getElementById("backLink");
const instructionsEl = document.querySelector(".detail-instructions");
const instructionsHeadingEl = instructionsEl?.querySelector("h2");
const footerPrimaryEl = document.querySelector(".footer-line--primary");
const footerSecondaryEl = document.querySelector(".footer-line--secondary");

if (viewerEl && specimenPlaceholder) {
  viewerEl.addEventListener("load", () => {
    specimenPlaceholder.style.opacity = "0";
  });
  viewerEl.addEventListener("error", () => {
    specimenPlaceholder.style.opacity = "1";
  });
}

const TYPEWRITER_AUDIO_SRC = "audio/typewriter-soft.mp3";
const TYPEWRITER_INTERVAL = 75;
const AMBIENT_VOLUME = 0.28;
const typingStates = new WeakMap();
const PARAGRAPH_LAYOUT_IDS = new Set(["chair-01", "chair-05", "chair-06", "chair-07", "chair-08", "chair-09"]);
const NO_HEADING_LAYOUT_IDS = new Set(["chair-03"]);
const COMING_SOON_SPECIMENS = new Set(["chair-07", "chair-08", "chair-09"]);
let ambientAudio = null;
let ambientResumeHandler = null;
let locomotion;

backLinkEl?.addEventListener("click", (event) => {
  event.preventDefault();
  const destination = backLinkEl.getAttribute("href") || "catalog.html";
  runReturnLoader(destination);
});

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function hexToRgba(hex, alpha = 1) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized.length === 3 ? normalized.replace(/./g, (c) => c + c) : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function buildSpecs(chair) {
  if (chair.specs?.length) {
    return chair.specs;
  }
  return [
    { label: "Model", value: chair.name },
    { label: "Serial", value: chair.serial },
    { label: "Type", value: "Assembly seating prototype" },
    { label: "Dimensions", value: "Approx. 1 m of patient surface" },
    { label: "Weight", value: "Emotional load: moderate" },
    { label: "Dwell", value: chair.waitTime || "Unmeasured pause" },
  ];
}

function buildManualCards(chair) {
  if (chair.notesType === "paragraphs" && Array.isArray(chair.notes)) {
    return chair.notes.map((note) => ({
      label: note.title || "Notes",
      bodyHtml: `<p class="manual-step__body">${note.body || ""}</p>`,
      overlay: note.feeling || "",
      variant: "paragraph",
    }));
  }
  if (chair.notesType === "highlights" && Array.isArray(chair.notes)) {
    return chair.notes.map((note) => {
      const items = Array.isArray(note.items)
        ? note.items.map((item) => `<li>${item}</li>`).join("")
        : "";
      return {
        label: note.title || "Highlights",
        bodyHtml: `<ul class="manual-step__list">${items}</ul>`,
        overlay: note.feeling || "",
        variant: "highlights",
      };
    });
  }
  if (Array.isArray(chair.steps)) {
    return chair.steps.map((step, index) => ({
      label: `Step ${index + 1}`,
      bodyHtml: `<p class="manual-step__text">${step.title || ""}</p>`,
      overlay: step.feeling || "",
      variant: "step",
    }));
  }
  return [];
}

function playTypewriterSound() {
  if (!TYPEWRITER_AUDIO_SRC) {
    return;
  }
  const audio = new Audio(TYPEWRITER_AUDIO_SRC);
  audio.volume = 0.25;
  audio.play().catch(() => {});
}

function startTypewriter(stepEl, textEl) {
  const existing = typingStates.get(stepEl);
  if (existing?.timer) {
    clearInterval(existing.timer);
  }
  const full = textEl.dataset.text || "";
  textEl.textContent = "";
  if (!full.length) {
    return;
  }
  playTypewriterSound();
  let index = 0;
  const timer = setInterval(() => {
    index += 1;
    textEl.textContent = full.slice(0, index);
    if (textEl.scrollHeight > textEl.clientHeight) {
      textEl.scrollTop = textEl.scrollHeight - textEl.clientHeight;
    }
    if (index >= full.length) {
      clearInterval(timer);
      typingStates.delete(stepEl);
    }
  }, TYPEWRITER_INTERVAL);
  typingStates.set(stepEl, { timer, textEl });
}

function stopTypewriter(stepEl, textEl) {
  const state = typingStates.get(stepEl);
  if (state?.timer) {
    clearInterval(state.timer);
  }
  typingStates.delete(stepEl);
  if (textEl) {
    textEl.textContent = "";
  }
}

function setupManualStepInteractions(stepEl) {
  const overlayText = stepEl.querySelector(".manual-step__overlay-text");
  if (!overlayText) {
    return;
  }
  overlayText.dataset.text = (overlayText.textContent || "").trim();
  overlayText.textContent = "";

  const handleEnter = () => {
    stepEl.classList.add("is-hovered");
    startTypewriter(stepEl, overlayText);
  };

  const handleLeave = () => {
    stepEl.classList.remove("is-hovered");
    stopTypewriter(stepEl, overlayText);
  };

  stepEl.addEventListener("mouseenter", handleEnter);
  stepEl.addEventListener("mouseleave", handleLeave);
  stepEl.addEventListener("focusin", handleEnter);
  stepEl.addEventListener("focusout", handleLeave);
}

function appendHoverTip(stepEl) {
  if (stepEl.dataset.tipAdded) {
    return;
  }
  const tip = document.createElement("div");
  tip.className = "manual-step__tip";
  tip.textContent = "Hover to reveal waiting notes";
  stepEl.appendChild(tip);
  requestAnimationFrame(() => {
    tip.classList.add("is-visible");
  });
  const removeTip = () => {
    tip.classList.remove("is-visible");
    setTimeout(() => tip.remove(), 300);
  };
  stepEl.addEventListener("mouseenter", removeTip, { once: true });
  stepEl.addEventListener("focusin", removeTip, { once: true });
  stepEl.dataset.tipAdded = "true";
}

function stopAmbient() {
  if (ambientResumeHandler) {
    document.removeEventListener("pointerdown", ambientResumeHandler);
    ambientResumeHandler = null;
  }
  if (ambientAudio) {
    ambientAudio.pause();
    ambientAudio = null;
  }
}

function playAmbient(chair) {
  stopAmbient();
  if (!chair.ambientSound) {
    return;
  }
  ambientAudio = new Audio(chair.ambientSound);
  ambientAudio.preload = "auto";
  ambientAudio.loop = true;
  ambientAudio.volume = AMBIENT_VOLUME;
  ambientAudio.play().catch(() => {
    ambientResumeHandler = () => {
      if (!ambientAudio) {
        return;
      }
      ambientAudio.play().finally(() => {
        document.removeEventListener("pointerdown", ambientResumeHandler);
        ambientResumeHandler = null;
      });
    };
    document.addEventListener("pointerdown", ambientResumeHandler, { once: true });
  });
}

function runReturnLoader(destination) {
  if (!loaderEl || !loaderProgress || !loaderLabelEl || !loaderPhrasesContainer) {
    stopAmbient();
    window.location.href = destination;
    return;
  }
  document.body.classList.add("is-loading");
  loaderEl.hidden = false;
  loaderProgress.style.width = "0%";
  loaderLabelEl.textContent = "Preparing to jump ahead…";
  loaderPhrasesContainer.innerHTML = "";
  const note = document.createElement("div");
  note.className = "loader__phrase is-visible";
  note.textContent = "Progress 0%";
  loaderPhrasesContainer.appendChild(note);

  const fastTarget = randomBetween(0.55, 0.85);
  const fastPercent = Math.round(fastTarget * 100);
  const fastDuration = 900;
  const slowDuration = 3500;

  loaderLabelEl.textContent = `Loading ${fastPercent}%`;

  animateSegment(0, fastTarget, fastDuration, () => {
    loaderLabelEl.textContent = `Still loading… ${fastPercent}%`;
    note.textContent = "Perception stretches near the end.";
    animateSegment(fastTarget, 1, slowDuration, finish);
  });

  function animateSegment(from, to, duration, done) {
    const startTime = performance.now();
    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = from + (to - from) * progress;
      loaderProgress.style.width = `${value * 100}%`;
      note.textContent = `Progress ${Math.round(value * 100)}%`;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        done();
      }
    }
    requestAnimationFrame(frame);
  }

  function finish() {
    document.body.classList.remove("is-loading");
    loaderEl.hidden = true;
    stopAmbient();
    window.location.href = destination;
  }
}

function handleCursor(event) {
  cursorEl.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

function populateDetail(chair) {
  titleSerialEl.textContent = chair.serial;
  titleNameEl.textContent = chair.name;
  titleCaptionEl.textContent = chair.caption;
  specimenPlaceholder.style.background = `linear-gradient(135deg, ${chair.color}40, ${chair.color}65)`;
  specimenPlaceholder.style.transform = "rotateX(0deg) rotateY(0deg)";
  specimenPlaceholder.style.opacity = "1";

  if (viewerEl) {
    if (chair.model) {
      viewerEl.src = chair.model;
      viewerEl.alt = `Interactive model of ${chair.name}`;
      viewerEl.hidden = false;
    } else {
      viewerEl.removeAttribute("src");
      viewerEl.hidden = true;
    }
  }
  if (specimenPlaceholder) {
    const comingSoon = COMING_SOON_SPECIMENS.has(chair.id);
    specimenPlaceholder.classList.toggle("specimen-placeholder--soon", comingSoon);
    specimenPlaceholder.textContent = comingSoon ? "coming soon" : "";
  }

  if (specListEl) {
    specListEl.innerHTML = "";
    buildSpecs(chair).forEach((item) => {
      const row = document.createElement("div");
      row.className = "spec-list__row";
      row.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
      specListEl.appendChild(row);
    });
  }

  manualStepsEl.innerHTML = "";
  const usesParagraphLayout = PARAGRAPH_LAYOUT_IDS.has(chair.id);
  if (instructionsHeadingEl) {
    if (NO_HEADING_LAYOUT_IDS.has(chair.id) || (usesParagraphLayout && chair.notesType === "paragraphs")) {
      instructionsHeadingEl.textContent = "";
      instructionsEl?.classList.add("detail-instructions--noheading");
    } else {
      instructionsHeadingEl.textContent = "Assembly notes";
      instructionsEl?.classList.remove("detail-instructions--noheading");
    }
  }
  const cards = buildManualCards(chair);
  const accent = hexToRgba(chair.color, 0.6);
  cards.forEach((card, index) => {
    const li = document.createElement("li");
    const variantClass = card.variant ? ` manual-step--${card.variant}` : "";
    li.className = `manual-step${variantClass}`;
    li.tabIndex = 0;
    li.innerHTML = `
      <div class="manual-step__card">
        <div class="manual-step__face manual-step__face--front">
          <div class="manual-step__label">${card.label}</div>
          ${card.bodyHtml}
        </div>
        <div class="manual-step__face manual-step__face--back">
          <div class="manual-step__overlay">
            <span class="manual-step__overlay-text">${card.overlay || ""}</span>
          </div>
        </div>
      </div>
    `;
    li.style.setProperty("--step-accent", accent);
    manualStepsEl.appendChild(li);
    setupManualStepInteractions(li);
    if (index === 0) {
      appendHoverTip(li);
    }
  });

  if (footerPrimaryEl || footerSecondaryEl) {
    const footer = chair.footer || {};
    if (footerPrimaryEl) {
      footerPrimaryEl.textContent =
        footer.primary ||
        "Field data collected: Uncatalogued waiting specimen";
    }
    if (footerSecondaryEl) {
      footerSecondaryEl.textContent =
        footer.secondary ||
        "Secondary notes: Oral histories from anonymous sitters";
    }
  }

  playAmbient(chair);
}

function initSpecimen() {
  const stage = document.getElementById("specimenStage");
  if (!stage) return;
  const enableNativeCursor = () => document.body.classList.add("native-cursor");
  const disableNativeCursor = () => document.body.classList.remove("native-cursor");
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (event.clientY - rect.top) / rect.height - 0.5;
    specimenPlaceholder.style.transform = `rotateX(${yRatio * -12}deg) rotateY(${xRatio * 12}deg)`;
  });
  const resetPose = () => {
    specimenPlaceholder.style.transform = "rotateX(0deg) rotateY(0deg)";
    disableNativeCursor();
  };
  stage.addEventListener("pointerenter", enableNativeCursor);
  stage.addEventListener("pointerleave", resetPose);
  stage.addEventListener("pointercancel", resetPose);
}

function initScroll() {
  const container = document.querySelector(".scroll");
  if (!container) return;
  if (window.LocomotiveScroll) {
    locomotion = new window.LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 0.9,
      class: "is-inview",
    });
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("mousemove", handleCursor, { passive: true });

window.addEventListener("beforeunload", stopAmbient);

document.addEventListener("DOMContentLoaded", () => {
  const chair = CHAIRS.find((item) => item.id === chairId) || CHAIRS[0];
  populateDetail(chair);
  initSpecimen();
  initScroll();
});
