/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["index.html"],
   theme: {
      container: {
         center: true,
         padding: "16px",
      },
      extend: {
         colors: {
            primary: "#3a10e5",
         },
         screens: {
            "2xl": "1320px",
         },
      },
      fontFamily: {
         dmsans: ["DM+Sans"],
      },
   },
   plugins: [],
};
