export default function App() {
  return (
    <div className=\"bg-white text-gray-900 font-sans\">
      {/* Header */}
      <header className=\"bg-yellow-600 text-white p-6 shadow-md\">
        <h1 className=\"text-3xl font-bold tracking-wide\">Timeless Treasures</h1>
        <p className=\"text-lg\">Jewelry Store • Sunyani</p>
      </header>

      {/* Hero Section */}
      <section className=\"bg-yellow-50 text-center py-16 px-6\">
        <h2 className=\"text-4xl font-bold text-yellow-700 mb-4\">Welcome to Timeless Treasures</h2>
        <p className=\"max-w-2xl mx-auto text-lg text-gray-700\">
          Your trusted jewelry store in Sunyani. We sell elegant, high-quality jewelry that adds sparkle to your everyday style.
        </p>
      </section>

      {/* About Us */}
      <section className=\"py-12 px-6 bg-white text-center\">
        <h2 className=\"text-3xl font-bold text-yellow-700 mb-4\">About Us</h2>
        <p className=\"max-w-3xl mx-auto text-lg text-gray-700\">
          At Timeless Treasures, we believe jewelry isn’t just an accessory – it’s a statement of who you are.
          We are passionate entrepreneurs who turned our love for beauty into a brand. Our mission is to provide
          affordable, elegant, and lasting treasures that make people feel confident and valued.
        </p>
      </section>

      {/* Collection */}
      <section className=\"py-12 px-6 bg-yellow-50 text-center\">
        <h2 className=\"text-3xl font-bold text-yellow-700 mb-6\">Our Collection</h2>
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto\">
          <div className=\"p-6 bg-white rounded-2xl shadow-md\">
            <h3 className=\"text-xl font-semibold text-yellow-600 mb-2\">💍 Rings</h3>
            <p>Stylish designs for engagements and everyday wear.</p>
          </div>
          <div className=\"p-6 bg-white rounded-2xl shadow-md\">
            <h3 className=\"text-xl font-semibold text-yellow-600 mb-2\">📿 Necklaces</h3>
            <p>Timeless statement pieces for all occasions.</p>
          </div>
          <div className=\"p-6 bg-white rounded-2xl shadow-md\">
            <h3 className=\"text-xl font-semibold text-yellow-600 mb-2\">⌚ Bracelets</h3>
            <p>Elegant styles to complement any look.</p>
          </div>
          <div className=\"p-6 bg-white rounded-2xl shadow-md\">
            <h3 className=\"text-xl font-semibold text-yellow-600 mb-2\">✨ Custom Orders</h3>
            <p>Special jewelry tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className=\"py-12 px-6 bg-white text-center\">
        <h2 className=\"text-3xl font-bold text-yellow-700 mb-4\">Contact Us</h2>
        <p className=\"text-lg\">📞 0542321102</p>
        <p className=\"text-lg\">📧 timeless.treasures@gmail.com</p>
        <p className=\"text-lg\">📍 Sunyani, Ghana</p>
      </section>

      {/* Footer */}
      <footer className=\"bg-yellow-600 text-white py-6 text-center\">
        <p>© {new Date().getFullYear()} Timeless Treasures. All Rights Reserved.</p>
      </footer>
    </div>
  );
}