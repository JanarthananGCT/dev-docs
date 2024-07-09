//swizzled component
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormItem_1 = __importDefault(require("@theme/ApiExplorer/FormItem"));
const FormSelect_1 = __importDefault(require("@theme/ApiExplorer/FormSelect"));
const hooks_1 = require("@theme/ApiItem/hooks");
const slice_1 = require("@theme/ApiExplorer/ContentType/slice");
function ContentType() {
  const value = (0, hooks_1.useTypedSelector)(
    (state) => state.contentType.value
  );
  const options = (0, hooks_1.useTypedSelector)(
    (state) => state.contentType.options
  );
  const dispatch = (0, hooks_1.useTypedDispatch)();
  if (options.length <= 1) {
    return null;
  }
  return react_1.default.createElement(
    FormItem_1.default,
    { label: "Content-Type" },
    react_1.default.createElement(FormSelect_1.default, {
      value: value,
      options: options,
      onChange: (e) => dispatch((0, slice_1.setContentType)(e.value)),
    })
  );
}
exports.default = ContentType;
