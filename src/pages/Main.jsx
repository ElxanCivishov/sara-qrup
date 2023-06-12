import { useState } from "react";
import {
  FilterSection,
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
      <Header />
      <Hero />
      <Info />
      <MainSlider />
      <FilterSection />
      <div className="px-8 md:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum
        ipsam, dolor, rem, saepe tempore ut repellat harum velit sed repudiandae
        laborum perspiciatis numquam aut similique itaque quas consequatur
        assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus sint, natus asperiores eligendi voluptatum dignissimos quaerat
        similique praesentium officiis id delectus, nihil aperiam magnam
        repellat quidem cumque optio ea quas tempore qui. Quas, rem sequi quia
        saepe distinctio suscipit veniam ipsum illo et explicabo obcaecati fugit
        ducimus, deleniti officiis pariatur. Impedit nemo at, pariatur,
        obcaecati doloremque et dolorem natus ex illum mollitia rem omnis.
        Numquam reprehenderit dolores, aspernatur quod mollitia deleniti nulla
        explicabo iure voluptatibus quibusdam maxime, eligendi distinctio
        exercitationem? Ullam aliquam suscipit hic aliquid ab, explicabo
        consequatur repellendus quasi non, ratione provident in sapiente.
        Quaerat fugiat hic ex dolores amet aut doloribus, reiciendis delectus ut
        suscipit consequatur ea esse excepturi maxime dolorem dignissimos facere
        sequi voluptatibus, facilis consectetur. Sapiente quam exercitationem
        dolores, laboriosam consequuntur et veritatis sequi dolorem nisi
        repellat delectus quisquam doloremque dolorum placeat sint perferendis
        illum tempora ab impedit praesentium. Vitae a atque, nobis quasi est
        animi adipisci quod hic nulla ea dolores temporibus, corporis iusto
        aspernatur tempore nemo quam odio quisquam quibusdam, asperiores dolore?
        Et autem possimus nisi obcaecati magnam commodi incidunt, qui
        perferendis sed esse magni temporibus, maxime cupiditate adipisci
        exercitationem facilis nemo explicabo dicta, eveniet iste! Voluptas
        dignissimos alias eius facilis possimus nostrum, ipsa eligendi
        perspiciatis, atque, non voluptate fugiat neque pariatur quae vel nobis
        animi ea qui corporis ipsum? Quos esse quia quam ab vel dicta eveniet.
        Totam optio laborum ducimus, velit doloremque non accusamus deleniti ad
        eius adipisci distinctio quibusdam accusantium commodi dignissimos
        tempora odit minima. Unde labore expedita veniam soluta nostrum deleniti
        distinctio dolorem porro neque veritatis! Doloremque enim ipsum libero
        itaque ipsa quas praesentium laboriosam at animi repudiandae impedit
        iusto obcaecati minus, repellendus veritatis neque. Ut provident, beatae
        repellendus similique consequatur exercitationem dolore quos debitis,
        odit soluta excepturi ab labore maiores quasi atque, esse explicabo quia
        optio ipsa fuga? Veniam.
      </div>{" "}
      <div className="px-8 md:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum
        ipsam, dolor, rem, saepe tempore ut repellat harum velit sed repudiandae
        laborum perspiciatis numquam aut similique itaque quas consequatur
        assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus sint, natus asperiores eligendi voluptatum dignissimos quaerat
        similique praesentium officiis id delectus, nihil aperiam magnam
        repellat quidem cumque optio ea quas tempore qui. Quas, rem sequi quia
        saepe distinctio suscipit veniam ipsum illo et explicabo obcaecati fugit
        ducimus, deleniti officiis pariatur. Impedit nemo at, pariatur,
        obcaecati doloremque et dolorem natus ex illum mollitia rem omnis.
        Numquam reprehenderit dolores, aspernatur quod mollitia deleniti nulla
        explicabo iure voluptatibus quibusdam maxime, eligendi distinctio
        exercitationem? Ullam aliquam suscipit hic aliquid ab, explicabo
        consequatur repellendus quasi non, ratione provident in sapiente.
        Quaerat fugiat hic ex dolores amet aut doloribus, reiciendis delectus ut
        suscipit consequatur ea esse excepturi maxime dolorem dignissimos facere
        sequi voluptatibus, facilis consectetur. Sapiente quam exercitationem
        dolores, laboriosam consequuntur et veritatis sequi dolorem nisi
        repellat delectus quisquam doloremque dolorum placeat sint perferendis
        illum tempora ab impedit praesentium. Vitae a atque, nobis quasi est
        animi adipisci quod hic nulla ea dolores temporibus, corporis iusto
        aspernatur tempore nemo quam odio quisquam quibusdam, asperiores dolore?
        Et autem possimus nisi obcaecati magnam commodi incidunt, qui
        perferendis sed esse magni temporibus, maxime cupiditate adipisci
        exercitationem facilis nemo explicabo dicta, eveniet iste! Voluptas
        dignissimos alias eius facilis possimus nostrum, ipsa eligendi
        perspiciatis, atque, non voluptate fugiat neque pariatur quae vel nobis
        animi ea qui corporis ipsum? Quos esse quia quam ab vel dicta eveniet.
        Totam optio laborum ducimus, velit doloremque non accusamus deleniti ad
        eius adipisci distinctio quibusdam accusantium commodi dignissimos
        tempora odit minima. Unde labore expedita veniam soluta nostrum deleniti
        distinctio dolorem porro neque veritatis! Doloremque enim ipsum libero
        itaque ipsa quas praesentium laboriosam at animi repudiandae impedit
        iusto obcaecati minus, repellendus veritatis neque. Ut provident, beatae
        repellendus similique consequatur exercitationem dolore quos debitis,
        odit soluta excepturi ab labore maiores quasi atque, esse explicabo quia
        optio ipsa fuga? Veniam.
      </div>{" "}
      <div className="px-8 md:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum
        ipsam, dolor, rem, saepe tempore ut repellat harum velit sed repudiandae
        laborum perspiciatis numquam aut similique itaque quas consequatur
        assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus sint, natus asperiores eligendi voluptatum dignissimos quaerat
        similique praesentium officiis id delectus, nihil aperiam magnam
        repellat quidem cumque optio ea quas tempore qui. Quas, rem sequi quia
        saepe distinctio suscipit veniam ipsum illo et explicabo obcaecati fugit
        ducimus, deleniti officiis pariatur. Impedit nemo at, pariatur,
        obcaecati doloremque et dolorem natus ex illum mollitia rem omnis.
        Numquam reprehenderit dolores, aspernatur quod mollitia deleniti nulla
        explicabo iure voluptatibus quibusdam maxime, eligendi distinctio
        exercitationem? Ullam aliquam suscipit hic aliquid ab, explicabo
        consequatur repellendus quasi non, ratione provident in sapiente.
        Quaerat fugiat hic ex dolores amet aut doloribus, reiciendis delectus ut
        suscipit consequatur ea esse excepturi maxime dolorem dignissimos facere
        sequi voluptatibus, facilis consectetur. Sapiente quam exercitationem
        dolores, laboriosam consequuntur et veritatis sequi dolorem nisi
        repellat delectus quisquam doloremque dolorum placeat sint perferendis
        illum tempora ab impedit praesentium. Vitae a atque, nobis quasi est
        animi adipisci quod hic nulla ea dolores temporibus, corporis iusto
        aspernatur tempore nemo quam odio quisquam quibusdam, asperiores dolore?
        Et autem possimus nisi obcaecati magnam commodi incidunt, qui
        perferendis sed esse magni temporibus, maxime cupiditate adipisci
        exercitationem facilis nemo explicabo dicta, eveniet iste! Voluptas
        dignissimos alias eius facilis possimus nostrum, ipsa eligendi
        perspiciatis, atque, non voluptate fugiat neque pariatur quae vel nobis
        animi ea qui corporis ipsum? Quos esse quia quam ab vel dicta eveniet.
        Totam optio laborum ducimus, velit doloremque non accusamus deleniti ad
        eius adipisci distinctio quibusdam accusantium commodi dignissimos
        tempora odit minima. Unde labore expedita veniam soluta nostrum deleniti
        distinctio dolorem porro neque veritatis! Doloremque enim ipsum libero
        itaque ipsa quas praesentium laboriosam at animi repudiandae impedit
        iusto obcaecati minus, repellendus veritatis neque. Ut provident, beatae
        repellendus similique consequatur exercitationem dolore quos debitis,
        odit soluta excepturi ab labore maiores quasi atque, esse explicabo quia
        optio ipsa fuga? Veniam.
      </div>{" "}
      <div className="px-8 md:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum
        ipsam, dolor, rem, saepe tempore ut repellat harum velit sed repudiandae
        laborum perspiciatis numquam aut similique itaque quas consequatur
        assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus sint, natus asperiores eligendi voluptatum dignissimos quaerat
        similique praesentium officiis id delectus, nihil aperiam magnam
        repellat quidem cumque optio ea quas tempore qui. Quas, rem sequi quia
        saepe distinctio suscipit veniam ipsum illo et explicabo obcaecati fugit
        ducimus, deleniti officiis pariatur. Impedit nemo at, pariatur,
        obcaecati doloremque et dolorem natus ex illum mollitia rem omnis.
        Numquam reprehenderit dolores, aspernatur quod mollitia deleniti nulla
        explicabo iure voluptatibus quibusdam maxime, eligendi distinctio
        exercitationem? Ullam aliquam suscipit hic aliquid ab, explicabo
        consequatur repellendus quasi non, ratione provident in sapiente.
        Quaerat fugiat hic ex dolores amet aut doloribus, reiciendis delectus ut
        suscipit consequatur ea esse excepturi maxime dolorem dignissimos facere
        sequi voluptatibus, facilis consectetur. Sapiente quam exercitationem
        dolores, laboriosam consequuntur et veritatis sequi dolorem nisi
        repellat delectus quisquam doloremque dolorum placeat sint perferendis
        illum tempora ab impedit praesentium. Vitae a atque, nobis quasi est
        animi adipisci quod hic nulla ea dolores temporibus, corporis iusto
        aspernatur tempore nemo quam odio quisquam quibusdam, asperiores dolore?
        Et autem possimus nisi obcaecati magnam commodi incidunt, qui
        perferendis sed esse magni temporibus, maxime cupiditate adipisci
        exercitationem facilis nemo explicabo dicta, eveniet iste! Voluptas
        dignissimos alias eius facilis possimus nostrum, ipsa eligendi
        perspiciatis, atque, non voluptate fugiat neque pariatur quae vel nobis
        animi ea qui corporis ipsum? Quos esse quia quam ab vel dicta eveniet.
        Totam optio laborum ducimus, velit doloremque non accusamus deleniti ad
        eius adipisci distinctio quibusdam accusantium commodi dignissimos
        tempora odit minima. Unde labore expedita veniam soluta nostrum deleniti
        distinctio dolorem porro neque veritatis! Doloremque enim ipsum libero
        itaque ipsa quas praesentium laboriosam at animi repudiandae impedit
        iusto obcaecati minus, repellendus veritatis neque. Ut provident, beatae
        repellendus similique consequatur exercitationem dolore quos debitis,
        odit soluta excepturi ab labore maiores quasi atque, esse explicabo quia
        optio ipsa fuga? Veniam.
      </div>
    </div>
  );
};

export default Main;
