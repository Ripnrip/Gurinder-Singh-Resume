# 🎭 The Image-to-SVG Alchemist

A mystical command-line tool that transmutes raster images (like PNGs and JPGs) into tiny, optimized vector SVGs.

> "From pixels coarse, a vector's grace,
> This script bestows a timeless face.
> With algorithms sharp and logic keen,
> A tiny, perfect SVG is seen."
>
> - The Digital Metaphor Maestro

## 🔮 The Spell (Usage)

To perform the transmutation, invoke the script from the root of the project with a URL to an image and a desired output path.

```bash
./scripts/image-to-svg <image-url> <output-path.svg>
```

### ✨ Example Incantation

```bash
./scripts/image-to-svg https://raw.githubusercontent.com/ReactiveX/RxSwift/main/assets/RxSwift_Logo.png RxSwift_Logo.svg
```

This will conjure a new file, `RxSwift_Logo.svg`, in your project root.

## 📜 Ingredients (Dependencies)

This script requires a few magical components to function. They are managed in the root `package.json` file.

- `axios`: To fetch the image from the ethereal web.
- `potrace`: The powerful tracing engine that converts pixels to paths, with support for color posterization.
- `svgo`: The optimization spell that shrinks the final SVG to a "tiny" size.

If you have cloned this repository anew, you will need to install these dependencies:

```bash
npm install
```
