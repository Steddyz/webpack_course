import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import "webpack-dev-server";
import { BuildOptions } from "./types/types";

export default function functionbuildDevServer(
  options: BuildOptions
): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // работает в деве. если создавать статику через nginx - надо проксировать в html
    historyApiFallback: true,
  };
}
