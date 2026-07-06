import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-vandeleuv.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <img
        src={logoAsset.url}
        alt="Rijschool Van De Leuv logo"
        className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
        width={44}
        height={44}
        loading="eager"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
          Rijschool Van De Leuv
        </span>
        <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
          Veilig · Zelfverzekerd · Met plezier
        </span>
      </span>
    </Link>
  );
}
