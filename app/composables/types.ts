export interface Produk {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  imageUrl: string
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
}

export type Slug = string;

export interface Kontak {
  type: 'phone' | 'whatsapp' | 'instagram' | 'facebook' | 'twitter' | 'website';
  username?: string;
  value: string;
}