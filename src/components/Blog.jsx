import Section from "./Section";

const blogPosts = [
  {
    id: 1,
    title: "Solar Installation at ABC School",
    date: "2025-06-01",
    image: "https://i.pinimg.com/1200x/26/41/87/26418733d5724ea2e4d0860174507329.jpg",
    summary: "We recently completed a 50kW solar installation at ABC School, reducing their energy costs by 60%.",
  },
  {
    id: 2,
    title: "Community Solar Workshop",
    date: "2025-05-20",
    image: "https://i.pinimg.com/1200x/c8/6d/09/c86d09fb7ce64ece53b01cad98561279.jpg",
    summary: "Our team hosted a workshop to educate the local community about the benefits of solar energy.",
  },
  {
    id: 3,
    title: "Residential Rooftop Project",
    date: "2025-05-10",
    image: "https://i.pinimg.com/736x/6d/9d/3a/6d9d3ade45487eed58ef38d6ff10684b.jpg",
    summary: "Installed a custom rooftop solar system for a family, providing clean energy and savings.",
  },
];

const Blog = () => (
  <Section id="blog" className="mt-20">
    <div className="container">
      <h2 className="h3 text-center mb-8">Our Recent Activities & Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8"
            style={{ minHeight: '18rem' }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300">
              <h3 className="h5 mb-1 text-n-1 drop-shadow-lg">{post.title}</h3>
              <span className="text-xs text-n-3 mb-1 block drop-shadow">{post.date}</span>
              <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Blog; 