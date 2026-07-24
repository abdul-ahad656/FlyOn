import { useLayoutEffect } from "react";

import {
  applyEnvironmentOffsets,
  queryEnvironmentTargets,
} from "../scene/flightEnvironment";
import { registerFlightTickExtension } from "../scene/flightTickExtensions";

/**
 * Registers environment + camera reactions on the shared flight ticker.
 * No extra requestAnimationFrame loops.
 */
const useFlightEnvironment = () => {
  useLayoutEffect(() => {
    const targets = queryEnvironmentTargets();

    const unregister = registerFlightTickExtension((ctx) => {
      applyEnvironmentOffsets(targets, ctx.environment);
    });

    return unregister;
  }, []);
};

export default useFlightEnvironment;
