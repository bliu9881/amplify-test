import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";
import { clickStreamFunction } from "./functions/clickdata/resource";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";

const backend = defineBackend({
  auth,
  data,
  storage,
  clickStreamFunction,
});

const clickstreamfunctionUrlObj =
  backend.clickStreamFunction.resources.lambda.addFunctionUrl({
    authType: FunctionUrlAuthType.NONE,
  });

// backend.addOutput({
//   custom: {
//     clickstreamfunctionUrl: clickstreamfunctionUrlObj.url,
//   },
// });
