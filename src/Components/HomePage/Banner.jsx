const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="my-[21px] w-10/12 mx-auto">
      <div className="carousel w-full">
        {banners.map((banner, idx) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgb(21, 21, 21),rgba(0,0,0,0.4)),url(/images/banner/${
                idx + 1
              }.jpg)`,
            }}
            key={idx}
            id={`slide${idx + 1}`}
            className="carousel-item relative w-full h-[580px] bg-cover bg-top object-cover rounded-xl"
          >
            <div className="text-white flex flex-col justify-center ml-24 max-w-md">
              <h1 className="font-semibold text-6xl leading-none">{banner.title}</h1>
              <p className="pt-5 font-normal ">{banner.description}</p>
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
