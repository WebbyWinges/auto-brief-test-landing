import Image from "next/image";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Advance } from "./components/advance";
import { HowWork } from "./components/howWork";
import { WhoIs } from "./components/whoIs";
import { TalkHour } from "./components/talkHour";
import { AccordionForm } from "./components/questionForm";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <section className=" max-w-[1440px] m-auto">
      <Header />
      <Main />
      <span id="possibilities" />
      <Advance />
      <span id="howWork" />
      <HowWork />
      <WhoIs />
      <TalkHour />
      <span id="FAQ" />
      <AccordionForm />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}
