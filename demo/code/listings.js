/* ShpiDitore — njoftime SHEMBULL (demo: true).
   Demo-njoftimet S'KANË numër telefoni (phone: null) — kontakti vjen nga pronari real.
   Kurrë mos shpik numra telefoni këtu. */
export const CITIES = [
  { id: 'tirane', name: 'Tiranë', tagline: 'Kryeqyteti plot jetë', icon: '🏛️' },
  { id: 'durres', name: 'Durrës', tagline: 'Deti 30 minuta larg', icon: '🌊' },
  { id: 'elbasan', name: 'Elbasan', tagline: 'Qetësi mes historisë', icon: '🏰' },
];

export const AMENITIES = [
  { id: 'wifi', label: 'WiFi' },
  { id: 'ac', label: 'Kondicioner' },
  { id: 'parking', label: 'Parking' },
  { id: 'kuzhine', label: 'Kuzhinë' },
  { id: 'lavatrice', label: 'Lavatriçe' },
  { id: 'ballkon', label: 'Ballkon' },
  { id: 'tv', label: 'TV' },
  { id: 'deti', label: 'Pamje deti' },
];

export const TYPES = [
  { id: 'garsoniere', label: 'Garsoniere' },
  { id: '1+1', label: '1+1' },
  { id: '2+1', label: '2+1' },
];

