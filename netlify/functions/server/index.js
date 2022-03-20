var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/db/appUsers/appUsers.client
var require_appUsers = __commonJS({
  "empty-module:~/db/appUsers/appUsers.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/db/dataPoints.client
var require_dataPoints = __commonJS({
  "empty-module:~/db/dataPoints.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/utils/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/theme/index.ts
init_react();
var import_material = require("@mui/material");

// app/theme/colors.ts
init_react();
var COLORS = {
  PRIMARY: "#3057E1",
  SECONDARY: "#DDFFF7",
  ERROR: "#ff2f00",
  WARNING: "#FFA500",
  INFO: "#00E7FF",
  SUCCESS: "#00FF7E",
  BACKGROUND: {
    DEFAULT: "#0F0F15",
    PAPER: "#070319"
  }
};

// app/theme/index.ts
var theme = (0, import_material.createTheme)({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY
    },
    secondary: {
      main: COLORS.SECONDARY
    },
    error: {
      main: COLORS.ERROR
    },
    warning: {
      main: COLORS.WARNING
    },
    info: {
      main: COLORS.INFO
    },
    success: {
      main: COLORS.SUCCESS
    },
    background: {
      default: COLORS.BACKGROUND.DEFAULT,
      paper: COLORS.BACKGROUND.PAPER
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          whiteSpace: "nowrap"
        }
      }
    }
  }
});

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_styles = require("@mui/material/styles");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React2.createElement(import_styles.ThemeProvider, {
    theme
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/root/projects/floorplan/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App2,
  links: () => links,
  loader: () => loader
});
init_react();
var React4 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-UYUZRDWE.css";

// app/state/AuthProvider.tsx
init_react();
var import_auth = require("firebase/auth");
var import_react3 = require("react");
var import_remix3 = __toESM(require_remix());

// app/components/LogoutForm.tsx
init_react();
var import_react2 = require("react");
var import_remix2 = __toESM(require_remix());
var LogoutForm = (0, import_react2.forwardRef)((props, ref) => /* @__PURE__ */ React.createElement(import_remix2.Form, __spreadValues({
  ref,
  action: "/logout",
  method: "post"
}, props)));

// app/state/AuthProvider.tsx
var import_appUsers = __toESM(require_appUsers());
var AuthContext = (0, import_react3.createContext)(null);
function AuthProvider({
  children,
  user: userProp,
  userToken: userTokenProp
}) {
  const [searchParams] = (0, import_remix3.useSearchParams)();
  const [user, setUser] = (0, import_react3.useState)(userProp);
  const logoutFormRef = (0, import_react3.useRef)(null);
  const [userToken, setUserToken] = (0, import_react3.useState)(userTokenProp || "");
  const userTokenForm = (0, import_react3.useRef)(null);
  const fetcher = (0, import_remix3.useFetcher)();
  (0, import_react3.useEffect)(() => {
    setUser(userProp);
  }, [userProp]);
  const { pathname } = (0, import_remix3.useLocation)();
  const redirectTo = pathname.includes("/sign/") ? "/floor-plans" : pathname;
  function sendUserToken() {
    if (!userTokenForm.current)
      return;
    const formData = new FormData(userTokenForm.current);
    fetcher.submit(formData, { method: "post", action: "/update-session" });
  }
  (0, import_react3.useEffect)(() => {
    const auth3 = (0, import_auth.getAuth)();
    return auth3.onIdTokenChanged(async (userFromChange) => {
      if (userFromChange === null && user !== null) {
        setUser(null);
        if (!logoutFormRef.current)
          return;
        logoutFormRef.current.submit();
      } else if (userFromChange) {
        const token = await userFromChange.getIdToken();
        if (token !== userToken) {
          setUser(userFromChange);
          setUserToken(token);
          await (0, import_appUsers.addAppUser)(userFromChange.uid);
          sendUserToken();
        }
      }
    });
  }, [user]);
  (0, import_react3.useEffect)(() => {
    const handle = setInterval(async () => {
      const auth3 = (0, import_auth.getAuth)();
      const user2 = auth3.currentUser;
      if (user2)
        await user2.getIdToken(true);
    }, 10 * 60 * 1e3);
    return () => clearInterval(handle);
  }, []);
  return /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: user
  }, /* @__PURE__ */ React.createElement(LogoutForm, {
    ref: logoutFormRef
  }), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    ref: userTokenForm,
    action: "/update-session"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userToken",
    value: userToken
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? redirectTo
  })), children);
}
var useAuth = () => {
  return (0, import_react3.useContext)(AuthContext);
};

// app/components/AppBar.tsx
init_react();
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Toolbar = __toESM(require("@mui/material/Toolbar"));

// app/components/AuthControls.tsx
init_react();
var import_Box = __toESM(require("@mui/material/Box"));
var import_Button2 = __toESM(require("@mui/material/Button"));
var import_remix4 = __toESM(require_remix());

// app/components/SignOutButton.tsx
init_react();
var import_react4 = __toESM(require("react"));

// app/firebase/auth.ts
init_react();

// app/firebase/firebase.ts
init_react();
var import_app = require("firebase/app");
var import_auth2 = require("firebase/auth");
var import_analytics = require("firebase/analytics");
var import_firestore = require("firebase/firestore");
var app;
var auth;
var db;
var analytics;
if (!(0, import_app.getApps)().length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDlEzcJeNnGD1L3TmJGbylsFQd7dmmaA8g",
    authDomain: "floorplan-codesagas.firebaseapp.com",
    projectId: "floorplan-codesagas",
    storageBucket: "floorplan-codesagas.appspot.com",
    messagingSenderId: "1074198964881",
    appId: "1:1074198964881:web:742e3a37f0307080f42d30",
    measurementId: "G-FD3XK663C0"
  };
  app = (0, import_app.initializeApp)(firebaseConfig);
  auth = (0, import_auth2.getAuth)();
  db = (0, import_firestore.getFirestore)();
  if (typeof document !== "undefined") {
    analytics = (0, import_analytics.getAnalytics)();
  }
  if (true) {
    (0, import_firestore.connectFirestoreEmulator)(db, "localhost", 8080);
    (0, import_auth2.connectAuthEmulator)(auth, "http://localhost:9099");
  }
}

// app/firebase/auth.ts
var import_auth3 = require("firebase/auth");
async function emailAndPasswordSignUp({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.createUserWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
async function emailAndPasswordSignIn({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.signInWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
function signOut() {
  const auth3 = (0, import_auth2.getAuth)();
  auth3.signOut().then(function() {
  }).catch(function(error) {
  });
}

// app/components/SignOutButton.tsx
var import_Button = __toESM(require("@mui/material/Button"));
var SignOutButton = (props) => /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_Button.default, __spreadValues({
  onClick: () => signOut()
}, props), "sign out"));

// app/components/AuthControls.tsx
function SignInUp() {
  const user = useAuth();
  return user === null ? /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(import_Button2.default, {
    component: import_remix4.Link,
    to: "/sign/in"
  }, "sign in"), /* @__PURE__ */ React.createElement(import_Button2.default, {
    sx: { marginLeft: 2 },
    component: import_remix4.Link,
    to: "/sign/up",
    color: "secondary"
  }, "sign up")) : /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(LogoutForm, null, /* @__PURE__ */ React.createElement(SignOutButton, {
    type: "submit",
    color: "secondary"
  }, "sign out")));
}

// app/components/AppBar.tsx
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_remix5 = __toESM(require_remix());
var import_material2 = require("@mui/material");
function AppBar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_AppBar.default, null, /* @__PURE__ */ React.createElement(import_Toolbar.default, {
    sx: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/",
    style: { textDecoration: "none" }
  }, /* @__PURE__ */ React.createElement(import_material2.Stack, {
    direction: "row"
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    variant: "h4",
    noWrap: true,
    sx: (theme2) => ({
      background: `linear-gradient(to right, ${theme2.palette.primary.main}, ${theme2.palette.secondary.main})`,
      backgroundClip: "text",
      textFillColor: "transparent"
    })
  }, "Floor Plan"), /* @__PURE__ */ React.createElement(import_Typography.default, {
    variant: "h6",
    noWrap: true,
    color: "secondary",
    sx: (theme2) => ({
      fontSize: "14px"
    })
  }, " ", "[BETA]"))), /* @__PURE__ */ React.createElement(SignInUp, null))), /* @__PURE__ */ React.createElement(import_Box2.default, {
    sx: { marginBottom: "64px" }
  }));
}

// app/utils/session.server.ts
init_react();
var import_remix6 = __toESM(require_remix());

