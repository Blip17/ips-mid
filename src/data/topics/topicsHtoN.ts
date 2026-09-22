import { TopicData } from '../../types/topics';

export const topicsHtoN: TopicData[] = [
  {
    id: 'H',
    code: 'H',
    title: 'RAS MELANESOID',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Ras Melanesoid bermigrasi ke Nusantara sekitar 7000 SM - 5000 SM.',
        'Ciri fisik: kulit gelap, rambut keriting, bibir agak tebal, hidung lebar, postur tubuh tegap.',
        'Persebaran utama di wilayah timur Indonesia: Papua, Maluku, Nusa Tenggara Timur (NTT).'
      ],
      fromSupplemental: [
        'Buku Sejarah Indonesia SMA/MA Kelas X (Kemendikbudristek).',
        'Studi Etnografi Indonesia Timur (Pusat Riset Antropologi BRIN/Kemendikbud).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan konteks keberadaan Ras Melanesoid di Indonesia.',
      'Mengidentifikasi waktu migrasi dan rute persebaran Ras Melanesoid.',
      'Menyebutkan ciri fisik dan hasil kebudayaan (kebudayaan Bacson-Hoabinh).',
      'Mengidentifikasi wilayah konsentrasi utama Ras Melanesoid di Indonesia Timur.'
    ],
    fullContent: `Ras Melanesoid (Austro-Melanesoid) adalah salah satu ras utama yang mendiami Kepulauan Nusantara, khususnya bagian timur Indonesia. Kelompok ras ini bermigrasi ke kawasan Nusantara sekitar 7.000–5.000 SM (era Mesolitikum hingga Neolitikum awal).

Awalnya mereka menyebar di sekitar Teluk Tonkin (Vietnam) dan membawa kebudayaan Bacson-Hoabinh. Dari Indochina, mereka bergerak menyusuri kepulauan ke selatan. Namun, saat gelombang migrasi rumpun Austronesia (Mongoloid/Melayu) masuk dari barat, sebagian ras Melanesoid terdesak dan berpindah ke arah timur Nusantara.

Ciri Fisik Ras Melanesoid:
- Kulit gelap (cokelat tua hingga hitam).
- Rambut keriting padat bergelombang.
- Bibir tebal dan hidung lebar.
- Postur tubuh tinggi tegap.

Wilayah Persebaran & Suku:
Masyarakat Papua (seperti Suku Asmat, Dani, Biak), Kepulauan Maluku, dan Nusa Tenggara Timur (NTT).`,
    corePoints: [
      'Waktu Kedatangan: ± 7.000 SM - 5.000 SM (Pasca-Glasial Mesolitikum).',
      'Ciri Fisik: Kulit gelap, rambut keriting, bibir tebal, badan tegap.',
      'Kebudayaan Khas: Bacson-Hoabinh (Kapak Genggam Sumatra / Pebble).',
      'Wilayah Persebaran: Papua, Maluku, Nusa Tenggara Timur (NTT).'
    ],
    keywords: ['Ras Melanesoid', 'Bacson-Hoabinh', 'Papua', 'NTT', 'Maluku', 'Kapak Genggam Sumatra', 'Pebble'],
    causeProcessEffect: {
      cause: 'Migrasi dari Indochina ke selatan dan terdesaknya mereka oleh kedatangan ras Mongoloid/Austronesia di bagian barat.',
      process: 'Mendorong ras Melanesoid bergerak makin ke timur melintasi pulau-pulau di Nusa Tenggara, Maluku, hingga Pulau Papua.',
      effect: 'Kawasan Indonesia Timur menjadi pusat domisili rumpun ras Melanesoid hingga saat ini.'
    },
    threeSentences: [
      'Ras Melanesoid bermigrasi ke Nusantara sekitar 7.000 SM dengan membawa kebudayaan Bacson-Hoabinh.',
      'Memiliki ciri fisik kulit gelap, rambut keriting, dan badan tegap yang mendominasi kawasan Indonesia Timur.',
      'Suku keturunan ras Melanesoid saat ini dapat dijumpai di Papua, Maluku, dan Nusa Tenggara Timur.'
    ],
    dontConfuse: [
      {
        term: 'Melanesoid vs Proto Melayu',
        description: 'Melanesoid mendiami Indonesia Timur berkarakter kulit gelap dan rambut keriting, sedangkan Proto Melayu (Mongoloid) mendiami bagian barat/pedalaman dengan kulit sawo matang dan rambut lurus/ikal.',
        distinction: 'Melanesoid = Indonesia Timur (Papua/NTT/Maluku); Proto Melayu = Barat/Pedalaman (Batak/Dayak/Toraja).'
      }
    ],
    tableOrDiagram: {
      headers: ['Indikator', 'Ras Melanesoid', 'Ras Proto Melayu', 'Ras Deutro Melayu'],
      rows: [
        { col1: 'Domisili Utama', col2: 'Papua, Maluku, NTT', col3: 'Pedalaman (Dayak, Batak, Toraja)', col4: 'Pesisir (Jawa, Sunda, Minang)' },
        { col1: 'Ciri Rambut', col2: 'Keriting padat', col3: 'Lurus / Ikal', col4: 'Lurus' },
        { col1: 'Warna Kulit', col2: 'Gelap / Cokelat Tua', col3: 'Sawo matang agak kuning', col4: 'Sawo matang' }
      ]
    },
    mnemonic: {
      phrase: 'MELANESOID = M-enyebar E-ast L-aut A-da N-egara E-lor S-uku O-rang I-ndonesia D-ua (Papua-NTT)',
      explanation: 'Melanesoid di East/Timur (Papua, Maluku, NTT).'
    },
    likelyExamQuestions: [
      'Wilayah di Indonesia yang menjadi konsentrasi utama pemukiman ras Melanesoid adalah...',
      'Kebudayaan batu madya asal Indochina yang erat kaitannya dengan ras Melanesoid adalah...',
      'Suku Asmat dan Suku Dani di Papua tergolong dalam ras...'
    ],
    activeRecall: [
      { question: 'Di bagian Indonesia manakah populasi Ras Melanesoid terkonsentrasi?', answer: 'Indonesia Bagian Timur (Papua, Maluku, NTT).' },
      { question: 'Sebutkan 3 ciri fisik utama ras Melanesoid!', answer: 'Kulit gelap, rambut keriting, bibir tebal tegap.' },
      { question: 'Kebudayaan apa yang dihubungkan dengan kedatangan Melanesoid?', answer: 'Kebudayaan Bacson-Hoabinh.' },
      { question: 'Kapan perkiraan waktu migrasi ras Melanesoid ke Indonesia?', answer: 'Sekitar 7.000 SM - 5.000 SM.' },
      { question: 'Sebutkan contoh suku bangsa keturunan Melanesoid di Indonesia!', answer: 'Suku Asmat, Suku Dani, Suku Biak, Suku Ambon, dan Suku Timor.' }
    ],
    flashcards: [
      { id: 'h1', front: 'Di mana wilayah utama Ras Melanesoid di Indonesia?', back: 'Papua, Maluku, dan Nusa Tenggara Timur (NTT).' },
      { id: 'h2', front: 'Apa kebudayaan khas yang dibawa Ras Melanesoid?', back: 'Kebudayaan Bacson-Hoabinh (Pebble/Kapak Genggam Sumatra).' },
      { id: 'h3', front: 'Sebutkan ciri fisik khas Ras Melanesoid!', back: 'Kulit gelap, rambut keriting, bibir tebal, tubuh tegap.' },
      { id: 'h4', front: 'Mengapa ras Melanesoid lebih banyak berada di wilayah timur Indonesia?', back: 'Terdesak oleh gelombang migrasi Austronesia (Mongoloid) yang masuk dari wilayah barat.' },
      { id: 'h5', front: 'Sebutkan 2 suku di Papua yang termasuk ras Melanesoid!', back: 'Suku Asmat dan Suku Dani.' }
    ],
    quizQuestions: [
      {
        id: 'q_h1',
        question: 'Masyarakat Suku Asmat, Dani, dan Biak di Papua secara antropologis tergolong dalam ras...',
        options: [
          { id: 'opt1', text: 'Melanesoid' },
          { id: 'opt2', text: 'Deutro Melayu' },
          { id: 'opt3', text: 'Kaukasoid' },
          { id: 'opt4', text: 'Mongoloid Barat' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Papua merupakan wilayah konsentrasi utama ras Melanesoid di Indonesia.'
      },
      {
        id: 'q_h2',
        question: 'Kebudayaan pra-aksara asal Vietnam yang berakulturasi dengan ras Melanesoid di Nusantara adalah kebudayaan...',
        options: [
          { id: 'opt1', text: 'Bacson-Hoabinh' },
          { id: 'opt2', text: 'Dongson' },
          { id: 'opt3', text: 'Sa Huynh' },
          { id: 'opt4', text: 'Pacitan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kebudayaan Bacson-Hoabinh ditandai oleh alat batu pebble yang dibawa Melanesoid.'
      },
      {
        id: 'q_h3',
        question: 'Salah satu ciri fisik pembeda utama dari ras Melanesoid dibandingkan ras Mongoloid adalah...',
        options: [
          { id: 'opt1', text: 'Rambut keriting dan kulit cenderung gelap' },
          { id: 'opt2', text: 'Mata sipit dan kulit putih kekuningan' },
          { id: 'opt3', text: 'Rambut pirang lurus dan hidung mancung tajam' },
          { id: 'opt4', text: 'Tubuh sangat pendek kerdil' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Rambut keriting padat dan kulit gelap adalah ciri fisik khas ras Melanesoid.'
      },
      {
        id: 'q_h4',
        question: 'Provinsi berikut di Indonesia yang mayoritas penduduk aslinya merupakan keturunan ras Melanesoid adalah...',
        options: [
          { id: 'opt1', text: 'Papua dan Nusa Tenggara Timur (NTT)' },
          { id: 'opt2', text: 'Jawa Barat dan Banten' },
          { id: 'opt3', text: 'Sumatra Utara dan Riau' },
          { id: 'opt4', text: 'Kalimantan Barat dan Kalimantan Tengah' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kawasan timur Indonesia seperti Papua dan NTT didominasi oleh keturunan Melanesoid.'
      },
      {
        id: 'q_h5',
        question: 'Perpindahan lokasi permukiman ras Melanesoid ke kawasan timur Nusantara terutama dipengaruhi oleh...',
        options: [
          { id: 'opt1', text: 'Kedatangan migrasi bangsa penutur Austronesia dari arah barat' },
          { id: 'opt2', text: 'Letusan gunung berapi raksasa di Pulau Papua' },
          { id: 'opt3', text: 'Persetujuan perjanjian batas wilayah kolonial' },
          { id: 'opt4', text: 'Bencana gelombang tsunami samudra Hindia' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Masuknya rumpun Austronesia yang lebih massif di bagian barat membuat kelompok Melanesoid bergeser ke timur.'
      }
    ]
  },
  {
    id: 'I',
    code: 'I',
    title: 'FAKTOR PENYEBAB KEMAJEMUKAN BANGSA',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Masyarakat Indonesia bersifat majemuk (pluralistic society).',
        'Faktor Penyebab Kemajemukan: 1. Letak Strategis Wilayah (Silang Maritim), 2. Kondisi Geografis Kepulauan (Isolasi), 3. Perbedaan Kondisi Iklim/Lahan, 4. Sejarah Migrasi Bangsa Asing.'
      ],
      fromSupplemental: [
        'Buku Sosiologi SMA/MA Kelas XI (Kemendikbudristek).',
        'Studi Sosiologi Pluralisme Indonesia (Nasikun).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian masyarakat majemuk Indonesia menurut Nasikun & Furnivall.',
      'Menganalisis 4 faktor utama penyebab kemajemukan (Geografis, Letak Strategis, Iklim, Historis).',
      'Menghubungkan setiap faktor dengan contoh konkret kehidupan bermasyarakat.',
      'Membedakan pengaruh faktor geografis isolasi vs faktor silang maritim.'
    ],
    fullContent: `Masyarakat Indonesia dikenal sebagai masyarakat majemuk (*plural society*). Menurut Prof. Nasikun, kemajemukan bangsa Indonesia ditandai oleh keanekaragaman suku bangsa, agama, ras, dan adat istiadat yang terbagi secara horizontal.

Faktor-Faktor Penyebab Kemajemukan Indonesia:
1. Kondisi Geografis Bentuk Kepulauan (Isolasi Geografis):
   - Indonesia terdiri dari >17.000 pulau. Terisolasinya kelompok masyarakat di pulau-pulau terpisah menyebabkan pengembangan kebudayaan, suku, dan bahasa daerah yang berbeda-beda (*sub-culture*).
2. Letak Geografis Strategis (Posisi Silang Maritim):
   - Terletak di antara dua samudra (Hindia & Pasifik) dan dua benua (Asia & Australia). Jalur perdagangan dunia ini mengundang bangsa asing (China, India, Arab, Eropa) yang membawa agama dan budaya baru.
3. Perbedaan Kondisi Iklim & Struktur Tanah:
   - Perbedaan curah hujan dan kesuburan tanah antara Indonesia Barat (subur/sawah) dan Indonesia Timur (kering/padang savana) menciptakan variasi mata pencaharian dan gaya hidup masyarakat.
4. Faktor Historis Migrasi Bangsa:
   - Kedatangan berbagai gelombang manusia purba dan migrasi (Negrito, Austronesia, India, Arab, Tionghoa, Eropa).`,
    corePoints: [
      'Letak Strategis: Perdagangan silang maritim membawa masuk agama & ras asing.',
      'Bentuk Kepulauan: Isolasi alam menciptakan >1.300 suku bangsa & bahasa daerah.',
      'Iklim & Tanah: Variasi agraris pesisir vs pegunungan vs padang rumput.',
      'Sejarah Migrasi: Akulturasi gelombang ras purba dan pendatang.'
    ],
    keywords: ['Kemajemukan', 'Masyarakat Majemuk', 'Isolasi Geografis', 'Posisi Silang', 'Pluralisme', 'Nasikun'],
    causeProcessEffect: {
      cause: 'Kondisi fisik alam kepulauan dan posisi geopolitik Nusantara di tengah lalu lintas maritim dunia.',
      process: 'Masyarakat mengembangkan adaptasi budaya lokal mandiri sekaligus menyerap budaya asing yang datang.',
      effect: 'Terbentuklah Indonesia sebagai bangsa yang sangat kaya akan keberagaman suku, bahasa, dan agama.'
    },
    threeSentences: [
      'Kemajemukan bangsa Indonesia disebabkan oleh letak geografis strategis, bentuk negara kepulauan, variasi iklim, dan sejarah migrasi.',
      'Isolasi alam di pulau-pulau memicu lahirnya keanekaragaman suku bangsa dan bahasa daerah yang berbeda.',
      'Posisi silang jalur perdagangan dunia mengundang datangnya berbagai ras dan agama asing ke Indonesia.'
    ],
    dontConfuse: [
      {
        term: 'Isolasi Geografis vs Posisi Silang Strategis',
        description: 'Isolasi geografis menciptakan keanekaragaman SUKU LOKAL dan BAHASA DAERAH, sedangkan Posisi Silang Strategis menciptakan keanekaragaman AGAMA dan BUDAYA ASING.',
        distinction: 'Kepulauan/Isolasi = Suku & Bahasa Lokal; Silang Strategis = Agama & Kebudayaan Asing.'
      }
    ],
    tableOrDiagram: {
      headers: ['Faktor Penyebab', 'Mekanisme Dampak', 'Hasil Keberagaman', 'Contoh Realita'],
      rows: [
        { col1: 'Kondisi Kepulauan', col2: 'Isolasi alam antar pulau', col3: 'Keanekaragaman Suku & Bahasa', col4: 'Suku Toraja, Dayak, Minang' },
        { col1: 'Letak Strategis', col2: 'Lalu lintas perdagangan internasional', col3: 'Keanekaragaman Agama & Ras', col4: 'Islam, Hindu, Buddha, Tionghoa' },
        { col1: 'Iklim & Tanah', col2: 'Perbedaan vegetasi & sumber air', col3: 'Keanekaragaman Mata Pencaharian', col4: 'Petani Sawah Jawa vs Peternak NTT' }
      ]
    },
    mnemonic: {
      phrase: 'KEMAJEMUKAN = K-epulauan E-kologi M-igrasi A-gama J-alur E-konomi M-asyarakat U-nik K-ondisi A-lam N-usantara',
      explanation: 'Kepulauan + Jalur Strategis + Ekologi + Migrasi = Kemajemukan.'
    },
    likelyExamQuestions: [
      'Faktor geografis utama yang menjadi penyebab munculnya beraneka ragam suku bangsa dan bahasa daerah di Indonesia adalah...',
      'Masuknya agama-agama besar di Indonesia seperti Hindu, Buddha, Islam, dan Kristen merupakan akibat dari faktor...',
      'Mengapa perbedaan kondisi iklim antara Indonesia Barat dan Indonesia Timur dapat mempengaruhi budaya masyarakat?'
    ],
    activeRecall: [
      { question: 'Sebutkan 4 faktor utama penyebab kemajemukan bangsa Indonesia!', answer: '1. Letak strategis, 2. Kondisi kepulauan, 3. Perbedaan iklim/tanah, 4. Sejarah migrasi.' },
      { question: 'Faktor manakah yang memicu lahirnya keanekaragaman suku bangsa lokal?', answer: 'Kondisi geografis bentuk kepulauan (isolasi geografis).' },
      { question: 'Faktor manakah yang memicu masuknya agama-agama asing di Indonesia?', answer: 'Letak geografis strategis (posisi silang lalu lintas perdagangan maritim).' },
      { question: 'Siapa tokoh sosiologi Indonesia yang memetakan teori masyarakat majemuk?', answer: 'Prof. Nasikun.' },
      { question: 'Bagaimana kondisi iklim NTT mempengaruhi mata pencaharian khas setempat?', answer: 'Curah hujan rendah membentuk padang savana sehingga masyarakat berfokus pada peternakan.' }
    ],
    flashcards: [
      { id: 'i1', front: 'Apa dampak bentuk kepulauan bagi kemajemukan Indonesia?', back: 'Terjadinya isolasi geografis yang melahirkan beragam suku dan bahasa daerah.' },
      { id: 'i2', front: 'Apa dampak posisi silang Indonesia di jalur perdagangan laut?', back: 'Masuknya pengaruh berbagai ras dan agama besar dari luar negeri.' },
      { id: 'i3', front: 'Bagaimana perbedaan tanah mempengaruhi budaya lokal?', back: 'Menciptakan variasi sistem kerja (petani sawah, nelayan, peternak savana).' },
      { id: 'i4', front: 'Siapa sosiolog Indonesia pengusung teori kemajemukan horizontal?', back: 'Prof. Nasikun.' },
      { id: 'i5', front: 'Apakah arti Plural Society menurut Furnivall?', back: 'Masyarakat terbagi menjadi kelompok-kelompok berdampingan tanpa pembauran total.' }
    ],
    quizQuestions: [
      {
        id: 'q_i1',
        question: 'Faktor utama yang menyebabkan keanekaragaman suku bangsa dan bahasa daerah yang sangat banyak di Indonesia adalah...',
        options: [
          { id: 'opt1', text: 'Kondisi geografis Indonesia yang berbentuk kepulauan' },
          { id: 'opt2', text: 'Penjajahan bangsa Belanda selama 350 tahun' },
          { id: 'opt3', text: 'Penggunaan sistem pendidikan nasional berpola sama' },
          { id: 'opt4', text: 'Sistem pemerintahan yang berganti-ganti' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Bentuk kepulauan memisahkan antar kelompok sehingga berkembang menjadi suku & bahasa berbeda.'
      },
      {
        id: 'q_i2',
        question: 'Masuk dan berkembangnya bermacam-macam agama besar seperti Hindu, Buddha, Islam, dan Kristen di Nusantara dipengaruhi oleh faktor...',
        options: [
          { id: 'opt1', text: 'Letak geografis Indonesia yang strategis di jalur silang perdagangan dunia' },
          { id: 'opt2', text: 'Banyaknya gunung berapi aktif di Jawa' },
          { id: 'opt3', text: 'Kesamaan garis pantai di seluruh pulau' },
          { id: 'opt4', text: 'Kemajuan teknologi penerbangan udara' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Jalur silang perdagangan laut internasional mempertemukan masyarakat lokal dengan pedagang mancanegara.'
      },
      {
        id: 'q_i3',
        question: 'Pernyataan berikut yang menunjukkan pengaruh perbedaan iklim terhadap kemajemukan budaya adalah...',
        options: [
          { id: 'opt1', text: 'Masyarakat Jawa mengembangkan pertanian sawah basah, sedangkan masyarakat NTT berfokus pada peternakan savana' },
          { id: 'opt2', text: 'Semua masyarakat Indonesia mengonsumsi nasi gandum' },
          { id: 'opt3', text: 'Masyarakat kota dan desa memiliki bahasa daerah yang persis sama' },
          { id: 'opt4', text: 'Seluruh suku di Indonesia menggunakan rumah panggung bambu' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Perbedaan curah hujan & iklim memicu mata pencaharian dan adaptasi budaya bercocok tanam yang berbeda.'
      },
      {
        id: 'q_i4',
        question: 'Masyarakat majemuk Indonesia menurut Nasikun dicirikan oleh keberagaman sosial yang terstruktur secara...',
        options: [
          { id: 'opt1', text: 'Horizontal berdasarkan kesatuan-kesatuan sosial (suku, agama, ras)' },
          { id: 'opt2', text: 'Vertikal berdasarkan kasta keturunan bangsawan' },
          { id: 'opt3', text: 'Anarki tanpa aturan hukum' },
          { id: 'opt4', text: 'Homogen seragam dalam satu budaya' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku, agama, dan adat tergolong struktur horizontal (tidak bertingkat kelas atas/bawah).'
      },
      {
        id: 'q_i5',
        question: 'Kemajemukan bangsa Indonesia merupakan kekayaan nasional, namun jika tidak dikelola dengan baik dapat berpotensi menimbulkan...',
        options: [
          { id: 'opt1', text: 'Konflik disintegrasi sosial' },
          { id: 'opt2', text: 'Kenaikan ekspor migas' },
          { id: 'opt3', text: 'Penurunan angka kelahiran' },
          { id: 'opt4', text: 'Hilangnya seluruh gunung berapi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Sifat primordialisme negatif dan etnosentrisme dapat mengancam disintegrasi bangsa.'
      }
    ]
  },
  {
    id: 'J',
    code: 'J',
    title: 'KEBUDAYAAN DONGSON',
    category: 'Kebudayaan & Hasil Seni Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Kebudayaan Dongson berasal dari Lembah Song Hong (Vietnam Utara) pada era Zaman Logam Perunggu (±500 SM).',
        'Dibawa masuk ke Indonesia oleh gelombang migrasi Deutro Melayu (Melayu Muda).',
        'Hasil Artefak Utama: Nekara perunggu, Moko, Cendrasa (kapak sepatu), Bejana perunggu, dan Patung perunggu.'
      ],
      fromSupplemental: [
        'Buku Arkeologi Zaman Logam Indonesia (Kemendikbudristek).',
        'Modul Sejarah Kebudayaan Asia Tenggara (Universitas Gadjah Mada).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan asal-usul dan wilayah kelahiran Kebudayaan Dongson.',
      'Menjelaskan hubungan Kebudayaan Dongson dengan gelombang migrasi Deutro Melayu.',
      'Mengidentifikasi dan menjelaskan fungsi artefak khas Dongson (Nekara, Moko, Cendrasa, Bejana).',
      'Menganalisis hiasan ragam hias khas Dongson (pilin berganda, tumpal, burung air, sampan).'
    ],
    fullContent: `Kebudayaan Dongson adalah kebudayaan Zaman Perunggu yang berkembang di lembah Sungai Merah (Song Hong), Vietnam Utara sekitar tahun 500 SM - 300 SM. Kebudayaan ini diposisikan sebagai induk kebudayaan perunggu di Asia Tenggara dan Nusantara.

Penyebaran kebudayaan Dongson ke Indonesia dibawa oleh gelombang migrasi Deutro Melayu (Melayu Muda) melalui jalur barat. Keterampilan mengecor perunggu tingkat tinggi disebarkan ke berbagai pulau di Nusantara.

Artefak Peninggalan Dongson di Indonesia:
1. Nekara Perunggu: Genderang perunggu raksasa berpinggang sempit dengan hiasan geometris. Digunakan dalam upacara pemanggilan hujan dan penobatan kepala suku. Contoh terkenal: Nekara "Makalam" di Melolo & "Bulan Pejeng" di Bali.
2. Moko: Nekara berukuran lebih kecil khas Kepulauan Alor (NTT) yang difungsikan sebagai mas kawin (*dowry*) dan alat tukar.
3. Cendrasa: Kapak perunggu berbentuk tajaman melengkung mirip sarung senjata yang berfungsi sebagai alat upacara kebesaran/kebesaran raja.
4. Bejana Perunggu: Wadah perunggu berbentuk mirip keranjang bermotif lengkung.`,
    corePoints: [
      'Asal: Lembah Song Hong (Vietnam Utara), Zaman Perunggu (500 SM).',
      'Pembawa: Migrasi Deutro Melayu (Melayu Muda).',
      'Artefak Khas: Nekara perunggu, Moko (Alor), Cendrasa (kapak sepatu), Bejana Perunggu.',
      'Fungsi Utama: Alat upacara ritual (pemanggil hujan, penobatan, mas kawin), bukan sekadar alat kerja harian.'
    ],
    keywords: ['Kebudayaan Dongson', 'Nekara', 'Moko', 'Cendrasa', 'Song Hong', 'Perunggu', 'Deutro Melayu'],
    causeProcessEffect: {
      cause: 'Perkembangan teknik pengetoran logam perunggu di Vietnam Utara.',
      process: 'Gelombang Deutro Melayu bermigrasi membawa keahlian perunggu Dongson ke Kepulauan Nusantara.',
      effect: 'Nusantara memasuki Zaman Perundagian dengan peninggalan seni ukir perunggu megah seperti Nekara dan Moko.'
    },
    threeSentences: [
      'Kebudayaan Dongson berasal dari Vietnam Utara dan merupakan induk kebudayaan perunggu di Nusantara.',
      'Kebudayaan ini disebarkan oleh migrasi Deutro Melayu dengan hasil karya utama berupa Nekara perunggu dan Moko.',
      'Nekara difungsikan sebagai alat ritual keagamaan pemanggil hujan serta simbol status sosial kepemimpinan.'
    ],
    dontConfuse: [
      {
        term: 'Nekara vs Moko',
        description: 'Nekara berukuran besar dan lebar difungsikan untuk upacara pemanggil hujan / ritual adat, sedangkan Moko berukuran lebih kecil ramping dan khusus digunakan di Alor sebagai mas kawin.',
        distinction: 'Nekara = Genderang Besar Ritual Hujan; Moko = Genderang Kecil Mas Kawin Alor.'
      }
    ],
    tableOrDiagram: {
      headers: ['Artefak Dongson', 'Bentuk Fisik', 'Fungsi Utama', 'Lokasi Penemuan Khas'],
      rows: [
        { col1: 'Nekara', col2: 'Dandang terbalik berpinggang', col3: 'Upacara pemanggil hujan & penobatan', col4: 'Bali (Pejeng), Sumatra, Roti' },
        { col1: 'Moko', col2: 'Nekara kecil silinder', col3: 'Mas kawin & alat tukar adat', col4: 'Kepulauan Alor (NTT)' },
        { col1: 'Cendrasa', col2: 'Kapak perunggu artistik', col3: 'Tanda kebesaran kepala suku', col4: 'Jawa & Sulawesi' },
        { col1: 'Bejana Perunggu', col2: 'Wadah bermotif kait', col3: 'Wadah air suci ritual', col4: 'Madura & Kerinci' }
      ]
    },
    mnemonic: {
      phrase: 'DONGSON = D-eutro Melayu O-rang N-ekara G-enderang S-ong Hong O-lah N-erunggu',
      explanation: 'Dongson = Deutro Melayu + Nekara Genderang + Song Hong Vietnam + Perunggu.'
    },
    likelyExamQuestions: [
      'Induk kebudayaan perunggu di Asia Tenggara yang mempengaruhi peninggalan logam di Indonesia adalah kebudayaan...',
      'Genderang perunggu berukuran kecil dari Kepulauan Alor yang digunakan sebagai mas kawin dinamakan...',
      'Apakah fungsi utama penggunaan Nekara perunggu bagi masyarakat pra-aksara pada zaman Perundagian?'
    ],
    activeRecall: [
      { question: 'Dari negara manakah Kebudayaan Dongson berasal?', answer: 'Vietnam Utara (Lembah Sungai Song Hong/Sungai Merah).' },
      { question: 'Kelompok migrasi manakah yang membawa Kebudayaan Dongson ke Nusantara?', answer: 'Deutro Melayu (Melayu Muda).' },
      { question: 'Apa fungsi utama Nekara perunggu?', answer: 'Sebagai alat ritual pemanggil hujan dan penobatan kepala suku.' },
      { question: 'Di pulau manakah Moko dijadikan tradisi alat mas kawin?', answer: 'Kepulauan Alor, Nusa Tenggara Timur (NTT).' },
      { question: 'Apa itu Cendrasa?', answer: 'Kapak perunggu indah berbentuk hiasan sarung senjata yang dipakai sebagai lambang kebesaran.' }
    ],
    flashcards: [
      { id: 'j1', front: 'Di manakah pusat lahirnya Kebudayaan Dongson?', back: 'Lembah Song Hong (Sungai Merah), Vietnam Utara.' },
      { id: 'j2', front: 'Siapakah pembawa kebudayaan Dongson ke Indonesia?', back: 'Gelombang migrasi Deutro Melayu sekitar 500 SM.' },
      { id: 'j3', front: 'Sebutkan 3 artefak utama kebudayaan Dongson!', back: 'Nekara perunggu, Moko, dan Cendrasa.' },
      { id: 'j4', front: 'Apa nama Nekara terbesar yang ditemukan di Bali?', back: 'Nekara "Bulan Pejeng".' },
      { id: 'j5', front: 'Apa perbedaan utama fungsi Moko dibanding artefak logam lain?', back: 'Moko berfungsi khusus sebagai alat mas kawin adat di Alor.' }
    ],
    quizQuestions: [
      {
        id: 'q_j1',
        question: 'Pusat kebudayaan perunggu Asia Tenggara yang menjadi asal-usul peninggalan logam di Indonesia adalah...',
        options: [
          { id: 'opt1', text: 'Kebudayaan Dongson' },
          { id: 'opt2', text: 'Kebudayaan Bacson-Hoabinh' },
          { id: 'opt3', text: 'Kebudayaan Sa Huynh' },
          { id: 'opt4', text: 'Kebudayaan Pacitan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kebudayaan Dongson Vietnam Utara merupakan induk kebudayaan perunggu Asia Tenggara.'
      },
      {
        id: 'q_j2',
        question: 'Genderang perunggu khas Kebudayaan Dongson yang banyak ditemukan di Kepulauan Alor sebagai alat pembayaran mas kawin adalah...',
        options: [
          { id: 'opt1', text: 'Moko' },
          { id: 'opt2', text: 'Cendrasa' },
          { id: 'opt3', text: 'Dolmen' },
          { id: 'opt4', text: 'Pebble' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Moko adalah sebutan lokal nekara kecil di Alor NTT.'
      },
      {
        id: 'q_j3',
        question: 'Perhatikan artefak berikut! (1) Nekara, (2) Cendrasa, (3) Kapak Persegi, (4) Bejana Perunggu. Artefak hasil kebudayaan Dongson ditunjukkan oleh nomor...',
        options: [
          { id: 'opt1', text: '(1), (2), dan (4)' },
          { id: 'opt2', text: '(1), (2), dan (3)' },
          { id: 'opt3', text: '(2), (3), dan (4)' },
          { id: 'opt4', text: 'Semua benar' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kapak persegi merupakan peninggalan Neolitikum (Batu Muda), bukan perunggu Dongson.'
      },
      {
        id: 'q_j4',
        question: 'Nekara perunggu terbesar di Indonesia yang disimpan di Pura Penataran Sasih Pejeng Bali dikenal dengan sebutan...',
        options: [
          { id: 'opt1', text: 'Bulan Pejeng' },
          { id: 'opt2', text: 'Makalam' },
          { id: 'opt3', text: 'Moko Alor' },
          { id: 'opt4', text: 'Cendrasa Agung' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Nekara Bulan Pejeng di Bali berukuran tinggi 1,86 meter.'
      },
      {
        id: 'q_j5',
        question: 'Ragam hias yang sering diukir pada permukaan artefak perunggu Dongson antara lain berbentuk...',
        options: [
          { id: 'opt1', text: 'Pilin berganda, tumpal geometris, dan gambar perahu sampan' },
          { id: 'opt2', text: 'Tulisan kaligrafi Arab' },
          { id: 'opt3', text: 'Huruf Pallawa dan Sansekerta' },
          { id: 'opt4', text: 'Gambar mobil dan pesawat terbang' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Motif pilin berganda, spiral, dan perahu merupakan ciri ornamen khas Dongson.'
      }
    ]
  },
  {
    id: 'K',
    code: 'K',
    title: 'KEMAJEMUKAN HORIZONTAL',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Kemajemukan Horizontal adalah diferensiasi sosial berdasarkan perbedaan kriteria sejajar (suku, agama, ras, dan adat istiadat).',
        'Tidak ada tingkatan lebih tinggi atau lebih rendah (non-hirarkis).',
        'Parameter: Suku Bangsa, Agama/Kepercayaan, Ras, Jenis Kelamin, Klan/Marga.'
      ],
      fromSupplemental: [
        'Buku Sosiologi SMA/MA Kelas XI (Kemendikbudristek).',
        'Struktur Sosial Diferensiasi Sosial (Soerjono Soekanto).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian kemajemukan horizontal (diferensiasi sosial).',
      'Mengidentifikasi parameter pembentuk struktur horizontal (SARA & Gender).',
      'Membedakan sifat non-hirarkis horizontal dengan sifat hierarkis vertikal.',
      'Menganalisis potensi konsolidasi dan interseksi dalam kemajemukan horizontal.'
    ],
    fullContent: `Kemajemukan Horizontal (Diferensiasi Sosial) adalah pembagian atau pengelompokan anggota masyarakat ke dalam kelompok-kelompok sosial secara sejajar/horisontal tanpa membentuk tingkatan kelas (non-hirarkis).

Dalam diferensiasi sosial horizontal, tidak ada kelompok yang dianggap lebih tinggi (*superior*) atau lebih rendah (*inferior*). Semua perbedaan dihargai sama secara hukum dan sosiologis.

Parameter Kemajemukan Horizontal di Indonesia:
1. Suku Bangsa (Etnis): Perbedaan kebudayaan, bahasa daerah, dan tradisi (Jawa, Sunda, Batak, Bugis, Papua, dll).
2. Agama & Kepercayaan: Perbedaan keyakinan (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu, Kepercayaan lokal).
3. Ras: Perbedaan ciri fisik fisikis (Mongoloid, Melanesoid, Kaukasoid).
4. Gender / Jenis Kelamin: Pria dan Wanita.
5. Marga / Klan: Garis keturunan (Batak: Siregar, Nasution; Minahasa: Rumangkang, dll).`,
    corePoints: [
      'Prinsip Utama: Sejajar, sama derajat, non-hirarkis (tanpa kasta/kelas).',
      'Istilah Sosiologi: Diferensiasi Sosial.',
      'Parameter Pembentuk: Suku, Agama, Ras, Adat, Gender, Klan.',
      'Potensi Dampak: Jika diwarnai etnosentrisme dapat memicu konflik horizontal, namun jika diikat toleransi menjadi penguat persatuan.'
    ],
    keywords: ['Kemajemukan Horizontal', 'Diferensiasi Sosial', 'Sejajar', 'Non-Hirarkis', 'SARA', 'Nasikun'],
    causeProcessEffect: {
      cause: 'Keberagaman latar belakang etnis, keyakinan, dan ciri biologis manusia.',
      process: 'Masyarakat mengelompokkan diri berdasarkan parameter sosial sejajar tanpa penilaian tinggi-rendah.',
      effect: 'Terbentuk keanekaragaman budaya nasional yang menuntut sikap toleransi dan kesetaraan hak.'
    },
    threeSentences: [
      'Kemajemukan horizontal adalah diferensiasi masyarakat berdasarkan kriteria yang sejajar tanpa tingkatan kasta.',
      'Parameter utamanya meliputi perbedaan suku bangsa, agama, ras, gender, dan klan keturunan.',
      'Kemajemukan horizontal menuntut kesetaraan hak warga negara serta toleransi antar kelompok.'
    ],
    dontConfuse: [
      {
        term: 'Kemajemukan Horizontal vs Kemajemukan Vertikal',
        description: 'Kemajemukan Horizontal = SEJAJAR/EKSIS BERSAMA (Suku, Agama, Ras), sedangkan Kemajemukan Vertikal = BERTINGKAT/HIRARKIS (Jabatan, Kekayaan, Pendidikan).',
        distinction: 'Horizontal = Diferensiasi (Suku/Agama); Vertikal = Stratifikasi (Kelas Ekonomi/Jabatan).'
      }
    ],
    tableOrDiagram: {
      headers: ['Dimensi Kemajemukan', 'Kemajemukan Horizontal', 'Kemajemukan Vertikal'],
      rows: [
        { col1: 'Konsep Sosiologi', col2: 'Diferensiasi Sosial', col3: 'Stratifikasi Sosial' },
        { col1: 'Sifat Hubungan', col2: 'Sejajar (Non-hirarkis)', col3: 'Bertingkat (Top-Bottom)' },
        { col1: 'Parameter', col2: 'Suku, Agama, Ras, Gender, Klan', col3: 'Kekayaan, Jabatan, Pendidikan, Kasta' },
        { col1: 'Contoh', col2: 'Orang Jawa & Orang Batak', col3: 'Direktur Perusahaan & Buruh' }
      ]
    },
    mnemonic: {
      phrase: 'HORIZONTAL = H-aluan O-rang R-ata I-dentik Z-ero O-rdinal N-on T-ingkat A-gar L-aras',
      explanation: 'Horizontal = Rata / Non-Tingkat (Suku/Agama).'
    },
    likelyExamQuestions: [
      'Pengelompokan masyarakat berdasarkan suku bangsa dan agama tergolong kemajemukan horizontal karena...',
      'Manakah yang merupakan contoh parameter kemajemukan horizontal di Indonesia?',
      'Istilah sosiologi untuk menggambarkan pengelompokan sosial secara sejajar adalah...'
    ],
    activeRecall: [
      { question: 'Apa nama lain kemajemukan horizontal dalam sosiologi?', answer: 'Diferensiasi Sosial.' },
      { question: 'Apa ciri utama struktur kemajemukan horizontal?', answer: 'Bersifat sejajar, tidak bertingkat (non-hirarkis), dan setara.' },
      { question: 'Sebutkan 4 contoh parameter kemajemukan horizontal!', answer: 'Suku bangsa, Agama, Ras, dan Gender.' },
      { question: 'Mengapa suku bangsa tergolong kemajemukan horizontal?', answer: 'Karena tidak ada suku yang secara hukum/moral lebih tinggi dari suku lainnya.' },
      { question: 'Apa beda utama kemajemukan horizontal dengan vertikal?', answer: 'Horizontal tidak bertingkat (diferensiasi), vertikal bertingkat kelas (stratifikasi).' }
    ],
    flashcards: [
      { id: 'k1', front: 'Apa pengertian Kemajemukan Horizontal?', back: 'Pengelompokan masyarakat secara sejajar berdasarkan kriteria sosial seperti suku, agama, dan ras.' },
      { id: 'k2', front: 'Apa sebutan sosiologi untuk struktur horizontal?', back: 'Diferensiasi Sosial.' },
      { id: 'k3', front: 'Apakah ras tergolong kemajemukan horizontal atau vertikal?', back: 'Horizontal (karena ras adalah variasi biologis sejajar).' },
      { id: 'k4', front: 'Apa dampak positif kemajemukan horizontal jika dikelola baik?', back: 'Memperkaya khazanah kebudayaan nasional dan memupuk toleransi.' },
      { id: 'k5', front: 'Apa pemicu konflik horizontal?', back: 'Etnosentrisme, prasangka SARA, dan primordialisme berlebihan.' }
    ],
    quizQuestions: [
      {
        id: 'q_k1',
        question: 'Pengelompokan masyarakat Indonesia berdasarkan suku bangsa, ras, dan agama disebut kemajemukan horizontal karena...',
        options: [
          { id: 'opt1', text: 'Tidak ada kelompok sosial yang kedudukannya lebih tinggi atau lebih rendah' },
          { id: 'opt2', text: 'Setiap kelompok memiliki jumlah anggota yang persis sama' },
          { id: 'opt3', text: 'Masyarakatnya bertempat tinggal di wilayah dataran rendah' },
          { id: 'opt4', text: 'Semua kelompok dipimpin oleh satu raja tunggal' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kemajemukan horizontal bersifat non-hirarkis / sejajar sama derajat.'
      },
      {
        id: 'q_k2',
        question: 'Istilah sosiologi yang tepat untuk menggambarkan kemajemukan masyarakat secara horizontal adalah...',
        options: [
          { id: 'opt1', text: 'Diferensiasi Sosial' },
          { id: 'opt2', text: 'Stratifikasi Sosial' },
          { id: 'opt3', text: 'Mobiiltas Sosial' },
          { id: 'opt4', text: 'Asimilasi Sosial' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Diferensiasi sosial adalah pembedaan masyarakat secara sejajar.'
      },
      {
        id: 'q_k3',
        question: 'Berikut ini yang MERUPAKAN contoh kemajemukan horizontal di dalam masyarakat adalah...',
        options: [
          { id: 'opt1', text: 'Keberagaman Suku Jawa, Sunda, Dayak, dan Bugis' },
          { id: 'opt2', text: 'Perbedaan kelas pengusaha kaya dan buruh pabrik' },
          { id: 'opt3', text: 'Perbedaan pangkat Jenderal dan Prajurit TNI' },
          { id: 'opt4', text: 'Perbedaan tingkat pendidikan S3 dan SD' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku bangsa merupakan kriteria sosial sejajar (diferensiasi).'
      },
      {
        id: 'q_k4',
        question: 'Dua kriteria berikut yang tergolong dalam parameter kemajemukan horizontal adalah...',
        options: [
          { id: 'opt1', text: 'Agama dan Gender' },
          { id: 'opt2', text: 'Kekayaan dan Jabatan' },
          { id: 'opt3', text: 'Tingkat Pendidikan dan Pangkat' },
          { id: 'opt4', text: 'Kasta bangsawan dan Kasta rakyat biasa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Agama dan Gender tidak memiliki tingkatan atas-bawah secara kodrati.'
      },
      {
        id: 'q_k5',
        question: 'Upaya terbaik untuk mencegah timbulnya konflik dalam kemajemukan horizontal adalah...',
        options: [
          { id: 'opt1', text: 'Mengembangkan sikap toleransi dan menghargai keberagaman' },
          { id: 'opt2', text: 'Mewajibkan semua orang berpindah ke satu suku tunggal' },
          { id: 'opt3', text: 'Menolak berinteraksi dengan kelompok agama lain' },
          { id: 'opt4', text: 'Menganggap kebudayaannya sendiri yang paling hebat' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Sikap toleransi dan semangat Bhinneka Tunggal Ika menjaga keharmonisan diferensiasi sosial.'
      }
    ]
  },
  {
    id: 'L',
    code: 'L',
    title: 'KONDISI ALAM DAN KEHIDUPAN MASYARAKAT',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Kondisi Alam memicu rantai adaptasi: KONDISI ALAM → KEBUTUHAN → ADAPTASI → BENTUK RUMAH → MAKANAN → ALAT KERJA → KEBIASAAN MASYARAKAT.',
        'Masyarakat Pesisir/Pantai: Perahu, rumah panggung pesisir, alat tangkap ikan, budaya terbuka maritim.',
        'Masyarakat Pegunungan/Pedalaman: Rumah rapat hangat, pakaian tebal, alat bertani/berladang, budaya gotong royong konservatif.'
      ],
      fromSupplemental: [
        'Buku Geografi Sosial & Antropologi Lingkungan (Kemendikbudristek).',
        'Studi Adaptasi Ekologi Budaya (Julian Steward).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan alur pengaruh kondisi alam terhadap kebiasaan masyarakat.',
      'Menganalisis adaptasi bentuk rumah, makanan, alat kerja, dan kebiasaan di berbagai ekosistem (pesisir, pegunungan, dataran rendah).',
      'Mengidentifikasi contoh konkret adaptasi budaya alam di Nusantara.'
    ],
    fullContent: `Kehidupan sosial dan kebudayaan masyarakat sangat dipengaruhi oleh kondisi lingkungan alam tempat tinggalnya (*ecological determinism & possibilism*). Alam menyediakan tantangan sekaligus sumber daya yang membentuk pola perilaku, teknologi, dan arsitektur lokal.

Rantai Kausalitas Ekologi Budaya:
KONDISI ALAM → KEBUTUHAN → ADAPTASI → BENTUK RUMAH → MAKANAN → ALAT KERJA → KEBIASAAN MASYARAKAT

Contoh Perbandingan Ekosistem:
1. Masyarakat Pesisir Pantai & Kepulauan:
   - Kondisi Alam: Gelombang laut, pasang surut, cuaca panas pesisir.
   - Bentuk Rumah: Rumah panggung tiang kayu tinggi di atas air untuk menghindari pasang laut dan angin.
   - Makanan: Hasil laut (ikan, kerang, rumput laut, sagu).
   - Alat Kerja: Perahu cadik, jaring/jala, bubu.
   - Kebiasaan: Terbuka pada pendatang, bahasa lugas komersial, ritual petik laut.

2. Masyarakat Pegunungan & Dataran Tinggi:
   - Kondisi Alam: Udara dingin, lereng curam, curah hujan tinggi.
   - Bentuk Rumah: Rumah berdinding tebal rapat bertatap ijuk/jerami tanpa jendela besar (mencegah dingin, misal: Rumah Honai Papua atau rumah pegunungan).
   - Makanan: Umbi-umbian, sayuran lereng, jagung.
   - Alat Kerja: Cangkul, tajak, keranjang gendong.
   - Kebiasaan: Pakaian tebal, sistem gotong royong bertani yang erat, ritual sedekah bumi.`,
    corePoints: [
      'Alur Kausalitas: Alam → Kebutuhan → Adaptasi → Rumah → Makanan → Alat → Kebiasaan.',
      'Masyarakat Pesisir: Perahu, jala, rumah panggung air, hasil laut, sikap terbuka.',
      'Masyarakat Pegunungan: Cangkul, rumah rapat hangat, umbi/sayur, ikatan gotong royong kuat.'
    ],
    keywords: ['Kondisi Alam', 'Adaptasi Ekologi', 'Rumah Panggung', 'Honai', 'Pesisir', 'Pegunungan'],
    causeProcessEffect: {
      cause: 'Perbedaan ekosistem alam (pantai, pegunungan, dataran rendah).',
      process: 'Masyarakat menciptakan inovasi teknologi dan arsitektur untuk bertahan hidup sesuai tantangan fisik alam.',
      effect: 'Terbentuk keanekaragaman rumah adat, kuliner tradisional, dan kearifan lokal (*local wisdom*).'
    },
    threeSentences: [
      'Kondisi alam membentuk mata pencaharian, bentuk rumah adat, makanan, dan pola kebiasaan masyarakat.',
      'Masyarakat pesisir beradaptasi dengan rumah panggung dan alat tangkap laut, sedangkan masyarakat pegunungan memakai rumah rapat pemanas.',
      'Rantai adaptasi ekologi membuktikan kearifan lokal masyarakat pra-modern dalam merespons tantangan alam.'
    ],
    dontConfuse: [
      {
        term: 'Determinisme Lingkungan vs Posibilisme Lingkungan',
        description: 'Determinisme menganggap alam SEPENUHNYA mendikte budaya manusia, sedangkan Posibilisme menganggap alam menyediakan PELUANG dan manusia yang memilih bentuk adaptasinya.',
        distinction: 'Determinisme = Alam mendikte total; Posibilisme = Manusia mengolah peluang alam.'
      }
    ],
    tableOrDiagram: {
      headers: ['Aspek Budaya', 'Masyarakat Pesisir (Pantai)', 'Masyarakat Pegunungan (Dataran Tinggi)'],
      rows: [
        { col1: 'Arsitektur Rumah', col2: 'Rumah panggung tinggi atas air', col3: 'Rumah membulat rapat (misal: Honai)' },
        { col1: 'Makanan Pokok', col2: 'Ikan laut, sagu, seafood', col3: 'Umbi-umbian, jagung, kentang' },
        { col1: 'Alat Kerja Utama', col2: 'Perahu cadik, jaring, bubu', col3: 'Cangkul, tajak, cangkul lereng' },
        { col1: 'Karakter Sosio-Kultural', col2: 'Terbuka, dinamis, lugas', col3: 'Konservatif, religius-magis, gotong royong' }
      ]
    },
    mnemonic: {
      phrase: 'ALAM = A-daptasi L-ingkungan A-ngkut M-akanan (Kebutuhan - Rumah - Kebiasaan)',
      explanation: 'Alam memicu rantai Kebutuhan → Adaptasi → Rumah & Makanan → Kebiasaan.'
    },
    likelyExamQuestions: [
      'Bentuk rumah panggung di daerah pesisir pantai merupakan contoh bentuk adaptasi masyarakat terhadap...',
      'Mengapa makanan pokok masyarakat pegunungan di Papua didominasi umbi-umbian sedangkan masyarakat pesisir mengonsumsi sagu/ikan?',
      'Jelaskan alur hubungan antara kondisi alam hingga terbentuknya kebiasaan masyarakat!'
    ],
    activeRecall: [
      { question: 'Tuliskan alur hubungan antara kondisi alam dan kebiasaan masyarakat!', answer: 'Kondisi Alam → Kebutuhan → Adaptasi → Bentuk Rumah → Makanan → Alat Kerja → Kebiasaan Masyarakat.' },
      { question: 'Mengapa rumah adat pesisir pantai umumnya berbentuk rumah panggung?', answer: 'Untuk menghindari pasang air laut, binatang laut, dan memanfaatkan sirkulasi angin pantai.' },
      { question: 'Mengapa rumah Honai suku pegunungan Papua dirancang bulat tanpa jendela besar?', answer: 'Untuk menahan hawa dingin pegunungan dan mempertahankan kehangatan di dalam rumah.' },
      { question: 'Sebutkan contoh alat kerja masyarakat pesisir!', answer: 'Perahu cadik, jala/jaring, bubu, dan kail.' },
      { question: 'Apa karakter sosio-kultural yang umum pada masyarakat pesisir maritim?', answer: 'Cenderung terbuka terhadap pendatang baru, dinamis, dan lugas dalam berkomunikasi.' }
    ],
    flashcards: [
      { id: 'l1', front: 'Bagaimanakah alur adaptasi ekologi masyarakat?', back: 'Alam → Kebutuhan → Adaptasi → Rumah → Makanan → Alat Kerja → Kebiasaan.' },
      { id: 'l2', front: 'Apa bentuk adaptasi rumah masyarakat pesisir?', back: 'Rumah panggung kayu di atas pasang surut air laut.' },
      { id: 'l3', front: 'Apa bentuk adaptasi rumah masyarakat pegunungan dingin?', back: 'Rumah beratap tebal ijuk/jerami rapat penahan dingin (seperti Honai).' },
      { id: 'l4', front: 'Mengapa makanan pokok antar daerah berbeda-beda?', back: 'Karena perbedaan kesuburan tanah, tanaman dominan, dan iklim lokal.' },
      { id: 'l5', front: 'Apakah yang dimaksud dengan Kearifan Lokal (Local Wisdom)?', back: 'Pengetahuan dan kebiasaan adaptasi tradisional yang selaras dengan pelestarian alam.' }
    ],
    quizQuestions: [
      {
        id: 'q_l1',
        question: 'Alur kausalitas yang tepat untuk menjelaskan terbentuknya kebiasaan masyarakat akibat pengaruh lingkungan adalah...',
        options: [
          { id: 'opt1', text: 'Kondisi Alam → Kebutuhan → Adaptasi → Bentuk Rumah → Makanan → Alat Kerja → Kebiasaan' },
          { id: 'opt2', text: 'Kebiasaan → Makanan → Kondisi Alam → Alat Kerja' },
          { id: 'opt3', text: 'Bentuk Rumah → Kebiasaan → Kondisi Alam → Kebutuhan' },
          { id: 'opt4', text: 'Alat Kerja → Kebiasaan → Makanan → Kondisi Alam' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kondisi alam memicu kebutuhan dan adaptasi fisik hingga menjadi kebiasaan sosial.'
      },
      {
        id: 'q_l2',
        question: 'Bentuk rumah panggung di daerah pesisir pantai dirancang oleh masyarakat lokal terutama bertujuan untuk...',
        options: [
          { id: 'opt1', text: 'Menghindari pasang surut air laut dan hembusan gelombang' },
          { id: 'opt2', text: 'Menampung salju musim dingin' },
          { id: 'opt3', text: 'Pamer kekayaan kepada tetangga' },
          { id: 'opt4', text: 'Memudahkan memanjat pohon kelapa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Tiang panggung menghindarkan bangunan dari banjir rob pasang air laut.'
      },
      {
        id: 'q_l3',
        question: 'Rumah Honai milik masyarakat pegunungan Papua tidak memiliki jendela besar dan berdinding tebal. Hal ini merupakan adaptasi terhadap...',
        options: [
          { id: 'opt1', text: 'Suhu udara dingin di dataran tinggi pegunungan' },
          { id: 'opt2', text: 'Ancaman serangan hewan laut' },
          { id: 'opt3', text: 'Cuaca terik panas di pantai' },
          { id: 'opt4', text: 'Angin topan badai laut' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Desain bulat rapat Honai menyimpan kehangatan dari hawa dingin pegunungan.'
      },
      {
        id: 'q_l4',
        question: 'Masyarakat yang tinggal di daerah savana Nusa Tenggara Timur cenderung mengembangkan mata pencaharian...',
        options: [
          { id: 'opt1', text: 'Peternakan sapi dan kuda' },
          { id: 'opt2', text: 'Pertanian sawah basah bertingkat' },
          { id: 'opt3', text: 'Pabrik perakintan elektronik' },
          { id: 'opt4', text: 'Budi daya kelapa sawit' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Padang rumput savana curah hujan rendah sangat cocok untuk usaha peternakan.'
      },
      {
        id: 'q_l5',
        question: 'Karakter sosial masyarakat pesisir yang cenderung lebih terbuka terhadap budaya asing disebabkan oleh...',
        options: [
          { id: 'opt1', text: 'Interaksi intensif dengan para pedagang mancanegara di pelabuhan' },
          { id: 'opt2', text: 'Larangan melakukan perdagangan dengan suku tetangga' },
          { id: 'opt3', text: 'Isolasi geografis benteng batu yang kokoh' },
          { id: 'opt4', text: 'Ketersediaan air bersih yang melimpah' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Pelabuhan laut menjadi tempat perjumpaan dan transaksi antar-budaya yang cair.'
      }
    ]
  },
  {
    id: 'M',
    code: 'M',
    title: 'INKLUSIF DAN EKSKLUSIF',
    category: 'Sosiologi Kemajemukan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Sikap Inklusif: Terbuka, menghargai keberagaman, mau menerima kelompok berbeda, memperkuat integrasi.',
        'Sikap Eksklusif: Tertutup, membatasi diri, merasa kelompok sendiri paling benar, pemicu konflik/disintegrasi.',
        'Tabel perbandingan inklusif vs eksklusif berdasarkan pengertian, ciri, contoh, dan dampak.'
      ],
      fromSupplemental: [
        'Buku Sosiologi Konflik & Integrasi Sosial (Kemendikbudristek).',
        'Studi Toleransi Antarumat Beragama di Indonesia.'
      ]
    },
    masteryObjectives: [
      'Mendefinisikan pengertian sikap inklusif dan eksklusif.',
      'Mengidentifikasi ciri-ciri dan contoh perilaku inklusif dan eksklusif.',
      'Menganalisis dampak kedua sikap terhadap stabilitas kemajemukan bangsa.',
      'Menjelaskan cara-cara membangun sikap inklusif di lingkungan sekolah dan masyarakat.'
    ],
    fullContent: `Dalam masyarakat majemuk, sikap mental warga negara terhadap keberagaman menentukan apakah persatuan akan terwujud atau kehancuran konflik yang terjadi. Dua sikap yang bertolak belakang adalah Sikap Inklusif dan Sikap Eksklusif.

1. Sikap Inklusif:
   - Pengertian: Sikap terbuka yang memandang keberagaman sebagai kekayaan, mau menerima dan mengakui keberadaan kelompok lain yang berbeda (suku, agama, ras) secara setara.
   - Ciri: Toleran, mau bekerja sama, prasangka netral/positif, menjunjung HAM.
   - Contoh: Menghormati teman yang sedang berpuasa, mau berteman tanpa membeda-bedakan suku, bergotong royong lintas agama.
   - Dampak: Memperkuat integrasi nasional dan menciptakan kedamaian sosial.

2. Sikap Eksklusif:
   - Pengertian: Sikap tertutup yang membatasi diri hanya pada kelompoknya sendiri (*in-group*), memandang kelompok luar (*out-group*) secara curiga atau inferior.
   - Ciri: Fanatik sempit, primordial, etnosentris, enggan berbaur.
   - Contoh: Hanya mau berteman dengan orang sesuku/seagama, menolak kehadiran warga baru di pemukiman.
   - Dampak: Memicu disintegrasi, konflik horizontal, dan perpecahan bangsa.`,
    corePoints: [
      'Inklusif = Terbuka, merangkul keberagaman, menguatkan integrasi.',
      'Eksklusif = Tertutup, membatasi diri, memicu konflik disintegrasi.',
      'Langkah Inklusif: Toleransi, dialog lintas budaya, pendidikan multikultural.'
    ],
    keywords: ['Inklusif', 'Eksklusif', 'Toleransi', 'Integrasi', 'Disintegrasi', 'In-Group', 'Out-Group'],
    causeProcessEffect: {
      cause: 'Cara pandang sosial terhadap perbedaan suku, agama, dan budaya.',
      process: 'Inklusif membuka diri berinteraksi; Eksklusif menutup dinding pergaulan.',
      effect: 'Inklusif melahirkan persatuan kokoh; Eksklusif melahirkan gesekan diskriminatif.'
    },
    threeSentences: [
      'Sikap inklusif adalah sikap terbuka yang merangkul keberagaman sosial sebagai sarana persatuan.',
      'Sikap eksklusif adalah sikap tertutup yang membatasi diri dan menolak interaksi dengan kelompok berbeda.',
      'Membangun sikap inklusif sangat penting untuk menjaga keutuhan Negara Kesatuan Republik Indonesia.'
    ],
    dontConfuse: [
      {
        term: 'Inklusif vs Eksklusif',
        description: 'Inklusif = MASUK/MERANGKUL (Terbuka lintas kelompok); Eksklusif = KELUAR/MENOLAK (Tertutup fanatik).',
        distinction: 'Inklusif = Terbuka & Bersatu; Eksklusif = Tertutup & Terpisah.'
      }
    ],
    tableOrDiagram: {
      headers: ['Indikator', 'Sikap Inklusif', 'Sikap Eksklusif'],
      rows: [
        { col1: 'Pengertian', col2: 'Sikap terbuka mengakui & menghargai perbedaan', col3: 'Sikap tertutup membatasi diri hanya kelompok sendiri' },
        { col1: 'Ciri Utama', col2: 'Toleran, mau berbaur, empati tinggi', col3: 'Fanatik sempit, prasangka, etnosentris' },
        { col1: 'Contoh Perilaku', col2: 'Kerja bakti bersama warga beda agama', col3: 'Menolak tetangga dari suku lain' },
        { col1: 'Dampak Sosial', col2: 'Memperkuat integrasi & persatuan nasional', col3: 'Memicu disintegrasi & konflik horizontal' }
      ]
    },
    mnemonic: {
      phrase: 'INKLUSIF vs EKSKLUSIF = IN (Masuk/Merangkul) vs EX (Keluar/Menolak)',
      explanation: 'IN-klusif merangkul pertemanan; EX-klusif menolak perbedaan.'
    },
    likelyExamQuestions: [
      'Apakah perbedaan mendasar antara sikap inklusif dan sikap eksklusif dalam konteks kemajemukan bangsa?',
      'Berikan 2 contoh sikap inklusif dalam kehidupan sehari-hari di lingkungan sekolah!',
      'Bagaimanakah dampak sikap eksklusif terhadap keutuhan NKRI?'
    ],
    activeRecall: [
      { question: 'Apa yang dimaksud dengan sikap inklusif?', answer: 'Sikap terbuka yang menerima dan menghargai keberagaman kelompok berbeda secara setara.' },
      { question: 'Apa yang dimaksud dengan sikap eksklusif?', answer: 'Sikap tertutup yang membatasi interaksi hanya pada kelompok sendiri dan menolak kelompok luar.' },
      { question: 'Sebutkan 2 contoh perilaku inklusif di sekolah!', answer: 'Pertama, berteman tanpa membeda-bedakan suku; kedua, menghormati teman yang beribadah.' },
      { question: 'Apa dampak buruk dominasi sikap eksklusif bagi masyarakat majemuk?', answer: 'Timbulnya kecemburuan, gesekan sosial, konflik horizontal, dan disintegrasi bangsa.' },
      { question: 'Bagaimana cara memupuk sikap inklusif sejak dini?', answer: 'Melalui pendidikan multikultural, kegiatan gotong royong bersama, dan pemahaman nilai Pancasila.' }
    ],
    flashcards: [
      { id: 'm1', front: 'Apa kata kunci dari sikap Inklusif?', back: 'Terbuka, toleran, merangkul perbedaan.' },
      { id: 'm2', front: 'Apa kata kunci dari sikap Eksklusif?', back: 'Tertutup, membatasi diri, fanatik sempit.' },
      { id: 'm3', front: 'Mana yang mendukung integrasi nasional?', back: 'Sikap Inklusif.' },
      { id: 'm4', front: 'Mana yang memicu disintegrasi sosial?', back: 'Sikap Eksklusif.' },
      { id: 'm5', front: 'Apa contoh perbuatan inklusif saat perayaan hari besar agama lain?', back: 'Mengucapkan selamat atau membantu menjaga keamanan tempat ibadah.' }
    ],
    quizQuestions: [
      {
        id: 'q_m1',
        question: 'Sikap terbuka masyarakat yang mau menerima keberagaman dan mau bergaul dengan kelompok yang berbeda suku/agama disebut sikap...',
        options: [
          { id: 'opt1', text: 'Inklusif' },
          { id: 'opt2', text: 'Eksklusif' },
          { id: 'opt3', text: 'Etnosentris' },
          { id: 'opt4', text: 'Anarkis' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Inklusif adalah sikap terbuka dan merangkul perbedaan.'
      },
      {
        id: 'q_m2',
        question: 'Seorang siswa menolak bekerja kelompok dengan temannya hanya karena berbeda latar belakang agama. Perilaku siswa tersebut mencerminkan sikap...',
        options: [
          { id: 'opt1', text: 'Eksklusif' },
          { id: 'opt2', text: 'Inklusif' },
          { id: 'opt3', text: 'Demokratis' },
          { id: 'opt4', text: 'Altruis' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Menolak berinteraksi dengan kelompok luar merupakan ciri eksklusivisme.'
      },
      {
        id: 'q_m3',
        question: 'Dampak positif dari berkembangnya sikap inklusif di tengah masyarakat Indonesia yang majemuk adalah...',
        options: [
          { id: 'opt1', text: 'Terciptanya integrasi nasional dan keharmonisan hidup' },
          { id: 'opt2', text: 'Hilangnya seluruh kebudayaan daerah' },
          { id: 'opt3', text: 'Dominasi satu suku tunggal atas suku lain' },
          { id: 'opt4', text: 'Meningkatnya kecemburuan sosial antar penganut agama' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Inklusivisme melahirkan keharmonisan dan penguatan persatuan nasional.'
      },
      {
        id: 'q_m4',
        question: 'Perhatikan ciri-ciri berikut: (1) Toleran, (2) Fanatik sempit, (3) Menjunjung HAM, (4) Menolak kelompok luar. Ciri sikap inklusif ditunjukkan oleh nomor...',
        options: [
          { id: 'opt1', text: '(1) dan (3)' },
          { id: 'opt2', text: '(1) dan (2)' },
          { id: 'opt3', text: '(2) dan (4)' },
          { id: 'opt4', text: '(3) dan (4)' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Sikap inklusif dicirikan oleh toleransi (1) dan penghormatan pada hak asasi manusia (3).'
      },
      {
        id: 'q_m5',
        question: 'Salah satu langkah konkret membangun sikap inklusif di lingkungan masyarakat majemuk adalah...',
        options: [
          { id: 'opt1', text: 'Mengadakan dialog interaktif dan gotong royong lintas suku dan agama' },
          { id: 'opt2', text: 'Membangun tembok pembatas pemukiman suku' },
          { id: 'opt3', text: 'Melarang warga asing masuk ke lingkungan RT' },
          { id: 'opt4', text: 'Menghapus pelajaran Pancasila di sekolah' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Gotong royong dan dialog interaktif mempererat persaudaraan lintas batas sosial.'
      }
    ]
  },
  {
    id: 'N',
    code: 'N',
    title: 'UPAYA MEMPERKUAT INTEGRASI',
    category: 'Integrasi, Hukum & Nilai Kebangsaan',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Integrasi Nasional adalah proses penyatuan berbagai kelompok sosial budaya ke dalam kesatuan wilayah nasional.',
        'Faktor Penguat Integrasi: 1. Bahasa Indonesia sebagai bahasa persatuan, 2. Ideologi Pancasila & Slogan Bhinneka Tunggal Ika, 3. Perasaan Senasib Sepanggungan (Sejarah), 4. Konsensus Nasional Hukum UU D 1945.'
      ],
      fromSupplemental: [
        'Buku Pendidikan Pancasila & Kewarganegaraan (Kemendikbudristek).',
        'Strategi Integrasi Nasional Indonesia (Ketahanan Nasional).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan pentingnya integrasi nasional.',
      'Mengidentifikasi faktor-faktor pendorong dan penguat integrasi nasional.',
      'Menjelaskan peran Bahasa Indonesia, Pancasila, dan Bhinneka Tunggal Ika dalam pengikat persatuan.',
      'Memberikan contoh upaya masyarakat dan pemerintah dalam memperkuat integrasi.'
    ],
    fullContent: `Integrasi Nasional adalah proses penyesuaian dan penyatuan unsur-unsur kebudayaan, suku, agama, dan daerah yang berbeda sehingga tercipta keserasian dan kesatuan dalam NKRI.

Faktor-Faktor Pendorong & Penguat Integrasi Nasional:
1. Rasa Senasib dan Sepanggungan: Sejarah perjuangan bersama melawan penjajah membangun ikatan emosional nasional.
2. Pemaknaan Ideologi Pancasila & Slogan Bhinneka Tunggal Ika: Menjadi pilar pemersatu keberagaman di atas perbedaan.
3. Bahasa Indonesia: Berperan vital sebagai *lingua franca* atau bahasa persatuan yang menjembatani komunikasi antar suku.
4. Simbol Kebangsaan: Bendera Merah Putih, Lagu Indonesia Raya, Garuda Pancasila.
5. Pembangunan Berkeadilan: Pemerataan ekonomi untuk mengurangi ketimpangan antar daerah.

Upaya Masyarakat & Pemerintah:
- Menerapkan pendidikan multikultural dan nilai kewarganegaraan di sekolah.
- Menegakkan hukum secara adil tanpa diskriminasi SARA.
- Meningkatkan dialog kebudayaan dan festival seni nusantara.`,
    corePoints: [
      'Definisi Integrasi: Penyatuan bagian-bagian berbeda menjadi satu kesatuan utuh.',
      'Pengikat Utama: Bahasa Indonesia, Pancasila, Bhinneka Tunggal Ika, Rasa Senasib Perjuangan.',
      'Upaya Nyata: Menegakkan keadilan hukum, dialog antar-iman, gotong royong warga.'
    ],
    keywords: ['Integrasi Nasional', 'Bahasa Indonesia', 'Pancasila', 'Bhinneka Tunggal Ika', 'Senasib Sepanggungan'],
    causeProcessEffect: {
      cause: 'Kebutuhan menjaga kedaulatan tanah air di tengah potensi perpecahan kemajemukan.',
      process: 'Menguatkan nilai Pancasila, Bahasa Indonesia, dan pemerataan keadilan sosial di seluruh wilayah.',
      effect: 'Terwujudnya NKRI yang utuh, damai, berdaulat, dan tidak mudah dipecah belah.'
    },
    threeSentences: [
      'Integrasi nasional adalah proses penyatuan berbagai suku, agama, dan budaya dalam kesatuan NKRI.',
      'Bahasa Indonesia, Pancasila, dan perasaan senasib perjuangan menjadi perekat utama integrasi nasional.',
      'Upaya memperkuat integrasi dilakukan melalui penegakan keadilan hukum, dialog antarkelompok, dan pendidikan multikultural.'
    ],
    dontConfuse: [
      {
        term: 'Integrasi vs Asimilasi vs Akulturasi',
        description: 'Integrasi = Penyerasian kelompok dalam satu ikatan politik tanpa menghilangkan identitas; Asimilasi = Peleburan budaya menghasilkan budaya baru; Akulturasi = Perpaduan budaya tanpa melebur total.',
        distinction: 'Integrasi = Bersatu dalam wadah NKRI; Asimilasi = Lebur total; Akulturasi = Perpaduan.'
      }
    ],
    tableOrDiagram: {
      headers: ['Pilar Integrasi', 'Fungsi Pengikat', 'Wujud Konkret'],
      rows: [
        { col1: 'Bahasa Indonesia', col2: 'Sarana komunikasi antarsuku', col3: 'Digunakan di sekolah, pemerintahan, dan media' },
        { col1: 'Pancasila & UUD 1945', col2: 'Dasar negara & hukum bersama', col3: 'Pedoman berbangsa dan bernegara' },
        { col1: 'Bhinneka Tunggal Ika', col2: 'Semboyan toleransi perbedaan', col3: 'Saling menghormati adat & agama' },
        { col1: 'Pembangunan Adil', col2: 'Mencegah kecemburuan antar daerah', col3: 'Pembangunan infrastruktur hingga pelosok Papua' }
      ]
    },
    mnemonic: {
      phrase: 'INTEGRASI = I-deologi N-egara T-oleransi E-konomi G-otong R-oyong A-gar S-atu I-ndonesia',
      explanation: 'Integrasi diikat Ideologi Pancasila + Keadilan Ekonomi + Toleransi.'
    },
    likelyExamQuestions: [
      'Faktor manakah yang paling berperan sebagai alat komunikasi pemersatu dalam mencegah kesalahpahaman antarsuku di Indonesia?',
      'Sebutkan 3 pilar utama yang menjadi penguat integrasi nasional di Indonesia!',
      'Bagaimana hubungan antara pemerataan pembangunan dengan integrasi nasional?'
    ],
    activeRecall: [
      { question: 'Apa yang dimaksud dengan integrasi nasional?', answer: 'Proses penyatuan kelompok-kelompok sosial budaya yang berbeda ke dalam satu kesatuan NKRI.' },
      { question: 'Sebutkan 3 faktor utama pendorong integrasi nasional!', answer: '1. Perasaan senasib perjuangan, 2. Ideologi Pancasila & Bhinneka Tunggal Ika, 3. Bahasa Indonesia.' },
      { question: 'Mengapa Bahasa Indonesia sangat penting bagi integrasi nasional?', answer: 'Karena menjadi sarana komunikasi pemersatu (lingua franca) yang menghubungkan suku-suku berbedabahasa.' },
      { question: 'Sebutkan 2 contoh upaya pemerintah untuk memperkuat integrasi nasional!', answer: 'Pembangunan infrastruktur yang merata dan penegakan hukum secara adil.' },
      { question: 'Apa pemicu utama ancaman disintegrasi nasional?', answer: 'Diskriminasi SARA, etnosentrisme, dan ketimpangan ekonomi daerah.' }
    ],
    flashcards: [
      { id: 'n1', front: 'Apa pengertian Integrasi Nasional?', back: 'Proses penyatuan elemen-elemen majemuk masyarakat menjadi satu kesatuan bangsa Indonesia.' },
      { id: 'n2', front: 'Apa peran Bahasa Indonesia sebagai alat integrasi?', back: 'Sebagai bahasa pemersatu komunikasi nasional antarsuku.' },
      { id: 'n3', front: 'Apa semboyan pemersatu bangsa Indonesia?', back: 'Bhinneka Tunggal Ika.' },
      { id: 'n4', front: 'Mengapa sejarah perjuangan masa lalu memperkuat integrasi?', back: 'Melahirkan perasaan senasib dan sepanggungan melawan penjajahan.' },
      { id: 'n5', front: 'Apa hubungan keadilan ekonomi dengan integrasi?', back: 'Pembangunan yang adil menghilangkan prasangka kecemburuan sosial antar daerah.' }
    ],
    quizQuestions: [
      {
        id: 'q_n1',
        question: 'Proses penyatuan berbagai kelompok suku, agama, dan budaya di Indonesia ke dalam satu kesatuan wadah NKRI dinamakan...',
        options: [
          { id: 'opt1', text: 'Integrasi Nasional' },
          { id: 'opt2', text: 'Disintegrasi Sosial' },
          { id: 'opt3', text: 'Globalisasi Budaya' },
          { id: 'opt4', text: 'Sekularisasi Politik' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Integrasi nasional merujuk pada persatuan utuh segenap elemen bangsa.'
      },
      {
        id: 'q_n2',
        question: 'Bahasa Indonesia berfungsi sangat vital sebagai sarana memperkuat integrasi nasional karena bertindak sebagai...',
        options: [
          { id: 'opt1', text: 'Bahasa pemersatu (lingua franca) antar suku daerah' },
          { id: 'opt2', text: 'Satu-satunya bahasa yang ada di Asia' },
          { id: 'opt3', text: 'Bahasa perdagangan internasional Benua Eropa' },
          { id: 'opt4', text: 'Pengganti bahasa Sanskerta kuno' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Bahasa Indonesia menyatukan ratusan suku berlainan bahasa daerah.'
      },
      {
        id: 'q_n3',
        question: 'Faktor historis yang melandasi terbentuknya semangat integrasi nasional bangsa Indonesia adalah...',
        options: [
          { id: 'opt1', text: 'Perasaan senasib dan sepanggungan akibat penjajahan' },
          { id: 'opt2', text: 'Kesamaan bentuk wajah seluruh warga' },
          { id: 'opt3', text: 'Pemberian kemerdekaan gratis oleh asing' },
          { id: 'opt4', text: 'Persamaan jenis masakan favorit' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Penderitaan bersama selama era penjajahan membakar jiwa persatuan nasional.'
      },
      {
        id: 'q_n4',
        question: 'Salah satu contoh ancaman nyata terhadap berlangsungnya integrasi nasional adalah...',
        options: [
          { id: 'opt1', text: 'Maraknya paham etnosentrisme radikal dan konflik SARA' },
          { id: 'opt2', text: 'Pertukaran pelajar antar provinsi' },
          { id: 'opt3', text: 'Penyelenggaraan Pekan Olahraga Nasional (PON)' },
          { id: 'opt4', text: 'Pelaksanaan gotong royong membersihkan desa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Etnosentrisme radikal memicu permusuhan antar suku yang mengancam persatuan.'
      },
      {
        id: 'q_n5',
        question: 'Upaya pemerintah yang sangat efektif dalam mencegah disintegrasi di daerah-daerah terluar adalah...',
        options: [
          { id: 'opt1', text: 'Pembangunan infrastruktur dan fasilitas publik secara merata sampai ke daerah 3T' },
          { id: 'opt2', text: 'Memusatkan seluruh keuangan hanya di ibu kota' },
          { id: 'opt3', text: 'Menghapus kebudayaan lokal daerah' },
          { id: 'opt4', text: 'Membatasi akses internet bagi warga luar Jawa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Pembangunan merata di kawasan 3T (Tertinggal, Terdepan, Terluar) menghadirkan rasa keadilan sosial.'
      }
    ]
  }
];
