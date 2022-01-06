---
description: "Brian quickly converts Results.tsx"
---

Now let's go do Results.tsx

```tsx
// import
import { FunctionComponent } from "react";
import { Pet as PetType } from "./APIResponsesTypes";

// replace function declaration
const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {};
```

- Admittedly I could have named the Pet component and the Pet interface differently (and this is where calling it IPet could have been useful) but it's good for you to see how to handle a collision like this. Just use as to import it as a different name.
- We could have made an interface with the props and then used that, but if you want to be lazy and put it directly in there it works too.