// app/firebase/firebaseAdmin.server.ts
init_react();
var import_app2 = require("firebase-admin/app");
var import_auth5 = require("firebase-admin/auth");
var import_firestore2 = require("firebase-admin/firestore");
var app2;
var auth2;
var db2;
if (!(0, import_app2.getApps)().length) {
  if (true) {
    process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
    process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
  }
  const encodedKey = process.env.FIREBASE_PRIVATE_KEY_BASE64 || "";
  const decodedKey = Buffer.from(encodedKey, "base64").toString("utf8");
  app2 = (0, import_app2.initializeApp)({
    credential: (0, import_app2.cert)({
      privateKey: decodedKey,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });
  auth2 = (0, import_auth5.getAuth)();
  db2 = (0, import_firestore2.getFirestore)();
}

// app/utils/session.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix6.createCookieSessionStorage)({
  cookie: {
    name: "cs_session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserToken(request) {
  let session = await getUserSession(request);
  let userToken = session.get("userToken");
  if (!userToken || typeof userToken !== "string")
    return null;
  return userToken;
}
async function getAuthUser(request) {
  let userToken = await getUserToken(request);
  if (typeof userToken !== "string") {
    return null;
  }
  try {
    const authedUser = await (0, import_auth5.getAuth)().verifyIdToken(userToken);
    return authedUser;
  } catch (e) {
    console.log("getAuthUser error", e);
    return null;
  }
}
async function getUserId(request) {
  try {
    let authUser = await getAuthUser(request);
    return (authUser == null ? void 0 : authUser.uid) || null;
  } catch (error) {
    console.log("getUserId error", error);
    return null;
  }
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix6.redirect)(`/sign/in?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_remix6.redirect)("/sign/in", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userToken, redirectTo) {
  let session = await storage.getSession();
  session.set("userToken", userToken);
  return (0, import_remix6.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/components/AppPaper.tsx
init_react();
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Paper = __toESM(require("@mui/material/Paper"));
function AppPaper({
  children,
  leftColor = "primary",
  rightColor = "secondary",
  sx = {}
}) {
  return /* @__PURE__ */ React.createElement(import_Stack.default, {
    component: import_Paper.default,
    spacing: 2,
    sx: (theme2) => __spreadValues({
      padding: 4,
      position: "relative",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      border: "solid 5px transparent",
      borderRadius: "1em",
      "&:before ": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        margin: "-5px",
        borderRadius: "inherit",
        background: `linear-gradient(to right, ${theme2.palette[leftColor].main}, ${theme2.palette[rightColor].main})`
      }
    }, sx)
  }, children);
}

// route:/root/projects/floorplan/app/root.tsx
var import_react6 = require("@emotion/react");
var import_material3 = require("@mui/material");
var import_react7 = require("react");

// app/theme/ClientStyleContext.ts
init_react();
var import_react5 = require("react");
var ClientStyleContext_default = (0, import_react5.createContext)({
  reset: () => {
  }
});

// route:/root/projects/floorplan/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
}
var Document = (0, import_react6.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = (0, import_react7.useContext)(ClientStyleContext_default);
  (0, import_material3.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React4.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React4.createElement("head", null, /* @__PURE__ */ React4.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "theme-color",
    content: theme.palette.primary.main
  }), title ? /* @__PURE__ */ React4.createElement("title", null, title) : null, /* @__PURE__ */ React4.createElement(import_remix7.Meta, null), /* @__PURE__ */ React4.createElement(import_remix7.Links, null), /* @__PURE__ */ React4.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React4.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React4.createElement("body", null, children, /* @__PURE__ */ React4.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React4.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React4.createElement(import_remix7.LiveReload, null)));
});
var loader = async ({ request }) => {
  const user = await getAuthUser(request);
  const userToken = await getUserToken(request);
  const data = {
    user,
    userToken
  };
  return data;
};
function Providers({
  user,
  children,
  userToken
}) {
  return /* @__PURE__ */ React4.createElement(AuthProvider, {
    user,
    userToken
  }, children);
}
function App2() {
  const { user, userToken } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React4.createElement(Document, null, /* @__PURE__ */ React4.createElement(Providers, {
    user,
    userToken
  }, /* @__PURE__ */ React4.createElement(AppBar, null), /* @__PURE__ */ React4.createElement(import_remix7.Outlet, null)));
}
function RootError({
  docTitle = "Oops!",
  title = "Something went wrong. \u{1F625}",
  message = "Please try again later."
}) {
  return /* @__PURE__ */ React4.createElement(Document, {
    title: docTitle
  }, /* @__PURE__ */ React4.createElement(import_material3.Stack, {
    justifyContent: "center",
    alignItems: "center",
    sx: { height: "100vh", padding: 5 }
  }, /* @__PURE__ */ React4.createElement(AppPaper, {
    leftColor: "error",
    rightColor: "warning"
  }, /* @__PURE__ */ React4.createElement(import_material3.Typography, {
    variant: "h1",
    textAlign: "center"
  }, title), /* @__PURE__ */ React4.createElement(import_material3.Typography, null, message))));
}
function CatchBoundary() {
  const caught = (0, import_remix7.useCatch)();
  const title = `${caught.status} ${caught.statusText}`;
  return /* @__PURE__ */ React4.createElement(RootError, {
    docTitle: title,
    title,
    message: "Well this is embarsing. \u{1F605} Have you tried turning it off and back on again?"
  });
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React4.createElement(RootError, {
    message: error.message
  });
}

// route:/root/projects/floorplan/app/routes/floor-plans/$floorPlanId.edit.tsx
var floorPlanId_edit_exports = {};
__export(floorPlanId_edit_exports, {
  action: () => action,
  default: () => EditPlan,
  loader: () => loader2
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/EditFloorPlan.tsx
init_react();
var import_remix8 = __toESM(require_remix());
var import_material4 = require("@mui/material");
function EditFloorPlan({
  isCreate,
  errors,
  owner,
  title = "",
  description = "",
  cost = "",
  githubOwner = "",
  githubRepo = "",
  setupTime = "",
  tags = ""
}) {
  return /* @__PURE__ */ React.createElement(import_material4.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    onSubmit: () => {
      (0, import_analytics.logEvent)(analytics, isCreate ? "create" : "edit");
    }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "owner",
    value: owner
  }), /* @__PURE__ */ React.createElement(import_material4.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      maxWidth: "500px",
      margin: "60px auto"
    }
  }, /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.githubOwner,
    id: "githubOwner",
    label: "Github Owner",
    helperText: (errors == null ? void 0 : errors.githubOwner) ? "Github Owner is required" : "Which Github Organization owns this project?",
    variant: "filled",
    name: "githubOwner",
    fullWidth: true,
    defaultValue: githubOwner
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.githubRepo,
    id: "githubRepo",
    label: "Github Repo",
    helperText: (errors == null ? void 0 : errors.githubRepo) ? "githubRepo is required" : "What is the name of the Github Repo?",
    variant: "filled",
    name: "githubRepo",
    fullWidth: true,
    defaultValue: githubRepo
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : "Display name for the project || Repo Name",
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : "What makes this repo so great?",
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description,
    multiline: true,
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.FormControl, {
    fullWidth: true,
    variant: "filled",
    error: errors == null ? void 0 : errors.cost
  }, /* @__PURE__ */ React.createElement(import_material4.InputLabel, {
    id: "select-label-cost"
  }, "Cost"), /* @__PURE__ */ React.createElement(import_material4.Select, {
    labelId: "select-label-cost",
    id: "cost",
    label: "Cost",
    name: "cost",
    defaultValue: cost
  }, /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "free"
  }, "Free"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$"
  }, "$"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$$"
  }, "$$"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$$$"
  }, "$$$")), /* @__PURE__ */ React.createElement(import_material4.FormHelperText, null, (errors == null ? void 0 : errors.cost) ? "Cost is required" : "How much does this plan cost to run when starting?"))), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.FormControl, {
    fullWidth: true,
    variant: "filled",
    error: errors == null ? void 0 : errors.setupTime
  }, /* @__PURE__ */ React.createElement(import_material4.InputLabel, {
    id: "select-label-setupTime"
  }, "Setup Time"), /* @__PURE__ */ React.createElement(import_material4.Select, {
    labelId: "select-label-setupTime",
    id: "setupTime",
    label: "Setup Time",
    name: "setupTime",
    defaultValue: setupTime
  }, /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "5min"
  }, "5min"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "30min"
  }, "30min"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1hr"
  }, "1hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "2hr"
  }, "2hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "5hr"
  }, "5hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1day"
  }, "1day"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1week"
  }, "1week")), /* @__PURE__ */ React.createElement(import_material4.FormHelperText, null, (errors == null ? void 0 : errors.setupTime) ? "Setup Time is required" : "How long does it take to setup?"))), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : "What are some search terms for this repo?",
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.Button, {
    type: "submit",
    variant: "contained",
    fullWidth: true
  }, isCreate ? "Create Floor Plan" : "Update Floor Plan")))));
}

// app/db/floorPlans.server.ts
init_react();
var BLOG_POSTS_COLLECTION = "floorPlans";
var getCollectionRef = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION);
var getDocReference = (floorPlanId) => getCollectionRef().doc(floorPlanId);
var getQuery = () => getCollectionRef();
async function getFilteredFloorPlans({
  queryString,
  userId
}) {
  let queryRef = getQuery();
  if (userId) {
    queryRef = queryRef.where("owner", "==", userId);
  }
  if (queryString) {
    queryRef = queryRef.where("queryList", "array-contains-any", queryString.split(" ").filter((word) => word.length > 1).slice(0, 9));
  }
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getFloorPlan(floorPlanId) {
  const docRef = getDocReference(floorPlanId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return __spreadValues({ id: docRef.id }, docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addFloorPlan(floorPlan) {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1),
      ...floorPlan.tags.filter((word) => word.length > 1)
    ];
    floorPlan.queryList = queryList;
    const docRef = await getCollectionRef().add(floorPlan);
    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
async function setFloorPlan(floorPlanId, floorPlan) {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1),
      ...floorPlan.tags.filter((word) => word.length > 1)
    ];
    floorPlan.queryList = queryList;
    await getDocReference(floorPlanId).set(floorPlan);
    const docRef = await getDocReference(floorPlanId);
    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// route:/root/projects/floorplan/app/routes/floor-plans/$floorPlanId.edit.tsx
var loader2 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant.default)(params.floorPlanId, "expected params.slug");
  const floorPlan = await getFloorPlan(params.floorPlanId);
  (0, import_tiny_invariant.default)(floorPlan, "expected floorPlan");
  return __spreadProps(__spreadValues({}, floorPlan), { userId });
};
var action = async ({ request, params }) => {
  var _a;
  const formData = await request.formData();
  const floorPlanId = params.floorPlanId;
  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",").map((word) => word.trim())) || [];
  const errors = {};
  if (!owner)
    errors.owner = true;
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!cost)
    errors.cost = true;
  if (!githubOwner)
    errors.githubOwner = true;
  if (!githubRepo)
    errors.githubRepo = true;
  if (!setupTime)
    errors.setupTime = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant.default)(typeof floorPlanId === "string");
  (0, import_tiny_invariant.default)(typeof owner === "string");
  (0, import_tiny_invariant.default)(typeof title === "string");
  (0, import_tiny_invariant.default)(typeof description === "string");
  (0, import_tiny_invariant.default)(typeof cost === "string");
  (0, import_tiny_invariant.default)(typeof githubOwner === "string");
  (0, import_tiny_invariant.default)(typeof githubRepo === "string");
  (0, import_tiny_invariant.default)(typeof setupTime === "string");
  (0, import_tiny_invariant.default)(typeof tags === "object");
  await setFloorPlan(floorPlanId, {
    owner,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  });
  return (0, import_remix9.redirect)("/floor-plans");
};
function EditPlan() {
  const {
    userId,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  } = (0, import_remix9.useLoaderData)();
  const errors = (0, import_remix9.useActionData)();
  return /* @__PURE__ */ React.createElement(EditFloorPlan, {
    isCreate: false,
    errors,
    owner: userId,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags: tags.join(", ")
  });
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.edit.tsx
var blogPostId_edit_exports = {};
__export(blogPostId_edit_exports, {
  action: () => action2,
  default: () => NewPost,
  loader: () => loader3
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/db/blogPosts.server.ts
init_react();
var BLOG_POSTS_COLLECTION2 = "blogPosts";
var getCollectionRef2 = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION2);
var getDocReference2 = (blogPostId) => getCollectionRef2().doc(blogPostId);
var getQuery2 = () => getCollectionRef2();
async function getAllBlogPosts() {
  const queryRef = getQuery2();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getBlogPost(blogPostId) {
  const docRef = getDocReference2(blogPostId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return __spreadValues({ id: docRef.id }, docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addBlogPost(blogPost) {
  try {
    const docRef = await getDocReference2(blogPost.slug).set(blogPost);
    const newBlogPost = await getBlogPost(blogPost.slug);
    if (!newBlogPost) {
      throw new Error("Failed to get new data point");
    }
    return newBlogPost;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// app/db/appUsers/appUsers.server.ts
init_react();

// app/db/appUsers/types.ts
init_react();
var APP_USERS_COLLECTION = "appUsers";

// app/db/appUsers/appUsers.server.ts
var getCollectionRef3 = () => (0, import_firestore2.getFirestore)().collection(APP_USERS_COLLECTION);
var getDocReference3 = (appUserId) => getCollectionRef3().doc(appUserId);
async function getAppUser(appUserId) {
  const docRef = getDocReference3(appUserId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.edit.tsx
var import_react9 = require("react");

// app/components/EditPost.tsx
init_react();
var import_remix10 = __toESM(require_remix());
var import_react8 = __toESM(require("@monaco-editor/react"));
var import_material5 = require("@mui/material");

// app/components/DateTimePicker.tsx
init_react();
var import_TextField = __toESM(require("@mui/material/TextField"));
var import_AdapterDateFns = __toESM(require("@mui/lab/AdapterDateFns"));
var import_LocalizationProvider = __toESM(require("@mui/lab/LocalizationProvider"));
var import_DateTimePicker = __toESM(require("@mui/lab/DateTimePicker"));
function DateTimePicker(_a) {
  var _b = _a, { date, setDate } = _b, textFieldProps = __objRest(_b, ["date", "setDate"]);
  return /* @__PURE__ */ React.createElement(import_LocalizationProvider.default, {
    dateAdapter: import_AdapterDateFns.default
  }, /* @__PURE__ */ React.createElement(import_DateTimePicker.default, {
    renderInput: (props) => /* @__PURE__ */ React.createElement(import_TextField.default, __spreadValues(__spreadValues({
      fullWidth: true
    }, props), textFieldProps)),
    label: "DateTimePicker",
    value: date,
    onChange: (newDate) => {
      setDate(newDate);
    }
  }));
}

// app/components/EditPost.tsx
function EditPost({
  errors,
  authorId,
  isPublished,
  setIsPublished,
  date,
  setDate,
  markdown,
  handleEditorChange,
  title = "",
  description = "",
  slug = "",
  imageUrl = "",
  imageAlt = "",
  tags = ""
}) {
  return /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authorId",
    value: authorId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "isPublished",
    value: isPublished.toString()
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "markdown",
    value: markdown
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "publishDate",
    value: date == null ? void 0 : date.getTime().toString()
  }), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      minWidth: { md: "320px" },
      flex: { md: "0 0 320px" }
    }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material5.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true,
    defaultValue: slug
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageUrl,
    id: "imageUrl",
    label: "Image Url",
    helperText: (errors == null ? void 0 : errors.imageUrl) ? "imageUrl is required" : null,
    variant: "filled",
    name: "imageUrl",
    fullWidth: true,
    defaultValue: imageUrl
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageAlt,
    id: "imageAlt",
    label: "Image Alt Text",
    helperText: (errors == null ? void 0 : errors.imageAlt) ? "imageAlt is required" : null,
    variant: "filled",
    name: "imageAlt",
    fullWidth: true,
    defaultValue: imageAlt
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : null,
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  }))), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    direction: { xs: "column", md: "column-reverse" },
    justifyContent: "flex-end",
    sx: { flex: "1 1" }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { flex: "1 1", minHeight: "500px" }
  }, /* @__PURE__ */ React.createElement(import_react8.default, {
    height: "80vh",
    defaultLanguage: "markdown",
    onChange: handleEditorChange,
    theme: "vs-dark",
    defaultValue: markdown
  })), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material5.Button, {
    component: import_remix10.Link,
    to: `/blog/${slug}`,
    target: "_blank",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material5.Button, {
    type: "submit",
    variant: "contained"
  }, "Create Post"))))));
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.edit.tsx
var loader3 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
      return (0, import_remix11.redirect)("/blog");
    }
  }
  (0, import_tiny_invariant2.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant2.default)(blogPost, "expected blogPost");
  return __spreadProps(__spreadValues({}, blogPost), { isAuthor });
};
var action2 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (!imageUrl)
    errors.description = true;
  if (!imageAlt)
    errors.description = true;
  if (!tags)
    errors.description = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant2.default)(typeof title === "string");
  (0, import_tiny_invariant2.default)(typeof slug === "string");
  (0, import_tiny_invariant2.default)(typeof markdown === "string");
  (0, import_tiny_invariant2.default)(typeof description === "string");
  (0, import_tiny_invariant2.default)(typeof authorId === "string");
  (0, import_tiny_invariant2.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant2.default)(typeof publishDate === "number");
  (0, import_tiny_invariant2.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant2.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant2.default)(typeof tags === "object");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix11.redirect)("/blog");
};
function NewPost() {
  const {
    authorId,
    isPublished: initIsPublished,
    title,
    slug,
    markdown: initMarkdown,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  } = (0, import_remix11.useLoaderData)();
  const [date, setDate] = (0, import_react9.useState)(new Date(publishDate));
  const [markdown, setMarkdown] = (0, import_react9.useState)(initMarkdown);
  const [isPublished, setIsPublished] = (0, import_react9.useState)(initIsPublished);
  const errors = (0, import_remix11.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange,
    title,
    description,
    slug,
    imageUrl,
    imageAlt,
    tags: (tags == null ? void 0 : tags.join(", ")) || ""
  });
}

// route:/root/projects/floorplan/app/routes/floor-plans/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action3,
  default: () => NewPlan,
  loader: () => loader4
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var loader4 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const data = {
    userId
  };
  return data;
};
var action3 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",").map((word) => word.trim())) || [];
  const errors = {};
  if (!owner)
    errors.owner = true;
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!cost)
    errors.cost = true;
  if (!githubOwner)
    errors.githubOwner = true;
  if (!githubRepo)
    errors.githubRepo = true;
  if (!setupTime)
    errors.setupTime = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof owner === "string");
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof description === "string");
  (0, import_tiny_invariant3.default)(typeof cost === "string");
  (0, import_tiny_invariant3.default)(typeof githubOwner === "string");
  (0, import_tiny_invariant3.default)(typeof githubRepo === "string");
  (0, import_tiny_invariant3.default)(typeof setupTime === "string");
  (0, import_tiny_invariant3.default)(typeof tags === "object");
  await addFloorPlan({
    owner,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  });
  return (0, import_remix12.redirect)("/floor-plans");
};
function NewPlan() {
  const { userId } = (0, import_remix12.useLoaderData)();
  const errors = (0, import_remix12.useActionData)();
  return /* @__PURE__ */ React.createElement(EditFloorPlan, {
    isCreate: true,
    errors,
    owner: userId
  });
}

// route:/root/projects/floorplan/app/routes/floor-plans/index.tsx
var floor_plans_exports = {};
__export(floor_plans_exports, {
  default: () => Blog,
  loader: () => loader5
});
init_react();
var import_Search = __toESM(require("@mui/icons-material/Search"));
var import_material7 = require("@mui/material");
var import_remix14 = __toESM(require_remix());

// app/components/FloorPlanCard.tsx
init_react();
var import_material6 = require("@mui/material");
var import_remix13 = __toESM(require_remix());
var import_AccessTime = __toESM(require("@mui/icons-material/AccessTime"));
function FloorPlanCard({
  title,
  description,
  cost,
  githubOwner,
  githubRepo,
  setupTime,
  tags,
  id,
  userId,
  owner
}) {
  return /* @__PURE__ */ React.createElement(import_material6.Card, {
    sx: { margin: "20px auto" }
  }, /* @__PURE__ */ React.createElement(import_material6.CardContent, null, /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: "row",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div",
    color: "secondary"
  }, title), /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: "row",
    spacing: 1,
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h5",
    color: "text.secondary"
  }, /* @__PURE__ */ React.createElement(import_AccessTime.default, {
    fontSize: "inherit"
  })), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h6",
    color: "text.secondary"
  }, setupTime), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h6",
    color: "primary"
  }, cost))), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, description)), /* @__PURE__ */ React.createElement(import_material6.CardActions, {
    sx: {
      justifyContent: "flex-end"
    }
  }, /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: { xs: "column", md: "row" },
    alignItems: { xs: "stretch", md: "center" },
    justifyContent: "flex-end",
    spacing: 2,
    sx: {
      width: "100%"
    }
  }, owner === userId ? /* @__PURE__ */ React.createElement(import_material6.Button, {
    component: import_remix13.Link,
    to: `/floor-plans/${id}/edit`,
    size: "large"
  }, "edit") : null, /* @__PURE__ */ React.createElement(import_material6.Button, {
    component: import_material6.Link,
    href: `https://github.com/${githubOwner}/${githubRepo}#readme`,
    target: "_blank",
    size: "large"
  }, "Get Started"))));
}

