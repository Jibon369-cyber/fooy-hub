import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "FoodyHub",
  description: "Delicious food, delivered to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body className='min-h-full flex flex-col'>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
