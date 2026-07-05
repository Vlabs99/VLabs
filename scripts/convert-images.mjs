import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const dirs = ['public/images', 'public/screenshots']

async function processDirectory(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inputPath = path.join(dir, file)
      const parsed = path.parse(file)
      const outputPath = path.join(dir, `${parsed.name}.webp`)
      
      const stat = fs.statSync(inputPath)
      const originalSize = stat.size
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath)
          
        const newStat = fs.statSync(outputPath)
        console.log(`Converted: ${inputPath} -> ${outputPath} | Size: ${originalSize} -> ${newStat.size}`)
        
        // Remove original file
        fs.unlinkSync(inputPath)
      } catch (err) {
        console.error(`Error converting ${inputPath}:`, err)
      }
    }
  }
}

async function main() {
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir)
    }
  }
}

main()
