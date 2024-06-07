const services = [
  {
    title: "Search doctor",
    image: "/images/home/frame1.png",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    title: "Online pharmacy",
    image: "/images/home/frame2.png",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    title: "Consultation",
    image: "/images/home/frame3.png",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    title: "Details info",
    image: "/images/home/frame4.png",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    title: "Emergency care",
    image: "/images/home/frame5.png",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    title: "Tracking",
    image: "/images/home/frame6.png",
    text: "Track and save your medical history and health data",
  },
];
const Services = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center py-8 ">
        <h1 className="capitalize font-semibold text-center py-2 text-3xl">
          Our Services{" "}
        </h1>
        <img src="/images/home/line.png" className="py-4" />
        <p className="text-gray-500  w-[900px] text-center">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="py-10 container mx-auto ">
        <ul className="grid gap-8 grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <ServiceItem
              title={service.title}
              image={service.image}
              text={service.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

const ServiceItem = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <li className=" hover:ring-2 hover:ring-blue-400 transition-all duration-300 cursor-pointer p-8 py-10 space-y-6  items-center shadow-md  rounded-xl d   ">
      <img src={image} alt={`${image} image`} />
      <h2 className=" font-medium text-black text-2xl">{title}</h2>
      <p className="text-gray-500 ">{text}</p>
    </li>
  );
};
export default Services;
