"""Blur sensitive regions in NexusAI portfolio screenshots."""

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "portfolio"
ASSETS = Path(
    r"C:\Users\admin\.cursor\projects\c-Users-admin-OneDrive-Desktop-Our-Bugops\assets"
)

DASH_SRC = ASSETS / (
    "c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_c2596f7b55a39718757a7a1fff506f90_"
    "images_image-83d25a05-f7b3-42a6-8cd3-b27249074cfd.png"
)
ORDERS_SRC = ASSETS / (
    "c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_c2596f7b55a39718757a7a1fff506f90_"
    "images_image-4a9f143e-d017-4940-8b1e-198422b39750.png"
)


def blur_region(img: Image.Image, box: tuple[int, int, int, int], radius: int = 14) -> None:
    x0, y0, x1, y1 = box
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(img.width, x1), min(img.height, y1)
    if x1 <= x0 or y1 <= y0:
        return
    region = img.crop((x0, y0, x1, y1))
    img.paste(region.filter(ImageFilter.GaussianBlur(radius=radius)), (x0, y0, x1, y1))


def blur_pct(img: Image.Image, regions: list[tuple[float, float, float, float]], radius: int = 14) -> None:
    w, h = img.size
    for x0p, y0p, x1p, y1p in regions:
        blur_region(img, (int(w * x0p), int(h * y0p), int(w * x1p), int(h * y1p)), radius=radius)


def process_dashboard(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    blur_pct(
        img,
        [
            (0.22, 0.1, 0.72, 0.2),  # welcome / administrator greeting
        ],
    )
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(dest, optimize=True)


def pixelate_region(img: Image.Image, box: tuple[int, int, int, int], pixels: int = 6) -> None:
    x0, y0, x1, y1 = box
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(img.width, x1), min(img.height, y1)
    if x1 <= x0 or y1 <= y0:
        return
    region = img.crop((x0, y0, x1, y1))
    small = region.resize(
        (max(1, region.width // pixels), max(1, region.height // pixels)),
        Image.Resampling.BILINEAR,
    )
    pixelated = small.resize(region.size, Image.Resampling.NEAREST)
    img.paste(pixelated, (x0, y0, x1, y1))


def process_orders(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    # Full CUSTOMER column in orders table (between ORDER ID and AMOUNT)
    customer_col = (int(w * 0.278), int(h * 0.535), int(w * 0.448), int(h * 0.975))
    blur_region(img, customer_col, radius=45)
    pixelate_region(img, customer_col, pixels=2)
    pixelate_region(img, customer_col, pixels=2)
    blur_region(img, customer_col, radius=40)
    img.save(dest, optimize=True)


if __name__ == "__main__":
    process_dashboard(DASH_SRC, OUT / "nexusai-dashboard.png")
    process_orders(ORDERS_SRC, OUT / "nexusai-orders.png")
    print("Saved blurred NexusAI portfolio images.")
