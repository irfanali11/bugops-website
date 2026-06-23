"""Blur sensitive UI regions in portfolio screenshots before publish."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "portfolio"

ASSETS = Path(
    r"C:\Users\admin\.cursor\projects\c-Users-admin-OneDrive-Desktop-Our-Bugops\assets"
)

HERO_SRC = ASSETS / (
    "c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_c2596f7b55a39718757a7a1fff506f90_"
    "images_Screenshot_2026-06-23_000315-d728b1f6-c806-4f82-bbb0-b9bc97979357.png"
)
DEST_SRC = ASSETS / (
    "c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_c2596f7b55a39718757a7a1fff506f90_"
    "images_Screenshot_2026-06-23_000224-a76fd47e-9656-4e4a-9e5e-73a2cc7ba879.png"
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


def process_hero(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    blur_pct(
        img,
        [
            (0.52, 0.0, 1.0, 0.2),   # wishlist, cart, locale, login
            (0.0, 0.0, 0.22, 0.18),  # brand logo text
            (0.02, 0.12, 0.38, 0.82),  # continue-planning card + pricing
        ],
    )
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(dest, optimize=True)


def process_destinations(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    blur_pct(
        img,
        [
            (0.52, 0.0, 1.0, 0.18),  # profile, wishlist, cart, locale
            (0.0, 0.0, 0.22, 0.16),  # brand logo text
        ],
    )
    img.save(dest, optimize=True)


if __name__ == "__main__":
    process_hero(HERO_SRC, OUT / "turkey-ai-itinerary-hero.png")
    process_destinations(DEST_SRC, OUT / "turkey-ai-itinerary-destinations.png")
    print("Saved blurred portfolio images.")
