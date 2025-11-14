export interface Produk {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  imageUrl: string
}

export interface Ulasan {
  id: number;
  text: string;
  author: string;
  rating?: number;
}

export interface Umkm {
  nama?: string;
  deskripsi?: string;
  kategori?: string[];
  alamat?: string;
  kontak?: Kontak[] | string;
  coordinates?: [number, number];
  gmapSrc?: string;
  gmapIframeSrc?: string;
  id?: string;
  slug?: Slug;
  foto?: string[];
  produks?: Produk[];
  ulasan?: Ulasan[];
}

export type Slug = string;

export interface Kontak {
  type: 'phone' | 'whatsapp' | 'instagram' | 'facebook' | 'twitter' | 'website';
  username?: string;
  value: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
  company?: string;
  star?: number;
}