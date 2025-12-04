import { Facebook, Instagram, Twitter, Youtube, LucideIcon } from "lucide-react";
import { SocialIcon } from "@/components/atoms/SocialIcon";
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "facebook",
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
  },
  {
    platform: "instagram",
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
  {
    platform: "twitter",
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    platform: "youtube",
    href: "https://youtube.com",
    icon: Youtube,
    label: "YouTube",
  },
];

export function SocialLinks({
  links = defaultSocialLinks,
  className,
  size = "md",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <SocialIcon
          key={link.platform}
          href={link.href}
          icon={link.icon}
          label={link.label}
          size={size}
        />
      ))}
    </div>
  );
}

