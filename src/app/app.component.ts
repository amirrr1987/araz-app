import { el } from "araz";
import axios from "axios";

const getUsers = async () => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.org/users");
    const parent = document.getElementById("user-list");
    while (parent?.firstChild) {
      parent.firstChild.remove();
    }
    data.map((item: any) => {
      parent?.append(
        el("div", { class: "bg-white p-4 rounded" }, item.firstname + " " + item.lastname)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const AppComponent = () => {
  return el(
    "section",
    {
      class: "bg-blue-50 py-12",
      events: {
        onclick: getUsers,
      },
    },
    el(
      "div",
      {
        class: "container mx-auto px-4 grid gap-4",
      },
      [
        el(
          "div",
          {},
          el(
            "button",
            { class: "px-6 py-2 bg-blue text-light rounded" },
            "Get Users"
          )
        ),
        el("div", {
          id: "user-list",
          class: "grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
        }),
      ]
    )
  );
};
