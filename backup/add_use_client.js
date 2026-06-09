const fs = require('fs');
const path = require('path');

const dir = 'd:/study/portfolio/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // BOM 문자 제거
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        
        const trimmed = content.trim();
        if (!trimmed.startsWith('"use client"') && !trimmed.startsWith("'use client'")) {
            console.log(`Adding 'use client' to ${file}`);
            content = `'use client';\n` + content;
            fs.writeFileSync(filePath, content, 'utf-8');
        }
    }
});
