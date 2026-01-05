# Gallery Setup Instructions

## 📁 How the Gallery Works

The gallery reads project folders from a simple **`gallery.md`** file - no HTML editing required!

## 🎨 Folder Structure

```
your-website/
├── gallery.html
├── gallery.md          ← Edit this file to add projects!
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

## ✏️ Adding Projects - Edit `gallery.md`

Open **`gallery.md`** and add folder names, one per line:

```markdown
# Gallery Projects

Add your project folder names below, one per line.
Lines starting with # are comments and will be ignored.

Union Latina-União Latina
place-holder
my-new-project
vacation-2024
```

**That's it!** Save the file and refresh the gallery page.

## 📝 Rules for `gallery.md`

- **One folder name per line**
- Lines starting with `#` are comments (ignored)
- Empty lines are ignored
- Folder names must match exactly (case-sensitive)
- No quotes or special formatting needed

## 🖼️ Image Naming

Images in each folder should be numbered:
- `1.jpg`, `2.jpg`, `3.jpg` ... up to `100.jpg`
- Supports: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- First image (1.jpg) becomes the project cover

## 🚀 Quick Start

1. **Create folder**: `/gallery/my-project/`
2. **Add images**: `1.jpg`, `2.jpg`, `3.jpg`
3. **Edit gallery.md**: Add line `my-project`
4. **Refresh page** - Done! ✨

## 💡 Example `gallery.md`

```markdown
# My Gallery Projects
# Add one folder name per line

Union Latina-União Latina
place-holder
street-photography
portraits-2024
digital-art
vacation-photos

# You can add comments anywhere with #
# Empty lines are fine too
```

## ✨ Features

- **No HTML editing** - just edit gallery.md
- **Simple text file** - easy to manage
- **Comments supported** - document your projects
- **Automatic loading** - gallery reads the file on page load
- **Beautiful cards** - first image becomes the cover
- **Full lightbox** - click photos to view full-screen
- **Keyboard navigation** - arrow keys to browse

## 🔧 Troubleshooting

**Projects not showing?**
- Make sure `gallery.md` is in the same directory as `gallery.html`
- Check folder names match exactly (case-sensitive)
- Make sure folders contain numbered images (1.jpg, 2.jpg, etc.)

**Images not loading?**
- Verify image files are named with numbers (1, 2, 3...)
- Check file extensions (.jpg, .png, etc.)
- Images must be in `/gallery/folder-name/`

## 📋 No Configuration Files to Edit

Before: Edit HTML code to add projects ❌  
Now: Edit simple `gallery.md` text file ✅

