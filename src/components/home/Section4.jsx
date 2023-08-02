import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";


const services = [

  {
    title: "บริหารร้านได้ทุกที่ทุกเวลา",
    image: "/icons/Realtime Adjustment.png",
    description:
      "คุณจะอยู่ที่ไหนก็สามารถเข้าถึงธุรกิจของคุณได้ตลอดเวลา",
  },
  {
    title: "ใช้งานง่าย",
    image: "/icons/Easy To Use.png",
    description:
      "ให้การบริหารร้านเป็นเรื่อง่ายด้วยระบบที่ดีขึ้น",
  },
  {
    title: "ระบบรายงานอัจฉริยะ",
    image: "/icons/Report System.png",
    description:
      "มองภาพรวมธุรกิจได้อย่างละเอียดในทันที",
  },
  {
    title: "บริการหลังการขาย",
    image: "/icons/Tecnical Support.png",
    description:
      "เรามีทีมงานพร้อมให้คำปรึกษาตลอดเวลา",
  },
];

const HomeSection2 = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)]">
      <ConstraintedBox classNames="p-4 py-16">
        <h2 className="text-center mx-auto" style={{fontWeight:"lighter"}}>
        <p style={{fontSize:28}}>ใช้ง่ายปลอดภัย</p><span className="ml-2 text-[var(--primaryColor)]">จัดการได้เร็วกว่าเดิม</span>
        </h2>

        <WrappedBox classes="justify-items-center sm:grid-cols-4 mt-12">
          {services.map((service, index) => {
            return (
              <Column
                key={`service-${index}`}
                classes="bg-[var(--dialogColor1)] p-4 items-center text-center"
              >
                <Image
                  src={service.image}
                  alt={`service-${index}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  priority
                  placeholder="blur"
                  blurDataURL={service.image}
                  style={{
                    objectFit: "cover",
                    width: "5rem",
                    height: "5rem",
                    aspectRatio: "1 / 1",
                  }}
                />

                <h5 className="font-bold mt-4">{service.title}</h5>

                <p className="mt-8">{service.description}</p>
              </Column>
            );
          })}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
