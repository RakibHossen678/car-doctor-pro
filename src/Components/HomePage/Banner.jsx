const Banner = () => {
    const banners=[
        {
            title:'Affordable Price For Car Servicing',
            description:'There are many variations of passages of  available, but the majority have suffered alteration in some form'
        },
        {
            title:'Affordable Price For Car Servicing',
            description:'There are many variations of passages of  available, but the majority have suffered alteration in some form'
        },
        {
            title:'Affordable Price For Car Servicing',
            description:'There are many variations of passages of  available, but the majority have suffered alteration in some form'
        },
        {
            title:'Affordable Price For Car Servicing',
            description:'There are many variations of passages of  available, but the majority have suffered alteration in some form'
        }
    ]
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et quibusdam quis blanditiis facere, exercitationem veritatis! Distinctio labore veniam quae alias voluptas harum molestias, hic aliquid vero nisi ipsa inventore!m500

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
