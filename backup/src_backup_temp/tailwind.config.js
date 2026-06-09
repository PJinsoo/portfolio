/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 커스텀 색상 추가
      colors: {
        'blonde' : '#FFFBEB',  // 블론드
        'lightsky' : '#ECF9FF' // 밝은 하늘색
      }
    },
  },
  plugins: [],
}
