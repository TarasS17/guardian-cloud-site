#!/usr/bin/env python3
"""
Converts translations from all_translations.ts format to i18n.ts format
"""

import re
import json

# Read the all_translations.ts file
with open('translations/all_translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Language mappings
langs = {
    'pl': ('Polish', 'POLISH'),
    'it': ('Italian', 'ITALIAN'),
    'ua': ('Ukrainian', 'UKRAINIAN'),
    'tr': ('Turkish', 'TURKISH'),
    'es': ('Spanish', 'SPANISH'),
    'in': ('Hindi', 'HINDI'),
    'el': ('Greek', 'GREEK'),
    'cs': ('Czech', 'CZECH'),
    'bg': ('Bulgarian', 'BULGARIAN'),
    'sr': ('Serbian', 'SERBIAN')
}

# Extract each language section
def extract_lang_section(lang_code, content):
    # Try to find the pattern "// LANGUAGE_NAME (code)" followed by the object
    patterns = [
        rf"// {langs[lang_code][1]} \({lang_code}\)\s*\n\s*{lang_code}:\s*{{([\s\S]*?)\n  }},\n\n  //",
        rf"{lang_code}:\s*{{([\s\S]*?)\n  }},\n\n  //",
    ]

    for pattern in patterns:
        match = re.search(pattern, content)
        if match:
            return match.group(1)
    return None

# Generate TypeScript function for each language
output_functions = []

for lang_code, (lang_name, lang_upper) in langs.items():
    section = extract_lang_section(lang_code, content)
    if section:
        func = f"""
// {lang_name} translations
const get{lang_name.capitalize()}Translations = (): TranslationRecord => ({{
{section}
}});"""
        output_functions.append(func)
        print(f"✓ Generated function for {lang_name}")
    else:
        print(f"✗ Could not find section for {lang_name}")

# Write output
output = "\n".join(output_functions)
print("\n" + "="*60)
print("Generated functions ready to be inserted into i18n.ts")
print("="*60)

with open('generated_translations.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print("\nOutput written to: generated_translations.ts")
