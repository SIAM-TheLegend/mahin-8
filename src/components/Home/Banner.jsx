export default function Banner() {
  return (
    <div className="bg-white">
      {/* Purple Header Section */}
      <div className="bg-purple-600 px-4 pt-24 pb-96 -mt-20 max-w-7xl mx-auto rounded-3xl text-center text-white">
        <h1 className="text-5xl font-bold mb-8">
          Upgrade Your Tech Accessorize with
          <br />
          Gadget Heaven Accossories
        </h1>
        <p className="max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      <div className="max-w-5xl -mt-[368px] mx-auto px-4 py-8">
        <div className="bg-white/25 backdrop-blur-md border-2 border-white rounded-3xl shadow-xl p-10">
          <div className="bg-gray-100 rounded-lg aspect-[16/9] overflow-hidden">
            <img src="https://i.ibb.co.com/ZYvsJ53/banner.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
