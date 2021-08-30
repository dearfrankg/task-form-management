import * as obj from "../components";
import { checkComponentCount } from "../utils";
checkComponentCount(obj, "data.foo");

import { ProfileForm } from "../components";
console.log("ProfileForm: ", typeof ProfileForm);

export const foo = ["one", "two"];
