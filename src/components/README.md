# Component Architecture - Atomic Design Pattern

This project follows the **Atomic Design** methodology, organizing components into a clear hierarchy from smallest to largest building blocks.

## Structure

```
components/
├── atoms/          # Basic building blocks
├── molecules/      # Simple component groups
├── organisms/      # Complex components
└── ui/            # shadcn/ui components
```

## Atoms

The smallest, most basic components that cannot be broken down further.

- **Logo** - Brand logo component with size variants
- **NavLink** - Navigation link with active state detection
- **SocialIcon** - Social media icon link component

## Molecules

Simple combinations of atoms that form functional units.

- **Navigation** - Navigation menu built from NavLink atoms
- **SocialLinks** - Social media links group built from SocialIcon atoms

## Organisms

Complex components that combine molecules and atoms to form distinct sections.

- **Header** - Site header with logo, navigation, and CTA button
- **Footer** - Site footer with logo, multiple navigation sections, and social links

## Usage Examples

### Using Atoms Directly

```tsx
import { Logo } from "@/components/atoms";
import { NavLink } from "@/components/atoms";

<Logo size="lg" />
<NavLink href="/about">About</NavLink>
```

### Using Molecules

```tsx
import { Navigation } from "@/components/molecules";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

<Navigation items={navItems} orientation="horizontal" />
```

### Using Organisms

```tsx
import { Header, Footer } from "@/components/organisms";

<Header 
  navItems={customNavItems}
  showCTA={true}
  ctaLabel="Book Now"
/>
<Footer />
```

## Design Principles

1. **Composability** - Components are designed to be combined
2. **Reusability** - Atoms and molecules can be reused across organisms
3. **Maintainability** - Clear hierarchy makes it easy to find and update components
4. **Scalability** - Easy to add new components at any level

## Best Practices

- Keep atoms simple and focused on a single responsibility
- Molecules should combine related atoms logically
- Organisms represent complete UI sections
- Use TypeScript interfaces for all component props
- Follow the existing naming conventions (PascalCase for components)

