const Story = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-blue-600 font-bold tracking-widest uppercase">Our Origin</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">Why We Started Dreambox</h2>
        <p className="text-xl text-gray-600 leading-relaxed italic">
          {`"We founded Dreambox as a direct response to a curriculum that no longer reflects 
          modern realities. In a world moving at the speed of AI and Robotics, the traditional 
          Nigerian system often leaves students behind. We created this space to turn education 
          from a passive routine into a productive, global-ready powerhouse."`}
        </p>
      </div>
    </section>
  );
};

export default Story;