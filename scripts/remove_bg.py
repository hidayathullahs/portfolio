from PIL import Image, ImageFilter
from collections import deque

def remove_white_bg(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Visited matrix for flood fill from edges
    visited = [[False for _ in range(height)] for _ in range(width)]
    queue = deque()
    
    # Enqueue all boundary pixels that are near white
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
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
        # Check if pixel is light background
        # Background is white/light grey (r, g, b > tolerance or average > tolerance)
        avg = (r + g + b) / 3.0
        is_bg = (r > 225 and g > 225 and b > 225) or (avg > 230 and abs(r - g) < 20 and abs(g - b) < 20)
        
        # In shirt collar area, ensure we only remove connected outside background
        if is_bg:
            mask_pixels[cx, cy] = 0
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                    queue.append((nx, ny))
                    
    # Smooth edges with slight blur/feathering
    smooth_mask = mask.filter(ImageFilter.GaussianBlur(radius=1.2))
    img.putalpha(smooth_mask)
    img.save(output_path, "PNG")
    print("Saved transparent image to:", output_path)

if __name__ == "__main__":
    remove_white_bg("src/assets/profile.jpg", "src/assets/profile.png")
