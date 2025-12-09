const memories = [
  { temp: 20, location: "Hell Valley, Noboribetsu", short: "First snow storm", long: "Hokkaido wind sliced straight through my coat the first time I saw real snow. At Noboribetsu’s Hell Valley, steam rose from the ground while snow blew sideways, stinging my face and drowning out sound. I shuffled along the icy path, fingers numb around my scarf. Later, looking at the photos, I noticed my grandpa’s whole fit—coat, sunglasses, stance—like he owned the valley. At the time I was just cold; now I see how cool he actually looked.", time: "15:01", feelsLike: 8, date: "2011-12-18", color: "#d7e9f5", image: "./images/grandpa.JPG", coords: { lat: "42.5° N", lon: "141.1° E" }, mapImage: "./images/grandpa-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: loud with snow", "Eyes: half blinded", "Breath: sharp cold", "Cheeks: flushed"] },

  { temp: 25, location: "Jiuzhaigou, Sichuan", short: "Snack-bribed hike", long: "On that first Jiuzhaigou trip, the 7km trail felt endless. My mom’s backpack was a traveling snack stand, each cookie a tiny contract to keep walking. My legs ached, lungs burning in the thin mountain air, squirrels darting across the path like they wanted my crackers more than I did. By the time I reached the end on my own two feet, sweat cooling under my jacket, I realized I hadn’t asked to be carried once.", time: "12:48", feelsLike: 21, date: "2007-02-14", color: "#d8e8f3", image: "./images/barbie.JPG", coords: { lat: "33.2° N", lon: "104.0° E" }, mapImage: "./images/barbie-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Steps: tiny but steady", "Air: pine-cool", "Body: snack-fueled", "Mind: proud spark"] },

  { temp: 37, location: "Big Bear Lake", short: "Snowman break", long: "At Big Bear, the cabin smelled faintly of pine and leftover hot chocolate. Three of us trudged into the patch of snow behind the Airbnb, bundled in ridiculous layers, determined to build a snowman before the afternoon sun melted everything. Our fingers froze inside damp gloves, but the laughter kept cutting through the cold. It felt like a stolen pause from the chaos of college—a small winter pocket where time slowed down just enough for us to act like kids again.", time: "17:07", feelsLike: 31, date: "2024-01-13", color: "#d8e7f2", image: "./images/bigbear.JPG", coords: { lat: "34.24° N", lon: "116.90° W" }, mapImage: "./images/bigbear-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: pale snow cold", "Hands: numb", "Breath: little clouds", "Mood: restful & happy"] },

  { temp: 39, location: "Rolf’s, NYC", short: "Overheated Christmas bar", long: "Rolf’s looked like Christmas exploded—ornaments dangling from every inch of ceiling, warm lights reflecting off glass and tinsel. Outside, the wind cut straight to my bones, but inside felt like stepping into a glittering furnace. My glasses fogged instantly. People were packed elbow-to-elbow, murmuring under the heavy decor. I remember peeling off my jacket and feeling my whole body sigh in relief. The contrast was so extreme it almost felt theatrical, like the bar was performing warmth after the city’s icy slap.", time: "21:46", feelsLike: 33, date: "2023-11-11", color: "#d9e6f0", image: "./images/nycbar.JPG", coords: { lat: "40.74° N", lon: "73.98° W" }, mapImage: "./images/nycbar-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: freezing street", "Inside: warm glow", "Scent: sweet spices", "Mood: surprised delight"] },

  { temp: 49, location: "Mesquite Flat Sand Dunes", short: "Freezing sunrise climb", long: "We left in the dark to catch sunrise at Mesquite Flat Sand Dunes. The air was sharp and cold, the sky only a hint of blue. Walking uphill on sand felt like losing an argument with gravity—each step sliding back a little. Wind pushed against my jacket and needled my face. Then the sun finally broke over the ridge, and the dunes flipped from dull gray to molten gold. My fingers were numb, nose running, but the light made the whole struggle feel weirdly worth it.", time: "7:09", feelsLike: 42, date: "2023-03-27", color: "#dae5ee", image: "./images/valleydunes.JPG", coords: { lat: "36.62° N", lon: "117.11° W" }, mapImage: "./images/valleydunes-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: early sting", "Legs: uneven climb", "Skin: sand brushing", "Mood: quiet anticipation"] },

  { temp: 49, location: "Grandview Park, SF", short: "Windy stair climb", long: "The climb up to Grandview Park felt endless—hundreds of stairs, each one testing my already sniffling, wind-beaten body. The air at the top was razor-cold, sharp enough to make my eyes water. But the view was unreal: the whole Sunset neighborhood laid out like a tilted mosaic, the ocean a faint glitter at the edge. The wind was so strong it felt like it could lift my hair straight off my head. Even through the congestion and cold, something about that view unclogged my thoughts.", time: "20:42", feelsLike: 41, date: "2024-05-25", color: "#dbe4ec", image: "./images/grandview.JPG", coords: { lat: "37.75° N", lon: "122.47° W" }, mapImage: "./images/grandview-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: sharp wind", "Nose: nonstop sniffles", "Legs: staircase fatigue", "Mood: super still & crisp"] },

  { temp: 49, location: "Banff National Park", short: "Foggy morning view", long: "We hiked to the viewpoint in Banff expecting a sweeping panorama, but instead everything was swallowed by fog—thick, soft, almost theatrical. The air was cool and just a bit damp, brushing my face like chilled cotton. I was tired, still waking up, my brain fog matching the weather. But the scene felt strangely beautiful: outlines of trees fading in and out, tiny drops clinging to my hair. I lifted my camera anyway. Something about the quiet made the moment feel intimate, like the mountain was whispering instead of showing off.", time: "10:46", feelsLike: 46, date: "2024-09-11", color: "#dbe3ea", image: "./images/banfffog.JPG", coords: { lat: "51.50° N", lon: "115.93° W" }, mapImage: "./images/banfffog-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: brisk morning chill", "Hands: tucked in sleeves", "Hair: touched by mist", "Mood: half-awake"] },

  { temp: 50, location: "Roger Williams Zoo", short: "Coldest Halloween", long: "At Roger Williams Park Zoo’s pumpkin walk, everything glowed—a tunnel of carved faces, lanterns, and lights flickering against the trees. But it was freezing. I’d stupidly worn a costume with shorts, and the cold gnawed straight through my legs. My breath puffed out in little clouds as crowds shuffled past, kids pointing at their favorite pumpkins. My fingers were numb, but the warm orange glow everywhere made the night feel magical. It was the kind of cold you complain about nonstop, but secretly love because the memory shines brighter because of it.", time: "22:17", feelsLike: 40, date: "2025-10-31", color: "#dce2e9", image: "./images/pumpkin.JPG", coords: { lat: "41.79° N", lon: "71.41° W" }, mapImage: "./images/pumpkin-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: biting cold", "Legs: shivering effort", "Glow: warm lantern spread", "Mood: Regret"] },

  { temp: 51, location: "Lake Louise", short: "Steep turquoise view", long: "That hike above Lake Louise was steeper than I expected. My breath came in short bursts, the cold alpine air hitting my lungs like mint. But every few turns the trees opened up, and I’d see the Fairmont and the lake below—this perfect turquoise mirror framed by mountains. My legs were burning, cheeks flushed, but I couldn’t stop taking pictures. The air felt impossibly clean, like each inhale scrubbed my thoughts a little clearer. Even the silence had weight to it, the good kind.", time: "17:28", feelsLike: 47, date: "2024-09-14", color: "#dde1e7", image: "./images/lakelouise.JPG", coords: { lat: "51.42° N", lon: "116.18° W" }, mapImage: "./images/lakelouise-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: alpine cool", "Legs: steady burn", "View: green glass water", "breath: exhales"] },

  { temp: 52, location: "Washington Square Park", short: "Cold bagel line", long: "We stood an hour in the cold for pop-up bagels, fingers tucked into our sleeves, talking mostly about how numb our toes were. When we finally got them—warm, chewy, dipped in that viral sauce—we carried them to Washington Square Park and sat near a cluster of aggressive pigeons. The first bite felt like being instantly reheated. Steam rose into the crisp air, mixing with the smell of roasted nuts from a nearby cart. For a moment, the wait didn’t matter; warmth returned from the inside out.", time: "11:11", feelsLike: 45, date: "2023-11-11", color: "#dde0e5", image: "./images/bagels.JPG", coords: { lat: "40.73° N", lon: "73.99° W" }, mapImage: "./images/bagels-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: winter bite", "Hands: warm paper bag", "Park: pigeon orbit", "Mood: simple reward"] },

  { temp: 54, location: "Sumida Park, Tokyo", short: "Early sakura morning", long: "We got to Sumida Park before sunrise, breath visible in the brisk air, hoping to find even a few cherry blossoms in bloom. The sky was a clear, unreal blue, the kind that makes colors look hyper-saturated. The trees only had scattered blossoms, but each one glowed faintly pink in the early light. Cold wind nudged at my jacket, but standing there felt peaceful—quiet chatter, camera shutters, the faint smell of river water. It was one of those mornings where beauty doesn’t shout; it just hums softly around you.", time: "9:01", feelsLike: 50, date: "2024-03-26", color: "#dedfe4", image: "./images/jpsakura.JPG", coords: { lat: "35.71° N", lon: "139.81° E" }, mapImage: "./images/jpsakura-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: brisk bloom", "Light: soft pink + blue", "Steps: early crowd", "Mood: uplifted"] },

  { temp: 55, location: "Home", short: "Chem break sunset", long: "I was supposed to be doing chemistry when the light in my room suddenly shifted. My notes went pale lavender, and I looked up to see the sky over Del Mar exploding—orange, magenta, that over-the-top post–daylight-savings kind of sunset. I pressed my forehead to the cool window, watching palm trees turn into sharp black cutouts. For a few minutes, electrons and reaction rates fell completely out of my head; it was just sky, ocean, and the reminder that the world didn’t care about my homework.", time: "18:20", feelsLike: 54, date: "2019-01-31", color: "#dfdde2", image: "./images/sunset.JPG", coords: { lat: "32.96° N", lon: "117.27° W" }, mapImage: "./images/sunset-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Eyes: homework break", "Air: Cool evening", "Skin: Forehead on glass", "Mind: Briefly unburdened"] },

  { temp: 57, location: "Cholla Cactus Garden", short: "Unexpected desert glow", long: "My dad and I didn’t expect a sunset at Joshua Tree that day—the sky was gray all afternoon. But right as we considered leaving, the clouds split open and golden light poured over the cholla cactus garden. The air shifted from cool to warm in minutes, like someone turned a dial. Every cactus spine lit up like tiny lanterns. We stood there saying nothing, just letting the moment happen. It felt like the desert was giving us a quiet, unplanned gift.", time: "16:48", feelsLike: 51, date: "2023-12-27", color: "#dfdce0", image: "./images/jtsunset.JPG", coords: { lat: "33.91° N", lon: "115.94° W" }, mapImage: "./images/jtsunset-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: cooling desert", "Light: final burst", "Skin: prickly dry", "Mood: held by color"] },

  { temp: 57, location: "Emerald Lake", short: "Ideal Summer", long: "Emerald Lake lived up to its name—the water so vividly blue-green it looked edited. The sun was warm, bouncing off canoes gliding slowly across the surface. I stood at the shore, watching ripples stretch out like silk being pulled. A light breeze skimmed my arms, warm but not hot, carrying the scent of pine. Everything felt calm and saturated, like the world had turned its color settings up one notch. Even the mountains seemed relaxed, lounging behind the lake like old friends.", time: "10:56", feelsLike: 53, date: "2024-09-16", color: "#e0dbde", image: "./images/emeraldlake.JPG", coords: { lat: "51.44° N", lon: "116.53° W" }, mapImage: "./images/emeraldlake-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Surface: loose gravel", "Color: bright turquoise flashes", "Body: steady warmth", "Mind: unhurried"] },

  { temp: 58, location: "Akaroa Lighthouse", short: "Cloudy French-NZ mix", long: "Akaroa felt like stepping into a tiny French seaside village dropped onto a New Zealand peninsula. Everything was cloudy and cool, the light soft and diffused. Sailboats bobbed gently in the harbor, and narrow streets smelled faintly of salt and pastries. The air had that coastal chill that settles into your sleeves but never fully freezes you. I remember thinking the town felt layered—part countryside, part small port, part something dreamlike. Even now, the memory feels wrapped in gray-blue light.", time: "19:05", feelsLike: 55, date: "2024-12-20", color: "#e0dadd", image: "./images/akaroa.JPG", coords: { lat: "43.81° S", lon: "172.96° E" }, mapImage: "./images/akaroa-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: muted coast", "Steps: slow wandering", "Light: cloud filtered", "Mood: quiet affection"] },

  { temp: 59, location: "Del Mar train tracks", short: "Acceptance-week exhale", long: "The week I got my college acceptances, I went to the Del Mar tracks for sunset. The air smelled like salt and creosote, that old-railroad scent. Waves rolled in on one side, and every so often a train roared past, dragging a wall of wind and noise that rattled my ribs. Between trains it was strangely quiet. I sat there feeling something I hadn’t felt in months—a sense that the future might actually be okay, like a pressure valve finally hissing open.", time: "20:24", feelsLike: 46, date: "2021-04-17", color: "#e1d9da", image: "./images/traintrak.JPG", coords: { lat: "32.96° N", lon: "117.27° W" }, mapImage: "./images/traintrak-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Wind: train-rush", "Chest: relief exhale", "Feet: beach-warm", "Mind: weight lifted"] },

  { temp: 59, location: "Torrey Highlands Park", short: "Park Bench", long: "Torrey Highlands Park used to be chaos—kids, dogs, soccer games overlapping. After the first wave of COVID, it felt empty, like someone had turned the volume down. My friends and I claimed a bench as our headquarters, lugging sketchbooks and phones, taking turns drawing, venting, and doing half-serious TikTok dances in the grass. The sun was sharp, but the big trees cast generous shade. It felt like an in-between place: not quite the old world, not yet college, just this suspended summer where we kept showing up anyway.", time: "15:44", feelsLike: 47, date: "2021-04-22", color: "#e1d8d7", image: "./images/parkbench.JPG", coords: { lat: "32.97° N", lon: "117.14° W" }, mapImage: "./images/parkbench-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: post-covid quiet", "Hands: charcoal-smudged", "Shade: patchy cool", "Mind: leaving soon"] },

  { temp: 60, location: "Badwater Basin", short: "Crunchy salt flats", long: "At Badwater Basin the ground crunched under every step, this brittle salt lattice that sounded like breaking porcelain. The afternoon warmth sat heavily on my shoulders, but the second the sun dipped behind the mountains the temperature fell fast, as if someone opened a freezer door. The basin shifted from glowing white to eerie blue-gray. I remember standing still, listening to nothing—no wind, no bugs, just vast silence stretching out in every direction. It felt like being on another planet, cold and infinite.", time: "18:09", feelsLike: 53, date: "2023-03-27", color: "#e2d7d4", image: "./images/valleysalt.JPG", coords: { lat: "36.25° N", lon: "116.82° W" }, mapImage: "./images/valleysalt-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: dry and echoing", "Feet: super crunchy", "Light: draining fast", "Mood: surreal & calm"] },

  { temp: 61, location: "Oceanside", short: "First train home", long: "On my first Amtrak ride home from college, everything outside the window looked strangely cinematic. The train hugged the coast, giving quick flashes of beach, surfers, and low gray water between telephone poles. Inside, the car smelled like coffee and plastic seats, the AC a little too cold. I pretended to do work but mostly watched the coastline and scrolled old photos. With every mile closer to Oceanside I felt both more grown-up and more homesick, like I was commuting between two versions of myself.", time: "16:51", feelsLike: 63, date: "2021-11-04", color: "#e2d6d1", image: "./images/amtrak.JPG", coords: { lat: "33.20° N", lon: "117.38° W" }, mapImage: "./images/amtrak-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: train air-conditioning", "Window: warm glass", "Eyes: long horizon", "Mood: early homesickness"] },

  { temp: 62, location: "Backyard", short: "Hummingbird Nest", long: "I first spotted the nest in a front-yard bush—just a tiny cup with two perfect eggs. For days I’d crouch in the mulch, camera ready, until one afternoon the mother zipped in, hovered, and dropped straight into the nest. That’s when I knew it was a hummingbird. I kept visiting until the eggs became open beaks, and then found two more nests in the backyard like the neighborhood had quietly franchised them. Spring felt louder, greener, and oddly centered around these birds that didn’t know I existed.", time: "16:29", feelsLike: 58, date: "2019-03-29", color: "#e3d5ce", image: "./images/hummingbird.JPG", coords: { lat: "32.96° N", lon: "117.27° W" }, mapImage: "./images/hummingbird-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: biting cold", "Legs: shivering effort", "Glow: warm lantern spread", "Mood: amused regret"] },

  { temp: 62, location: "Tasman Lake", short: "Glacier Wind", long: "On the Tasman Lake jetty boat, the wind whipped so fast it felt like needles brushing past my ears. We bounced over the water, spray hitting my face, until the glacier finally appeared—this massive blue-white wall, dense and textured like carved stone. Getting close enough to see the cracks and layers made me realize how ancient it was. The air around it felt colder, sharper. My hair was stuck to my cheeks, but I couldn’t stop staring at the ice, thinking how strange it was to be so close to something that never melts easily.", time: "16:14", feelsLike: 53, date: "2024-12-24", color: "#e4d4cb", image: "./images/glacier.JPG", coords: { lat: "43.73° S", lon: "170.13° E" }, mapImage: "./images/glacier-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: sharp chill", "Spray: cold flecks", "Grip: cold railing", "Mood: awe without words"] },

  { temp: 65, location: "Katmai National Park", short: "Bear with salmon", long: "On the bridge at Katmai, July still felt like early spring. I gripped my dad’s long lens with both hands, trying to keep the bear in frame as it moved through the river. The water roared under the platform, cold air rushing up with it. When the bear snapped a salmon mid-leap and stood there chewing, looking almost pleased, I fired off shot after shot, arms shaking from the weight. I was far away, but through the viewfinder it felt close enough to touch.", time: "16:30", feelsLike: 64, date: "2016-07-15", color: "#e4d3c8", image: "./images/alaska.JPG", coords: { lat: "58.6° N", lon: "155.0° W" }, mapImage: "./images/alaska-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Outerwear: Shell + fleece", "Air: Cold river wind", "Arms: Tired from lens", "Mind: locked-in"] },

  { temp: 65, location: "Kate Sessions Park", short: "Birthday charcuterie", long: "For my friend’s 17th, we turned Kate Sessions Park into a picnic ad—salami roses, three too many cheeses, fruit spilling off a wooden board. Mission Bay and downtown glowed below us as the sun dropped. We talked about everything and nothing: crushes, colleges, the usual future panic. When the temperature finally crashed and everyone else cleared out, it was just the five of us in the dark, fingers numb from cold and brie, watching the city lights take over the show.", time: "14:10", feelsLike: 61, date: "2020-11-11", color: "#e5d2c5", image: "./images/charcuterie.JPG", coords: { lat: "32.80° N", lon: "117.24° W" }, mapImage: "./images/charcuterie-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: bay chill", "Hands: soft cheese edges", "Light: fading blue", "Mood: stretched-out comfort"] },

  { temp: 65, location: "El Rey Theatre, LA", short: "Front-row sunset show", long: "At El Rey, I somehow ended up close enough to see my favorite artists’ facial expressions, not just their silhouettes. The venue was small and packed but not suffocating; my body felt warm from standing and singing, not from panic. Colored lights washed over us in slow waves while the room moved as one big organism. Between sets, the doors opened and a slice of sunset light spilled into the lobby. It felt like the night and day were briefly high-fiving above my head.", time: "18:10", feelsLike: 63, date: "2022-11-16", color: "#e6d1c2", image: "./images/sunsetconcert.JPG", coords: { lat: "34.06° N", lon: "118.34° W" }, mapImage: "./images/sunsetconcert-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: open evening", "Hands: railing grip", "Skin: mild warmth", "Mood: lifted and present"] },

  { temp: 65, location: "Aoraki / Mount Cook", short: "Lupins Everywhere", long: "Halfway up the Hooker Valley Trail, my legs were warm from the steady incline, but the air stayed cool enough to nip at my fingers. Lupins spilled across the valley in impossible purples and pinks, like someone dumped out a giant box of pastels. A glacial river rushed beside the path, milky blue from rock flour, its sound soft but constant. The sun blinked in and out behind clouds, lighting the mountains in brief dramatic flashes. It felt both remote and deeply familiar, like a place my body already understood.", time: "11:46", feelsLike: 67, date: "2024-12-24", color: "#e6d0bf", image: "./images/aoraki.JPG", coords: { lat: "43.73° S", lon: "170.10° E" }, mapImage: "./images/aoraki-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: glacier breeze", "Legs: rhythmic steps", "Scent: wet stone", "Mood: grounded peace"] },

  { temp: 65, location: "540 Kelton Ave", short: "Birthday before goodbye", long: "It was three weeks before graduation, my 22nd birthday, and the apartment felt like a time capsule—half-packed suitcases, leftover party smell still clinging to the couch. My friend and I sat together the way we had for years, but everything felt slightly tinted with endings. “Ribs” by Lorde kept looping in my head, that growing-up ache. The window was cracked open and warm LA air drifted in, mixing with the faint scent of spilled drinks from the night before. It was a quiet, bittersweet moment, small but heavy with change.", time: "1:50", feelsLike: 66, date: "2025-05-10", color: "#e7cfbc", image: "./images/joc.JPG", coords: { lat: "34.06° N", lon: "118.45° W" }, mapImage: "./images/joc-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: warm apartment", "Shoulders: unwound", "Eyes: watery", "Mood: growing up is sad"] },

  { temp: 66, location: "Getty Villa", short: "Marble spring break", long: "During my first college spring break, we went to the Getty Villa instead of somewhere wild. The air was bright and almost warm, sunlight glancing off pale stone and columns. Fountains murmured in the courtyard, and the ocean flickered just beyond the walls. I drifted through the colonnades with friends, half listening to audio guides, half just enjoying the feeling of being small next to something intentionally grand. It felt like a soft launch into a new season—less midterm chaos, more marble and sky.", time: "14:20", feelsLike: 63, date: "2022-03-13", color: "#e8ceb9", image: "./images/villa.JPG", coords: { lat: "34.05° N", lon: "118.56° W" }, mapImage: "./images/villa-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: mild spring", "Light: marble reflection", "Steps: slow courtyard pace", "Mood: drifting curiosity"] },

  { temp: 68, location: "Hayes St., SF", short: "The yellow house", long: "Hayes Street glowed in the late afternoon sun, the Victorian houses painted in colors that looked too perfect to be real. I had my camera slung over my shoulder, sweat drying lightly on my back from walking all day. When I snapped the photo I always think of now, the air felt warm and buzzy, the kind of temperature that makes everything feel a little more alive. People laughed on stoops, a dog barked somewhere, and the whole street hum felt like a summer postcard.", time: "14:51", feelsLike: 63, date: "2024-07-05", color: "#e8cdb6", image: "./images/sf.JPG", coords: { lat: "37.77° N", lon: "122.43° W" }, mapImage: "./images/sf-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: clean sun", "Light: bright façades", "Feet: slow wandering", "Mood: lighthearted ease"] },

  { temp: 68, location: "UCLA Royce Hall", short: "Fizzy graduation", long: "On the UCLA lawn, sunlight bounced off every champagne bottle in sight. When my friend popped ours, cold spray shot across my arms and face—shockingly chilly, sticky as it dried. People around us were shouting, laughing, tossing caps into the air. Royce Hall glowed in the background like a backdrop someone carefully chose for us. My shoes were wet, the grass was damp, and my voice was already hoarse from cheering. It felt like standing inside a bubble of celebration, brief and bright and fizzy in every sense.", time: "14:12", feelsLike: 70, date: "2025-06-05", color: "#e9ccb3", image: "./images/champagne.JPG", coords: { lat: "34.07° N", lon: "118.44° W" }, mapImage: "./images/champagne-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: noon heat", "Skin: sticky", "Sound: cork pop", "Mood: brief euphoria"] },

  { temp: 68, location: "Tillinghast Beach", short: "Moonrise", long: "The first time I visited the “RISD beach,” the air surprised me—it was so much hotter than I expected for Rhode Island. The sand was coarse, almost pebbly, scratching lightly against my feet as I walked toward the shoreline. When the moon began to rise, the sky shifted into soft pastels, and the whole beach fell into this peaceful quiet. Waves lapped slowly, and the warm wind carried a faint salty heaviness. It felt like a different coast entirely, new but strangely comforting, like a small beginning.", time: "19:44", feelsLike: 69, date: "2025-08-07", color: "#e9cbb0", image: "./images/risdbeach.JPG", coords: { lat: "41.74° N", lon: "71.38° W" }, mapImage: "./images/risdbeach-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: warm breeze", "Sand: coarse grain", "Light: rising moon", "Mood: settling in"] },

  { temp: 69, location: "Lake Kawaguchiko", short: "Bare Fuji morning", long: "At Kawaguchiko I woke at 5am, expecting another cloudy morning. Instead, the sky opened just enough to reveal Fuji—snowless in summer, its peak cutting sharply into the pastel sky. The air was chilly but gentle, the kind that settles quietly on your skin. Yesterday’s rain still clung to the railings in tiny droplets. Everything felt too still, like the mountain was holding its breath with me. It looked incomplete without snow, yet somehow more vulnerable, and in that moment I felt strangely connected to its bare, quiet shape.", time: "5:02", feelsLike: 76, date: "2023-09-05", color: "#eac8a5", image: "./images/fuji.JPG", coords: { lat: "35.51° N", lon: "138.76° E" }, mapImage: "./images/fuji-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: cold dawn", "Skin: leftover rain", "View: sudden clearing", "Mood: stunned quiet"] },

  { temp: 71, location: "Joshua Tree National Park", short: "Desert dinner cocoon", long: "Our Joshua Tree Airbnb was surrounded by almost nothing—just desert, sky, and a road that disappeared into both. After dark the outside turned ink black and cold, but inside the kitchen glowed. We boiled pasta, opened cheap wine, and crowded around a too-small table, talking over each other while the wind pressed against the windows. It felt like the world had shrunk to this one warm room in the middle of nowhere, like we’d borrowed a different life for one night.", time: "20:20", feelsLike: 72, date: "2022-09-13", color: "#ebc7a2", image: "./images/jtdinner.JPG", coords: { lat: "34.13° N", lon: "116.31° W" }, mapImage: "./images/jtdinner-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: desert chill", "Hands: warm plate", "Light: low and gold", "Mood: settled warmth"] },

  { temp: 79, location: "Gold Coast koala park", short: "Koala ear to cheek", long: "At the koala zoo, the air was thick and sweet with eucalyptus. When the staff settled the koala into my arms, it was heavier than I expected, claws hooking gently into my shirt. Then it turned its head and one fluffy ear brushed my cheek. I almost screamed from how painfully cute it was, but I held my face in a calm, “normal” smile for the camera while my brain looped, I am holding a koala, over and over.", time: "12:38", feelsLike: 84, date: "2013-01-31", color: "#ebc69f", image: "./images/koala.JPG", coords: { lat: "28.0° S", lon: "153.4° E" }, mapImage: "./images/koala-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Fur: warm brush", "Arms: careful cradle", "Air: eucalyptus sweetness", "Mind: tiny scream inside"] },

  { temp: 79, location: "Sannenzaka, Kyoto", short: "Cold dawn climb", long: "We woke before sunrise to climb Sannenzaka with almost no one around. The air was crisp enough to sting my nose, but the sky was turning cotton-candy colors that made it feel worth it. The wooden storefronts creaked softly, and distant footsteps echoed as tourists slowly gathered. I remember smelling something sweet—maybe early morning taiyaki or roasted tea—and feeling like the whole street was waking up with us. At the top, breathless and slightly shivering, the view felt like being briefly let in on a secret.", time: "6:45", feelsLike: 86, date: "2023-09-01", color: "#ecc59c", image: "./images/kyototower.JPG", coords: { lat: "35.00° N", lon: "135.78° E" }, mapImage: "./images/kyototower-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: crisp morning", "Light: slow climb", "Steps: tourist shuffle", "Mood: gentle anticipation"] },

  { temp: 81, location: "Lam Watah Nature Trail", short: "Hot reset hike", long: "That Tahoe trail felt like walking through someone else’s screensaver. The sun was strong, bouncing off dry dirt and tall grass, but the mountain air had a cool edge if I stopped long enough. I’d been sad for days, that heavy, cloud-in-chest kind of sad, but here the path wound between pines and wildflowers, opening up to views that looked vaguely European. By the time we looped back to the car, sweat drying on my back, my thoughts felt lighter, like they’d been shaken out along the way.", time: "15:38", feelsLike: 86, date: "2019-08-15", color: "#ecc59c", image: "./images/tahoe.JPG", coords: { lat: "39.1° N", lon: "120.0° W" }, mapImage: "./images/tahoe-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: dry hillside heat", "Steps: slow climb", "Arms: loose and tired", "Mood: mind unknotted"] },

  { temp: 81, location: "Kamo River, Kyoto", short: "Capybara(?) sighting", long: "We were walking along the Kamo River after dinner, the sky just slipping into blue hour, lights reflecting in long ripples. Couples sat on the banks, friends biked by, the city humming softly around us. And then—casually—a capybara (?) waddled out like it was part of the nightlife. We all froze, unsure if we were hallucinating from travel fatigue. It lingered just long enough for us to laugh in disbelief. The warm night breeze, the river smell, the surreal creature—it all blurred into one oddly tender moment.", time: "19:21", feelsLike: 90, date: "2023-09-01", color: "#ecc59c", image: "./images/kyotocapy.JPG", coords: { lat: "35.01° N", lon: "135.77° E" }, mapImage: "./images/kyotocapy-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: night cool", "Steps: river stroll", "Sight: unexpected friend", "Mood: amused"] },

  { temp: 82, location: "Swan Lake, Shenzhen", short: "Feeding the ducks", long: "I grew up near a manmade lake where the ducks glided in like little boats. At first every quack scared me; I’d hide behind my mom’s legs while the bread bag crinkled in her hands. Eventually I learned they weren’t monsters, just hungry. I’d tug at her sleeve on bakery days, begging for an extra roll “for the ducks,” heart pounding as they waddled closer and snapped crumbs from my outstretched palm.", time: "13:47", feelsLike: 90, date: "2004-06-16", color: "#edc49a", image: "./images/ducks.JPG", coords: { lat: "22.5° N", lon: "113.9° E" }, mapImage: "./images/ducks-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: lake-warm", "Skin: shy goosebumps", "Hands: crumb-dusted", "Mind: learning bravery"] },

  { temp: 82, location: "OCT, Shenzhen", short: "Youngest calligraphy kid", long: "In the summer calligraphy class, I was the only five-year-old, feet dangling off the chair while everyone else looked like actual students. The room smelled like ink and hot dust. The teacher kept uncurling my fingers, correcting my grip on the brush, even as sweat slid down my back and tickled my neck. I wanted to hold it my way, but I kept trying again, filling sheet after sheet with shaky characters that slowly started to look intentional.", time: "14:05", feelsLike: 90, date: "2008-07-19", color: "#edc397", image: "./images/caligraphy.JPG", coords: { lat: "22.5° N", lon: "113.9° E" }, mapImage: "./images/caligraphy-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Heat: sticky summer", "Hands: ink-slick", "Posture: corrected constantly", "Mind: determined pout"] },

  { temp: 83, location: "Marina Bay", short: "Purple-film skyline", long: "Singapore in summer felt like walking into a steamed bathroom that never cooled down. The moment I stepped outside the hotel, sweat bloomed along my hairline. I spent most of the trip darting between malls and air-conditioned tunnels, popping out just long enough to shoot Marina Bay Sands on my purple film—this surreal ship balanced on glass towers. Ten minutes outside was enough to make my clothes cling, but the skyline looked so unreal it felt worth melting for, at least in short bursts.", time: "14:12", feelsLike: 91, date: "2022-09-02", color: "#eec294", image: "./images/mbs.JPG", coords: { lat: "1.28° N", lon: "103.86° E" }, mapImage: "./images/mbs-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: dense humidity", "Skin: constant shine", "Hands: film camera ready", "Mood: overstimulated but alive"] },

  { temp: 83, location: "East Coast Park, Singapore", short: "Chicken crosses road", long: "Running in Singapore’s summer humidity felt like breathing through a warm sponge. Within minutes my shirt clung to me, and the air tasted faintly metallic, like steam. I was halfway through the path when a chicken casually crossed in front of me, completely unbothered by my suffering. There were chickens everywhere—strutting, pecking, living their best lives. I slowed to a walk, drenched and wheezing, but laughing because now every time I think about running I’m reminded of that chicken and how effortlessly it moved through the heat that nearly defeated me.", time: "14:23", feelsLike: 91, date: "2023-07-06", color: "#efc192", image: "./images/sgchicken.JPG", coords: { lat: "1.29° N", lon: "103.92° E" }, mapImage: "./images/sgchicken-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: wet and heavy", "Pace: slow run", "Sight: stray chicken", "Mood: tired amusement"] },

  { temp: 84, location: "Lazarus Island, Singapore", short: "Sauna ocean ride", long: "On the boat to Lazarus Island I expected ocean wind to cool me down, but the air stayed warm and still, like the sea was exhaling a slow sigh. My grandpa fished off the side of the boat with practiced calm while I failed to catch anything except sunburn. The water shimmered in a way that made everything feel slightly unreal. Even out in open water it felt like a sauna, but watching my grandpa reel in a fish with a tiny proud smile made the heat feel less like a punishment.", time: "19:01", feelsLike: 90, date: "2023-08-13", color: "#efc08f", image: "./images/sgfish.JPG", coords: { lat: "1.23° N", lon: "103.86° E" }, mapImage: "./images/sgfish-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: warm sea", "Hair: wind tangled", "Boat: light sway", "Mood: drifting ease"] },

  { temp: 86, location: "Disneyland, Anaheim", short: "First Mickey hug", long: "My first Disneyland trip smelled like popcorn, asphalt, and sunscreen. I inched toward Mickey, half convinced he might actually talk to me. When he hugged me, the costume smelled like fresh laundry and plastic, which my brain translated as “magic.” Rollercoasters roared somewhere else in the park, safely out of my plans. I was happiest in the character lines, clutching my autograph book and posing like this was the only kind of thrill I’d ever need.", time: "12:51", feelsLike: 91, date: "2008-08-30", color: "#f0be8c", image: "./images/mickey.JPG", coords: { lat: "33.8° N", lon: "117.9° W" }, mapImage: "./images/mickey-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: soft and warm", "Arms: tight embrace", "Scent: clean costume fabric", "Mood: uncomplicated joy"] },

  { temp: 86, location: "Geylang, Singapore", short: "Thick-air fieldwork", long: "Geylang was a sensory overload in the best way—dense heat clinging to my arms, neon signs buzzing, the smell of frying garlic and fruit stands mixing into this chaotic perfume. I was there for a project, taking buses that felt like ovens between stops. Everything stuck to everything: my hair to my neck, my clothes to my back, my notebook pages to my palms. But the food was unreal, and the neighborhood felt alive in a way that made my exhaustion feel almost cinematic, like I was wandering through someone else’s heat-soaked dream.", time: "16:33", feelsLike: 92, date: "2023-07-24", color: "#f0bd8a", image: "./images/geylang.JPG", coords: { lat: "1.31° N", lon: "103.88° E" }, mapImage: "./images/geylang-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: loud humidity", "Skin: Sweaty & sticky", "Steps: bus to bus", "Mood: sensory overload"] },

  { temp: 92, location: "Universal Studios Hollywood", short: "Heatwave reride day", long: "That Universal Studios day felt like walking on a stovetop. The pavement shimmered, and even the shade felt sunburned. The only mercy came from the misting fans, which we treated like shrines—standing under them until our shirts were damp and our brains reset. Because the park was weirdly empty, we kept looping the same rides, counting how many times we could go without getting bored. By late afternoon I was sun-stunned and exhausted, but it lives in my head as one of the purest “we were so dumb and happy” days.", time: "13:12", feelsLike: 92, date: "2021-09-13", color: "#f1bc87", image: "./images/universal.JPG", coords: { lat: "34.14° N", lon: "118.35° W" }, mapImage: "./images/universal-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: hot then mist", "Skin: cooled quickly", "Steps: ride-loop tired", "Mood: chaotic delight"] },

  { temp: 95, location: "Coachella Music Festival", short: "Heatstroke + lemonade", long: "Coachella felt like walking straight into the sun. Heat radiated off the ground, my skin, even the people around me. After that overly salty teriyaki chicken I felt the world tilt a little, and suddenly every sound was muffled, like hearing through cotton. I sat in the shade trying not to faint until someone handed me a $17 lemonade, which tasted like actual salvation. Later, when the sunset lit the crowd in warm pinks, I felt my energy return just enough to laugh at how dramatic my body had been.", time: "13:47", feelsLike: 110, date: "2023-04-22", color: "#f2bb84", image: "./images/chella.JPG", coords: { lat: "33.68° N", lon: "116.24° W" }, mapImage: "./images/chella-map.png", source: "Open-Meteo + personal notes", bodyIndex: ["Air: overworked heat", "Taste: salt heavy", "Thirst: sudden rescue", "Mood: dizzy but laughing"] }
];
  
    const landing = document.getElementById('landing');
    const scrollView = document.getElementById('scroll-view');
    const enterBtn = document.getElementById('enter-btn');
    const scrollContainer = document.getElementById('scroll-container');
    const scrollInner = document.getElementById('scroll-inner');
    const tempToggleButtons = document.querySelectorAll('.temp-toggle__btn');

    const detailOverlay = document.getElementById('memory-detail-overlay');
    const detailCloseBtn = document.getElementById('detail-close-btn');
    const detailBg = document.getElementById('memory-detail-bg');
    const detailTemp = document.getElementById('detail-temp');
    const detailFeels = document.getElementById('detail-feels');
    const detailLocation = document.getElementById('detail-location');
    const detailTime = document.getElementById('detail-time');
    const detailText = document.getElementById('detail-text');
    const detailMeta = document.getElementById('detail-meta');
    const polaroidContainer = document.getElementById('polaroid-container');
    const bodyIndexEl = document.getElementById('body-index');
    const mapTile = document.getElementById('map-tile');
    const mapMeta = document.getElementById('map-meta');

    const archiveOverlay = document.getElementById('archive-overlay');
    const archiveOpenBtn = document.getElementById('archive-open-btn');
    const archiveCloseBtn = document.getElementById('archive-close-btn');
    const archiveGrid = document.getElementById('archive-grid');

    const aboutOverlay = document.getElementById('about-overlay');
    const aboutOpenBtn = document.getElementById('about-open-btn');
    const aboutCloseBtn = document.getElementById('about-close-btn');

