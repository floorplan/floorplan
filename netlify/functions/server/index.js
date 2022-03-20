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
    queryRef = queryRef.where("queryList", "array-contains-any", queryString.split(" ").filter((word) => word.length > 1).slice(0, 9).map((word) => word.toLowerCase()));
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
      ...floorPlan.title.split(" ").filter((word) => word.length > 1).map((word) => word.toLowerCase()),
      ...floorPlan.tags.filter((word) => word.length > 1).map((word) => word.toLowerCase())
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
      ...floorPlan.title.split(" ").filter((word) => word.length > 1).map((word) => word.toLowerCase()),
      ...floorPlan.tags.filter((word) => word.length > 1).map((word) => word.toLowerCase())
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
  if (typeof password !== "string" || password.length <= 6) {
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
var assets_manifest_default = { "version": "e789bf53", "entry": { "module": "/build/entry.client-PUV5PQJE.js", "imports": ["/build/_shared/chunk-AV6YHUK7.js", "/build/_shared/chunk-UVWD7YDR.js", "/build/_shared/chunk-IPXQKRLW.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4R5FZFBQ.js", "imports": ["/build/_shared/chunk-UW7OP3I2.js", "/build/_shared/chunk-QKYJV5QJ.js", "/build/_shared/chunk-OB77UXMN.js", "/build/_shared/chunk-KTEZR3DL.js", "/build/_shared/chunk-6TY2GM2B.js", "/build/_shared/chunk-42PGY5TF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-EFIC7H3H.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js", "/build/_shared/chunk-VXFHPVEK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-5LPVS7FU.js", "imports": ["/build/_shared/chunk-4FLUL6QT.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-HSGFR3BF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-4K7CDTRG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-KTJ5KVYH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-BFUMNSUU.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-KGSCILNB.js", "imports": ["/build/_shared/chunk-4FLUL6QT.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-3FO7K4A2.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/$floorPlanId.edit": { "id": "routes/floor-plans/$floorPlanId.edit", "parentId": "root", "path": "floor-plans/:floorPlanId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/$floorPlanId.edit-MZL7XI4H.js", "imports": ["/build/_shared/chunk-JO5TDBQN.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/create": { "id": "routes/floor-plans/create", "parentId": "root", "path": "floor-plans/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/create-F4D3VWZG.js", "imports": ["/build/_shared/chunk-JO5TDBQN.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/index": { "id": "routes/floor-plans/index", "parentId": "root", "path": "floor-plans", "index": true, "caseSensitive": void 0, "module": "/build/routes/floor-plans/index-C7ZTWVXJ.js", "imports": ["/build/_shared/chunk-IP3WXQ4D.js", "/build/_shared/chunk-VXFHPVEK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-F5LNPBMY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-J6AOXY7P.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-6MJMXYOC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-F2F6W7MF.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E789BF53.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvc3RhdGUvQXV0aFByb3ZpZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Mb2dvdXRGb3JtLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BcHBCYXIudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhDb250cm9scy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvbi50c3giLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2F1dGgudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzIiwgIi4uLy4uLy4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwUGFwZXIudHN4IiwgIi4uLy4uLy4uL2FwcC90aGVtZS9DbGllbnRTdHlsZUNvbnRleHQudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRGbG9vclBsYW4udHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9mbG9vclBsYW5zLnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRQb3N0LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9mbG9vci1wbGFucy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29kZUJsb2NrLnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvbWR4LnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9zaWduLiRhdXRoVHlwZS50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9kYXNoYm9hcmQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9kYXRhUG9pbnRzLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvaG9va3MvdXNlRmlyZWJhc2VMb2FkZXJEYXRhLnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvbmV3LnRzeCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9hLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9iLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9jLm1keCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXJcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2EubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2MubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy8kZmxvb3JQbGFuSWQuZWRpdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy86Zmxvb3JQbGFuSWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZC9lZGl0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9mbG9vci1wbGFucy9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy9jcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFuc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ24uJGF1dGhUeXBlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ24vOmF1dGhUeXBlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdXBkYXRlLXNlc3Npb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidXBkYXRlLXNlc3Npb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvbmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9hXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2FcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9hXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9jXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSBcIn4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJ+L3RoZW1lXCI7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjb25zdCBNdWlSZW1peFNlcnZlciA9ICgpID0+IChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG5cbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSBzdHJpbmcuXG4gIGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyg8TXVpUmVtaXhTZXJ2ZXIgLz4pO1xuXG4gIC8vIEdyYWIgdGhlIENTUyBmcm9tIGVtb3Rpb25cbiAgY29uc3QgeyBzdHlsZXMgfSA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG4gIGxldCBzdHlsZXNIVE1MID0gXCJcIjtcblxuICBzdHlsZXMuZm9yRWFjaCgoeyBrZXksIGlkcywgY3NzIH0pID0+IHtcbiAgICBjb25zdCBlbW90aW9uS2V5ID0gYCR7a2V5fSAke2lkcy5qb2luKFwiIFwiKX1gO1xuICAgIGNvbnN0IG5ld1N0eWxlVGFnID0gYDxzdHlsZSBkYXRhLWVtb3Rpb249XCIke2Vtb3Rpb25LZXl9XCI+JHtjc3N9PC9zdHlsZT5gO1xuICAgIHN0eWxlc0hUTUwgPSBgJHtzdHlsZXNIVE1MfSR7bmV3U3R5bGVUYWd9YDtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBlbW90aW9uIHN0eWxlIHRhZ3MgYWZ0ZXIgdGhlIGluc2VydGlvbiBwb2ludCBtZXRhIHRhZ1xuICBjb25zdCBtYXJrdXAgPSBodG1sLnJlcGxhY2UoXG4gICAgLzxtZXRhKFxccykqbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKlxcLz4vLFxuICAgIGA8bWV0YSBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIiBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIi8+JHtzdHlsZXNIVE1MfWBcbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gXCJ+L3RoZW1lL2NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiBcImRhcmtcIixcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuUFJJTUFSWSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogQ09MT1JTLlNFQ09OREFSWSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiBDT0xPUlMuRVJST1IsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiBDT0xPUlMuV0FSTklORyxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIG1haW46IENPTE9SUy5JTkZPLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogQ09MT1JTLlNVQ0NFU1MsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBDT0xPUlMuQkFDS0dST1VORC5ERUZBVUxULFxuICAgICAgcGFwZXI6IENPTE9SUy5CQUNLR1JPVU5ELlBBUEVSLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBOYW1lIG9mIHRoZSBjb21wb25lbnQgXHUyNjlCXHVGRTBGXG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLCAvLyBObyBtb3JlIHJpcHBsZSwgb24gdGhlIHdob2xlIGFwcGxpY2F0aW9uIFx1RDgzRFx1RENBMyFcbiAgICAgICAgLy8gdmFyaWFudDogXCJvdXRsaW5lZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7IiwgImV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XG4gIFBSSU1BUlk6IFwiIzMwNTdFMVwiLFxuICBTRUNPTkRBUlk6IFwiI0RERkZGN1wiLFxuICAvLyBFUlJPUjogXCIjRkYwMDQ3XCIsXG4gIEVSUk9SOiBcIiNmZjJmMDBcIixcbiAgV0FSTklORzogXCIjRkZBNTAwXCIsXG4gIElORk86IFwiIzAwRTdGRlwiLFxuICBTVUNDRVNTOiBcIiMwMEZGN0VcIixcbiAgQkFDS0dST1VORDoge1xuICAgIERFRkFVTFQ6IFwiIzBGMEYxNVwiLFxuICAgIC8vIFBBUEVSOiBcIiMzMDU3RTFcIixcbiAgICBQQVBFUjogXCIjMDcwMzE5XCIsXG4gIH0sXG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgT3V0bGV0LFxuICB1c2VDYXRjaCxcbiAgTWV0YSxcbiAgU2NyaXB0cyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBBdXRoVXNlciwgZ2V0QXV0aFVzZXIsIGdldFVzZXJUb2tlbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7XG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSBcIn4vdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9tb2Rlcm4tY3NzLXJlc2V0QDEuNC4wL2Rpc3QvcmVzZXQubWluLmNzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcbiAgICB9LFxuICBdO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG4gICh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcbiAgICBjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cbiAgICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuICAgIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIC8vIHJlLWluamVjdCB0YWdzXG4gICAgICBjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcbiAgICAgIGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgICAgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcblxudHlwZSBMb2FkZXJEYXRhID0geyB1c2VyOiBBdXRoVXNlciB8IG51bGw7IHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbCB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXIsXG4gICAgdXNlclRva2VuLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmZ1bmN0aW9uIFByb3ZpZGVycyh7XG4gIHVzZXIsXG4gIGNoaWxkcmVuLFxuICB1c2VyVG9rZW4sXG59OiB7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXIgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgdXNlciwgdXNlclRva2VuIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8UHJvdmlkZXJzIHVzZXI9e3VzZXJ9IHVzZXJUb2tlbj17dXNlclRva2VufT5cbiAgICAgICAgPEFwcEJhciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1Byb3ZpZGVycz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBSb290RXJyb3Ioe1xuICBkb2NUaXRsZSA9IFwiT29wcyFcIixcbiAgdGl0bGUgPSBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBcdUQ4M0RcdURFMjVcIixcbiAgbWVzc2FnZSA9IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2RvY1RpdGxlfT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcFBhcGVyIGxlZnRDb2xvcj1cImVycm9yXCIgcmlnaHRDb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgdGl0bGUgPSBgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWA7XG4gIHJldHVybiAoXG4gICAgPFJvb3RFcnJvclxuICAgICAgZG9jVGl0bGU9e3RpdGxlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIFwiV2VsbCB0aGlzIGlzIGVtYmFyc2luZy4gXHVEODNEXHVERTA1IEhhdmUgeW91IHRyaWVkIHR1cm5pbmcgaXQgb2ZmIGFuZCBiYWNrIG9uIGFnYWluP1wiXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8Um9vdEVycm9yIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xufVxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VGZXRjaGVyLCB1c2VMb2NhdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoVXNlciB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXI6IHVzZXJQcm9wLFxuICB1c2VyVG9rZW46IHVzZXJUb2tlblByb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxBdXRoVXNlciB8IG51bGw+KHVzZXJQcm9wKTtcbiAgY29uc3QgbG9nb3V0Rm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPih1c2VyVG9rZW5Qcm9wIHx8IFwiXCIpO1xuICBjb25zdCB1c2VyVG9rZW5Gb3JtID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyUHJvcCk7XG4gIH0sIFt1c2VyUHJvcF0pO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zaWduL1wiKSA/IFwiL2Zsb29yLXBsYW5zXCIgOiBwYXRobmFtZTtcblxuICBmdW5jdGlvbiBzZW5kVXNlclRva2VuKCkge1xuICAgIGlmICghdXNlclRva2VuRm9ybS5jdXJyZW50KSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodXNlclRva2VuRm9ybS5jdXJyZW50KTtcbiAgICBmZXRjaGVyLnN1Ym1pdChmb3JtRGF0YSwge21ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjpcIi91cGRhdGUtc2Vzc2lvblwifSlcbiAgfVxuXG4gIC8vIGxpc3RlbiBmb3IgdG9rZW4gY2hhbmdlc1xuICAvLyBjYWxsIHNldFVzZXIgYW5kIHdyaXRlIG5ldyB0b2tlbiBhcyBhIGNvb2tpZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgcmV0dXJuIGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlckZyb21DaGFuZ2UpID0+IHtcbiAgICAgIGlmICh1c2VyRnJvbUNoYW5nZSA9PT0gbnVsbCAmJiB1c2VyICE9PSBudWxsKSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIGlmICghbG9nb3V0Rm9ybVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxvZ291dEZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlckZyb21DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyRnJvbUNoYW5nZS5nZXRJZFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdXNlclRva2VuKSB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyRnJvbUNoYW5nZSk7XG4gICAgICAgICAgc2V0VXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgICBhd2FpdCBhZGRBcHBVc2VyKHVzZXJGcm9tQ2hhbmdlLnVpZCk7XG4gICAgICAgICAgc2VuZFVzZXJUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPExvZ291dEZvcm0gcmVmPXtsb2dvdXRGb3JtUmVmfSAvPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17dXNlclRva2VuRm9ybX0gYWN0aW9uPVwiL3VwZGF0ZS1zZXNzaW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInB1dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJUb2tlblwiIHZhbHVlPXt1c2VyVG9rZW59IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gcmVkaXJlY3RUb31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiIsICJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtUHJvcHMgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IExvZ291dEZvcm0gPSBmb3J3YXJkUmVmPEhUTUxGb3JtRWxlbWVudCwgRm9ybVByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxGb3JtIHJlZj17cmVmfSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIHsuLi5wcm9wc30gLz5cbik7XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xzIGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aENvbnRyb2xzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNdWlBcHBCYXI+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSlgLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEZpbGxDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRmxvb3IgUGxhblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgICAgICBjb2xvcj17XCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIFtCRVRBXVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxBdXRoQ29udHJvbHMgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9NdWlBcHBCYXI+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpbkJvdHRvbTogXCI2NHB4XCIgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IFNpZ25PdXRCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b25cIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluVXAoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoKCk7XG4gIHJldHVybiB1c2VyID09PSBudWxsID8gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiPlxuICAgICAgICBzaWduIGluXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc3g9e3sgbWFyZ2luTGVmdDogMiB9fVxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgIHRvPVwiL3NpZ24vdXBcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHNpZ24gdXBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApIDogKFxuICAgIDxCb3g+XG4gICAgICA8TG9nb3V0Rm9ybT5cbiAgICAgICAgPFNpZ25PdXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgc2lnbiBvdXRcbiAgICAgICAgPC9TaWduT3V0QnV0dG9uPlxuICAgICAgPC9Mb2dvdXRGb3JtPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25PdXRCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8PlxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IHsuLi5wcm9wc30+c2lnbiBvdXQ8L0J1dHRvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbiIsICJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIG9uSWRUb2tlbkNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBhdXRoXHJcbiAgICAuc2lnbk91dCgpXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dCFcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0aFN0YXRlQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiKHVzZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRUb2tlbkNoYW5nZWQoY2IpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gb25JZFRva2VuQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpe1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclRva2VuUmVmcmVzaCgpe1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBdXRoRW11bGF0b3IsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MsIGxvZ0V2ZW50IH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmxldCBhcHAsIGF1dGgsIGRiLCBhbmFseXRpY3M7XHJcblxyXG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcclxuICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIC8vIFRPRE86IE1ha2Ugc3VyZSB0aGVzZSBhcmUgeW91ciB2YWx1ZXNcclxuICAgIGFwaUtleTogXCJBSXphU3lEbEV6Y0plTm5HRDFMM1RtSkdieWxzRlFkN2RtbWFBOGdcIixcclxuICAgIGF1dGhEb21haW46IFwiZmxvb3JwbGFuLWNvZGVzYWdhcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJmbG9vcnBsYW4tY29kZXNhZ2FzXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImZsb29ycGxhbi1jb2Rlc2FnYXMuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNzQxOTg5NjQ4ODFcIixcclxuICAgIGFwcElkOiBcIjE6MTA3NDE5ODk2NDg4MTp3ZWI6NzQyZTNhMzdmMDMwNzA4MGY0MmQzMFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUZEM1hLNjYzQzBcIixcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoKTtcclxuICB9XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvcihkYiwgXCJsb2NhbGhvc3RcIiwgODA4MCk7XHJcbiAgICBjb25uZWN0QXV0aEVtdWxhdG9yKGF1dGgsIFwiaHR0cDovL2xvY2FsaG9zdDo5MDk5XCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhcHAsXHJcbiAgYXV0aCxcclxuICBkYixcclxuICBhbmFseXRpY3MsXHJcbiAgZ2V0QXV0aCxcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgZ2V0QW5hbHl0aWNzLFxyXG4gIGxvZ0V2ZW50LFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgRGVjb2RlZElkVG9rZW4gfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vbGliL2F1dGgvdG9rZW4tdmVyaWZpZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEF1dGhVc2VyID0gRGVjb2RlZElkVG9rZW4gfCBVc2VyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pOiBQcm9taXNlPFVzZXI+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxubGV0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiY3Nfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgbGV0IHVzZXJUb2tlbiA9IHNlc3Npb24uZ2V0KFwidXNlclRva2VuXCIpO1xuICBpZiAoIXVzZXJUb2tlbiB8fCB0eXBlb2YgdXNlclRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJUb2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPEF1dGhVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuICBpZiAodHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoZWRVc2VyID0gYXdhaXQgZ2V0QXV0aCgpLnZlcmlmeUlkVG9rZW4odXNlclRva2VuKTtcbiAgICByZXR1cm4gYXV0aGVkVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXIgZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgbGV0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gICAgcmV0dXJuIGF1dGhVc2VyPy51aWQgfHwgbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJZCBlcnJvclwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgbGV0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9zaWduL2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9zaWduL2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbjogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VyVG9rZW5cIiwgdXNlclRva2VuKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIEFwcCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmltcG9ydCB7IEF1dGgsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbmxldCBhcHA6IEFwcCwgYXV0aDogQXV0aCwgZGI6IEZpcmVzdG9yZTtcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHByb2Nlc3MuZW52LkZJUkVTVE9SRV9FTVVMQVRPUl9IT1NUID0gXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICAgIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjkwOTlcIjtcbiAgfVxuICBjb25zdCBlbmNvZGVkS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfQkFTRTY0IHx8IFwiXCI7XG4gIGNvbnN0IGRlY29kZWRLZXkgPSBCdWZmZXIuZnJvbShlbmNvZGVkS2V5LCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGNlcnQoe1xuICAgICAgcHJpdmF0ZUtleTogZGVjb2RlZEtleSxcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0uZmlyZWJhc2Vpby5jb21gLFxuICB9KTtcbiAgYXV0aCA9IGdldEF1dGgoKTtcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IHsgYXBwLCBhdXRoLCBnZXRBdXRoLCBkYiwgZ2V0RmlyZXN0b3JlIH07XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGVmdENvbG9yPzogc3RyaW5nO1xuICByaWdodENvbG9yPzogc3RyaW5nO1xuICBzeD86IG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBQYXBlcih7XG4gIGNoaWxkcmVuLFxuICBsZWZ0Q29sb3IgPSBcInByaW1hcnlcIixcbiAgcmlnaHRDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHN4ID0ge30sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgc3BhY2luZz17Mn1cbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHBhZGRpbmc6IDQsXG5cbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgYm9yZGVyOiBcInNvbGlkIDVweCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMWVtXCIsXG5cbiAgICAgICAgXCImOmJlZm9yZSBcIjoge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIG1hcmdpbjogXCItNXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGVbbGVmdENvbG9yXS5tYWlufSwgJHt0aGVtZS5wYWxldHRlW3JpZ2h0Q29sb3JdLm1haW59KWAsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDbGllbnRTdHlsZUNvbnRleHREYXRhIHtcbiAgcmVzZXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YT4oe1xuICByZXNldDogKCkgPT4ge30sXG59KTsiLCAiaW1wb3J0IHsgcmVkaXJlY3QsIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBFZGl0Rmxvb3JQbGFuIH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0Rmxvb3JQbGFuXCI7XG5pbXBvcnQge1xuICBGbG9vclBsYW5XaXRoSWQsXG4gIGdldEZsb29yUGxhbixcbiAgc2V0Rmxvb3JQbGFuLFxufSBmcm9tIFwifi9kYi9mbG9vclBsYW5zLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEZsb29yUGxhbldpdGhJZCB7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLmZsb29yUGxhbklkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBmbG9vclBsYW4gPSBhd2FpdCBnZXRGbG9vclBsYW4ocGFyYW1zLmZsb29yUGxhbklkKTtcbiAgaW52YXJpYW50KGZsb29yUGxhbiwgXCJleHBlY3RlZCBmbG9vclBsYW5cIik7XG4gIHJldHVybiB7IC4uLmZsb29yUGxhbiwgdXNlcklkIH07XG59O1xuXG50eXBlIFBsYW5FcnJvciA9IHtcbiAgb3duZXI/OiBib29sZWFuO1xuICB0aXRsZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbiAgY29zdD86IGJvb2xlYW47XG4gIC8vIFRPRE8/OiB3aGVuIHdlIGhhdmUgdXNlcnMgdGhlbiBsZXRzIGRvIHRoaXNcbiAgLy8gcG9wdWxhcml0eT86IHtcbiAgLy8gICByYXRpbmc/OiBudW1iZXI7XG4gIC8vICAgY291bnQ/OiBudW1iZXI7XG4gIC8vIH07XG4gIGdpdGh1Yk93bmVyPzogYm9vbGVhbjtcbiAgZ2l0aHViUmVwbz86IGJvb2xlYW47XG4gIHNldHVwVGltZT86IGJvb2xlYW47XG4gIHRhZ3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZmxvb3JQbGFuSWQgPSBwYXJhbXMuZmxvb3JQbGFuSWQ7XG4gIGNvbnN0IG93bmVyID0gZm9ybURhdGEuZ2V0KFwib3duZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGNvc3QgPSBmb3JtRGF0YS5nZXQoXCJjb3N0XCIpO1xuICBjb25zdCBnaXRodWJPd25lciA9IGZvcm1EYXRhLmdldChcImdpdGh1Yk93bmVyXCIpO1xuICBjb25zdCBnaXRodWJSZXBvID0gZm9ybURhdGEuZ2V0KFwiZ2l0aHViUmVwb1wiKTtcbiAgY29uc3Qgc2V0dXBUaW1lID0gZm9ybURhdGEuZ2V0KFwic2V0dXBUaW1lXCIpO1xuICBjb25zdCB0YWdzID1cbiAgICBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSlcbiAgICAgID8uc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLnRyaW0oKSkgfHwgW107XG5cbiAgY29uc3QgZXJyb3JzOiBQbGFuRXJyb3IgPSB7fTtcbiAgaWYgKCFvd25lcikgZXJyb3JzLm93bmVyID0gdHJ1ZTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFjb3N0KSBlcnJvcnMuY29zdCA9IHRydWU7XG4gIGlmICghZ2l0aHViT3duZXIpIGVycm9ycy5naXRodWJPd25lciA9IHRydWU7XG4gIGlmICghZ2l0aHViUmVwbykgZXJyb3JzLmdpdGh1YlJlcG8gPSB0cnVlO1xuICBpZiAoIXNldHVwVGltZSkgZXJyb3JzLnNldHVwVGltZSA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgZmxvb3JQbGFuSWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvc3QgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1Yk93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBnaXRodWJSZXBvID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzZXR1cFRpbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IHNldEZsb29yUGxhbihmbG9vclBsYW5JZCwge1xuICAgIG93bmVyLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvc3QsXG4gICAgZ2l0aHViT3duZXIsXG4gICAgZ2l0aHViUmVwbyxcbiAgICBzZXR1cFRpbWUsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Zsb29yLXBsYW5zXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBsYW4oKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VySWQsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29zdCxcbiAgICBnaXRodWJPd25lcixcbiAgICBnaXRodWJSZXBvLFxuICAgIHNldHVwVGltZSxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPEVkaXRGbG9vclBsYW5cbiAgICAgIGlzQ3JlYXRlPXtmYWxzZX1cbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgb3duZXI9e3VzZXJJZH1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIGNvc3Q9e2Nvc3R9XG4gICAgICBnaXRodWJPd25lcj17Z2l0aHViT3duZXJ9XG4gICAgICBnaXRodWJSZXBvPXtnaXRodWJSZXBvfVxuICAgICAgc2V0dXBUaW1lPXtzZXR1cFRpbWV9XG4gICAgICB0YWdzPXt0YWdzLmpvaW4oXCIsIFwiKX1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgQm94LFxuICBJbnB1dExhYmVsLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBsb2dFdmVudCwgYW5hbHl0aWNzIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDcmVhdGU6IGJvb2xlYW47XG4gIGVycm9ycztcbiAgb3duZXI6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjb3N0Pzogc3RyaW5nO1xuICBnaXRodWJPd25lcj86IHN0cmluZztcbiAgZ2l0aHViUmVwbz86IHN0cmluZztcbiAgc2V0dXBUaW1lPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRGbG9vclBsYW4oe1xuICBpc0NyZWF0ZSxcbiAgZXJyb3JzLFxuICBvd25lcixcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGNvc3QgPSBcIlwiLFxuICBnaXRodWJPd25lciA9IFwiXCIsXG4gIGdpdGh1YlJlcG8gPSBcIlwiLFxuICBzZXR1cFRpbWUgPSBcIlwiLFxuICB0YWdzID0gXCJcIixcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIHNwYWNpbmc9ezJ9IHN4PXt7IHA6IDQgfX0+XG4gICAgICA8Rm9ybVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgb25TdWJtaXQ9eygpID0+IHtcbiAgICAgICAgICBsb2dFdmVudChhbmFseXRpY3MsIGlzQ3JlYXRlID8gXCJjcmVhdGVcIiA6IFwiZWRpdFwiKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3duZXJcIiB2YWx1ZT17b3duZXJ9IC8+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiNjBweCBhdXRvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmdpdGh1Yk93bmVyfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1Yk93bmVyXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHaXRodWIgT3duZXJcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LmdpdGh1Yk93bmVyXG4gICAgICAgICAgICAgICAgICA/IFwiR2l0aHViIE93bmVyIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJXaGljaCBHaXRodWIgT3JnYW5pemF0aW9uIG93bnMgdGhpcyBwcm9qZWN0P1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJnaXRodWJPd25lclwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dpdGh1Yk93bmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5naXRodWJSZXBvfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBsYWJlbD1cIkdpdGh1YiBSZXBvXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy5naXRodWJSZXBvXG4gICAgICAgICAgICAgICAgICA/IFwiZ2l0aHViUmVwbyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgR2l0aHViIFJlcG8/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnaXRodWJSZXBvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkRpc3BsYXkgbmFtZSBmb3IgdGhlIHByb2plY3QgfHwgUmVwbyBOYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBtYWtlcyB0aGlzIHJlcG8gc28gZ3JlYXQ/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgZXJyb3I9e2Vycm9ycz8uY29zdH0+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWxhYmVsLWNvc3RcIj5Db3N0PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1jb3N0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29zdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29zdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJmcmVlXCJ9PkZyZWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkXCJ9PiQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkJFwifT4kJDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIiQkJFwifT4kJCQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LmNvc3RcbiAgICAgICAgICAgICAgICAgID8gXCJDb3N0IGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJIb3cgbXVjaCBkb2VzIHRoaXMgcGxhbiBjb3N0IHRvIHJ1biB3aGVuIHN0YXJ0aW5nP1wifVxuICAgICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBlcnJvcj17ZXJyb3JzPy5zZXR1cFRpbWV9PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIj5TZXR1cCBUaW1lPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwic2V0dXBUaW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNldHVwIFRpbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2V0dXBUaW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjVtaW5cIn0+NW1pbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjMwbWluXCJ9PjMwbWluPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWhyXCJ9PjFocjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjJoclwifT4yaHI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCI1aHJcIn0+NWhyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWRheVwifT4xZGF5PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMXdlZWtcIn0+MXdlZWs8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LnNldHVwVGltZVxuICAgICAgICAgICAgICAgICAgPyBcIlNldHVwIFRpbWUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBzZXR1cD9cIn1cbiAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGFnc31cbiAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy50YWdzXG4gICAgICAgICAgICAgICAgICA/IFwidGFncyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBhcmUgc29tZSBzZWFyY2ggdGVybXMgZm9yIHRoaXMgcmVwbz9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICB7aXNDcmVhdGUgPyBcIkNyZWF0ZSBGbG9vciBQbGFuXCIgOiBcIlVwZGF0ZSBGbG9vciBQbGFuXCJ9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImZsb29yUGxhbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW4ge1xuICBvd25lcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBzdHJpbmc7XG4gIC8vIFRPRE86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5OiB7XG4gIC8vICAgcmF0aW5nOiBudW1iZXI7XG4gIC8vICAgY291bnQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI6IHN0cmluZztcbiAgZ2l0aHViUmVwbzogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIHF1ZXJ5TGlzdD86IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW5XaXRoSWQgZXh0ZW5kcyBGbG9vclBsYW4ge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEZsb29yUGxhbj47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChmbG9vclBsYW5JZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhmbG9vclBsYW5JZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8Rmxvb3JQbGFuPjtcblxuY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiBnZXRDb2xsZWN0aW9uUmVmKCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZsb29yUGxhbnMoKTogUHJvbWlzZTxGbG9vclBsYW5XaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJlZEZsb29yUGxhbnMoe1xuICBxdWVyeVN0cmluZyxcbiAgdXNlcklkLFxufToge1xuICBxdWVyeVN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsO1xufSk6IFByb21pc2U8Rmxvb3JQbGFuV2l0aElkW10+IHtcbiAgbGV0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIHF1ZXJ5UmVmID0gcXVlcnlSZWYud2hlcmUoXCJvd25lclwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcbiAgfVxuICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICBxdWVyeVJlZiA9IHF1ZXJ5UmVmLndoZXJlKFxuICAgICAgXCJxdWVyeUxpc3RcIixcbiAgICAgIFwiYXJyYXktY29udGFpbnMtYW55XCIsXG4gICAgICBxdWVyeVN0cmluZ1xuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSlcbiAgICAgICAgLnNsaWNlKDAsIDkpXG4gICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICApIGFzIFF1ZXJ5PEZsb29yUGxhbj47XG4gIH1cbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZsb29yUGxhbihcbiAgZmxvb3JQbGFuSWRcbik6IFByb21pc2U8Rmxvb3JQbGFuV2l0aElkIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoZmxvb3JQbGFuSWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4geyBpZDogZG9jUmVmLmlkLCAuLi4oZG9jU25hcD8uZGF0YSgpIGFzIEZsb29yUGxhbikgfSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRmxvb3JQbGFuKGZsb29yUGxhbjogRmxvb3JQbGFuKTogUHJvbWlzZTxGbG9vclBsYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXG4gICAgICAuLi5mbG9vclBsYW4udGl0bGUuc3BsaXQoXCIgXCIpLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKS5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSksXG4gICAgICAuLi5mbG9vclBsYW4udGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSkubWFwKCh3b3JkKSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkpLFxuICAgIF07XG4gICAgZmxvb3JQbGFuLnF1ZXJ5TGlzdCA9IHF1ZXJ5TGlzdDtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVmKCkuYWRkKGZsb29yUGxhbik7XG5cbiAgICBjb25zdCBuZXdGbG9vclBsYW4gPSBhd2FpdCBnZXRGbG9vclBsYW4oZG9jUmVmLmlkKTtcbiAgICBpZiAoIW5ld0Zsb29yUGxhbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Zsb29yUGxhbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRGbG9vclBsYW4oXG4gIGZsb29yUGxhbklkOiBzdHJpbmcsXG4gIGZsb29yUGxhbjogRmxvb3JQbGFuXG4pOiBQcm9taXNlPEZsb29yUGxhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtcbiAgICAgIC4uLmZsb29yUGxhbi50aXRsZS5zcGxpdChcIiBcIikuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmxlbmd0aCA+IDEpLm1hcCgod29yZCkgPT4gd29yZC50b0xvd2VyQ2FzZSgpKSxcbiAgICAgIC4uLmZsb29yUGxhbi50YWdzLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKS5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSksXG4gICAgXTtcbiAgICBmbG9vclBsYW4ucXVlcnlMaXN0ID0gcXVlcnlMaXN0O1xuICAgIGF3YWl0IGdldERvY1JlZmVyZW5jZShmbG9vclBsYW5JZCkuc2V0KGZsb29yUGxhbik7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGZsb29yUGxhbklkKTtcblxuICAgIGNvbnN0IG5ld0Zsb29yUGxhbiA9IGF3YWl0IGdldEZsb29yUGxhbihkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3Rmxvb3JQbGFuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Rmxvb3JQbGFuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQge1xuICBhZGRCbG9nUG9zdCxcbiAgQmxvZ1Bvc3RXaXRoSWQsXG4gIGdldEJsb2dQb3N0LFxufSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0UG9zdCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdFBvc3RcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKCFhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGlzQXV0aG9yIH07XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgYXV0aG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JJZFwiKTtcbiAgY29uc3QgaW1hZ2VVcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVVybFwiKTtcbiAgY29uc3QgaW1hZ2VBbHQgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZUFsdFwiKTtcbiAgY29uc3QgdGFncyA9IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJ0YWdzXCIpKT8uc3BsaXQoXCIsXCIpIHx8IFtdO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IGZvcm1EYXRhLmdldChcImlzUHVibGlzaGVkXCIpID09PSBcInRydWVcIjtcbiAgY29uc3QgcHVibGlzaERhdGUgPSBwYXJzZUludChcbiAgICAoZm9ybURhdGEuZ2V0KFwicHVibGlzaERhdGVcIikgYXMgc3RyaW5nKSB8fCBcIjBcIixcbiAgICAxMFxuICApO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlVXJsKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlQWx0KSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIXRhZ3MpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgYXV0aG9ySWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlVXJsID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZUFsdCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgdGFncyA9PT0gXCJvYmplY3RcIik7XG5cbiAgYXdhaXQgYWRkQmxvZ1Bvc3Qoe1xuICAgIGF1dGhvcklkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd24sXG4gICAgaXNQdWJsaXNoZWQsXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmwsXG4gICAgaW1hZ2VBbHQsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCB7XG4gICAgYXV0aG9ySWQsXG4gICAgaXNQdWJsaXNoZWQ6IGluaXRJc1B1Ymxpc2hlZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duOiBpbml0TWFya2Rvd24sXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmwsXG4gICAgaW1hZ2VBbHQsXG4gICAgdGFncyxcbiAgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKHB1Ymxpc2hEYXRlKSk7XG4gIGNvbnN0IFttYXJrZG93biwgc2V0TWFya2Rvd25dID0gdXNlU3RhdGU8c3RyaW5nPihpbml0TWFya2Rvd24pO1xuICBjb25zdCBbaXNQdWJsaXNoZWQsIHNldElzUHVibGlzaGVkXSA9IHVzZVN0YXRlKGluaXRJc1B1Ymxpc2hlZCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdG9yQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0TWFya2Rvd24odmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdFBvc3RcbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgYXV0aG9ySWQ9e2F1dGhvcklkfVxuICAgICAgaXNQdWJsaXNoZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgc2V0SXNQdWJsaXNoZWQ9e3NldElzUHVibGlzaGVkfVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHNldERhdGU9e3NldERhdGV9XG4gICAgICBtYXJrZG93bj17bWFya2Rvd259XG4gICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIHNsdWc9e3NsdWd9XG4gICAgICBpbWFnZVVybD17aW1hZ2VVcmx9XG4gICAgICBpbWFnZUFsdD17aW1hZ2VBbHR9XG4gICAgICB0YWdzPXt0YWdzPy5qb2luKFwiLCBcIikgfHwgXCJcIn1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImJsb2dQb3N0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0IHtcbiAgYXV0aG9ySWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBtYXJrZG93bjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpc1B1Ymxpc2hlZDogYm9vbGVhbjtcbiAgcHVibGlzaERhdGU6IG51bWJlcjtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgaW1hZ2VBbHQ6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0V2l0aElkIGV4dGVuZHMgQmxvZ1Bvc3Qge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEJsb2dQb3N0PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGJsb2dQb3N0SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoYmxvZ1Bvc3RJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICgpID0+IGdldENvbGxlY3Rpb25SZWYoKSBhcyBRdWVyeTxCbG9nUG9zdD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dQb3N0KGJsb2dQb3N0SWQpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3RJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiB7IGlkOiBkb2NSZWYuaWQsIC4uLmRvY1NuYXA/LmRhdGEoKSBhcyBCbG9nUG9zdCB9IHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nUG9zdChibG9nUG9zdDogQmxvZ1Bvc3QpOiBQcm9taXNlPEJsb2dQb3N0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGJsb2dQb3N0LnNsdWcpLnNldChibG9nUG9zdCk7XG5cbiAgICBjb25zdCBuZXdCbG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KGJsb2dQb3N0LnNsdWcpO1xuICAgIGlmICghbmV3QmxvZ1Bvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdCbG9nUG9zdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBVc2VyLCBBcHBVc2VyV2l0aElkLCBBUFBfVVNFUlNfQ09MTEVDVElPTiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEFQUF9VU0VSU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxBcHBVc2VyPjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGFwcFVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhhcHBVc2VySWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8QXBwVXNlcj47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBcHBVc2Vycyh1c2VySWQpOiBQcm9taXNlPEFwcFVzZXJXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBVc2VyKGFwcFVzZXJJZCk6IFByb21pc2U8QXBwVXNlciB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiBkb2NTbmFwPy5kYXRhKCkgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcFVzZXIoXG4gIGFwcFVzZXJJZDogc3RyaW5nXG4pOiBQcm9taXNlPEFwcFVzZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKGV4aXN0aW5nQXBwVXNlcikge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwVXNlcjtcbiAgICB9XG4gICAgYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCkuc2V0KHtwZXJtaXNzaW9uczogW119KTtcblxuICAgIGNvbnN0IG5ld0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKCFuZXdBcHBVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXBwVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyIHtcbiAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyV2l0aElkIGV4dGVuZHMgQXBwVXNlciB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBUFBfVVNFUlNfQ09MTEVDVElPTiA9IFwiYXBwVXNlcnNcIjsiLCAiaW1wb3J0IHsgRm9ybSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiQG1vbmFjby1lZGl0b3IvcmVhY3RcIjtcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sTGFiZWwsXG4gIFRleHRGaWVsZCxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgQnV0dG9uLFxuICBCb3gsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRQb3N0KHtcbiAgZXJyb3JzLFxuICBhdXRob3JJZCxcbiAgaXNQdWJsaXNoZWQsXG4gIHNldElzUHVibGlzaGVkLFxuICBkYXRlLFxuICBzZXREYXRlLFxuICBtYXJrZG93bixcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlLFxuICB0aXRsZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgc2x1ZyA9IFwiXCIsXG4gIGltYWdlVXJsID0gXCJcIixcbiAgaW1hZ2VBbHQgPSBcIlwiLFxuICB0YWdzID0gXCJcIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17Mn0gc3g9e3sgcDogNCB9fT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aG9ySWRcIiB2YWx1ZT17YXV0aG9ySWR9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJpc1B1Ymxpc2hlZFwiXG4gICAgICAgICAgdmFsdWU9e2lzUHVibGlzaGVkLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1hcmtkb3duXCIgdmFsdWU9e21hcmtkb3dufSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicHVibGlzaERhdGVcIlxuICAgICAgICAgIHZhbHVlPXtkYXRlPy5nZXRUaW1lKCkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgc3g9e3sgcDogNCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogeyBtZDogXCIzMjBweFwiIH0sXG4gICAgICAgICAgICAgIGZsZXg6IHsgbWQ6IFwiMCAwIDMyMHB4XCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElzUHVibGlzaGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJjb250cm9sbGVkXCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpc1B1Ymxpc2hlZCA/IFwiSXMgUHVibGlzaGVkXCIgOiBcIk5vdCBQdWJsaXNoZWRcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPERhdGVUaW1lUGlja2VyIGRhdGU9e2RhdGV9IHNldERhdGU9e3NldERhdGV9IHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGl0bGV9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy50aXRsZSA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICBlcnJvcnM/LmRlc2NyaXB0aW9uID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5zbHVnfVxuICAgICAgICAgICAgICAgIGlkPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnNsdWcgPyBcIlNsdWcgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2x1Z31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmltYWdlVXJsfVxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgVXJsXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LmltYWdlVXJsID8gXCJpbWFnZVVybCBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICBpZD1cImltYWdlQWx0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlIEFsdCBUZXh0XCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LmltYWdlQWx0ID8gXCJpbWFnZUFsdCBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VBbHRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW1hZ2VBbHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50YWdzfVxuICAgICAgICAgICAgICAgIGlkPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRhZ3MgPyBcInRhZ3MgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhZ3NcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFnc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJjb2x1bW4tcmV2ZXJzZVwiIH19XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgIHN4PXt7IGZsZXg6IFwiMSAxXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxXCIsIG1pbkhlaWdodDogXCI1MDBweFwiIH19PlxuICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODB2aFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwibWFya2Rvd25cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21hcmtkb3dufVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIHsvKiBsYWJlbD1cIk1hcmtkb3duXCJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9e2Vycm9ycz8ubWFya2Rvd24gPyA8ZW0+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9ICovfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsyfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgdG89e2AvYmxvZy8ke3NsdWd9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCBUZXh0RmllbGQsIHtCYXNlVGV4dEZpZWxkUHJvcHN9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBBZGFwdGVyRGF0ZUZucyBmcm9tICdAbXVpL2xhYi9BZGFwdGVyRGF0ZUZucyc7XG5pbXBvcnQgTG9jYWxpemF0aW9uUHJvdmlkZXIgZnJvbSAnQG11aS9sYWIvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IE1VSURhdGVUaW1lUGlja2VyIGZyb20gJ0BtdWkvbGFiL0RhdGVUaW1lUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQmFzZVRleHRGaWVsZFByb3BzIHtcbiAgZGF0ZTogRGF0ZSB8IG51bGw7XG4gIHNldERhdGU6IChuZXdEYXRlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlVGltZVBpY2tlcih7ZGF0ZSwgc2V0RGF0ZSwgLi4udGV4dEZpZWxkUHJvcHN9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRhdGVGbnN9PlxuICAgICAgPE1VSURhdGVUaW1lUGlja2VyXG4gICAgICAgIHJlbmRlcklucHV0PXsocHJvcHMpID0+IDxUZXh0RmllbGQgZnVsbFdpZHRoIHsuLi5wcm9wc30gey4uLnRleHRGaWVsZFByb3BzfS8+fVxuICAgICAgICBsYWJlbD1cIkRhdGVUaW1lUGlja2VyXCJcbiAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgIG9uQ2hhbmdlPXsobmV3RGF0ZSkgPT4ge1xuICAgICAgICAgIHNldERhdGUobmV3RGF0ZSk7XG4gICAgICAgIH19XG4gICAgICAgIFxuICAgICAgLz5cbiAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxuICApO1xufSIsICJpbXBvcnQgeyByZWRpcmVjdCwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEVkaXRGbG9vclBsYW4gfSBmcm9tIFwifi9jb21wb25lbnRzL0VkaXRGbG9vclBsYW5cIjtcbmltcG9ydCB7IGFkZEZsb29yUGxhbiB9IGZyb20gXCJ+L2RiL2Zsb29yUGxhbnMuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgdXNlcklkOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXJJZCxcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnR5cGUgUGxhbkVycm9yID0ge1xuICBvd25lcj86IGJvb2xlYW47XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xuICBjb3N0PzogYm9vbGVhbjtcbiAgLy8gVE9ETz86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5Pzoge1xuICAvLyAgIHJhdGluZz86IG51bWJlcjtcbiAgLy8gICBjb3VudD86IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI/OiBib29sZWFuO1xuICBnaXRodWJSZXBvPzogYm9vbGVhbjtcbiAgc2V0dXBUaW1lPzogYm9vbGVhbjtcbiAgdGFncz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBvd25lciA9IGZvcm1EYXRhLmdldChcIm93bmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBjb3N0ID0gZm9ybURhdGEuZ2V0KFwiY29zdFwiKTtcbiAgY29uc3QgZ2l0aHViT3duZXIgPSBmb3JtRGF0YS5nZXQoXCJnaXRodWJPd25lclwiKTtcbiAgY29uc3QgZ2l0aHViUmVwbyA9IGZvcm1EYXRhLmdldChcImdpdGh1YlJlcG9cIik7XG4gIGNvbnN0IHNldHVwVGltZSA9IGZvcm1EYXRhLmdldChcInNldHVwVGltZVwiKTtcbiAgY29uc3QgdGFncyA9XG4gICAgU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpXG4gICAgICA/LnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZC50cmltKCkpIHx8IFtdO1xuXG4gIGNvbnN0IGVycm9yczogUGxhbkVycm9yID0ge307XG4gIGlmICghb3duZXIpIGVycm9ycy5vd25lciA9IHRydWU7XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghY29zdCkgZXJyb3JzLmNvc3QgPSB0cnVlO1xuICBpZiAoIWdpdGh1Yk93bmVyKSBlcnJvcnMuZ2l0aHViT3duZXIgPSB0cnVlO1xuICBpZiAoIWdpdGh1YlJlcG8pIGVycm9ycy5naXRodWJSZXBvID0gdHJ1ZTtcbiAgaWYgKCFzZXR1cFRpbWUpIGVycm9ycy5zZXR1cFRpbWUgPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIG93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvc3QgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1Yk93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBnaXRodWJSZXBvID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzZXR1cFRpbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IGFkZEZsb29yUGxhbih7XG4gICAgb3duZXIsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29zdCxcbiAgICBnaXRodWJPd25lcixcbiAgICBnaXRodWJSZXBvLFxuICAgIHNldHVwVGltZSxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZmxvb3ItcGxhbnNcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQbGFuKCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiA8RWRpdEZsb29yUGxhbiBpc0NyZWF0ZSBlcnJvcnM9e2Vycm9yc30gb3duZXI9e3VzZXJJZH0gLz47XG59XG4iLCAiaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBJbnB1dEFkb3JubWVudCxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgTG9hZGVyRnVuY3Rpb24sIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHsgRmxvb3JQbGFuQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZFwiO1xuaW1wb3J0IHtcbiAgRmxvb3JQbGFuV2l0aElkLFxuICBnZXRGaWx0ZXJlZEZsb29yUGxhbnMsXG59IGZyb20gXCJ+L2RiL2Zsb29yUGxhbnMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGZsb29yUGxhbnM6IEZsb29yUGxhbldpdGhJZFtdO1xuICB1c2VySWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBzaG93TWluZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2hvdy1taW5lXCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJxdWVyeS1zdHJpbmdcIik7XG4gIGNvbnN0IGZsb29yUGxhbnMgPSBhd2FpdCBnZXRGaWx0ZXJlZEZsb29yUGxhbnMoe1xuICAgIHVzZXJJZDogc2hvd01pbmUgPyB1c2VySWQgOiBudWxsLFxuICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVN0cmluZyB8fCBudWxsLFxuICB9KTtcbiAgcmV0dXJuIHsgZmxvb3JQbGFucywgdXNlcklkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IGZsb29yUGxhbnMsIHVzZXJJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgYWxpZ25JdGVtcz17XCJzdHJldGNoXCJ9XG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgc3BhY2luZz17NH1cbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIxMjBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwUGFwZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIFNlYXJjaCB0byBmaW5kIGEgZmxvb3IgcGxhbiB0byBnZXQgeW91ciBhcHAgb2ZmIHRoZSBncm91bmQuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERpdmlkZXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgT1JcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2Zsb29yLXBsYW5zL2NyZWF0ZVwiIHNpemU9e1wibGFyZ2VcIn0+XG4gICAgICAgICAgQWRkIEEgRmxvb3IgUGxhbiBUbyBTaGFyZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgY29tcG9uZW50PXtGb3JtfVxuICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwic3RyZXRjaFwiLCBtZDogXCJjZW50ZXJcIiB9fVxuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPVwicXVlcnktc3RyaW5nXCJcbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmb3IgRmxvb3IgUGxhblwiXG4gICAgICAgICAgbmFtZT1cInF1ZXJ5LXN0cmluZ1wiXG4gICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9ezxTd2l0Y2ggbmFtZT1cInNob3ctbWluZVwiIC8+fVxuICAgICAgICAgICAgbGFiZWw9XCJTaG93IE15IEZsb29yIFBsYW5zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgRmlsdGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAge2Zsb29yUGxhbnMubWFwKChmbG9vclBsYW4pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Zsb29yUGxhbi5pZH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiB7IHhzOiBcIjAgMCA4MCVcIiwgbWQ6IFwiMCAwIDQwJVwiLCBsZzogXCIwIDAgMzAlXCIgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGbG9vclBsYW5DYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9e2Zsb29yUGxhbi50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Zmxvb3JQbGFuLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNvc3Q9e2Zsb29yUGxhbi5jb3N0fVxuICAgICAgICAgICAgICAgIHNldHVwVGltZT17Zmxvb3JQbGFuLnNldHVwVGltZX1cbiAgICAgICAgICAgICAgICBvd25lcj17Zmxvb3JQbGFuLm93bmVyfVxuICAgICAgICAgICAgICAgIGdpdGh1Yk93bmVyPXtmbG9vclBsYW4uZ2l0aHViT3duZXJ9XG4gICAgICAgICAgICAgICAgZ2l0aHViUmVwbz17Zmxvb3JQbGFuLmdpdGh1YlJlcG99XG4gICAgICAgICAgICAgICAgdGFncz17Zmxvb3JQbGFuLnRhZ3N9XG4gICAgICAgICAgICAgICAgaWQ9e2Zsb29yUGxhbi5pZH1cbiAgICAgICAgICAgICAgICB1c2VySWQ9e3VzZXJJZH1cblxuICAgICAgICAgICAgICAgIC8vIHBvcHVsYXJpdHk9e3tcbiAgICAgICAgICAgICAgICAvLyAgIHJhdGluZzogNC41LFxuICAgICAgICAgICAgICAgIC8vICAgY291bnQ6IDMsXG4gICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICAvLyB1cmw9e1xuICAgICAgICAgICAgICAgIC8vICAgXCJodHRwczovL2dpdGh1Yi5jb20vZmxvb3JwbGFuL2Zsb29ycGxhbiN3ZWxjb21lLXRvLWZsb29ycGxhblwiXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCdXR0b24sXG4gIFR5cG9ncmFwaHksXG4gIExpbmssXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgU3RhY2ssXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TdGFyXCI7XG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhckJvcmRlclwiO1xuaW1wb3J0IFN0YXJIYWxmSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TdGFySGFsZlwiO1xuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Nb25ldGl6YXRpb25PblwiO1xuaW1wb3J0IEFjY2Vzc1RpbWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc1RpbWVcIjtcbmludGVyZmFjZSBGbG9vclBsYW5DYXJkUHJvcHMge1xuICBvd25lcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBzdHJpbmc7XG4gIC8vIFRPRE86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5OiB7XG4gIC8vICAgcmF0aW5nOiBudW1iZXI7XG4gIC8vICAgY291bnQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI6IHN0cmluZztcbiAgZ2l0aHViUmVwbzogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZsb29yUGxhbkNhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNvc3QsXG4gIGdpdGh1Yk93bmVyLFxuICBnaXRodWJSZXBvLFxuICBzZXR1cFRpbWUsXG4gIHRhZ3MsXG4gIGlkLFxuICB1c2VySWQsXG4gIG93bmVyLFxufTogRmxvb3JQbGFuQ2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgbWFyZ2luOiBcIjIwcHggYXV0b1wiIH19PlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICA8QWNjZXNzVGltZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3NldHVwVGltZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICB7LyogPE1vbmV0aXphdGlvbk9uSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIi8+ICovfVxuICAgICAgICAgICAgICB7Y29zdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtTdGFja31cbiAgICAgICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuZXcgQXJyYXkocGFyc2VJbnQocG9wdWxhcml0eS5yYXRpbmcudG9TdHJpbmcoKSwgMTApKVxuICAgICAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgICAgICAubWFwKCh2YWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2lkeH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cG9wdWxhcml0eS5yYXRpbmcgJSAxID4gMCA/IDxTdGFySGFsZkljb24gLz4gOiBudWxsfVxuICAgICAgICAgICAge25ldyBBcnJheSg1IC0gTWF0aC5jZWlsKHBvcHVsYXJpdHkucmF0aW5nKSlcbiAgICAgICAgICAgICAgLmZpbGwobnVsbClcbiAgICAgICAgICAgICAgLm1hcCgodmFsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24ga2V5PXtpZHh9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAoe3BvcHVsYXJpdHkuY291bnR9KVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz4gKi99XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcInN0cmV0Y2hcIiwgbWQ6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtvd25lciA9PT0gdXNlcklkID8gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPXtgL2Zsb29yLXBsYW5zLyR7aWR9L2VkaXRgfVxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Z2l0aHViT3duZXJ9LyR7Z2l0aHViUmVwb30jcmVhZG1lYH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyBnZXRNRFhDb21wb25lbnQgfSBmcm9tIFwibWR4LWJ1bmRsZXIvY2xpZW50XCI7XG5pbXBvcnQgeyBCbG9nUG9zdFdpdGhJZCwgZ2V0QmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYWIsIExpbmssIFBhcGVyLCBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ29kZUJsb2NrIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdFwiO1xuaW1wb3J0IHsgZ2V0TWR4IH0gZnJvbSBcIn4vdXRpbHMvbWR4LnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEJsb2dQb3N0V2l0aElkIHtcbiAgY29kZTogc3RyaW5nO1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmIChhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgaXNBdXRob3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQocGFyYW1zLmJsb2dQb3N0SWQsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIGNvbnN0IGJsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QocGFyYW1zLmJsb2dQb3N0SWQpO1xuICBpbnZhcmlhbnQoYmxvZ1Bvc3QsIFwiZXhwZWN0ZWQgYmxvZ1Bvc3RcIik7XG4gIGNvbnN0IHsgY29kZSwgZnJvbnRtYXR0ZXIgfSA9IGF3YWl0IGdldE1keChibG9nUG9zdC5tYXJrZG93bik7XG4gIHJldHVybiB7IC4uLmJsb2dQb3N0LCBjb2RlLCBpc0F1dGhvciB9O1xufTtcblxuY29uc3QgSDEgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDFcIlxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEgyID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImgyXCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEgzID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImgzXCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEg0ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg0XCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEg1ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuY29uc3QgSDYgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBQID0gKHByb3BzKSA9PiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keVwiIGNvbXBvbmVudD1cInBcIiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQmxvY2txdW90ZSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICBzeD17e1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIG1hcmdpbjogMixcbiAgICAgIGJvcmRlckxlZnQ6ICh7IHBhbGV0dGUgfSkgPT4gYDJweCBzb2xpZCR7cGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBQcmUgPSAocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfSAvPjtcbmNvbnN0IENvZGUgPSAocHJvcHMpID0+IDxDb2RlQmxvY2sgey4uLnByb3BzfSAvPjtcbmNvbnN0IEEgPSAocHJvcHMpID0+IDxMaW5rIHsuLi5wcm9wc30gLz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IGlzQXV0aG9yLCBjb2RlLCBpbWFnZVVybCwgaW1hZ2VBbHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBDb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IGdldE1EWENvbXBvbmVudChjb2RlKSwgW2NvZGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogXCIxNzhweCBhdXRvIDBweFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2ltYWdlVXJsfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMyMHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2lzQXV0aG9yID8gKFxuICAgICAgICAgIDxGYWJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlZGl0XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPVwiZWRpdFwiXG4gICAgICAgICAgICBzeD17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDIwLCByaWdodDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtDb21wb25lbnQgPyAoXG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICBoMTogSDEsXG4gICAgICAgICAgICAgIGgyOiBIMixcbiAgICAgICAgICAgICAgaDM6IEgzLFxuICAgICAgICAgICAgICBoNDogSDQsXG4gICAgICAgICAgICAgIGg1OiBINSxcbiAgICAgICAgICAgICAgaDY6IEg2LFxuICAgICAgICAgICAgICBwOiBQLFxuICAgICAgICAgICAgICBibG9ja3F1b3RlOiBCbG9ja3F1b3RlLFxuICAgICAgICAgICAgICBwcmU6IFByZSxcbiAgICAgICAgICAgICAgY29kZTogQ29kZSxcbiAgICAgICAgICAgICAgYTogQSxcblxuICAgICAgICAgICAgICAvLyBlbTogKHByb3BzKSA9PiA8aSBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICAgICAgICAvLyB3cmFwcGVyOiAoeyBjb21wb25lbnRzLCAuLi5yZXN0IH0pID0+IDxtYWluIHsuLi5yZXN0fSAvPixcbiAgICAgICAgICAgICAgLy8gUGxhbmV0OiAoKSA9PiBcIk5lcHR1bmVcIixcbiAgICAgICAgICAgICAgLy8gdGhlbWU6IHtcbiAgICAgICAgICAgICAgLy8gICB0ZXh0OiAocHJvcHMpID0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiB9fSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IFBhcGVyLCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgSGlnaGxpZ2h0LCB7IGRlZmF1bHRQcm9wcyB9IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlclwiO1xuaW1wb3J0IGRyYWN1bGEgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9kcmFjdWxhXCI7XG5cbmNvbnN0IExpbmUgPSBzdHlsZWQoXCJkaXZcIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLXJvd1wiLFxufSk7XG5cbmNvbnN0IExpbmVObyA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gIHBhZGRpbmdSaWdodDogXCIxZW1cIixcbiAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gIG9wYWNpdHk6IFwiMC41XCIsXG59KTtcblxuY29uc3QgTGluZUNvbnRlbnQgPSBzdHlsZWQoXCJzcGFuXCIpKHtcbiAgZGlzcGxheTogXCJ0YWJsZS1jZWxsXCIsXG4gIGZvbnRGYW1pbHk6IFwiJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb2RlQmxvY2sgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhpZ2hsaWdodCB7Li4uZGVmYXVsdFByb3BzfSBjb2RlPXtjaGlsZHJlbn0gbGFuZ3VhZ2U9XCJqc3hcIiB0aGVtZT17ZHJhY3VsYX0+XG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxuICAgICAgICA8UGFwZXJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgICA8TGluZSBrZXk9e2l9IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxuICAgICAgICAgICAgICA8TGluZU5vPntpICsgMX08L0xpbmVObz5cbiAgICAgICAgICAgICAgPExpbmVDb250ZW50PlxuICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ2hpbGRyZW4gPSBjaGlsZHJlbi5yZXBsYWNlKC9cXHMvZywgXCImbmJzcDtcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBzYW5pdGl6ZWRDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9MaW5lQ29udGVudD5cbiAgICAgICAgICAgIDwvTGluZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICl9XG4gICAgPC9IaWdobGlnaHQ+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJtZHgtYnVuZGxlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWR4KHNvdXJjZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XG4gICAgc291cmNlLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cFwiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJGbG9vciBQbGFuIHwgU2lnbiBJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ24gaW4gdG8gc3RhcnQgeW91ciBvd24gY29kZSBqb3VybmV5IVwiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfVFlQRVMgPSB7XG4gIFNJR05fSU46IFwiU2lnbiBJblwiLFxuICBTSUdOX1VQOiBcIlNpZ24gVXBcIixcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aFR5cGU6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIC8vIFRPRE86IGlmIGEgdXNlciB0aGVuIHJlZGlyZWN0IHRvIC9kYXNoYm9hcmRcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRoVHlwZTpcbiAgICAgIHBhcmFtcy5hdXRoVHlwZSA9PT0gXCJpblwiID8gQVVUSF9UWVBFUy5TSUdOX0lOIDogQVVUSF9UWVBFUy5TSUdOX1VQLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8IGVtYWlsLm1hdGNoKC8uK0AuK1xcLi4rLykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYEVtYWlscyBtdXN0IGxvb2sgbGlrZSBleGFtcGxlQGV4YW1wbGUuY29tYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDw9IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEZvcm1EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGF1dGhUeXBlOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHsgYXV0aFR5cGU6IGluaXRBdXRoVHlwZSB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbYWN0aW9uRGF0YSwgc2V0QWN0aW9uRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe30pO1xuICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKGluaXRBdXRoVHlwZSk7XG5cbiAgY29uc3QgaGFuZGxlQXV0aFR5cGUgPSAoZXZlbnQsIG5ld0F1dGhUeXBlKSA9PiB7XG4gICAgaWYgKCFuZXdBdXRoVHlwZSkgcmV0dXJuO1xuICAgIHNldEF1dGhUeXBlKG5ld0F1dGhUeXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0QXV0aFR5cGUgIT09IGF1dGhUeXBlKSB7XG4gICAgICBzZXRBdXRoVHlwZShpbml0QXV0aFR5cGUpO1xuICAgIH1cbiAgfSwgW2luaXRBdXRoVHlwZV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChcbiAgICBldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcbiAgICBjb25zdCBhdXRoVHlwZSA9IGZvcm0uZ2V0KFwiYXV0aFR5cGVcIik7XG4gICAgY29uc3QgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhdXRoVHlwZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0geyBhdXRoVHlwZSwgZW1haWwsIHBhc3N3b3JkIH07XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICBlbWFpbDogdmFsaWRhdGVFbWFpbChlbWFpbCksXG4gICAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gICAgfTtcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICAgIHN3aXRjaCAoYXV0aFR5cGUpIHtcbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX0lOOiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBBVVRIX1RZUEVTLlNJR05fVVA6IHtcbiAgICAgICAgLy8gaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgLy8gICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIC8vICAgICBmaWVsZHMsXG4gICAgICAgIC8vICAgICBmb3JtRXJyb3I6IGBVc2VyIHdpdGggZW1haWwgJHtlbWFpbH0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYFNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgdXNlci5gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiBgTG9naW4gdHlwZSBpbnZhbGlkYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFja1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjIwMHB4IGF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFwcFBhcGVyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZm9ybUVycm9yID8gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9e1BhcGVyfSBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aFR5cGVcIiB2YWx1ZT17YXV0aFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIHZhbHVlPXthdXRoVHlwZX1cbiAgICAgICAgICAgICAgICBleGNsdXNpdmVcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZ24gSW4gb3IgU2lnbiBVcFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZW1haWx9XG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsKX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyBcImVtYWlsLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUeXBlID09PSBBVVRIX1RZUEVTLlNJR05fSU4gPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3JtLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgIEFVVEhfVFlQRVMuU0lHTl9JTiA9PT0gYXV0aFR5cGUgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgdXNlclRva2VuID0gZm9ybS5nZXQoXCJ1c2VyVG9rZW5cIikgYXMgc3RyaW5nO1xuICAgICAgaWYgKCF1c2VyVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IHVwZGF0ZSBzZXNzaW9uLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XG4gICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbiwgcmVkaXJlY3RUbyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKFwiUkVRVUVTVCBOT1QgSEFORExFRFwiKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEJsb2dDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9CbG9nQ2FyZFwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEFsbEJsb2dQb3N0cyB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgcG9zdHM6IEJsb2dQb3N0V2l0aElkW107XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxCbG9nUG9zdHMoKTtcbiAgcmV0dXJuIHsgcG9zdHMsIGlzQXV0aG9yIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IHBvc3RzLCBpc0F1dGhvciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2Jsb2cvbmV3XCI+XG4gICAgICAgICAgICBBZGQgQmxvZyBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgfX1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleDogeyB4czogXCIwIDAgODAlXCIsIG1kOiBcIjAgMCA0MCVcIiwgbGc6IFwiMCAwIDMwJVwiIH0sXG4gICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJsb2dDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIGltYWdlQWx0PXtwb3N0LmltYWdlQWx0fVxuICAgICAgICAgICAgICB1cmw9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAvLyBpbWFnZVVybD17cG9zdC5pbWFnZVVybCB8fCBcIlwifVxuICAgICAgICAgICAgICAvLyBpbWFnZUFsdD17cG9zdC5pbWFnZUFsdCB8fCBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZEFjdGlvbkFyZWEsIENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIi4vQXBwUGFwZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGltYWdlQWx0OiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gQmxvZ0NhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgaW1hZ2VVcmwsXG4gIGltYWdlQWx0LFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwUGFwZXIgc3g9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgY29tcG9uZW50PXtMaW5rfSB0bz17dXJsfT5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIHsvKiBUT0RPOiBpbXBsZW1lbnQgc2hhcmUgYWN0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgIHsvKiA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+ICovfVxuICAgICAgPC9DYXJkPlxuICAgIDwvQXBwUGFwZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcclxuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkRGF0YVBvaW50LFxyXG4gIERhdGFQb2ludCxcclxuICBnZXRBbGxEYXRhUG9pbnRzLFxyXG59IGZyb20gXCJ+L2RiL2RhdGFQb2ludHMuc2VydmVyXCI7XHJcbmltcG9ydCB7IERhdGFQb2ludFdpdGhJZCwgZ2V0QWxsRGF0YVBvaW50c0xpdmUgfSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLmNsaWVudFwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUxvYWRlckRhdGEgfSBmcm9tIFwifi9ob29rcy91c2VGaXJlYmFzZUxvYWRlckRhdGFcIjtcclxuXHJcbnR5cGUgTG9hZGVyRGF0YSA9IHsgZGF0YVBvaW50czogRGF0YVBvaW50V2l0aElkW10gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG5cclxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xyXG4gICAgZGF0YVBvaW50czogYXdhaXQgZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBwb2ludCA9IE51bWJlcihmb3JtLmdldChcInBvaW50XCIpKTtcclxuICBjb25zdCB0aW1lc3RhbXAgPSBOdW1iZXIoZm9ybS5nZXQoXCJ0aW1lc3RhbXBcIikpO1xyXG4gIGlmICghcG9pbnQgfHwgIXRpbWVzdGFtcCkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IGFkZCB0aGlzIGRhdGEgcG9pbnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IGFkZERhdGFQb2ludCh7XHJcbiAgICB1c2VySWQsXHJcbiAgICBwb2ludCxcclxuICAgIHRpbWVzdGFtcCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlcj8udWlkO1xyXG4gIGNvbnN0IHsgZGF0YVBvaW50cyB9ID0gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCh1cGRhdGVyKSA9PlxyXG4gICAgZ2V0QWxsRGF0YVBvaW50c0xpdmUodXNlcklkLCAoZGF0YVBvaW50cykgPT4gdXBkYXRlcih7IGRhdGFQb2ludHMgfSkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezN9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICAgIHN4PXt7IGhlaWdodDogXCIxMjBweFwiLCBwYWRkaW5nOiBcIjEycHhcIiwgbWFyZ2luOiBcIjEycHhcIiwgd2lkdGg6IFwiODAlXCIgfX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1hcm91bmRcIn1cclxuICAgICAgICBhbGlnbkl0ZW1zPXtcImZsZXgtZW5kXCJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YVBvaW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICBkYXRhUG9pbnRzXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxyXG4gICAgICAgICAgICAubWFwKCh7IHBvaW50IH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtwb2ludCAqIDEwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLyAke2RhdGFQb2ludHMubGVuZ3RofSAtIDEwcHgpYCxcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L0JveD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+QWRkIHNvbWUgZGF0YSE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICBuYW1lPVwicG9pbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ0aW1lc3RhbXBcIiB2YWx1ZT17RGF0ZS5ub3coKX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgYWRkIGRhdGFcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBEQVRBX1BPSU5UU19DT0xMRUNUSU9OID0gXCJkYXRhUG9pbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50IHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHBvaW50OiBudW1iZXI7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnRXaXRoSWQgZXh0ZW5kcyBEYXRhUG9pbnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBEQVRBX1BPSU5UU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoZGF0YVBvaW50SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoZGF0YVBvaW50SWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPERhdGFQb2ludD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxEYXRhUG9pbnQ+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpOiBQcm9taXNlPERhdGFQb2ludFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFQb2ludChkYXRhUG9pbnRJZCk6IFByb21pc2U8RGF0YVBvaW50IHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoZGF0YVBvaW50SWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4gZG9jU25hcD8uZGF0YSgpIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGREYXRhUG9pbnQoZGF0YVBvaW50OiBEYXRhUG9pbnQpOiBQcm9taXNlPERhdGFQb2ludD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGdldENvbGxlY3Rpb25SZWYoKS5hZGQoZGF0YVBvaW50KTtcblxuICAgIGNvbnN0IG5ld0RhdGFQb2ludCA9IGF3YWl0IGdldERhdGFQb2ludChkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3RGF0YVBvaW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YVBvaW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCB0eXBlIFVzZUVmZmVjdFVuc3ViY3JpYmVyID0gKCkgPT4gdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaXJlYmFzZUxvYWRlckRhdGE8VD4oXG4gIGNsaWVudFVwZGF0ZXI6IChcbiAgICB1cGRhdGVyOiAoZGF0YTogVCkgPT4gdm9pZFxuICApID0+IFVzZUVmZmVjdFVuc3ViY3JpYmVyXG4pOiBUIHtcbiAgLy8gZ2V0IHRoZSBkYXRhIGZvcm0gdGhlIHNldmVyIHZpYSBmaXJlYmFzZSBhZG1pblxuICBjb25zdCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YTxUPigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUPihsb2FkZXJEYXRhKTtcblxuICAvLyB3aGVuIHRoZSBjbGllbnQgZ2V0cyBhbiB1cGRhdGUgYWxsb3dcbiAgLy8gdGhlIGNsaWVudCB0byB1cGRhdGUgdGhlIGRhdGFcbiAgZnVuY3Rpb24gdXBkYXRlcihkYXRhOiBUKSB7XG4gICAgc2V0RGF0YShkYXRhKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4gY2xpZW50VXBkYXRlcih1cGRhdGVyKSwgW2xvYWRlckRhdGFdKTtcbiAgcmV0dXJuIGRhdGE7XG59IiwgImltcG9ydCB7XG4gIHJlZGlyZWN0LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlQWN0aW9uRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgYWRkQmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0UG9zdCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdFBvc3RcIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRob3JJZDogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gIGlmICghYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgfVxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhvcklkOiB1c2VySWQsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG4gIGltYWdlVXJsPzogYm9vbGVhbjtcbiAgaW1hZ2VBbHQ/OiBib29sZWFuO1xuICB0YWdzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5pbWFnZVVybCA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5pbWFnZUFsdCA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLnRhZ3MgPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGF1dGhvcklkID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZVVybCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VBbHQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsLFxuICAgIGltYWdlQWx0LFxuICAgIHRhZ3MsXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbbWFya2Rvd24sIHNldE1hcmtkb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RWRpdFBvc3RcbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgYXV0aG9ySWQ9e2F1dGhvcklkfVxuICAgICAgaXNQdWJsaXNoZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgc2V0SXNQdWJsaXNoZWQ9e3NldElzUHVibGlzaGVkfVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHNldERhdGU9e3NldERhdGV9XG4gICAgICBtYXJrZG93bj17bWFya2Rvd259XG4gICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAvPlxuICApO1xufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBhXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYVwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEEhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYlwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBiXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGJcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBCIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJiLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGNcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBjXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQyFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59OyIsICJpbXBvcnQgeyBCdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IEZsb29yUGxhbkNhcmQgfSBmcm9tIFwifi9jb21wb25lbnRzL0Zsb29yUGxhbkNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJGbG9vciBQbGFuOiBDb3B5L1Bhc3RhL1R3ZXJrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29kZXMgU2FnYXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCI4MHB4IGF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+Zmxvb3IgcGxhbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+L1x1MDJDOGZsXHUwMEY0KFx1MDI1OSlyIFx1MDJDQ3BsYW4vPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5ub3VuIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgQSBwbGFjZSB0byBzaGFyZSBhbmQgZGlzY292ZXIgYXBwIHN0YWNrcyBzbyB0aGF0IHlvdSBjYW4gc3RhcnRcbiAgICAgICAgICBicmluZ2luZyB5b3VyIGlkZWFzIHRvIGxpZmUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgdG89XCIvZmxvb3ItcGxhbnMvY3JlYXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGUgYSBmbG9vciBwbGFuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2Zsb29yLXBsYW5zL1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoIGZsb29yIHBsYW5zXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0FwcFBhcGVyPlxuXG4gICAgICB7LyogPEZsb29yUGxhbkNhcmRcbiAgICAgICAgdGl0bGU9e1wiUmVtaXggd2l0aCBGaXJlYmFzZSBvbiBOZXRsaWZ5XCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICBcIkEgUmVhY3QgYXBwIHdyaXR0ZW4gd2l0aCBSZW1peCBhbmQgRmlyZWJhc2UgZGVwbG95ZWQgb24gTmV0bGlmeS4gSXQgdXNlcyBUeXBlc2NyaXB0IGFuZCBoYXMgYWxsIHRoZSBidWlsZGluZyBibG9ja3MgdG8gZ2V0IHlvdXIgYXBwIG9mZiB0aGUgZ3JvdW5kLlwiXG4gICAgICAgIH1cbiAgICAgICAgY29zdD17XCJGUkVFXCJ9XG4gICAgICAgIHBvcHVsYXJpdHk9e3tcbiAgICAgICAgICByYXRpbmc6IDQuNSxcbiAgICAgICAgICBjb3VudDogMyxcbiAgICAgICAgfX1cbiAgICAgICAgdXJsPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9mbG9vcnBsYW4vZmxvb3JwbGFuI3dlbGNvbWUtdG8tZmxvb3JwbGFuXCJ9XG4gICAgICAgIHNldHVwVGltZT17XCIxaHJcIn1cbiAgICAgIC8+ICovfVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZTc4OWJmNTMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVBVVjVQUUpFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BVjZZSFVLNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVWV0Q3WURSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVBYUUtSTFcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SEFTUFFWRC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNFI1RlpGQlEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVVXN09QM0kyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUtZSlY1UUouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PQjc3VVhNTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtURVpSM0RMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlRZMkdNMkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00MlBHWTVURi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCc6eydpZCc6J3JvdXRlcy9ibG9nLyRibG9nUG9zdElkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvOmJsb2dQb3N0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC1FRklDN0gzSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WWEZIUFZFSy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvOmJsb2dQb3N0SWQvZWRpdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQtNUxQVlM3RlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRGTFVMNlFULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2EnOnsnaWQnOidyb3V0ZXMvYmxvZy9hJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2EtSFNHRlIzQkYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2InOnsnaWQnOidyb3V0ZXMvYmxvZy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2ItNEs3Q0RUUkcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2MnOnsnaWQnOidyb3V0ZXMvYmxvZy9jJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2MtS1RKNUtWWUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2luZGV4Jzp7J2lkJzoncm91dGVzL2Jsb2cvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9pbmRleC1CRlVNTlNVVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9uZXcnOnsnaWQnOidyb3V0ZXMvYmxvZy9uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9uZXctS0dTQ0lMTkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRGTFVMNlFULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtM0ZPN0s0QTIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQnOnsnaWQnOidyb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZmxvb3ItcGxhbnMvOmZsb29yUGxhbklkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQtTVpMN1hJNEguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpPNVREQlFOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVAzV1hRNEQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9mbG9vci1wbGFucy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Zsb29yLXBsYW5zL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9mbG9vci1wbGFucy9jcmVhdGUtRjREM1ZXWkcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpPNVREQlFOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVAzV1hRNEQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9mbG9vci1wbGFucy9pbmRleCc6eydpZCc6J3JvdXRlcy9mbG9vci1wbGFucy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidmbG9vci1wbGFucycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgtQzdaVFdWWEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQM1dYUTRELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlhGSFBWRUsuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtRjVMTlBCTVkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtSjZBT1hZN1AuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbi4kYXV0aFR5cGUnOnsnaWQnOidyb3V0ZXMvc2lnbi4kYXV0aFR5cGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2lnbi86YXV0aFR5cGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUtNk1KTVhZT0MuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3VwZGF0ZS1zZXNzaW9uJzp7J2lkJzoncm91dGVzL3VwZGF0ZS1zZXNzaW9uJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3VwZGF0ZS1zZXNzaW9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3VwZGF0ZS1zZXNzaW9uLUYyRjZXN01GLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRTc4OUJGNTMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtB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
