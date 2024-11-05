export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 to-purple-500 px-4 py-12 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="mb-6 text-lg text-white/90">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20">Shop Now</button>
          </div>

          {/* Image Container */}
          <div className="relative mx-auto max-w-lg transform md:translate-y-8">
            <div className="overflow-hidden rounded-2xl bg-purple-700 p-4 shadow-2xl">
              <img src="/placeholder.svg?height=400&width=600" alt="VR Headset" className="w-full object-cover" width={600} height={400} />
              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
