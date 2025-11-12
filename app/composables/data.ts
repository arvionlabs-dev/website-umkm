import { v4 as uuidv4 } from 'uuid';

export const defaultUMKM: Umkm = {
  nama: 'Haidar Sasirangan',
  deskripsi: 'Dari Tanah Laut, Kalimantan Selatan, Haidar Sasirangan hadir untuk menjaga warisan Banua tetap hidup di setiap helai kain. Sejak berdiri pada 2017, kami berfokus membuat kain sasirangan tradisional dengan warna alami dan sentuhan desain modern agar tetap digemari generasi kini. Setiap motif dibuat dengan tangan oleh pengrajin lokal berpengalaman — dari proses ikat, pewarnaan, hingga penjemuran di bawah hangatnya matahari Kalimantan.',
  alamat: 'Komplek Dahlina Permai, Jl. Dahlina Raya No.12, Sungai Besar, Kec. Banjarbaru Selatan, Kota Banjarbaru, Kalimantan Selatan 70714',
  kontak: '085828332081',
  id: uuidv4(),
  slug: 'haidar-sasirangan',
  coordinates: [-3.9066045, 115.0839123],
  foto: [
    'https://www.kanalkalimantan.com/wp-content/uploads/2022/07/IMG-20220707-WA0002-1.jpg'
  ],
  gmapSrc: 'https://maps.app.goo.gl/CakUDD6MCji5Dh4J8',
  gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5546739155297!2d114.83833068370974!3d-3.4578354932349393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6813c16a0c6b9%3A0xc5ebfd4471e22105!2sPerumahan%20Dahlina%20Permai!5e0!3m2!1sid!2sid!4v1762771700137!5m2!1sid!2sid',
  produks: [
    {
      id: 1,
      nama: 'Sasirangan Motif Kulat Kurikit',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 150000,
    },
    {
      id: 2,
      nama: 'Sasirangan Motif Gagatas',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 175000,
    },
    {
      id: 3,
      nama: 'Sasirangan Motif Iris Pudak',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 200000,
    },
    {
      id: 4,
      nama: 'Sasirangan Motif Iris Pudak',
      deskripsi: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48nxeiD1p2qkV6hOUPnQ9iNMo402gWogkSg&s',
      harga: 200000,
    },
  ]
};

