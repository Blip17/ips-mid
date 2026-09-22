import { TopicData } from '../../types/topics';

export const topicsOtoU: TopicData[] = [
  {
    id: 'O',
    code: 'O',
    title: 'BANGSA/RAS YANG DATANG KE NUSANTARA DAN BUDAYA YANG DIBAWA',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Tabel komprehensif gelombang bangsa/ras yang masuk ke Nusantara, asal, jalur, periode, persebaran, dan budaya yang dibawa.',
        'Urutan: Negrito → Melanesoid → Proto Melayu → Deutro Melayu → Bangsa Pendatang Aksara (India, Arab, Tionghoa, Eropa).'
      ],
      fromSupplemental: [
        'Buku Sejarah Kebudayaan Indonesia Vol 1-3 (Kemendikbudristek).',
        'Ensiklopedi Suku Bangsa di Indonesia (LIP / BRIN).'
      ]
    },
    masteryObjectives: [
      'Menyebutkan kronologi gelombang kedatangan bangsa/ras ke Nusantara.',
      'Membandingkan asal-usul, jalur migrasi, periode, dan wilayah persebaran setiap ras.',
      'Mengidentifikasi teknologi dan hasil kebudayaan bawaan dari masing-masing gelombang kedatangan.'
    ],
    fullContent: `Kepulauan Nusantara merupakan tempat perjumpaan dan pembauran berbagai gelombang ras dan kebudayaan sepanjang ribuan tahun.

Kronologi Gelombang Kedatangan:
1. Ras Negrito (± 10.000 SM):
   - Asal: Asia Selatan/Tenggara Daratan via Paparan Sunda.
   - Hasil Budaya: Alat batu kasar, *Food Gathering*, *Abris Sous Roche*.
2. Ras Melanesoid (± 7.000 - 5.000 SM):
   - Asal: Indochina (Teluk Tonkin).
   - Hasil Budaya: Bacson-Hoabinh, *Pebble* (Kapak Genggam Sumatra), *Kjokkenmoddinger*.
3. Proto Melayu / Melayu Tua (± 1.500 SM):
   - Asal: Yunnan (Cina Selatan).
   - Hasil Budaya: Neolitikum, Kapak Persegi (Jalur Barat), Kapak Lonjong (Jalur Timur).
4. Deutro Melayu / Melayu Muda (± 500 SM):
   - Asal: Indochina / Dongson (Vietnam Utara).
   - Hasil Budaya: Perunggu (Nekara, Moko, Cendrasa), besi, perahu cadik.
5. Bangsa Pendatang Peradaban Aksara (Abad 1 M - Modern):
   - India: Bahasa Sanskerta, Huruf Pallawa, Agama Hindu-Buddha, candi, sistem kerajaan.
   - Tionghoa: Keramik, sutra, kuliner (tahu, bakmi), kembang api, arsitektur klenteng.
   - Arab/Gujarat: Tulisan Arab, agama Islam, sistem kesultanan, seni pemikiran.
   - Eropa: Bahasa resapan, hukum kolonial, agama Kristen, arsitektur benteng.`,
    corePoints: [
      'Negrito (10rb SM): Berburu meramu, batu kasar.',
      'Melanesoid (7rb SM): Bacson-Hoabinh, Pebble, Sampah kerang.',
      'Proto Melayu (1.500 SM): Neolitikum, Kapak Persegi & Lonjong.',
      'Deutro Melayu (500 SM): Kebudayaan Logam Dongson perunggu/besi.',
      'Pendatang Asing: India (Hindu/Buddha), Arab (Islam), Tionghoa (Dagang/Kuliner), Eropa (Kristen/Hukum).'
    ],
    keywords: ['Negrito', 'Melanesoid', 'Proto Melayu', 'Deutro Melayu', 'Dongson', 'Pebble', 'Kapak Persegi'],
    causeProcessEffect: {
      cause: 'Dorongan migrasi alamiah, perdagangan internasional, dan penyebaran agama dunia.',
      process: 'Gelombang demi gelombang masuk melintasi daratan dan maritim Nusantara.',
      effect: 'Membentuk landasan kemajemukan etnis dan akulturasi budaya Indonesia yang sangat kaya.'
    },
    threeSentences: [
      'Nusantara dihuni oleh berbagai gelombang migrasi mulai dari Ras Negrito, Melanesoid, Proto Melayu, hingga Deutro Melayu.',
      'Proto Melayu membawa budaya Neolitikum kapak batu halus, sedangkan Deutro Melayu membawa budaya perunggu Dongson.',
      'Akulturasi bertambah kaya dengan hadirnya pedagang India, Tionghoa, Arab, dan Eropa membawa agama dan aksara.'
    ],
    dontConfuse: [
      {
        term: 'Proto Melayu vs Deutro Melayu dalam Artefak',
        description: 'Proto Melayu identik dengan KAPAK BATU PERSEGI & LONJONG (Zaman Neolitikum), sedangkan Deutro Melayu identik dengan NEKARA & CENDERASA PERUNGGU (Zaman Perundagian/Dongson).',
        distinction: 'Proto = Kapak Batu Asah; Deutro = Perunggu & Besi Dongson.'
      }
    ],
    tableOrDiagram: {
      headers: ['Kelompok / Ras', 'Asal Wilayah', 'Jalur Migrasi', 'Periode', 'Persebaran', 'Budaya / Hasil Karya'],
      rows: [
        { col1: 'Negrito', col2: 'Asia Tenggara Daratan', col3: 'Darat Paparan Sunda', col4: '± 10.000 SM', col5: 'Malaysia, Filipina, Papua', col6: 'Alat batu kasar, Abris sous roche' },
        { col1: 'Melanesoid', col2: 'Indochina (Tonkin)', col3: 'Kepulauan Indochina - Selatan', col4: '± 7.000 SM', col5: 'Papua, Maluku, NTT', col6: 'Bacson-Hoabinh, Pebble, Sampah kerang' },
        { col1: 'Proto Melayu', col2: 'Yunnan (Cina Selatan)', col3: 'Barat (Malaya) & Timur (Filipina)', col4: '± 1.500 SM', col5: 'Toraja, Dayak, Batak, Nias', col6: 'Kapak Persegi & Kapak Lonjong' },
        { col1: 'Deutro Melayu', col2: 'Dongson (Vietnam)', col3: 'Jalur Barat (Semenanjung Malaya)', col4: '± 500 SM', col5: 'Jawa, Sunda, Minang, Bugis', col6: 'Nekara, Moko, Cendrasa, Perunggu' },
        { col1: 'India / Tionghoa / Arab', col2: 'Asia Selatan / Timur / Barat', col3: 'Jalur Laut Perdagangan', col4: 'Abad 1 M ke atas', col5: 'Kota Pesisir Nusantara', col6: 'Aksara Pallawa, Agama, Candi, Keramik' }
      ]
    },
    mnemonic: {
      phrase: 'GELOMBANG = N-egrito M-elanesoid P-roto D-eutro A-sunk (N-M-P-D-A)',
      explanation: 'Urutan masuk: Negrito → Melanesoid → Proto Melayu → Deutro Melayu → Asing Aksara.'
    },
    likelyExamQuestions: [
      'Susunlah urutan kronologis gelombang kedatangan ras ke Nusantara dari yang paling awal!',
      'Hasil kebudayaan apakah yang dibawa oleh kelompok Proto Melayu sewaktu memasuki Nusantara?',
      'Bangsa pendatang manakah yang pertama kali mengenalkan tradisi aksara tulisan Pallawa dan agama Hindu-Buddha ke Nusantara?'
    ],
    activeRecall: [
      { question: 'Urutkan 4 gelombang ras awal yang datang ke Indonesia!', answer: '1. Negrito, 2. Melanesoid, 3. Proto Melayu, 4. Deutro Melayu.' },
      { question: 'Apa budaya khas bawaan Proto Melayu?', answer: 'Kebudayaan Neolitikum (Kapak Persegi dan Kapak Lonjong).' },
      { question: 'Apa budaya khas bawaan Deutro Melayu?', answer: 'Kebudayaan Logam Perunggu (Kebudayaan Dongson Vietnam).' },
      { question: 'Sebutkan 3 suku keturunan Proto Melayu!', answer: 'Suku Dayak, Suku Toraja, dan Suku Batak.' },
      { question: 'Bangsa mana yang membawa huruf Pallawa dan bahasa Sanskerta?', answer: 'Pedagang/Brahmana dari India.' }
    ],
    flashcards: [
      { id: 'o1', front: 'Urutan kedatangan ras pra-aksara di Indonesia:', back: 'Negrito → Melanesoid → Proto Melayu → Deutro Melayu.' },
      { id: 'o2', front: 'Apa kebudayaan bawaan Proto Melayu?', back: 'Kapak Persegi (Jalur Barat) & Kapak Lonjong (Jalur Timur).' },
      { id: 'o3', front: 'Apa kebudayaan bawaan Deutro Melayu?', back: 'Logam perunggu Dongson (Nekara, Bejana, Cendrasa).' },
      { id: 'o4', front: 'Siapakah pembawa agama Hindu-Buddha dan huruf Pallawa?', back: 'Pedagang dan Brahmana India.' },
      { id: 'o5', front: 'Sebutkan warisan kebudayaan Tionghoa di Indonesia!', back: 'Porselen/keramik, kuliner olahan kedelai (tahu/tempe), kembang api, klenteng.' }
    ],
    quizQuestions: [
      {
        id: 'q_o1',
        question: 'Urutan gelombang migrasi manusia pra-aksara yang memasuki Kepulauan Nusantara dari yang paling tua adalah...',
        options: [
          { id: 'opt1', text: 'Negrito → Melanesoid → Proto Melayu → Deutro Melayu' },
          { id: 'opt2', text: 'Deutro Melayu → Proto Melayu → Melanesoid → Negrito' },
          { id: 'opt3', text: 'Melanesoid → Negrito → Deutro Melayu → Proto Melayu' },
          { id: 'opt4', text: 'Proto Melayu → Deutro Melayu → Negrito → Melanesoid' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Negrito adalah gelombang terawal, disusul Melanesoid, Proto Melayu, dan Deutro Melayu.'
      },
      {
        id: 'q_o2',
        question: 'Kelompok masyarakat di Indonesia seperti Suku Toraja dan Dayak merupakan keturunan dari ras...',
        options: [
          { id: 'opt1', text: 'Proto Melayu (Melayu Tua)' },
          { id: 'opt2', text: 'Deutro Melayu (Melayu Muda)' },
          { id: 'opt3', text: 'Kaukasoid' },
          { id: 'opt4', text: 'Melanesoid' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Toraja dan Dayak tergolong keturunan Proto Melayu.'
      },
      {
        id: 'q_o3',
        question: 'Hasil kebudayaan penting yang dibawa oleh bangsa Deutro Melayu sekitar tahun 500 SM ke Indonesia adalah...',
        options: [
          { id: 'opt1', text: 'Peralatan logam perunggu Dongson seperti Nekara dan Cendrasa' },
          { id: 'opt2', text: 'Kapak perimbas batu kasar' },
          { id: 'opt3', text: 'Mesin cetak buku tulisan' },
          { id: 'opt4', text: 'Candi berbahan batu bata merah' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Deutro Melayu membawa zaman perundagian logam Dongson.'
      },
      {
        id: 'q_o4',
        question: 'Pengaruh kebudayaan India abad ke-4 Masehi yang menandai mulainya zaman Aksara (Sejarah) di Indonesia ditandai oleh...',
        options: [
          { id: 'opt1', text: 'Penggunaan Huruf Pallawa dan Bahasa Sanskerta pada prasasti Yupa' },
          { id: 'opt2', text: 'Penggunaan bahasa Belanda di sekolah' },
          { id: 'opt3', text: 'Penemuan huruf abjad Latin modern' },
          { id: 'opt4', text: 'Pembuatan candi dari batu kali tanpa relief' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Prasasti Yupa Kutai berhuruf Pallawa menandai awal zaman aksara Indonesia.'
      },
      {
        id: 'q_o5',
        question: 'Suku Jawa, Sunda, Minangkabau, dan Bugis merupakan keturunan dari gelombang migrasi...',
        options: [
          { id: 'opt1', text: 'Deutro Melayu (Melayu Muda)' },
          { id: 'opt2', text: 'Proto Melayu (Melayu Tua)' },
          { id: 'opt3', text: 'Ras Negrito' },
          { id: 'opt4', text: 'Ras Weddid' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku pesisir Jawa, Sunda, Minang, Bugis adalah keturunan Deutro Melayu.'
      }
    ]
  },
  {
    id: 'P',
    code: 'P',
    title: 'DIASPORA AUSTRONESIA',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Diaspora Austronesia adalah persebaran raksasa penutur bahasa Austronesia mencakup separuh belahan bumi (dari Madagaskar di barat hingga Pulau Paskah di timur).',
        'Inovasi Kunci: Perahu cadik (outrigger canoe) dan navigasi astronomi laut.',
        'Jejak Budaya: Rumah panggung, perladangan tanam (taro, ubi, kelapa), kosa kata bahasa (satu, dua, mata, air).'
      ],
      fromSupplemental: [
        'Buku Persebaran Bangsa Austronesia (Pusat Arkeologi Kemendikbudristek).',
        'Karya Arkeologi Maritim Peter Bellwood.'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan cakupan wilayah Diaspora Austronesia.',
      'Mengidentifikasi teknologi maritim pelopor (perahu cadik & astronomi).',
      'Menganalisis jejak kesamaan budaya dan kosa kata bahasa Austronesia di Asia-Pasifik-Madagaskar.',
      'Menghubungkan diaspora Austronesia dengan posisi strategis Indonesia.'
    ],
    fullContent: `Diaspora Austronesia merupakan salah satu peristiwa migrasi maritim terbesar dan paling menakjubkan dalam sejarah peradaban manusia. Penutur bahasa Austronesia menyebar menjelajahi samudra luas mencakup wilayah dari Pulau Madagaskar di lepas pantai Afrika Timur (ujung barat) hingga Pulau Paskah / Easter Island di lepas pantai Amerika Selatan (ujung timur), serta dari Taiwan (utara) hingga Selandia Baru / Maori (selatan).

Penemu & Pelopor Teknologi:
Keberhasilan penjelajahan samudra raksasa ini ditopang oleh dua teknologi bahari utama:
1. Perahu Cadik (*Outrigger Canoe*): Perahu bercadik ganda yang stabil menghadapi gelombang samudra tinggi.
2. Navigasi Astronomi & Alam: Kemampuan membaca rasi bintang, arah angin musim, dan arus laut tanpa kompas besi.

Jejak Kesatuan Budaya Austronesia:
- Linguistik: Kesamaan kata dasar seperti *mata*, *lima*, *pula/pulo*, *air/wai*, *ikan/ikan*.
- Pertanian & Makanan: Budi daya kelapa, talas (taro), ubi, pisang, dan ternak ayam/babi.
- Arsitektur: Rumah panggung tiang kayu berpuncak atap melengkung mirip perahu.`,
    corePoints: [
      'Cakupan Wilayah: Madagaskar (Barat) s.d. Pulau Paskah (Timur); Taiwan (Utara) s.d. Selandia Baru (Selatan).',
      'Inovasi Bahari: Perahu Cadik ganda & Navigasi Rasi Bintang.',
      'Bukti Kekerabatan: Kata dasar bahasa (lima, mata, air), rumah panggung, tanaman talas & kelapa.',
      'Peran Indonesia: Indonesia menjadi pusat simpul persimpangan diaspora Austronesia terbesar.'
    ],
    keywords: ['Diaspora Austronesia', 'Perahu Cadik', 'Madagaskar', 'Pulau Paskah', 'Navigasi Bintang', 'Linguistik'],
    causeProcessEffect: {
      cause: 'Pertumbuhan populasi dan keahlian navagasi samudra penutur Austronesia.',
      process: 'Membelah samudra Pasifik dan Hindia memakai perahu cadik berbasis pengetahuan astronomi.',
      effect: 'Bahasa dan kebudayaan Austronesia mendominasi kawasan Asia-Pasifik hingga Madagaskar.'
    },
    threeSentences: [
      'Diaspora Austronesia adalah penyebaran maritim raksasa penutur Austronesia dari Madagaskar hingga Pulau Paskah.',
      'Teknologi perahu cadik ganda dan navigasi rasi bintang menjadi kunci penjelajahan samudra mereka.',
      'Jejak kebudayaan Austronesia terlihat pada kemiripan kata dasar bahasa, arsitektur rumah panggung, dan Budi daya kelapa.'
    ],
    dontConfuse: [
      {
        term: 'Diaspora Austronesia vs Kolonialisme Barat',
        description: 'Diaspora Austronesia adalah migrasi eksplorasi pemukiman bahari pra-aksara pasifik berbasis persaudaraan rumpun bahasa, bukan penjajahan ekspansi militer modal kolonial.',
        distinction: 'Austronesia = Migrasi Bahari Pra-Aksara; Kolonialisme = Eksploitasi Politik Ekonomi Modern.'
      }
    ],
    tableOrDiagram: {
      headers: ['Batas Geografis', 'Wilayah Ujung', 'Bahasa / Suku Terkait'],
      rows: [
        { col1: 'Ujung Barat', col2: 'Pulau Madagaskar (Afrika)', col3: 'Bahasa Malagasi' },
        { col1: 'Ujung Timur', col2: 'Pulau Paskah / Rapa Nui (Pasifik)', col3: 'Bahasa Rapa Nui' },
        { col1: 'Ujung Utara', col2: 'Pulau Taiwan (Formosa)', col3: 'Suku Aborigin Ami / Atayal' },
        { col1: 'Ujung Selatan', col2: 'Selandia Baru (Aotearoa)', col3: 'Suku Maori' },
        { col1: 'Pusat Tengah', col2: 'Kepulauan Indonesia & Filipina', col3: 'Bahasa Indonesia, Jawa, Tagalog' }
      ]
    },
    mnemonic: {
      phrase: 'DIASPORA = D-ari I-ndonesia A-ngkut S-amudra P-erahu O-utrigger R-asi A-stronomi',
      explanation: 'Diaspora Austronesia = Perahu Outrigger (Cadik) + Rasi Astronomi.'
    },
    likelyExamQuestions: [
      'Batas wilayah penyebaran diaspora Austronesia di sebelah barat dan timur secara berurutan ditunjukkan oleh...',
      'Inovasi teknologi bahari apakah yang memungkinkan bangsa Austronesia menjelajahi Samudra Pasifik dan Samudra Hindia?',
      'Berikan contoh bukti linguistik kesamaan bahasa rumpun Austronesia antara Indonesia dengan Madagaskar!'
    ],
    activeRecall: [
      { question: 'Sebutkan batas wilayah paling barat dan paling timur penyebaran Austronesia!', answer: 'Barat: Pulau Madagaskar (Afrika); Timur: Pulau Paskah / Rapa Nui (Pasifik).' },
      { question: 'Apa teknologi kapal utama penjelajah Austronesia?', answer: 'Perahu cadik (Outrigger canoe).' },
      { question: 'Bagaimanakah penjelajah Austronesia menentukan arah navigasi di laut lepas tanpa kompas?', answer: 'Menggunakan rasi bintang (astronomi), arah angin musim, dan bacaan arus laut.' },
      { question: 'Sebutkan 3 kata dasar yang mirip di seluruh rumpun bahasa Austronesia!', answer: 'Mata, lima, dan air (wai).' },
      { question: 'Suku Maori di Selandia Baru tergolong dalam rumpun bahasa...', answer: 'Austronesia.' }
    ],
    flashcards: [
      { id: 'p1', front: 'Apa itu Diaspora Austronesia?', back: 'Penyebaran maritim raksasa penutur bahasa Austronesia mencakup separuh belahan dunia.' },
      { id: 'p2', front: 'Batas wilayah Diaspora Austronesia:', back: 'Madagaskar (Barat), Pulau Paskah (Timur), Taiwan (Utara), Selandia Baru (Selatan).' },
      { id: 'p3', front: 'Perahu apakah yang dipakai mengarungi samudra?', back: 'Perahu cadik (Outrigger canoe).' },
      { id: 'p4', front: 'Sebutkan ciri rumah adat khas Austronesia!', back: 'Rumah panggung kayu bertiang tinggi penahan banjir dan binatang.' },
      { id: 'p5', front: 'Apa nama bahasa penduduk asli Madagaskar yang berkerabat dekat dengan bahasa Barito Kalimantan?', back: 'Bahasa Malagasi.' }
    ],
    quizQuestions: [
      {
        id: 'q_p1',
        question: 'Batas penyebaran terbawah di sebelah barat dan timur dari Diaspora Austronesia yang membentang luas di dunia adalah...',
        options: [
          { id: 'opt1', text: 'Madagaskar di pantai Afrika dan Pulau Paskah di Samudra Pasifik' },
          { id: 'opt2', text: 'Jepang dan Australia' },
          { id: 'opt3', text: 'Inggris dan India' },
          { id: 'opt4', text: 'Mesir dan Hawaii' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Madagaskar (barat) dan Pulau Paskah (timur) merupakan batas terluar penyebaran Austronesia.'
      },
      {
        id: 'q_p2',
        question: 'Teknologi perahu penting buatan bangsa Austronesia yang mampu menjaga keseimbangan di tengah gelombang samudra tinggi adalah...',
        options: [
          { id: 'opt1', text: 'Perahu cadik (outrigger canoe)' },
          { id: 'opt2', text: 'Kapal layar besi berpengerak uap' },
          { id: 'opt3', text: 'Kapal selam baja' },
          { id: 'opt4', text: 'Rakit kayu mendatar' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Sayap cadik di kanan-kiri perahu memberikan stabilitas ekstra menghadapi ombak samudra.'
      },
      {
        id: 'q_p3',
        question: 'Bahasa Malagasi yang dituturkan oleh masyarakat di Pulau Madagaskar (Afrika) memiliki kekerabatan linguistik sangat erat dengan bahasa daerah di Indonesia, yaitu...',
        options: [
          { id: 'opt1', text: 'Bahasa Dayak Barito di Kalimantan' },
          { id: 'opt2', text: 'Bahasa Betawi di Jakarta' },
          { id: 'opt3', text: 'Bahasa Papua Asmat' },
          { id: 'opt4', text: 'Bahasa Aceh' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Penelitian linguistik membuktikan bahasa Malagasi bersumber dari rumpun Dayak Barito.'
      },
      {
        id: 'q_p4',
        question: 'Pola arsitektur rumah khas peninggalan kebudayaan Austronesia yang banyak dijumpai di Kepulauan Nusantara adalah...',
        options: [
          { id: 'opt1', text: 'Rumah panggung kayu berpuncak atap melengkung' },
          { id: 'opt2', text: 'Rumah batu bata tanpa tiang' },
          { id: 'opt3', text: 'Gua buatan di bawah tanah' },
          { id: 'opt4', text: 'Kubah gumpalan es Igloo' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Rumah panggung merupakan adaptasi arsitektur bahari khas Austronesia.'
      },
      {
        id: 'q_p5',
        question: 'Tanaman pangan penting yang disebarkan oleh penutur Austronesia di sepanjang kepulauan Pasifik adalah...',
        options: [
          { id: 'opt1', text: 'Talas (Taro), Ubi, dan Kelapa' },
          { id: 'opt2', text: 'Gandum hitam dan Apel' },
          { id: 'opt3', text: 'Korma dan Zaitun' },
          { id: 'opt4', text: 'Kopi Arabika dan Teh' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Talas, ubi, kelapa, dan pisang merupakan bekal vegetasi yang dibawa penjelajah Austronesia.'
      }
    ]
  },
  {
    id: 'Q',
    code: 'Q',
    title: 'KEMAJEMUKAN VERTIKAL',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Kemajemukan Vertikal adalah pengelompokan masyarakat secara bertingkat / berjenjang (Stratifikasi Sosial).',
        'Dasar Pembentukan: Kekayaan / Ekonomi, Kekuasaan / Jabatan, Pendidikan, dan Kasta Keturunan.',
        'Sifat: Membentuk kelas atas (upper class), kelas menengah (middle class), dan kelas bawah (lower class).'
      ],
      fromSupplemental: [
        'Buku Sosiologi Stratifikasi Sosial (Soerjono Soekanto).',
        'Sosiologi Struktur Sosial Indonesia (Nasikun).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian kemajemukan vertikal (stratifikasi sosial).',
      'Mengidentifikasi 4 kriteria dasar pembentuk kelas sosial vertikal.',
      'Membedakan sifat stratifikasi sosial terbuka (open) dan tertutup (closed).',
      'Menganalisis dampak kemajemukan vertikal terhadap mobilitas sosial dan pembangunan.'
    ],
    fullContent: `Kemajemukan Vertikal (Stratifikasi Sosial) adalah pembedaan atau pengelompokan masyarakat ke dalam kelas-kelas sosial secara bertingkat (berjenjang/hirarkis) dari posisi atas, menengah, hingga bawah.

Berbeda dengan diferensiasi sosial (horizontal) yang bersifat sejajar, stratifikasi sosial (vertikal) menciptakan hak, kewajiban, kekuasaan, dan prestise yang tidak seimbang antar lapisan.

Dasar Pembentukan Kemajemukan Vertikal:
1. Ukuran Kekayaan (Ekonomi): Orang kaya berada di kelas atas; orang miskin di kelas bawah.
2. Ukuran Kekuasaan & Jabatan: Pemimpin/pejabat di kelas atas; rakyat biasa di kelas bawah.
3. Ukuran Pendidikan & Pengetahuan: Doktor/Profesor memiliki status lebih tinggi dari lulusan sekolah dasar.
4. Ukuran Keturunan / Kasta: Keturunan bangsawan/raja memiliki status sosial lebih tinggi dari rakyat jelata (misal: sistem kasta Bali).

Sifat Stratifikasi Sosial:
- Terbuka (*Open Stratification*): Memungkinkan mobilitas sosial naik/turun berdasarkan usaha (prestasi/pendidikan).
- Tertutup (*Closed Stratification*): Tidak memungkinkan mobilitas sosial naik/turun, ditentukan sejak lahir (kasta/keturunan).`,
    corePoints: [
      'Prinsip Utama: Bertingkat, hirarkis, tidak seimbang (Atas, Menengah, Bawah).',
      'Istilah Sosiologi: Stratifikasi Sosial.',
      'Parameter Pembentuk: Kekayaan, Kekuasaan/Jabatan, Pendidikan, Keturunan/Kasta.',
      'Sifat: Terbuka (bisa naik/turun via usaha) atau Tertutup (kasta sejak lahir).'
    ],
    keywords: ['Kemajemukan Vertikal', 'Stratifikasi Sosial', 'Kelas Sosial', 'Kekuasaan', 'Kekayaan', 'Kasta', 'Mobilitas Sosial'],
    causeProcessEffect: {
      cause: 'Kelangkaan sumber daya bernilai (uang, jabatan, gelar) di dalam masyarakat.',
      process: 'Masyarakat memberikan penghargaan berbeda terhadap individu pemilik sumber daya lebih banyak.',
      effect: 'Terbentuklah lapisan kelas atas, menengah, dan bawah yang mempengaruhi gaya hidup dan privilege.'
    },
    threeSentences: [
      'Kemajemukan vertikal adalah pembagian masyarakat ke dalam lapisan kelas bertingkat (stratifikasi sosial).',
      'Dasar pembentuk utamanya meliputi ukuran kekayaan, jabatan kekuasaan, tingkat pendidikan, dan keturunan.',
      'Stratifikasi terbuka memungkinkan individu mengalami mobilitas sosial naik melalui pencapaian prestasi.'
    ],
    dontConfuse: [
      {
        term: 'Kemajemukan Vertikal vs Kemajemukan Horizontal',
        description: 'Kemajemukan Vertikal = BERTINGKAT BERHIERARKI (Kaya vs Miskin, Pejabat vs Rakyat), sedangkan Kemajemukan Horizontal = SEJAJAR DERAJAT (Suku Jawa vs Batak, Agama Islam vs Kristen).',
        distinction: 'Vertikal = Hirarki Kelas Sosial; Horizontal = Keberagaman Sejajar.'
      }
    ],
    tableOrDiagram: {
      headers: ['Dasar Stratifikasi', 'Lapisan Atas (Upper)', 'Lapisan Menengah (Middle)', 'Lapisan Bawah (Lower)'],
      rows: [
        { col1: 'Kekayaan / Ekonomi', col2: 'Konglomerat / Pengusaha kaya', col3: 'Karyawan / Pedagang sedang', col4: 'Buruh / Pekerja kasar' },
        { col1: 'Kekuasaan / Jabatan', col2: 'Presiden / Direktur Utama', col3: 'Manajer / Supervisor', col4: 'Staf biasa / Anggota' },
        { col1: 'Pendidikan', col2: 'Doktor / Profesor / Magister', col3: 'Sarjana / Diploma', col4: 'Lulusan SD / Tidak sekolah' }
      ]
    },
    mnemonic: {
      phrase: 'VERTIKAL = V-alue E-konomi R-angking T-ingkat I-jazah K-ekuasaan A-tas L-apisan',
      explanation: 'Vertikal = Rangking Tingkat (Kekayaan + Kekuasaan + Ijazah/Pendidikan).'
    },
    likelyExamQuestions: [
      'Pengelompokan masyarakat berdasarkan kriteria kekayaan dan jabatan tergolong kemajemukan vertikal karena...',
      'Jelaskan perbedaan antara stratifikasi sosial terbuka dan stratifikasi sosial tertutup beserta contohnya!',
      'Manakah parameter sosial berikut yang membentuk kemajemukan vertikal?'
    ],
    activeRecall: [
      { question: 'Apa istilah sosiologi untuk kemajemukan vertikal?', answer: 'Stratifikasi Sosial (Social Stratification).' },
      { question: 'Sebutkan 4 dasar pembentukan stratifikasi sosial vertikal!', answer: '1. Kekayaan, 2. Kekuasaan/Jabatan, 3. Kehormatan/Keturunan, 4. Ilmu Pengetahuan/Pendidikan.' },
      { question: 'Apa yang dimaksud dengan stratifikasi sosial terbuka?', answer: 'Sistem lapisan sosial yang memberi kesempatan anggota masyarakat naik/turun kelas melalui usaha/prestasi.' },
      { question: 'Berikan contoh stratifikasi sosial tertutup!', answer: 'Sistem kasta tradisional di India atau Bali (Brahmana, Ksatria, Waisya, Sudra).' },
      { question: 'Apa beda utama stratifikasi sosial dengan diferensiasi sosial?', answer: 'Stratifikasi sosial bertingkat atas-bawah; diferensiasi sosial sejajar setara.' }
    ],
    flashcards: [
      { id: 'q1', front: 'Apa itu Kemajemukan Vertikal?', back: 'Pengelompokan masyarakat ke dalam kelas-kelas sosial bertingkat (stratifikasi sosial).' },
      { id: 'q2', front: 'Sebutkan 3 lapisan kelas sosial secara umum!', back: 'Kelas Atas (Upper Class), Kelas Menengah (Middle Class), Kelas Bawah (Lower Class).' },
      { id: 'q3', front: 'Apa contoh stratifikasi berbasis kekuasaan?', back: 'Direktur Perusahaan → Manajer → Karyawan Biasa.' },
      { id: 'q4', front: 'Apa contoh stratifikasi berbasis pendidikan?', back: 'Lulusan S3/Doktor → Sarjana S1 → Lulusan SD.' },
      { id: 'q5', front: 'Mengapa pendidikan dapat menjadi saluran mobilitas sosial naik?', back: 'Pendidikan memberikan keahlian yang dapat meningkatkan penghasilan dan status sosial individu.' }
    ],
    quizQuestions: [
      {
        id: 'q_q1',
        question: 'Pengelompokan masyarakat ke dalam lapisan-lapisan bertingkat atas, menengah, dan bawah dinamakan...',
        options: [
          { id: 'opt1', text: 'Kemajemukan Vertikal (Stratifikasi Sosial)' },
          { id: 'opt2', text: 'Kemajemukan Horizontal (Diferensiasi Sosial)' },
          { id: 'opt3', text: 'Integrasi Sosial' },
          { id: 'opt4', text: 'Asimilasi Budaya' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kemajemukan vertikal merujuk pada stratifikasi bertingkat hirarkis.'
      },
      {
        id: 'q_q2',
        question: 'Seseorang yang berhasil menaikkan status sosialnya dari anak keluarga miskin menjadi pengusaha sukses melalui pendidikan tinggi mengalami...',
        options: [
          { id: 'opt1', text: 'Mobilitas sosial naik pada stratifikasi sosial terbuka' },
          { id: 'opt2', text: 'Mobilitas sosial turun pada stratifikasi tertutup' },
          { id: 'opt3', text: 'Diferensiasi horizontal' },
          { id: 'opt4', text: 'Etnosentrisme kelompok' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Stratifikasi terbuka memungkinkan kenaikan status sosial (mobilitas vertikal naik).'
      },
      {
        id: 'q_q3',
        question: 'Berikut ini yang MERUPAKAN contoh parameter pembentuk kemajemukan vertikal adalah...',
        options: [
          { id: 'opt1', text: 'Tingkat kekayaan dan kedudukan jabatan' },
          { id: 'opt2', text: 'Jenis suku bangsa dan agama' },
          { id: 'opt3', text: 'Warna kulit dan bentuk rambut' },
          { id: 'opt4', text: 'Jenis kelamin pria dan wanita' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kekayaan dan jabatan membagi masyarakat ke dalam kelas atas-bawah.'
      },
      {
        id: 'q_q4',
        question: 'Sistem lapisan sosial yang menentukan kedudukan seseorang sejak lahir berdasarkan keturunan dan sulit untuk berpindah dinamakan...',
        options: [
          { id: 'opt1', text: 'Stratifikasi Sosial Tertutup' },
          { id: 'opt2', text: 'Stratifikasi Sosial Terbuka' },
          { id: 'opt3', text: 'Diferensiasi SARA' },
          { id: 'opt4', text: 'Demokrasi Pancasila' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Stratifikasi tertutup (seperti sistem kasta) membatasi mobilitas sosial.'
      },
      {
        id: 'q_q5',
        question: 'Perbedaan mendasar antara kemajemukan horizontal dan kemajemukan vertikal terletak pada...',
        options: [
          { id: 'opt1', text: 'Ada atau tidaknya tingkatan bertingkat (hirarki) kelas sosial' },
          { id: 'opt2', text: 'Jumlah anggota dalam masing-masing kelompok' },
          { id: 'opt3', text: 'Letak pulau tempat tinggal kelompok' },
          { id: 'opt4', text: 'Jenis pakaian yang dikenakan sehari-hari' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Horizontal tidak bertingkat (sejajar); Vertikal bertingkat (hirarki).'
      }
    ]
  },
  {
    id: 'R',
    code: 'R',
    title: 'ETNOSENTRISME, PRIMORDIALISME, SIMPATI, EMPATI',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Tabel perbandingan ketat antara 4 konsep sosiologi: Etnosentrisme, Primordialisme, Simpati, dan Empati.',
        'Etnosentrisme: Sikap menganggap kebudayaan sendiri paling unggul dan mengukur kebudayaan lain memakai standar sendiri.',
        'Primordialisme: Paham memegang teguh hal-hal yang dibawa sejak lahir (suku, agama, ikatan darah).',
        'Simpati: Perasaan tertarik/merasakan kasihan pada pihak lain secara emosional.',
        'Empati: Perasaan mendalam seolah merasakan penderitaan orang lain disertai tindakan nyata.'
      ],
      fromSupplemental: [
        'Buku Sosiologi Perilaku Sosial (Kemendikbudristek).',
        'Kamus Istilah Sosiologi (Soerjono Soekanto).'
      ]
    },
    masteryObjectives: [
      'Mendefinisikan dengan tepat pengertian Etnosentrisme, Primordialisme, Simpati, dan Empati.',
      'Mengidentifikasi ciri-ciri khas dan contoh perilaku nyata dari keempat konsep.',
      'Membedakan perbedaan halus antara Etnosentrisme vs Primordialisme.',
      'Membedakan perbedaan tingkatan antara Simpati vs Empati.'
    ],
    fullContent: `Dalam dinamika interaksi masyarakat majemuk, terdapat konsep-konsep sosiologi yang sering membingungkan siswa. Keempat konsep ini harus dipahami secara presisi:

1. Etnosentrisme:
   - Pengertian: Sikap atau pandangan yang menganggap kebudayaan kelompoknya sendiri (*in-group*) paling unggul dan bernilai tinggi, serta menilai kebudayaan kelompok lain (*out-group*) menggunakan standar budayanya sendiri.
   - Contoh: Menganggap tari daerah lain "aneh" atau "primitif" dibandingkan tarian daerahnya sendiri.

2. Primordialisme:
   - Pengertian: Paham atau ikatan kesetiaan yang memegang teguh hal-hal yang dibawa sejak lahir (*given*), seperti ikatan suku bangsa, klan, ras, agama, atau daerah asal.
   - Contoh: Mengutamakan menerima pegawai yang berasal dari kampung halaman atau suku yang sama.

3. Simpati:
   - Pengertian: Proses perasaan tertarik, peduli, atau kasihan seseorang terhadap orang lain sehingga merasakan apa yang dialami orang lain (fokus pada perasaan emosional).
   - Contoh: Mengucapkan turut berduka cita dan merasa kasihan saat mendengar musibah banjir.

4. Empati:
   - Pengertian: Perasaan mendalam yang mirip simpati, namun diikuti dengan tindakan nyata (*action*) membayangkan seolah-olah dirinya berada dalam posisi penderitaan orang lain.
   - Contoh: Ikut turun langsung ke lokasi banjir memberikan bantuan makanan dan merawat korban bencana.`,
    corePoints: [
      'Etnosentrisme = Menganggap budayanya paling hebat/bagus dibanding budaya lain.',
      'Primordialisme = Mengagungkan ikatan bawaan lahir (suku/ikatan darah/agama).',
      'Simpati = Merasa kasihan/tertarik secara emosional (perasaan).',
      'Empati = Merasakan penderitaan + TINDAKAN NYATA membantu (aksi).'
    ],
    keywords: ['Etnosentrisme', 'Primordialisme', 'Simpati', 'Empati', 'Sosiologi', 'In-Group'],
    causeProcessEffect: {
      cause: 'Sentimen kelompok sosial dan kapasitas emosional manusia dalam berinteraksi.',
      process: 'Etnosentrisme/Primordialisme menutup diri; Simpati/Empati membuka kepedulian kemanusiaan.',
      effect: 'Pengelolaan yang bijak mencegah disintegrasi dan meningkatkan solidatitas sosial.'
    },
    threeSentences: [
      'Etnosentrisme menilai budaya lain inferior, sedangkan Primordialisme memegang teguh ikatan bawaan lahir.',
      'Simpati adalah perasaan kasihan emosional, sedangkan Empati melangkah lebih jauh dengan tindakan nyata.',
      'Membedakan keempat konsep ini sangat penting untuk membangun toleransi dan kepedulian sosial.'
    ],
    dontConfuse: [
      {
        term: 'Simpati vs Empati',
        description: 'Simpati sebatas PERASAAN ikut sedih/kasihan di dalam hati, sedangkan Empati melahirkan TINDAKAN NYATA (action) menolong korban.',
        distinction: 'Simpati = Feeling Only; Empati = Feeling + Real Action.'
      },
      {
        term: 'Etnosentrisme vs Primordialisme',
        description: 'Etnosentrisme berfokus pada MENILAI RENDAH BUDAYA LAIN, sedangkan Primordialisme berfokus pada MEMEGANG TEGUH IKATAN BAWAAN LAHIR (suku/marga).',
        distinction: 'Etnosentrisme = Menghina budaya luar; Primordialisme = Mengutamakan ikatan suku sendiri.'
      }
    ],
    tableOrDiagram: {
      headers: ['Konsep', 'Pengertian Inti', 'Fokus Utama', 'Contoh Nyata', 'Dampak Sosial'],
      rows: [
        { col1: 'Etnosentrisme', col2: 'Menganggap budaya sendiri paling bagus & menilai rendah budaya lain', col3: 'Penilaian Budaya (Superior vs Inferior)', col4: 'Mengejek tarian suku lain primitif', col5: 'Memicu konflik SARA' },
        { col1: 'Primordialisme', col2: 'Memegang teguh ikatan bawaan sejak lahir (suku/agama/marga)', col3: 'Loyalitas Ikatan Lahir (Given)', col4: 'Hanya memilih pemimpin sesuku', col5: 'Hambatan pembauran' },
        { col1: 'Simpati', col2: 'Perasaan tertarik / kasihan pada penderitaan orang lain', col3: 'Respon Emosional Perasaan', col4: 'Sedih mendengar berita korban gempa', col5: 'Memupuk rasa kasih' },
        { col1: 'Empati', col2: 'Merasakan penderitaan orang lain disertai tindakan bantuan nyata', col3: 'Respon Emosional + Tindakan Nyata', col4: 'Menggalang dana & datang menjadi relawan', col5: 'Mempererat solidaritas' }
      ]
    },
    mnemonic: {
      phrase: 'E-P-S-E = E-tnosentris (E-jek budaya luar), P-rimordial (P-egang suku lahir), S-impati (S-edih emosi), E-mpati (E-ksion nyata)',
      explanation: 'Etnosentris = Ejek budaya luar; Primordial = Pegang suku; Simpati = Sedih emosi; Empati = Aksion nyata.'
    },
    likelyExamQuestions: [
      'Jelaskan perbedaan mendasar antara simpati dan empati dalam interaksi sosial beserta contohnya!',
      'Sikap seorang pengusaha yang hanya mau menerima pekerja dari suku asalnya sendiri merupakan contoh dari paham...',
      'Mengapa etnosentrisme yang berlebihan dapat mengancam disintegrasi bangsa Indonesia?'
    ],
    activeRecall: [
      { question: 'Apa perbedaan utama antara simpati dan empati?', answer: 'Simpati hanya sebatas perasaan emosional kasihan; empati merespons dengan tindakan membantu nyata.' },
      { question: 'Apa yang dimaksud dengan etnosentrisme?', answer: 'Sikap menganggap kebudayaan sendiri paling unggul dan menilai budaya lain lebih rendah.' },
      { question: 'Apa yang dimaksud dengan primordialisme?', answer: 'Paham yang memegang teguh tradisi, ikatan suku, agama, atau marga yang dibawa sejak lahir.' },
      { question: 'Sebutkan contoh sikap empati di sekolah!', answer: 'Mengumpulkan uang sumbangan dan menjenguk serta merawat teman kelas yang sakit di rumah sakit.' },
      { question: 'Sebutkan pemicu timbulnya etnosentrisme!', answer: 'Kurangnya wawasan kebudayaan dan prasangka sosial yang kuat terhadap kelompok luar.' }
    ],
    flashcards: [
      { id: 'r1', front: 'Apa kunci dari Etnosentrisme?', back: 'Menganggap budaya sendiri paling hebat & merendahkan budaya lain.' },
      { id: 'r2', front: 'Apa kunci dari Primordialisme?', back: 'Memegang teguh ikatan bawaan lahir (suku/marga/ras).' },
      { id: 'r3', front: 'Apa kunci dari Simpati?', back: 'Perasaan kasihan / tertarik secara emosional.' },
      { id: 'r4', front: 'Apa kunci dari Empati?', back: 'Merasakan penderitaan orang lain DITAMBAH tindakan nyata membantu.' },
      { id: 'r5', front: 'Mana yang melibatkan aksi nyata (action): Simpati atau Empati?', back: 'Empati.' }
    ],
    quizQuestions: [
      {
        id: 'q_r1',
        question: 'Seorang warga merasa sedih saat melihat tayangan musibah gempa bumi di televisi. Rasa sedih yang dialami orang tersebut dinamakan...',
        options: [
          { id: 'opt1', text: 'Simpati' },
          { id: 'opt2', text: 'Empati' },
          { id: 'opt3', text: 'Etnosentrisme' },
          { id: 'opt4', text: 'Primordialisme' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Merasa sedih sebatas emosi perasaan di dalam hati adalah simpati.'
      },
      {
        id: 'q_r2',
        question: 'Andi tidak hanya merasa kasihan pada korban banjir, tetapi ia langsung menggalang dana dan terbang menjadi relawan membagikan makanan. Sikap Andi dinamakan...',
        options: [
          { id: 'opt1', text: 'Empati' },
          { id: 'opt2', text: 'Simpati' },
          { id: 'opt3', text: 'Etnosentrisme' },
          { id: 'opt4', text: 'Primordialisme' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Empati melibatkan perasaan mendalam disertai tindakan nyata (action).'
      },
      {
        id: 'q_r3',
        question: 'Anggapan bahwa tarian dari daerahnya sendiri adalah yang paling indah dan tarian dari daerah lain terlihat aneh atau konyol merupakan contoh sikap...',
        options: [
          { id: 'opt1', text: 'Etnosentrisme' },
          { id: 'opt2', text: 'Primordialisme' },
          { id: 'opt3', text: 'Empati' },
          { id: 'opt4', text: 'Inklusivisme' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Menilai kebudayaan lain inferior dibanding kebudayaan sendiri adalah etnosentrisme.'
      },
      {
        id: 'q_r4',
        question: 'Sikap memegang teguh ikatan sosial yang dibawa sejak lahir seperti klan, suku bangsa, dan agama dinamakan...',
        options: [
          { id: 'opt1', text: 'Primordialisme' },
          { id: 'opt2', text: 'Etnosentrisme' },
          { id: 'opt3', text: 'Empati' },
          { id: 'opt4', text: 'Asimilasi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Primordialisme berakar pada loyalitas ikatan bawaan sejak lahir.'
      },
      {
        id: 'q_r5',
        question: 'Pernyataan berikut yang BENAR membedakan antara Etnosentrisme dan Empati adalah...',
        options: [
          { id: 'opt1', text: 'Etnosentrisme berpotensi memecah belah persatuan, sedangkan Empati mempererat kepedulian sosial' },
          { id: 'opt2', text: 'Etnosentrisme adalah tindakan nyata menolong sesama' },
          { id: 'opt3', text: 'Empati adalah anggapan bahwa budayanya paling sempurna' },
          { id: 'opt4', text: 'Keduanya merupakan paham politik terlarang' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Etnosentrisme bernilai negatif memicu konflik, sedangkan empati bernilai positif menguatkan solidaritas.'
      }
    ]
  },
  {
    id: 'S',
    code: 'S',
    title: 'TIGA UPAYA MEMBANGUN IDENTITAS MELALUI BHINNEKA TUNGGAL IKA',
    category: 'Integrasi, Hukum & Nilai Kebangsaan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Tepat 3 Upaya Membangun Identitas Nasional melalui Semboyan Bhinneka Tunggal Ika:',
        '1. Mengembangkan Sikap Toleransi dan Menghargai Keberagaman (Kultural).',
        '2. Memperkuat Peran Bahasa Indonesia sebagai Bahasa Pemersatu (Linguistik/Komunikasi).',
        '3. Menerapkan Nilai-Nilai Pancasila dalam Kehidupan Bermasyarakat, Berbangsa, dan Bernegara (Ideologi/Hukum).'
      ],
      fromSupplemental: [
        'Buku Pendidikan Pancasila SMA Kelas X-XII (Kemendikbudristek).',
        'Panduan Identitas Kebangsaan Badan Pembina Ideologi Pancasila (BPIP).'
      ]
    },
    masteryObjectives: [
      'Menyebutkan tepat 3 upaya membangun identitas nasional melalui Bhinneka Tunggal Ika.',
      'Menjelaskan masing-masing dari ketiga upaya dengan contoh kehidupan sehari-hari.',
      'Menggunakan mnemonic hafalan untuk mengingat ketiga upaya secara tepat tanpa tertukar.'
    ],
    fullContent: `Identitas nasional Indonesia dibangun di atas fondasi keberagaman yang diikat oleh semboyan resmi negara "Bhinneka Tunggal Ika" (Berbeda-beda tetapi tetap satu jua).

Tepat 3 Upaya Membangun Identitas Kebangsaan melalui Bhinneka Tunggal Ika:

1. Mengembangkan Sikap Toleransi dan Menghargai Keberagaman (Dimensi Kultural/Sosial):
   - Masyarakat secara aktif membiasakan diri menerima perbedaan suku, agama, ras, dan antar-golongan (SARA) tanpa prasangka.
   - Contoh: Menghormati pelaksanaan ibadah agama lain dan mengapresiasi kesenian daerah luar.

2. Memperkuat Peran Bahasa Indonesia sebagai Bahasa Pemersatu (Dimensi Bahasa/Komunikasi):
   - Menggunakan Bahasa Indonesia yang baik dan benar dalam ruang publik, pendidikan, dan pemerintahan sebagai jembatan komunikasi antar-suku.
   - Contoh: Menggunakan Bahasa Indonesia saat berinteraksi dengan teman dari latar belakang suku yang berbeda.

3. Menerapkan Nilai-Nilai Pancasila dalam Kehidupan Bermasyarakat, Berbangsa, dan Bernegara (Dimensi Ideologi/Hukum):
   - Mengaktualisasikan nilai Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan Sosial dalam tindakan nyata sehari-hari.
   - Contoh: Bermusyawarah menyelesaikan masalah warga dan tidak berlaku adil diskriminatif.`,
    corePoints: [
      'Upaya 1: Toleransi & Menghargai Keberagaman SARA.',
      'Upaya 2: Menggunakan Bahasa Indonesia sebagai Bahasa Pemersatu.',
      'Upaya 3: Menerapkan Nilai-Nilai Pancasila dalam kehidupan nyata.',
      'Tujuan: Membentuk identitas nasional Indonesia yang kokoh dan berkarakter.'
    ],
    keywords: ['Bhinneka Tunggal Ika', 'Toleransi', 'Bahasa Indonesia', 'Pancasila', 'Identitas Nasional'],
    causeProcessEffect: {
      cause: 'Kebutuhan merawat kebhinekaan agar menjadi identitas pemersatu bangsa.',
      process: 'Menerapkan toleransi kultural, komunikasi Bahasa Indonesia, dan ideologi Pancasila.',
      effect: 'Terbentuk identitas nasional Indonesia yang disegani, toleran, dan bersatu.'
    },
    threeSentences: [
      'Tiga upaya membangun identitas bangsa melalui Bhinneka Tunggal Ika adalah toleransi keberagaman, penguatan Bahasa Indonesia, dan penerapan Pancasila.',
      'Toleransi mengajarkan penghormatan pada budaya lain, sedangkan Bahasa Indonesia menjadi jembatan komunikasi antarsuku.',
      'Penerapan nilai Pancasila memastikan keadilan dan persatuan terwujud dalam kehidupan bernegara.'
    ],
    dontConfuse: [
      {
        term: 'Tiga Upaya Bhinneka Tunggal Ika',
        description: 'Pastikan mengingat 3 poin resmi: 1. Toleransi Keberagaman, 2. Bahasa Indonesia Pemersatu, 3. Penerapan Nilai Pancasila. Jangan mengganti dengan contoh acak buatan sendiri.',
        distinction: 'Toleransi + Bahasa Indonesia + Nilai Pancasila.'
      }
    ],
    tableOrDiagram: {
      headers: ['No', 'Upaya Membangun Identitas', 'Fokus Utama', 'Contoh Pelaksanaan'],
      rows: [
        { col1: '1', col2: 'Sikap Toleransi & Menghargai Keberagaman', col3: 'Dimensi Sosial Kultural', col4: 'Menghormati perayaan agama & tradisi suku lain' },
        { col1: '2', col2: 'Memperkuat Bahasa Indonesia', col3: 'Dimensi Komunikasi Nasional', col4: 'Berbahasa Indonesia saat perjumpaan antarsuku' },
        { col1: '3', col2: 'Menerapkan Nilai Pancasila', col3: 'Dimensi Ideologi & Hukum', col4: 'Musyawarah mufakat dan berlaku adil sosial' }
      ]
    },
    mnemonic: {
      phrase: 'BHINNEKA = T-oleransi + B-ahasa Indonesia + P-ancasila (T-B-P)',
      explanation: 'Toleransi Keberagaman + Bahasa Indonesia + Pancasila.'
    },
    likelyExamQuestions: [
      'Sebutkan 3 upaya utama dalam membangun identitas nasional melalui prinsip Bhinneka Tunggal Ika!',
      'Bagaimana peran Bahasa Indonesia dalam mendukung penguatan slogan Bhinneka Tunggal Ika?',
      'Berikan contoh penerapan nilai Pancasila sebagai wujud penguatan identitas Bhinneka Tunggal Ika!'
    ],
    activeRecall: [
      { question: 'Sebutkan 3 upaya membangun identitas melalui Bhinneka Tunggal Ika!', answer: '1. Mengembangkan sikap toleransi keberagaman, 2. Memperkuat Bahasa Indonesia sebagai bahasa pemersatu, 3. Menerapkan nilai-nilai Pancasila.' },
      { question: 'Apa fungsi utama Bahasa Indonesia dalam Bhinneka Tunggal Ika?', answer: 'Sebagai bahasa pemersatu yang menghubungkan komunikasi warga dari berbagai bahasa daerah.' },
      { question: 'Apa wujud nyata penerapan toleransi di lingkungan sekolah?', answer: 'Menghargai perbedaan agama teman dan berteman tanpa membeda-bedakan suku.' },
      { question: 'Sila manakah dari Pancasila yang secara langsung menjiwai slogan Bhinneka Tunggal Ika?', answer: 'Sila ke-3: Persatuan Indonesia.' },
      { question: 'Mnemonic singkat untuk mengingat 3 upaya Bhinneka Tunggal Ika adalah...', answer: 'T-B-P (Toleransi - Bahasa Indonesia - Pancasila).' }
    ],
    flashcards: [
      { id: 's1', front: 'Upaya 1 Bhinneka Tunggal Ika:', back: 'Mengembangkan sikap toleransi dan menghargai keberagaman SARA.' },
      { id: 's2', front: 'Upaya 2 Bhinneka Tunggal Ika:', back: 'Memperkuat peran Bahasa Indonesia sebagai bahasa pemersatu.' },
      { id: 's3', front: 'Upaya 3 Bhinneka Tunggal Ika:', back: 'Menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari.' },
      { id: 's4', front: 'Apa mnemonic mengingat 3 upaya tersebut?', back: 'TBP (Toleransi, Bahasa Indonesia, Pancasila).' },
      { id: 's5', front: 'Apa arti harfiah Bhinneka Tunggal Ika?', back: 'Berbeda-beda tetapi tetap satu jua (dari Kitab Sutasoma karya Mpu Tantular).' }
    ],
    quizQuestions: [
      {
        id: 'q_s1',
        question: 'Tiga upaya tepat dalam membangun identitas kebangsaan melalui Bhinneka Tunggal Ika meliputi...',
        options: [
          { id: 'opt1', text: 'Toleransi keberagaman, Bahasa Indonesia pemersatu, dan penerapan nilai Pancasila' },
          { id: 'opt2', text: 'Penyeragaman suku, penghapusan budaya lokal, dan perdagangan bebas' },
          { id: 'opt3', text: 'Penggunaan bahasa asing, pemisahan daerah, dan penutupan batas' },
          { id: 'opt4', text: 'Sistem kasta, etnosentrisme, dan pemusatan kekuasaan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Toleransi, Bahasa Indonesia, dan Pancasila adalah 3 upaya resmi pemersatu kebhinekaan.'
      },
      {
        id: 'q_s2',
        question: 'Peran Bahasa Indonesia dalam memperkuat Bhinneka Tunggal Ika adalah sebagai...',
        options: [
          { id: 'opt1', text: 'Bahasa pemersatu yang menjembatani komunikasi antarsuku daerah' },
          { id: 'opt2', text: 'Bahasa rahasia kelompok elit politik' },
          { id: 'opt3', text: 'Satu-satunya bahasa yang boleh dituturkan di rumah' },
          { id: 'opt4', text: 'Bahasa pengganti seluruh tarian tradisional' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Bahasa Indonesia adalah lingua franca nasional.'
      },
      {
        id: 'q_s3',
        question: 'Semboyan Bhinneka Tunggal Ika pertama kali dipetik dari kitab kuno karangan Mpu Tantular yang berjudul...',
        options: [
          { id: 'opt1', text: 'Kitab Sutasoma' },
          { id: 'opt2', text: 'Kitab Negarakertagama' },
          { id: 'opt3', text: 'Kitab Arjunawijaya' },
          { id: 'opt4', text: 'Prasasti Yupa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kalimat Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karangan Mpu Tantular era Majapahit.'
      },
      {
        id: 'q_s4',
        question: 'Contoh nyata penerapan nilai-nilai Pancasila dalam membangun identitas nasional adalah...',
        options: [
          { id: 'opt1', text: 'Musyawarah mufakat dalam mengambil keputusan warga' },
          { id: 'opt2', text: 'Memaksa tetangga mengikuti agama yang kita anut' },
          { id: 'opt3', text: 'Mengabaikan kebersihan lingkungan sekitar' },
          { id: 'opt4', text: 'Menganggap kebudayaan luar negeri selalu lebih baik' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Musyawarah mufakat mencerminkan Sila ke-4 Pancasila.'
      },
      {
        id: 'q_s5',
        question: 'Mnemonic T-B-P digunakan untuk mempermudah menghafal 3 upaya Bhinneka Tunggal Ika. Kepanjangan dari T-B-P adalah...',
        options: [
          { id: 'opt1', text: 'Toleransi - Bahasa Indonesia - Pancasila' },
          { id: 'opt2', text: 'Teknologi - Budaya - Politik' },
          { id: 'opt3', text: 'Tindakan - Bangsa - Pembangunan' },
          { id: 'opt4', text: 'Tradisi - Benteng - Pertahanan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'T-B-P = Toleransi, Bahasa Indonesia, Pancasila.'
      }
    ]
  },
  {
    id: 'T',
    code: 'T',
    title: 'DAMPAK POSITIF DAN NEGATIF KEMAJEMUKAN',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Dampak Positif Kemajemukan: 1. Kekayaan khazanah budaya nasional, 2. Daya tarik pariwisata, 3. Membentuk kepribadian toleran, 4. Inovasi kebudayaan melalui akulturasi.',
        'Dampak Negatif Kemajemukan: 1. Potensi konflik horizontal SARA, 2. Timbulnya etnosentrisme & primordialisme sempit, 3. Hambatan integrasi/memicu disintegrasi, 4. Ancam kecemburuan sosial.'
      ],
      fromSupplemental: [
        'Buku Sosiologi Masyarakat Majemuk (Kemendikbudristek).',
        'Studi Antropologi Kebudayaan Indonesia.'
      ]
    },
    masteryObjectives: [
      'Mengidentifikasi dampak positif dan negatif dari kemajemukan masyarakat.',
      'Menjelaskan alasan mengapa kemajemukan dapat berdampak ganda (pedang bermata dua).',
      'Menganalisis langkah-langkah meminimalkan dampak negatif dan mengoptimalkan dampak positif.'
    ],
    fullContent: `Kemajemukan masyarakat Indonesia diibaratkan sebagai pedang bermata dua (*two-edged sword*). Di satu sisi membawa potensi aset yang sangat besar, namun di sisi lain mengandung potensi kerawanan sosial jika tidak dikelola dengan baik.

Tabel Dampak Positif & Dampak Negatif Kemajemukan:

Dampak Positif:
1. Kekayaan Khazanah Kebudayaan: Memiliki ribuan seni, tarian, bahasa, dan kearifan lokal yang unik.
2. Potensi Pariwisata Dunia: Menarik wisatawan mancanegara untuk mempelajari keanekaragaman budaya.
3. Membentuk Kepribadian Toleran: Warga terbiasa bersosialisasi dalam iklim keberagaman sejak dini.
4. Inovasi & Akulturasi Budaya: Memperkaya daya cipta seni, kuliner, dan arsitektur nasional.

Dampak Negatif:
1. Potensi Konflik Horizontal: Gesekan antarkelompok akibat isu SARA (Suku, Agama, Ras, Antargolongan).
2. Timbulnya Etnosentrisme & Primordialisme: Mengagungkan kelompok sendiri dan memandang rendah kelompok lain.
3. Kerawanan Disintegrasi Bangsa: Bencana perpecahan wilayah akibat sentimen kedaerahan yang ekstrem.
4. Kecemburuan Sosial: Asumsi ketimpangan perlakuan antar kelompok di dalam masyarakat.`,
    corePoints: [
      'Positif: Kekayaan budaya, aset pariwisata, kepribadian toleran, akulturasi seni.',
      'Negatif: Konflik horizontal SARA, etnosentrisme, kecemburuan sosial, ancaman disintegrasi.',
      'Kunci Pengelolaan: Komitmen integrasi nasional, penegakan hukum adil, dan toleransi.'
    ],
    keywords: ['Dampak Positif', 'Dampak Negatif', 'Kemajemukan', 'Khazanah Budaya', 'Konflik Horizontal', 'Pedang Bermata Dua'],
    causeProcessEffect: {
      cause: 'Keberadaan realitas kebhinekaan suku, agama, dan budaya.',
      process: 'Jika dikelola dengan toleransi menghasilkan kekuatan budaya; jika diwarnai prasangka memicu konflik.',
      effect: 'Kemajemukan menjadi modal kebangsaan kuat atau sumber disintegrasi sosial.'
    },
    threeSentences: [
      'Kemajemukan masyarakat membawa dampak positif berupa kekayaan khazanah budaya dan potensi pariwisata.',
      'Dampak negatif kemajemukan dapat memicu konflik horizontal SARA, etnosentrisme, dan ancaman disintegrasi.',
      'Pengelolaan kemajemukan secara bijak melalui toleransi dapat mengubah potensi konflik menjadi kekuatan persatuan.'
    ],
    dontConfuse: [
      {
        term: 'Dampak Positif vs Dampak Negatif Kemajemukan',
        description: 'Dampak Positif berfokus pada ASET KEKAYAAN BUDAYA & PARIWISATA, sedangkan Dampak Negatif berfokus pada POTENSI KONFLIK SARA & DISINTEGRASI.',
        distinction: 'Positif = Aset Budaya; Negatif = Potensi Konflik.'
      }
    ],
    tableOrDiagram: {
      headers: ['Aspek Evaluasi', 'Dampak Positif (Aset Bangsa)', 'Dampak Negatif (Kerawanan Sosial)'],
      rows: [
        { col1: 'Kebudayaan', col2: 'Khazanah tarian, musik, & kuliner melimpah', col3: 'Timbul etnosentrisme mengagungkan budaya sendiri' },
        { col1: 'Pariwisata / Ekonomi', col2: 'Daya tarik wisatawan mancanegara', col3: 'Kecemburuan sosial ekonomi antar wilayah' },
        { col1: 'Interaksi Sosial', col2: 'Membentuk kepribadian luwes & toleran', col3: 'Potensi gesekan/konflik horizontal SARA' },
        { col1: 'Keutuhan Negara', col2: 'Pemersatu dalam Bhinneka Tunggal Ika', col3: 'Ancaman disintegrasi / perpecahan NKRI' }
      ]
    },
    mnemonic: {
      phrase: 'MAJEMUK = M-odal A-set J-aya E-koti M-emikat U-ntuk K-ebaikan (atau Konflik)',
      explanation: 'Positif = Modal Aset Budaya; Negatif = Kaji Konflik.'
    },
    likelyExamQuestions: [
      'Mengapa kemajemukan masyarakat Indonesia sering disebut sebagai pedang bermata dua?',
      'Sebutkan 3 dampak positif dan 3 dampak negatif dari kemajemukan masyarakat Indonesia!',
      'Bagaimanakah cara mengantisipasi dampak negatif kemajemukan agar tidak berubah menjadi konflik SARA?'
    ],
    activeRecall: [
      { question: 'Sebutkan 3 dampak positif kemajemukan Indonesia!', answer: '1. Kekayaan khazanah budaya, 2. Daya tarik pariwisata, 3. Membentuk kepribadian warga yang toleran.' },
      { question: 'Sebutkan 3 dampak negatif kemajemukan jika tidak dikelola baik!', answer: '1. Potensi konflik horizontal SARA, 2. Timbulnya etnosentrisme/primordialisme sempit, 3. Ancaman disintegrasi bangsa.' },
      { question: 'Mengapa kemajemukan diartikan sebagai "pedang bermata dua"?', answer: 'Karena di satu sisi menjadi kekayaan aset bangsa, namun di sisi lain menyimpan ancaman perpecahan.' },
      { question: 'Sebutkan contoh konkret dampak positif kemajemukan dalam bidang seni!', answer: 'Lahirnya tarian akulturasi seperti Tari Lenggang Nyai (perpaduan Betawi dan Tionghoa).' },
      { question: 'Apa langkah kunci mencegah timbulnya dampak negatif kemajemukan?', answer: 'Memupuk toleransi, penegakan hukum tanpa diskriminasi, dan pendidikan multikultural.' }
    ],
    flashcards: [
      { id: 't1', front: 'Dampak Positif Kemajemukan 1:', back: 'Kekayaan khazanah budaya nasional (seni, tarian, bahasa).' },
      { id: 't2', front: 'Dampak Positif Kemajemukan 2:', back: 'Daya tarik pariwisata mancanegara & pembentukan jiwa toleran.' },
      { id: 't3', front: 'Dampak Negatif Kemajemukan 1:', back: 'Potensi timbulnya konflik horizontal berlatar SARA.' },
      { id: 't4', front: 'Dampak Negatif Kemajemukan 2:', back: 'Etnosentrisme sempit & ancaman disintegrasi bangsa.' },
      { id: 't5', front: 'Kunci mengubah dampak negatif menjadi positif:', back: 'Toleransi, keadilan sosial, dan semangat Bhinneka Tunggal Ika.' }
    ],
    quizQuestions: [
      {
        id: 'q_t1',
        question: 'Dampak positif dari kemajemukan masyarakat Indonesia dalam bidang pariwisata dan kebudayaan adalah...',
        options: [
          { id: 'opt1', text: 'Menjadi daya tarik wisatawan mancanegara karena keanekaragaman tradisi unik' },
          { id: 'opt2', text: 'Mengharuskan pembuatan visa antar pulau' },
          { id: 'opt3', text: 'Menurunkan jumlah penerbangan ke daerah' },
          { id: 'opt4', text: 'Menyebabkan seluruh museum nasional ditutup' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Keberagaman budaya unik menarik wisatawan lokal maupun mancanegara.'
      },
      {
        id: 'q_t2',
        question: 'Dampak negatif utama dari kemajemukan yang tidak diikat oleh rasa toleransi adalah...',
        options: [
          { id: 'opt1', text: 'Timbulnya konflik horizontal berlatar belakang SARA' },
          { id: 'opt2', text: 'Meningkatnya pendapatan per kapita warga' },
          { id: 'opt3', text: 'Makin banyaknya lagu daerah diproduksi' },
          { id: 'opt4', text: 'Meningkatnya hasil panen padi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Prasangka dan etnosentrisme negatif memicu gesekan konflik SARA.'
      },
      {
        id: 'q_t3',
        question: 'Istilah "pedang bermata dua" untuk menggambarkan kemajemukan masyarakat Indonesia berarti...',
        options: [
          { id: 'opt1', text: 'Kemajemukan menyimpan potensi manfaat kekayaan budaya sekaligus potensi bahaya konflik' },
          { id: 'opt2', text: 'Masyarakat Indonesia diwajibkan membawa pedang' },
          { id: 'opt3', text: 'Perdagangan senjata tajam diperbolehkan bebas' },
          { id: 'opt4', text: 'Negara Indonesia memiliki dua mata uang resmi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Dua sisi: Positif kekayaan budaya vs Negatif potensi perpecahan.'
      },
      {
        id: 'q_t4',
        question: 'Sikap mengagungkan kebudayaan sendiri dan memandang rendah kebudayaan suku lain merupakan contoh dampak negatif kemajemukan yang disebut...',
        options: [
          { id: 'opt1', text: 'Etnosentrisme' },
          { id: 'opt2', text: 'Empati' },
          { id: 'opt3', text: 'Inklusivisme' },
          { id: 'opt4', text: 'Altruisme' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Etnosentrisme memandang rendah budaya kelompok lain.'
      },
      {
        id: 'q_t5',
        question: 'Salah satu upaya untuk memaksimalkan dampak positif kemajemukan di lingkungan sekolah adalah...',
        options: [
          { id: 'opt1', text: 'Menyelenggarakan pentas seni budaya nusantara dan perayaan hari besar nasional bersama' },
          { id: 'opt2', text: 'Memisahkan kelas berdasarkan suku asal siswa' },
          { id: 'opt3', text: 'Melarang siswa berteman dengan siswa dari luar daerah' },
          { id: 'opt4', text: 'Mengurangi jam pelajaran IPS dan Kewarganegaraan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Pentas seni nusantara memupuk rasa bangga dan apresiasi kebhinekaan.'
      }
    ]
  },
  {
    id: 'U',
    code: 'U',
    title: 'INTEGRASI DAN INTEGRITAS INDONESIA',
    category: 'Integrasi, Hukum & Nilai Kebangsaan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Perbedaan tegas antara Integrasi dan Integritas.',
        'Integrasi: Penyatuan elemen-elemen majemuk menjadi satu kesatuan bangsa (NKRI).',
        'Integritas: Kualitas kejujuran, komitmen moral, dan konsistensi memegang prinsip bangsa.',
        'Persamaan, perbedaan, dan hubungan kausal keduanya bagi kejayaan Indonesia.'
      ],
      fromSupplemental: [
        'Buku Pendidikan Kewarganegaraan & Etika Berbangsa (Kemendikbudristek).',
        'Tata Kelola Integritas Nasional KPK & BPIP.'
      ]
    },
    masteryObjectives: [
      'Membedakan definisi Integrasi vs Integritas secara tepat.',
      'Menjelaskan persamaan dan perbedaan kedua konsep.',
      'Menganalisis hubungan sebab-akibat: Integritas individu/pemimpin memperkuat Integrasi nasional.',
      'Memberikan contoh nyata integritas dan integrasi dalam kehidupan bernegara.'
    ],
    fullContent: `Meskipun memiliki kata dasar yang mirip, Integrasi dan Integritas adalah dua konsep sosiologi politik yang berbeda namun saling melengkapi secara erat.

1. Integrasi (Penyatuan Wujud):
   - Pengertian: Proses penyatuan berbagai elemen/kelompok sosial budaya yang berbeda (suku, agama, daerah) ke dalam satu kesatuan wilayah dan identitas nasional (NKRI).
   - Fokus: Wadah Kebangsaan / Struktur Penyatuan (*Unification*).
   - Contoh: Suku Jawa, Sunda, Batak, Papua bersatu di bawah naungan NKRI.

2. Integritas (Kejujuran & Keteguhan Prinsip):
   - Pengertian: Mutu, sifat, atau keadaan yang menunjukkan kesatuan utuh antara ucapan, tindakan, kejujuran, dan kepatuhan pada nilai-nilai moral/hukum.
   - Fokus: Karakter Moral & Kejujuran (*Honesty & Consistency*).
   - Contoh: Pejabat yang jujur tidak korupsi dan menepati janji konstitusi.

Hubungan Keduanya:
Integritas aparatur/warga negara menjadi syarat mutlak terwujudnya Integrasi nasional. Tanpa integritas (misal maraknya korupsi & diskriminasi hukum), rasa keadilan runtuh yang akan memicu kehancuran integrasi (disintegrasi bangsa).`,
    corePoints: [
      'Integrasi = Penyatuan wilayah & kelompok majemuk menjadi NKRI.',
      'Integritas = Kejujuran, konsistensi moral, dan keteguhan prinsip.',
      'Hubungan: Integritas moral pemimpin/warga menjamin kokohnya Integrasi nasional.'
    ],
    keywords: ['Integrasi', 'Integritas', 'NKRI', 'Moralitas', 'Kejujuran', 'Disintegrasi'],
    causeProcessEffect: {
      cause: 'Kebutuhan membentengi NKRI dari perpecahan dan kejahatan korupsi.',
      process: 'Penyatuan wadah kelompok (Integrasi) ditopang oleh kejujuran moral warga (Integritas).',
      effect: 'Terwujud tata kelola negara yang adil, makmur, bermartabat, dan bersatu.'
    },
    threeSentences: [
      'Integrasi merujuk pada penyatuan kelompok-kelompok majemuk ke dalam satu wadah bangsa Indonesia.',
      'Integritas merujuk pada kualitas kejujuran dan keteguhan moral dalam memegang prinsip hukum dan Pancasila.',
      'Integritas para pemimpin dan warga negara sangat menentukan kokohnya integrasi nasional NKRI.'
    ],
    dontConfuse: [
      {
        term: 'Integrasi vs Integritas',
        description: 'Integrasi = BERSATUNYA KELOMPOK/WILAYAH NKRI; Integritas = KEJUJURAN & KONSISTENSI MORAL INDIVIDU.',
        distinction: 'Integrasi = Bersatu Wilayah/Kelompok; Integritas = Jujur Moral/Karakter.'
      }
    ],
    tableOrDiagram: {
      headers: ['Indikator Perbandingan', 'Integrasi Indonesia', 'Integritas Indonesia'],
      rows: [
        { col1: 'Definisi Inti', col2: 'Penyatuan elemen majemuk menjadi satu wadah NKRI', col3: 'Kualitas kejujuran & konsistensi pada prinsip moral' },
        { col1: 'Fokus Kajian', col2: 'Struktur Sosial & Kesatuan Wilayah', col3: 'Karakter Moral & Etika Kepemimpinan' },
        { col1: 'Tujuan Utama', col2: 'Mencegah perpecahan (disintegrasi)', col3: 'Mencegah korupsi, kecurangan, & penyalahgunaan kekuasaan' },
        { col1: 'Contoh Wujud', col2: 'Bhinneka Tunggal Ika & Wilayah NKRI utuh', col3: 'Pejabat jujur transparan & penegakan hukum adil' }
      ]
    },
    mnemonic: {
      phrase: 'INTEGRASI (S-atu wadah) vs INTEGRITAS (T-etap jujur)',
      explanation: 'Integrasi = Satu wadah kelompok; Integritas = Tetap jujur moral.'
    },
    likelyExamQuestions: [
      'Apakah perbedaan mendasar antara istilah integrasi nasional dan integritas nasional?',
      'Mengapa rendahnya integritas pejabat publik dapat mengancam integrasi nasional Indonesia?',
      'Jelaskan hubungan sebab-akibat antara kejujuran moral warga dengan keutuhan NKRI!'
    ],
    activeRecall: [
      { question: 'Apa perbedaan mendasar antara Integrasi dan Integritas?', answer: 'Integrasi adalah penyatuan kelompok/wilayah majemuk; Integritas adalah mutu kejujuran dan konsistensi moral.' },
      { question: 'Apa fokus utama dari integrasi nasional?', answer: 'Menjaga persatuan dan keutuhan wilayah NKRI dari bahaya perpecahan.' },
      { question: 'Apa fokus utama dari integritas?', answer: 'Menjaga kejujuran, etika, dan kepatuhan pada nilai-nilai hukum/Pancasila.' },
      { question: 'Bagaimana integritas yang rendah memicu disintegrasi?', answer: 'Korupsi dan diskriminasi hukum akibat jatuhnya integritas menimbulkan ketidakadilan yang memicu daerah memisahkan diri.' },
      { question: 'Sebutkan kata kunci untuk mengingat Integritas!', answer: 'Kejujuran, Etika, Konsistensi Moral, Karakter Utuh.' }
    ],
    flashcards: [
      { id: 'u1', front: 'Apa pengertian Integrasi?', back: 'Penyatuan kelompok-kelompok sosial budaya berbeda ke dalam satu wadah NKRI.' },
      { id: 'u2', front: 'Apa pengertian Integritas?', back: 'Mutu kejujuran, komitmen moral, dan konsistensi memegang prinsip kebenaran.' },
      { id: 'u3', front: 'Apa dampak hilangnya integritas di suatu negara?', back: 'Maraknya korupsi, kecurangan, dan ketidakadilan yang merusak persatuan.' },
      { id: 'u4', front: 'Apa hubungan antara Integritas dan Integrasi?', back: 'Integritas moral warga/pemimpin merupakan pondasi utama kokohnya integrasi bangsa.' },
      { id: 'u5', front: 'Sebutkan contoh perilaku berintegritas di sekolah!', back: 'Jujur saat ujian tidak mencontek dan disiplin mentaati tata tertib sekolah.' }
    ],
    quizQuestions: [
      {
        id: 'q_u1',
        question: 'Proses penyatuan berbagai suku, agama, dan wilayah ke dalam kesatuan wadah NKRI dinamakan..., sedangkan kualitas kejujuran dan konsistensi moral warga negara dinamakan...',
        options: [
          { id: 'opt1', text: 'Integrasi dan Integritas' },
          { id: 'opt2', text: 'Integritas dan Integrasi' },
          { id: 'opt3', text: 'Asimilasi dan Akulturasi' },
          { id: 'opt4', text: 'Diferensiasi dan Stratifikasi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Integrasi = penyatuan kelompok/wilayah; Integritas = kejujuran/karakter moral.'
      },
      {
        id: 'q_u2',
        question: 'Seorang pejabat yang menolak suap dan menjalankan tugas sesuai konstitusi secara jujur menunjukkan bahwa pejabat tersebut memiliki...',
        options: [
          { id: 'opt1', text: 'Integritas tinggi' },
          { id: 'opt2', text: 'Etnosentrisme tinggi' },
          { id: 'opt3', text: 'Primordialisme tinggi' },
          { id: 'opt4', text: 'Eksklusivisme tinggi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Menolak suap dan jujur adalah ciri utama integritas moral.'
      },
      {
        id: 'q_u3',
        question: 'Ancaman disintegrasi nasional di suatu daerah sering kali dipicu oleh hilangnya integritas pejabat yang melakukan kecurangan berupa...',
        options: [
          { id: 'opt1', text: 'Korupsi dana pembangunan daerah dan penegakan hukum diskriminatif' },
          { id: 'opt2', text: 'Penyelenggaraan tarian daerah masal' },
          { id: 'opt3', text: 'Pembangunan sekolah multikultural' },
          { id: 'opt4', text: 'Pelaksanaan perlombaan olahraga nasional' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Korupsi dan ketidakadilan akibat hilangnya integritas memicu kekecewaan dan disintegrasi.'
      },
      {
        id: 'q_u4',
        question: 'Pernyataan berikut yang TEPAT menggambarkan hubungan antara integrasi dan integritas adalah...',
        options: [
          { id: 'opt1', text: 'Integritas moral warga dan pemimpin merupakan pilar utama penopang integrasi nasional' },
          { id: 'opt2', text: 'Integrasi dan integritas memiliki arti yang sama persis' },
          { id: 'opt3', text: 'Integritas hanya berlaku bagi aparat militer saja' },
          { id: 'opt4', text: 'Integrasi nasional tidak memerlukan kejujuran masyarakat' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Integritas moral menjadi pondasi berdirinya integrasi bangsa.'
      },
      {
        id: 'q_u5',
        question: 'Salah satu cara menanamkan nilai integritas di kalangan siswa sekolah adalah...',
        options: [
          { id: 'opt1', text: 'Kantin kejujuran dan pembiasaan tidak mencontek saat ujian' },
          { id: 'opt2', text: 'Memberikan nilai bagus tanpa perlu belajar' },
          { id: 'opt3', text: 'Membantu teman menjawab soal tes secara rahasia' },
          { id: 'opt4', text: 'Melarang siswa bertanya pada guru' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kantin kejujuran melatih nilai integritas kejujuran secara praktis.'
      }
    ]
  }
];
