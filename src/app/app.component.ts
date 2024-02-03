import { el } from "araz"

export const AppComponent = () => {
    return el(
      "div",
      {
        class: "bg-red py-12 grid grid-cols-2 gap-4 p-4",
      },
        [el("p", {
          class: "bg-yellow py-4"
      }, "sdf"), el("p", {}, "sdf")]
    );
}
