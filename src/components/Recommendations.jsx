import DestinationCarousel from "./DestinationCarousel";

export default function Recommendations() {
  return (
    <DestinationCarousel
      title="April Recommendations"
      destinations={recommendations}
    />
  );
}

const recommendations = [
  {
    title: "A Romantic Escape to Coonoor: Embrace the Charm",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Coonoor",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-0d5948a9-d5e4-44c0-ad65-14ad39d68505-destination-8128.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-0d5948a9-d5e4-44c0-ad65-14ad39d68505-destination-75545.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-0d5948a9-d5e4-44c0-ad65-14ad39d68505-destination-16473.jpg",
    ],
  },
  {
    title:
      "Unleash Your Inner Adventurer: An Epic 5-Day Journey through Leh-Ladakh from Delhi",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Leh Ladakh",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-42770ffc-359a-4fbc-ad5b-ca2f4c57bf6b-destination-39588.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-42770ffc-359a-4fbc-ad5b-ca2f4c57bf6b-destination-15940.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-42770ffc-359a-4fbc-ad5b-ca2f4c57bf6b-destination-49104.jpg",
    ],
  },
  {
    title: "Kashmir: Unveiling Hidden Gems - from Delhi",
    priceRange: "10000 - 12000",
    author: "Traviez",
    days: "3",
    location: "Kashmir",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-a9581edb-7f2c-4e20-b241-c8a326b2ae4f-tripcase-65664.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-a9581edb-7f2c-4e20-b241-c8a326b2ae4f-tripcase-49136.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/5aefc5c9-d3ff-4244-8c43-b70036d1982a-a9581edb-7f2c-4e20-b241-c8a326b2ae4f-tripcase-67215.jpg",
    ],
  },
  {
    title:
      "Unforgettable Friends Adventure: Exploring the Enchanting Landscapes of Himachal Pradesh from Banglore",
    priceRange: "40000 - 45000",
    author: "Traviez",
    days: "3",
    location: "Himachal Pradesh",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-3299025f-c4c0-47cd-a723-19c048910776-destination-97464.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-3299025f-c4c0-47cd-a723-19c048910776-destination-67860.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-3299025f-c4c0-47cd-a723-19c048910776-destination-10518.jpg",
    ],
  },
  {
    title: "Romantic Getaway to Manali: A Journey of Love and Serenity",
    priceRange: "15000 - 18000",
    author: "Traviez",
    days: "3",
    location: "Manali",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-da0e2026-94d7-4706-b079-e97ee224a5e6-destination-52921.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-da0e2026-94d7-4706-b079-e97ee224a5e6-destination-30268.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-da0e2026-94d7-4706-b079-e97ee224a5e6-destination-75608.jpg",
    ],
  },
  {
    title: "Thrilling Adventures in Darjeeling: A 3-Day Escape from Kolkata",
    priceRange: "12000 - 15000",
    author: "Traviez",
    days: "3",
    location: "Darjeeling",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-5b960b18-50bf-48a1-bef9-65cbef47cd29-destination-66658.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-5b960b18-50bf-48a1-bef9-65cbef47cd29-destination-41346.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-5b960b18-50bf-48a1-bef9-65cbef47cd29-destination-82875.jpg",
    ],
  },
  {
    title:
      "Unleashing Thrills: A 3-Day Adventure Escape to Andaman and Nicobar Islands from Mumbai",
    priceRange: "20000 - 22000",
    author: "Traviez",
    days: "3",
    location: "Andaman and Nicobar Islands",
    images: [
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-0cecc19f-76f7-4d50-abee-1df81937f261-destination-85031.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/570cd52b-c956-4766-9593-d92292eacfdv-0cecc19f-76f7-4d50-abee-1df81937f261-destination-76355.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-0cecc19f-76f7-4d50-abee-1df81937f261-destination-85031.jpg",
    ],
  },
  {
    title:
      "Thrilling Friends Trip to Uttarakhand: Exploring the serene beauty of Auli, Joshimath, Kedarnath, Badrinath, and Hemkund Sahib",
    priceRange: "20000 - 25000",
    author: "Traviez",
    days: "3",
    location: "Uttarakhand",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-7a9a01f0-1313-4cfe-989c-e48b9c5a52b0-destination-33016.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-7a9a01f0-1313-4cfe-989c-e48b9c5a52b0-destination-63770.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/570cd52b-c956-4766-9593-d92292eacfdv-7a9a01f0-1313-4cfe-989c-e48b9c5a52b0-destination-61750.jpg",
    ],
  },
  {
    title:
      "A Thrilling Family Adventure in Rishikesh: Embrace the Serenity and Excitement",
    priceRange: "25000 -30000",
    author: "Traviez",
    days: "3",
    location: "Rishikesh",
    images: [
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/2391c27c-38bc-4440-8a16-1ce0b1ef2368-2fc7b0b6-4474-44a2-8c9a-a4dc968dff76-tripcase-79406.jpg",
      "https://traviez-images-bucket.s3.ap-south-1.amazonaws.com/2391c27c-38bc-4440-8a16-1ce0b1ef2368-b9072fb9-ebf5-4de0-a446-3a7fe9c3a141-tripcase-53679.jpg",
      "https://traviez-images-version-bucket.s3.ap-south-1.amazonaws.com/high/2391c27c-38bc-4440-8a16-1ce0b1ef2368-2fc7b0b6-4474-44a2-8c9a-a4dc968dff76-tripcase-87114.jpg",
    ],
  },
];
