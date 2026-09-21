// Read before first paint; the provider adopts these values after hydration.
export const preferenceScript = `(function(){try{var l=localStorage.getItem('saybir-lang'),t=localStorage.getItem('saybir-theme');document.documentElement.lang=l==='en'?'en':'tr';document.documentElement.dataset.theme=t==='light'||t==='mono'?'light':'dark'}catch(e){}})()`;

