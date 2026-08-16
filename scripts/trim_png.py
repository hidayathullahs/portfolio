from PIL import Image

def trim_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        trimmed = img.crop(bbox)
        trimmed.save(output_path, "PNG")
        print(f"Trimmed image from {img.size} to {trimmed.size}")
    else:
        img.save(output_path, "PNG")

if __name__ == "__main__":
    trim_transparent("src/assets/profile.png", "src/assets/profile.png")
