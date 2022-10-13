function SpinsInfo() {
  return (
    <>
      <section id="intro" className="w-screen relative p-10 text-white">
        <header className="pt-1">
          <h1 className="text-6xl pb-2">Product Spins</h1>
          <h2 className="text-2xl pb-2">Bringing your products to life</h2>
          <p>
            As an alternative to our full 3D Renders, we also offer 3D object
            photography. This produces interactive images that can be spun and
            rotated to best showcase their properties. This is the perfect
            option when budget or volume constraints make 3D Renders
            prohibitive.
          </p>
        </header>
      </section>
      <section className="w-screen h-auto p-10 static">
        <iframe
          className="w-full h-full"
          src="https://asgvirtua.com/Spins/Product/Drill/index.html"
          frameBorder="0"
          scrolling="no"
          height={400}
        ></iframe>
      </section>
      {/* <section className="w-screen relative p-10">
        <h3 className="text-4xl">INDEPTH</h3>
        <h4 className="text-xl">INDEPTH SUBTITLE</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <h4 className="text-xl">SUBTITLE</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab
          accusamus quia quos laboriosam, commodi corporis quo qui, distinctio
          culpa ratione ipsa ipsum nemo, asperiores mollitia maxime ducimus
          impedit consectetur!
        </p>
      </section> */}
    </>
  );
}
export default SpinsInfo;
