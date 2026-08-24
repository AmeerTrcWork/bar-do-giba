const fs = require('fs');
const path = require('path');

// Load data.js
const dataFileContent = fs.readFileSync(path.join(__dirname, 'js', 'data.js'), 'utf8');
eval(dataFileContent); // Will define RESTAURANT_INFO, MENU_ITEMS, REVIEWS, TRANSLATIONS

console.log('--- Testing i18n Data Completeness ---');

const langs = ['pt', 'en', 'ar'];
let errors = [];

// 1. Check TRANSLATIONS keys across all languages
const ptKeys = Object.keys(TRANSLATIONS.pt);
const enKeys = Object.keys(TRANSLATIONS.en);
const arKeys = Object.keys(TRANSLATIONS.ar);

console.log(`Key counts: PT=${ptKeys.length}, EN=${enKeys.length}, AR=${arKeys.length}`);

ptKeys.forEach(k => {
  if (!TRANSLATIONS.en[k]) errors.push(`Missing in EN: ${k}`);
  if (!TRANSLATIONS.ar[k]) errors.push(`Missing in AR: ${k}`);
});

// 2. Read index.html and find all data-i18n attributes
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const dataI18nMatches = [...htmlContent.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
console.log(`Found ${dataI18nMatches.length} data-i18n usages in index.html`);

const uniqueHtmlKeys = [...new Set(dataI18nMatches)];
uniqueHtmlKeys.forEach(k => {
  langs.forEach(l => {
    if (TRANSLATIONS[l][k] === undefined) {
      errors.push(`HTML key "${k}" is missing in TRANSLATIONS.${l}`);
    }
  });
});

// 3. Check MENU_ITEMS completeness
console.log(`Checking ${MENU_ITEMS.length} menu items...`);
MENU_ITEMS.forEach(item => {
  langs.forEach(l => {
    if (!item.translations[l]) {
      errors.push(`Menu item ${item.id} missing translations for ${l}`);
    } else {
      if (!item.translations[l].name) errors.push(`Menu item ${item.id} (${l}) missing name`);
      if (!item.translations[l].desc) errors.push(`Menu item ${item.id} (${l}) missing desc`);
    }
  });
});

// 4. Check REVIEWS completeness
console.log(`Checking ${REVIEWS.length} reviews...`);
REVIEWS.forEach((rev, idx) => {
  langs.forEach(l => {
    if (!rev.quote[l]) errors.push(`Review #${idx + 1} (${rev.author}) missing quote for ${l}`);
    if (typeof rev.role === 'object' && !rev.role[l]) errors.push(`Review #${idx + 1} (${rev.author}) missing role for ${l}`);
  });
});

console.log('--- Test Results ---');
if (errors.length === 0) {
  console.log('✅ ALL TRANSLATIONS ARE 100% COMPLETE AND CONSISTENT IN PT-BR, EN, AND AR!');
} else {
  console.error(`❌ Found ${errors.length} issues:`);
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}
