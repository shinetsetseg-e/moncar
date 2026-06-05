"use client";

import { featuredListings, savedListings } from "@/data/listings";
import {
  Alert,
  Badge,
  Button,
  Checkbox,
  ConfirmDialog,
  EmptyState,
  FormDialog,
  FormField,
  IconButton,
  InfoCard,
  Input,
  KeyValueGrid,
  ListingCard,
  ListingCardActions,
  ListingMeta,
  MobileNavItem,
  NavLink,
  PageHeader,
  PageIntro,
  Radio,
  SectionHeader,
  Select,
  SellerChip,
  StatusChip,
  StatusPanel,
  SuccessState,
  SummaryRow,
  Textarea,
  UploadDropzone,
} from "@/shared";
import { Bell, ChevronRight, Heart, Plus, User } from "lucide-react";
import { useState } from "react";

export default function DesignComponentsPage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const listing = featuredListings[0];
  const savedListing = savedListings[0];

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <PageHeader
        label="Дизайн компонент"
        title="MonCar нийтлэг UI kit"
        subtitle="Энд shared layer-ээс удирдагдаж буй нийтлэг UI component-уудын preview харагдана."
      />

      <div className="space-y-10">
        <section>
          <SectionHeader label="1" title="Формын компонентууд" subtitle="Формын нийтлэг control-ууд" />
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoCard title="Товч">
              <div className="flex flex-wrap gap-3">
                <Button>Үндсэн товч</Button>
                <Button variant="secondary">Хоёрдогч</Button>
                <Button variant="ghost">Саарал</Button>
                <Button loading>Ачааллаж байна</Button>
                <IconButton icon={<Heart className="h-4 w-4 text-red-500" />} label="Хадгалах" />
                <Button disabled>Идэвхгүй</Button>
              </div>
            </InfoCard>
            <InfoCard title="Field жишээ">
              <div className="space-y-4">
                <FormField hint="Идэвхтэй ашигладаг дугаараа оруулна уу" label="Утасны дугаар">
                  <Input placeholder="9999 9999" />
                </FormField>
                <FormField error="Загвар сонгоно уу" label="Модель">
                  <Select>
                    <option>Land Cruiser 200</option>
                    <option>Prius 30</option>
                    <option>Aqua</option>
                  </Select>
                </FormField>
                <FormField label="Тайлбар">
                  <Textarea placeholder="Нэмэлт тайлбар..." rows={4} />
                </FormField>
                <div className="flex flex-col gap-2">
                  <Checkbox defaultChecked>Зээлийн санал авах</Checkbox>
                  <Radio defaultChecked name="preview-radio">
                    Хэрэглэсэн
                  </Radio>
                </div>
              </div>
            </InfoCard>
          </div>
        </section>

        <section>
          <SectionHeader label="2" title="Header-ууд" subtitle="Хуудас болон section header-ууд" />
          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard title="PageHeader">
              <PageHeader
                className="mb-0"
                title="Marketplace"
                subtitle="Танд тохирох автомашинаа хайж олоорой"
                action={<Button size="sm">Зар нэмэх</Button>}
              />
            </InfoCard>
            <InfoCard title="SectionHeader">
              <SectionHeader action={<Button size="sm" variant="ghost">Бүгдийг үзэх</Button>} label="Premium зарууд" title="Онцлох машинууд" />
            </InfoCard>
            <PageIntro description="Хадгалсан, харьцуулсан, зээлийн хүсэлт илгээсэн бүх гол урсгалууд ижил хэлбэртэй танилцуулгатай байна." title="PageIntro" />
          </div>
        </section>

        <section>
          <SectionHeader label="3" title="Listing card family" subtitle="Marketplace, saved, featured карточкууд" />
          <div className="grid gap-5 xl:grid-cols-3">
            <ListingCard listing={listing} mode="featured" />
            <ListingCard listing={listing} mode="search" />
            <ListingCard listing={savedListing} mode="saved" selectable selected />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <InfoCard title="SellerChip">
              <div className="flex flex-col gap-3">
                <SellerChip sellerLabel="Dealer" sellerType="dealer" verified />
                <SellerChip sellerLabel="Хувь хүн" sellerType="private" />
              </div>
            </InfoCard>
            <InfoCard title="ListingMeta">
              <ListingMeta items={listing.meta} listingId={listing.id} />
            </InfoCard>
            <InfoCard title="ListingCardActions">
              <ListingCardActions href={`/listings/${listing.id}`} mode="saved" selectable selected sellerLabel={listing.sellerLabel} sellerType={listing.sellerType} />
            </InfoCard>
          </div>
        </section>

        <section>
          <SectionHeader label="4" title="Төлөвийн UI" subtitle="Badge, alert болон төлөвийн блокууд" />
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoCard title="Badge / StatusChip">
              <div className="flex flex-wrap gap-2">
                <Badge variant="premium">Premium</Badge>
                <Badge variant="loan">Зээл</Badge>
                <StatusChip variant="verified">Баталгаажсан</StatusChip>
                <StatusChip variant="warning">Хүлээгдэж байна</StatusChip>
                <StatusChip variant="success">Амжилттай</StatusChip>
              </div>
            </InfoCard>
            <InfoCard title="Alert / StatusPanel">
              <div className="space-y-3">
                <Alert variant="info">Одоогоор мэдээлэл алга.</Alert>
                <Alert variant="warning">Төлбөр шалгагдаж байна.</Alert>
                <StatusPanel badgeLabel="Premium" description="Таны зар хайлтын дээд хэсэгт харагдана." title="Premium эрх идэвхтэй" variant="premium" />
              </div>
            </InfoCard>
          </div>
        </section>

        <section>
          <SectionHeader label="5" title="Dialog-ууд" subtitle="Modal, confirm, form dialog preview" />
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setModalOpen(true)}>Modal preview</Button>
            <Button onClick={() => setConfirmOpen(true)} variant="secondary">
              ConfirmDialog preview
            </Button>
            <Button onClick={() => setFormDialogOpen(true)} variant="ghost">
              FormDialog preview
            </Button>
          </div>
        </section>

        <section>
          <SectionHeader label="6" title="Navigation primitives" subtitle="Top nav, icon button, mobile nav item" />
          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard title="NavLink">
              <div className="flex flex-wrap gap-2">
                <NavLink active href="/marketplace">
                  Marketplace
                </NavLink>
                <NavLink href="/services">Үйлчилгээ</NavLink>
              </div>
            </InfoCard>
            <InfoCard title="IconButton">
              <div className="flex gap-2">
                <IconButton icon={<Heart className="h-4 w-4 text-red-500" />} label="Хадгалсан" />
                <IconButton icon={<Bell className="h-4 w-4 text-yellow-500" />} label="Мэдэгдэл" />
                <IconButton icon={<User className="h-4 w-4 text-primary-500" />} label="Профайл" />
              </div>
            </InfoCard>
            <InfoCard title="MobileNavItem">
              <div className="flex items-center justify-around rounded-xl border border-gray-200 bg-white p-3">
                <MobileNavItem active href="/" icon={<Heart className="h-5 w-5" />} label="Хадгалсан" />
                <MobileNavItem href="/post" icon={<Plus className="h-5 w-5" />} label="Зар" />
              </div>
            </InfoCard>
          </div>
        </section>

        <section>
          <SectionHeader label="7" title="Data display" subtitle="Мэдээлэл харуулах нийтлэг block-ууд" />
          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard title="KeyValueGrid">
              <KeyValueGrid
                items={[
                  { label: "Он", value: "2019" },
                  { label: "Явсан км", value: "85,000 км" },
                  { label: "Хөдөлгүүр", value: "4.0L V8" },
                  { label: "Дамжуулга", value: "Автомат" },
                ]}
              />
            </InfoCard>
            <InfoCard title="InfoCard">
              <SummaryRow label="Зээлийн дүн" value="₮80,000,000" />
              <SummaryRow className="mt-3" label="Урьдчилгаа" value="₮15,000,000" />
            </InfoCard>
            <InfoCard title="SummaryRow">
              <div className="space-y-3">
                <SummaryRow label="Төлөв" value={<Badge variant="success">Амжилттай хадгалагдлаа</Badge>} />
                <SummaryRow label="Шилжилт" value={<ChevronRight className="h-4 w-4 text-gray-400" />} />
              </div>
            </InfoCard>
          </div>
        </section>

        <section>
          <SectionHeader label="8" title="Feedback states" subtitle="Empty, success, upload placeholder" />
          <div className="grid gap-5 lg:grid-cols-3">
            <EmptyState action={<Button size="sm">Marketplace руу орох</Button>} description="Одоогоор мэдээлэл алга" title="Хадгалсан машин алга" />
            <SuccessState description="Таны хүсэлт амжилттай хадгалагдлаа." title="Амжилттай хадгалагдлаа" />
            <UploadDropzone description="PNG, JPG, WEBP · 5MB хүртэл" title="Файл оруулах" />
          </div>
        </section>
      </div>

      <ConfirmDialog
        cancelLabel="Болих"
        confirmLabel="Устгах"
        confirmVariant="danger"
        description="Энэ хадгалсан машиныг жагсаалтаас устгах уу?"
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
        title="Хадгалсан машин устгах"
      />

      <FormDialog
        cancelLabel="Болих"
        open={formDialogOpen}
        onCancel={() => setFormDialogOpen(false)}
        onSubmit={() => setFormDialogOpen(false)}
        submitLabel="Илгээх"
        title="Зээлийн нөхцөл асуух"
      >
        <FormField label="Утасны дугаар">
          <Input placeholder="9900 0000" />
        </FormField>
        <FormField label="Тайлбар">
          <Textarea placeholder="Холбоо барих цаг..." rows={3} />
        </FormField>
      </FormDialog>

      <FormDialog
        cancelLabel="Хаах"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onSubmit={() => setModalOpen(false)}
        submitLabel="Ойлголоо"
        title="Marketplace component preview"
      >
        <PageIntro description="Shared layer-ийн өөрчлөлт эндээс нэг дор харагдана." title="Нэг цэгээс удирдах preview page" />
      </FormDialog>
    </div>
  );
}
