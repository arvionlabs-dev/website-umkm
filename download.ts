import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { realUMKM } from './app/composables/data.ts'

async function downloadImage(url, filename) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            }
        })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const buffer = await response.arrayBuffer()
        const outputPath = join(process.cwd(), 'public', 'umkm-images', filename)

        await mkdir(join(process.cwd(), 'public', 'umkm-images'), { recursive: true })
        await writeFile(outputPath, Buffer.from(buffer))

        console.log(`✅ Downloaded: ${filename}`)
    } catch (error) {
        console.error(`❌ Failed to download ${url}:`, error)
    }
}

async function downloadAllImages() {
    const umkmList = Object.values(realUMKM)

    for (const umkm of umkmList) {
        if (umkm.foto && umkm.foto.length > 0) {
            for (let i = 0; i < umkm.foto.length; i++) {
                const url = umkm.foto[i]
                const filename = `${umkm.slug}-${i}.jpg`
                await downloadImage(url, filename)
            }
        }
    }
}

downloadAllImages()