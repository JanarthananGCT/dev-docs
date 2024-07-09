//swizzled component
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Select = require("@sparrowengg/twigs-react/dist/es").Select;
function FormSelect({ value, options, onChange }) {
  const optionsList = options.map(option => ({ value: option, label: option }));
  if (!Array.isArray(options) || options.length === 0) {
    return null;
  }
  return react_1.default.createElement(
    Select,
    {
      className: "openapi-explorer__select-input",
      value: value,
      options:optionsList,
      onChange: onChange,
      css:{
        padding:"0"
      },
      size:"md"
    },
  );
}
exports.default = FormSelect;
