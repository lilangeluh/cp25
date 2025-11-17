const memories = [
      { temp: 0, location: "Providence, January night", short: "coldest it's been since you moved here", long: "The coldest it's been since you moved here. Walking home from the library at midnight, your breath freezes on your scarf. The air hurts your lungs. Every car is running, exhaust white and thick. You think: this is what people mean when they say \"bone-deep.\" Your body has no reference point for this.", time: "midnight", color: "#B8D4E8" },
      { temp: 3, location: "Providence, February morning", short: "wind chill makes it feel like -10°F", long: "Wind chill makes it feel like -10°F. You're waiting for the bus on Thayer Street. Your phone dies in your pocket. Your eyes water and the tears freeze on your cheeks. Inside the bus, the heat is so high everyone looks sedated. Someone's coffee steams like a signal fire.", time: "morning", color: "#C1DAE8" },
      { temp: 7, location: "Providence, early morning walk", short: "the Providence River is partially frozen", long: "The Providence River is partially frozen. You're crossing the bridge to the east side, watching your step on black ice. The sun is out but it doesn't matter. Cold this extreme feels like a betrayal of daylight. Your housemate texts: \"don't go outside.\" You're already outside.", time: "early morning", color: "#CAE0E8" },
      { temp: 12, location: "Providence, late night studio", short: "RISD building heating broke", long: "The RISD building heating broke. You're wearing two hoodies, fingerless gloves, working on your thesis. The radiator clanks but produces nothing. Your tea goes cold in minutes. You stay until 3 AM anyway. The cold keeps you awake better than caffeine.", time: "late night", color: "#D3E6E8" },
      { temp: 16, location: "Providence, Sunday morning", short: "Federal Hill is quiet", long: "Federal Hill is quiet. Snow from three days ago has turned gray and hard. You walk to the Italian bakery on Atwells, hands shoved deep in pockets. Inside: espresso steam, fresh bread warmth, old men speaking rapid Italian. You thaw out over a cornetto. The contrast is the point.", time: "Sunday morning", color: "#DCECE8" },
      { temp: 19, location: "Providence, evening commute", short: "biking home from the studio is a mistake", long: "Biking home from the studio is a mistake but you do it anyway. Your face goes numb. Your brakes barely work. Someone yells \"you're crazy!\" from a car window. At a red light on Hope Street, you think: maybe they're right. But you're almost home. The cold makes you feel invincible and stupid simultaneously.", time: "evening", color: "#E5F2E8" },
      { temp: 23, location: "Providence, afternoon campus walk", short: "late March pretending to be winter still", long: "Late March pretending to be winter still. Dirty snow piles in parking lots. You're meeting someone for coffee on Benefit Street. The historic houses look perfect in this light—colonial shutters, brick, that New England severity. You wonder if you'll stay here after graduation. The cold makes you feel temporary.", time: "afternoon", color: "#E8F4E8" },
      { temp: 28, location: "Providence, morning fog", short: "just above freezing", long: "Just above freezing. The fog off the river is thick enough to taste. You're walking to get breakfast at the diner on Ives Street. Everything muted: car sounds, footsteps, even your own thoughts. That specific damp cold that gets inside jackets. You order coffee and eggs and watch the windows fog up from inside.", time: "morning", color: "#E8F0E8" },
      { temp: 31, location: "San Diego, December night", short: "San Diego thinks this is cold", long: "You're home for winter break, sophomore year. San Diego thinks this is cold. Everyone's wearing puffy jackets. You're in a t-shirt because you just came from actual winter. Your high school friends want to get late-night tacos in OB. The marine layer is low and wet. Palm trees look wrong in this temperature.", time: "night", color: "#E8EDE5" },
      { temp: 34, location: "San Diego, January rain", short: "rare enough that people don't know how to drive", long: "Rare enough that people don't know how to drive in it. You're on the 5 heading to campus, wipers on full, everyone's brake lights a red blur. The heater smells like dust burning off. Later, walking between buildings, the eucalyptus smell intensifies. Rain on warm pavement—that specific mineral sweetness.", time: "morning", color: "#E8EBE2" },
      { temp: 37, location: "LA, December morning in Echo Park", short: "your first apartment, no heat", long: "Your first apartment, senior year. No heat, just a space heater you're afraid to run all night. You wake up and can see your breath. Make coffee in the tiny kitchen, wrap yourself in a blanket, sit by the window watching the neighborhood wake up. The jacaranda tree outside is bare. This cold feels like poverty and freedom in equal measure.", time: "morning", color: "#E8E8DF" },
      { temp: 41, location: "San Diego, early morning surf check", short: "marine layer is so thick", long: "Freshman year roommate drags you to La Jolla Shores at 6 AM. The marine layer is so thick you can barely see the water. Everyone's in wetsuits. You sit on the wall drinking terrible coffee from a thermos, watching shapes move in the gray. The cold is gentle here. Almost apologetic.", time: "early morning", color: "#E8E8DC" },
      { temp: 44, location: "LA, late night drive", short: "coming home from somewhere in Silver Lake", long: "Coming home from somewhere in Silver Lake. Windows down, hoodie on, that perfect driving temperature. The 10 freeway is almost empty. NPR playing low. Street lights reflected in recent rain. You feel the specific loneliness of being 22 in a city that's too big to ever fully know. But the air feels possible.", time: "late night", color: "#ECE8D9" },
      { temp: 48, location: "San Diego, winter morning campus", short: "canyon between buildings channels cold air", long: "Walking to your 8 AM lecture. The canyon between buildings channels cold air. Everyone's complaining but you're thinking of Providence, of real cold. This is just California pretending. Still, you're wearing a jacket. The sun will burn this off by 10 AM. The temporariness of discomfort.", time: "morning", color: "#F0E8D6" },
      { temp: 52, location: "LA, overcast afternoon", short: "May gray or June gloom", long: "May gray or June gloom, you can never remember which is which. You're at a friend's place in Culver City, working on a group project. The light is flat and perfect. No shadows. The apartment stays this temperature all day without AC or heat. You realize: this is the temperature of waiting. Nothing urgent.", time: "afternoon", color: "#F4E8D3" },
      { temp: 55, location: "Providence, April rain", short: "finally warming up", long: "Finally warming up. You're walking through the RISD beach without an umbrella, letting it soak you. Cherry blossoms are coming down with the rain, sticking to the sidewalk. Your shoes are soaked. You don't care. Winter is finally breaking. This cold is a promise, not a threat.", time: "afternoon", color: "#F8E8D0" },
      { temp: 58, location: "LA, November rooftop", short: "some warehouse space in Boyle Heights", long: "Some warehouse space in Boyle Heights turned gallery for the night. Golden hour refuses to end. You're holding a beer you're not drinking, wearing a thrifted linen shirt, watching someone's video installation about water. The temperature where you forget about your body entirely. Just present.", time: "evening", color: "#FCE8CD" },
      { temp: 61, location: "San Diego, morning marine layer", short: "May gray is heavy", long: "The May gray is heavy. You're walking to the library through campus, everything muted and soft. That specific San Diego morning dampness before the sun burns through. Your sweatshirt is slightly wet from the air itself. By noon this will be 75°F, but right now: liminal. Between states.", time: "morning", color: "#FFE8CA" },
      { temp: 64, location: "Shenzhen, winter morning", short: "what passes for cold here", long: "Age 10. What passes for cold here. You're wearing your school uniform, walking with your neighbor to the bus stop. The humidity is low for once. You can almost imagine crispness. Street vendors are selling sweet potato and corn. Steam rises from the carts. You buy sweet potato with your lunch money.", time: "morning", color: "#FFE6C4" },
      { temp: 67, location: "LA, spring evening", short: "sitting outside a cafe on Sunset", long: "Sitting outside a cafe on Sunset. Perfect. That's the word everyone uses and for once it's accurate. You're reading for class, highlighter in hand, iced coffee sweating onto the table. Jasmine blooming somewhere nearby. The light is golden but not hot. You think: I could stay in this temperature forever.", time: "evening", color: "#FFE4BE" },
      { temp: 70, location: "San Diego, spring afternoon", short: "Balboa Park with friends", long: "Balboa Park with friends. Someone's idea to \"do something touristy.\" You're lying on the grass near the botanical gardens. Frisbee players nearby. Dogs off-leash in the designated area. The sun is warm but not aggressive. You fall asleep for twenty minutes. Wake up exactly comfortable. No adjustment needed.", time: "afternoon", color: "#FFE2B8" },
      { temp: 73, location: "Providence, late May", short: "thesis reviews are over", long: "Thesis reviews are over. You're sitting on the quad with classmates, someone brought a speaker, someone else brought wine in plastic cups. The sun is finally strong enough to feel. Everyone's pale legs out for the first time. That specific college joy of surviving another semester. The grass is damp underneath. You stay until sunset.", time: "late afternoon", color: "#FFE0B2" },
      { temp: 76, location: "LA, October afternoon", short: "Santa Ana winds starting", long: "Santa Ana winds starting. Dry heat pushing in from the desert. You're driving to Pasadena for an opening. Windows down, hair whipping around. The light has that specific October quality—golden but urgent. Palm trees bent slightly. Everything feels like it's about to change. Static electricity in your clothes.", time: "afternoon", color: "#FFDEAC" },
      { temp: 77, location: "Shenzhen, after school", short: "the walk from the school gate", long: "Age 11. The walk from the school gate to the bus stop, backpack straps cutting into shoulders. Humidity thick but breathable. You buy a mango popsicle from the vendor with the blue cart. Sit on the curb waiting for the 34 bus. The sweetness cuts through the diesel smell. Ants on the pavement moving in formation.", time: "after school", color: "#FFDCA6" },
      { temp: 80, location: "San Diego, June afternoon", short: "June gloom finally broke", long: "June gloom finally broke. You're at your part-time job at the campus bookstore, the AC barely keeping up. Between customers you stand near the door to feel outside air. Students in tank tops and sandals. Someone's playing music from a car in the parking lot. The heat is gentle. Recreational, almost.", time: "afternoon", color: "#FFDAA0" },
      { temp: 82, location: "LA, summer day in Koreatown", short: "meeting a friend for lunch", long: "Meeting a friend for lunch at a mall food court. The walk from the parking garage to the building is brutal—all concrete, no shade. Inside: aggressive AC, K-pop playing, the smell of Korean fried chicken. You order cold noodles and sit near the fountain. The temperature contrast is dizzying. You stay inside as long as possible.", time: "afternoon", color: "#FFD89A" },
      { temp: 85, location: "Shenzhen, late spring", short: "after school, your mom picks you up", long: "Age 9. After school, your mom picks you up. The car has been sitting in the sun, the seats are scorching. She puts a towel down. Windows down until the AC catches up. You're going to your piano lesson. Your hands are already sweaty. The humidity makes everything feel closer than it is.", time: "after school", color: "#FFD694" },
      { temp: 87, location: "San Diego, August afternoon", short: "your dorm room, no AC", long: "Your dorm room, freshman year. No AC. Fan oscillating. You're supposed to be reading but you're just lying on the floor in shorts and a sports bra, hair wet from a cold shower that stopped feeling cold twenty minutes ago. Your roommate is at the beach. You're too lazy to move. The heat makes you simple.", time: "afternoon", color: "#FFD48E" },
      { temp: 89, location: "LA, July in your apartment", short: "window unit struggling", long: "Window unit struggling. You've hung wet sheets in the doorway—someone's life hack from the internet. Sitting in front of a fan, eating watermelon from a plastic container. Your thesis draft is open on your laptop but you're not looking at it. Heat like this erases ambition. You text your friend: \"too hot to exist.\"", time: "afternoon", color: "#FFD288" },
      { temp: 91, location: "San Diego, August beach", short: "Pacific Beach, late afternoon", long: "Pacific Beach, late afternoon. The marine layer finally burned off and now it's genuinely hot—the kind San Diego pretends doesn't exist. Sand scorching under your towel. You keep running in and out of the 62-degree water. Your friend's birthday. Someone brought a speaker. Your phone overheats in your bag and shuts off. Hours disappear.", time: "late afternoon", color: "#FFD082" },
      { temp: 93, location: "Shenzhen, summer afternoon", short: "summer vacation, your grandparents' apartment", long: "Age 8. Summer vacation. Your grandparents' apartment. The old AC unit barely works. You're eating lychee and watching cartoons, peeling the shells into a bowl. The air is so humid it feels like you're underwater. Your grandmother brings you a popsicle without asking. She always knows.", time: "afternoon", color: "#FFCE7C" },
      { temp: 95, location: "LA, September heatwave", short: "Santa Ana winds in full force", long: "Santa Ana winds in full force. You're driving to campus, every traffic light feels like punishment. The steering wheel is hot to touch. Everyone's AC is on full blast, everyone's irritated. You park in the structure, sit in your car for five minutes gathering energy to walk. The heat feels personal. Aggressive.", time: "afternoon", color: "#FFCC76" },
      { temp: 97, location: "San Diego, rare September heat", short: "they cancelled classes", long: "They cancelled classes. The university doesn't have enough AC. You're at the beach with what seems like the entire student body. The water feels like bathwater. You stay in until your fingers prune. Someone's handing out frozen fruit bars. The lifeguards look exhausted. You bike home at sunset, finally cooling down.", time: "afternoon", color: "#FFCA70" },
      { temp: 98, location: "Shenzhen, July afternoon", short: "right before the move", long: "Age 12, right before the move. Summer break. You're at the mall with friends, the only place with reliable AC. You're eating shaved ice at the food court, watching people, trying to memorize everything. In two months you'll be in California. The heat feels different knowing you're leaving it. Already nostalgic.", time: "afternoon", color: "#FFC86A" },
      { temp: 99, location: "LA, August heatwave", short: "record-breaking", long: "Record-breaking. The whole city is suffering. You're in the library because it's the coldest place you know. Supposed to be working but you're just sitting in the basement stacks, listening to the AC hum. Your apartment is uninhabitable. You stay until they kick you out at closing. Walk home slowly. The night air is still 85°F.", time: "afternoon", color: "#FFC664" },
      { temp: 100, location: "Shenzhen, August midday", short: "the heat index is higher", long: "Age 7. The heat index is higher—feels like 110°F with humidity. You're not supposed to go outside. But you sneak out to the convenience store with your cousin. The blast of AC when you enter feels like a miracle. You buy ice cream and eat it on the curb outside, racing against the melt. Sweetness and heat. The air shimmers. This is summer at its most honest.", time: "midday", color: "#FFC45E" }
    ];

    const landing = document.getElementById('landing');
    const scrollView = document.getElementById('scroll-view');
    const enterBtn = document.getElementById('enter-btn');
    const scrollContainer = document.getElementById('scroll-container');
    const scrollInner = document.getElementById('scroll-inner');
    const currentTempDisplay = document.getElementById('current-temp-display');

    const detailOverlay = document.getElementById('memory-detail-overlay');
    const detailCloseBtn = document.getElementById('detail-close-btn');
    const detailBg = document.getElementById('memory-detail-bg');
    const detailTemp = document.getElementById('detail-temp');
    const detailLocation = document.getElementById('detail-location');
    const detailTime = document.getElementById('detail-time');
    const detailBarFill = document.getElementById('detail-bar-fill');
    const detailText = document.getElementById('detail-text');
    const detailMeta = document.getElementById('detail-meta');
    const polaroidContainer = document.getElementById('polaroid-container');

    const archiveOverlay = document.getElementById('archive-overlay');
    const archiveOpenBtn = document.getElementById('archive-open-btn');
    const archiveCloseBtn = document.getElementById('archive-close-btn');
    const archiveGrid = document.getElementById('archive-grid');

    const aboutOverlay = document.getElementById('about-overlay');
    const aboutOpenBtn = document.getElementById('about-open-btn');
    const aboutCloseBtn = document.getElementById('about-close-btn');

    let currentMemory = null;

    enterBtn.addEventListener('click', () => {
      landing.classList.add('hidden');
      scrollView.classList.remove('hidden');
    });

    function renderScrollSections() {
      memories.forEach(memory => {
        const section = document.createElement('div');
        section.className = 'memory-section';

        const container = document.createElement('div');

        const tempEl = document.createElement('div');
        tempEl.className = 'memory-temp';
        tempEl.textContent = `${memory.temp}°F`;
        tempEl.style.color = memory.color;

        const locEl = document.createElement('h3');
        locEl.className = 'memory-location';
        locEl.textContent = memory.location;

        const shortEl = document.createElement('p');
        shortEl.className = 'memory-short';
        shortEl.textContent = memory.short;

        const timeEl = document.createElement('div');
        timeEl.className = 'memory-time';
        timeEl.textContent = memory.time;

        container.appendChild(tempEl);
        container.appendChild(locEl);
        container.appendChild(shortEl);
        container.appendChild(timeEl);

        section.appendChild(container);
        section.addEventListener('click', () => openDetail(memory));

        scrollInner.appendChild(section);
      });
    }

    function updateScrollTemp() {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const progress = scrollTop / (scrollHeight - clientHeight || 1);
      const temp = Math.round(progress * 100);
      currentTempDisplay.textContent = `${temp}°F`;
    }

    scrollContainer.addEventListener('scroll', updateScrollTemp);

    function openDetail(memory) {
      currentMemory = memory;

      detailTemp.textContent = `${memory.temp}°F`;
      detailLocation.textContent = memory.location;
      detailTime.textContent = memory.time;
      detailBarFill.style.width = `${memory.temp}%`;
      detailBarFill.style.background = memory.color;
      detailText.textContent = memory.long;
      detailMeta.textContent = `Official Data: ${memory.location}, ${memory.time}, ${memory.temp}°F`;

      detailBg.style.background = `linear-gradient(135deg, ${memory.color}22 0%, ${memory.color}44 100%)`;

      polaroidContainer.innerHTML = '';

      const imageCount = (memory.temp % 3) === 0 ? 2 : 1;
      const seed = memory.temp;
      const rotations = [-8, -4, 3, 6, -6, 5];
      const positions = [
        { top: '15%', left: '5%' },
        { top: '25%', right: '8%' },
        { bottom: '20%', left: '10%' },
        { bottom: '15%', right: '12%' },
        { top: '40%', left: '15%' },
        { top: '35%', right: '15%' }
      ];

      for (let i = 0; i < imageCount; i++) {
        const posIndex = (seed + i * 7) % positions.length;
        const rotIndex = (seed + i * 3) % rotations.length;

        const p = document.createElement('div');
        p.className = 'polaroid';
        const style = positions[posIndex];
        for (const key in style) p.style[key] = style[key];
        p.style.transform = `rotate(${rotations[rotIndex]}deg)`;

        const inner = document.createElement('div');
        inner.className = 'polaroid-inner';

        const img = document.createElement('div');
        img.className = 'polaroid-img';
        img.style.background = `linear-gradient(135deg, ${memory.color}44, ${memory.color}88)`;
        img.textContent = `${memory.temp}°`;

        const caption = document.createElement('div');
        caption.className = 'polaroid-caption';
        caption.textContent = memory.location.split(',')[0];

        inner.appendChild(img);
        inner.appendChild(caption);
        p.appendChild(inner);
        polaroidContainer.appendChild(p);
      }

      detailOverlay.classList.remove('hidden');
    }

    detailCloseBtn.addEventListener('click', () => {
      detailOverlay.classList.add('hidden');
    });

    function renderArchive() {
      archiveGrid.innerHTML = '';
      memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        card.style.background = memory.color;

        const temp = document.createElement('div');
        temp.className = 'archive-temp';
        temp.textContent = `${memory.temp}°`;

        const hover = document.createElement('div');
        hover.className = 'archive-hover';

        const hoverText = document.createElement('div');
        hoverText.className = 'archive-hover-text';

        const loc = document.createElement('div');
        loc.textContent = memory.location;

        const short = document.createElement('div');
        short.className = 'archive-hover-short';
        short.textContent = memory.short;

        hoverText.appendChild(loc);
        hoverText.appendChild(short);
        hover.appendChild(hoverText);

        card.appendChild(temp);
        card.appendChild(hover);

        card.addEventListener('click', () => {
          archiveOverlay.classList.add('hidden');
          openDetail(memory);
        });

        archiveGrid.appendChild(card);
      });
    }

    archiveOpenBtn.addEventListener('click', () => {
      renderArchive();
      archiveOverlay.classList.remove('hidden');
    });

    archiveCloseBtn.addEventListener('click', () => {
      archiveOverlay.classList.add('hidden');
    });

    aboutOpenBtn.addEventListener('click', () => {
      aboutOverlay.classList.remove('hidden');
    });

    aboutCloseBtn.addEventListener('click', () => {
      aboutOverlay.classList.add('hidden');
    });

    renderScrollSections();