// route:/root/projects/floorplan/app/routes/floor-plans/index.tsx
var loader5 = async ({
  request
}) => {
  const userId = await getUserId(request);
  const url = new URL(request.url);
  const showMine = url.searchParams.get("show-mine") === "on";
  const queryString = url.searchParams.get("query-string");
  const floorPlans = await getFilteredFloorPlans({
    userId: showMine ? userId : null,
    queryString: queryString || null
  });
  return { floorPlans, userId };
};
function Blog() {
  const { floorPlans, userId } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_material7.Stack, {
    alignItems: "stretch",
    justifyContent: "space-between",
    spacing: 4,
    sx: {
      maxWidth: "900px",
      margin: "120px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material7.Typography, {
    variant: "h4",
    textAlign: "center"
  }, "Search to find a floor plan to get your app off the ground."), /* @__PURE__ */ React.createElement(import_material7.Divider, null, /* @__PURE__ */ React.createElement(import_material7.Typography, {
    variant: "h5",
    textAlign: "center",
    color: "text.secondary"
  }, "OR")), /* @__PURE__ */ React.createElement(import_material7.Button, {
    component: import_remix14.Link,
    to: "/floor-plans/create",
    size: "large"
  }, "Add A Floor Plan To Share")), /* @__PURE__ */ React.createElement(import_material7.Stack, {
    component: import_remix14.Form,
    direction: { xs: "column", md: "row" },
    alignItems: { xs: "stretch", md: "center" },
    spacing: 2,
    sx: {
      margin: "20px 0"
    }
  }, /* @__PURE__ */ React.createElement(import_material7.TextField, {
    id: "query-string",
    label: "Search for Floor Plan",
    name: "query-string",
    InputProps: {
      startAdornment: /* @__PURE__ */ React.createElement(import_material7.InputAdornment, {
        position: "start"
      }, /* @__PURE__ */ React.createElement(import_Search.default, null))
    },
    variant: "outlined",
    sx: {
      flex: "1"
    }
  }), /* @__PURE__ */ React.createElement(import_material7.FormGroup, null, /* @__PURE__ */ React.createElement(import_material7.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material7.Switch, {
      name: "show-mine"
    }),
    label: "Show My Floor Plans"
  })), /* @__PURE__ */ React.createElement(import_material7.Button, {
    variant: "outlined",
    type: "submit"
  }, "Filter")), /* @__PURE__ */ React.createElement(import_material7.Stack, {
    spacing: 2
  }, floorPlans.map((floorPlan) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material7.Box, {
    key: floorPlan.id,
    sx: {
      flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
      margin: 2
    }
  }, /* @__PURE__ */ React.createElement(FloorPlanCard, {
    title: floorPlan.title,
    description: floorPlan.description,
    cost: floorPlan.cost,
    setupTime: floorPlan.setupTime,
    owner: floorPlan.owner,
    githubOwner: floorPlan.githubOwner,
    githubRepo: floorPlan.githubRepo,
    tags: floorPlan.tags,
    id: floorPlan.id,
    userId
  })), /* @__PURE__ */ React.createElement(import_material7.Divider, null)))));
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.tsx
var blogPostId_exports = {};
__export(blogPostId_exports, {
  default: () => PostSlug,
  loader: () => loader6
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var import_react10 = require("react");
var import_material9 = require("@mui/material");

// app/components/CodeBlock.tsx
init_react();
var import_material8 = require("@mui/material");
var import_system = require("@mui/system");
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_dracula = __toESM(require("prism-react-renderer/themes/dracula"));
var Line = (0, import_system.styled)("div")({
  display: "table-row"
});
var LineNo = (0, import_system.styled)("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: "0.5"
});
var LineContent = (0, import_system.styled)("span")({
  display: "table-cell",
  fontFamily: "'Fira Code', monospace"
});
var CodeBlock = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code: children,
    language: "jsx",
    theme: import_dracula.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(import_material8.Paper, {
    className,
    sx: __spreadProps(__spreadValues({}, style), {
      padding: 2,
      margin: 2,
      bgcolor: "background.paper"
    })
  }, tokens.map((line, i) => /* @__PURE__ */ React.createElement(Line, __spreadValues({
    key: i
  }, getLineProps({ line, key: i })), /* @__PURE__ */ React.createElement(LineNo, null, i + 1), /* @__PURE__ */ React.createElement(LineContent, null, line.map((token, key) => {
    const _a = getTokenProps({ token, key }), { children: children2 } = _a, props = __objRest(_a, ["children"]);
    const sanitizedChildren = children2.replace(/\s/g, "&nbsp;");
    return /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({
      key
    }, props), {
      dangerouslySetInnerHTML: {
        __html: sanitizedChildren
      }
    }));
  }))))));
};

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.tsx
var import_Edit = __toESM(require("@mui/icons-material/Edit"));

// app/utils/mdx.server.ts
init_react();
var import_mdx_bundler = require("mdx-bundler");
async function getMdx(source) {
  const result = await (0, import_mdx_bundler.bundleMDX)({
    source
  });
  return result;
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.tsx
var loader6 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  (0, import_tiny_invariant4.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant4.default)(blogPost, "expected blogPost");
  const { code, frontmatter } = await getMdx(blogPost.markdown);
  return __spreadProps(__spreadValues({}, blogPost), { code, isAuthor });
};
var H1 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h1",
  color: "primary",
  sx: { marginBottom: 3 }
}, props));
var H2 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h2",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H3 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h3",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H4 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h4",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H5 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h5",
  sx: { marginBottom: 3 }
}, props));
var H6 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h6",
  sx: { marginBottom: 3 }
}, props));
var P = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "body",
  component: "p"
}, props));
var Blockquote = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h6",
  component: import_material9.Paper,
  sx: {
    padding: 2,
    margin: 2,
    borderLeft: ({ palette }) => `2px solid${palette.primary.main}`
  }
}, props));
var Pre = (props) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, props));
var Code = (props) => /* @__PURE__ */ React.createElement(CodeBlock, __spreadValues({}, props));
var A = (props) => /* @__PURE__ */ React.createElement(import_material9.Link, __spreadValues({}, props));
function PostSlug() {
  const { isAuthor, code, imageUrl, imageAlt } = (0, import_remix15.useLoaderData)();
  const Component = (0, import_react10.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material9.Box, {
    component: import_material9.Paper,
    sx: {
      margin: "178px auto 0px",
      maxWidth: "900px",
      position: "relative",
      padding: 3,
      bgcolor: "background.default",
      minHeight: "100vh",
      borderRadius: "4px"
    }
  }, /* @__PURE__ */ React.createElement(import_material9.Box, {
    component: import_material9.Paper,
    sx: {
      background: `url(${imageUrl}) no-repeat center center`,
      height: "320px",
      width: "100%"
    }
  }), isAuthor ? /* @__PURE__ */ React.createElement(import_material9.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix15.Link,
    to: "edit",
    sx: { position: "absolute", top: 20, right: 20 }
  }, /* @__PURE__ */ React.createElement(import_Edit.default, null)) : null, Component ? /* @__PURE__ */ React.createElement(Component, {
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      blockquote: Blockquote,
      pre: Pre,
      code: Code,
      a: A
    }
  }) : null));
}

// route:/root/projects/floorplan/app/routes/sign.$authType.tsx
var sign_authType_exports = {};
__export(sign_authType_exports, {
  AUTH_TYPES: () => AUTH_TYPES,
  default: () => Login,
  loader: () => loader7,
  meta: () => meta
});
init_react();
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_ToggleButton = __toESM(require("@mui/material/ToggleButton"));
var import_ToggleButtonGroup = __toESM(require("@mui/material/ToggleButtonGroup"));
var import_remix16 = __toESM(require_remix());
var import_react11 = require("react");
var import_material10 = require("@mui/material");
var meta = () => {
  return {
    title: "Floor Plan | Sign In",
    description: "Sign in to start your own code journey!"
  };
};
var AUTH_TYPES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up"
};
var loader7 = async ({ request, params }) => {
  const data = {
    authType: params.authType === "in" ? AUTH_TYPES.SIGN_IN : AUTH_TYPES.SIGN_UP
  };
  return data;
};
function validateEmail(email) {
  if (typeof email !== "string" || email.match(/.+@.+\..+/) === null) {
    return `Emails must look like example@example.com`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { authType: initAuthType } = (0, import_remix16.useLoaderData)();
  const [actionData, setActionData] = (0, import_react11.useState)({});
  const [authType, setAuthType] = (0, import_react11.useState)(initAuthType);
  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType)
      return;
    setAuthType(newAuthType);
  };
  (0, import_react11.useEffect)(() => {
    if (initAuthType !== authType) {
      setAuthType(initAuthType);
    }
  }, [initAuthType]);
  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const form = new FormData(target);
    const authType2 = form.get("authType");
    const email = form.get("email");
    const password = form.get("password");
    if (typeof authType2 !== "string" || typeof email !== "string" || typeof password !== "string") {
      return setActionData({
        formError: `Form not submitted correctly.`
      });
    }
    const fields = { authType: authType2, email, password };
    const fieldErrors = {
      email: validateEmail(email),
      password: validatePassword(password)
    };
    if (Object.values(fieldErrors).some(Boolean))
      return setActionData({ fieldErrors, fields });
    switch (authType2) {
      case AUTH_TYPES.SIGN_IN: {
        try {
          const user = await emailAndPasswordSignIn({ email, password });
          if (!user || !user.email) {
            return setActionData({
              fields,
              formError: `Email/Password combination is incorrect`
            });
          }
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Email/Password combination is incorrect`
          });
        }
      }
      case AUTH_TYPES.SIGN_UP: {
        try {
          const user = await emailAndPasswordSignUp({ email, password });
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Something went wrong trying to create a new user.`
          });
        }
      }
      default: {
        return setActionData({
          fields,
          formError: `Login type invalid`
        });
      }
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    sx: {
      maxWidth: "500px",
      margin: "200px auto"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material10.Typography, {
    variant: "h1",
    textAlign: "center"
  }, authType), /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "post",
    onSubmit: handleSubmit,
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    component: import_Paper2.default,
    spacing: 2
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authType",
    value: authType
  }), /* @__PURE__ */ React.createElement(import_ToggleButtonGroup.default, {
    value: authType,
    exclusive: true,
    onChange: handleAuthType,
    "aria-label": "Sign In or Sign Up",
    color: "secondary",
    fullWidth: true
  }, /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_IN,
    "aria-label": AUTH_TYPES.SIGN_IN,
    color: "primary"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_UP,
    "aria-label": AUTH_TYPES.SIGN_UP
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Email",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "email-input",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email),
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) ? "email-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "email-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.email) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Password",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "password-input",
    name: "password",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.password,
    type: "password",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.password) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) ? "password-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "form-error"
  }, actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement(import_Button3.default, {
    type: "submit",
    variant: "contained",
    size: "large",
    color: AUTH_TYPES.SIGN_IN === authType ? "primary" : "secondary"
  }, authType))))));
}

// route:/root/projects/floorplan/app/routes/update-session.tsx
var update_session_exports = {};
__export(update_session_exports, {
  action: () => action4
});
init_react();
var action4 = async ({ request, params }) => {
  switch (request.method) {
    case "POST":
      const form = await request.formData();
      const redirectTo = form.get("redirectTo");
      const userToken = form.get("userToken");
      if (!userToken) {
        throw new Response("Could not update session. Please try again.", {
          status: 404
        });
      }
      return await createUserSession(userToken, redirectTo);
    default:
      console.log("REQUEST NOT HANDLED");
  }
};

// route:/root/projects/floorplan/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog2,
  loader: () => loader8
});
init_react();
var import_material12 = require("@mui/material");
var import_remix18 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material11 = require("@mui/material");
var import_remix17 = __toESM(require_remix());
function BlogCard({
  title,
  description,
  url,
  imageUrl,
  imageAlt
}) {
  return /* @__PURE__ */ React.createElement(AppPaper, {
    sx: { padding: 0 }
  }, /* @__PURE__ */ React.createElement(import_Card.default, {
    sx: { borderRadius: "10px", overflow: "hidden" }
  }, /* @__PURE__ */ React.createElement(import_material11.CardActionArea, {
    component: import_remix17.Link,
    to: url
  }, /* @__PURE__ */ React.createElement(import_CardMedia.default, {
    component: "img",
    height: "140",
    image: imageUrl,
    alt: imageAlt
  }), /* @__PURE__ */ React.createElement(import_CardContent.default, null, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "body2",
    color: "text.secondary"
  }, description)))));
}

// route:/root/projects/floorplan/app/routes/blog/index.tsx
var loader8 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  const posts = await getAllBlogPosts();
  return { posts, isAuthor };
};
function Blog2() {
  const { posts, isAuthor } = (0, import_remix18.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material12.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(import_material12.Typography, {
    variant: "h1",
    textAlign: "center"
  }, "Blog"), isAuthor ? /* @__PURE__ */ React.createElement(import_material12.Button, {
    component: import_remix18.Link,
    to: "/blog/new"
  }, "Add Blog Post") : null), /* @__PURE__ */ React.createElement(import_material12.Stack, {
    direction: { xs: "column", md: "row" },
    sx: {
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    },
    justifyContent: "space-around"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_material12.Box, {
    key: post.id,
    sx: {
      flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
      margin: 2
    }
  }, /* @__PURE__ */ React.createElement(BlogCard, {
    title: post.title,
    description: post.description,
    imageUrl: post.imageUrl,
    imageAlt: post.imageAlt,
    url: `/blog/${post.slug}`
  })))));
}

// route:/root/projects/floorplan/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action5,
  default: () => DashBoard,
  loader: () => loader9
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_Button4 = __toESM(require("@mui/material/Button"));
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_Stack3 = __toESM(require("@mui/material/Stack"));
var import_Paper3 = __toESM(require("@mui/material/Paper"));

// app/db/dataPoints.server.ts
init_react();
var DATA_POINTS_COLLECTION = "dataPoints";
var getCollectionRef4 = () => (0, import_firestore2.getFirestore)().collection(DATA_POINTS_COLLECTION);
var getDocReference4 = (dataPointId) => getCollectionRef4().doc(dataPointId);
var getQuery3 = (userId) => getCollectionRef4().where("userId", "==", userId);
async function getAllDataPoints(userId) {
  const queryRef = getQuery3(userId);
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getDataPoint(dataPointId) {
  const docRef = getDocReference4(dataPointId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addDataPoint(dataPoint) {
  try {
    const docRef = await getCollectionRef4().add(dataPoint);
    const newDataPoint = await getDataPoint(docRef.id);
    if (!newDataPoint) {
      throw new Error("Failed to get new data point");
    }
    return newDataPoint;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// route:/root/projects/floorplan/app/routes/dashboard.tsx
var import_dataPoints2 = __toESM(require_dataPoints());
var import_material13 = require("@mui/material");
var import_react13 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react12 = require("react");
var import_remix19 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix19.useLoaderData)();
  const [data, setData] = (0, import_react12.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react12.useEffect)(() => clientUpdater(updater), [loaderData]);
  return data;
}

// route:/root/projects/floorplan/app/routes/dashboard.tsx
var loader9 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const data = {
    dataPoints: await getAllDataPoints(userId)
  };
  return data;
};
var action5 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const point = Number(form.get("point"));
  const timestamp = Number(form.get("timestamp"));
  if (!point || !timestamp) {
    throw new Response("Could not add this data point. Please try again.", {
      status: 404
    });
  }
  return await addDataPoint({
    userId,
    point,
    timestamp
  });
};
function DashBoard() {
  const user = (0, import_react13.useContext)(AuthContext);
  const userId = user == null ? void 0 : user.uid;
  const { dataPoints } = useFirebaseLoaderData((updater) => (0, import_dataPoints2.getAllDataPointsLive)(userId, (dataPoints2) => updater({ dataPoints: dataPoints2 })));
  return /* @__PURE__ */ React.createElement(import_Stack3.default, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
    component: import_Paper3.default,
    elevation: 3,
    direction: "row",
    sx: { height: "120px", padding: "12px", margin: "12px", width: "80%" },
    justifyContent: "space-around",
    alignItems: "flex-end"
  }, dataPoints.length ? dataPoints.sort((a, b) => a.timestamp - b.timestamp).map(({ point }, i) => /* @__PURE__ */ React.createElement(import_Box3.default, {
    component: import_Paper3.default,
    key: i,
    sx: {
      height: `${point * 10}px`,
      bgcolor: "primary.main",
      width: `calc(100% / ${dataPoints.length} - 10px)`,
      minWidth: "5px"
    }
  })) : /* @__PURE__ */ React.createElement(import_material13.Typography, {
    variant: "h3"
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix20.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "point",
    value: Math.floor(Math.random() * 10) + 1
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "timestamp",
    value: Date.now()
  }), /* @__PURE__ */ React.createElement(import_Button4.default, {
    type: "submit",
    variant: "contained"
  }, "add data"))));
}

// route:/root/projects/floorplan/app/routes/blog/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewPost2,
  loader: () => loader10
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_react14 = require("react");
var loader10 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix21.redirect)("/blog");
  }
  const data = {
    authorId: userId
  };
  return data;
};
var action6 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (!imageUrl)
    errors.imageUrl = true;
  if (!imageAlt)
    errors.imageAlt = true;
  if (!tags)
    errors.tags = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant5.default)(typeof title === "string");
  (0, import_tiny_invariant5.default)(typeof slug === "string");
  (0, import_tiny_invariant5.default)(typeof markdown === "string");
  (0, import_tiny_invariant5.default)(typeof description === "string");
  (0, import_tiny_invariant5.default)(typeof authorId === "string");
  (0, import_tiny_invariant5.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant5.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant5.default)(typeof tags === "object");
  (0, import_tiny_invariant5.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant5.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix21.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react14.useState)(new Date());
  const [markdown, setMarkdown] = (0, import_react14.useState)("");
  const [isPublished, setIsPublished] = (0, import_react14.useState)(true);
  const { authorId } = (0, import_remix21.useLoaderData)();
  const errors = (0, import_remix21.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange
  });
}

