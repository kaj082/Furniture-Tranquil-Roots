import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NunitoSans = Nunito_Sans({
  weights: [200, 300, 400, 500, 600, 700, 800],
  styles: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={NunitoSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
