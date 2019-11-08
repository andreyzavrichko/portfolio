import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
localStorage.setItem('homePage', location.href);

import "./helpers/consts"; 
import "./scripts/parallax";
import "./scripts/budda-parallax";
import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/feedback-form";
import "./scripts/mobile-menu";
