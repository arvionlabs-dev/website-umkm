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
  alamat?: string;
  kontak?: string;
  coordinates?: [number, number];
  gmapSrc?: string;
  gmapIframeSrc?: string;
  id?: number;
  slug?: Slug;
  foto?: string[];
  produks?: Produk[];
}

export type Slug = string;