const defaultBodyIndex = [
  'outerwear: light jacket',
  'humidity: 2/5',
  'feel: cool on skin',
  'mind: feels like home'
];

const fetchCache = new Map();

const normalizeTime = (value, fallback = '07:00') => {
  if (!value) return fallback;
  const hasDigits = /\d/.test(value);
  if (hasDigits) return value;
  const map = {
        'early morning': '06:30',
        morning: '07:30',
        'late morning': '10:30',
        midday: '12:00',
        afternoon: '15:00',
        evening: '18:30',
        night: '21:30',
        'late night': '23:00'
      };
      const key = value.toLowerCase().trim();
      return map[key] || fallback;
    };

    const buildPlaceholderBody = (index) => [
      `outerwear: layer ${index + 1}`,
      `humidity: ${(index % 5) + 1}/5`,
      `feel: placeholder ${index + 1}`,
      `mind: placeholder ${index + 1}`
    ];

    // Ensure every memory has full fields ready for real data
    const normalizedMemories = memories.map((memory, index) => {
      const placeholderBody = buildPlaceholderBody(index);
      return {
        image: '',
        mapImage: '',
        coords: { lat: '', lon: '' },
    source: '',
    bodyIndex: defaultBodyIndex,
    sound: '',
    ...memory,
    coords: memory.coords || { lat: '', lon: '' },
        bodyIndex: memory.bodyIndex || placeholderBody,
        source: memory.source || memory.location || '—',
        sound: memory.sound || '',
        color: memory.color || '',
        time: normalizeTime(memory.time, '07:00')
      };
    });

