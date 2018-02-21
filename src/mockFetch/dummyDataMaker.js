import { range } from "lodash";
import shortid from "shortid";

export const dummyQuizzes = n => {
  return range(n).reduce((a, e, i) => {
    return a.concat({
      id: shortid.generate(),
      title: "Title!",
      body:
        "Lorem ipsum dolor amet iceland asymmetrical DIY, hammock butcher flexitarian",
      likes: 10
    });
  }, []);
};
