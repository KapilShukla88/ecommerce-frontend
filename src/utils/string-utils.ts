import objectUtils from "./object-utils";

const getVariables = (string: string): string[] => {
  const response: string[] = [];
  let matchedVariables = string.match(/{(.*?)}/);
  matchedVariables?.forEach((item) => {
    if (item.startsWith("{")) response.push(item);
  });

  return response;
};

const generateVariableMessage = (
  object: object,
  variables: string[],
  message: string
): string => {
  for (const variable of variables) {
    const path = variable.replace("{", "").replace("}", "");
    message = message.replace(variable, objectUtils.byPath(path, object));
  }

  return message;
};

const stringUtils = {
  getVariables,
  generateVariableMessage,
};

export default stringUtils;