const tempRange = {
  min: Math.min(...normalizedMemories.map((m) => m.temp ?? 0)),
  max: Math.max(...normalizedMemories.map((m) => m.temp ?? 0))
};

let detailAudio = null;

    let currentMemory = null;
    let currentUnit = 'fahrenheit';
    let userHasScrolled = false;

    enterBtn.addEventListener('click', () => {
      landing.classList.add('exit');
      document.body.classList.add('entering');
      setTimeout(() => {
        landing.classList.add('hidden');
        scrollView.classList.remove('hidden');
        document.body.classList.remove('entering');
        centerFirst(true);
        setTimeout(() => centerFirst(true), 120);
        setTimeout(() => centerFirst(true), 300);
      }, 1700);
    });

    const sparkShapes = [
      'circle(50%)',
      'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      'polygon(50% 0%, 60% 25%, 85% 25%, 65% 45%, 75% 70%, 50% 55%, 25% 70%, 35% 45%, 15% 25%, 40% 25%)'
    ];
    const sparkColors = ['#fff6d9', '#ffe0b5', '#d8ecff', '#f7d1ff', '#c9f0d3'];
    let lastSparkTime = 0;

    landing.addEventListener('pointermove', (e) => {
      if (landing.classList.contains('exit')) return;
      const now = performance.now();
      if (now - lastSparkTime < 50) return;
      lastSparkTime = now;
      const spark = document.createElement('span');
      spark.className = 'cursor-spark';
      const size = Math.random() * 12 + 10;
      spark.style.setProperty('--spark-size', `${size}px`);
      spark.style.setProperty('--spark-color', sparkColors[Math.floor(Math.random() * sparkColors.length)]);
      spark.style.setProperty('--spark-rot', `${Math.random() * 120}deg`);
      spark.style.setProperty('--spark-shape', sparkShapes[Math.floor(Math.random() * sparkShapes.length)]);
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1500);
    });

    const gradientStart = '#d7e9f5';
    const gradientEnd = '#f3b97f';
    const tempColorStart = '#143150';
    const tempColorEnd = '#9a3a00';
    const polaroidTiltLimit = 7;
    function clamp01(value) {
      return Math.max(0, Math.min(1, value));
    }

    function convertTemp(valueF, unit = currentUnit) {
      return unit === 'fahrenheit' ? Math.round(valueF) : Math.round(((valueF - 32) * 5) / 9);
    }

    function getUnitSymbol(unit = currentUnit) {
      return unit === 'fahrenheit' ? '°F' : '°C';
    }

    function formatTemp(valueF, includeUnit = true) {
      const value = convertTemp(valueF);
      const suffix = includeUnit ? getUnitSymbol() : '°';
      return `${value}${suffix}`;
    }

    function updateTempElement(element) {
      const attr = element.getAttribute('data-temp-f');
      if (attr === null) return;
      const valueF = parseFloat(attr);
      if (Number.isNaN(valueF)) return;
      const showUnit = element.getAttribute('data-temp-show-unit') !== 'false';
      element.textContent = formatTemp(valueF, showUnit);
    }

    function setTempElement(element, valueF, options = {}) {
      element.setAttribute('data-temp-f', valueF);
      if (options.showUnit === false) {
        element.setAttribute('data-temp-show-unit', 'false');
      } else {
        element.removeAttribute('data-temp-show-unit');
      }
      updateTempElement(element);
    }

    function hexToRgb(hex) {
      let sanitized = hex.replace('#', '');
      if (sanitized.length === 3) {
        sanitized = sanitized.split('').map((char) => char + char).join('');
      }
      const num = parseInt(sanitized, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    }

    function hexToRgba(color, alpha = 1) {
      if (!color) return `rgba(0, 0, 0, ${alpha})`;
      if (color.startsWith('rgb')) {
        const parts = color.match(/[\d.]+/g) || [];
        const [r = 0, g = 0, b = 0] = parts.map(Number);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      const { r, g, b } = hexToRgb(color);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function refreshAllTemps() {
      document.querySelectorAll('[data-temp-f]').forEach(updateTempElement);
      if (currentMemory) {
        detailMeta.textContent = `Placeholder Data: ${currentMemory.location}, ${currentMemory.time}, ${formatTemp(
          currentMemory.temp
        )}`;
      }
    }

    tempToggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedUnit = button.dataset.unit;
        if (!selectedUnit || selectedUnit === currentUnit) return;
        currentUnit = selectedUnit;
        tempToggleButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
        refreshAllTemps();
      });
    });

    function mixColorChannels(startHex, endHex, progress) {
      const start = hexToRgb(startHex);
      const end = hexToRgb(endHex);
      const safeProgress = clamp01(progress);
      const interpolate = (channel) => Math.round(start[channel] + (end[channel] - start[channel]) * safeProgress);
      return { r: interpolate('r'), g: interpolate('g'), b: interpolate('b') };
    }

    function rgbToString({ r, g, b }) {
      return `rgb(${r}, ${g}, ${b})`;
    }

  function mixColors(startHex, endHex, progress) {
    return rgbToString(mixColorChannels(startHex, endHex, progress));
  }

  function getTempColor(progress) {
    return mixColors(tempColorStart, tempColorEnd, progress);
  }

  function tempToColor(valueF) {
    const { min, max } = tempRange;
    const span = max - min || 1;
    const prog = clamp01((valueF - min) / span);
    return mixColors(gradientStart, gradientEnd, prog);
  }

  function isUSCoords(lat, lon) {
    if (lat == null || lon == null) return false;
    return lat >= 18 && lat <= 72 && lon <= -50 && lon >= -170;
  }

  async function fetchJson(url) {
    const cached = fetchCache.get(url);
    if (cached) return cached;
    const p = fetch(url).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    });
    fetchCache.set(url, p);
    return p;
  }

  async function fetchOpenMeteoTemp(lat, lon, dateStr, timeStr) {
    const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${dateStr}&end_date=${dateStr}&hourly=temperature_2m&timezone=auto`;
    const data = await fetchJson(url);
    const times = data?.hourly?.time || [];
    const temps = data?.hourly?.temperature_2m || [];
    const target = `${dateStr}T${timeStr}`;
    const idx = times.indexOf(target);
    if (idx === -1) throw new Error('time not found in Open-Meteo');
    return temps[idx];
  }

  async function fetchNoaaTemp(lat, lon, dateStr, timeStr) {
    const pointsUrl = `https://api.weather.gov/points/${lat},${lon}`;
    const points = await fetchJson(pointsUrl);
    const stationsUrl = points?.properties?.observationStations;
    if (!stationsUrl) throw new Error('no stations url');
    const stationsList = await fetchJson(stationsUrl);
    const station = stationsList?.features?.[0]?.id;
    if (!station) throw new Error('no station found');
    const target = new Date(`${dateStr}T${timeStr}:00`);
    const start = new Date(target.getTime() - 60 * 60 * 1000).toISOString();
    const end = new Date(target.getTime() + 60 * 60 * 1000).toISOString();
    const obsUrl = `${station}/observations?start=${start}&end=${end}`;
    const obsData = await fetchJson(obsUrl);
    const feature = obsData?.features?.[0];
    const tempC = feature?.properties?.temperature?.value;
    if (tempC == null) throw new Error('no temp value');
    return (tempC * 9) / 5 + 32;
  }

  async function fetchTempForMemory(memory) {
    const lat = parseCoord(memory.coords?.lat);
    const lon = parseCoord(memory.coords?.lon);
    if (lat == null || lon == null || !memory.date || !memory.time) return null;
    try {
      if (isUSCoords(lat, lon)) {
        const val = await fetchNoaaTemp(lat, lon, memory.date, memory.time);
        memory.source = 'NOAA NWS (auto)';
        return val;
      }
      const val = await fetchOpenMeteoTemp(lat, lon, memory.date, memory.time);
      memory.source = 'Open-Meteo archive (auto)';
      return val;
    } catch (err) {
      console.warn('temp fetch failed', err);
      return null;
    }
  }

  function updateScrollTemp(memory) {
    const index = normalizedMemories.indexOf(memory);
    if (index === -1) return;
    const section = scrollInner.querySelector(`.memory-section[data-index=\"${index}\"] .memory-temp`);
    if (section) setTempElement(section, memory.temp);
  }

  async function hydrateTemps() {
    for (const memory of normalizedMemories) {
      if (memory.temp != null && memory.temp !== '') continue;
      const fetched = await fetchTempForMemory(memory);
      if (fetched == null) continue;
      memory.temp = fetched;
      memory.color = memory.color || tempToColor(fetched);
      updateScrollTemp(memory);
      refreshAllTemps();
    }
  }

    function parseCoord(coordStr) {
      if (!coordStr) return null;
      const match = coordStr.match(/(-?\d+(\.\d+)?)\s*°?\s*([NSEW])?/i);
      if (!match) return null;
      let val = parseFloat(match[1]);
      const dir = (match[3] || '').toUpperCase();
      if (dir === 'S' || dir === 'W') val = -Math.abs(val);
      if (dir === 'N' || dir === 'E') val = Math.abs(val);
      return val;
    }

    function buildMap(coords, color) {
      const lat = parseCoord(coords?.lat);
      const lon = parseCoord(coords?.lon);
      if (lat == null || lon == null || !mapTile || typeof L === 'undefined') return;
      mapTile.innerHTML = '';
      mapTile.style.background = color ? `linear-gradient(180deg, ${color}22, ${color}10)` : '';
      const mapId = `map-${Date.now()}`;
      const mapHost = document.createElement('div');
      mapHost.className = 'mini-map__inner';
      mapHost.id = mapId;
      mapTile.appendChild(mapHost);

      const map = L.map(mapId, {
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      }).setView([lat, lon], 10);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18
      }).addTo(map);

      const markerColor = color || '#444';
      L.circleMarker([lat, lon], {
        radius: 7,
        color: markerColor,
        weight: 2,
        fillColor: markerColor,
        fillOpacity: 0.9
      }).addTo(map);

      // Allow quick jump to Google Maps on double click
      map.on('dblclick', () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        window.open(url, '_blank', 'noopener');
      });

      setTimeout(() => { map.invalidateSize(); }, 50);
    }

    function getMemoryProgress(memory) {
      const index = normalizedMemories.indexOf(memory);
      if (index === -1) return 0;
      const maxIndex = Math.max(normalizedMemories.length - 1, 1);
      return index / maxIndex;
    }

    function updateScrollGradient(progress) {
      if (!scrollContainer) return;
      const clamped = clamp01(progress);
      const bottomColor = mixColors(gradientStart, gradientEnd, clamped);
      const midColor = mixColors(gradientStart, gradientEnd, Math.min(clamped + 0.2, 1));
      scrollContainer.style.background = `linear-gradient(180deg, ${gradientStart} 0%, ${midColor} 60%, ${bottomColor} 100%)`;
      const infoColor = mixColors('#1d283a', '#6a2a00', clamped);
      document.documentElement.style.setProperty('--info-color', infoColor);
    }

    function renderScrollSections() {
      const maxIndex = Math.max(normalizedMemories.length - 1, 1);
      normalizedMemories.forEach((memory, index) => {
        const progress = index / maxIndex;
        const section = document.createElement('div');
        section.className = 'memory-section';
        section.setAttribute('data-index', index);

        const container = document.createElement('div');

        const tempEl = document.createElement('div');
        tempEl.className = 'memory-temp';
        setTempElement(tempEl, memory.temp);
        tempEl.style.color = getTempColor(progress);

        const locEl = document.createElement('h3');
        locEl.className = 'memory-location';
        locEl.textContent = memory.location;

        const shortEl = document.createElement('p');
        shortEl.className = 'memory-short';
        shortEl.textContent = memory.short;

      container.appendChild(tempEl);
      container.appendChild(locEl);
      container.appendChild(shortEl);

      section.appendChild(container);
        section.addEventListener('click', () => openDetail(memory));

        scrollInner.appendChild(section);
      });
      handleScroll();
      centerFirst(true);
    }

    function centerFirst(force = false) {
      if (userHasScrolled && !force) return;
      const first = scrollInner.firstElementChild;
      if (!first) return;
      const containerWidth = scrollContainer.clientWidth;
      const firstWidth = first.getBoundingClientRect().width || first.offsetWidth;
      const pad = Math.max((containerWidth - firstWidth) / 2, 32);
      scrollInner.style.paddingLeft = `${pad}px`;
      scrollInner.style.paddingRight = `${pad}px`;
      scrollContainer.scrollLeft = 0;
    }

    function handleScroll(event) {
      if (event) userHasScrolled = true;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const progress = scrollLeft / (scrollWidth - clientWidth || 1);
      updateScrollGradient(progress);
    }
    scrollContainer.addEventListener('scroll', handleScroll);

    let wheelTarget = 0;
    let wheelRaf = null;

    function animateWheel() {
      const current = scrollContainer.scrollLeft;
      const diff = wheelTarget - current;
      if (Math.abs(diff) < 0.5) {
        scrollContainer.scrollLeft = wheelTarget;
        wheelRaf = null;
        handleScroll();
        return;
      }
      scrollContainer.scrollLeft = current + diff * 0.18;
      handleScroll();
      wheelRaf = requestAnimationFrame(animateWheel);
    }

    function handleWheel(e) {
      if (!scrollContainer || !scrollView || scrollView.classList.contains('hidden')) return;
      const overlayOpen = !detailOverlay.classList.contains('hidden') || !archiveOverlay.classList.contains('hidden') || !aboutOverlay.classList.contains('hidden');
      if (overlayOpen) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      if (!wheelRaf) wheelTarget = scrollContainer.scrollLeft;
      wheelTarget += delta;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      wheelTarget = Math.max(0, Math.min(maxScroll, wheelTarget));
      if (!wheelRaf) {
        wheelRaf = requestAnimationFrame(animateWheel);
      }
    }
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    function openDetail(memory) {
      if (detailAudio) {
        detailAudio.pause();
        detailAudio = null;
      }
      currentMemory = memory;
      const progress = getMemoryProgress(memory);

      setTempElement(detailTemp, memory.temp);
      if (detailFeels) {
        const feels = memory.feelsLike != null ? formatTemp(memory.feelsLike) : '';
        detailFeels.textContent = feels ? `feels like ${feels}` : '';
        detailFeels.style.display = feels ? 'block' : 'none';
      }
      detailLocation.textContent = memory.location;
      detailTime.textContent = memory.time || '';
      detailTemp.style.color = getTempColor(progress);
      detailText.textContent = memory.long;
      detailMeta.textContent = memory.source || `Placeholder Data: ${memory.location}, ${memory.time}, ${formatTemp(memory.temp)}`;

      const isLongText = (memory.long || '').length > 520;
      detailBg.classList.toggle('tight', isLongText);
      detailBg.scrollTop = 0;

      const accent = memory.color || tempToColor(memory.temp);
      const lightTone = mixColors(accent, '#ffffff', 0.18);
      const shadowTone = mixColors(accent, '#000000', 0.15);
      detailBg.style.background = `linear-gradient(135deg, ${lightTone} 0%, ${shadowTone} 100%)`;
      detailBg.style.setProperty('--overlay-color', `${accent}55`);

      if (bodyIndexEl) {
        bodyIndexEl.innerHTML = '';
        const chips = memory.bodyIndex || [
          'outerwear: light jacket',
          'humidity: 2/5',
          'feel: cool on skin',
          'mind: feels like home / disoriented / jetlag'
        ];
        chips.forEach(text => {
          const chip = document.createElement('div');
          chip.className = 'body-chip';
          chip.textContent = text;
          bodyIndexEl.appendChild(chip);
        });
      }

      if (mapTile && mapMeta) {
        mapMeta.innerHTML = '';
        const coords = memory.coords || { lat: '—', lon: '—' };
        mapTile.innerHTML = '';
        buildMap(coords, accent);
        mapMeta.innerHTML = `
          <div>${coords.lat || '—'} · ${coords.lon || '—'}</div>
        `;
      }

      polaroidContainer.innerHTML = '';
      const tilt = ((memory.temp * 13) % (polaroidTiltLimit * 2)) - polaroidTiltLimit;

      const polaroid = document.createElement('div');
      polaroid.className = 'polaroid';
      polaroid.style.transform = `rotate(${tilt}deg)`;

      const inner = document.createElement('div');
      inner.className = 'polaroid-inner';

      const img = document.createElement('div');
      img.className = 'polaroid-img';
      img.style.position = 'relative';
      img.style.setProperty('--polaroid-ratio', '4 / 3');

      const photo = document.createElement('div');
      photo.style.width = '100%';
      photo.style.height = '100%';
      photo.style.background = memory.image
        ? `url('${memory.image}') center/cover no-repeat`
        : '#fff';
      photo.style.filter = 'none';
      photo.style.opacity = '1';
      photo.style.mixBlendMode = 'normal';

      const overlay = document.createElement('canvas');
      const setOverlaySize = (ratio = 1.5) => {
        const baseWidth = 760;
        const height = Math.max(360, Math.min(520, baseWidth / ratio));
        overlay.width = Math.round(baseWidth);
        overlay.height = Math.round(height);
        overlay.style.aspectRatio = `${overlay.width}/${overlay.height}`;
      };
      setOverlaySize();
      overlay.style.position = 'absolute';
      overlay.style.inset = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.pointerEvents = 'auto';
      overlay.style.cursor = 'crosshair';

      const hint = document.createElement('div');
      hint.textContent = 'Erase to reveal';
      hint.style.position = 'absolute';
      hint.style.top = '12px';
      hint.style.right = '12px';
      hint.style.padding = '6px 10px';
      hint.style.borderRadius = '10px';
      hint.style.background = 'rgba(94, 90, 84, 0.85)';
      hint.style.color = '#fff';
      hint.style.fontFamily = 'var(--mono)';
      hint.style.fontSize = '0.78rem';
      hint.style.letterSpacing = '0.08em';
      hint.style.textTransform = 'uppercase';
      hint.style.opacity = '0.9';
      hint.style.pointerEvents = 'none';

      img.appendChild(photo);
      img.appendChild(overlay);
      img.appendChild(hint);

      const overlayColor = hexToRgba(accent, 0.9);
      const ctx = overlay.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const brushSize = 34;
      let lastPoint = null;
      const fillOverlay = () => {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = overlayColor;
        ctx.fillRect(0, 0, overlay.width, overlay.height);
      };
      fillOverlay();
      if (memory.image) {
        const loader = new Image();
        loader.onload = () => {
          const ratio = loader.naturalWidth && loader.naturalHeight ? loader.naturalWidth / loader.naturalHeight : 1.5;
          img.style.setProperty('--polaroid-ratio', `${loader.naturalWidth}/${loader.naturalHeight}`);
          setOverlaySize(ratio);
          fillOverlay();
        };
        loader.src = memory.image;
      }

      let isDrawing = false;
      const getPos = (e) => {
        const rect = overlay.getBoundingClientRect();
        const x = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) * (overlay.width / rect.width);
        const y = ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) * (overlay.height / rect.height);
        return { x, y };
      };
      const erase = (e) => {
        const { x, y } = getPos(e);
        ctx.globalCompositeOperation = 'destination-out';
        if (!lastPoint) {
          lastPoint = { x, y };
          ctx.beginPath();
          ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
          ctx.fill();
          return;
        }
        ctx.strokeStyle = '#000';
        ctx.lineWidth = brushSize;
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastPoint = { x, y };
      };
      const hideHint = () => {
        hint.style.opacity = '0';
        setTimeout(() => { hint.style.display = 'none'; }, 250);
      };

      const startReveal = (e) => {
        isDrawing = true;
        lastPoint = null;
        hideHint();
        erase(e);
      };
      overlay.addEventListener('pointerenter', startReveal);
      overlay.addEventListener('pointermove', (e) => {
        if (!isDrawing) startReveal(e);
        else erase(e);
      });
      const stopReveal = () => { isDrawing = false; lastPoint = null; };
      overlay.addEventListener('pointerleave', stopReveal);
      overlay.addEventListener('touchstart', startReveal, { passive: true });
      overlay.addEventListener('touchmove', erase, { passive: true });
      overlay.addEventListener('touchend', stopReveal, { passive: true });

      const caption = document.createElement('div');
      caption.className = 'polaroid-caption';
      caption.textContent = memory.location.split('location')[0].trim() || memory.location;

      inner.appendChild(img);
      polaroid.appendChild(inner);
      polaroidContainer.appendChild(polaroid);

      if (memory.sound) {
        detailAudio = new Audio(memory.sound);
        detailAudio.loop = true;
        detailAudio.volume = 0.6;
        detailAudio.play().catch(() => {});
      }

      detailOverlay.classList.remove('hidden');

      const applyAutoClamp = () => {
        if (!detailBg) return;
        detailBg.classList.remove('compact-photo');
        const hasOverflow = detailBg.scrollHeight - 6 > detailBg.clientHeight;
        if (hasOverflow) {
          detailBg.classList.add('compact-photo');
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(applyAutoClamp));
    }

    detailCloseBtn.addEventListener('click', () => {
      detailOverlay.classList.add('hidden');
      detailBg.classList.remove('compact-photo');
      polaroidContainer.innerHTML = '';
      if (mapTile) {
        mapTile.innerHTML = '';
        mapTile.id = 'map-tile';
      }
      currentMemory = null;
      if (detailAudio) {
        detailAudio.pause();
        detailAudio = null;
      }
    });

    function renderArchive() {
      archiveGrid.innerHTML = '';
      normalizedMemories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        card.style.background = memory.color || tempToColor(memory.temp);

        const temp = document.createElement('div');
        temp.className = 'archive-temp';
        setTempElement(temp, memory.temp, { showUnit: false });

        const hover = document.createElement('div');
        hover.className = 'archive-hover';

        const hoverText = document.createElement('div');
        hoverText.className = 'archive-hover-text';

        const loc = document.createElement('div');
        loc.textContent = memory.location;

        hoverText.appendChild(loc);
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

    window.addEventListener('resize', handleScroll);
    window.addEventListener('resize', centerFirst);
    window.addEventListener('resize', () => {
      if (!detailOverlay.classList.contains('hidden') && currentMemory) {
        const hasOverflow = detailBg.scrollHeight - 6 > detailBg.clientHeight;
        detailBg.classList.toggle('compact-photo', hasOverflow);
      }
    });

    // Initial render
    renderScrollSections();
    refreshAllTemps();
    updateScrollGradient(0);
    hydrateTemps();
