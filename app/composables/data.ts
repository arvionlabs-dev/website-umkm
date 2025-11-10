
export const defaultUMKM: Umkm = {
  nama: 'Haidar Sasirangan',
  deskripsi: 'Dari Tanah Laut, Kalimantan Selatan, Haidar Sasirangan hadir untuk menjaga warisan Banua tetap hidup di setiap helai kain. Sejak berdiri pada 2017, kami berfokus membuat kain sasirangan tradisional dengan warna alami dan sentuhan desain modern agar tetap digemari generasi kini. Setiap motif dibuat dengan tangan oleh pengrajin lokal berpengalaman — dari proses ikat, pewarnaan, hingga penjemuran di bawah hangatnya matahari Kalimantan.',
  alamat: 'Komplek Dahlina Permai, Jl. Dahlina Raya No.12, Sungai Besar, Kec. Banjarbaru Selatan, Kota Banjarbaru, Kalimantan Selatan 70714',
  kontak: '085828332081',
  id: 1,
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
  'baluh-banjar': {}
};

export const dummyUMKMs: Record<Slug, Umkm> = {
  'haidar-sasirangan': defaultUMKM
};