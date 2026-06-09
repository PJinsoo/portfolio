const fs = require('fs');
const filePath = 'd:/study/portfolio/components/swiper.tsx';

let content = fs.readFileSync(filePath, 'utf-8');

// 1. Import 치환
content = content.replace(
    'import SwiperCore, { Navigation, Pagination } from "swiper";',
    'import { Navigation, Pagination } from "swiper/modules";'
);

// 2. SwiperCore.use 제거
content = content.replace(
    'SwiperCore.use([Navigation, Pagination])',
    ''
);

// 3. Swiper component 에 modules 속성 추가
content = content.replace(
    'pagination={{ clickable: true }}',
    'pagination={{ clickable: true }}\n                modules={[Navigation, Pagination]}'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully fixed swiper.tsx');
