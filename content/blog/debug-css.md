---
title: Debug your CSS in Vue
description: What if you could visually debug your CSS with a keypress?
img: /debug-css-vue.png
alt: debug css vue
author: Arsala Grey
---

# Debug your CSS in Vue

If you'd like to visualize how your HTML elements are laid out, add the following _created()_ code block to your Vue app's instance.

```
created() {
    document.addEventListener("keyup", e => {
    if (e.key == "d") {
        [].forEach.call(document.querySelectorAll("*"), function(a) {
        a.style.outline =
            "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
        });
    }
    });
}
```

You should see your website's HTML elements' borders light up with color, allowing you to identify common layout and sizing issues.




