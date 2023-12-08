import type { Configuration } from "webpack";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildOptions} from "./config/build/types/types";
import path from "path";

export interface ENV_VARIABLES  {
    mode: BuildMode,
    port: number,
    analyzer?: boolean,
}

export default (env: ENV_VARIABLES): Configuration => {
    const mode = env.mode ?? 'development';

    const options: BuildOptions = {
        port: env.port ?? 9000,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public'),
        },
        analyzer: env.analyzer ?? false,
        mode: mode,
        isDev: mode === 'development',
        isProd: mode === 'production',
    };

    return buildWebpack(options);
};