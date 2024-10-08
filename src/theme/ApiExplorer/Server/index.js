//swizzled component
"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const FloatingButton_1 = __importDefault(
  require("@theme/ApiExplorer/FloatingButton")
);
const FormItem_1 = __importDefault(require("@theme/ApiExplorer/FormItem"));
const FormSelect_1 = __importDefault(require("@theme/ApiExplorer/FormSelect"));
const FormTextInput_1 = __importDefault(
  require("@theme/ApiExplorer/FormTextInput")
);
const hooks_1 = require("@theme/ApiItem/hooks");
const slice_1 = require("@theme/ApiExplorer/Server/slice");
const Select = require("@sparrowengg/twigs-react/dist/es").Select;
function Server() {
  const [isEditing, setIsEditing] = (0, react_1.useState)(false);
  const value = (0, hooks_1.useTypedSelector)((state) => state.server.value);
  const options = (0, hooks_1.useTypedSelector)(
    (state) => state.server.options
  );
  const dispatch = (0, hooks_1.useTypedDispatch)();
  if (options.length <= 0) {
    return null;
  }
  if (options.length < 1 && value?.variables === undefined) {
    return null;
  }
  if (!value) {
    const defaultOption = options[0];
    dispatch((0, slice_1.setServer)(JSON.stringify(defaultOption)));
  }
  // Default to first option when existing server state is mismatched
  if (value) {
    const urlExists = options.find((s) => s.url === value.url);
    if (!urlExists) {
      const defaultOption = options[0];
      dispatch((0, slice_1.setServer)(JSON.stringify(defaultOption)));
    }
  }
  if (!isEditing) {
    let url = "";
    if (value) {
      url = value.url.replace(/\/$/, "");
      if (value.variables) {
        Object.keys(value.variables).forEach((variable) => {
          url = url.replace(
            `{${variable}}`,
            value.variables?.[variable].default ?? ""
          );
        });
      }
    }
    return react_1.default.createElement(
      Select,
      {
        value: { value: url, label: url },
        options: options.map((s) => ({ value: s.url, label: s.url })),
        onChange: (e) => {
          dispatch(
            (0, slice_1.setServer)(
              JSON.stringify(
                options.filter((s) => s.url === e.value)[0]
              )
            )
          );
        },
        size: "md",
        css: {
          position: "relative",
          left: "10px",
          width:"inherit"
        }
      },  
      react_1.default.createElement(
        FormItem_1.default,
        null,
        react_1.default.createElement(
          "span",
          { className: "openapi-explorer__server-url", title: url },
          url
        )
      )
    );
  }
  return react_1.default.createElement(
    "div",
    { className: "openapi-explorer__server-container" },
    react_1.default.createElement(
      FloatingButton_1.default,
      { onClick: () => setIsEditing(false), label: "Hide" },
      react_1.default.createElement(
        FormItem_1.default,
        null,
        react_1.default.createElement(FormSelect_1.default, {
          options: options.map((s) => s.url),
          onChange: (e) => {
            dispatch(
              (0, slice_1.setServer)(
                JSON.stringify(
                  options.filter((s) => s.url === e.value)[0]
                )
              )
            );
          },
          value: value?.url,
        }),
        react_1.default.createElement(
          "small",
          { className: "openapi-explorer__server-description" },
          value?.description
        )
      ),
      value?.variables &&
        Object.keys(value.variables).map((key) => {
          if (value.variables?.[key].enum !== undefined) {
            return react_1.default.createElement(
              FormItem_1.default,
              { label: key },
              react_1.default.createElement(FormSelect_1.default, {
                options: value.variables[key].enum,
                onChange: (e) => {
                  dispatch(
                    (0, slice_1.setServerVariable)(
                      JSON.stringify({ key, value: 'Bearer' + e.target.value })
                    )
                  );
                },
                value: 'Bearer' + value?.variables?.[key].default,
              })
            );
          }
          // console.log(value?.variables?.[key].default)
          return react_1.default.createElement(
            FormItem_1.default,
            { label: key },
            react_1.default.createElement(FormTextInput_1.default, {
              placeholder: value.variables?.[key].default,
              onChange: (e) => {
                console.log(e)
                dispatch(
                  (0, slice_1.setServerVariable)(
                    JSON.stringify({ key, value: 'Bearer' + e.target.value })
                  )
                );
              },
              value: 'Bearer' + value?.variables?.[key].default,
            })
          );
        })
    )
  );
}
exports.default = Server;
