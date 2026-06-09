const fs = require('fs');
const filePath = 'd:/study/portfolio/components/projects.tsx';

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
    'allowTouchMove // 터치 허용',
    'allowTouchMove // 터치 허용\n                    modules={[Navigation, Pagination]}'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully fixed projects.tsx');
