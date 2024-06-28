import { useErrorsMiddleware } from "./dev/errors/index.js";
import { useFilesMiddleware } from "./dev/files/index.js";
import { useLoggingMiddleware } from "./dev/logging/index.js";
import { useRequestParsersMiddleware } from "./dev/requestParsers/index.js";
import { useRoutes } from "./dev/routes/useRoutes.js";
import { useSession } from "./dev/session/useSession.js";
import { useProdactionMiddlewares } from "./prodaction/index.js";

export const useGlobalMiddlewares = () => {
    //useProdactionMiddlewares();
    useSession();
    useLoggingMiddleware();
    useRequestParsersMiddleware();
    useFilesMiddleware();
    useRoutes();
    useErrorsMiddleware();
}