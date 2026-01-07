import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <BallCanvas technologies={technologies} />
    );
};

export default SectionWrapper(Tech, "");