// mdx:/root/projects/floorplan/app/routes/blog/a.mdx
var a_exports = {};
__export(a_exports, {
  attributes: () => attributes,
  default: () => a_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta2
});
init_react();
var import_react15 = __toESM(require("react"));
var attributes = {
  "meta": "test a",
  "title": "test a",
  "description": "test a"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "What A!"));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var a_default = MDXContent;
var filename = "a.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// mdx:/root/projects/floorplan/app/routes/blog/b.mdx
var b_exports = {};
__export(b_exports, {
  attributes: () => attributes2,
  default: () => b_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links3,
  meta: () => meta3
});
init_react();
var import_react16 = __toESM(require("react"));
var attributes2 = {
  "meta": "test b",
  "title": "test b",
  "description": "test b"
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "What B!"));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var b_default = MDXContent2;
var filename2 = "b.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta3 = typeof attributes2 !== "undefined" && attributes2.meta;
var links3 = void 0;

// mdx:/root/projects/floorplan/app/routes/blog/c.mdx
var c_exports = {};
__export(c_exports, {
  attributes: () => attributes3,
  default: () => c_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links4,
  meta: () => meta4
});
init_react();
var import_react17 = __toESM(require("react"));
var attributes3 = {
  "meta": "test c",
  "title": "test c",
  "description": "test c"
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "What C!"));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var c_default = MDXContent3;
var filename3 = "c.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta4 = typeof attributes3 !== "undefined" && attributes3.meta;
var links4 = void 0;

// route:/root/projects/floorplan/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action7,
  loader: () => loader11
});
init_react();
var import_remix22 = __toESM(require_remix());
var action7 = async ({ request }) => {
  return logout(request);
};
var loader11 = async () => {
  return (0, import_remix22.redirect)("/");
};

