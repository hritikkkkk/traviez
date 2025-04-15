import DestinationCarousel from "./DestinationCarousel";

export default function WildLife() {
  return (
    <DestinationCarousel
      title="Into the Wild: Exploring India's National Parks and Wildlife Sanctuaries"
      destinations={NationalPark}
    />
  );
}

const NationalPark = [
  {
    title: "Sariska Tiger Reserve",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Alwar, Rajasthan",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-2a1256a1-2170-4465-984d-b33b10f0322a-tripcase-65178.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-2efef6b7-adca-46d1-bf1b-bb1889d243a7-tripcase-36105.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-2efef6b7-adca-46d1-bf1b-bb1889d243a7-tripcase-35412.jpg",
    ],
  },
  {
    title: "Gir National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Chitrod, Gujarat",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-afb1d4be-0fad-4d23-a85c-9dba1f789d97-tripcase-14620.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-afb1d4be-0fad-4d23-a85c-9dba1f789d97-tripcase-20083.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-afb1d4be-0fad-4d23-a85c-9dba1f789d97-tripcase-75094.jpg",
    ],
  },
  {
    title: "Jim Corbett National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Uttarakhand",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-f65d243c-00ea-4e91-9b90-fefb01e79d6c-tripcase-1564.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-f65d243c-00ea-4e91-9b90-fefb01e79d6c-tripcase-77485.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-f65d243c-00ea-4e91-9b90-fefb01e79d6c-tripcase-63348.jpg",
    ],
  },
  {
    title: "Ranthambore National Park",
    priceRange: "12000 - 15000",
    author: "Traviez",
    days: "3",
    location: "Sawai Madhopur, Rajasthan",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-ed3f91dd-2397-4cf8-a29b-5e57bad603bd-tripcase-49244.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-ed3f91dd-2397-4cf8-a29b-5e57bad603bd-tripcase-77565.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-ed3f91dd-2397-4cf8-a29b-5e57bad603bd-tripcase-40219.jpg",
    ],
  },
  {
    title: "Sundarban National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Gosaba, West Bengal",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-294cf250-3090-4461-98ea-a71e964e6e78-tripcase-79245.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-294cf250-3090-4461-98ea-a71e964e6e78-tripcase-35625.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-294cf250-3090-4461-98ea-a71e964e6e78-tripcase-13294.jpg",
    ],
  },
  {
    title: "Kaziranga National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Golaghat, Assam",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d6ca53bf-ac06-4032-8e77-f97d2d851cdf-tripcase-34442.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d6ca53bf-ac06-4032-8e77-f97d2d851cdf-tripcase-34643.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-d6ca53bf-ac06-4032-8e77-f97d2d851cdf-tripcase-61666.jpg",
    ],
  },
  {
    title: "BandhavGarh National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Umaria, Madhya Pradesh",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-b1da716b-f32d-4b96-80e6-ee518a8007de-tripcase-90221.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-b1da716b-f32d-4b96-80e6-ee518a8007de-tripcase-83602.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-b1da716b-f32d-4b96-80e6-ee518a8007de-tripcase-52805.jpg",
    ],
  },
  {
    title: "Periyar National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Kochi, Kerala",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-c07c2c89-0643-4a08-94ac-24884964648d-tripcase-59262.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-c07c2c89-0643-4a08-94ac-24884964648d-tripcase-48357.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-c07c2c89-0643-4a08-94ac-24884964648d-tripcase-96723.jpg",
    ],
  },
  {
    title: "Hemis National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Ladakh, Jammu and Kashmir ",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-847bcccc-74fd-43dc-9243-79c03cf658a8-tripcase-5543.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-847bcccc-74fd-43dc-9243-79c03cf658a8-tripcase-74654.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-847bcccc-74fd-43dc-9243-79c03cf658a8-tripcase-40372.jpg",
    ],
  },
  {
    title: "Kanha National Park",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Mandla, Madhya Pradesh ",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-934baaa7-70c1-4e92-93ba-54a2f550964d-tripcase-59561.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-934baaa7-70c1-4e92-93ba-54a2f550964d-tripcase-39715.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/5aefc5c9-d3ff-4244-8c43-b70036d1982a-934baaa7-70c1-4e92-93ba-54a2f550964d-tripcase-22255.jpg",
    ],
  },
];
