# Primary Button

A minimalist, modern call-to-action button for the SnapJSX design system.

## Usage

```tsx
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Sparkles } from "lucide-react";

export default function MyPage() {
  return (
    <PrimaryButton icon={Sparkles} onClick={() => console.log("Clicked!")}>
      Get Started
    </PrimaryButton>
  );
}
```

## Design Intent
The Primary Button is designed to be the most prominent element on a page. It uses a high-contrast background and a dynamic shadow that expands on hover, providing tactile feedback without being overly "fancy".
