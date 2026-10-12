import re
import os
import urllib.request
import json

step_paths = [
    (1, r'C:\Users\bajar\.gemini\antigravity-ide\brain\e9dc45c2-ad30-4223-8fcb-2d11c4e9ca14\.system_generated\steps\508\content.md'),
    (2, r'C:\Users\bajar\.gemini\antigravity-ide\brain\e9dc45c2-ad30-4223-8fcb-2d11c4e9ca14\.system_generated\steps\536\content.md'),
    (3, r'C:\Users\bajar\.gemini\antigravity-ide\brain\e9dc45c2-ad30-4223-8fcb-2d11c4e9ca14\.system_generated\steps\538\content.md')
]

out_dir = r'C:\Users\bajar\hidayath projects\portfolio hidayathullah\scripts\pin_images'
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for idx, p in step_paths:
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8', errors='ignore') as f:
            text = f.read()
        
        # Look for images in 736x or originals, exclude known sprites
        all_imgs = re.findall(r'https://i\.pinimg\.com/(?:originals|736x)/[^\s"\'<>]+\.(?:jpg|png|webp)', text)
        valid = [img for img in all_imgs if 'd53b014d86a6b6761bf649a0ed813c2b' not in img]
        
        # Also search for "image": "..." in json-ld or meta
        meta_images = re.findall(r'"image":\s*"(https://[^"]+)"', text)
        valid_meta = [m for m in meta_images if 'pinimg' in m and 'd53b01' not in m]

        print(f"--- PIN {idx} ---")
        print("Valid images:", valid[:5])
        print("Valid meta images:", valid_meta[:5])

        target = None
        if valid_meta:
            target = valid_meta[0]
        elif valid:
            target = valid[0]

        if target:
            out_file = os.path.join(out_dir, f'pin_{idx}.jpg')
            print(f"Downloading for Pin {idx}: {target}")
            try:
                req = urllib.request.Request(target, headers=headers)
                with urllib.request.urlopen(req) as resp, open(out_file, 'wb') as out:
                    out.write(resp.read())
                print(f"Saved {out_file}: {os.path.getsize(out_file)} bytes")
            except Exception as e:
                print(f"Download error: {e}")
