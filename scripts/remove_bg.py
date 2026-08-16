from PIL import Image, ImageFilter
from collections import deque

def remove_white_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    visited = [[False for _ in range(height)] for _ in range(width)]
    queue = deque()
    
    # Enqueue top edge and upper side edges where studio background is located
    for x in range(width):
        queue.append((x, 0))
    for y in range(int(height * 0.85)):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    mask = Image.new("L", (width, height), 255)
    mask_pixels = mask.load()
    
    while queue:
        cx, cy = queue.popleft()
        if visited[cx][cy]:
            continue
        visited[cx][cy] = True
        
        r, g, b, a = pixels[cx, cy]
        # Background is white/light grey (r, g, b > tolerance and neutral)
        avg = (r + g + b) / 3.0
        # Check if background
        is_bg = (r > 215 and g > 215 and b > 215) and (abs(r - g) < 25 and abs(g - b) < 25)
        
        if is_bg:
            mask_pixels[cx, cy] = 0
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = cx + dx, cy + dy
                # Don't let flood fill go into lower shirt area
                if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                    # Stop flood fill from penetrating into the inner neck/chest
                    # The neck/chest is in the central region x in [0.25*w, 0.75*w] and y > 0.4*h
                    # Inside the neck/chest, don't cross into shirt
                    queue.append((nx, ny))
                    
    # Smooth edges with slight blur/feathering
    smooth_mask = mask.filter(ImageFilter.GaussianBlur(radius=1.0))
    img.putalpha(smooth_mask)
    img.save(output_path, "PNG")
    print("Saved clean transparent image to:", output_path)

if __name__ == "__main__":
    remove_white_bg("src/assets/profile.jpg", "src/assets/profile.png")
