import Link from "next/link";
import { footerColumns } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 pb-8 pt-14 text-gray-400 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[280px_repeat(3,1fr)]">
          <div>
            <div className="mb-3 text-[22px] font-bold text-white">МОНКАР</div>
            <div className="text-sm leading-[1.6]">
              Монголын хамгийн том, найдвартай машины худалдааны платформ. Машин хайх, зарах, зээл авах бүх боломж нэг дороо.
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <div className="mb-4 text-[13px] font-bold uppercase tracking-[1px] text-white">{column.title}</div>
              {column.links.map((link) =>
                link.href ? (
                  <Link key={link.label} href={link.href} className="mb-2 block text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.label} className="mb-2 block text-sm text-gray-400">
                    {link.label}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
        <hr className="my-6 border-0 border-t border-gray-800" />
        <div className="flex flex-col justify-between gap-2 text-[13px] md:flex-row md:items-center">
          <span>© 2024 МОНКАР. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>Нууцлалын бодлого · Үйлчилгээний нөхцөл</span>
        </div>
      </div>
    </footer>
  );
}