// route:/root/projects/floorplan/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta5
});
init_react();
var import_material14 = require("@mui/material");
var import_remix23 = __toESM(require_remix());
var meta5 = () => {
  return {
    title: "Floor Plan: Copy/Pasta/Twerk",
    description: "Codes Sagas a place to learn a million and one ways to code."
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(import_material14.Stack, {
    sx: {
      maxWidth: "700px",
      margin: "80px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h3"
  }, "floor plan"), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h4"
  }, "/\u02C8fl\xF4(\u0259)r \u02CCplan/"), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h6"
  }, "noun "), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h4"
  }, "A place to share and discover app stacks so that you can start bringing your ideas to life."), /* @__PURE__ */ React.createElement(import_material14.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_material14.Button, {
    variant: "outlined",
    color: "primary",
    size: "large",
    component: import_remix23.Link,
    to: "/floor-plans/create"
  }, "Create a floor plan"), /* @__PURE__ */ React.createElement(import_material14.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    component: import_remix23.Link,
    to: "/floor-plans/"
  }, "Search floor plans"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3979e877", "entry": { "module": "/build/entry.client-PUV5PQJE.js", "imports": ["/build/_shared/chunk-AV6YHUK7.js", "/build/_shared/chunk-UVWD7YDR.js", "/build/_shared/chunk-IPXQKRLW.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4R5FZFBQ.js", "imports": ["/build/_shared/chunk-UW7OP3I2.js", "/build/_shared/chunk-QKYJV5QJ.js", "/build/_shared/chunk-OB77UXMN.js", "/build/_shared/chunk-KTEZR3DL.js", "/build/_shared/chunk-6TY2GM2B.js", "/build/_shared/chunk-42PGY5TF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-EFIC7H3H.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js", "/build/_shared/chunk-VXFHPVEK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-5LPVS7FU.js", "imports": ["/build/_shared/chunk-4FLUL6QT.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-HSGFR3BF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-4K7CDTRG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-KTJ5KVYH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-BFUMNSUU.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-KGSCILNB.js", "imports": ["/build/_shared/chunk-4FLUL6QT.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-3FO7K4A2.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/$floorPlanId.edit": { "id": "routes/floor-plans/$floorPlanId.edit", "parentId": "root", "path": "floor-plans/:floorPlanId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/$floorPlanId.edit-MZL7XI4H.js", "imports": ["/build/_shared/chunk-JO5TDBQN.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/create": { "id": "routes/floor-plans/create", "parentId": "root", "path": "floor-plans/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/create-F4D3VWZG.js", "imports": ["/build/_shared/chunk-JO5TDBQN.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/index": { "id": "routes/floor-plans/index", "parentId": "root", "path": "floor-plans", "index": true, "caseSensitive": void 0, "module": "/build/routes/floor-plans/index-C7ZTWVXJ.js", "imports": ["/build/_shared/chunk-IP3WXQ4D.js", "/build/_shared/chunk-VXFHPVEK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-F5LNPBMY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-J6AOXY7P.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-6PDH7LL6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-F2F6W7MF.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3979E877.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/floor-plans/$floorPlanId.edit": {
    id: "routes/floor-plans/$floorPlanId.edit",
    parentId: "root",
    path: "floor-plans/:floorPlanId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: floorPlanId_edit_exports
  },
  "routes/blog/$blogPostId.edit": {
    id: "routes/blog/$blogPostId.edit",
    parentId: "root",
    path: "blog/:blogPostId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_edit_exports
  },
  "routes/floor-plans/create": {
    id: "routes/floor-plans/create",
    parentId: "root",
    path: "floor-plans/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/floor-plans/index": {
    id: "routes/floor-plans/index",
    parentId: "root",
    path: "floor-plans",
    index: true,
    caseSensitive: void 0,
    module: floor_plans_exports
  },
  "routes/blog/$blogPostId": {
    id: "routes/blog/$blogPostId",
    parentId: "root",
    path: "blog/:blogPostId",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_exports
  },
  "routes/sign.$authType": {
    id: "routes/sign.$authType",
    parentId: "root",
    path: "sign/:authType",
    index: void 0,
    caseSensitive: void 0,
    module: sign_authType_exports
  },
  "routes/update-session": {
    id: "routes/update-session",
    parentId: "root",
    path: "update-session",
    index: void 0,
    caseSensitive: void 0,
    module: update_session_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/blog/new": {
    id: "routes/blog/new",
    parentId: "root",
    path: "blog/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/blog/a": {
    id: "routes/blog/a",
    parentId: "root",
    path: "blog/a",
    index: void 0,
    caseSensitive: void 0,
    module: a_exports
  },
  "routes/blog/b": {
    id: "routes/blog/b",
    parentId: "root",
    path: "blog/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports
  },
  "routes/blog/c": {
    id: "routes/blog/c",
    parentId: "root",
    path: "blog/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvc3RhdGUvQXV0aFByb3ZpZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Mb2dvdXRGb3JtLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BcHBCYXIudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhDb250cm9scy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvbi50c3giLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2F1dGgudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzIiwgIi4uLy4uLy4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwUGFwZXIudHN4IiwgIi4uLy4uLy4uL2FwcC90aGVtZS9DbGllbnRTdHlsZUNvbnRleHQudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRGbG9vclBsYW4udHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9mbG9vclBsYW5zLnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRQb3N0LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9mbG9vci1wbGFucy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29kZUJsb2NrLnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvbWR4LnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9zaWduLiRhdXRoVHlwZS50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9kYXNoYm9hcmQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9kYXRhUG9pbnRzLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvaG9va3MvdXNlRmlyZWJhc2VMb2FkZXJEYXRhLnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvbmV3LnRzeCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9hLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9iLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9jLm1keCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXJcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2EubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2MubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy8kZmxvb3JQbGFuSWQuZWRpdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy86Zmxvb3JQbGFuSWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZC9lZGl0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9mbG9vci1wbGFucy9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy9jcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFuc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ24uJGF1dGhUeXBlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ24vOmF1dGhUeXBlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdXBkYXRlLXNlc3Npb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidXBkYXRlLXNlc3Npb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvbmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9hXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2FcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9hXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9jXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSBcIn4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJ+L3RoZW1lXCI7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjb25zdCBNdWlSZW1peFNlcnZlciA9ICgpID0+IChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG5cbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSBzdHJpbmcuXG4gIGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyg8TXVpUmVtaXhTZXJ2ZXIgLz4pO1xuXG4gIC8vIEdyYWIgdGhlIENTUyBmcm9tIGVtb3Rpb25cbiAgY29uc3QgeyBzdHlsZXMgfSA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG4gIGxldCBzdHlsZXNIVE1MID0gXCJcIjtcblxuICBzdHlsZXMuZm9yRWFjaCgoeyBrZXksIGlkcywgY3NzIH0pID0+IHtcbiAgICBjb25zdCBlbW90aW9uS2V5ID0gYCR7a2V5fSAke2lkcy5qb2luKFwiIFwiKX1gO1xuICAgIGNvbnN0IG5ld1N0eWxlVGFnID0gYDxzdHlsZSBkYXRhLWVtb3Rpb249XCIke2Vtb3Rpb25LZXl9XCI+JHtjc3N9PC9zdHlsZT5gO1xuICAgIHN0eWxlc0hUTUwgPSBgJHtzdHlsZXNIVE1MfSR7bmV3U3R5bGVUYWd9YDtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBlbW90aW9uIHN0eWxlIHRhZ3MgYWZ0ZXIgdGhlIGluc2VydGlvbiBwb2ludCBtZXRhIHRhZ1xuICBjb25zdCBtYXJrdXAgPSBodG1sLnJlcGxhY2UoXG4gICAgLzxtZXRhKFxccykqbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKlxcLz4vLFxuICAgIGA8bWV0YSBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIiBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIi8+JHtzdHlsZXNIVE1MfWBcbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gXCJ+L3RoZW1lL2NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiBcImRhcmtcIixcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuUFJJTUFSWSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogQ09MT1JTLlNFQ09OREFSWSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiBDT0xPUlMuRVJST1IsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiBDT0xPUlMuV0FSTklORyxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIG1haW46IENPTE9SUy5JTkZPLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogQ09MT1JTLlNVQ0NFU1MsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBDT0xPUlMuQkFDS0dST1VORC5ERUZBVUxULFxuICAgICAgcGFwZXI6IENPTE9SUy5CQUNLR1JPVU5ELlBBUEVSLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBOYW1lIG9mIHRoZSBjb21wb25lbnQgXHUyNjlCXHVGRTBGXG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLCAvLyBObyBtb3JlIHJpcHBsZSwgb24gdGhlIHdob2xlIGFwcGxpY2F0aW9uIFx1RDgzRFx1RENBMyFcbiAgICAgICAgLy8gdmFyaWFudDogXCJvdXRsaW5lZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7IiwgImV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XG4gIFBSSU1BUlk6IFwiIzMwNTdFMVwiLFxuICBTRUNPTkRBUlk6IFwiI0RERkZGN1wiLFxuICAvLyBFUlJPUjogXCIjRkYwMDQ3XCIsXG4gIEVSUk9SOiBcIiNmZjJmMDBcIixcbiAgV0FSTklORzogXCIjRkZBNTAwXCIsXG4gIElORk86IFwiIzAwRTdGRlwiLFxuICBTVUNDRVNTOiBcIiMwMEZGN0VcIixcbiAgQkFDS0dST1VORDoge1xuICAgIERFRkFVTFQ6IFwiIzBGMEYxNVwiLFxuICAgIC8vIFBBUEVSOiBcIiMzMDU3RTFcIixcbiAgICBQQVBFUjogXCIjMDcwMzE5XCIsXG4gIH0sXG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgT3V0bGV0LFxuICB1c2VDYXRjaCxcbiAgTWV0YSxcbiAgU2NyaXB0cyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBBdXRoVXNlciwgZ2V0QXV0aFVzZXIsIGdldFVzZXJUb2tlbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7XG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSBcIn4vdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9tb2Rlcm4tY3NzLXJlc2V0QDEuNC4wL2Rpc3QvcmVzZXQubWluLmNzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcbiAgICB9LFxuICBdO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG4gICh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcbiAgICBjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cbiAgICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuICAgIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIC8vIHJlLWluamVjdCB0YWdzXG4gICAgICBjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcbiAgICAgIGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgICAgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcblxudHlwZSBMb2FkZXJEYXRhID0geyB1c2VyOiBBdXRoVXNlciB8IG51bGw7IHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbCB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXIsXG4gICAgdXNlclRva2VuLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmZ1bmN0aW9uIFByb3ZpZGVycyh7XG4gIHVzZXIsXG4gIGNoaWxkcmVuLFxuICB1c2VyVG9rZW4sXG59OiB7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXIgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgdXNlciwgdXNlclRva2VuIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8UHJvdmlkZXJzIHVzZXI9e3VzZXJ9IHVzZXJUb2tlbj17dXNlclRva2VufT5cbiAgICAgICAgPEFwcEJhciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1Byb3ZpZGVycz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBSb290RXJyb3Ioe1xuICBkb2NUaXRsZSA9IFwiT29wcyFcIixcbiAgdGl0bGUgPSBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBcdUQ4M0RcdURFMjVcIixcbiAgbWVzc2FnZSA9IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2RvY1RpdGxlfT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcFBhcGVyIGxlZnRDb2xvcj1cImVycm9yXCIgcmlnaHRDb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgdGl0bGUgPSBgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWA7XG4gIHJldHVybiAoXG4gICAgPFJvb3RFcnJvclxuICAgICAgZG9jVGl0bGU9e3RpdGxlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIFwiV2VsbCB0aGlzIGlzIGVtYmFyc2luZy4gXHVEODNEXHVERTA1IEhhdmUgeW91IHRyaWVkIHR1cm5pbmcgaXQgb2ZmIGFuZCBiYWNrIG9uIGFnYWluP1wiXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8Um9vdEVycm9yIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xufVxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VGZXRjaGVyLCB1c2VMb2NhdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoVXNlciB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXI6IHVzZXJQcm9wLFxuICB1c2VyVG9rZW46IHVzZXJUb2tlblByb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxBdXRoVXNlciB8IG51bGw+KHVzZXJQcm9wKTtcbiAgY29uc3QgbG9nb3V0Rm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPih1c2VyVG9rZW5Qcm9wIHx8IFwiXCIpO1xuICBjb25zdCB1c2VyVG9rZW5Gb3JtID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyUHJvcCk7XG4gIH0sIFt1c2VyUHJvcF0pO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zaWduL1wiKSA/IFwiL2Zsb29yLXBsYW5zXCIgOiBwYXRobmFtZTtcblxuICBmdW5jdGlvbiBzZW5kVXNlclRva2VuKCkge1xuICAgIGlmICghdXNlclRva2VuRm9ybS5jdXJyZW50KSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodXNlclRva2VuRm9ybS5jdXJyZW50KTtcbiAgICBmZXRjaGVyLnN1Ym1pdChmb3JtRGF0YSwge21ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjpcIi91cGRhdGUtc2Vzc2lvblwifSlcbiAgfVxuXG4gIC8vIGxpc3RlbiBmb3IgdG9rZW4gY2hhbmdlc1xuICAvLyBjYWxsIHNldFVzZXIgYW5kIHdyaXRlIG5ldyB0b2tlbiBhcyBhIGNvb2tpZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgcmV0dXJuIGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlckZyb21DaGFuZ2UpID0+IHtcbiAgICAgIGlmICh1c2VyRnJvbUNoYW5nZSA9PT0gbnVsbCAmJiB1c2VyICE9PSBudWxsKSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIGlmICghbG9nb3V0Rm9ybVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxvZ291dEZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlckZyb21DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyRnJvbUNoYW5nZS5nZXRJZFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdXNlclRva2VuKSB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyRnJvbUNoYW5nZSk7XG4gICAgICAgICAgc2V0VXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgICBhd2FpdCBhZGRBcHBVc2VyKHVzZXJGcm9tQ2hhbmdlLnVpZCk7XG4gICAgICAgICAgc2VuZFVzZXJUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPExvZ291dEZvcm0gcmVmPXtsb2dvdXRGb3JtUmVmfSAvPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17dXNlclRva2VuRm9ybX0gYWN0aW9uPVwiL3VwZGF0ZS1zZXNzaW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInB1dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJUb2tlblwiIHZhbHVlPXt1c2VyVG9rZW59IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gcmVkaXJlY3RUb31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiIsICJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtUHJvcHMgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IExvZ291dEZvcm0gPSBmb3J3YXJkUmVmPEhUTUxGb3JtRWxlbWVudCwgRm9ybVByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxGb3JtIHJlZj17cmVmfSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIHsuLi5wcm9wc30gLz5cbik7XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xzIGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aENvbnRyb2xzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNdWlBcHBCYXI+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSlgLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEZpbGxDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRmxvb3IgUGxhblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgICAgICBjb2xvcj17XCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIFtCRVRBXVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxBdXRoQ29udHJvbHMgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9NdWlBcHBCYXI+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpbkJvdHRvbTogXCI2NHB4XCIgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IFNpZ25PdXRCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b25cIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluVXAoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoKCk7XG4gIHJldHVybiB1c2VyID09PSBudWxsID8gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiPlxuICAgICAgICBzaWduIGluXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc3g9e3sgbWFyZ2luTGVmdDogMiB9fVxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgIHRvPVwiL3NpZ24vdXBcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHNpZ24gdXBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApIDogKFxuICAgIDxCb3g+XG4gICAgICA8TG9nb3V0Rm9ybT5cbiAgICAgICAgPFNpZ25PdXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgc2lnbiBvdXRcbiAgICAgICAgPC9TaWduT3V0QnV0dG9uPlxuICAgICAgPC9Mb2dvdXRGb3JtPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25PdXRCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8PlxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IHsuLi5wcm9wc30+c2lnbiBvdXQ8L0J1dHRvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbiIsICJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIG9uSWRUb2tlbkNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBhdXRoXHJcbiAgICAuc2lnbk91dCgpXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dCFcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0aFN0YXRlQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiKHVzZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRUb2tlbkNoYW5nZWQoY2IpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gb25JZFRva2VuQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpe1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclRva2VuUmVmcmVzaCgpe1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBdXRoRW11bGF0b3IsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MsIGxvZ0V2ZW50IH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmxldCBhcHAsIGF1dGgsIGRiLCBhbmFseXRpY3M7XHJcblxyXG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcclxuICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIC8vIFRPRE86IE1ha2Ugc3VyZSB0aGVzZSBhcmUgeW91ciB2YWx1ZXNcclxuICAgIGFwaUtleTogXCJBSXphU3lEbEV6Y0plTm5HRDFMM1RtSkdieWxzRlFkN2RtbWFBOGdcIixcclxuICAgIGF1dGhEb21haW46IFwiZmxvb3JwbGFuLWNvZGVzYWdhcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJmbG9vcnBsYW4tY29kZXNhZ2FzXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImZsb29ycGxhbi1jb2Rlc2FnYXMuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNzQxOTg5NjQ4ODFcIixcclxuICAgIGFwcElkOiBcIjE6MTA3NDE5ODk2NDg4MTp3ZWI6NzQyZTNhMzdmMDMwNzA4MGY0MmQzMFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUZEM1hLNjYzQzBcIixcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoKTtcclxuICB9XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvcihkYiwgXCJsb2NhbGhvc3RcIiwgODA4MCk7XHJcbiAgICBjb25uZWN0QXV0aEVtdWxhdG9yKGF1dGgsIFwiaHR0cDovL2xvY2FsaG9zdDo5MDk5XCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhcHAsXHJcbiAgYXV0aCxcclxuICBkYixcclxuICBhbmFseXRpY3MsXHJcbiAgZ2V0QXV0aCxcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgZ2V0QW5hbHl0aWNzLFxyXG4gIGxvZ0V2ZW50LFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgRGVjb2RlZElkVG9rZW4gfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vbGliL2F1dGgvdG9rZW4tdmVyaWZpZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEF1dGhVc2VyID0gRGVjb2RlZElkVG9rZW4gfCBVc2VyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pOiBQcm9taXNlPFVzZXI+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxubGV0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiY3Nfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgbGV0IHVzZXJUb2tlbiA9IHNlc3Npb24uZ2V0KFwidXNlclRva2VuXCIpO1xuICBpZiAoIXVzZXJUb2tlbiB8fCB0eXBlb2YgdXNlclRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJUb2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPEF1dGhVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuICBpZiAodHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoZWRVc2VyID0gYXdhaXQgZ2V0QXV0aCgpLnZlcmlmeUlkVG9rZW4odXNlclRva2VuKTtcbiAgICByZXR1cm4gYXV0aGVkVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXIgZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgbGV0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gICAgcmV0dXJuIGF1dGhVc2VyPy51aWQgfHwgbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJZCBlcnJvclwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgbGV0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9zaWduL2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9zaWduL2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbjogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VyVG9rZW5cIiwgdXNlclRva2VuKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIEFwcCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmltcG9ydCB7IEF1dGgsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbmxldCBhcHA6IEFwcCwgYXV0aDogQXV0aCwgZGI6IEZpcmVzdG9yZTtcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHByb2Nlc3MuZW52LkZJUkVTVE9SRV9FTVVMQVRPUl9IT1NUID0gXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICAgIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjkwOTlcIjtcbiAgfVxuICBjb25zdCBlbmNvZGVkS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfQkFTRTY0IHx8IFwiXCI7XG4gIGNvbnN0IGRlY29kZWRLZXkgPSBCdWZmZXIuZnJvbShlbmNvZGVkS2V5LCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGNlcnQoe1xuICAgICAgcHJpdmF0ZUtleTogZGVjb2RlZEtleSxcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0uZmlyZWJhc2Vpby5jb21gLFxuICB9KTtcbiAgYXV0aCA9IGdldEF1dGgoKTtcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IHsgYXBwLCBhdXRoLCBnZXRBdXRoLCBkYiwgZ2V0RmlyZXN0b3JlIH07XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGVmdENvbG9yPzogc3RyaW5nO1xuICByaWdodENvbG9yPzogc3RyaW5nO1xuICBzeD86IG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBQYXBlcih7XG4gIGNoaWxkcmVuLFxuICBsZWZ0Q29sb3IgPSBcInByaW1hcnlcIixcbiAgcmlnaHRDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHN4ID0ge30sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgc3BhY2luZz17Mn1cbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHBhZGRpbmc6IDQsXG5cbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgYm9yZGVyOiBcInNvbGlkIDVweCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMWVtXCIsXG5cbiAgICAgICAgXCImOmJlZm9yZSBcIjoge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIG1hcmdpbjogXCItNXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGVbbGVmdENvbG9yXS5tYWlufSwgJHt0aGVtZS5wYWxldHRlW3JpZ2h0Q29sb3JdLm1haW59KWAsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDbGllbnRTdHlsZUNvbnRleHREYXRhIHtcbiAgcmVzZXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YT4oe1xuICByZXNldDogKCkgPT4ge30sXG59KTsiLCAiaW1wb3J0IHsgcmVkaXJlY3QsIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBFZGl0Rmxvb3JQbGFuIH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0Rmxvb3JQbGFuXCI7XG5pbXBvcnQge1xuICBGbG9vclBsYW5XaXRoSWQsXG4gIGdldEZsb29yUGxhbixcbiAgc2V0Rmxvb3JQbGFuLFxufSBmcm9tIFwifi9kYi9mbG9vclBsYW5zLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEZsb29yUGxhbldpdGhJZCB7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLmZsb29yUGxhbklkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBmbG9vclBsYW4gPSBhd2FpdCBnZXRGbG9vclBsYW4ocGFyYW1zLmZsb29yUGxhbklkKTtcbiAgaW52YXJpYW50KGZsb29yUGxhbiwgXCJleHBlY3RlZCBmbG9vclBsYW5cIik7XG4gIHJldHVybiB7IC4uLmZsb29yUGxhbiwgdXNlcklkIH07XG59O1xuXG50eXBlIFBsYW5FcnJvciA9IHtcbiAgb3duZXI/OiBib29sZWFuO1xuICB0aXRsZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbiAgY29zdD86IGJvb2xlYW47XG4gIC8vIFRPRE8/OiB3aGVuIHdlIGhhdmUgdXNlcnMgdGhlbiBsZXRzIGRvIHRoaXNcbiAgLy8gcG9wdWxhcml0eT86IHtcbiAgLy8gICByYXRpbmc/OiBudW1iZXI7XG4gIC8vICAgY291bnQ/OiBudW1iZXI7XG4gIC8vIH07XG4gIGdpdGh1Yk93bmVyPzogYm9vbGVhbjtcbiAgZ2l0aHViUmVwbz86IGJvb2xlYW47XG4gIHNldHVwVGltZT86IGJvb2xlYW47XG4gIHRhZ3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZmxvb3JQbGFuSWQgPSBwYXJhbXMuZmxvb3JQbGFuSWQ7XG4gIGNvbnN0IG93bmVyID0gZm9ybURhdGEuZ2V0KFwib3duZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGNvc3QgPSBmb3JtRGF0YS5nZXQoXCJjb3N0XCIpO1xuICBjb25zdCBnaXRodWJPd25lciA9IGZvcm1EYXRhLmdldChcImdpdGh1Yk93bmVyXCIpO1xuICBjb25zdCBnaXRodWJSZXBvID0gZm9ybURhdGEuZ2V0KFwiZ2l0aHViUmVwb1wiKTtcbiAgY29uc3Qgc2V0dXBUaW1lID0gZm9ybURhdGEuZ2V0KFwic2V0dXBUaW1lXCIpO1xuICBjb25zdCB0YWdzID1cbiAgICBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSlcbiAgICAgID8uc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLnRyaW0oKSkgfHwgW107XG5cbiAgY29uc3QgZXJyb3JzOiBQbGFuRXJyb3IgPSB7fTtcbiAgaWYgKCFvd25lcikgZXJyb3JzLm93bmVyID0gdHJ1ZTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFjb3N0KSBlcnJvcnMuY29zdCA9IHRydWU7XG4gIGlmICghZ2l0aHViT3duZXIpIGVycm9ycy5naXRodWJPd25lciA9IHRydWU7XG4gIGlmICghZ2l0aHViUmVwbykgZXJyb3JzLmdpdGh1YlJlcG8gPSB0cnVlO1xuICBpZiAoIXNldHVwVGltZSkgZXJyb3JzLnNldHVwVGltZSA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgZmxvb3JQbGFuSWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvc3QgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1Yk93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBnaXRodWJSZXBvID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzZXR1cFRpbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IHNldEZsb29yUGxhbihmbG9vclBsYW5JZCwge1xuICAgIG93bmVyLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvc3QsXG4gICAgZ2l0aHViT3duZXIsXG4gICAgZ2l0aHViUmVwbyxcbiAgICBzZXR1cFRpbWUsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Zsb29yLXBsYW5zXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBsYW4oKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VySWQsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29zdCxcbiAgICBnaXRodWJPd25lcixcbiAgICBnaXRodWJSZXBvLFxuICAgIHNldHVwVGltZSxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPEVkaXRGbG9vclBsYW5cbiAgICAgIGlzQ3JlYXRlPXtmYWxzZX1cbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgb3duZXI9e3VzZXJJZH1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIGNvc3Q9e2Nvc3R9XG4gICAgICBnaXRodWJPd25lcj17Z2l0aHViT3duZXJ9XG4gICAgICBnaXRodWJSZXBvPXtnaXRodWJSZXBvfVxuICAgICAgc2V0dXBUaW1lPXtzZXR1cFRpbWV9XG4gICAgICB0YWdzPXt0YWdzLmpvaW4oXCIsIFwiKX1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgQm94LFxuICBJbnB1dExhYmVsLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBsb2dFdmVudCwgYW5hbHl0aWNzIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDcmVhdGU6IGJvb2xlYW47XG4gIGVycm9ycztcbiAgb3duZXI6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjb3N0Pzogc3RyaW5nO1xuICBnaXRodWJPd25lcj86IHN0cmluZztcbiAgZ2l0aHViUmVwbz86IHN0cmluZztcbiAgc2V0dXBUaW1lPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRGbG9vclBsYW4oe1xuICBpc0NyZWF0ZSxcbiAgZXJyb3JzLFxuICBvd25lcixcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGNvc3QgPSBcIlwiLFxuICBnaXRodWJPd25lciA9IFwiXCIsXG4gIGdpdGh1YlJlcG8gPSBcIlwiLFxuICBzZXR1cFRpbWUgPSBcIlwiLFxuICB0YWdzID0gXCJcIixcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIHNwYWNpbmc9ezJ9IHN4PXt7IHA6IDQgfX0+XG4gICAgICA8Rm9ybVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgb25TdWJtaXQ9eygpID0+IHtcbiAgICAgICAgICBsb2dFdmVudChhbmFseXRpY3MsIGlzQ3JlYXRlID8gXCJjcmVhdGVcIiA6IFwiZWRpdFwiKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3duZXJcIiB2YWx1ZT17b3duZXJ9IC8+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiNjBweCBhdXRvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmdpdGh1Yk93bmVyfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1Yk93bmVyXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHaXRodWIgT3duZXJcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LmdpdGh1Yk93bmVyXG4gICAgICAgICAgICAgICAgICA/IFwiR2l0aHViIE93bmVyIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJXaGljaCBHaXRodWIgT3JnYW5pemF0aW9uIG93bnMgdGhpcyBwcm9qZWN0P1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJnaXRodWJPd25lclwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dpdGh1Yk93bmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5naXRodWJSZXBvfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBsYWJlbD1cIkdpdGh1YiBSZXBvXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy5naXRodWJSZXBvXG4gICAgICAgICAgICAgICAgICA/IFwiZ2l0aHViUmVwbyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgR2l0aHViIFJlcG8/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnaXRodWJSZXBvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkRpc3BsYXkgbmFtZSBmb3IgdGhlIHByb2plY3QgfHwgUmVwbyBOYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBtYWtlcyB0aGlzIHJlcG8gc28gZ3JlYXQ/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgZXJyb3I9e2Vycm9ycz8uY29zdH0+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWxhYmVsLWNvc3RcIj5Db3N0PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1jb3N0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29zdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29zdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJmcmVlXCJ9PkZyZWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkXCJ9PiQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkJFwifT4kJDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIiQkJFwifT4kJCQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LmNvc3RcbiAgICAgICAgICAgICAgICAgID8gXCJDb3N0IGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJIb3cgbXVjaCBkb2VzIHRoaXMgcGxhbiBjb3N0IHRvIHJ1biB3aGVuIHN0YXJ0aW5nP1wifVxuICAgICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBlcnJvcj17ZXJyb3JzPy5zZXR1cFRpbWV9PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIj5TZXR1cCBUaW1lPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwic2V0dXBUaW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNldHVwIFRpbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2V0dXBUaW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjVtaW5cIn0+NW1pbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjMwbWluXCJ9PjMwbWluPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWhyXCJ9PjFocjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjJoclwifT4yaHI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCI1aHJcIn0+NWhyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWRheVwifT4xZGF5PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMXdlZWtcIn0+MXdlZWs8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LnNldHVwVGltZVxuICAgICAgICAgICAgICAgICAgPyBcIlNldHVwIFRpbWUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBzZXR1cD9cIn1cbiAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGFnc31cbiAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy50YWdzXG4gICAgICAgICAgICAgICAgICA/IFwidGFncyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBhcmUgc29tZSBzZWFyY2ggdGVybXMgZm9yIHRoaXMgcmVwbz9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICB7aXNDcmVhdGUgPyBcIkNyZWF0ZSBGbG9vciBQbGFuXCIgOiBcIlVwZGF0ZSBGbG9vciBQbGFuXCJ9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImZsb29yUGxhbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW4ge1xuICBvd25lcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBzdHJpbmc7XG4gIC8vIFRPRE86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5OiB7XG4gIC8vICAgcmF0aW5nOiBudW1iZXI7XG4gIC8vICAgY291bnQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI6IHN0cmluZztcbiAgZ2l0aHViUmVwbzogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIHF1ZXJ5TGlzdD86IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW5XaXRoSWQgZXh0ZW5kcyBGbG9vclBsYW4ge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEZsb29yUGxhbj47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChmbG9vclBsYW5JZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhmbG9vclBsYW5JZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8Rmxvb3JQbGFuPjtcblxuY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiBnZXRDb2xsZWN0aW9uUmVmKCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZsb29yUGxhbnMoKTogUHJvbWlzZTxGbG9vclBsYW5XaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJlZEZsb29yUGxhbnMoe1xuICBxdWVyeVN0cmluZyxcbiAgdXNlcklkLFxufToge1xuICBxdWVyeVN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsO1xufSk6IFByb21pc2U8Rmxvb3JQbGFuV2l0aElkW10+IHtcbiAgbGV0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIHF1ZXJ5UmVmID0gcXVlcnlSZWYud2hlcmUoXCJvd25lclwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcbiAgfVxuICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICBxdWVyeVJlZiA9IHF1ZXJ5UmVmLndoZXJlKFxuICAgICAgXCJxdWVyeUxpc3RcIixcbiAgICAgIFwiYXJyYXktY29udGFpbnMtYW55XCIsXG4gICAgICBxdWVyeVN0cmluZ1xuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSlcbiAgICAgICAgLnNsaWNlKDAsIDkpXG4gICAgKSBhcyBRdWVyeTxGbG9vclBsYW4+O1xuICB9XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGbG9vclBsYW4oXG4gIGZsb29yUGxhbklkXG4pOiBQcm9taXNlPEZsb29yUGxhbldpdGhJZCB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGZsb29yUGxhbklkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGRvY1JlZi5pZCwgLi4uKGRvY1NuYXA/LmRhdGEoKSBhcyBGbG9vclBsYW4pIH0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZsb29yUGxhbihmbG9vclBsYW46IEZsb29yUGxhbik6IFByb21pc2U8Rmxvb3JQbGFuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gW1xuICAgICAgLi4uZmxvb3JQbGFuLnRpdGxlLnNwbGl0KFwiIFwiKS5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSksXG4gICAgICAuLi5mbG9vclBsYW4udGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSksXG4gICAgXTtcbiAgICBmbG9vclBsYW4ucXVlcnlMaXN0ID0gcXVlcnlMaXN0O1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGdldENvbGxlY3Rpb25SZWYoKS5hZGQoZmxvb3JQbGFuKTtcblxuICAgIGNvbnN0IG5ld0Zsb29yUGxhbiA9IGF3YWl0IGdldEZsb29yUGxhbihkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3Rmxvb3JQbGFuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Rmxvb3JQbGFuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldEZsb29yUGxhbihmbG9vclBsYW5JZDpzdHJpbmcsIGZsb29yUGxhbjogRmxvb3JQbGFuKTogUHJvbWlzZTxGbG9vclBsYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXG4gICAgICAuLi5mbG9vclBsYW4udGl0bGUuc3BsaXQoXCIgXCIpLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKSxcbiAgICAgIC4uLmZsb29yUGxhbi50YWdzLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKSxcbiAgICBdO1xuICAgIGZsb29yUGxhbi5xdWVyeUxpc3QgPSBxdWVyeUxpc3Q7XG4gICAgYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGZsb29yUGxhbklkKS5zZXQoZmxvb3JQbGFuKTtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXREb2NSZWZlcmVuY2UoZmxvb3JQbGFuSWQpO1xuXG4gICAgY29uc3QgbmV3Rmxvb3JQbGFuID0gYXdhaXQgZ2V0Rmxvb3JQbGFuKGRvY1JlZi5pZCk7XG4gICAgaWYgKCFuZXdGbG9vclBsYW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdGbG9vclBsYW47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0LCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7XG4gIGFkZEJsb2dQb3N0LFxuICBCbG9nUG9zdFdpdGhJZCxcbiAgZ2V0QmxvZ1Bvc3QsXG59IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRQb3N0IH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0UG9zdFwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEJsb2dQb3N0V2l0aElkIHtcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbiAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuICByZXR1cm4geyAuLi5ibG9nUG9zdCwgaXNBdXRob3IgfTtcbn07XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW47XG4gIHNsdWc/OiBib29sZWFuO1xuICBtYXJrZG93bj86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaXNQdWJsaXNoZWQgPT09IFwiYm9vbGVhblwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwdWJsaXNoRGF0ZSA9PT0gXCJudW1iZXJcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VVcmwgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlQWx0ID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IHtcbiAgICBhdXRob3JJZCxcbiAgICBpc1B1Ymxpc2hlZDogaW5pdElzUHVibGlzaGVkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd246IGluaXRNYXJrZG93bixcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUocHVibGlzaERhdGUpKTtcbiAgY29uc3QgW21hcmtkb3duLCBzZXRNYXJrZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRNYXJrZG93bik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUoaW5pdElzUHVibGlzaGVkKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFZGl0UG9zdFxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICBhdXRob3JJZD17YXV0aG9ySWR9XG4gICAgICBpc1B1Ymxpc2hlZD17aXNQdWJsaXNoZWR9XG4gICAgICBzZXRJc1B1Ymxpc2hlZD17c2V0SXNQdWJsaXNoZWR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgc2V0RGF0ZT17c2V0RGF0ZX1cbiAgICAgIG1hcmtkb3duPXttYXJrZG93bn1cbiAgICAgIGhhbmRsZUVkaXRvckNoYW5nZT17aGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgc2x1Zz17c2x1Z31cbiAgICAgIGltYWdlVXJsPXtpbWFnZVVybH1cbiAgICAgIGltYWdlQWx0PXtpbWFnZUFsdH1cbiAgICAgIHRhZ3M9e3RhZ3M/LmpvaW4oXCIsIFwiKSB8fCBcIlwifVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5cbmNvbnN0IEJMT0dfUE9TVFNfQ09MTEVDVElPTiA9IFwiYmxvZ1Bvc3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3Qge1xuICBhdXRob3JJZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIG1hcmtkb3duOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGlzUHVibGlzaGVkOiBib29sZWFuO1xuICBwdWJsaXNoRGF0ZTogbnVtYmVyO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3RXaXRoSWQgZXh0ZW5kcyBCbG9nUG9zdCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEJMT0dfUE9TVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYmxvZ1Bvc3RJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhibG9nUG9zdElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxCbG9nUG9zdD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4gZ2V0Q29sbGVjdGlvblJlZigpIGFzIFF1ZXJ5PEJsb2dQb3N0PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSgpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3RJZCk6IFByb21pc2U8QmxvZ1Bvc3RXaXRoSWQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShibG9nUG9zdElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGRvY1JlZi5pZCwgLi4uZG9jU25hcD8uZGF0YSgpIGFzIEJsb2dQb3N0IH0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJsb2dQb3N0KGJsb2dQb3N0OiBCbG9nUG9zdCk6IFByb21pc2U8QmxvZ1Bvc3Q+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3Quc2x1Zykuc2V0KGJsb2dQb3N0KTtcblxuICAgIGNvbnN0IG5ld0Jsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3Quc2x1Zyk7XG4gICAgaWYgKCFuZXdCbG9nUG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Jsb2dQb3N0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEFwcFVzZXIsIEFwcFVzZXJXaXRoSWQsIEFQUF9VU0VSU19DT0xMRUNUSU9OIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgQVBQX1VTRVJTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYXBwVXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGFwcFVzZXJJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QXBwVXNlcj47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxBcHBVc2VyPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFwcFVzZXJzKHVzZXJJZCk6IFByb21pc2U8QXBwVXNlcldpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFwcFVzZXIoYXBwVXNlcklkKTogUHJvbWlzZTxBcHBVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQXBwVXNlcihcbiAgYXBwVXNlcklkOiBzdHJpbmdcbik6IFByb21pc2U8QXBwVXNlcj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoZXhpc3RpbmdBcHBVc2VyKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHBVc2VyO1xuICAgIH1cbiAgICBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKS5zZXQoe3Blcm1pc3Npb25zOiBbXX0pO1xuXG4gICAgY29uc3QgbmV3QXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoIW5ld0FwcFVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcHBVc2VyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIEFwcFVzZXIge1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcFVzZXJXaXRoSWQgZXh0ZW5kcyBBcHBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9VU0VSU19DT0xMRUNUSU9OID0gXCJhcHBVc2Vyc1wiOyIsICJpbXBvcnQgeyBGb3JtLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgVGV4dEZpZWxkLFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIEJveCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlVGltZVBpY2tlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFBvc3Qoe1xuICBlcnJvcnMsXG4gIGF1dGhvcklkLFxuICBpc1B1Ymxpc2hlZCxcbiAgc2V0SXNQdWJsaXNoZWQsXG4gIGRhdGUsXG4gIHNldERhdGUsXG4gIG1hcmtkb3duLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2UsXG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBzbHVnID0gXCJcIixcbiAgaW1hZ2VVcmwgPSBcIlwiLFxuICBpbWFnZUFsdCA9IFwiXCIsXG4gIHRhZ3MgPSBcIlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFjayBzcGFjaW5nPXsyfSBzeD17eyBwOiA0IH19PlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRob3JJZFwiIHZhbHVlPXthdXRob3JJZH0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cImlzUHVibGlzaGVkXCJcbiAgICAgICAgICB2YWx1ZT17aXNQdWJsaXNoZWQudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWFya2Rvd25cIiB2YWx1ZT17bWFya2Rvd259IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJwdWJsaXNoRGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGU/LmdldFRpbWUoKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBzeD17eyBwOiA0IH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiBcIjMyMHB4XCIgfSxcbiAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIwIDAgMzIwcHhcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SXNQdWJsaXNoZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcImNvbnRyb2xsZWRcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2lzUHVibGlzaGVkID8gXCJJcyBQdWJsaXNoZWRcIiA6IFwiTm90IFB1Ymxpc2hlZFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8RGF0ZVRpbWVQaWNrZXIgZGF0ZT17ZGF0ZX0gc2V0RGF0ZT17c2V0RGF0ZX0gdmFyaWFudD1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRpdGxlID8gXCJUaXRsZSBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb24gPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnNsdWd9XG4gICAgICAgICAgICAgICAgaWQ9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBVcmxcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VVcmwgPyBcImltYWdlVXJsIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VBbHRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgQWx0IFRleHRcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VBbHQgPyBcImltYWdlQWx0IGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZUFsdFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZUFsdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnRhZ3N9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8udGFncyA/IFwidGFncyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YWdzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcImNvbHVtbi1yZXZlcnNlXCIgfX1cbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgc3g9e3sgZmxleDogXCIxIDFcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDFcIiwgbWluSGVpZ2h0OiBcIjUwMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHZoXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U9XCJtYXJrZG93blwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWFya2Rvd259XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIGxhYmVsPVwiTWFya2Rvd25cIlxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH0gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezJ9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBQb3N0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IFRleHRGaWVsZCwge0Jhc2VUZXh0RmllbGRQcm9wc30gZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEFkYXB0ZXJEYXRlRm5zIGZyb20gJ0BtdWkvbGFiL0FkYXB0ZXJEYXRlRm5zJztcbmltcG9ydCBMb2NhbGl6YXRpb25Qcm92aWRlciBmcm9tICdAbXVpL2xhYi9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTVVJRGF0ZVRpbWVQaWNrZXIgZnJvbSAnQG11aS9sYWIvRGF0ZVRpbWVQaWNrZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlVGV4dEZpZWxkUHJvcHMge1xuICBkYXRlOiBEYXRlIHwgbnVsbDtcbiAgc2V0RGF0ZTogKG5ld0RhdGU6IERhdGUgfCBudWxsKSA9PiB2b2lkXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyKHtkYXRlLCBzZXREYXRlLCAuLi50ZXh0RmllbGRQcm9wc306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF0ZUZuc30+XG4gICAgICA8TVVJRGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPFRleHRGaWVsZCBmdWxsV2lkdGggey4uLnByb3BzfSB7Li4udGV4dEZpZWxkUHJvcHN9Lz59XG4gICAgICAgIGxhYmVsPVwiRGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICB2YWx1ZT17ZGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdEYXRlKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XG4gICk7XG59IiwgImltcG9ydCB7IHJlZGlyZWN0LCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgRWRpdEZsb29yUGxhbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdEZsb29yUGxhblwiO1xuaW1wb3J0IHsgYWRkRmxvb3JQbGFuIH0gZnJvbSBcIn4vZGIvZmxvb3JQbGFucy5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyB1c2VySWQ6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgdXNlcklkLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBQbGFuRXJyb3IgPSB7XG4gIG93bmVyPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG4gIGNvc3Q/OiBib29sZWFuO1xuICAvLyBUT0RPPzogd2hlbiB3ZSBoYXZlIHVzZXJzIHRoZW4gbGV0cyBkbyB0aGlzXG4gIC8vIHBvcHVsYXJpdHk/OiB7XG4gIC8vICAgcmF0aW5nPzogbnVtYmVyO1xuICAvLyAgIGNvdW50PzogbnVtYmVyO1xuICAvLyB9O1xuICBnaXRodWJPd25lcj86IGJvb2xlYW47XG4gIGdpdGh1YlJlcG8/OiBib29sZWFuO1xuICBzZXR1cFRpbWU/OiBib29sZWFuO1xuICB0YWdzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IG93bmVyID0gZm9ybURhdGEuZ2V0KFwib3duZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGNvc3QgPSBmb3JtRGF0YS5nZXQoXCJjb3N0XCIpO1xuICBjb25zdCBnaXRodWJPd25lciA9IGZvcm1EYXRhLmdldChcImdpdGh1Yk93bmVyXCIpO1xuICBjb25zdCBnaXRodWJSZXBvID0gZm9ybURhdGEuZ2V0KFwiZ2l0aHViUmVwb1wiKTtcbiAgY29uc3Qgc2V0dXBUaW1lID0gZm9ybURhdGEuZ2V0KFwic2V0dXBUaW1lXCIpO1xuICBjb25zdCB0YWdzID1cbiAgICBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSlcbiAgICAgID8uc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLnRyaW0oKSkgfHwgW107XG5cbiAgY29uc3QgZXJyb3JzOiBQbGFuRXJyb3IgPSB7fTtcbiAgaWYgKCFvd25lcikgZXJyb3JzLm93bmVyID0gdHJ1ZTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFjb3N0KSBlcnJvcnMuY29zdCA9IHRydWU7XG4gIGlmICghZ2l0aHViT3duZXIpIGVycm9ycy5naXRodWJPd25lciA9IHRydWU7XG4gIGlmICghZ2l0aHViUmVwbykgZXJyb3JzLmdpdGh1YlJlcG8gPSB0cnVlO1xuICBpZiAoIXNldHVwVGltZSkgZXJyb3JzLnNldHVwVGltZSA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2Ygb3duZXIgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgY29zdCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZ2l0aHViT3duZXIgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1YlJlcG8gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNldHVwVGltZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgdGFncyA9PT0gXCJvYmplY3RcIik7XG5cbiAgYXdhaXQgYWRkRmxvb3JQbGFuKHtcbiAgICBvd25lcixcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBjb3N0LFxuICAgIGdpdGh1Yk93bmVyLFxuICAgIGdpdGh1YlJlcG8sXG4gICAgc2V0dXBUaW1lLFxuICAgIHRhZ3MsXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9mbG9vci1wbGFuc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1BsYW4oKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgcmV0dXJuIDxFZGl0Rmxvb3JQbGFuIGlzQ3JlYXRlIGVycm9ycz17ZXJyb3JzfSBvd25lcj17dXNlcklkfSAvPjtcbn1cbiIsICJpbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBGb3JtR3JvdXAsXG4gIElucHV0QWRvcm5tZW50LFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCBMb2FkZXJGdW5jdGlvbiwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBGbG9vclBsYW5DYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9GbG9vclBsYW5DYXJkXCI7XG5pbXBvcnQge1xuICBGbG9vclBsYW5XaXRoSWQsXG4gIGdldEZpbHRlcmVkRmxvb3JQbGFucyxcbn0gZnJvbSBcIn4vZGIvZmxvb3JQbGFucy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgZmxvb3JQbGFuczogRmxvb3JQbGFuV2l0aElkW107XG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHNob3dNaW5lID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzaG93LW1pbmVcIikgPT09IFwib25cIjtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInF1ZXJ5LXN0cmluZ1wiKTtcbiAgY29uc3QgZmxvb3JQbGFucyA9IGF3YWl0IGdldEZpbHRlcmVkRmxvb3JQbGFucyh7XG4gICAgdXNlcklkOiBzaG93TWluZSA/IHVzZXJJZCA6IG51bGwsXG4gICAgcXVlcnlTdHJpbmc6IHF1ZXJ5U3RyaW5nIHx8IG51bGwsXG4gIH0pO1xuICByZXR1cm4geyBmbG9vclBsYW5zLCB1c2VySWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIGNvbnN0IHsgZmxvb3JQbGFucywgdXNlcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBhbGlnbkl0ZW1zPXtcInN0cmV0Y2hcIn1cbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBzcGFjaW5nPXs0fVxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjEyMHB4IGF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgU2VhcmNoIHRvIGZpbmQgYSBmbG9vciBwbGFuIHRvIGdldCB5b3VyIGFwcCBvZmYgdGhlIGdyb3VuZC5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8RGl2aWRlcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBPUlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvZmxvb3ItcGxhbnMvY3JlYXRlXCIgc2l6ZT17XCJsYXJnZVwifT5cbiAgICAgICAgICBBZGQgQSBGbG9vciBQbGFuIFRvIFNoYXJlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9BcHBQYXBlcj5cbiAgICAgIDxTdGFja1xuICAgICAgICBjb21wb25lbnQ9e0Zvcm19XG4gICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgYWxpZ25JdGVtcz17eyB4czogXCJzdHJldGNoXCIsIG1kOiBcImNlbnRlclwiIH19XG4gICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBcIjIwcHggMFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJxdWVyeS1zdHJpbmdcIlxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIGZvciBGbG9vciBQbGFuXCJcbiAgICAgICAgICBuYW1lPVwicXVlcnktc3RyaW5nXCJcbiAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICApLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZmxleDogXCIxXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17PFN3aXRjaCBuYW1lPVwic2hvdy1taW5lXCIgLz59XG4gICAgICAgICAgICBsYWJlbD1cIlNob3cgTXkgRmxvb3IgUGxhbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBGaWx0ZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1N0YWNrPlxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICB7Zmxvb3JQbGFucy5tYXAoKGZsb29yUGxhbikgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17Zmxvb3JQbGFuLmlkfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXg6IHsgeHM6IFwiMCAwIDgwJVwiLCBtZDogXCIwIDAgNDAlXCIsIGxnOiBcIjAgMCAzMCVcIiB9LFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZsb29yUGxhbkNhcmRcbiAgICAgICAgICAgICAgICB0aXRsZT17Zmxvb3JQbGFuLnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtmbG9vclBsYW4uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY29zdD17Zmxvb3JQbGFuLmNvc3R9XG4gICAgICAgICAgICAgICAgc2V0dXBUaW1lPXtmbG9vclBsYW4uc2V0dXBUaW1lfVxuICAgICAgICAgICAgICAgIG93bmVyPXtmbG9vclBsYW4ub3duZXJ9XG4gICAgICAgICAgICAgICAgZ2l0aHViT3duZXI9e2Zsb29yUGxhbi5naXRodWJPd25lcn1cbiAgICAgICAgICAgICAgICBnaXRodWJSZXBvPXtmbG9vclBsYW4uZ2l0aHViUmVwb31cbiAgICAgICAgICAgICAgICB0YWdzPXtmbG9vclBsYW4udGFnc31cbiAgICAgICAgICAgICAgICBpZD17Zmxvb3JQbGFuLmlkfVxuICAgICAgICAgICAgICAgIHVzZXJJZD17dXNlcklkfVxuXG4gICAgICAgICAgICAgICAgLy8gcG9wdWxhcml0eT17e1xuICAgICAgICAgICAgICAgIC8vICAgcmF0aW5nOiA0LjUsXG4gICAgICAgICAgICAgICAgLy8gICBjb3VudDogMyxcbiAgICAgICAgICAgICAgICAvLyB9fVxuICAgICAgICAgICAgICAgIC8vIHVybD17XG4gICAgICAgICAgICAgICAgLy8gICBcImh0dHBzOi8vZ2l0aHViLmNvbS9mbG9vcnBsYW4vZmxvb3JwbGFuI3dlbGNvbWUtdG8tZmxvb3JwbGFuXCJcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgVHlwb2dyYXBoeSxcbiAgTGluayxcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBTdGFjayxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFN0YXJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXJcIjtcbmltcG9ydCBTdGFyQm9yZGVySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TdGFyQm9yZGVyXCI7XG5pbXBvcnQgU3RhckhhbGZJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXJIYWxmXCI7XG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uXCI7XG5pbXBvcnQgQWNjZXNzVGltZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjZXNzVGltZVwiO1xuaW50ZXJmYWNlIEZsb29yUGxhbkNhcmRQcm9wcyB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNvc3Q6IHN0cmluZztcbiAgLy8gVE9ETzogd2hlbiB3ZSBoYXZlIHVzZXJzIHRoZW4gbGV0cyBkbyB0aGlzXG4gIC8vIHBvcHVsYXJpdHk6IHtcbiAgLy8gICByYXRpbmc6IG51bWJlcjtcbiAgLy8gICBjb3VudDogbnVtYmVyO1xuICAvLyB9O1xuICBnaXRodWJPd25lcjogc3RyaW5nO1xuICBnaXRodWJSZXBvOiBzdHJpbmc7XG4gIHNldHVwVGltZTogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRmxvb3JQbGFuQ2FyZCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY29zdCxcbiAgZ2l0aHViT3duZXIsXG4gIGdpdGh1YlJlcG8sXG4gIHNldHVwVGltZSxcbiAgdGFncyxcbiAgaWQsXG4gIHVzZXJJZCxcbiAgb3duZXIsXG59OiBGbG9vclBsYW5DYXJkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzeD17eyBtYXJnaW46IFwiMjBweCBhdXRvXCIgfX0+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIDxBY2Nlc3NUaW1lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7c2V0dXBUaW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIHsvKiA8TW9uZXRpemF0aW9uT25JY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiLz4gKi99XG4gICAgICAgICAgICAgIHtjb3N0fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnNcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LyogPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1N0YWNrfVxuICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25ldyBBcnJheShwYXJzZUludChwb3B1bGFyaXR5LnJhdGluZy50b1N0cmluZygpLCAxMCkpXG4gICAgICAgICAgICAgIC5maWxsKG51bGwpXG4gICAgICAgICAgICAgIC5tYXAoKHZhbCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aWR4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtwb3B1bGFyaXR5LnJhdGluZyAlIDEgPiAwID8gPFN0YXJIYWxmSWNvbiAvPiA6IG51bGx9XG4gICAgICAgICAgICB7bmV3IEFycmF5KDUgLSBNYXRoLmNlaWwocG9wdWxhcml0eS5yYXRpbmcpKVxuICAgICAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgICAgICAubWFwKCh2YWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFyQm9yZGVySWNvbiBrZXk9e2lkeH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICh7cG9wdWxhcml0eS5jb3VudH0pXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPiAqL31cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwic3RyZXRjaFwiLCBtZDogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge293bmVyID09PSB1c2VySWQgPyAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdG89e2AvZmxvb3ItcGxhbnMvJHtpZH0vZWRpdGB9XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJPd25lcn0vJHtnaXRodWJSZXBvfSNyZWFkbWVgfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gXCJtZHgtYnVuZGxlci9jbGllbnRcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRCbG9nUG9zdCB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhYiwgTGluaywgUGFwZXIsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDb2RlQmxvY2sgfSBmcm9tIFwifi9jb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0XCI7XG5pbXBvcnQgeyBnZXRNZHggfSBmcm9tIFwifi91dGlscy9tZHguc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIGV4dGVuZHMgQmxvZ1Bvc3RXaXRoSWQge1xuICBjb2RlOiBzdHJpbmc7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGE+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgY29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gYXdhaXQgZ2V0TWR4KGJsb2dQb3N0Lm1hcmtkb3duKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGNvZGUsIGlzQXV0aG9yIH07XG59O1xuXG5jb25zdCBIMSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoMVwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDIgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDJcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDMgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDNcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDQgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDRcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDUgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBINiA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IFAgPSAocHJvcHMpID0+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5XCIgY29tcG9uZW50PVwicFwiIHsuLi5wcm9wc30gLz47XG5jb25zdCBCbG9ja3F1b3RlID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg2XCJcbiAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgIHN4PXt7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgbWFyZ2luOiAyLFxuICAgICAgYm9yZGVyTGVmdDogKHsgcGFsZXR0ZSB9KSA9PiBgMnB4IHNvbGlkJHtwYWxldHRlLnByaW1hcnkubWFpbn1gLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IFByZSA9IChwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQ29kZSA9IChwcm9wcykgPT4gPENvZGVCbG9jayB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQSA9IChwcm9wcykgPT4gPExpbmsgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgaXNBdXRob3IsIGNvZGUsIGltYWdlVXJsLCBpbWFnZUFsdCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IENvbXBvbmVudCA9IHVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUpLCBbY29kZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBcIjE3OHB4IGF1dG8gMHB4XCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1hZ2VVcmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzIwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEZhYlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89XCJlZGl0XCJcbiAgICAgICAgICAgIHN4PXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMjAsIHJpZ2h0OiAyMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge0NvbXBvbmVudCA/IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgIGgxOiBIMSxcbiAgICAgICAgICAgICAgaDI6IEgyLFxuICAgICAgICAgICAgICBoMzogSDMsXG4gICAgICAgICAgICAgIGg0OiBINCxcbiAgICAgICAgICAgICAgaDU6IEg1LFxuICAgICAgICAgICAgICBoNjogSDYsXG4gICAgICAgICAgICAgIHA6IFAsXG4gICAgICAgICAgICAgIGJsb2NrcXVvdGU6IEJsb2NrcXVvdGUsXG4gICAgICAgICAgICAgIHByZTogUHJlLFxuICAgICAgICAgICAgICBjb2RlOiBDb2RlLFxuICAgICAgICAgICAgICBhOiBBLFxuXG4gICAgICAgICAgICAgIC8vIGVtOiAocHJvcHMpID0+IDxpIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRlbnJvZFwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIHdyYXBwZXI6ICh7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSkgPT4gPG1haW4gey4uLnJlc3R9IC8+LFxuICAgICAgICAgICAgICAvLyBQbGFuZXQ6ICgpID0+IFwiTmVwdHVuZVwiLFxuICAgICAgICAgICAgICAvLyB0aGVtZToge1xuICAgICAgICAgICAgICAvLyAgIHRleHQ6IChwcm9wcykgPT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUGFwZXIsIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XG5pbXBvcnQgZHJhY3VsYSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2RyYWN1bGFcIjtcblxuY29uc3QgTGluZSA9IHN0eWxlZChcImRpdlwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtcm93XCIsXG59KTtcblxuY29uc3QgTGluZU5vID0gc3R5bGVkKFwic3BhblwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxuICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxuICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgb3BhY2l0eTogXCIwLjVcIixcbn0pO1xuXG5jb25zdCBMaW5lQ29udGVudCA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgZm9udEZhbWlseTogXCInRmlyYSBDb2RlJywgbW9ub3NwYWNlXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvZGVCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT1cImpzeFwiIHRoZW1lPXtkcmFjdWxhfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxQYXBlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lIGtleT17aX0gey4uLmdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KX0+XG4gICAgICAgICAgICAgIDxMaW5lTm8+e2kgKyAxfTwvTGluZU5vPlxuICAgICAgICAgICAgICA8TGluZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDaGlsZHJlbiA9IGNoaWxkcmVuLnJlcGxhY2UoL1xccy9nLCBcIiZuYnNwO1wiKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHNhbml0aXplZENoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0xpbmVDb250ZW50PlxuICAgICAgICAgICAgPC9MaW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BhcGVyPlxuICAgICAgKX1cbiAgICA8L0hpZ2hsaWdodD5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZHgoc291cmNlOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnVuZGxlTURYKHtcbiAgICBzb3VyY2UsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsICJpbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XG5pbXBvcnQgeyBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHtcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25JbixcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25VcCxcbn0gZnJvbSBcIn4vZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWRkQXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLmNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkZsb29yIFBsYW4gfCBTaWduIEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2lnbiBpbiB0byBzdGFydCB5b3VyIG93biBjb2RlIGpvdXJuZXkhXCIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQVVUSF9UWVBFUyA9IHtcbiAgU0lHTl9JTjogXCJTaWduIEluXCIsXG4gIFNJR05fVVA6IFwiU2lnbiBVcFwiLFxufTtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRoVHlwZTogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgLy8gVE9ETzogaWYgYSB1c2VyIHRoZW4gcmVkaXJlY3QgdG8gL2Rhc2hib2FyZFxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhUeXBlOlxuICAgICAgcGFyYW1zLmF1dGhUeXBlID09PSBcImluXCIgPyBBVVRIX1RZUEVTLlNJR05fSU4gOiBBVVRIX1RZUEVTLlNJR05fVVAsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgZW1haWwgIT09IFwic3RyaW5nXCIgfHwgZW1haWwubWF0Y2goLy4rQC4rXFwuLisvKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBgRW1haWxzIG11c3QgbG9vayBsaWtlIGV4YW1wbGVAZXhhbXBsZS5jb21gO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBGb3JtRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICBhdXRoVHlwZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCB7IGF1dGhUeXBlOiBpbml0QXV0aFR5cGUgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2FjdGlvbkRhdGEsIHNldEFjdGlvbkRhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHt9KTtcbiAgY29uc3QgW2F1dGhUeXBlLCBzZXRBdXRoVHlwZV0gPSB1c2VTdGF0ZShpbml0QXV0aFR5cGUpO1xuXG4gIGNvbnN0IGhhbmRsZUF1dGhUeXBlID0gKGV2ZW50LCBuZXdBdXRoVHlwZSkgPT4ge1xuICAgIGlmICghbmV3QXV0aFR5cGUpIHJldHVybjtcbiAgICBzZXRBdXRoVHlwZShuZXdBdXRoVHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdEF1dGhUeXBlICE9PSBhdXRoVHlwZSkge1xuICAgICAgc2V0QXV0aFR5cGUoaW5pdEF1dGhUeXBlKTtcbiAgICB9XG4gIH0sIFtpbml0QXV0aFR5cGVdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoXG4gICAgZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG4gICAgY29uc3QgYXV0aFR5cGUgPSBmb3JtLmdldChcImF1dGhUeXBlXCIpO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYXV0aFR5cGUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgIHR5cGVvZiBlbWFpbCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IHsgYXV0aFR5cGUsIGVtYWlsLCBwYXNzd29yZCB9O1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgICAgZW1haWw6IHZhbGlkYXRlRW1haWwoZW1haWwpLFxuICAgICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgIH07XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgICBzd2l0Y2ggKGF1dGhUeXBlKSB7XG4gICAgICBjYXNlIEFVVEhfVFlQRVMuU0lHTl9JTjoge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5lbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX1VQOiB7XG4gICAgICAgIC8vIGlmICh1c2VyRXhpc3RzKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAvLyAgICAgZmllbGRzLFxuICAgICAgICAvLyAgICAgZm9ybUVycm9yOiBgVXNlciB3aXRoIGVtYWlsICR7ZW1haWx9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXIuYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgZmllbGRzLFxuICAgICAgICAgIGZvcm1FcnJvcjogYExvZ2luIHR5cGUgaW52YWxpZGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCI1MDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIyMDBweCBhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZvcm1FcnJvciA/IFwiZm9ybS1lcnJvci1tZXNzYWdlXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PXtQYXBlcn0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhUeXBlXCIgdmFsdWU9e2F1dGhUeXBlfSAvPlxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgZXhjbHVzaXZlXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUF1dGhUeXBlfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWduIEluIG9yIFNpZ24gVXBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aFR5cGUgPT09IEFVVEhfVFlQRVMuU0lHTl9JTiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCl9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gXCJlbWFpbC1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1lcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybS1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBBVVRIX1RZUEVTLlNJR05fSU4gPT09IGF1dGhUeXBlID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0FwcFBhcGVyPlxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgICAgXG4gICAgICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IHVzZXJUb2tlbiA9IGZvcm0uZ2V0KFwidXNlclRva2VuXCIpIGFzIHN0cmluZztcbiAgICAgIGlmICghdXNlclRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCB1cGRhdGUgc2Vzc2lvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW4sIHJlZGlyZWN0VG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgTk9UIEhBTkRMRURcIik7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEsIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBCbG9nQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQmxvZ0NhcmRcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRBbGxCbG9nUG9zdHMgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHBvc3RzOiBCbG9nUG9zdFdpdGhJZFtdO1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsQmxvZ1Bvc3RzKCk7XG4gIHJldHVybiB7IHBvc3RzLCBpc0F1dGhvciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgeyBwb3N0cywgaXNBdXRob3IgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzQXV0aG9yID8gKFxuICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9ibG9nL25ld1wiPlxuICAgICAgICAgICAgQWRkIEJsb2cgUG9zdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgID5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXg6IHsgeHM6IFwiMCAwIDgwJVwiLCBtZDogXCIwIDAgNDAlXCIsIGxnOiBcIjAgMCAzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCbG9nQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmltYWdlVXJsfVxuICAgICAgICAgICAgICBpbWFnZUFsdD17cG9zdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgdXJsPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VBbHQ9e3Bvc3QuaW1hZ2VBbHQgfHwgXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmRBY3Rpb25BcmVhLCBDYXJkQWN0aW9ucyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEJsb2dDYXJkKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGltYWdlVXJsLFxuICBpbWFnZUFsdCxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcFBhcGVyIHN4PXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICA8Q2FyZCBzeD17eyBib3JkZXJSYWRpdXM6IFwiMTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgPENhcmRBY3Rpb25BcmVhIGNvbXBvbmVudD17TGlua30gdG89e3VybH0+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE0MFwiXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICB7LyogVE9ETzogaW1wbGVtZW50IHNoYXJlIGFjdGlvbiBidXR0b25zICovfVxuICAgICAgICB7LyogPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTaGFyZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPiAqL31cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0FwcFBhcGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XHJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZERhdGFQb2ludCxcclxuICBEYXRhUG9pbnQsXHJcbiAgZ2V0QWxsRGF0YVBvaW50cyxcclxufSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBEYXRhUG9pbnRXaXRoSWQsIGdldEFsbERhdGFQb2ludHNMaXZlIH0gZnJvbSBcIn4vZGIvZGF0YVBvaW50cy5jbGllbnRcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgdXNlRmlyZWJhc2VMb2FkZXJEYXRhIH0gZnJvbSBcIn4vaG9va3MvdXNlRmlyZWJhc2VMb2FkZXJEYXRhXCI7XHJcblxyXG50eXBlIExvYWRlckRhdGEgPSB7IGRhdGFQb2ludHM6IERhdGFQb2ludFdpdGhJZFtdIH07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcclxuXHJcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcclxuICAgIGRhdGFQb2ludHM6IGF3YWl0IGdldEFsbERhdGFQb2ludHModXNlcklkKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgcG9pbnQgPSBOdW1iZXIoZm9ybS5nZXQoXCJwb2ludFwiKSk7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gTnVtYmVyKGZvcm0uZ2V0KFwidGltZXN0YW1wXCIpKTtcclxuICBpZiAoIXBvaW50IHx8ICF0aW1lc3RhbXApIHtcclxuICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCBhZGQgdGhpcyBkYXRhIHBvaW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGREYXRhUG9pbnQoe1xyXG4gICAgdXNlcklkLFxyXG4gICAgcG9pbnQsXHJcbiAgICB0aW1lc3RhbXAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoQm9hcmQoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDtcclxuICBjb25zdCB7IGRhdGFQb2ludHMgfSA9IHVzZUZpcmViYXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigodXBkYXRlcikgPT5cclxuICAgIGdldEFsbERhdGFQb2ludHNMaXZlKHVzZXJJZCwgKGRhdGFQb2ludHMpID0+IHVwZGF0ZXIoeyBkYXRhUG9pbnRzIH0pKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XHJcbiAgICAgIDxTdGFja1xyXG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXszfVxyXG4gICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cclxuICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTIwcHhcIiwgcGFkZGluZzogXCIxMnB4XCIsIG1hcmdpbjogXCIxMnB4XCIsIHdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYXJvdW5kXCJ9XHJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJmbGV4LWVuZFwifVxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGFQb2ludHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgZGF0YVBvaW50c1xyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcClcclxuICAgICAgICAgICAgLm1hcCgoeyBwb2ludCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7cG9pbnQgKiAxMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwicHJpbWFyeS5tYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC8gJHtkYXRhUG9pbnRzLmxlbmd0aH0gLSAxMHB4KWAsXHJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkFkZCBzb21lIGRhdGEhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cInBvaW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGltZXN0YW1wXCIgdmFsdWU9e0RhdGUubm93KCl9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgIGFkZCBkYXRhXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxuY29uc3QgREFUQV9QT0lOVFNfQ09MTEVDVElPTiA9IFwiZGF0YVBvaW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBwb2ludDogbnVtYmVyO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50V2l0aElkIGV4dGVuZHMgRGF0YVBvaW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgREFUQV9QT0lOVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8RGF0YVBvaW50PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGRhdGFQb2ludElkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGRhdGFQb2ludElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8RGF0YVBvaW50PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhdGFQb2ludHModXNlcklkKTogUHJvbWlzZTxEYXRhUG9pbnRXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhUG9pbnQoZGF0YVBvaW50SWQpOiBQcm9taXNlPERhdGFQb2ludCB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGRhdGFQb2ludElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRGF0YVBvaW50KGRhdGFQb2ludDogRGF0YVBvaW50KTogUHJvbWlzZTxEYXRhUG9pbnQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVmKCkuYWRkKGRhdGFQb2ludCk7XG5cbiAgICBjb25zdCBuZXdEYXRhUG9pbnQgPSBhd2FpdCBnZXREYXRhUG9pbnQoZG9jUmVmLmlkKTtcbiAgICBpZiAoIW5ld0RhdGFQb2ludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGFQb2ludDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgdHlwZSBVc2VFZmZlY3RVbnN1YmNyaWJlciA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPFQ+KFxuICBjbGllbnRVcGRhdGVyOiAoXG4gICAgdXBkYXRlcjogKGRhdGE6IFQpID0+IHZvaWRcbiAgKSA9PiBVc2VFZmZlY3RVbnN1YmNyaWJlclxuKTogVCB7XG4gIC8vIGdldCB0aGUgZGF0YSBmb3JtIHRoZSBzZXZlciB2aWEgZmlyZWJhc2UgYWRtaW5cbiAgY29uc3QgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8VD4oKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VD4obG9hZGVyRGF0YSk7XG5cbiAgLy8gd2hlbiB0aGUgY2xpZW50IGdldHMgYW4gdXBkYXRlIGFsbG93XG4gIC8vIHRoZSBjbGllbnQgdG8gdXBkYXRlIHRoZSBkYXRhXG4gIGZ1bmN0aW9uIHVwZGF0ZXIoZGF0YTogVCkge1xuICAgIHNldERhdGEoZGF0YSk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IGNsaWVudFVwZGF0ZXIodXBkYXRlciksIFtsb2FkZXJEYXRhXSk7XG4gIHJldHVybiBkYXRhO1xufSIsICJpbXBvcnQge1xuICByZWRpcmVjdCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZUFjdGlvbkRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGFkZEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdFBvc3QgfSBmcm9tIFwifi9jb21wb25lbnRzL0VkaXRQb3N0XCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aG9ySWQ6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gIH1cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRob3JJZDogdXNlcklkLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgc2x1Zz86IGJvb2xlYW47XG4gIG1hcmtkb3duPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xuICBpbWFnZVVybD86IGJvb2xlYW47XG4gIGltYWdlQWx0PzogYm9vbGVhbjtcbiAgdGFncz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgYXV0aG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JJZFwiKTtcbiAgY29uc3QgaW1hZ2VVcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVVybFwiKTtcbiAgY29uc3QgaW1hZ2VBbHQgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZUFsdFwiKTtcbiAgY29uc3QgdGFncyA9IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJ0YWdzXCIpKT8uc3BsaXQoXCIsXCIpIHx8IFtdO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IGZvcm1EYXRhLmdldChcImlzUHVibGlzaGVkXCIpID09PSBcInRydWVcIjtcbiAgY29uc3QgcHVibGlzaERhdGUgPSBwYXJzZUludChcbiAgICAoZm9ybURhdGEuZ2V0KFwicHVibGlzaERhdGVcIikgYXMgc3RyaW5nKSB8fCBcIjBcIixcbiAgICAxMFxuICApO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlVXJsKSBlcnJvcnMuaW1hZ2VVcmwgPSB0cnVlO1xuICBpZiAoIWltYWdlQWx0KSBlcnJvcnMuaW1hZ2VBbHQgPSB0cnVlO1xuICBpZiAoIXRhZ3MpIGVycm9ycy50YWdzID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VVcmwgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlQWx0ID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpc1B1Ymxpc2hlZCA9PT0gXCJib29sZWFuXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHB1Ymxpc2hEYXRlID09PSBcIm51bWJlclwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW21hcmtkb3duLCBzZXRNYXJrZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNQdWJsaXNoZWQsIHNldElzUHVibGlzaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IGF1dGhvcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdG9yQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0TWFya2Rvd24odmFsdWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVkaXRQb3N0XG4gICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgIGF1dGhvcklkPXthdXRob3JJZH1cbiAgICAgIGlzUHVibGlzaGVkPXtpc1B1Ymxpc2hlZH1cbiAgICAgIHNldElzUHVibGlzaGVkPXtzZXRJc1B1Ymxpc2hlZH1cbiAgICAgIGRhdGU9e2RhdGV9XG4gICAgICBzZXREYXRlPXtzZXREYXRlfVxuICAgICAgbWFya2Rvd249e21hcmtkb3dufVxuICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgLz5cbiAgKTtcbn1cbiIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYVwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBhXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGFcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBBIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJhLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGJcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgYlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBiXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQiFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYi5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBjXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgY1wiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEMhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImMubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xufTsiLCAiaW1wb3J0IHsgQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBGbG9vclBsYW5DYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9GbG9vclBsYW5DYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiRmxvb3IgUGxhbjogQ29weS9QYXN0YS9Ud2Vya1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvZGVzIFNhZ2FzIGEgcGxhY2UgdG8gbGVhcm4gYSBtaWxsaW9uIGFuZCBvbmUgd2F5cyB0byBjb2RlLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxuICAgICAgICBtYXJnaW46IFwiODBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwUGFwZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPmZsb29yIHBsYW48L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPi9cdTAyQzhmbFx1MDBGNChcdTAyNTkpciBcdTAyQ0NwbGFuLzwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+bm91biA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIEEgcGxhY2UgdG8gc2hhcmUgYW5kIGRpc2NvdmVyIGFwcCBzdGFja3Mgc28gdGhhdCB5b3UgY2FuIHN0YXJ0XG4gICAgICAgICAgYnJpbmdpbmcgeW91ciBpZGVhcyB0byBsaWZlLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2Zsb29yLXBsYW5zL2NyZWF0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIGEgZmxvb3IgcGxhblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICB0bz1cIi9mbG9vci1wbGFucy9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaCBmbG9vciBwbGFuc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9BcHBQYXBlcj5cblxuICAgICAgey8qIDxGbG9vclBsYW5DYXJkXG4gICAgICAgIHRpdGxlPXtcIlJlbWl4IHdpdGggRmlyZWJhc2Ugb24gTmV0bGlmeVwifVxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgXCJBIFJlYWN0IGFwcCB3cml0dGVuIHdpdGggUmVtaXggYW5kIEZpcmViYXNlIGRlcGxveWVkIG9uIE5ldGxpZnkuIEl0IHVzZXMgVHlwZXNjcmlwdCBhbmQgaGFzIGFsbCB0aGUgYnVpbGRpbmcgYmxvY2tzIHRvIGdldCB5b3VyIGFwcCBvZmYgdGhlIGdyb3VuZC5cIlxuICAgICAgICB9XG4gICAgICAgIGNvc3Q9e1wiRlJFRVwifVxuICAgICAgICBwb3B1bGFyaXR5PXt7XG4gICAgICAgICAgcmF0aW5nOiA0LjUsXG4gICAgICAgICAgY291bnQ6IDMsXG4gICAgICAgIH19XG4gICAgICAgIHVybD17XCJodHRwczovL2dpdGh1Yi5jb20vZmxvb3JwbGFuL2Zsb29ycGxhbiN3ZWxjb21lLXRvLWZsb29ycGxhblwifVxuICAgICAgICBzZXR1cFRpbWU9e1wiMWhyXCJ9XG4gICAgICAvPiAqL31cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzM5NzllODc3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1QVVY1UFFKRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQVY2WUhVSzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VVldEN1lEUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQWFFLUkxXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUhBU1BRVkQuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTRSNUZaRkJRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VVzdPUDNJMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFLWUpWNVFKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT0I3N1VYTU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LVEVaUjNETC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZUWTJHTTJCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNDJQR1k1VEYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQtRUZJQzdIM0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlhGSFBWRUsuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0Jzp7J2lkJzoncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LTVMUFZTN0ZVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00RkxVTDZRVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9hJzp7J2lkJzoncm91dGVzL2Jsb2cvYScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2EnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9hLUhTR0ZSM0JGLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9iJzp7J2lkJzoncm91dGVzL2Jsb2cvYicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9iLTRLN0NEVFJHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9jJzp7J2lkJzoncm91dGVzL2Jsb2cvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9jLUtUSjVLVllILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtQkZVTU5TVVUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvbmV3Jzp7J2lkJzoncm91dGVzL2Jsb2cvbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvbmV3LUtHU0NJTE5CLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00RkxVTDZRVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLTNGTzdLNEEyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0Jzp7J2lkJzoncm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Zsb29yLXBsYW5zLzpmbG9vclBsYW5JZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0LU1aTDdYSTRILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KTzVUREJRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQM1dYUTRELmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlJzp7J2lkJzoncm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidmbG9vci1wbGFucy9jcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlLUY0RDNWV1pHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KTzVUREJRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQM1dYUTRELmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZmxvb3ItcGxhbnMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Zsb29yLXBsYW5zL2luZGV4LUM3WlRXVlhKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUDNXWFE0RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZYRkhQVkVLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUY1TE5QQk1ZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUo2QU9YWTdQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ24uJGF1dGhUeXBlJzp7J2lkJzoncm91dGVzL3NpZ24uJGF1dGhUeXBlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ24vOmF1dGhUeXBlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NpZ24uJGF1dGhUeXBlLTZQREg3TEw2LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91cGRhdGUtc2Vzc2lvbic6eydpZCc6J3JvdXRlcy91cGRhdGUtc2Vzc2lvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid1cGRhdGUtc2Vzc2lvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi1GMkY2VzdNRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwn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
