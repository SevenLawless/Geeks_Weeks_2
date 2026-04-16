function Contact() {
    return (
      <section className="p-8 bg-white mt-8 rounded shadow max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">Have any questions? We would love to hear from you.</p>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" />
          <button className="bg-red-500 text-white p-2 rounded">Send Message</button>
        </form>
      </section>
    );
  }
  
  export default Contact;