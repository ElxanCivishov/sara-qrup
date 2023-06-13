import { useState } from "react";
import {
  Cart,
  FilterSection,
  Footer,
  Header,
  Hero,
  Info,
  MainLoader,
  MainSlider,
  Test,
  Topbar,
} from "../containers";
import { motion } from "framer-motion";
import { fadeInOut } from "../assets/animations";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCard, setIsCard] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="w-full min-h-screen h-auto flex flex-col overflow-hidden">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="w-full h-full fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center overflow-hidden"
        >
          <MainLoader />
        </motion.div>
      )}
      <Test />
      <Topbar />
      <Header setIsCard={setIsCard} />
      <Hero />
      <Info />
      <MainSlider />
      <FilterSection />
      {isCard && <Cart setIsCard={setIsCard} />}
      <div className="px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        eveniet consectetur corporis distinctio assumenda nobis! Sit eaque atque
        incidunt iste, aperiam nobis error ducimus. Cumque hic et non unde? Illo
        tempore fuga, culpa architecto dolores natus ab eos quam nam odio
        asperiores sunt sint laudantium, accusamus sit iste deserunt eligendi
        rerum inventore! Voluptatum quis id similique architecto incidunt
        maiores adipisci asperiores ad, voluptates facere voluptatibus
        consectetur fugit dolorum nobis corrupti ducimus molestias impedit
        molestiae ut sunt enim beatae, ab sint! Distinctio sapiente non ab sint
        cumque earum hic, labore ipsa sed, rerum assumenda placeat neque rem,
        repellat veritatis tempora eius ducimus vitae. Dolor eius, praesentium,
        aperiam voluptatibus blanditiis debitis similique veniam perspiciatis
        illo eum itaque ut repellendus maxime. Omnis hic mollitia sunt saepe,
        sit incidunt similique eius ab, blanditiis quis ducimus quos! Ipsam
        excepturi sint expedita modi in, illo tempora ipsum possimus repudiandae
        facilis dolorem voluptas itaque quisquam laborum aspernatur quae quidem
        perspiciatis blanditiis, ut nobis. Reiciendis aut enim nisi itaque optio
        voluptas nihil nam quasi, similique voluptatem quos illum nesciunt
        exercitationem necessitatibus quidem veniam animi ea nobis neque
        voluptate ex autem explicabo eum! Consequuntur maxime, officia nihil
        enim a, accusantium laborum ipsam rem voluptates corporis labore veniam
        soluta minima natus. Tempora, numquam facere atque praesentium sed
        consequuntur esse error distinctio natus repellat officiis, nobis,
        possimus quasi asperiores nemo fugiat repellendus! Quam quaerat
        excepturi corrupti blanditiis consequatur obcaecati nesciunt
        perspiciatis aperiam quod odio, quos explicabo vitae aliquam saepe
        voluptatum veniam similique voluptas quibusdam aliquid! Illo dolorem vel
        obcaecati possimus fugiat natus eligendi ipsum, nisi aspernatur libero
        animi. Id accusantium eius deleniti cupiditate aperiam voluptatem cum,
        voluptas quaerat corrupti omnis aspernatur atque consequuntur
        consequatur pariatur libero, neque soluta illum expedita quisquam
        voluptatibus facere nobis aliquid! Numquam quae est veniam eveniet,
        atque odio, quas tenetur laudantium reiciendis tempore perspiciatis ab
        necessitatibus quis.
      </div>
      <Footer />
    </div>
  );
};

export default Main;
