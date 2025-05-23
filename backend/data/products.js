const products = [
  {
    name: 'Destined Rivals Booster Box',
    image: '/images/destined_rivals.jpg',
    description:
      'Whose Side Are You On? Pokémon Trainers, be on high alert! The nefarious Team Rocket is setting its latest plan into motion, and heroic Trainers are racing to stop it. Join forces with the likes of Cynthia and Garchomp ex, Ethan and Ho-Oh ex, or Arven and Mabosstiff ex… Or reconsider your loyalties and fight alongside Team Rocket’s Pokémon like Mewtwo ex—under the command of Giovanni! Choose a side, assemble your allies, and battle boldly in the Pokémon TCG: Scarlet & Violet—Destined Rivals expansion! Includes 36 Pokémon TCG: Scarlet & Violet—Destined Rivals booster packs Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 249.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Journey Together Booster Box',
    image: '/images/journey_together.jpg',
    description:
      "Trainer’s Pokémon Break into Battle! With deep trust and steady guidance, Trainers help bring out the best in their Pokémon. The bond they share empowers them to act as one in battle as they push their strength to the limit, including as Pokémon ex! Team up with N’s Zoroark ex, Iono’s Bellibolt ex, Lillie’s Clefairy ex, Hop’s Zacian ex, and more Trainer's Pokémon, and discover the unstoppable power of friendship in the Pokémon TCG: Scarlet & Violet—Journey Together expansion! In this box, you'll receive: 36 Pokémon TCG: Scarlet & Violet—Journey Together booster packs. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack. 1 bonus illustration rare-style promo card featuring N's Reshiram.",
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 199.99,
    countInStock: 7,
    rating: 4,
    numReviews: 6,
  },
  {
    name: 'Prismatic Evolutions Booster Bundle',
    image: '/images/prismatic_evo_booster_bundle.jpg',
    description:
      'Eevee & Friends Light Up with Stellar Colors! From fluffy and fiery to freezing and fanciful, Eevee and its many Evolutions hold a special place in the hearts of Pokémon Trainers across the land! Discover their unique new powers as Stellar Tera Pokémon ex, and look for treasure of your very own across a grand gathering of Pokémon ex from Paldea and beyond. Glittering gems and hidden patterns await at the end of the rainbow in the Pokémon TCG: Scarlet & Violet—Prismatic Evolutions expansion! Includes six booster packs from the Pokémon TCG: Scarlet & Violet—Prismatic Evolutions expansion. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 69.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: 'Prismatic Evolutions Pokémon Center Elite Trainer Box',
    image: '/images/prismatic_evo_pkmc_etb.jpg',
    description:
      'Eevee & Friends Light Up with Stellar Colors! From fluffy and fiery to freezing and fanciful, Eevee and its many Evolutions hold a special place in the hearts of Pokémon Trainers across the land! Discover their unique new powers as Stellar Tera Pokémon ex, and look for treasure of your very own across a grand gathering of Pokémon ex from Paldea and beyond. Glittering gems and hidden patterns await at the end of the rainbow in the Pokémon TCG: Scarlet & Violet—Prismatic Evolutions expansion! The Pokémon TCG: Scarlet & Violet—Prismatic Evolutions Pokémon Center Elite Trainer Box includes: 11 Pokémon TCG: Scarlet & Violet—Prismatic Evolutions booster packs (Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.), 1 full-art foil promo card featuring Eevee with a Pokémon Center logo, 1 full-art foil promo card featuring Eevee, 65 card sleeves featuring Eevee as a Stellar Tera Pokémon, 45 Pokémon TCG Energy cards, A player’s guide to the Scarlet & Violet—Prismatic Evolutions expansion, 6 damage-counter dice,1 competition-legal coin-flip die, 2 plastic condition markers,A box to hold everything, with 4 dividers to keep it organized, A code card for Pokémon Trading Card Game Live',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 269.99,
    countInStock: 0,
    rating: 4,
    numReviews: 9,
  },
  {
    name: 'Surging Sparks Booster Box',
    image: '/images/surging_sparks.jpg',
    description:
      'A Growing Storm of Stellar Strength! Terawatts of electricity crash down from the sky in a tropical paradise, setting the stage for the supercharged Pikachu ex! With the power of a Stellar Tera Pokémon ex, it lights up the shoreline, revealing a parade of dragon Pokémon led by the towering Alolan Exeggutor ex! Archaludon ex and Latias ex round out the horde, while new ACE SPEC cards and more new Pokémon ex bring surprises of their own. Currents crackle and Dragon types roar in the Pokémon TCG: Scarlet & Violet—Surging Sparks expansion! Includes 36 Pokémon TCG: Scarlet & Violet—Surging Sparks booster packs. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 229.99,
    countInStock: 7,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Scarlet & Violet-151 Booster Bundle',
    image: '/images/151_booster_bundle.jpg',
    description:
      'Gotta Catch ’Em All! Team up with Bulbasaur, Charmander, and Squirtle, and witness a brand-new dawn in Kanto! With this new day comes a new chance to track down old friends, make new pals, and capture every last one of the original 151. Discover the extraordinary Venusaur ex, Charizard ex, and Blastoise ex in special cards with captivating illustrations, and explore the cities and countryside of a reinvigorated land—you might even find the elusive Mew ex in your travels. New adventures will unfold and new horizons will be revealed in the Scarlet & Violet—151 expansion! Includes six booster packs from Pokémon TCG: Scarlet & Violet—151. Each booster pack contains 10 cards and 1 Basic Energy.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 69.99,
    countInStock: 23,
    rating: 5,
    numReviews: 18,
  },
  {
    name: 'Scarlet & Violet-151 Pokémon Center Elite Trainer Box',
    image: '/images/151_pkmc_etb.jpg',
    description:
      'Team up with Bulbasaur, Charmander, and Squirtle, and witness a brand-new dawn in Kanto! With this new day comes a new chance to track down old friends, make new partners, and capture every last one of the original 151. Discover the extraordinary Venusaur ex, Charizard ex, and Blastoise ex in special cards with captivating illustrations, and explore the cities and countryside of a reinvigorated land—you might even find the elusive Mew ex in your travels. New adventures will unfold and new horizons will be revealed in the Scarlet & Violet—151 expansion! The Pokémon TCG: Scarlet & Violet—151 Pokémon Center Elite Trainer Box includes: 11 Pokémon TCG: Scarlet & Violet—151 booster packs (Each booster pack contains 10 cards and 1 Basic Energy.), 1 full-art foil promo card featuring Snorlax with a Pokémon Center logo, 1 full-art foil promo card featuring Snorlax, 65 card sleeves, 45 Pokémon TCG Energy cards, A player’s guide to the Scarlet & Violet—151 expansion, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, A box to hold everything, with 4 dividers to keep it organized, A code card for Pokémon Trading Card Game Live',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 449.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 8,
  },
  {
    name: 'Twilight Masquerade Booster Box',
    image: '/images/twilight_masquerade.jpg',
    description:
      'A Festival of Mischief & Mystery! Welcome to the land of Kitakami, where people and Pokémon live harmoniously with nature. Folktales abound, but not all is as it seems... Uncover the mystery of the masked Legendary Pokémon Ogerpon, appearing as four fearsome types of Tera Pokémon ex, and team up with more newly discovered Pokémon, like Bloodmoon Ursaluna ex and Sinistcha ex. Growing in power, Greninja, Dragapult, and Magcargo dazzle as Tera Pokémon ex, and more ACE SPEC cards round out the festivities in the Pokémon TCG: Scarlet & Violet—Twilight Masquerade expansion! Includes 36 Pokémon TCG: Scarlet & Violet—Twilight Masquerade booster packs. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 209.99,
    countInStock: 13,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Paldean Fates Booster Bundle',
    image: '/images/paldean_fates_booster_bundle.jpg',
    description:
      'Shine Bright with Pokémon from Paldea! The spotlight glistens on Shiny Pokémon making their fated return to the Pokémon TCG! Shiny Pikachu blazes the path forward as Tinkaton, Ceruledge, Dondozo, and more than 100 other Shiny Pokémon follow. Meanwhile, Great Tusk and Iron Treads appear as Ancient and Future Pokémon ex, and Charizard, Forretress, and Espathra show off their own unique skills as Shiny Tera Pokémon ex. Shed some light and discover sparkling wonders in the Scarlet & Violet—Paldean Fates expansion! Expand your collection with this Booster Bundle containing six booster packs from Pokémon TCG: Scarlet & Violet—Paldean Fates! Includes six booster packs from the Pokémon TCG: Scarlet & Violet—Paldean Fates expansion. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 57.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 9,
  },
  {
    name: 'Paldean Fates Pokémon Center Elite Trainer Box',
    image: '/images/paldean_fates_pkmc_etb.jpg',
    description:
      'Shine Bright with Pokémon from Paldea! The spotlight glistens on Shiny Pokémon making their fated return to the Pokémon TCG! Shiny Pikachu blazes the path forward as Tinkaton, Ceruledge, Dondozo, and more than 100 other Shiny Pokémon follow. Meanwhile, Great Tusk and Iron Treads appear as Ancient and Future Pokémon ex, and Charizard, Forretress, and Espathra show off their own unique skills as Shiny Tera Pokémon ex. Shed some light and discover sparkling wonders in the Scarlet & Violet—Paldean Fates expansion! The Pokémon TCG: Scarlet & Violet—Paldean Fates Pokémon Center Elite Trainer Box includes: 11 Pokémon TCG: Scarlet & Violet—Paldean Fates booster packs (Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.), 1 full-art foil promo card featuring Shiny Mimikyu with a Pokémon Center logo, 1 full-art foil promo card featuring Shiny Mimikyu, 65 card sleeves featuring Shiny Mimikyu, 45 Pokémon TCG Energy cards, A player’s guide to the Scarlet & Violet—Paldean Fates expansion, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, A box to hold everything, with 4 dividers to keep it organized, A code card for Pokémon Trading Card Game Live',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 219.99,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Obsidian Flames Booster Box',
    image: '/images/obsidian_flames.jpg',
    description:
      'Raging Flames Forged in Darkness! Red-hot embers illuminate the pitch-black night and sparks flare into an inferno as Charizard ex surges forth with newfound powers of darkness! The glittering Terastal phenomenon imbues some Pokémon ex like Tyranitar, Eiscue, and Vespiquen with different types than usual, while Dragonite ex and Greedent ex show mastery of their own inner strengths. Not to be outdone, Revavroom ex, Melmetal ex, and more Pokémon promise to change the course of battle in the Scarlet & Violet—Obsidian Flames expansion! Includes 36 booster packs from the Pokémon TCG: Scarlet & Violet—Obsidian Flames expansion. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 204.99,
    countInStock: 12,
    rating: 3.5,
    numReviews: 7,
  },
  {
    name: 'Paradox Rift Booster Box',
    image: '/images/paradox_rift.jpg',
    description:
      'Uncover the Anomalies of Area Zero! Dive into the clouds and explore a land that appears to be unbound by time! With ferocious attacks, Ancient Pokémon like Roaring Moon ex and Sandy Shocks ex appear alongside artificial Future Pokémon like Iron Valiant ex and Iron Hands ex. Meanwhile, Garchomp ex, Mewtwo ex, and others Terastallize to gain new types, as Armarouge ex, Gholdengo ex, and more Pokémon ex join the fray. Adventure awaits as timelines collide in the Pokémon TCG: Scarlet & Violet—Paradox Rift expansion! Includes 36 Pokémon TCG: Scarlet & Violet—Paradox Rift booster packs. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 184.99,
    countInStock: 14,
    rating: 3,
    numReviews: 1,
  },
  {
    name: 'Temporal Forces Booster Box',
    image: '/images/temporal_forces.jpg',
    description:
      'Ancient & Future Powers Endure! The ranks of Ancient and Future Pokémon continue to grow! Walking Wake ex breaks free of the past alongside Raging Bolt ex, while Iron Leaves ex delivers high-tech justice with Iron Crown ex. Outside Area Zero, Wugtrio and Farigiraf shift types as Tera Pokémon ex, and Pokémon Trainers everywhere prepare for the return of ACE SPEC cards with uniquely powerful effects. A rupture in time brings wild beasts and cyber visions to battle in the Pokémon TCG: Scarlet & Violet—Temporal Forces expansion! Includes 36 Pokémon TCG: Scarlet & Violet—Temporal Forces booster packs. Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 184.99,
    countInStock: 17,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Evolving Skies Booster Box',
    image: '/images/evolving_skies.jpg',
    description:
      'Dynamic Power on the Horizon! Feel the power of the shifting winds, and brace for an epic storm as mighty Dragon-type Pokémon make their triumphant return! Rayquaza VMAX leads the surge from on high, and Duraludon VMAX towers above the land in its Gigantamax form, joined by Dragonite V, Noivern V, and more. As the clouds part, Eevee’s Evolutions appear in a full rainbow of Pokémon V and Pokémon VMAX to signal a bright new day in Pokémon TCG: Sword & Shield—Evolving Skies! Includes 36 Pokémon TCG: Sword & Shield—Evolving Skies booster packs. Each booster pack contains 10 cards and 1 basic Energy',
    brand: 'Pokémon',
    category: 'Trading Cards',
    price: 1999.99,
    countInStock: 2,
    rating: 5,
    numReviews: 5,
  },
];

export default products;
