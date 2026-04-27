import fs from 'fs';

const cssPath = 'c:/Users/usuario/Desktop/meraki/Merakipage/src/styles/theme.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Update --font-size from 17px to 18px (or 15px to 18px)
content = content.replace(/--font-size:\s*\d+px;/, '--font-size: 18px;');

// Inject typography overrides if they are not already there
if (!content.includes('--text-xs:')) {
  const insertText = `
    /* Incremented text scale */
    --text-xs: 0.85rem;
    --text-sm: 1rem;
    --text-base: 1.15rem;
    --text-lg: 1.3rem;
    --text-xl: 1.5rem;
    --text-2xl: 1.8rem;
    --text-3xl: 2.25rem;
    --text-4xl: 2.7rem;
    --text-5xl: 3.5rem;
    --text-6xl: 4.5rem;
    --text-7xl: 5.5rem;
  }`;
  
  content = content.replace(/--color-sidebar-ring:\s*var\(--sidebar-ring\);\s*}/, '--color-sidebar-ring: var(--sidebar-ring);' + insertText + '\n  }');
}

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Successfully updated theme.css');