export const DEMO_LISTINGS = [
  // ——— TIRANË ———
  {
    id: 'demo-tr-1', demo: true, city: 'tirane', neighborhood: 'Bllok',
    type: '1+1', bedrooms: 1, price: 4500, phone: null,
    title: 'Apartament 1+1 në zemër të Bllokut',
    description: 'Apartament komod e i mobiluar plotësisht, 2 minuta nga qendra e Bllokut. Ideal për çifte ose udhëtarë pune — i qetë, i pastër, me dritë natyrale gjithë ditën.',
    amenities: ['wifi', 'ac', 'kuzhine', 'lavatrice', 'tv'], guests: 3,
  },
  {
    id: 'demo-tr-2', demo: true, city: 'tirane', neighborhood: 'Kombinat',
    type: 'garsoniere', bedrooms: 1, price: 2500, phone: null,
    title: 'Garsoniere ekonomike te Kombinati',
    description: 'Zgjidhje e përkryer me buxhet: garsoniere e vogël por funksionale, pranë stacionit të autobusit. Çmimi më i mirë në Tiranë për qëndrim ditor.',
    amenities: ['wifi', 'kuzhine', 'tv'], guests: 2,
  },
  {
    id: 'demo-tr-3', demo: true, city: 'tirane', neighborhood: 'Astir',
    type: '2+1', bedrooms: 2, price: 5000, phone: null,
    title: 'Apartament 2+1 familjar në Astir',
    description: 'Hapësirë e madhe për familje deri në 5 persona. Dy dhoma gjumi, kuzhinë e pajisur, ballkon me pamje. Parking i lirë përpara pallatit.',
    amenities: ['wifi', 'ac', 'parking', 'kuzhine', 'lavatrice', 'ballkon', 'tv'], guests: 5,
  },
  {
    id: 'demo-tr-4', demo: true, city: 'tirane', neighborhood: '21 Dhjetori',
    type: '1+1', bedrooms: 1, price: 3500, phone: null,
    title: '1+1 i rinovuar te 21 Dhjetori',
    description: 'I rinovuar së fundmi me mobilje moderne. 10 minuta në këmbë nga Sheshi Skënderbej. Lagje e gjallë me kafene e dyqane poshtë pallatit.',
    amenities: ['wifi', 'ac', 'kuzhine', 'ballkon', 'tv'], guests: 3,
  },
  // ——— DURRËS ———
  {
    id: 'demo-dr-1', demo: true, city: 'durres', neighborhood: 'Plazh',
    type: '1+1', bedrooms: 1, price: 4000, phone: null,
    title: 'Apartament 1+1, 50m nga deti',
    description: 'Zgjohu me zërin e dallgëve! Apartament i ndritshëm në vijë të parë të plazhit, me ballkon me pamje deti. Vera këtu është magji.',
    amenities: ['wifi', 'ac', 'kuzhine', 'ballkon', 'deti', 'tv'], guests: 4,
  },
  {
    id: 'demo-dr-2', demo: true, city: 'durres', neighborhood: 'Currila',
    type: 'garsoniere', bedrooms: 1, price: 3000, phone: null,
    title: 'Garsoniere buzë detit në Currila',
    description: 'E vogël, e ëmbël, buzë detit. Currila është lagjja më e qetë e Durrësit për pushime — plazh i pastër dhe perëndime përrallore.',
    amenities: ['wifi', 'ac', 'deti', 'tv'], guests: 2,
  },
  {
    id: 'demo-dr-3', demo: true, city: 'durres', neighborhood: 'Qendër',
    type: '2+1', bedrooms: 2, price: 5000, phone: null,
    title: 'Apartament 2+1 në qendër të Durrësit',
    description: 'Për ata që duan qytetin: pranë shëtitores "Taulantia", restoranteve dhe jetës së natës. Apartament i gjerë, ideal për grupe miqsh.',
    amenities: ['wifi', 'ac', 'parking', 'kuzhine', 'lavatrice', 'tv'], guests: 5,
  },
  {
    id: 'demo-dr-4', demo: true, city: 'durres', neighborhood: 'Shkëmbi i Kavajës',
    type: '1+1', bedrooms: 1, price: 2500, phone: null,
    title: '1+1 ekonomik te Shkëmbi i Kavajës',
    description: 'Çmimi më i mirë buzë detit! Apartament i thjeshtë e i pastër, 5 minuta nga plazhi i Shkëmbit të Kavajës. Perfekt për pushime me buxhet.',
    amenities: ['wifi', 'kuzhine', 'ballkon', 'tv'], guests: 3,
  },
  // ——— ELBASAN ———
  {
    id: 'demo-el-1', demo: true, city: 'elbasan', neighborhood: 'Qendër',
    type: '1+1', bedrooms: 1, price: 3000, phone: null,
    title: 'Apartament 1+1 në qendër të Elbasanit',
    description: 'Në zemër të qytetit të kalasë — pranë Rrapit të Bezistanit dhe restoranteve tradicionale. I qetë, i pastër, me mikpritje elbasanase.',
    amenities: ['wifi', 'ac', 'kuzhine', 'tv'], guests: 3,
  },
  {
    id: 'demo-el-2', demo: true, city: 'elbasan', neighborhood: 'Lagja Partizani',
    type: 'garsoniere', bedrooms: 1, price: 1500, phone: null,
    title: 'Garsoniere 1500 lekë — çmimi më i ulët',
    description: 'Po, e lexove mirë: 1500 lekë nata! Garsoniere e thjeshtë por e rregullt, për udhëtarë që kalojnë ose studentë. Elbasani të pret lirë.',
    amenities: ['wifi', 'tv'], guests: 2,
  },
  {
    id: 'demo-el-3', demo: true, city: 'elbasan', neighborhood: 'Rruga e Re',
    type: '2+1', bedrooms: 2, price: 4500, phone: null,
    title: 'Shtëpi 2+1 me oborr në Elbasan',
    description: 'Për familje që duan hapësirë: shtëpi me oborr të gjelbër, ku fëmijët luajnë të sigurt. Mëngjesi nën hijen e fikut — përvojë elbasanase e vërtetë.',
    amenities: ['wifi', 'parking', 'kuzhine', 'lavatrice', 'ballkon', 'tv'], guests: 6,
  },
  {
    id: 'demo-el-4', demo: true, city: 'elbasan', neighborhood: 'Kala',
    type: '1+1', bedrooms: 1, price: 3500, phone: null,
    title: 'Apartament brenda Kalasë së Elbasanit',
    description: 'Fli brenda mureve 2000-vjeçare! Apartament me karakter në lagjen Kala, mes gurëve të historisë. Përvojë që s’e gjen askund tjetër.',
    amenities: ['wifi', 'ac', 'kuzhine', 'tv'], guests: 3,
  },
];

export const cityName = (id) => (CITIES.find((c) => c.id === id) || {}).name || id;
export const amenityLabel = (id) => (AMENITIES.find((a) => a.id === id) || {}).label || id;
export const typeLabel = (id) => (TYPES.find((t) => t.id === id) || {}).label || id;
