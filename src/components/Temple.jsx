import { useRef } from "react";

import TravelCard from "./TravelCard";
import ScrollHeader from "./ScrollHeader";

export default function Temple() {
  const scrollRef = useRef(null);

  const traviez_logo =
    "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-57898260-43407130-53635111-95758831-62159716-01-29-2024-14-12-10-profilePic.jpg";

  return (
    <section className=" md:px-6 lg:px-8 bg-gray-50 py-8 !px-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="px-2">
          <ScrollHeader
            title="Sacred Journey: Exploring India's Spiritual Destinations and Holy Sites"
            scrollRef={scrollRef}
          />
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
            WebkitOverflowScrolling: "touch",
          }}
        >
          <TravelCard
            title="Badrinath"
            subtitle="The spiritual path"
            priceRange="8000 - 10000"
            duration={2}
            location="Badrinath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-95843.jpg",
                alt: "Badrinath mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-69129.jpg",
                alt: "Badrinath temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-47493.jpg",
                alt: "River view",
              },
            ]}
          />

          <TravelCard
            title="Haridwar"
            subtitle="Gateway to God"
            priceRange="8000 - 9000"
            duration={2}
            location="Haridwar"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-33874.jpg",
                alt: "Haridwar river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-24607.jpg",
                alt: "Haridwar night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-66341.jpg",
                alt: "Haridwar temple view",
              },
            ]}
          />

          <TravelCard
            title="Varanasi"
            subtitle="City of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Varanasi"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-17322.jpg",
                alt: "Varanasi river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-48819.jpg",
                alt: "Varanasi night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-3532.jpg",
                alt: "Varanasi temple view",
              },
            ]}
          />

          <TravelCard
            title="Vaishno Devi"
            subtitle="Shakti Sthal "
            priceRange="8000 - 10000"
            duration={2}
            location="Katra"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-50657.jpg",
                alt: "Vaishno Devi mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-69891.jpg",
                alt: "Vaishno Devi temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-90032.jpg",
                alt: "Vaishno Devi River view",
              },
            ]}
          />

          <TravelCard
            title="RishiKesh"
            subtitle="Yoga Nagri"
            priceRange="8000 - 9000"
            duration={2}
            location="RishiKesh"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-46791.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-14285.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-11987.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
          <TravelCard
            title="Kedarnath"
            subtitle="The Abode of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Kedarnath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-75971.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-23155.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-61426.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
          <TravelCard
            title="Badrinath"
            subtitle="The spiritual path"
            priceRange="8000 - 10000"
            duration={2}
            location="Badrinath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-95843.jpg",
                alt: "Badrinath mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-69129.jpg",
                alt: "Badrinath temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-47493.jpg",
                alt: "River view",
              },
            ]}
          />

          <TravelCard
            title="Haridwar"
            subtitle="Gateway to God"
            priceRange="8000 - 9000"
            duration={2}
            location="Haridwar"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-33874.jpg",
                alt: "Haridwar river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-24607.jpg",
                alt: "Haridwar night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-66341.jpg",
                alt: "Haridwar temple view",
              },
            ]}
          />

          <TravelCard
            title="Varanasi"
            subtitle="City of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Varanasi"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-17322.jpg",
                alt: "Varanasi river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-48819.jpg",
                alt: "Varanasi night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-3532.jpg",
                alt: "Varanasi temple view",
              },
            ]}
          />

          <TravelCard
            title="Vaishno Devi"
            subtitle="Shakti Sthal "
            priceRange="8000 - 10000"
            duration={2}
            location="Katra"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-50657.jpg",
                alt: "Vaishno Devi mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-69891.jpg",
                alt: "Vaishno Devi temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-90032.jpg",
                alt: "Vaishno Devi River view",
              },
            ]}
          />

          <TravelCard
            title="RishiKesh"
            subtitle="Yoga Nagri"
            priceRange="8000 - 9000"
            duration={2}
            location="RishiKesh"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-46791.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-14285.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-11987.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
          <TravelCard
            title="Kedarnath"
            subtitle="The Abode of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Kedarnath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-75971.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-23155.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-61426.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
          <TravelCard
            title="Badrinath"
            subtitle="The spiritual path"
            priceRange="8000 - 10000"
            duration={2}
            location="Badrinath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-95843.jpg",
                alt: "Badrinath mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-69129.jpg",
                alt: "Badrinath temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-8339f849-6c7f-42dd-ae90-c0298b6d1b1c-tripcase-47493.jpg",
                alt: "River view",
              },
            ]}
          />

          <TravelCard
            title="Haridwar"
            subtitle="Gateway to God"
            priceRange="8000 - 9000"
            duration={2}
            location="Haridwar"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-33874.jpg",
                alt: "Haridwar river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-24607.jpg",
                alt: "Haridwar night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3d2d8cda-5314-41a6-ba1c-9432b5926e1a-tripcase-66341.jpg",
                alt: "Haridwar temple view",
              },
            ]}
          />

          <TravelCard
            title="Varanasi"
            subtitle="City of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Varanasi"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-17322.jpg",
                alt: "Varanasi river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-48819.jpg",
                alt: "Varanasi night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d28181dc-59f8-4172-95c3-a9f18e6cceb9-tripcase-3532.jpg",
                alt: "Varanasi temple view",
              },
            ]}
          />

          <TravelCard
            title="Vaishno Devi"
            subtitle="Shakti Sthal "
            priceRange="8000 - 10000"
            duration={2}
            location="Katra"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-50657.jpg",
                alt: "Vaishno Devi mountain view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-69891.jpg",
                alt: "Vaishno Devi temple",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-23edde93-5292-4c1f-adc3-797bc35c94cf-tripcase-90032.jpg",
                alt: "Vaishno Devi River view",
              },
            ]}
          />

          <TravelCard
            title="RishiKesh"
            subtitle="Yoga Nagri"
            priceRange="8000 - 9000"
            duration={2}
            location="RishiKesh"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-46791.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-14285.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-3af6cc8c-b00c-410a-8697-5a2a0354ff49-tripcase-11987.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
          <TravelCard
            title="Kedarnath"
            subtitle="The Abode of Lord Shiva"
            priceRange="8000 - 9000"
            duration={2}
            location="Kedarnath"
            logoSrc={traviez_logo}
            images={[
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-75971.jpg",
                alt: "RishiKesh river ceremony",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-23155.jpg",
                alt: "RishiKesh night view",
              },
              {
                src: "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d1fcda82-f0eb-4940-b288-7b3341fb5738-tripcase-61426.jpg",
                alt: "RishiKesh temple view",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
