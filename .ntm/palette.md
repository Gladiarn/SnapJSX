# Project Palette & Config

## 🛠️ Project Commands
- `make build` : Build the project.
- `go test ./...` : Run tests.

## 🎨 Semantic Design Tokens
Use these CSS variables in Tailwind to support Light/Dark mode.

| Token | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| --bg-main | #FFFFFF | #0A0A0A |
| --text-main | #0A0A0A | #EDEDED |
| --accent | #FFD700 | #FFD700 |
| --border | #E5E7EB | #262626 |

## 🖌️ Tailwind Configuration
Ensure these are mapped in `tailwind.config.ts`:
- `background: 'var(--bg-main)'`
- `foreground: 'var(--text-main)'`
- `accent: 'var(--accent)'`