export const realUMKM: Record<Slug, Umkm> = {
  'galuh-banjar': {
    id: uuidv4(),
    nama: 'Oleh-Oleh Khas Banjarmasin, Galuh Banjar',
    deskripsi: 'Oleh-Oleh Khas Banjarmasin, Galuh Banjar merupakan pusat oleh-oleh yang menyediakan berbagai produk khas Kalimantan Selatan seperti makanan ringan tradisional, camilan khas Banjar, minuman herbal, hingga kerajinan tangan dan cendera mata lokal. UMKM ini berkomitmen mendukung pengembangan ekonomi daerah dengan memasarkan produk asli buatan pelaku usaha lokal yang berkualitas dan bercita rasa khas. Galuh Banjar menjadi tempat belanja oleh-oleh sekaligus etalase kebanggaan masyarakat Banjar yang menampilkan kekayaan kuliner dan budaya Kalimantan Selatan dalam satu tempat.',
    kategori: ['Pusat Oleh-oleh'],
    alamat: 'Jl. S. Parman No.5, Belitung Sel., Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70123',
    gmapSrc: 'https://maps.app.goo.gl/nxLkBz7FT2MKg81F8',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.1535547765734!2d114.588327!3d-3.3121804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423b8b5b96c4d%3A0x208b8510398ac066!2sOleh-Oleh%20Khas%20Banjarmasin%2C%20Galuh%20Banjar!5e0!3m2!1sid!2sid!4v1762862677369!5m2!1sid!2sid',
    foto: [
      '/umkm-images/galuh-banjar-0.jpg',
      '/umkm-images/galuh-banjar-1.jpg',
      '/umkm-images/galuh-banjar-2.jpg',
      '/umkm-images/galuh-banjar-3.jpg',
      '/umkm-images/galuh-banjar-4.jpg',
    ],
    slug: 'galuh-banjar',
    kontak: [
      {
        type: 'phone',
        value: '085754028042'
      },
      {
        type: 'instagram',
        username: 'oleholehbanjarmasin',
        value: 'https://www.instagram.com/oleholehbanjarmasin/'
      }
    ],
  },
  'toko-andalas': {
    id: uuidv4(),
    nama: 'Toko Andalas',
    deskripsi: 'Toko Andalas merupakan pusat oleh-oleh yang menyediakan aneka produk khas Kalimantan Selatan, mulai dari makanan ringan tradisional, camilan khas daerah, minuman olahan lokal, hingga kerajinan tangan dan cendera mata. Toko ini menjadi pilihan utama bagi wisatawan maupun masyarakat yang ingin mencari oleh-oleh khas Banjarmasin dengan kualitas terbaik. Dengan mengutamakan produk buatan pelaku UMKM lokal, Toko Andalas berperan aktif dalam mendukung pertumbuhan ekonomi daerah sekaligus melestarikan cita rasa dan budaya khas Kalimantan Selatan.',
    kategori: ['Pusat Oleh-oleh'],
    alamat: 'Jl. Perintis Kemerdekaan No.12, RT.22, Ps. Lama, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70123',
    gmapSrc: 'https://maps.app.goo.gl/KNyu6NHcQuM9gdVd7',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.295690660208!2d114.5853666!3d-3.3135992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423bf2df7740b%3A0x6f169833c26e8cb5!2sToko%20Andalas!5e0!3m2!1sid!2sid!4v1762863531101!5m2!1sid!2sid',
    foto: [
      '/umkm-images/toko-andalas-0.jpg',
      '/umkm-images/toko-andalas-1.jpg',
      '/umkm-images/toko-andalas-2.jpg',
      '/umkm-images/toko-andalas-3.jpg',
      '/umkm-images/toko-andalas-4.jpg',
    ],
    slug: 'toko-andalas',
    kontak: [
      {
        type: 'phone',
        value: '087814447004'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/oleholehbanjarmasinandalas/',
        username: 'oleholehbanjarmasinandalas'
      }
    ],
  },
  'sentra-oleh-oleh-matahari': {
    id: uuidv4(),
    nama: 'Sentra Oleh-Oleh Matahari',
    deskripsi: 'Sentra Oleh-Oleh Matahari merupakan pusat oleh-oleh yang menghadirkan beragam produk khas Kalimantan Selatan dalam satu tempat. Toko ini menyediakan aneka makanan ringan tradisional, camilan khas Banjar, minuman olahan lokal, serta kerajinan tangan dan cendera mata yang mencerminkan kekayaan budaya daerah. Dengan mengedepankan kualitas dan keaslian produk buatan pelaku UMKM lokal, Sentra Oleh-Oleh Matahari menjadi destinasi favorit bagi wisatawan dan masyarakat yang ingin membawa pulang cita rasa serta keunikan khas Banjarmasin.',
    kategori: ['Pusat Oleh-oleh'],
    alamat: 'Jl. A. Yani No.KM. 33 No. 11, Guntung Payung, Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70714',
    gmapSrc: 'https://maps.app.goo.gl/CP2b2349ya3JXtR5A',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7965.221293955447!2d114.8084968!3d-3.4444828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6817b367db95f%3A0x14700e3f1208565b!2sSentra%20Oleh-Oleh%20Matahari!5e0!3m2!1sid!2sid!4v1762863645853!5m2!1sid!2sid',
    foto: [
      '/umkm-images/sentra-oleh-oleh-matahari-0.jpg',
      '/umkm-images/sentra-oleh-oleh-matahari-1.jpg',
      '/umkm-images/sentra-oleh-oleh-matahari-2.jpg',
      '/umkm-images/sentra-oleh-oleh-matahari-3.jpg',
      '/umkm-images/sentra-oleh-oleh-matahari-4.jpg',
    ],
    slug: 'sentra-oleh-oleh-matahari',
    kontak: [
      {
        type: 'phone',
        value: '085105183200'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/sentra_matahari/',
        'username': 'sentra_matahari'
      }
    ],
  },
  'rumah-oleh-oleh-khas-kalimantan': {
    id: uuidv4(),
    nama: 'RUMAH Oleh - Oleh Khas Kalimantan buka 24 jam',
    deskripsi: 'RUMAH Oleh-Oleh Khas Kalimantan (Buka 24 Jam) merupakan pusat oleh-oleh yang menyediakan berbagai produk unggulan khas Kalimantan, mulai dari makanan tradisional, camilan khas daerah, minuman olahan lokal, hingga kerajinan tangan dan cendera mata. Dengan layanan yang buka selama 24 jam, toko ini memberikan kemudahan bagi wisatawan dan masyarakat untuk berbelanja kapan saja tanpa batas waktu. RUMAH Oleh-Oleh Khas Kalimantan berkomitmen mendukung pelaku UMKM lokal melalui penyediaan produk berkualitas yang mencerminkan kekayaan cita rasa dan budaya khas Kalimantan, menjadikannya destinasi utama bagi pencinta oleh-oleh daerah.',
    kategori: ['Pusat Oleh-oleh'],
    alamat: 'Unnamed Road, Syamsudin Noor, Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70721',
    gmapSrc: 'https://maps.app.goo.gl/ZRE4uHLKueEN6xwW9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31861.303133764726!2d114.736855!3d-3.4319727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de683e23b16bf71%3A0x9362f9565f5c9c14!2sRUMAH%20Oleh%20-%20Oleh%20Khas%20Kalimantan%20buka%2024%20jam!5e0!3m2!1sid!2sid!4v1762863820561!5m2!1sid!2sid',
    foto: [
      '/umkm-images/rumah-oleh-oleh-khas-kalimantan-0.jpg',
      '/umkm-images/rumah-oleh-oleh-khas-kalimantan-1.jpg',
      '/umkm-images/rumah-oleh-oleh-khas-kalimantan-2.jpg',
      '/umkm-images/rumah-oleh-oleh-khas-kalimantan-3.jpg',
      '/umkm-images/rumah-oleh-oleh-khas-kalimantan-4.jpg',
    ],
    slug: 'rumah-oleh-oleh-khas-kalimantan',
    kontak: [
      {
        type: 'phone',
        value: '085751000034'
      }
    ],
  },
  'oleh-oleh-ku-khas-banjarmasin': {
    id: uuidv4(),
    nama: 'OLEH-OLEH KU KHAS BANJARMASIN',
    deskripsi: 'OLEH-OLEH KU Khas Banjarmasin merupakan pusat oleh-oleh yang menawarkan berbagai produk khas Kalimantan Selatan dengan cita rasa dan keunikan budaya Banjar. Toko ini menyediakan aneka makanan ringan tradisional, camilan khas daerah, minuman lokal, serta kerajinan tangan yang dibuat langsung oleh pelaku UMKM setempat. Dengan komitmen menghadirkan produk berkualitas dan autentik, OLEH-OLEH KU Khas Banjarmasin menjadi pilihan tepat bagi wisatawan maupun masyarakat yang ingin membawa pulang kenangan khas Banjarmasin dalam bentuk oleh-oleh terbaik.',
    kategori: ['Pusat Oleh-oleh'],
    alamat: 'jl. a yani km 24.5 landasan ulin, Landasan Ulin Utara, Kec. Liang Anggang, Kota Banjar Baru, Kalimantan Selatan 70724',
    gmapSrc: 'https://maps.app.goo.gl/9PaSareqoiTHAR4j8',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63722.00653805224!2d114.6769881!3d-3.4409527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6831e96b9b54d%3A0x438a3f2dfdb5b268!2sOLEH-OLEH%20KU%20KHAS%20BANJARMASIN!5e0!3m2!1sid!2sid!4v1762863947861!5m2!1sid!2sid',
    foto: [
      '/umkm-images/oleh-oleh-ku-khas-banjarmasin-0.jpg',
      '/umkm-images/oleh-oleh-ku-khas-banjarmasin-1.jpg',
      '/umkm-images/oleh-oleh-ku-khas-banjarmasin-2.jpg',
      '/umkm-images/oleh-oleh-ku-khas-banjarmasin-3.jpg',
      '/umkm-images/oleh-oleh-ku-khas-banjarmasin-4.jpg',
    ],
    slug: 'oleh-oleh-ku-khas-banjarmasin',
    kontak: [
      {
        type: 'phone',
        value: '082251866367'
      }
    ],
  },
  'the-house-of-amplang-rena': {
    id: uuidv4(),
    nama: 'The House Of Amplang Rena',
    deskripsi: 'The House Of Amplang Rena merupakan UMKM yang berfokus pada produksi dan penjualan amplang khas Kalimantan Selatan dengan cita rasa gurih dan tekstur renyah yang autentik. Menggunakan bahan baku ikan segar pilihan dan bumbu rempah tradisional, toko ini menghadirkan amplang berkualitas yang menjadi kebanggaan kuliner daerah. The House Of Amplang Rena tidak hanya menjaga keaslian resep turun-temurun, tetapi juga terus berinovasi dalam kemasan agar produk tetap modern dan menarik sebagai oleh-oleh khas Banjarmasin.',
    kategori: ['Makanan Ringan'],
    alamat: 'Komplek Asabri, Desa Sungai Sipai, Kec. Martapura, Kabupaten Banjar, Kalimantan Selatan 70612',
    gmapSrc: 'https://maps.app.goo.gl/xwFUDHPEKFBL7LSJA',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.929916284927!2d114.8133034!3d-3.4152388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6813c7ae86c13%3A0x49465a54474365d8!2sThe%20House%20Of%20Amplang%20Rena!5e0!3m2!1sid!2sid!4v1762864065406!5m2!1sid!2sid',
    foto: [
      '/umkm-images/the-house-of-amplang-rena-0.jpg',
      '/umkm-images/the-house-of-amplang-rena-1.jpg',
      '/umkm-images/the-house-of-amplang-rena-2.jpg',
      '/umkm-images/the-house-of-amplang-rena-3.jpg',
      '/umkm-images/the-house-of-amplang-rena-4.jpg',
    ],
    slug: 'the-house-of-amplang-rena',
    kontak: [
      {
        type: 'phone',
        value: '085389008006'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/amplangrenapipih/',
        username: 'amplangrenapipih'
      }
    ],
  },
  'bingka-borneo-ibu-hj-masturiah': {
    id: uuidv4(),
    nama: 'Bingka Borneo Ibu HJ. Masturiah',
    deskripsi: 'Bingka Borneo Ibu Hj. Masturiah merupakan UMKM yang menghadirkan cita rasa autentik kue bingka khas Banjarmasin yang lembut, manis, dan menggugah selera. Dibuat dengan bahan-bahan berkualitas seperti tepung terigu, telur, santan, dan gula, setiap potongan bingka dari toko ini mencerminkan warisan kuliner tradisional masyarakat Banjar. Dengan mempertahankan resep turun-temurun dan proses pembuatan yang higienis, Bingka Borneo Ibu Hj. Masturiah menjadi pilihan favorit bagi pecinta kue tradisional maupun wisatawan yang mencari oleh-oleh khas Kalimantan Selatan.',
    kategori: ['Kue Basah'],
    alamat: 'Komplek Arjuna, Jl. Dewi Kunti No.9, Kebun Bunga, Banjarmasin Timur, Banjarmasin City, South Kalimantan 70236',
    gmapSrc: 'https://maps.app.goo.gl/kZ8jEcifCzXKHWqn6',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.446812714696!2d114.589893!3d-3.3225665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423fc5f414f37%3A0xf984b26fd77ef168!2sBingka%20Borneo%20Ibu%20HJ.%20Masturiah!5e0!3m2!1sid!2sid!4v1762864139284!5m2!1sid!2sid',
    foto: [
      '/umkm-images/bingka-borneo-ibu-hj-masturiah-0.jpg',
      '/umkm-images/bingka-borneo-ibu-hj-masturiah-1.jpg',
      '/umkm-images/bingka-borneo-ibu-hj-masturiah-2.jpg',
      '/umkm-images/bingka-borneo-ibu-hj-masturiah-3.jpg',
      '/umkm-images/bingka-borneo-ibu-hj-masturiah-4.jpg',
    ],
    slug: 'bingka-borneo-ibu-hj-masturiah',
    kontak: [
      {
        type: 'phone',
        value: '081351700077'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/bingkaborneo_/?hl=id',
        'username': 'bingkaborneo_'
      }
    ],
  },
  'abon-haruan-mubarakah': {
    id: uuidv4(),
    nama: 'Abon haruan Mubarakah',
    deskripsi: 'Abon Haruan Mubarakah merupakan UMKM yang mengolah dan menjual abon ikan haruan (gabus) khas Kalimantan Selatan dengan cita rasa gurih, lezat, dan autentik. Menggunakan bahan baku ikan segar pilihan yang diolah dengan bumbu tradisional khas Banjar, abon ini menghadirkan rasa khas yang disukai banyak kalangan. Dengan proses produksi yang higienis dan pengemasan modern, Abon Haruan Mubarakah menjadi pilihan tepat sebagai lauk praktis maupun oleh-oleh khas daerah yang mencerminkan kekayaan kuliner Kalimantan Selatan.',
    kategori: ['Lauk & Pauk'],
    alamat: 'kompl. Andai jaya persada, Jl. Sungai andai No.12 rt. 35 blok d, Sungai Jingah, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70121',
    gmapSrc: 'https://maps.app.goo.gl/VAeDFsVFHaocH7bY9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31865.514495042007!2d114.5783329!3d-3.3032809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423579caf4ccd%3A0x75e3cc67f12a2eaf!2sAbon%20haruan%20Mubarakah!5e0!3m2!1sid!2sid!4v1762864232589!5m2!1sid!2sid',
    foto: [
      '/umkm-images/abon-haruan-mubarakah-0.jpg',
      '/umkm-images/abon-haruan-mubarakah-1.jpg',
      '/umkm-images/abon-haruan-mubarakah-2.jpg',
      '/umkm-images/abon-haruan-mubarakah-3.jpg',
      '/umkm-images/abon-haruan-mubarakah-4.jpg',
    ],
    slug: 'abon-haruan-mubarakah',
    kontak: [
      {
        type: 'phone',
        value: '081351919622'
      }
    ],
  },
  'snack-udang-ikan-saluang-jasmine': {
    id: uuidv4(),
    nama: 'Snack Udang & Ikan Saluang "Jasmine"',
    deskripsi: 'Snack Udang & Ikan Saluang "Jasmine" merupakan UMKM yang terkenal di Banjarmasin dengan produk camilan khas Kalimantan Selatan yang gurih dan lezat. Toko ini menghadirkan berbagai olahan hasil laut seperti snack udang dan ikan saluang yang digoreng renyah menggunakan bahan segar dan bumbu tradisional pilihan. Dengan cita rasa khas yang sulit ditemukan di tempat lain, Snack Udang & Ikan Saluang "Jasmine" menjadi destinasi favorit bagi wisatawan maupun masyarakat lokal yang mencari oleh-oleh khas Banjar. Selain menjaga kualitas rasa, toko ini juga dikenal dengan lingkungan yang bersih, pelayanan ramah, dan kemasan menarik yang cocok dijadikan buah tangan.',
    kategori: ['Makanan Ringan', 'Lauk & Pauk'],
    alamat: 'Jalan Djok Mentaya No.5, Kertak Baru Ilir, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70231',
    gmapSrc: 'https://maps.app.goo.gl/kE1zZCuzqP167Nny9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.242022250532!2d114.5839046!3d-3.3202594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423db126c79f7%3A0x9648baa9f5dd7552!2sSnack%20Udang%20%26%20Ikan%20Saluang%20%22%20Jasmine%20%22!5e0!3m2!1sid!2sid!4v1762864305084!5m2!1sid!2sid',
    foto: [
      '/umkm-images/snack-udang-ikan-saluang-jasmine-0.jpg',
      '/umkm-images/snack-udang-ikan-saluang-jasmine-1.jpg',
      '/umkm-images/snack-udang-ikan-saluang-jasmine-2.jpg',
      '/umkm-images/snack-udang-ikan-saluang-jasmine-3.jpg',
      '/umkm-images/snack-udang-ikan-saluang-jasmine-4.jpg',
    ],
    slug: 'snack-udang-ikan-saluang-jasmine',
    kontak: [
      {
        type: 'phone',
        value: '081250008805'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/toko_oleh_oleh_jasmine/?hl=id',
        'username': 'toko_oleh_oleh_jasmine'
      }
    ],
  },
  'apam-barenda-khas-barabai': {
    id: uuidv4(),
    nama: 'Apam Barenda Khas Barabai by Cemilan Adzkia',
    deskripsi: 'Apam Barenda Khas Barabai by Cemilan Adzkia merupakan UMKM yang menghadirkan cita rasa autentik apam khas Barabai, Kalimantan Selatan, dengan tekstur lembut dan rasa manis legit yang khas. Dibuat dari bahan-bahan alami seperti tepung beras, santan, dan gula merah pilihan, apam ini diproses dengan resep tradisional turun-temurun untuk menjaga keaslian rasanya. Dengan kemasan yang menarik dan higienis, Apam Barenda Khas Barabai by Cemilan Adzkia menjadi pilihan tepat bagi pecinta kue tradisional maupun wisatawan yang ingin membawa pulang oleh-oleh khas Kalimantan Selatan yang lezat dan bernilai budaya.',
    kategori: ['Kue Basah'],
    alamat: 'Jl. Gerilya, Tj. Pagar, Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan',
    gmapSrc: 'https://maps.app.goo.gl/ErLU23a519fhK1Y28',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31864.470840549755!2d114.578516!3d-3.3356354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4210011668a15%3A0x2e3a670780285da!2sApam%20Barenda%20Khas%20Barabai%20by%20Cemilan%20Adzkia!5e0!3m2!1sid!2sid!4v1762864412433!5m2!1sid!2sid',
    foto: [
      '/umkm-images/apam-barenda-khas-barabai-0.jpg',
      '/umkm-images/apam-barenda-khas-barabai-1.jpg',
      '/umkm-images/apam-barenda-khas-barabai-2.jpg',
      '/umkm-images/apam-barenda-khas-barabai-3.jpg',
      '/umkm-images/apam-barenda-khas-barabai-4.jpg',
    ],
    slug: 'apam-barenda-khas-barabai',
    kontak: [
      {
        type: 'phone',
        value: '085349772378'
      }
    ],
  },
  'irma-sasirangan': {
    id: uuidv4(),
    nama: 'Irma Sasirangan',
    deskripsi: 'Irma Sasirangan merupakan UMKM yang berfokus pada produksi dan penjualan kain sasirangan khas Kalimantan Selatan, warisan budaya suku Banjar yang dikenal dengan corak dan warna-warna khasnya. Setiap lembar kain dibuat secara manual dengan teknik pewarnaan tradisional yang memadukan kreativitas dan nilai seni tinggi. Irma Sasirangan menyediakan berbagai produk berbahan sasirangan seperti kemeja, gaun, dan aksesori, yang cocok digunakan untuk acara formal maupun kasual. Dengan menjaga kualitas bahan dan keaslian motif, toko ini menjadi salah satu pilihan utama bagi pecinta kain tradisional dan wisatawan yang ingin membawa pulang oleh-oleh bernuansa budaya Banjar.',
    kategori: ['Pakaian & Aksesoris'],
    alamat: 'Jl. seberang mesjid Rt.06, Banjarmasin, Seberang Mesjid, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70231',
    gmapSrc: 'https://maps.app.goo.gl/ogfGT6u1CXmUZgh49',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.1455315605995!2d114.5897559!3d-3.314174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423bfee7c43b5%3A0xea255e59df5f51ec!2sIrma%20Sasirangan!5e0!3m2!1sid!2sid!4v1762864514262!5m2!1sid!2sid',
    foto: [
      '/umkm-images/irma-sasirangan-0.jpg',
      '/umkm-images/irma-sasirangan-1.jpg',
      '/umkm-images/irma-sasirangan-2.jpg',
      '/umkm-images/irma-sasirangan-3.jpg',
      '/umkm-images/irma-sasirangan-4.jpg',
    ],
    slug: 'irma-sasirangan',
    kontak: [
      {
        type: 'phone',
        value: '081351755990'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/irmasasirangan/?hl=id',
        username: 'irmasasirangan'
      }
    ],
  },
  'nida-sasirangan': {
    id: uuidv4(),
    nama: 'Nida Sasirangan',
    deskripsi: 'Nida Sasirangan merupakan UMKM yang memproduksi dan menjual kain sasirangan khas Kalimantan Selatan dengan sentuhan desain modern tanpa meninggalkan nilai tradisi. Menggunakan teknik pewarnaan ikat celup khas suku Banjar, setiap kain dibuat secara teliti dan penuh seni, menghasilkan motif yang unik serta warna yang khas. Nida Sasirangan menawarkan berbagai produk berbahan sasirangan seperti kemeja, gaun, dan aksesori fesyen yang elegan dan bernilai budaya tinggi. Dengan menjaga kualitas bahan serta keaslian motif, toko ini menjadi pilihan tepat bagi masyarakat maupun wisatawan yang ingin memiliki karya asli warisan budaya Banjar.',
    kategori: ['Pakaian & Aksesoris'],
    alamat: 'Jl. Sungai Jingah RT 17 No 21A, Kelurahan, Surgi Mufti, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70122',
    gmapSrc: 'https://maps.app.goo.gl/3wNPfHFv8X3JM374A',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.308159607752!2d114.5904107!3d-3.3120499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de42393f8306e67%3A0xa4c51d2269c955a3!2sNida%20Sasirangan!5e0!3m2!1sid!2sid!4v1762864666617!5m2!1sid!2sid',
    foto: [
      '/umkm-images/nida-sasirangan-0.jpg',
      '/umkm-images/nida-sasirangan-1.jpg',
      '/umkm-images/nida-sasirangan-2.jpg',
      '/umkm-images/nida-sasirangan-3.jpg',
      '/umkm-images/nida-sasirangan-4.jpg',
    ],
    slug: 'nida-sasirangan',
    kontak: [
      {
        type: 'phone',
        value: '082148802020'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/nidasasirangan/',
        'username': 'nidasasirangan'
      }
    ],
  },
  'pengrajin-souvenir-miniatur-jukung': {
    id: uuidv4(),
    nama: 'Pengrajin souvenir miniatur jukung pasar terapung',
    deskripsi: 'Pengrajin Souvenir Miniatur Jukung Pasar Terapung merupakan UMKM yang mengkhususkan diri dalam pembuatan miniatur jukung khas Kalimantan Selatan, yang terinspirasi dari ikon budaya Banjarmasin, yaitu pasar terapung. Setiap miniatur dibuat secara teliti dengan sentuhan tangan pengrajin lokal menggunakan bahan berkualitas seperti kayu dan bambu, sehingga menghasilkan karya yang detail, autentik, dan bernilai seni tinggi. Pengrajin Souvenir Miniatur Jukung Pasar Terapung menjadi pilihan tepat bagi wisatawan maupun kolektor yang ingin memiliki cendera mata khas Banjar yang merepresentasikan keindahan dan kearifan budaya sungai Kalimantan Selatan.',
    kategori: ['Cendera Mata'],
    alamat: 'PM97+F3V, Unnamed Road, Sungai Tandipah, Sungai Tabuk, Barito Kuala Regency, South Kalimantan 70653',
    gmapSrc: 'https://maps.app.goo.gl/PuJAwCjcqeCsQ2P28',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63731.18380885298!2d114.5852225!3d-3.3008685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de425fbbc08bf3f%3A0x6fc82708d5a0bbae!2sPengrajin%20souvenir%20miniatur%20jukung%20pasar%20terapung!5e0!3m2!1sid!2sid!4v1762864763395!5m2!1sid!2sid',
    foto: [
      '/umkm-images/pengrajin-souvenir-miniatur-jukung-0.jpg',
      '/umkm-images/pengrajin-souvenir-miniatur-jukung-1.jpg',
      '/umkm-images/pengrajin-souvenir-miniatur-jukung-2.jpg',
      '/umkm-images/pengrajin-souvenir-miniatur-jukung-3.jpg',
      '/umkm-images/pengrajin-souvenir-miniatur-jukung-4.jpg',
    ],
    slug: 'pengrajin-souvenir-miniatur-jukung',
    kontak: [
      {
        type: 'phone',
        value: '083150579963'
      }
    ],
  },
  'pengrajin-purun-galoeh-bandjar': {
    id: uuidv4(),
    nama: 'Pengrajin Purun Galoeh Bandjar',
    deskripsi: 'Pengrajin Purun Galoeh Bandjar merupakan UMKM yang bergerak di bidang kerajinan tangan khas Kalimantan Selatan, dengan produk utama berupa anyaman purun yang ramah lingkungan dan bernilai estetika tinggi. Menggunakan bahan alami dari tanaman purun yang tumbuh di lahan rawa, setiap produk seperti tas, tikar, dompet, dan wadah serbaguna dibuat secara manual oleh pengrajin lokal dengan teknik tradisional yang diwariskan secara turun-temurun. Pengrajin Purun Galoeh Bandjar tidak hanya menjaga kelestarian budaya Banjar melalui karya anyaman, tetapi juga berkontribusi dalam pelestarian lingkungan dengan menghadirkan produk fungsional, unik, dan bernilai seni tinggi sebagai cendera mata khas daerah.',
    kategori: ['Cendera Mata'],
    alamat: 'FQXQ+686, Jl. Purnawirawan, RT.05/RW.02, Palam, Kec. Cemp., Kota Banjar Baru, Kalimantan Selatan 70732',
    gmapSrc: 'https://maps.app.goo.gl/eXRJCtHpumAsSvci9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63717.89491774038!2d114.7223175!3d-3.5018984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6850f528428e9%3A0x5d5361b0ec59a5f2!2sPengrajin%20Purun%20Galoeh%20Bandjar!5e0!3m2!1sid!2sid!4v1762864886008!5m2!1sid!2sid',
    foto: [
      '/umkm-images/pengrajin-purun-galoeh-bandjar-0.jpg',
      '/umkm-images/pengrajin-purun-galoeh-bandjar-1.jpg',
      '/umkm-images/pengrajin-purun-galoeh-bandjar-2.jpg',
      '/umkm-images/pengrajin-purun-galoeh-bandjar-3.jpg',
      '/umkm-images/pengrajin-purun-galoeh-bandjar-4.jpg'
    ],
    slug: 'pengrajin-purun-galoeh-bandjar',
    kontak: [
      {
        type: 'phone',
        value: '083159658023'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/galoehbandjar_anyamanpurun/',
        username: 'galoehbandjar_anyamanpurun'
      }
    ],
  },
  'rumah-sambal-acan-raja-banjar': {
    id: uuidv4(),
    nama: 'Rumah Sambal Acan Raja Banjar',
    deskripsi: 'Rumah Sambal Acan Raja Banjar merupakan rumah makan khas Kalimantan Selatan yang terkenal dengan sambal acannya yang pedas, segar, dan autentik. Mengusung cita rasa tradisional Banjar, rumah makan ini menyajikan berbagai hidangan lezat yang dipadukan dengan sambal acan buatan sendiri dari bahan-bahan segar pilihan. Pengunjung tidak hanya menikmati kenikmatan sambal khas yang menggugah selera, tetapi juga suasana nyaman dan pelayanan ramah khas masyarakat Banjar. Rumah Sambal Acan Raja Banjar menjadi destinasi kuliner favorit bagi pecinta makanan pedas dan pencinta kuliner khas daerah yang ingin merasakan keaslian rasa Banjar dalam setiap suapan.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'Jl. RE Martadinata No.3-1, Telawang, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70112',
    gmapSrc: 'https://maps.app.goo.gl/DLpcMoRLn5qFmEhD9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1991.5460970576219!2d114.5874211!3d-3.3273969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423d9256288f7%3A0x4e3df0697824e75b!2sRumah%20Sambal%20Acan%20Raja%20Banjar!5e0!3m2!1sid!2sid!4v1762865007843!5m2!1sid!2sid',
    foto: [
      '/umkm-images/rumah-sambal-acan-raja-banjar-0.jpg',
      '/umkm-images/rumah-sambal-acan-raja-banjar-1.jpg',
      '/umkm-images/rumah-sambal-acan-raja-banjar-2.jpg',
      '/umkm-images/rumah-sambal-acan-raja-banjar-3.jpg',
      '/umkm-images/rumah-sambal-acan-raja-banjar-4.jpg',
    ],
    slug: 'rumah-sambal-acan-raja-banjar',
    kontak: [
      {
        type: 'phone',
        value: '081351925922'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/rumahsambalarb/',
        username: 'rumahsambalarb'
      }
    ],
  },
  'ketupat-kandangan-hj-mursinah': {
    id: uuidv4(),
    nama: 'Ketupat Kandangan HJ Mursinah',
    deskripsi: 'Ketupat Kandangan Hj. Mursinah merupakan rumah makan legendaris yang menyajikan kuliner khas Kalimantan Selatan, yaitu ketupat kandangan. Hidangan ini terkenal dengan ketupat lembut yang disajikan bersama ikan haruan (gabus) panggang dan kuah santan gurih yang kaya rempah. Dengan cita rasa otentik yang telah terjaga turun-temurun, rumah makan ini menjadi tujuan favorit bagi pencinta masakan tradisional Banjar. Suasana yang sederhana namun hangat serta pelayanan yang ramah menjadikan Ketupat Kandangan Hj. Mursinah tempat yang ideal untuk menikmati kelezatan kuliner khas daerah yang menggugah selera.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'Jl. Cendrawasih No.7, RT.29, Belitung Sel., Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70116',
    gmapSrc: 'https://maps.app.goo.gl/cAc6YvfWcFPhfCm87',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.328737962939!2d114.5711267!3d-3.3094914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423b12c5e8d5f%3A0xf751cbe08e4ddd7d!2sKetupat%20Kandangan%20HJ%20Mursinah!5e0!3m2!1sid!2sid!4v1762865077625!5m2!1sid!2sid',
    foto: [
      '/umkm-images/ketupat-kandangan-hj-mursinah-0.jpg',
      '/umkm-images/ketupat-kandangan-hj-mursinah-1.jpg',
      '/umkm-images/ketupat-kandangan-hj-mursinah-2.jpg',
      '/umkm-images/ketupat-kandangan-hj-mursinah-3.jpg',
      '/umkm-images/ketupat-kandangan-hj-mursinah-4.jpg'
    ],
    slug: 'ketupat-kandangan-hj-mursinah',
    kontak: [
      {
        type: 'phone',
        value: '082155179145'
      }
    ],
  },
  'lontong-orari': {
    id: uuidv4(),
    nama: 'Lontong Orari',
    deskripsi: 'Lontong Orari adalah rumah makan khas Banjarmasin yang terkenal dengan sajian lontong sayurnya yang lezat dan kaya rasa. Mengusung resep tradisional yang telah dikenal turun-temurun, Lontong Orari menyajikan lontong dengan kuah santan gurih, sayur labu, telur, serta lauk pelengkap seperti ayam, ikan haruan, atau sate. Cita rasa khas dan porsi yang mengenyangkan membuat tempat ini menjadi favorit masyarakat lokal maupun wisatawan. Dengan suasana sederhana namun nyaman serta pelayanan yang cepat dan ramah, Lontong Orari menjadi destinasi kuliner wajib bagi siapa pun yang ingin menikmati kelezatan makanan khas Banjar di Banjarmasin.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'Jl. Simp. Sei Mesa No.80, Seberang Mesjid, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70122',
    gmapSrc: 'https://maps.app.goo.gl/EKadp7JKuugceMaU7',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.76363339796!2d114.5905946!3d-3.302883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423eae2586c99%3A0x844946f2a0cc155c!2sRM%20Lontong%20Orari!5e0!3m2!1sid!2sid!4v1762865186331!5m2!1sid!2sid',
    foto: [
      '/umkm-images/lontong-orari-0.jpg',
      '/umkm-images/lontong-orari-1.jpg',
      '/umkm-images/lontong-orari-2.jpg',
      '/umkm-images/lontong-orari-3.jpg',
      '/umkm-images/lontong-orari-4.jpg'
    ],
    slug: 'lontong-orari',
    kontak: [
      {
        type: 'phone',
        value: '087720443377'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/lontong_orari/?hl=id',
        username: 'lontong_orari'
      }
    ],
  },
  'roti-pisang-nangka-salma': {
    id: uuidv4(),
    nama: 'Roti Pisang & Nangka Salma Liwar Langkar',
    deskripsi: 'Roti Pisang & Nangka Salma Liwar Langkar merupakan UMKM kuliner khas Banjar yang terkenal dengan kelezatan roti pisang dan roti nangkanya yang lembut, manis, dan beraroma khas. Menggunakan bahan-bahan berkualitas serta resep tradisional yang diwariskan secara turun-temurun, setiap roti dibuat dengan cita rasa autentik yang menggugah selera. Perpaduan pisang dan nangka memberikan rasa manis alami yang khas Kalimantan Selatan. Dengan pelayanan ramah dan suasana sederhana nan hangat, Roti Pisang & Nangka Salma Liwar Langkar menjadi pilihan favorit masyarakat dan wisatawan yang ingin menikmati camilan tradisional sekaligus membawa pulang oleh-oleh khas daerah.',
    kategori: ['Kue Basah'],
    alamat: 'Kelayan Dalam, Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan',
    gmapSrc: 'https://maps.app.goo.gl/5697UESXLKCSRf5X6',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.36873442687!2d114.5836074!3d-3.3273995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4214db220cecd%3A0x779f16303d2bee4b!2sRoti%20Pisang%20%26%20Nangka%20Salma%20Liwar%20Langkar!5e0!3m2!1sid!2sid!4v1762865271499!5m2!1sid!2sid',
    foto: [
      '/umkm-images/roti-pisang-nangka-salma-0.jpg',
      '/umkm-images/roti-pisang-nangka-salma-1.jpg',
      '/umkm-images/roti-pisang-nangka-salma-2.jpg',
      '/umkm-images/roti-pisang-nangka-salma-3.jpg',
      '/umkm-images/roti-pisang-nangka-salma-4.jpg'
    ],
    slug: 'roti-pisang-nangka-salma',
    kontak: [
      {
        type: 'phone',
        value: '085246667775'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/rotipisangsalma_liwarlangkar/',
        username: 'rotipisangsalma_liwarlangkar'
      }
    ],
  },
  'rumah-makan-idah': {
    id: uuidv4(),
    nama: 'Rumah Makan Idah (Masakan Khas Banjar)',
    deskripsi: 'Rumah Makan Idah (Masakan Khas Banjar) merupakan destinasi kuliner yang menyajikan berbagai hidangan tradisional khas Kalimantan Selatan dengan cita rasa autentik. Dikenal karena kelezatan masakan rumahan aneka ikan bakar seperti haruan (gabus), nila, dan patin bakar. Mereka juga menyediakan ayam bakar, udang galah, dan berbagai macam paisan (pepes), rumah makan ini menjadi favorit bagi masyarakat lokal maupun wisatawan yang ingin menikmati masakan Banjar asli. Dengan bahan-bahan segar, bumbu rempah pilihan, serta suasana yang hangat dan pelayanan ramah, Rumah Makan Idah menghadirkan pengalaman bersantap yang menggugah selera dan mencerminkan kekayaan kuliner khas Banjar.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'Jl. S. Parman No.137, Belitung Utara, Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70123',
    gmapSrc: 'https://maps.app.goo.gl/ZtrtpDhhbVqjbtBy9',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.316648646148!2d114.5849465!3d-3.3109947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423bbea58667b%3A0x93a47837636f5153!2sRumah%20Makan%20Idah%20(Masakan%20Khas%20Banjar)!5e0!3m2!1sid!2sid!4v1762865377448!5m2!1sid!2sid',
    foto: [
      '/umkm-images/rumah-makan-idah-0.jpg',
      '/umkm-images/rumah-makan-idah-1.jpg',
      '/umkm-images/rumah-makan-idah-2.jpg',
      '/umkm-images/rumah-makan-idah-3.jpg',
      '/umkm-images/rumah-makan-idah-4.jpg',
    ],
    slug: 'rumah-makan-idah',
    kontak: [
      {
        type: 'phone',
        value: '0511414744'
      }
    ],
  },
  'tapai-gambut-5-saudagar': {
    id: uuidv4(),
    nama: 'Tapai Gambut 5 Saudagar',
    deskripsi: 'Tapai Gambut 5 Saudagar merupakan UMKM yang dikenal sebagai produsen tapai khas Kalimantan Selatan dengan cita rasa manis legit dan aroma khas hasil fermentasi tradisional. Menggunakan bahan baku pilihan seperti ketan berkualitas dan ragi alami, tapai ini diolah dengan resep turun-temurun yang menjaga keaslian rasa khas daerah Gambut. Teksturnya yang lembut dan rasa manis yang pas membuat Tapai Gambut 5 Saudagar digemari sebagai camilan maupun oleh-oleh khas Banjarmasin. Dengan kualitas terjaga dan kemasan yang menarik, UMKM ini terus menjadi pilihan utama bagi pecinta makanan tradisional Banjar yang autentik dan menggugah selera.',
    kategori: ['Makanan Fermentasi'],
    alamat: 'Jl. Pemajatan No.KM 0,500, RT.11/RW.4, Kayu Bawang, Kec. Gambut, Kabupaten Banjar, Kalimantan Selatan 70652',
    gmapSrc: 'https://maps.app.goo.gl/NLpMJb452VNTsc3F6',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31862.26889301312!2d114.6410313!3d-3.4028904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de69dc0616bdd69%3A0x9018e30df3090731!2sTapai%20Gambut%205%20Saudagar!5e0!3m2!1sid!2sid!4v1762865460864!5m2!1sid!2sid',
    foto: [
      '/umkm-images/tapai-gambut-5-saudagar-0.jpg',
      '/umkm-images/tapai-gambut-5-saudagar-1.jpg',
      '/umkm-images/tapai-gambut-5-saudagar-2.jpg',
      '/umkm-images/tapai-gambut-5-saudagar-3.jpg',
      '/umkm-images/tapai-gambut-5-saudagar-4.jpg',
    ],
    slug: 'tapai-gambut-5-saudagar',
    kontak: [
      {
        type: 'phone',
        value: '085350133501'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/5_saudagar/',
        username: '5_saudagar'
      }
    ],
  },
  'kue-ipau-umi-youmna': {
    id: uuidv4(),
    nama: 'Kue ipau umi youmna',
    deskripsi: 'Kue Ipau Umi Youmna merupakan UMKM kuliner khas Banjar yang terkenal dengan kue ipau-nya yang lembut, gurih, dan kaya rasa. Dibuat dari lapisan adonan tepung yang diisi dengan campuran ayam, sayuran, serta kuah santan berbumbu rempah khas Banjar, kue ini menghadirkan cita rasa tradisional yang autentik dan lezat. Dengan bahan-bahan segar dan resep warisan keluarga, Kue Ipau Umi Youmna berhasil mempertahankan keaslian rasa yang menjadi favorit masyarakat lokal maupun wisatawan. Selain dijual sebagai hidangan rumahan, kue ipau ini juga sering dijadikan pilihan oleh-oleh khas daerah yang mencerminkan kekayaan kuliner Kalimantan Selatan.',
    kategori: ['Kue Basah'],
    alamat: 'Jl. Antasan Kecil Barat No.35 rt 13, Ps. Lama, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70115',
    gmapSrc: 'https://maps.app.goo.gl/NpWi6CGP4a1Wbye7A',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.355480935905!2d114.5883826!3d-3.3061635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de42379f13041a9%3A0xc7b5bf61c7405cdc!2sKue%20ipau%20umi%20youmna!5e0!3m2!1sid!2sid!4v1762865543024!5m2!1sid!2sid',
    foto: [
      '/umkm-images/kue-ipau-umi-youmna-0.jpg',
      '/umkm-images/kue-ipau-umi-youmna-1.jpg'
    ],
    slug: 'kue-ipau-umi-youmna',
    kontak: [
      {
        type: 'phone',
        value: '081251345710'
      }
    ],
  },
  'dodol-asli-kandangan-mama-alfi': {
    id: uuidv4(),
    nama: 'Dodol Asli Kandangan Mama Alfi',
    deskripsi: 'Dodol Asli Kandangan Mama Alfi merupakan UMKM yang terkenal dengan olahan dodol khas Kalimantan Selatan yang legit, lembut, dan beraroma khas. Dibuat dari bahan-bahan alami seperti santan segar, gula merah pilihan, dan tepung ketan berkualitas, dodol ini diolah secara tradisional dengan kesabaran dan ketelatenan tinggi untuk menghasilkan cita rasa autentik yang khas Kandangan. Teksturnya yang kenyal dan rasa manisnya yang pas menjadikan dodol ini digemari sebagai camilan maupun oleh-oleh khas daerah. Dengan kemasan yang menarik dan kualitas rasa yang konsisten, Dodol Asli Kandangan Mama Alfi menjadi salah satu ikon kuliner tradisional yang mencerminkan kelezatan dan kekayaan budaya Banua.',
    kategori: ['Cemilan'],
    alamat: 'Jl. Kapuh Madani, Telaga Bidadari, Kec. Sungai Raya, Kabupaten Hulu Sungai Selatan, Kalimantan Selatan 71261',
    gmapSrc: 'https://maps.app.goo.gl/Y4AgpHzZk1QRnttN7',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d509936.72447609226!2d114.5932912!3d-3.1262422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de5a112aa90c1a7%3A0x61866d207ef031c2!2sDodol%20Asli%2FPanas%20Mama%20Alfi%20Kandangan!5e0!3m2!1sid!2sid!4v1762865726911!5m2!1sid!2sid',
    foto: [
      '/umkm-images/dodol-asli-kandangan-mama-alfi-0.jpg',
      '/umkm-images/dodol-asli-kandangan-mama-alfi-1.jpg',
      '/umkm-images/dodol-asli-kandangan-mama-alfi-2.jpg',
      '/umkm-images/dodol-asli-kandangan-mama-alfi-3.jpg',
      '/umkm-images/dodol-asli-kandangan-mama-alfi-4.jpg',
    ],
    slug: 'dodol-asli-kandangan-mama-alfi',
    kontak: [
      {
        type: 'phone',
        value: '085166632346'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/dodolmamaalfi.kandangan/',
        'username': 'dodolmamaalfi.kandangan'
      }
    ],
  },
  'wadai-untuk-abah-hafiz': {
    id: uuidv4(),
    nama: 'wadai untuk abah hafiz',
    deskripsi: 'Wadai Untuk Abah Hafiz merupakan UMKM kuliner khas Banjar yang terkenal dengan kelezatan wadai untuk-untuk-nya yang lembut di dalam dan renyah di luar. Dibuat dari bahan-bahan pilihan seperti tepung terigu, santan, dan gula dengan resep tradisional turun-temurun, kue ini menghadirkan cita rasa manis gurih yang khas dan menggugah selera. Setiap adonan digoreng dengan sempurna sehingga menghasilkan aroma harum dan tekstur yang pas di lidah. Wadai Untuk Abah Hafiz menjadi salah satu pilihan favorit masyarakat untuk camilan pagi maupun teman minum teh. Dengan rasa autentik khas Banjar, UMKM ini turut melestarikan warisan kuliner tradisional Kalimantan Selatan.',
    kategori: ['Cemilan'],
    alamat: 'Jl. Laksana Intan, Kelayan Sel., Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan 70246',
    gmapSrc: 'https://maps.app.goo.gl/EEnMJGcbYEWpePkM6',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.387328082283!2d114.5769061!3d-3.3262492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de42182987fa8ed%3A0x9da142523f2c863a!2swadai%20untuk%20abah%20hafiz!5e0!3m2!1sid!2sid!4v1762865832205!5m2!1sid!2sid',
    foto: [
      '/umkm-images/wadai-untuk-abah-hafiz-0.jpg',
      '/umkm-images/wadai-untuk-abah-hafiz-1.jpg',
      '/umkm-images/wadai-untuk-abah-hafiz-2.jpg',
      '/umkm-images/wadai-untuk-abah-hafiz-3.jpg',
      '/umkm-images/wadai-untuk-abah-hafiz-4.jpg',
    ],
    slug: 'wadai-untuk-abah-hafiz',
    kontak: [
      {
        type: 'phone',
        value: '085245953488'
      }
    ],
  },
  'soto-bang-amat': {
    id: uuidv4(),
    nama: 'Soto Bang Amat - Banjarmasin',
    deskripsi: 'Soto Bang Amat – Banjarmasin merupakan rumah makan legendaris yang menyajikan soto Banjar dengan cita rasa autentik dan kualitas yang terjaga sejak lama. Dikenal sebagai salah satu ikon kuliner di tepi Sungai Martapura, tempat ini menawarkan pengalaman bersantap yang khas dengan suasana tradisional dan pemandangan alam yang menenangkan. Kuah soto yang gurih berpadu dengan suwiran ayam kampung, perkedel, telur rebus, serta aroma rempah-rempah khas Banjar menjadikan hidangan ini favorit bagi masyarakat lokal maupun wisatawan. Dengan pelayanan ramah dan cita rasa yang konsisten, Soto Bang Amat menjadi simbol kuliner khas Banjarmasin yang wajib dicoba bagi pecinta masakan tradisional Kalimantan Selatan.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'Jl. Banua Anyar No.6, Benua Anyar, Kec. Banjarmasin Tim., Kota Banjarmasin, Kalimantan Selatan 70121',
    gmapSrc: 'https://maps.app.goo.gl/imojK4B3FrampQ3A7',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.609059406588!2d114.5913248!3d-3.312501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4238e4566331d%3A0x34083a92d1c5d264!2sSoto%20Bang%20Amat%20-%20Banjarmasin!5e0!3m2!1sid!2sid!4v1762865915687!5m2!1sid!2sid',
    foto: [
      '/umkm-images/soto-bang-amat-0.jpg',
      '/umkm-images/soto-bang-amat-1.jpg',
      '/umkm-images/soto-bang-amat-2.jpg',
      '/umkm-images/soto-bang-amat-3.jpg',
      '/umkm-images/soto-bang-amat-4.jpg',
    ],
    slug: 'soto-bang-amat',
    kontak: [
      {
        type: 'instagram',
        value: 'https://www.instagram.com/sotobangamat_/',
        username: 'sotobangamat_'
      }
    ],
  },
  'toko-kopiah-ibadah-cap-berlian': {
    id: uuidv4(),
    nama: 'Toko Kopiah Ibadah Cap Berlian',
    deskripsi: 'Toko Kopiah Ibadah Cap Berlian merupakan UMKM pembuat peci khas Kalimantan Selatan. Dikenal dengan produk kopiah berkualitas tinggi, toko ini menawarkan berbagai jenis kopiah buatan tangan yang nyaman dipakai dan memiliki desain elegan. Menggunakan bahan pilihan serta pengerjaan rapi oleh pengrajin berpengalaman, setiap kopiah mencerminkan perpaduan antara nilai religius, tradisi, dan estetika lokal. Selain menjadi kebutuhan ibadah, produk dari Toko Kopiah Ibadah Cap Berlian juga diminati sebagai oleh-oleh khas daerah. Dengan reputasi yang terjaga, toko ini menjadi salah satu sentra kopiah terpercaya di Banjarmasin.',
    kategori: ['Pakaian & Aksesoris'],
    alamat: 'Gg. Ambon, RT.01/RW.No 02, Ps. Lama, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70115',
    gmapSrc: 'https://maps.app.goo.gl/nZmypexTaLYCZeJe8',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.309360079317!2d114.5851231!3d-3.3119007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423c07e072781%3A0x68cfa83171c98716!2sToko%20Kopiah%20Ibadah%20Cap%20Berlian!5e0!3m2!1sid!2sid!4v1762866660593!5m2!1sid!2sid',
    foto: [
      '/umkm-images/toko-kopiah-ibadah-cap-berlian-0.jpg',
      '/umkm-images/toko-kopiah-ibadah-cap-berlian-1.jpg',
      '/umkm-images/toko-kopiah-ibadah-cap-berlian-2.jpg',
      '/umkm-images/toko-kopiah-ibadah-cap-berlian-3.jpg',
      '/umkm-images/toko-kopiah-ibadah-cap-berlian-4.jpg',
    ],
    slug: 'toko-kopiah-ibadah-cap-berlian',
    kontak: [
      {
        type: 'phone',
        value: '089561797974'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/kopiahibadah_capberlian_bjm/?hl=id',
        username: 'kopiahibadah_capberlian_bjm'
      }
    ],
  },
  'mandai-paman-gundul': {
    id: uuidv4(),
    nama: 'Mandai Paman GUNDUL',
    deskripsi: 'Mandai Paman Gundul merupakan UMKM khas Banjar yang dikenal dengan olahan mandai-nya yang gurih, asin, dan beraroma khas. Terbuat dari kulit cempedak pilihan yang diawetkan secara tradisional, mandai ini diolah dengan bumbu rempah khas Kalimantan Selatan hingga menghasilkan cita rasa yang autentik dan menggugah selera. Mandai Paman Gundul menawarkan berbagai varian olahan mandai, mulai dari mandai goreng, tumis, hingga kemasan siap saji yang cocok dijadikan lauk pendamping nasi atau oleh-oleh khas daerah. Dengan cita rasa tradisional yang tetap terjaga dan kualitas bahan yang terpilih, Mandai Paman Gundul menjadi salah satu pelopor pelestarian kuliner khas Banjar yang digemari banyak orang.',
    kategori: ['Lauk & Pauk'],
    alamat: 'HCPJ+76F, Jl. A. Yani, Batu Mandi, Kec. Batu Mandi, Kabupaten Balangan, Kalimantan Selatan 71663',
    gmapSrc: 'https://maps.app.goo.gl/q47hNCjYSncKenuZ6',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1020057.9344179059!2d114.3497183!3d-2.9303494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de544f6a2ba72e3%3A0xde15a49d7d7d8515!2sMandai%20Paman%20GUNDUL!5e0!3m2!1sid!2sid!4v1762866741272!5m2!1sid!2sid',
    foto: [
      '/umkm-images/mandai-paman-gundul-0.jpg',
      '/umkm-images/mandai-paman-gundul-1.jpg',
      '/umkm-images/mandai-paman-gundul-2.jpg',
      '/umkm-images/mandai-paman-gundul-3.jpg',
      '/umkm-images/mandai-paman-gundul-4.jpg',
    ],
    slug: 'mandai-paman-gundul',
    kontak: [
      {
        type: 'phone',
        value: '082254757044'
      }
    ],
  },
  'nasi-kuning-cempaka': {
    id: uuidv4(),
    nama: 'Nasi Kuning Cempaka',
    deskripsi: 'Nasi Kuning Cempaka merupakan UMKM kuliner khas Banjar yang terkenal dengan kelezatan nasi kuningnya yang harum, gurih, dan penuh cita rasa tradisional. Dibuat dari beras pilihan yang dimasak dengan santan dan rempah khas, nasi kuning ini disajikan dengan berbagai lauk seperti ayam goreng, telur, sambal acan, serta serundeng yang menggugah selera. Dengan porsi yang pas dan cita rasa rumahan yang autentik, Nasi Kuning Cempaka menjadi pilihan favorit masyarakat untuk sarapan maupun hidangan acara spesial. Perpaduan rasa gurih dan aroma rempah membuat UMKM ini menjadi salah satu ikon kuliner khas Kalimantan Selatan yang selalu diminati pelanggan.',
    kategori: ['Destinasi Kuliner'],
    alamat: 'MHRQ+5FM, Jl. S. Parman, Belitung Utara, Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70123',
    gmapSrc: 'https://maps.app.goo.gl/h5ibPeBWr5KD49GeA',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.298943465757!2d114.5842808!3d-3.3131951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423bba04eb8bb%3A0xa577475f83a9dacc!2sNasi%20Kuning%20Cempaka!5e0!3m2!1sid!2sid!4v1762866877350!5m2!1sid!2sid',
    foto: [
      '/umkm-images/nasi-kuning-cempaka-0.jpg',
      '/umkm-images/nasi-kuning-cempaka-1.jpg',
      '/umkm-images/nasi-kuning-cempaka-2.jpg',
      '/umkm-images/nasi-kuning-cempaka-3.jpg',
      '/umkm-images/nasi-kuning-cempaka-4.jpg',
    ],
    slug: 'nasi-kuning-cempaka',
    kontak: [
      {
        type: 'phone',
        value: '05117579977'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/nkcempaka/',
        username: 'nkcempaka'
      }
    ],
  },
  'wadai-cincin-bang-jur': {
    id: uuidv4(),
    nama: 'Wadai cincin bang jur belitung darat',
    deskripsi: 'Wadai Cincin Bang Jur merupakan UMKM khas Banjar yang terkenal dengan kue cincin tradisionalnya yang manis, legit, dan beraroma khas gula merah. Dibuat dari tepung beras dan bahan alami pilihan, adonan kue ini digoreng hingga berwarna cokelat keemasan dengan tekstur kenyal di dalam dan sedikit renyah di luar. Cita rasa manisnya yang pas menjadikan wadai cincin ini cocok dinikmati sebagai camilan tradisional atau oleh-oleh khas daerah. Dengan menjaga resep turun-temurun dan proses pembuatan yang masih tradisional, Wadai Cincin Bang Jur berkomitmen melestarikan keaslian rasa kue khas Banjar yang digemari masyarakat Kalimantan Selatan.',
    kategori: ['Makanan Ringan'],
    alamat: 'parkiran martplus belitung, Jl. Belitung Darat, Belitung Sel., Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70124',
    gmapSrc: 'https://maps.app.goo.gl/xc6YNYJHoJGeBPfQ8',
    gmapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.357087277904!2d114.5711508!3d-3.3059635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423f03fa353af%3A0x97241009ba7fc9fc!2sWadai%20cincin%20bang%20jur%20belitung%20darat!5e0!3m2!1sid!2sid!4v1762866966752!5m2!1sid!2sid',
    foto: [
      '/umkm-images/wadai-cincin-bang-jur-0.jpg',
      '/umkm-images/wadai-cincin-bang-jur-1.jpg',
      '/umkm-images/wadai-cincin-bang-jur-2.jpg',
      '/umkm-images/wadai-cincin-bang-jur-3.jpg',
      '/umkm-images/wadai-cincin-bang-jur-4.jpg'
    ],
    slug: 'wadai-cincin-bang-jur',
    kontak: [
      {
        type: 'phone',
        value: '081351247560'
      },
      {
        type: 'instagram',
        value: 'https://www.instagram.com/cincin_bangjur/',
        username: 'cincin_bangjur'
      }
    ],
  }
};

