import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export default function Imagem() {
  return (
    <div className="bg-base-base drop-shadow-xl">
      <AsyncImage
        className="object-cover h-[280px] lg:h-[460px] w-full opacity-80 "
        src="../../Home/mae_filho.jpg"
        Transition={(props) => <Blur radius={10} {...props} />}
        loader={<div className="bg-base-tertiary" />}
      />
    </div>
  );
}
