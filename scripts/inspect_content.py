import re
import os

path = r'C:\Users\bajar\.gemini\antigravity-ide\brain\e9dc45c2-ad30-4223-8fcb-2d11c4e9ca14\.system_generated\steps\508\content.md'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    print('File length:', len(text))
    
    # search for pin images
    images = re.findall(r'https://i\.pinimg\.com/[^\s"\'<>]+', text)
    print('Found images:', len(images))
    for img in set(images):
        print('Image:', img)
        
    # search for titles/headings
    headings = re.findall(r'<h[1-3][^>]*>(.*?)</h[1-3]>', text)
    print('Headings:', headings)
    
    # search for JSON data
    scripts = re.findall(r'\{[^{}]*?"title"[^{}]*?\}', text)
    for s in scripts[:5]:
        print('JSON snippet:', s)
else:
    print('File not found')
