interface MenuItemProps {
  title: string;
  href?: string;
}

export function MenuItem({ title, href }: MenuItemProps) {
  return (
    <li>
      <a
        href={href}
        className="block p-4 uppercase text-neutral-300 text-sm"
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, .1)",
          borderRight: "1px solid rgba(0, 0, 0, .4)",
        }}
      >
        {title}
      </a>
    </li>
  );
}
