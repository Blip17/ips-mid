import { TopicData } from '../../types/topics';

export const topicsAtoG: TopicData[] = [
  {
    id: 'A',
    code: 'A',
    title: 'MASUK DAN BERKEMBANGNYA RAS NEGRITO DI NUSANTARA',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Parsial di PDF (Ditambah Sources Kemendikbud)',
    sourceLabels: {
      fromPdf: [
        'Ras Negrito merupakan salah satu kelompok migrasi manusia paling awal di kepulauan Nusantara.',
        'Ciri fisik khas: kulit gelap, rambut keriting, postur tubuh cenderung pendek.',
        'Sisa keturunan di Nusantara dihubungkan dengan Suku Mappi (Papua), Suku Semang (Semenanjung Malaya), dan Suku Aeta (Filipina).'
      ],
      fromSupplemental: [
        'Modul Sejarah Indonesia SMA Kelas X (Kemendikbudristek 2021) - Migrasi Manusia Purba.',
        'Buku Arkeologi Kepulauan Nusantara (Pusat Penelitian Arkeologi Nasional).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan konteks Ras Negrito dalam migrasi awal Nusantara.',
      'Mengidentifikasi asal-usul, jalur migrasi, dan periode kedatangan Ras Negrito.',
      'Menjelaskan wilayah persebaran dan suku keturunan yang dikaitkan (Mappi, Semang, Aeta).',
      'Menganalisis ciri-ciri budaya dan fisik Ras Negrito sesuai literatur sejarah IPS.'
    ],
    fullContent: `Ras Negrito adalah kelompok manusia paling awal yang bermigrasi ke wilayah Kepulauan Nusantara pada era Holosen awal (sekitar 10.000 - 12.000 tahun yang lalu). Termasuk dalam rumpun Australoid/Austro-Melanesoid awal, kelompok ini datang sebelum gelombang migrasi Austronesia.

Asal-usul mereka berasal dari wilayah Asia Selatan dan Asia Tenggara Daratan yang bergerak ke selatan melintasi paparan Sunda yang saat itu masih menyatu akibat zaman es. Pola hidup mereka ditandai dengan budaya berburu dan meramu tingkat lanjut (*food gathering*), hidup nomaden atau semi-nomaden di gua-gua (*abris sous roche*).

Di Nusantara, sisa-sisa peninggalan budaya dan genetika ras Negrito ditemukan tersebar di pulau Sumatra, Jawa, hingga Papua, serta Semenanjung Malaya dan Filipina.`,
    corePoints: [
      'Merupakan penduduk paling awal (gelombang awal) di Nusantara.',
      'Ciri fisik khas: kulit gelap, rambut keriting padat, hidung lebar, postur tubuh pendek.',
      'Pola hidup berburu-meramu (*hunting & gathering*) dan tinggal di goa (*abris sous roche*).',
      'Keturunan modern dihubungkan dengan Suku Semang (Malaysia), Suku Aeta (Filipina), dan kelompok di Papua/Maluku.'
    ],
    keywords: ['Ras Negrito', 'Paparan Sunda', 'Australoid', 'Abris Sous Roche', 'Suku Semang', 'Suku Aeta', 'Food Gathering'],
    causeProcessEffect: {
      cause: 'Perubahan iklim pasca-Zaman Es (Melternya es) dan pencarian sumber makanan melintasi dataran Sunda.',
      process: 'Gelombang migrasi manusia purba bergerak dari daratan Asia Tenggara daratan menuju daratan Sunda dan pulau-pulau Nusantara.',
      effect: 'Ras Negrito menjadi penghuni paling awal kepulauan yang menyebar di hutan-hutan dan pesisir Nusantara.'
    },
    threeSentences: [
      'Ras Negrito adalah gelombang migrasi manusia paling awal yang mendiami daratan Sunda dan Nusantara.',
      'Memiliki ciri fisik kulit gelap, rambut keriting, serta kebudayaan berburu meramu nomaden.',
      'Sisa keturunan ras ini di Asia Tenggara adalah Suku Semang di Malaya dan Suku Aeta di Filipina.'
    ],
    dontConfuse: [
      {
        term: 'Ras Negrito vs Ras Melanesoid',
        description: 'Negrito datang lebih awal dan berpostur cenderung lebih pendek (pygmy/dwarfism teradaptasi), sedangkan Melanesoid bermigrasi belakangan membawa budaya mesolitikum/neolitikum lebih lanjut ke wilayah timur.',
        distinction: 'Negrito = gelombang purba fisik pendek; Melanesoid = gelombang timur Nusantara/Papua.'
      }
    ],
    tableOrDiagram: {
      headers: ['Aspek', 'Ras Negrito', 'Ras Melanesoid'],
      rows: [
        { col1: 'Waktu Kedatangan', col2: 'Sangat awal (±10.000 SM)', col3: '±7.000 SM - 5.000 SM' },
        { col1: 'Ciri Fisik', col2: 'Kulit gelap, pendek, rambut keriting', col3: 'Kulit gelap, tinggi-sedang, bibir tebal' },
        { col1: 'Pola Hidup', col2: 'Berburu meramu nomaden', col3: 'Semi-sedenter, sampah kerang (Kjokkenmoddinger)' },
        { col1: 'Suku Terkait', col2: 'Semang, Aeta, Mappi', col3: 'Papua, Ambon, NTT' }
      ]
    },
    mnemonic: {
      phrase: 'NEGRITO = Nenek-Awal-Gelap-Rambut-Istimewa-Tinggal-Oles-Gua',
      explanation: 'Nenek moyang Paling Awal (N), Kulit Gelap (G), Rambut Keriting (R), Tinggal di Gua (O/Gua).'
    },
    likelyExamQuestions: [
      'Siapakah kelompok ras paling awal yang menghuni kepulauan Indonesia sebelum migrasi Proto Melayu?',
      'Suku Semang di Malaysia dan Suku Aeta di Filipina dikategorikan dalam rumpun ras apa?',
      'Apa ciri budaya utama ras Negrito saat bermigrasi ke daratan Sunda?'
    ],
    activeRecall: [
      { question: 'Sebutkan 3 ciri fisik utama dari Ras Negrito!', answer: 'Kulit gelap, rambut keriting, postur tubuh pendek (pygmy).' },
      { question: 'Sebutkan contoh suku keturunan Negrito di Asia Tenggara!', answer: 'Suku Semang (Malaysia) dan Suku Aeta (Filipina).' },
      { question: 'Jalur apa yang dilalui Ras Negrito menuju Nusantara?', answer: 'Jalur darat Paparan Sunda yang menyatu saat Zaman Es.' },
      { question: 'Apa corak kehidupan ekonomi Ras Negrito pada masa purba?', answer: 'Berburu dan meramu tingkat awal (food gathering) secara nomaden.' },
      { question: 'Apa beda utama Negrito dengan Melanesoid?', answer: 'Negrito berpostur lebih pendek dan datang lebih awal sebelum Melanesoid.' }
    ],
    flashcards: [
      { id: 'a1', front: 'Apa itu Ras Negrito?', back: 'Kelompok ras paling awal penghuni Nusantara berkarakter kulit gelap, rambut keriting, dan bertubuh pendek.', mnemonic: 'Negrito = Negro-Pygmy Awal' },
      { id: 'a2', front: 'Di manakah sisa keturunan Ras Negrito ditemukan?', back: 'Suku Semang (Malaysia), Suku Aeta (Filipina), dan suku lokal di Papua/Mappi.' },
      { id: 'a3', front: 'Bagaimana ras Negrito dapat mencapai Nusantara?', back: 'Melalui dataran Paparan Sunda yang terbentuk pada masa Glasial (Zaman Es).' },
      { id: 'a4', front: 'Apa nama tempat tinggal khas goa ras Negrito/Mesolitikum?', back: 'Abris Sous Roche (goa payung tempat tinggal manusia purba).' },
      { id: 'a5', front: 'Apa mata pencaharian utama Ras Negrito?', back: 'Food gathering (berburu binatang hutan dan meramu hasil alam).' }
    ],
    quizQuestions: [
      {
        id: 'q_a1',
        question: 'Kelompok manusia purba paling awal yang memasuki wilayah Kepulauan Nusantara melalui Paparan Sunda dengan ciri fisik kulit gelap dan rambut keriting adalah...',
        options: [
          { id: 'opt1', text: 'Ras Negrito' },
          { id: 'opt2', text: 'Proto Melayu' },
          { id: 'opt3', text: 'Deutro Melayu' },
          { id: 'opt4', text: 'Ras Mongoloid' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Ras Negrito merupakan gelombang migrasi terawal (mesolitikum awal) sebelum kedatangan kelompok Austronesia (Proto dan Deutro Melayu).'
      },
      {
        id: 'q_a2',
        question: 'Suku Aeta di Filipina dan Suku Semang di Semenanjung Malaya merupakan contoh sisa keturunan dari ras...',
        options: [
          { id: 'opt1', text: 'Negrito' },
          { id: 'opt2', text: 'Deutro Melayu' },
          { id: 'opt3', text: 'Austronesia' },
          { id: 'opt4', text: 'Arya' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku Aeta dan Semang secara antropologis merupakan relict population dari gelombang ras Negrito.'
      },
      {
        id: 'q_a3',
        question: 'Istilah "Abris sous roche" yang berkaitan dengan pola tempat tinggal manusia purba Ras Negrito berarti...',
        options: [
          { id: 'opt1', text: 'Goa ceruk batu karang tempat berlindung' },
          { id: 'opt2', text: 'Sampah dapur berupa tumpukan kulit kerang' },
          { id: 'opt3', text: 'Rumah panggung kayu pesisir' },
          { id: 'opt4', text: 'Perahu cadik berpindah-pindah' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Abris sous roche merujuk pada goa ceruk tebing batu yang difungsikan sebagai tempat tinggal sementara.'
      },
      {
        id: 'q_a4',
        question: 'Faktor geografis utama yang memungkinkan Ras Negrito berjalan darat dari Asia Tenggara ke pulau-pulau Indonesia adalah...',
        options: [
          { id: 'opt1', text: 'Menyatunya daratan dalam fenomena Paparan Sunda pada Zaman Es' },
          { id: 'opt2', text: 'Adanya jembatan besi buatan manusia' },
          { id: 'opt3', text: 'Surutnya Selat Makassar menjadi kering total' },
          { id: 'opt4', text: 'Pencairan es kutub yang menaikkan laut' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Zaman Es menyebabkan permukaan air laut turun hingga 100-120 meter, membentuk Paparan Sunda yang menghubungkan Sumatra, Jawa, Borneo dengan Asia.'
      },
      {
        id: 'q_a5',
        question: 'Pernyataan berikut yang BENAR mengenai Ras Negrito di Nusantara adalah...',
        options: [
          { id: 'opt1', text: 'Telah mengenal teknik pembuat perunggu dan besi' },
          { id: 'opt2', text: 'Memiliki corak kehidupan berburu dan meramu (food gathering)' },
          { id: 'opt3', text: 'Merupakan pembawa kebudayaan Dongson' },
          { id: 'opt4', text: 'Bermigrasi dari Kepulauan Formosa Taiwan' }
        ],
        correctAnswerId: 'opt2',
        explanation: 'Ras Negrito tergolong manusia purba tingkat berburu dan meramu sederhana (food gathering), bukan pembawa perunggu (Dongson).'
      }
    ]
  },
  {
    id: 'B',
    code: 'B',
    title: 'THEORY OUT OF TAIWAN',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Teori Out of Taiwan menyatakan bahwa leluhur bangsa Indonesia berasal dari Taiwan (Formosa).',
        'Pelopor/Tokoh utama: Peter Bellwood dan Robert Blust.',
        'Bukti utama: Bukti Linguistik (bahasa rumpun Austronesia) dan Bukti Arkeologis (gerabah, neolitikum).'
      ],
      fromSupplemental: [
        'Buku Sejarah Indonesia SMA/MA Kelas X Kurikulum Merdeka (Kemendikbudristek).',
        'Riset Genetik & Linguistik Austronesia (Bellwood, 2007).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan konsep utama Teori Out of Taiwan.',
      'Mengidentifikasi tokoh pendukung utama (Peter Bellwood, Robert Blust).',
      'Menjelaskan rute/jalur migrasi dari Taiwan menuju Filipina, Nusantara, hingga Pasifik.',
      'Menganalisis bukti pendukung (Linguistik Austronesia, Genetika DNA, Arkeologi Neolitikum).',
      'Membandingkan Teori Out of Taiwan dengan Teori Out of Yunnan dan Teori Nusantara.'
    ],
    fullContent: `Teori Out of Taiwan adalah teori migrasi yang menjelaskan bahwa nenek moyang penutur bahasa Austronesia di Nusantara berasal dari Pulau Taiwan (Formosa). Teori ini digagas oleh arkeolog Peter Bellwood dan ahli linguistik Robert Blust.

Menurut teori ini, sekitar 5.000–4.000 SM, kelompok penutur proto-Austronesia di Taiwan mengalami pertumbuhan populasi dan mulai bermigrasi maritim ke selatan menuju Filipina. Dari Filipina, migrasi terpecah menjadi dua rute utama:
1. Rute Barat: Menuju Sulawesi Utara, Maluku, Kalimantan, Sumatra, Jawa, hingga Semenanjung Malaya.
2. Rute Timur: Menuju Nusa Tenggara, Papua bagian utara, Mikronesia, hingga Polinesia di Samudra Pasifik.

Bukti-bukti utama yang mendukung teori ini meliputi:
- Bukti Linguistik: Bahasa-bahasa Nusantara tergolong keluarga Austronesia yang memunculkan keberagaman bahasa terbanyak di Taiwan.
- Bukti Arkeologis: Penyebaran kapak persegi, belincung persegi, teknik menenun, dan pembuatan gerabah neolitikum.
- Bukti Genetika: Analisis marka genetik DNA mitokondria (mtDNA) dan kromosom-Y masyarakat Nusantara menunjukkan kekerabatan erat dengan suku indigenous Taiwan (seperti Ami, Atayal).`,
    corePoints: [
      'Asal Nenek Moyang: Taiwan (Formosa).',
      'Tokoh Utama: Peter Bellwood (Arkeolog) & Robert Blust (Linguis).',
      'Rute Migrasi: Taiwan → Filipina → Indonesia (Sulawesi/Maluku) → Pasifik & Madagaskar.',
      'Rumpun Bahasa: Austronesia.',
      'Bukti Utama: Kemiripan Bahasa (Linguistik), Kapak Persegi/Gerabah (Arkeologi), DNA (Genetika).'
    ],
    keywords: ['Out of Taiwan', 'Peter Bellwood', 'Robert Blust', 'Austronesia', 'Formosa', 'Linguistik', 'Kapak Persegi'],
    causeProcessEffect: {
      cause: 'Pertumbuhan populasi dan inovasi pelayaran perahu bercadik di Kepulauan Taiwan.',
      process: 'Migrasi maritim menyusuri Kepulauan Filipina lalu masuk ke Sulawesi, Maluku, Kepulauan Indonesia, hingga Pasifik.',
      effect: 'Sebagian besar suku bangsa di Nusantara menggunakan rumpun bahasa Austronesia dan memiliki kebudayaan Neolitikum sejenis.'
    },
    threeSentences: [
      'Teori Out of Taiwan menyatakan nenek moyang Indonesia berasal dari Taiwan melalui migrasi rumpun Austronesia.',
      'Teori ini didukung oleh pakar Peter Bellwood dan Robert Blust berdasarkan bukti linguistik dan arkeologis.',
      'Jalur migrasinya bergerak dari Taiwan ke Filipina, lalu menyebar ke Sulawesi, Nusantara barat, hingga Pasifik.'
    ],
    dontConfuse: [
      {
        term: 'Out of Taiwan vs Out of Yunnan',
        description: 'Out of Taiwan berbasis rumpun bahasa Austronesia dan rute kepulauan Formosa-Filipina, sedangkan Out of Yunnan berbasis migrasi darat/sungai dari Cina Selatan (Yunnan) membawa perunggu/besi.',
        distinction: 'Taiwan = Austronesia & Kepulauan; Yunnan = Lembah Sungai Mekong & Daratan Asia.'
      }
    ],
    tableOrDiagram: {
      headers: ['Indikator', 'Teori Out of Taiwan', 'Teori Out of Yunnan'],
      rows: [
        { col1: 'Asal-Usul', col2: 'Kepulauan Taiwan (Formosa)', col3: 'Yunnan (Cina Selatan)' },
        { col1: 'Tokoh', col2: 'Peter Bellwood, Robert Blust', col3: 'R.H. Geldern, J.H.C. Kern' },
        { col1: 'Jalur', col2: 'Taiwan → Filipina → Sulawesi → Nusantara', col3: 'Yunnan → Vietnam → Malaya → Nusantara' },
        { col1: 'Fokus Bukti', col2: 'Linguistik Austronesia & DNA mtDNA', col3: 'Kapak Tua & Budaya Dongson' }
      ]
    },
    mnemonic: {
      phrase: 'TAIWAN = T-erbang A-ustronesia I-kut W-ave A-ngkut N-enek (Bellwood)',
      explanation: 'Taiwan asal Austronesia dipelopori Peter Bellwood.'
    },
    likelyExamQuestions: [
      'Pakar arkeologi yang menyusun teori Out of Taiwan berdasarkan bukti persebaran bahasa Austronesia adalah...',
      'Mengapa bukti linguistik menjadi argumen paling kuat dalam mendukung teori Out of Taiwan?',
      'Jalur migrasi bangsa Austronesia dari Taiwan ke kepulauan Indonesia secara berurutan melewati...'
    ],
    activeRecall: [
      { question: 'Siapakah dua tokoh utama pencetus/pendukung Teori Out of Taiwan?', answer: 'Peter Bellwood (arkeolog) dan Robert Blust (linguis).' },
      { question: 'Apa nama rumpun bahasa yang menjadi bukti utama teori Out of Taiwan?', answer: 'Rumpun bahasa Austronesia.' },
      { question: 'Sebutkan rute utama migrasi dari Taiwan menuju Indonesia!', answer: 'Taiwan → Filipina → Sulawesi Utara / Maluku → wilayah Nusantara lainnya.' },
      { question: 'Apa bukti arkeologis yang dibawa oleh penutur Austronesia dari Taiwan?', answer: 'Kapak persegi, belincung persegi, tenun, dan gerabah neolitikum.' },
      { question: 'Apa beda utama Teori Out of Taiwan dengan Teori Nusantara?', answer: 'Out of Taiwan menganggap nenek moyang dari luar (Taiwan), sedangkan Teori Nusantara menganggap nenek moyang asli berkembang di Nusantara.' }
    ],
    flashcards: [
      { id: 'b1', front: 'Apa inti dari Teori Out of Taiwan?', back: 'Nenek moyang bangsa Indonesia berasal dari Taiwan melalui penyebaran penutur Austronesia.' },
      { id: 'b2', front: 'Siapa tokoh arkeologi di balik Teori Out of Taiwan?', back: 'Peter Bellwood.' },
      { id: 'b3', front: 'Siapa tokoh linguistik pendukung Out of Taiwan?', back: 'Robert Blust.' },
      { id: 'b4', front: 'Mengapa rumpun Austronesia menjadi kunci Teori Out of Taiwan?', back: 'Sebab keanekaragaman bahasa Austronesia paling tua ditemukan di antara suku pribumi Taiwan.' },
      { id: 'b5', front: 'Bagaimanakah rute migrasi Out of Taiwan?', back: 'Taiwan → Filipina → Sulawesi / Maluku → Seluruh Nusantara & Samudra Pasifik.' }
    ],
    quizQuestions: [
      {
        id: 'q_b1',
        question: 'Teori yang menyatakan bahwa nenek moyang rumpun Austronesia di Nusantara berasal dari Pulau Formosa (Taiwan) dinamakan...',
        options: [
          { id: 'opt1', text: 'Theory Out of Taiwan' },
          { id: 'opt2', text: 'Theory Out of Yunnan' },
          { id: 'opt3', text: 'Teori Nusantara' },
          { id: 'opt4', text: 'Theory Out of Africa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Theory Out of Taiwan menjelaskan migrasi penutur Austronesia yang bermula dari Taiwan.'
      },
      {
        id: 'q_b2',
        question: 'Tokoh arkeolog terkenal yang mempopulerkan teori Out of Taiwan adalah...',
        options: [
          { id: 'opt1', text: 'Peter Bellwood' },
          { id: 'opt2', text: 'Mohammad Yamin' },
          { id: 'opt3', text: 'J.H.C. Kern' },
          { id: 'opt4', text: 'Eugene Dubois' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Peter Bellwood adalah arkeolog kawakan pengusung teori Out of Taiwan.'
      },
      {
        id: 'q_b3',
        question: 'Bukti paling kuat yang digunakan Robert Blust dalam mendukung Teori Out of Taiwan adalah...',
        options: [
          { id: 'opt1', text: 'Kesamaan struktur dan akar kata dalam rumpun bahasa Austronesia' },
          { id: 'opt2', text: 'Ditemukannya kapak perunggu di sepanjang sungai Mekong' },
          { id: 'opt3', text: 'Adanya sisa fosil Meganthropus di Taiwan' },
          { id: 'opt4', text: 'Candi-candi berarsitektur mirip di Taiwan dan Jawa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Robert Blust menggunakan analisis linguistik komparatif rumpun Austronesia.'
      },
      {
        id: 'q_b4',
        question: 'Urutan rute migrasi manusia penutur Austronesia berdasarkan Teori Out of Taiwan adalah...',
        options: [
          { id: 'opt1', text: 'Taiwan → Filipina → Sulawesi/Maluku → Kepulauan Nusantara' },
          { id: 'opt2', text: 'Taiwan → Vietnam → Malaya → Sumatra' },
          { id: 'opt3', text: 'Yunnan → India → Sumatra → Jawa' },
          { id: 'opt4', text: 'Afrika → Madagaskar → NTT → Taiwan' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Rute maritim Out of Taiwan bergerak ke selatan melewati Kepulauan Filipina lalu memasuki jalur utara Indonesia (Sulawesi/Maluku).'
      },
      {
        id: 'q_b5',
        question: 'Teknologi bahari penting yang mendukung keberhasilan migrasi Austronesia dari Taiwan menjelajahi samudra adalah...',
        options: [
          { id: 'opt1', text: 'Perahu cadik (outrigger canoe)' },
          { id: 'opt2', text: 'Kapal uap bermotor' },
          { id: 'opt3', text: 'Perahu jung besar buatan Dinasti Han' },
          { id: 'opt4', text: 'Rakit bambu tanpa layar' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Inovasi perahu cadik memberikan stabilitas tinggi saat menyeberangi lautan luas.'
      }
    ]
  },
  {
    id: 'C',
    code: 'C',
    title: 'TEORI NUSANTARA',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Teori Nusantara menyatakan bahwa bangsa Indonesia berasal dari wilayah Indonesia sendiri, bukan dari luar.',
        'Tokoh pendukung: Prof. Dr. Mohammad Yamin, Sultan Takdir Alisjahbana (STA), dan Gorys Keraf.',
        'Argumen utama: Bangsa Melayu memiliki peradaban tinggi dan fosil manusia purba tertua (Pithecanthropus) ditemukan di Jawa.'
      ],
      fromSupplemental: [
        'Buku Sejarah Kebudayaan Indonesia (Kemendikbud).',
        'Karya Mohammad Yamin: "6000 Tahun Bangsa Indonesia".'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan gagasan utama Teori Nusantara.',
      'Mengidentifikasi tokoh-tokoh lokal pengusung (Moh. Yamin, Gorys Keraf, STA).',
      'Menganalisis argumen pendukung (penemuan fosil Homo erectus/Pithecanthropus di Jawa, kebudayaan tinggi Melayu).',
      'Membedakan Teori Nusantara yang bersifat indigenous dengan teori-teori migrasi dari luar.'
    ],
    fullContent: `Teori Nusantara adalah teori yang menyatakan bahwa nenek moyang bangsa Indonesia berasal dari wilayah Nusantara (Indonesia) itu sendiri, bukan hasil migrasi dari daratan Asia maupun Taiwan. Teori ini didukung kuat oleh cendekiawan dan sejarawan Indonesia seperti Prof. Dr. Mohammad Yamin, Gorys Keraf, dan Sultan Takdir Alisjahbana.

Gagasan utama teori ini berakar pada kenyataan bahwa wilayah Kepulauan Indonesia memiliki jejak fosil manusia purba paling lengkap di dunia (seperti *Pithecanthropus erectus* / *Homo erectus soloensis* yang ditemukan oleh Eugene Dubois dan Koenigswald di Sangiran dan Trinil). 

Argumen pendukung Teori Nusantara:
1. Kesinambungan Fosil: Adanya fosil manusia purba tertua di Jawa menunjukkan evolusi lokal manusia di Nusantara.
2. Tingkat Peradaban Tinggi: Bangsa Melayu sudah memiliki tingkat kebudayaan dan kemahiran bahari yang tinggi, sehingga tidak perlu diimpor dari tempat lain.
3. Kemiripan Bahasa karena Kekerabatan Lokal: Gorys Keraf berargumen bahwa kemiripan bahasa-bahasa di Asia Tenggara terjadi karena penutur di Nusantara menyebar ke luar, bukan sebaliknya.`,
    corePoints: [
      'Prinsip Utama: Nenek moyang asli dari wilayah Nusantara sendiri (*indigenous*).',
      'Tokoh Pendukung: Prof. Dr. Mohammad Yamin, Gorys Keraf, Sultan Takdir Alisjahbana.',
      'Landasan Utama: Penemuan fosil purba di Sangiran/Trinil (Pithecanthropus) dan kebudayaan bahari yang tinggi.',
      'Sifat Teori: Menolak anggapan bahwa bangsa Indonesia adalah pendatang hasil migrasi asing.'
    ],
    keywords: ['Teori Nusantara', 'Mohammad Yamin', 'Gorys Keraf', 'Pithecanthropus', 'Indigenous', 'Sangiran'],
    causeProcessEffect: {
      cause: 'Keberadaan fosil manusia purba yang sangat kaya di tanah Jawa dan kejayaan peradaban bahari lokal.',
      process: 'Manusia di Kepulauan Nusantara berevolusi dan mengembangkan kebudayaan secara mandiri sejak zaman pra-aksara.',
      effect: 'Timbul pandangan nasionalis ilmiah bahwa bangsa Indonesia memiliki akar kebudayaan asli tanpa bergantung pada migrasi daratan Asia.'
    },
    threeSentences: [
      'Teori Nusantara menegaskan bahwa nenek moyang bangsa Indonesia berasal dan berevolusi di wilayah Nusantara sendiri.',
      'Tokoh seperti Mohammad Yamin dan Gorys Keraf mendasarkan teori ini pada penemuan fosil purba di Jawa.',
      'Teori ini menolak gagasan bahwa penduduk Indonesia merupakan hasil migrasi dari daratan Asia luar.'
    ],
    dontConfuse: [
      {
        term: 'Teori Nusantara vs Out of Taiwan/Yunnan',
        description: 'Teori Nusantara beranggapan nenek moyang ASLI LOKAL (*autochthonous*), sedangkan Out of Taiwan/Yunnan beranggapan nenek moyang berasal dari MIGRASI LUAR NEGERI.',
        distinction: 'Nusantara = Asli Lokal; Taiwan/Yunnan = Pendatang Luar.'
      }
    ],
    tableOrDiagram: {
      headers: ['Aspek Perbandingan', 'Teori Nusantara', 'Teori Migrasi Luar (Yunnan/Taiwan)'],
      rows: [
        { col1: 'Asal Nenek Moyang', col2: 'Kepulauan Indonesia (Lokal)', col3: 'Luar Nusantara (China / Taiwan)' },
        { col1: 'Tokoh Utama', col2: 'Moh. Yamin, Gorys Keraf, STA', col3: 'Peter Bellwood, J.H.C. Kern, Geldern' },
        { col1: 'Bukti Fosil', col2: 'Fosil Pithecanthropus di Sangiran', col3: 'Artefak kapak & bukti bahasa' },
        { col1: 'Arah Kebudayaan', col2: 'Dari Nusantara menyebar ke luar', col3: 'Dari luar masuk menyebar ke Nusantara' }
      ]
    },
    mnemonic: {
      phrase: 'NUSANTARA = N-enek moyang U-nik S-endiri A-sli N-egara T-ercinta A-da R-iset A-min (Yamin)',
      explanation: 'Nusantara = Asli Sendiri dipelopori Moh. Yamin & Gorys Keraf.'
    },
    likelyExamQuestions: [
      'Cendekiawan Indonesia yang memelopori Teori Nusantara dengan alasan ditemukannya fosil Pithecanthropus adalah...',
      'Apa alasan utama Gorys Keraf mendukung Teori Nusantara dalam kajian linguistik?',
      'Bagaimana pandangan Teori Nusantara mengenai keberadaan fosil Sangiran dalam kaitannya dengan asal-usul bangsa Indonesia?'
    ],
    activeRecall: [
      { question: 'Siapakah 3 tokoh utama pendukung Teori Nusantara?', answer: 'Mohammad Yamin, Gorys Keraf, dan Sultan Takdir Alisjahbana.' },
      { question: 'Apa bukti paleontologi utama yang melandasi Teori Nusantara?', answer: 'Penemuan fosil manusia purba Pithecanthropus erectus / Homo erectus di Sangiran & Trinil (Jawa).' },
      { question: 'Apa pandangan Teori Nusantara terhadap asal usul bahasa Melayu?', answer: 'Bahasa Melayu berkembang di Nusantara dan mempengaruhi wilayah luar, bukan sebaliknya.' },
      { question: 'Mengapa Moh. Yamin yakin nenek moyang bangsa Indonesia asli lokal?', answer: 'Karena peradaban dan fosil manusia purba di Jawa sudah ada sejak jutaan tahun lalu.' },
      { question: 'Sebutkan kata kunci utama Teori Nusantara!', answer: 'Asli Nusantara, Indigenous, Moh. Yamin, Pithecanthropus, Sangiran.' }
    ],
    flashcards: [
      { id: 'c1', front: 'Apa gagasan inti Teori Nusantara?', back: 'Nenek moyang bangsa Indonesia berasal dan berkembang di Kepulauan Nusantara sendiri.' },
      { id: 'c2', front: 'Siapa sejarawan Indonesia paling menonjol pendukung Teori Nusantara?', back: 'Prof. Dr. Mohammad Yamin.' },
      { id: 'c3', front: 'Siapa ahli bahasa Indonesia yang mendukung Teori Nusantara?', back: 'Gorys Keraf.' },
      { id: 'c4', front: 'Apa bukti fisik utama Teori Nusantara?', back: 'Fosil manusia purba (Pithecanthropus erectus) di Sangiran & Trinil Jawa.' },
      { id: 'c5', front: 'Apa kebalikan dari Teori Nusantara?', back: 'Teori migrasi dari luar (seperti Out of Yunnan dan Out of Taiwan).' }
    ],
    quizQuestions: [
      {
        id: 'q_c1',
        question: 'Teori yang berpandangan bahwa bangsa Indonesia berasal dari wilayah Indonesia sendiri dan tidak bermigrasi dari luar adalah...',
        options: [
          { id: 'opt1', text: 'Teori Nusantara' },
          { id: 'opt2', text: 'Theory Out of Taiwan' },
          { id: 'opt3', text: 'Theory Out of Yunnan' },
          { id: 'opt4', text: 'Theory Out of Africa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Teori Nusantara menegaskan asal-usul lokal (indigenous) nenek moyang Indonesia.'
      },
      {
        id: 'q_c2',
        question: 'Tokoh pahlawan nasional dan sejarawan yang menjadi pendukung utama Teori Nusantara adalah...',
        options: [
          { id: 'opt1', text: 'Prof. Dr. Mohammad Yamin' },
          { id: 'opt2', text: 'Peter Bellwood' },
          { id: 'opt3', text: 'Max Muller' },
          { id: 'opt4', text: 'R.H. Geldern' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Mohammad Yamin secara gigih memperjuangkan gagasan bahwa bangsa Indonesia berasal dari tanah airnya sendiri.'
      },
      {
        id: 'q_c3',
        question: 'Penemuan fosil manusia purba di Sangiran dan Trinil Jawa menjadi dasar argumen Teori Nusantara karena menunjukkan bahwa...',
        options: [
          { id: 'opt1', text: 'Wilayah Indonesia telah dihuni manusia purba secara berkesinambungan sejak lama' },
          { id: 'opt2', text: 'Manusia purba Indonesia berasal dari Benua Afrika' },
          { id: 'opt3', text: 'Bangsa Indonesia tidak pernah mengalami evolusi' },
          { id: 'opt4', text: 'Kebudayaan Indonesia diimpor dari Yunani' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Keberadaan fosil Homo erectus memperkuat argumen evolusi lokal di tanah air.'
      },
      {
        id: 'q_c4',
        question: 'Ahli tata bahasa Indonesia yang berpendapat bahwa kemiripan bahasa di Pasifik bersumber dari bahasa Melayu Nusantara adalah...',
        options: [
          { id: 'opt1', text: 'Gorys Keraf' },
          { id: 'opt2', text: 'Robert Blust' },
          { id: 'opt3', text: 'Eugene Dubois' },
          { id: 'opt4', text: 'Koentjaraningrat' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Gorys Keraf memberikan analisis linguistik pendukung Teori Nusantara.'
      },
      {
        id: 'q_c5',
        question: 'Perbedaan mendasar antara Teori Nusantara dan Teori Out of Yunnan terletak pada...',
        options: [
          { id: 'opt1', text: 'Asal usul nenek moyang (Lokal vs Daratan China/Yunnan)' },
          { id: 'opt2', text: 'Jenis agama yang dianut' },
          { id: 'opt3', text: 'Sistem pemerintahan yang dibentuk' },
          { id: 'opt4', text: 'Penggunaan mata uang' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Teori Nusantara berakar pada asal lokal, sedangkan Out of Yunnan meyakini kedatangan dari wilayah Cina Selatan.'
      }
    ]
  },
  {
    id: 'D',
    code: 'D',
    title: 'THEORY OUT OF AFRICA',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Teori Out of Africa menyatakan bahwa seluruh manusia modern (Homo sapiens) berasal dari Afrika.',
        'Migrasi terjadi sekitar 100.000 - 60.000 tahun lalu menyebar ke seluruh benua termasuk Nusantara.',
        'Didasarkan pada penelitian genetika DNA mitokondria (mtDNA).'
      ],
      fromSupplemental: [
        'Buku Antropologi Biologi & Genetika Populasi (Kemendikbudristek).',
        'Studi Pemetaan Genom Manusia Global (Human Genome Project).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan konsep dasar Teori Out of Africa.',
      'Mengidentifikasi spesies manusia yang terlibat (Homo sapiens modern).',
      'Menjelaskan jalur migrasi global dari Afrika menuju Timur Tengah, Asia, Nusantara, hingga Australia.',
      'Menganalisis bukti ilmiah genetika (mtDNA Eve & Kromosom-Y Adam).',
      'Menghubungkan Teori Out of Africa dengan keberadaan populasi awal di Nusantara.'
    ],
    fullContent: `Teori Out of Africa adalah teori asal-usul manusia modern (Homo sapiens) yang menyatakan bahwa seluruh populasi manusia modern saat ini berasal dari satu nenek moyang bersama yang muncul di benua Afrika sekitar 200.000 - 150.000 tahun lalu.

Sekitar 70.000 - 60.000 tahun yang lalu, sekelompok kecil *Homo sapiens* keluar dari benua Afrika menyeberangi Bab-el-Mandeb (Laut Merah) menuju Semenanjung Arabia, lalu bergerak menyusuri pesisir Asia Selatan (India), Asia Tenggara (Nusantara), hingga mencapai benua Australia (menjadi nenek moyang Aborigin dan Melanesia).

Bukti Ilmiah Utama:
1. Genetika DNA Mitokondria (mtDNA): Diturunkan hanya dari garis ibu. Variasi mtDNA paling beragam ditemukan pada penduduk asli Afrika, membuktikan bahwa Afrika adalah populasi tertua.
2. Analisis Kromosom-Y: Diturunkan dari garis ayah, menunjukkan pola mutasi sejajar yang mengarah pada Afrika.
3. Fosil Homo Sapiens Tertua: Fosil manusia modern tertua ditemukan di Jebel Irhoud (Maret) dan Omo Kibish (Etiopia).`,
    corePoints: [
      'Asal Manusia Modern (*Homo sapiens*): Benua Afrika.',
      'Waktu Migrasi Global: ± 70.000 - 60.000 tahun yang lalu.',
      'Bukti Utama: Analisis Genetika DNA Mitokondria (mtDNA) & Kromosom Y.',
      'Jalur ke Nusantara: Afrika → Timur Tengah → Pesisir Asia Selatan → Sundaland / Nusantara → Australia.',
      'Menggantikan populasi manusia purba lama (*Homo erectus* / Neanderthal) di tempat yang didatangi.'
    ],
    keywords: ['Out of Africa', 'Homo Sapiens', 'DNA Mitokondria', 'mtDNA', 'Jebel Irhoud', 'Migrasi Pesisir'],
    causeProcessEffect: {
      cause: 'Perubahan iklim, kekeringan di Afrika, dan dorongan eksplorasi mencari sumber makanan baru.',
      process: 'Homo sapiens bermigrasi keluar Afrika menyusuri pantai (Coastal Migration Route) menuju Asia Tenggara.',
      effect: 'Seluruh ras manusia modern di bumi (termasuk Nusantara) memiliki keterikatan genetika dengan Afrika.'
    },
    threeSentences: [
      'Teori Out of Africa menyatakan bahwa seluruh manusia modern (Homo sapiens) berasal dari benua Afrika.',
      'Migrasi keluar Afrika terjadi sekitar 60.000 tahun lalu menyusuri pesisir Asia hingga ke Nusantara dan Australia.',
      'Bukti utama teori ini ditunjukkan oleh keanekaragaman DNA Mitokondria (mtDNA) tertinggi yang berada di Afrika.'
    ],
    dontConfuse: [
      {
        term: 'Out of Africa vs Out of Taiwan',
        description: 'Out of Africa menjelaskan asal-usul biologi spasial spesies manusia modern (Homo sapiens) puluhan ribu tahun lalu, sedangkan Out of Taiwan menjelaskan migrasi kebudayaan/bahasa Austronesia ribuan tahun lalu.',
        distinction: 'Africa = Evolusi Biologi Manusia Sapiens; Taiwan = Migrasi Bahasa & Budaya Austronesia.'
      }
    ],
    tableOrDiagram: {
      headers: ['Tahapan Migrasi', 'Wilayah Dituju', 'Estimasi Waktu'],
      rows: [
        { col1: 'Tahap 1', col2: 'Afrika Timur (Etiopia/Kenya)', col3: '200.000 - 150.000 tahun lalu' },
        { col1: 'Tahap 2', col2: 'Timur Tengah & Semenanjung Arabia', col3: '70.000 - 60.000 tahun lalu' },
        { col1: 'Tahap 3', col2: 'Asia Selatan & Nusantara (Sundaland)', col3: '60.000 - 50.000 tahun lalu' },
        { col1: 'Tahap 4', col2: 'Australia (Aborigin) & Pasifik', col3: '50.000 - 40.000 tahun lalu' }
      ]
    },
    mnemonic: {
      phrase: 'AFRIKA = A-wal F-osil R-as I-ngat K-romosom A-dam (mtDNA)',
      explanation: 'Afrika asal Homo Sapiens dengan tes mtDNA & Kromosom Y.'
    },
    likelyExamQuestions: [
      'Bukti genetika paling sahih yang mendukung teori Out of Africa dalam melacak asal-usul manusia modern adalah...',
      'Manusia spesies apakah yang bermigrasi dari Afrika menyebar ke seluruh benua menurut Teori Out of Africa?',
      'Bagaimana jalur migrasi pesisir (coastal route) membawa Homo sapiens mencapai Kepulauan Nusantara?'
    ],
    activeRecall: [
      { question: 'Spesies manusia apa yang dijelaskan dalam Teori Out of Africa?', answer: 'Homo sapiens (manusia modern).' },
      { question: 'Apa bukti genetik utama yang melandasi Teori Out of Africa?', answer: 'Pemeriksaan DNA Mitokondria (mtDNA) dan Kromosom-Y.' },
      { question: 'Kapan perkiraan waktu Homo sapiens mulai bergerak keluar benua Afrika?', answer: 'Sekitar 70.000 hingga 60.000 tahun yang lalu.' },
      { question: 'Jalur apa yang ditempuh Homo sapiens hingga sampai ke Indonesia?', answer: 'Jalur pesisir pantai Asia Selatan (India) menuju Sundaland / Nusantara.' },
      { question: 'Apa hubungan Homo sapiens Out of Africa dengan Homo erectus di Jawa?', answer: 'Homo sapiens datang belakangan dan menggantikan populasi Homo erectus purba yang punah.' }
    ],
    flashcards: [
      { id: 'd1', front: 'Apa inti Teori Out of Africa?', back: 'Seluruh manusia modern (Homo sapiens) di bumi berasal dari benua Afrika.' },
      { id: 'd2', front: 'Apa yang dimaksud dengan DNA Mitokondria (mtDNA)?', back: 'Materi genetik yang diwariskan dari garis ibu yang membuktikan variasi gen tertua ada di Afrika.' },
      { id: 'd3', front: 'Spesies apa yang terlibat dalam Out of Africa?', back: 'Homo sapiens (bukan Pithecanthropus atau Meganthropus).' },
      { id: 'd4', front: 'Bagaimana jalur migrasi pesisir Out of Africa?', back: 'Afrika → Laut Merah → Arabia → India → Nusantara → Australia.' },
      { id: 'd5', front: 'Berapa usia perkiraan fosil Homo sapiens tertua di Afrika?', back: 'Sekitar 200.000 - 300.000 tahun lalu (Jebel Irhoud).' }
    ],
    quizQuestions: [
      {
        id: 'q_d1',
        question: 'Teori sains populer yang menyatakan bahwa seluruh manusia modern di muka bumi memiliki leluhur bersama dari Benua Afrika dinamakan...',
        options: [
          { id: 'opt1', text: 'Theory Out of Africa' },
          { id: 'opt2', text: 'Theory Out of Taiwan' },
          { id: 'opt3', text: 'Theory Out of Yunnan' },
          { id: 'opt4', text: 'Teori Multiregional' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Theory Out of Africa menjelaskan asal tunggal manusia modern Homo sapiens dari benua Afrika.'
      },
      {
        id: 'q_d2',
        question: 'Spesies manusia yang melakukan penyebaran global dalam Teori Out of Africa adalah...',
        options: [
          { id: 'opt1', text: 'Homo sapiens' },
          { id: 'opt2', text: 'Homo erectus' },
          { id: 'opt3', text: 'Pithecanthropus erectus' },
          { id: 'opt4', text: 'Meganthropus paleojavanicus' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Hanya Homo sapiens (manusia modern) yang dimaksud dalam Teori Out of Africa.'
      },
      {
        id: 'q_d3',
        question: 'Bukti genetika yang membuktikan bahwa populasi Afrika merupakan populasi manusia paling tua adalah...',
        options: [
          { id: 'opt1', text: 'Tingkat keragaman genetika mtDNA paling tinggi berada di Afrika' },
          { id: 'opt2', text: 'Semua manusia memiliki jumlah tulang rusuk yang berbeda' },
          { id: 'opt3', text: 'Ukuran tengkorak manusia Afrika selalu paling besar' },
          { id: 'opt4', text: 'Golongan darah manusia Afrika semuanya bertipe O' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Keanekaragaman genetik mtDNA tertinggi di Afrika menandakan Afrika adalah tempat asal paling tua.'
      },
      {
        id: 'q_d4',
        question: 'Jalur migrasi manusia modern dari Afrika menuju Nusantara sebagian besar mengikuti jalur...',
        options: [
          { id: 'opt1', text: 'Pesisir pantai Asia Selatan (Coastal Route)' },
          { id: 'opt2', text: 'Gurun Pegunungan Himalaya' },
          { id: 'opt3', text: 'Kutub Utara menuju Siberia' },
          { id: 'opt4', text: 'Penerbangan udara samudera' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Jalur pesisir memberikan sumber daya makanan laut yang mudah menunjang perjalanan kelompok migrasi.'
      },
      {
        id: 'q_d5',
        question: 'Perbedaan utama antara Teori Out of Africa dan Teori Multiregional adalah...',
        options: [
          { id: 'opt1', text: 'Out of Africa menyatakan asal manusia modern dari satu tempat (Afrika), sedangkan Multiregional menyatakan evolusi sejajar di berbagai benua' },
          { id: 'opt2', text: 'Out of Africa hanya berlaku untuk bangsa Eropa' },
          { id: 'opt3', text: 'Multiregional menolak keberadaan fosil manusia purba' },
          { id: 'opt4', text: 'Out of Africa didasarkan pada kitab kuno' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Multiregional meyakini Homo erectus di berbagai benua berevolusi lokal menjadi Homo sapiens, sedangkan Out of Africa meyakini asal tunggal di Afrika.'
      }
    ]
  },
  {
    id: 'E',
    code: 'E',
    title: 'THEORY OUT OF YUNNAN',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Teori Out of Yunnan menyatakan nenek moyang bangsa Indonesia berasal dari Yunnan (Cina Selatan).',
        'Tokoh pendukung: R.H. Geldern, J.H.C. Kern, J.R. Logan, dan R.H. Foster.',
        'Migrasi terjadi dalam gelombang: Proto Melayu (Melayu Tua) dan Deutro Melayu (Melayu Muda).'
      ],
      fromSupplemental: [
        'Buku Sejarah Nasional Indonesia Vol I (Balai Pustaka).',
        'Modul Pembelajaran Sejarah SMA Kemendikbud.'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan konsep Teori Out of Yunnan.',
      'Mengidentifikasi tokoh pendukung (R.H. Geldern, J.H.C. Kern, J.R. Logan).',
      'Menjelaskan dua gelombang utama migrasi: Proto Melayu (1500 SM) dan Deutro Melayu (500 SM).',
      'Menganalisis bukti kapak lonjong, kapak persegi, dan kebudayaan perunggu Dongson.',
      'Membandingkan ciri dan keturunan Proto Melayu vs Deutro Melayu.'
    ],
    fullContent: `Teori Out of Yunnan menyatakan bahwa nenek moyang bangsa Indonesia berasal dari daerah Yunnan di Cina Selatan. Teori ini dikembangkan oleh peneliti barat seperti J.H.C. Kern, Robert Von Heine Geldern, J.R. Logan, dan didukung sejarawan Indonesia seperti Prof. Dr. N.J. Krom.

Dasar teori ini adalah ditemukannya kapak tua di wilayah Nusantara yang memiliki kemiripan bentuk dengan kapak batu di Asia Tengah/Yunnan, serta sungai-sungai besar di Asia (Mekong, Salween) yang menjadi sarana transportasi alami dari Yunnan ke wilayah Selatan.

Migrasi Out of Yunnan terbagi menjadi dua gelombang besar:
1. Gelombang Pertama: Proto Melayu (Melayu Tua) - Sekitar 1.500 SM.
   - Membawa kebudayaan Neolitikum (Kapak Persegi melalui jalur barat dan Kapak Lonjong melalui jalur timur).
   - Keturunan modern: Suku Batak, Toraja, Dayak, Nias, Sasak.
2. Gelombang Kedua: Deutro Melayu (Melayu Muda) - Sekitar 500 SM.
   - Membawa kebudayaan Logam/Perunggu (Kebudayaan Dongson Vietnam).
   - Keturunan modern: Suku Jawa, Sunda, Minangkabau, Bali, Bugis, Banjar.`,
    corePoints: [
      'Asal: Yunnan (Cina Selatan / Wilayah Sungai Mekong).',
      'Tokoh Utama: J.H.C. Kern, Robert Von Heine Geldern, J.R. Logan.',
      'Gelombang 1: Proto Melayu (1500 SM, Neolitikum, Kapak Persegi & Lonjong).',
      'Gelombang 2: Deutro Melayu (500 SM, Logam/Perunggu, Kebudayaan Dongson).',
      'Keturunan Proto Melayu: Toraja, Dayak, Batak; Deutro Melayu: Jawa, Sunda, Bugis, Minang.'
    ],
    keywords: ['Out of Yunnan', 'Proto Melayu', 'Deutro Melayu', 'J.H.C. Kern', 'Geldern', 'Dongson', 'Kapak Persegi'],
    causeProcessEffect: {
      cause: 'Bencana alam, peperangan antar suku di Cina Selatan, serta pencarian lahan pertanian baru.',
      process: 'Bermigrasi menyusuri Sungai Mekong menuju Indochina, Semenanjung Malaya, dan masuk Kepulauan Indonesia.',
      effect: 'Terbentuknya dua lapisan kelompok suku bangsa Melayu (Proto & Deutro Melayu) di Nusantara.'
    },
    threeSentences: [
      'Teori Out of Yunnan menyatakan nenek moyang bangsa Indonesia berasal dari Yunnan melalui dua gelombang migrasi.',
      'Gelombang Proto Melayu membawa budaya Neolitikum, sedangkan Deutro Melayu membawa budaya logam Dongson.',
      'Tokoh pelopor teori ini antara lain J.H.C. Kern dan Robert Von Heine Geldern berdasarkan temuan artefak kapak.'
    ],
    dontConfuse: [
      {
        term: 'Out of Yunnan vs Out of Taiwan',
        description: 'Out of Yunnan membagi migrasi menjadi Proto & Deutro Melayu dari daratan Cina/Mekong membawa kapak & perunggu, sedangkan Out of Taiwan berpusat pada migrasi maritim penutur rumpun Austronesia dari pulau Formosa.',
        distinction: 'Yunnan = Proto & Deutro Melayu + Dongson; Taiwan = Austronesia + Maritim.'
      }
    ],
    tableOrDiagram: {
      headers: ['Kriteria', 'Proto Melayu (Melayu Tua)', 'Deutro Melayu (Melayu Muda)'],
      rows: [
        { col1: 'Waktu Migrasi', col2: '± 1.500 SM (Zaman Neolitikum)', col3: '± 500 SM (Zaman Logam/Perunggu)' },
        { col1: 'Kebudayaan', col2: 'Kapak Persegi & Kapak Lonjong', col3: 'Nekara, Bejana, Cendrasa (Dongson)' },
        { col1: 'Jalur Migrasi', col2: 'Barat (Sumatra) & Timur (Filipina)', col3: 'Jalur Barat (Semenanjung Malaya → Sumatra/Jawa)' },
        { col1: 'Suku Keturunan', col2: 'Dayak, Toraja, Batak, Nias', col3: 'Jawa, Sunda, Bugis, Minangkabau' }
      ]
    },
    mnemonic: {
      phrase: 'YUNNAN = Y-ang U-tama N-eolitikum N-ikmat A-ngkut N-ekara (Proto & Deutro)',
      explanation: 'Yunnan membagi Proto Melayu (Neolitikum) dan Deutro Melayu (Nekara Dongson).'
    },
    likelyExamQuestions: [
      'Siapakah peneliti barat yang mengemukakan teori Out of Yunnan berdasarkan kesamaan kapak persegi di Asia dan Indonesia?',
      'Suku bangsa di Indonesia yang tergolong dalam keturunan gelombang Proto Melayu adalah...',
      'Kebudayaan logam perunggu Dongson dibawa masuk ke Nusantara oleh gelombang migrasi...'
    ],
    activeRecall: [
      { question: 'Dari manakah asal nenek moyang menurut Teori Out of Yunnan?', answer: 'Yunnan (wilayah Cina Selatan).' },
      { question: 'Sebutkan dua kelompok migrasi utama dalam Teori Out of Yunnan!', answer: 'Proto Melayu (Melayu Tua) dan Deutro Melayu (Melayu Muda).' },
      { question: 'Sebutkan 3 contoh suku keturunan Proto Melayu!', answer: 'Suku Dayak, Suku Toraja, dan Suku Batak.' },
      { question: 'Sebutkan 3 contoh suku keturunan Deutro Melayu!', answer: 'Suku Jawa, Suku Sunda, dan Suku Minangkabau.' },
      { question: 'Kebudayaan apa yang dibawa oleh Deutro Melayu?', answer: 'Kebudayaan Logam/Perunggu (Kebudayaan Dongson Vietnam).' }
    ],
    flashcards: [
      { id: 'e1', front: 'Apa inti Teori Out of Yunnan?', back: 'Nenek moyang berasal dari Yunnan (Cina Selatan) bermigrasi ke selatan dalam dua gelombang.' },
      { id: 'e2', front: 'Siapa tokoh pencetus Teori Out of Yunnan?', back: 'J.H.C. Kern dan Robert Von Heine Geldern.' },
      { id: 'e3', front: 'Kapan kedatangan Proto Melayu dan apa budayanya?', back: '1.500 SM, membawa kebudayaan Batu Muda (Neolitikum: kapak persegi & lonjong).' },
      { id: 'e4', front: 'Kapan kedatangan Deutro Melayu dan apa budayanya?', back: '500 SM, membawa kebudayaan Perunggu/Logam (Dongson).' },
      { id: 'e5', front: 'Jalur manakah yang dilalui Deutro Melayu?', back: 'Jalur Barat: Yunnan → Indochina → Semenanjung Malaya → Sumatra → Jawa.' }
    ],
    quizQuestions: [
      {
        id: 'q_e1',
        question: 'Teori yang menyatakan bahwa nenek moyang bangsa Indonesia bermigrasi dari Cina Selatan melalui jalur sungai Mekong adalah...',
        options: [
          { id: 'opt1', text: 'Theory Out of Yunnan' },
          { id: 'opt2', text: 'Theory Out of Taiwan' },
          { id: 'opt3', text: 'Teori Nusantara' },
          { id: 'opt4', text: 'Theory Out of Africa' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Theory Out of Yunnan menyebut kawasan Cina Selatan sebagai asal pendatang Proto dan Deutro Melayu.'
      },
      {
        id: 'q_e2',
        question: 'Ahli yang mendasarkan Teori Out of Yunnan pada adanya kesamaan bentuk kapak persegi di Indonesia dengan artefak di Asia Tengah adalah...',
        options: [
          { id: 'opt1', text: 'Robert Von Heine Geldern' },
          { id: 'opt2', text: 'Peter Bellwood' },
          { id: 'opt3', text: 'Mohammad Yamin' },
          { id: 'opt4', text: 'Eugene Dubois' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'R.H. Geldern meneliti artefak kapak persegi sebagai bukti migrasi dari Asia Tengah/Yunnan.'
      },
      {
        id: 'q_e3',
        question: 'Suku-suku berikut yang merupakan keturunan dari gelombang migrasi Proto Melayu adalah...',
        options: [
          { id: 'opt1', text: 'Batak, Dayak, dan Toraja' },
          { id: 'opt2', text: 'Jawa, Sunda, dan Bali' },
          { id: 'opt3', text: 'Bugis, Minang, dan Banjar' },
          { id: 'opt4', text: 'Melayu Ambon, Asmat, dan Dani' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku Batak, Dayak, dan Toraja merupakan suku terasing/pedalaman keturunan Proto Melayu.'
      },
      {
        id: 'q_e4',
        question: 'Kebudayaan perunggu yang dibawa oleh Deutro Melayu dinamakan kebudayaan...',
        options: [
          { id: 'opt1', text: 'Dongson' },
          { id: 'opt2', text: 'Bacson-Hoabinh' },
          { id: 'opt3', text: 'Sa Huynh' },
          { id: 'opt4', text: 'Kalanay' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kebudayaan Dongson di Vietnam utara adalah pusat kebudayaan perunggu yang dibawa Deutro Melayu.'
      },
      {
        id: 'q_e5',
        question: 'Gelombang Proto Melayu yang membawa kapak lonjong masuk ke Nusantara melalui jalur timur, yaitu melewati...',
        options: [
          { id: 'opt1', text: 'Taiwan → Filipina → Minahasa / Sulawesi / Papua' },
          { id: 'opt2', text: 'Semenanjung Malaya → Sumatra → Jawa' },
          { id: 'opt3', text: 'India → Myanmar → Sumatra' },
          { id: 'opt4', text: 'Australia → Nusa Tenggara → Bali' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Jalur timur Proto Melayu menyusuri Filipina menuju Sulawesi dan Pasifik membawa kapak lonjong.'
      }
    ]
  },
  {
    id: 'F',
    code: 'F',
    title: 'PEMBAGIAN KEBUDAYAAN DAN HASIL KEBUDAYAAN DI NUSANTARA',
    category: 'Kebudayaan & Hasil Seni Aksara',
    pdfStatus: 'Lengkap di PDF',
    sourceLabels: {
      fromPdf: [
        'Pembagian Zaman Prasejarah berdasarkan Hasil Kebudayaan: Paleolitikum, Mesolitikum, Neolitikum, Megalitikum, dan Perundagian (Logam).',
        'Paleolitikum: Kebudayaan Pacitan (Chopper/Kapak Perimbas) & Kebudayaan Ngandong (Alat Tulang/Flakes).',
        'Mesolitikum: Kjokkenmoddinger (Sampah Kerang) & Abris Sous Roche.',
        'Neolitikum: Kapak Persegi & Kapak Lonjong.',
        'Megalitikum: Menhir, Dolmen, Sarkofagus, Punden Berundak.'
      ],
      fromSupplemental: [
        'Buku Pengantar Arkeologi Indonesia (R.P. Soejono).',
        'Modul Pembelajaran Sejarah Kebudayaan Kemendikbud.'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pembagian zaman kebudayaan pra-aksara di Nusantara secara kronologis.',
      'Mengidentifikasi ciri-ciri teknologis dan sosial setiap zaman (Paleo, Meso, Neo, Mega, Perundagian).',
      'Mengklasifikasikan peninggalan artefak spesifik untuk setiap babak kebudayaan.',
      'Menjelaskan lokasi persebaran artefak penting di wilayah Indonesia.'
    ],
    fullContent: `Pembagian kebudayaan pra-aksara di Nusantara berdasarkan alat dan hasil teknologi terbagi menjadi babak-babak utama:

1. Paleolitikum (Zaman Batu Tua):
   - Ciri: Alat batu kasar, belum diasah.
   - Kebudayaan Pacitan: Kapak perimbas (*chopper*), kapak genggam. Tokoh pembuat: *Pithecanthropus erectus*.
   - Kebudayaan Ngandong: Alat-alat tulang hewan dan duri ikan, *flakes* (flakes alat serpih). Tokoh: *Homo soloensis*.

2. Mesolitikum (Zaman Batu Madya):
   - Ciri: Batu mulai dihaluskan sebagian, manusia tinggal di goa dan pesisir.
   - Peninggalan: *Kjokkenmoddinger* (bukit sampah kerang) & *Abris sous roche* (goa payung berlindung).
   - Kebudayaan Bacson-Hoabinh: Kapak genggam Sumatra (*Pebble*).

3. Neolitikum (Zaman Batu Muda):
   - Ciri: Alat batu sudah diasah sangat halus, revolusi kehidupan dari *food gathering* menjadi *food producing* (bercocok tanam & menetap).
   - Artefak Utama: Kapak Persegi (jalur barat) dan Kapak Lonjong (jalur timur).

4. Megalitikum (Zaman Batu Besar):
   - Ciri: Bangunan batu-batu besar berkaitan dengan kepercayaan animisme/dinamisme (pemujaan roh nenek moyang).
   - Hasil Kebudayaan: Menhir (tugu batu), Dolmen (meja batu saji), Sarkofagus (keranda batu), Punden Berundak (punden bertingkat tempat pemujaan), Waruga (kubur batu kubus Minahasa).

5. Zaman Perundagian (Zaman Logam):
   - Ciri: Masyarakat mahir meluangkan/mengecor logam (*cire perdue* & *bivalve*).
   - Hasil Kebudayaan: Nekara perunggu (Nekara Perunggu/Moko), Cendrasa, Bejana Perunggu, Patung Perunggu.`,
    corePoints: [
      'Paleolitikum: Pacitan (Chopper) & Ngandong (Alat Tulang). Batu Kasar.',
      'Mesolitikum: Kjokkenmoddinger & Abris Sous Roche. Pebble Sumatra.',
      'Neolitikum: Revolusi Food Producing. Kapak Persegi & Kapak Lonjong halus.',
      'Megalitikum: Kepercayaan Roh. Menhir, Dolmen, Sarkofagus, Punden Berundak.',
      'Perundagian: Teknik Cire Perdue & Bivalve. Nekara, Moko, Bejana Perunggu.'
    ],
    keywords: ['Paleolitikum', 'Mesolitikum', 'Neolitikum', 'Megalitikum', 'Perundagian', 'Kjokkenmoddinger', 'Dolmen', 'Nekara'],
    causeProcessEffect: {
      cause: 'Perkembangan otak dan daya adaptasi manusia purba terhadap alam sekitar.',
      process: 'Evolusi dari batu kasar berpindah-pindah, menjadi batu asah halus bercocok tanam, hingga pengecoran logam.',
      effect: 'Lahirnya struktur masyarakat terorganisir, tradisi kepercayaan megalitik, dan keahlian teknik pertukangan.'
    },
    threeSentences: [
      'Kebudayaan pra-aksara Nusantara terbagi atas babak Paleolitikum, Mesolitikum, Neolitikum, Megalitikum, dan Perundagian.',
      'Neolitikum menandai revolusi penting dari meramu makanan menjadi bercocok tanam dengan kapak asah halus.',
      'Hasil kebudayaan megalitikum seperti Menhir dan Dolmen menjadi simbol pemujaan roh nenek moyang.'
    ],
    dontConfuse: [
      {
        term: 'Dolmen vs Sarkofagus vs Menhir',
        description: 'Menhir = Tugu batu berdiri melambangkan roh; Dolmen = Meja batu tempat sajen/persembahan; Sarkofagus = Keranda/peti mati batu berbentuk lesung bertutup.',
        distinction: 'Menhir = Tugu; Dolmen = Meja Sajen; Sarkofagus = Peti Keranda Mati.'
      }
    ],
    tableOrDiagram: {
      headers: ['Zaman Kebudayaan', 'Ciri Utama', 'Hasil Kebudayaan Khas', 'Lokasi / Tokoh'],
      rows: [
        { col1: 'Paleolitikum', col2: 'Batu Kasar, Food Gathering', col3: 'Chopper, Flakes, Alat Tulang', col4: 'Pacitan & Ngandong' },
        { col1: 'Mesolitikum', col2: 'Goa & Sampah Kerang', col3: 'Pebble, Kjokkenmoddinger', col4: 'Sumatra Timur, Maros' },
        { col1: 'Neolitikum', col2: 'Batu Halus, Food Producing', col3: 'Kapak Persegi, Kapak Lonjong', col4: 'Jawa, Sumatra, Papua' },
        { col1: 'Megalitikum', col2: 'Batu Besar, Animisme', col3: 'Menhir, Dolmen, Sarkofagus', col4: 'Pasemah, Bali, Toraja' },
        { col1: 'Perundagian', col2: 'Pengecoran Logam', col3: 'Nekara, Moko, Bejana Perunggu', col4: 'Alor, Dongson, Melolo' }
      ]
    },
    mnemonic: {
      phrase: 'PA-ME-NE-ME-PE = Pa-ling M-udah N-enok M-akan P-erunggu',
      explanation: 'Urutan kronologis: Paleolitikum, Mesolitikum, Neolitikum, Megalitikum, Perundagian.'
    },
    likelyExamQuestions: [
      'Peninggalan bukit sampah kulit kerang di sepanjang pantai timur Sumatra pada zaman Mesolitikum dikenal dengan sebutan...',
      'Perubahan pola hidup manusia purba dari food gathering menjadi food producing terjadi pada zaman...',
      'Bangunan batu besar berbentuk meja batu yang berfungsi meletakkan sesaji pemujaan nenek moyang dinamakan...'
    ],
    activeRecall: [
      { question: 'Apa perbedaan utama antara kapak Paleolitikum dan Neolitikum?', answer: 'Paleolitikum kasar belum diasah; Neolitikum sudah diasah sangat halus dan tajam.' },
      { question: 'Apa yang dimaksud dengan Kjokkenmoddinger?', answer: 'Tumpukan bukit sampah dapur berupa kulit kerang dan siput fosil pada zaman Mesolitikum.' },
      { question: 'Sebutkan 4 contoh peninggalan zaman Megalitikum!', answer: 'Menhir, Dolmen, Sarkofagus, dan Punden Berundak.' },
      { question: 'Sebutkan dua teknik pembuatan barang logam pada zaman Perundagian!', answer: 'Teknik A Cire Perdue (cetak lilin) dan Teknik Bivalve (cetak setangkup batu/kayu).' },
      { question: 'Hasil kebudayaan Paleolitikum Pacitan dinamakan kapak...', answer: 'Kapak Perimbas (Chopper).' }
    ],
    flashcards: [
      { id: 'f1', front: 'Apa peninggalan khas Kebudayaan Pacitan?', back: 'Kapak perimbas (chopper) dan kapak genggam kasar.' },
      { id: 'f2', front: 'Apa peninggalan khas Kebudayaan Ngandong?', back: 'Alat-alat dari tulang hewan, duri ikan, dan serpih batu (flakes).' },
      { id: 'f3', front: 'Apa nama lain Kapak Genggam Sumatra zaman Mesolitikum?', back: 'Pebble (Pebble culture / Bacson Hoabinh).' },
      { id: 'f4', front: 'Fungsi utama Menhir pada zaman Megalitikum adalah...', back: 'Tugu batu berdiri sebagai sarana pemujaan dan penghormatan roh nenek moyang.' },
      { id: 'f5', front: 'Apa itu Nekara Moko?', back: 'Nekara perunggu berukuran kecil khas Nusa Tenggara (Alor) yang difungsikan sebagai mas kawin.' }
    ],
    quizQuestions: [
      {
        id: 'q_f1',
        question: 'Tumpukan bukit sampah dapur yang terdiri dari kulit kerang dan siput yang mengeras di sepanjang pantai timur Sumatra disebut...',
        options: [
          { id: 'opt1', text: 'Kjokkenmoddinger' },
          { id: 'opt2', text: 'Abris sous roche' },
          { id: 'opt3', text: 'Sarkofagus' },
          { id: 'opt4', text: 'Waruga' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Kjokkenmoddinger berasal dari bahasa Denmark (kjokken=dapur, modding=sampah).'
      },
      {
        id: 'q_f2',
        question: 'Peristiwa penting yang menandai "Revolusi Neolitikum" dalam kehidupan manusia pra-aksara adalah...',
        options: [
          { id: 'opt1', text: 'Perubahan dari meramu makanan (food gathering) menjadi bercocok tanam (food producing)' },
          { id: 'opt2', text: 'Penemuan kapal mesin bermotor' },
          { id: 'opt3', text: 'Penciptaan abjad tulisan pertama kali' },
          { id: 'opt4', text: 'Penggunaan senjata api besi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Revolusi Neolitikum merubah cara hidup nomaden meramu menjadi bercocok tanam dan menetap.'
      },
      {
        id: 'q_f3',
        question: 'Bangunan batu besar berbentuk meja bertiang yang difungsikan untuk meletakkan sajen pemujaan roh leluhur adalah...',
        options: [
          { id: 'opt1', text: 'Dolmen' },
          { id: 'opt2', text: 'Menhir' },
          { id: 'opt3', text: 'Sarkofagus' },
          { id: 'opt4', text: 'Waruga' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Dolmen adalah meja batu pelinggih sajen pemujaan megalitikum.'
      },
      {
        id: 'q_f4',
        question: 'Teknik pembuatan benda perunggu dengan menggunakan cetakan lilin yang dibungkus tanah liat lalu dibakar dinamakan teknik...',
        options: [
          { id: 'opt1', text: 'A cire perdue' },
          { id: 'opt2', text: 'Bivalve' },
          { id: 'opt3', text: 'Pahat tangan' },
          { id: 'opt4', text: 'Solder suhu tinggi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'A cire perdue (lost-wax casting) adalah teknik lilin terbuang.'
      },
      {
        id: 'q_f5',
        question: 'Punden berundak merupakan peninggalan megalitikum yang pada masa Hindu-Buddha berkembang menjadi dasar arsitektur...',
        options: [
          { id: 'opt1', text: 'Candi bertingkat (seperti Candi Borobudur)' },
          { id: 'opt2', text: 'Istana kerajaan kayu' },
          { id: 'opt3', text: 'Benteng pertahanan batu' },
          { id: 'opt4', text: 'Pelabuhan laut' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Konsep punden berundak bertingkat diserap dalam struktur bangun Candi seperti Borobudur.'
      }
    ]
  },
  {
    id: 'G',
    code: 'G',
    title: 'RAS WEDDID',
    category: 'Migrasi Ras & Pre-Aksara',
    pdfStatus: 'Parsial di PDF (Ditambah Sources Kemendikbud)',
    sourceLabels: {
      fromPdf: [
        'Ras Weddid merupakan salah satu ras pendukung awal di Kepulauan Nusantara.',
        'Ciri fisik: kulit cokelat tua/gelap, rambut bergelombang, postur sedang.',
        'Keturunan modern dihubungkan dengan Suku Kubu (Suku Anak Dalam/Orang Rimba) di Jambi, Suku Siak di Riau, dan Suku Mentawai.'
      ],
      fromSupplemental: [
        'Buku Etnografi Suku Asli Indonesia (Pusat Pengembangan Kebudayaan Kemendikbud).',
        'Studi Antropologi Manusia Indonesia (Koentjaraningrat).'
      ]
    },
    masteryObjectives: [
      'Menjelaskan pengertian dan asal-usul Ras Weddid dalam etnografi Indonesia.',
      'Mengidentifikasi ciri fisik dan fisik sosiologis masyarakat kelompok Weddid.',
      'Menjelaskan wilayah persebaran dan suku-suku keturunan Weddid (Suku Kubu, Sakai, Mentawai, Toala).',
      'Membandingkan ciri Weddid dengan Negrito dan Melanesoid.'
    ],
    fullContent: `Ras Weddid (Weddoid) adalah kelompok manusia migrasi purba yang diambil dari nama Suku Vedda di Pulau Sri Lanka. Di Indonesia, persebaran kelompok ras ini dianggap menghuni kawasan pedalaman pegunungan dan hutan Sumatra, Sulawesi, serta kepulauan sekitarnya.

Ciri Fisik Khas Ras Weddid:
- Kulit berwarna cokelat tua hingga gelap.
- Rambut bergelombang/ikal (bukan keriting padat seperti Negrito).
- Postur tubuh sedang (lebih tinggi dari Negrito, namun lebih pendek dari Proto Melayu).
- Dahi agak melengkung ke dalam dan rongga mata agak dalam.

Suku-Suku Terkait Weddid di Indonesia:
1. Suku Kubu / Suku Anak Dalam (Orang Rimba) di Jambi.
2. Suku Sakai dan Suku Siak di Riau.
3. Suku Mentawai di Kepulauan Mentawai, Sumatra Barat.
4. Suku Toala dan Tomuna di Sulawesi Selatan/Tenggara.`,
    corePoints: [
      'Nama ras berasal dari Suku Vedda (Sri Lanka).',
      'Ciri fisik utama: kulit cokelat tua, rambut ikal bergelombang, mata agak dalam.',
      'Suku keturunan di Indonesia: Suku Anak Dalam/Kubu (Jambi), Suku Sakai (Riau), Suku Mentawai, Suku Toala (Sulawesi).',
      'Pola hidup tradisional: berburu, meramu hutan pedalaman, dan hidup harmonis dengan alam.'
    ],
    keywords: ['Ras Weddid', 'Weddoid', 'Suku Vedda', 'Suku Kubu', 'Orang Rimba', 'Suku Sakai', 'Suku Mentawai', 'Toala'],
    causeProcessEffect: {
      cause: 'Migrasi purba rumpun Weddoid dari Asia Selatan (Sri Lanka/India) melintasi daratan Sunda.',
      process: 'Mendiami pedalaman hutan hujan tropis Sumatra dan Sulawesi terisolasi dari gelombang migrasi luar.',
      effect: 'Melestarikan kebudayaan berburu meramu tradisional pedalaman hingga saat ini.'
    },
    threeSentences: [
      'Ras Weddid diambil dari nama suku Vedda di Sri Lanka dengan ciri rambut bergelombang dan kulit cokelat tua.',
      'Suku keturunan Weddid di Indonesia meliputi Suku Kubu (Anak Dalam) di Jambi, Suku Sakai di Riau, dan Suku Toala.',
      'Masyarakat ras Weddid mempertahankan gaya hidup tradisional berburu dan meramu di pedalaman hutan.'
    ],
    dontConfuse: [
      {
        term: 'Ras Weddid vs Ras Negrito',
        description: 'Negrito berambut keriting padat dan bertubuh kerdil/sangat pendek, sedangkan Weddid berambut bergelombang/ikal dengan postur tubuh sedang.',
        distinction: 'Negrito = Keriting kerdil; Weddid = Ikal bergelombang postur sedang.'
      }
    ],
    tableOrDiagram: {
      headers: ['Ciri Evaluasi', 'Ras Weddid', 'Ras Negrito', 'Ras Proto Melayu'],
      rows: [
        { col1: 'Rambut', col2: 'Ikal bergelombang', col3: 'Keriting padat', col4: 'Lurus / Bergelombang halus' },
        { col1: 'Warna Kulit', col2: 'Cokelat tua', col3: 'Gelap / Hitam', col4: 'Sawo matang' },
        { col1: 'Postur Tubuh', col2: 'Sedang', col3: 'Pendek (pygmy)', col4: 'Sedang - Tinggi' },
        { col1: 'Suku Terkait', col2: 'Kubu, Sakai, Mentawai, Toala', col3: 'Semang, Aeta', col4: 'Dayak, Batak, Toraja' }
      ]
    },
    mnemonic: {
      phrase: 'WEDDID = W-ajah E-lok D-alam D-agang I-kal D-i-Kubu',
      explanation: 'Weddid = Rambut Ikal, contoh Suku Kubu & Sakai.'
    },
    likelyExamQuestions: [
      'Suku Anak Dalam (Suku Kubu) di Jambi dan Suku Sakai di Riau dikategorikan sebagai sisa-sisa pendukung ras...',
      'Apa ciri utama bentuk rambut yang membedakan Ras Weddid dengan Ras Negrito?',
      'Asal penamaan ras Weddid merujuk pada kelompok suku purba yang berada di negara...'
    ],
    activeRecall: [
      { question: 'Dari suku manakah nama Ras Weddid berasal?', answer: 'Suku Vedda di Sri Lanka.' },
      { question: 'Sebutkan 3 ciri fisik utama ras Weddid!', answer: 'Kulit cokelat tua, rambut ikal bergelombang, dan mata agak dalam.' },
      { question: 'Sebutkan 3 suku di Indonesia yang dihubungkan dengan ras Weddid!', answer: 'Suku Kubu (Anak Dalam), Suku Sakai, dan Suku Mentawai.' },
      { question: 'Di pulau manakah Suku Toala keturunan Weddid hidup?', answer: 'Pulau Sulawesi (Sulawesi Selatan).' },
      { question: 'Bagaimanakah bentuk rambut khas ras Weddid?', answer: 'Rambut ikal bergelombang (bukan keriting gimbal).' }
    ],
    flashcards: [
      { id: 'g1', front: 'Apa asal nama Ras Weddid?', back: 'Dari Suku Vedda di Sri Lanka.' },
      { id: 'g2', front: 'Apa ciri khas rambut Ras Weddid?', back: 'Rambut ikal bergelombang.' },
      { id: 'g3', front: 'Sebutkan suku Weddid di Sumatra!', back: 'Suku Kubu (Suku Anak Dalam/Orang Rimba) dan Suku Sakai.' },
      { id: 'g4', front: 'Sebutkan suku Weddid di Sulawesi!', back: 'Suku Toala.' },
      { id: 'g5', front: 'Bagaimana corak bertahan hidup suku Weddid tradisional?', back: 'Berburu dan meramu hasil hutan pedalaman secara arif.' }
    ],
    quizQuestions: [
      {
        id: 'q_g1',
        question: 'Suku Anak Dalam di Jambi dan Suku Sakai di Riau merupakan kelompok masyarakat yang dihubungkan dengan keturunan ras...',
        options: [
          { id: 'opt1', text: 'Weddid (Weddoid)' },
          { id: 'opt2', text: 'Deutro Melayu' },
          { id: 'opt3', text: 'Arya' },
          { id: 'opt4', text: 'Kaukasoid' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku Kubu dan Sakai secara antropologis tergolong dalam ras Weddid.'
      },
      {
        id: 'q_g2',
        question: 'Ciri fisik khas rambut dari ras Weddid yang membedakannya dari ras Negrito adalah...',
        options: [
          { id: 'opt1', text: 'Rambut ikal bergelombang' },
          { id: 'opt2', text: 'Rambut keriting gimbal pendek' },
          { id: 'opt3', text: 'Rambut lurus kaku pirang' },
          { id: 'opt4', text: 'Rambut botak licin' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Weddid memiliki rambut ikal bergelombang, sedangkan Negrito berambut keriting kerdil.'
      },
      {
        id: 'q_g3',
        question: 'Penamaan ras Weddid diambil dari nama Suku Vedda yang bermukim di negara...',
        options: [
          { id: 'opt1', text: 'Sri Lanka' },
          { id: 'opt2', text: 'Jepang' },
          { id: 'opt3', text: 'Madagaskar' },
          { id: 'opt4', text: 'Selandia Baru' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Nama Weddoid diserap dari Suku Vedda asli Sri Lanka.'
      },
      {
        id: 'q_g4',
        question: 'Masyarakat Suku Toala yang mendiami Sulawesi tergolong dalam ras...',
        options: [
          { id: 'opt1', text: 'Weddid' },
          { id: 'opt2', text: 'Deutro Melayu' },
          { id: 'opt3', text: 'Melanesoid' },
          { id: 'opt4', text: 'Mongoloid Timur' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Suku Toala di Sulawesi tergolong rumpun Weddoid.'
      },
      {
        id: 'q_g5',
        question: 'Penyebab utama kelompok masyarakat ras Weddid dapat mempertahankan ciri fisik dan kebudayaan aslinya hingga sekarang adalah...',
        options: [
          { id: 'opt1', text: 'Kondisi geografis tempat tinggal mereka di pedalaman hutan yang terisolasi' },
          { id: 'opt2', text: 'Adanya undang-undang larangan menikah dengan suku lain' },
          { id: 'opt3', text: 'Sifat agresif menguasai kota pesisir' },
          { id: 'opt4', text: 'Kemampuan teknologi modern yang tinggi' }
        ],
        correctAnswerId: 'opt1',
        explanation: 'Isolasi geografis di pedalaman hutan tropis menjaga kemurnian genetik dan adat tradisional.'
      }
    ]
  }
];
