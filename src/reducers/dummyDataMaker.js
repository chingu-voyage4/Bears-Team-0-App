import { range } from "lodash";

export const dummyQuizzes = n => {
  return range(n).reduce((a, e, i) => {
    return a.concat({
      title: "Title!",
      body:
        "Lorem ipsum dolor amet iceland asymmetrical DIY, hammock butcher flexitarian tbh jean shorts bicycle rights thundercats semiotics migas pour-over. Knausgaard keytar vinyl cornhole portland heirloom hexagon art party subway tile marfa dreamcatcher direct trade mlkshk. Whatever letterpress kale chips af, portland sartorial williamsburg scenester distillery celiac ennui.",
      likes: 10
    });
  }, []);
};
