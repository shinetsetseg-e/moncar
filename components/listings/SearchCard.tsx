import { SearchIcon } from "@/components/icons";
import Button from "@/shared/components/form/Button";
import Input from "@/shared/components/form/Input";
import Select from "@/shared/components/form/Select";
import { Search } from "lucide-react";

export default function SearchCard() {
  return (
    <div className="rounded-2xl border border-gray-200 p-7 shadow-[0_8px_32px_rgba(22,119,255,.08)]">
      <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-gray-700">
        <Search className="h-4 w-4" strokeWidth={2} />
        Машин хайх
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Улс</label>
          <Select>
            <option>Бүх улс</option>
            <option>Япон</option>
            <option>БНСУ</option>
            <option>Герман</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Үйлдвэр</label>
          <Select>
            <option>Бүх үйлдвэр</option>
            <option>Toyota</option>
            <option>Lexus</option>
            <option>Hyundai</option>
            <option>BMW</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Модель</label>
          <Select>
            <option>Модель сонгоно уу</option>
            <option>Prius</option>
            <option>Land Cruiser</option>
            <option>RX450h</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Он</label>
          <Select>
            <option>Бүх он</option>
            <option>2020-2024</option>
            <option>2015-2019</option>
            <option>2010-2014</option>
          </Select>
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Үнийн хязгаар (₮)</label>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Input className="text-center" placeholder="₮0" />
          <span>—</span>
          <Input className="text-center" placeholder="₮200,000,000" />
        </div>
      </div>
      <Button href="/marketplace" size="lg" fullWidth>
        <SearchIcon />
        Хайх
      </Button>
    </div>
  );
}
