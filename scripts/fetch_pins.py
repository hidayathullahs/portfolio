import urllib.request
import re
import json

urls = [
    'https://in.pinterest.com/pin/120049146314520716/',
    'https://in.pinterest.com/pin/341429215525201108/',
    'https://in.pinterest.com/pin/1136666393478982804/'
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            title = re.search(r'<title>(.*?)</title>', html)
            og_title = re.search(r'<meta[^>]*property=["\']og:title["\'][^>]*content=["\'](.*?)["\']', html)
            og_desc = re.search(r'<meta[^>]*property=["\']og:description["\'][^>]*content=["\'](.*?)["\']', html)
            og_img = re.search(r'<meta[^>]*property=["\']og:image["\'][^>]*content=["\'](.*?)["\']', html)
            
            # also look for schema json
            schemas = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
            
            print('URL:', url)
            if title: print('Title:', title.group(1))
            if og_title: print('OG Title:', og_title.group(1))
            if og_desc: print('OG Desc:', og_desc.group(1))
            if og_img: print('OG Image:', og_img.group(1))
            for s in schemas:
                try:
                    data = json.loads(s)
                    print('Schema name:', data.get('name'))
                    print('Schema description:', data.get('description'))
                    print('Schema image:', data.get('image'))
                except:
                    pass
            print('-'*40)
    except Exception as e:
        print('Error fetching', url, e)