export const dummyUMKMs: Record<Slug, Umkm> = {
  'haidar-sasirangan': defaultUMKM
};

export const testimonials = [
  {
    id: 1,
    text: 'Website ini sangat membantu saya menemukan berbagai oleh-oleh khas Kalimantan Selatan. Informasinya lengkap dan mudah diakses!',
    author: 'Siti Nurhaliza',
    role: 'Wisatawan dari Jakarta',
    company: 'Jakarta'
  },
  {
    id: 2,
    text: 'Sangat informatif! Saya bisa menemukan UMKM lokal dengan mudah dan kontak langsung via WhatsApp. Recommended!',
    author: 'Ahmad Ridwan',
    role: 'Pengusaha',
    company: 'Banjarmasin'
  },
  {
    id: 3,
    text: 'Platform yang sangat membantu untuk mencari oleh-oleh khas Banjarmasin. Informasi lokasi dan kontaknya jelas, memudahkan saya berbelanja.',
    author: 'Dewi Kartika',
    role: 'Ibu Rumah Tangga',
    company: 'Banjarbaru'
  },
  {
    id: 4,
    text: 'Website ini benar-benar informatif dan user-friendly. Saya bisa explore berbagai UMKM lokal dengan mudah!',
    author: 'Bambang Sutrisno',
    role: 'Kolektor Produk Lokal',
    company: 'Surabaya'
  }
];