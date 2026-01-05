# Gallery Setup Instructions

## 📁 How the Gallery Works

The gallery reads project folders from **`gallery.json`** - a simple configuration file!

## 🎨 Folder Structure

```
your-website/
├── gallery.html
├── gallery.json        ← Edit this file to add projects!
└── gallery/
    ├── Union Latina-União Latina/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── 3.jpg
    ├── place-holder/
    │   ├── 1.jpg
    │   └── 2.jpg
    └── my-new-project/
        ├── 1.jpg
        └── 2.jpg
```

## ✏️ Adding Projects - Edit `gallery.json`

Open **`gallery.json`** and add folder names to the array:

```json
{
  "projects": [
    "Union Latina-União Latina",
    "place-holder",
    "my-new-project",
    "vacation-2024"
  ]
}
```

**That's it!** Save the file and refresh the gallery page.

## 📝 Rules for `gallery.json`

- **JSON array format** with folder names in quotes
- **Comma after each item** (except the last one)
- Folder names must match exactly (case-sensitive)
- Must be valid JSON syntax

## 🖼️ Image Naming

Images in each folder should be numbered:
- `1.jpg`, `2.jpg`, `3.jpg` ... up to `100.jpg`
- Supports: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- First image (1.jpg) becomes the project cover

## 🚀 Quick Start

1. **Create folder**: `/gallery/my-project/`
2. **Add images**: `1.jpg`, `2.jpg`, `3.jpg`
3. **Edit gallery.json**: Add `"my-project"` to the array
4. **Refresh page** - Done! ✨

## 💡 Example `gallery.json`

```json
{
  "projects": [
    "Union Latina-União Latina",
    "place-holder",
    "street-photography",
    "portraits-2024",
    "digital-art",
    "vacation-photos"
  ]
}
```

## ✨ Features

- **No HTML editing** - just edit gallery.json
- **Simple JSON file** - easy to manage
- **Automatic loading** - gallery reads the file on page load
- **Beautiful cards** - first image becomes the cover
- **Full lightbox** - click photos to view full-screen
- **Keyboard navigation** - arrow keys to browse

## 🔧 Troubleshooting

**Projects not showing?**
- Make sure `gallery.json` is in the same directory as `gallery.html`
- Check that JSON syntax is valid (use a JSON validator)
- Folder names must match exactly (case-sensitive)
- Make sure folders contain numbered images (1.jpg, 2.jpg, etc.)

**Images not loading?**
- Verify image files are named with numbers (1, 2, 3...)
- Check file extensions (.jpg, .png, etc.)
- Images must be in `/gallery/folder-name/`

## 📋 JSON Format Notes

- Always use double quotes `"` not single quotes `'`
- Don't forget commas between items
- No comma after the last item
- Use a JSON validator if you get errors

Before: Edit HTML code ❌  
Now: Edit simple gallery.json file ✅
