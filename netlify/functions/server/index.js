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
  const redirectTo = pathname.includes("/sign/") ? "/dashboard" : pathname;
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
var import_firestore = require("firebase/firestore");
var app;
var auth;
var db;
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
function AppBar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_AppBar.default, null, /* @__PURE__ */ React.createElement(import_Toolbar.default, {
    sx: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/",
    style: { textDecoration: "none" }
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    variant: "h4",
    noWrap: true,
    sx: (theme2) => ({
      background: `linear-gradient(to right, ${theme2.palette.primary.main}, ${theme2.palette.secondary.main})`,
      backgroundClip: "text",
      textFillColor: "transparent"
    })
  }, "Floor Plan")), /* @__PURE__ */ React.createElement(SignInUp, null))), /* @__PURE__ */ React.createElement(import_Box2.default, {
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
var import_material2 = require("@mui/material");
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
  (0, import_material2.unstable_useEnhancedEffect)(() => {
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
  }, /* @__PURE__ */ React4.createElement(import_material2.Stack, {
    justifyContent: "center",
    alignItems: "center",
    sx: { height: "100vh", padding: 5 }
  }, /* @__PURE__ */ React4.createElement(AppPaper, {
    leftColor: "error",
    rightColor: "warning"
  }, /* @__PURE__ */ React4.createElement(import_material2.Typography, {
    variant: "h1",
    textAlign: "center"
  }, title), /* @__PURE__ */ React4.createElement(import_material2.Typography, null, message))));
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

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.edit.tsx
var blogPostId_edit_exports = {};
__export(blogPostId_edit_exports, {
  action: () => action,
  default: () => NewPost,
  loader: () => loader2
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/db/blogPosts.server.ts
init_react();
var BLOG_POSTS_COLLECTION = "blogPosts";
var getCollectionRef = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION);
var getDocReference = (blogPostId) => getCollectionRef().doc(blogPostId);
var getQuery = () => getCollectionRef();
async function getAllBlogPosts() {
  const queryRef = getQuery();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getBlogPost(blogPostId) {
  const docRef = getDocReference(blogPostId);
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
    const docRef = await getDocReference(blogPost.slug).set(blogPost);
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
var getCollectionRef2 = () => (0, import_firestore2.getFirestore)().collection(APP_USERS_COLLECTION);
var getDocReference2 = (appUserId) => getCollectionRef2().doc(appUserId);
async function getAppUser(appUserId) {
  const docRef = getDocReference2(appUserId);
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
var import_remix8 = __toESM(require_remix());
var import_react8 = __toESM(require("@monaco-editor/react"));
var import_material3 = require("@mui/material");

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
  return /* @__PURE__ */ React.createElement(import_material3.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
  }), /* @__PURE__ */ React.createElement(import_material3.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_material3.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      minWidth: { md: "320px" },
      flex: { md: "0 0 320px" }
    }
  }, /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material3.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true,
    defaultValue: slug
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.imageUrl,
    id: "imageUrl",
    label: "Image Url",
    helperText: (errors == null ? void 0 : errors.imageUrl) ? "imageUrl is required" : null,
    variant: "filled",
    name: "imageUrl",
    fullWidth: true,
    defaultValue: imageUrl
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.imageAlt,
    id: "imageAlt",
    label: "Image Alt Text",
    helperText: (errors == null ? void 0 : errors.imageAlt) ? "imageAlt is required" : null,
    variant: "filled",
    name: "imageAlt",
    fullWidth: true,
    defaultValue: imageAlt
  })), /* @__PURE__ */ React.createElement(import_material3.Box, null, /* @__PURE__ */ React.createElement(import_material3.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : null,
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  }))), /* @__PURE__ */ React.createElement(import_material3.Stack, {
    spacing: 2,
    direction: { xs: "column", md: "column-reverse" },
    justifyContent: "flex-end",
    sx: { flex: "1 1" }
  }, /* @__PURE__ */ React.createElement(import_material3.Box, {
    sx: { flex: "1 1", minHeight: "500px" }
  }, /* @__PURE__ */ React.createElement(import_react8.default, {
    height: "80vh",
    defaultLanguage: "markdown",
    onChange: handleEditorChange,
    theme: "vs-dark",
    defaultValue: markdown
  })), /* @__PURE__ */ React.createElement(import_material3.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material3.Button, {
    component: import_remix8.Link,
    to: `/blog/${slug}`,
    target: "_blank",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material3.Button, {
    type: "submit",
    variant: "contained"
  }, "Create Post"))))));
}

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.edit.tsx
var loader2 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
      return (0, import_remix9.redirect)("/blog");
    }
  }
  (0, import_tiny_invariant.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant.default)(blogPost, "expected blogPost");
  return __spreadProps(__spreadValues({}, blogPost), { isAuthor });
};
var action = async ({ request }) => {
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
  (0, import_tiny_invariant.default)(typeof title === "string");
  (0, import_tiny_invariant.default)(typeof slug === "string");
  (0, import_tiny_invariant.default)(typeof markdown === "string");
  (0, import_tiny_invariant.default)(typeof description === "string");
  (0, import_tiny_invariant.default)(typeof authorId === "string");
  (0, import_tiny_invariant.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant.default)(typeof publishDate === "number");
  (0, import_tiny_invariant.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant.default)(typeof tags === "object");
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
  return (0, import_remix9.redirect)("/blog");
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
  } = (0, import_remix9.useLoaderData)();
  const [date, setDate] = (0, import_react9.useState)(new Date(publishDate));
  const [markdown, setMarkdown] = (0, import_react9.useState)(initMarkdown);
  const [isPublished, setIsPublished] = (0, import_react9.useState)(initIsPublished);
  const errors = (0, import_remix9.useActionData)();
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

// route:/root/projects/floorplan/app/routes/blog/$blogPostId.tsx
var blogPostId_exports = {};
__export(blogPostId_exports, {
  default: () => PostSlug,
  loader: () => loader3
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var import_react10 = require("react");
var import_material5 = require("@mui/material");

// app/components/CodeBlock.tsx
init_react();
var import_material4 = require("@mui/material");
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
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(import_material4.Paper, {
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
var loader3 = async ({
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
  (0, import_tiny_invariant2.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant2.default)(blogPost, "expected blogPost");
  const { code, frontmatter } = await getMdx(blogPost.markdown);
  return __spreadProps(__spreadValues({}, blogPost), { code, isAuthor });
};
var H1 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h1",
  color: "primary",
  sx: { marginBottom: 3 }
}, props));
var H2 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h2",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H3 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h3",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H4 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h4",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H5 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h5",
  sx: { marginBottom: 3 }
}, props));
var H6 = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h6",
  sx: { marginBottom: 3 }
}, props));
var P = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "body",
  component: "p"
}, props));
var Blockquote = (props) => /* @__PURE__ */ React.createElement(import_material5.Typography, __spreadValues({
  variant: "h6",
  component: import_material5.Paper,
  sx: {
    padding: 2,
    margin: 2,
    borderLeft: ({ palette }) => `2px solid${palette.primary.main}`
  }
}, props));
var Pre = (props) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, props));
var Code = (props) => /* @__PURE__ */ React.createElement(CodeBlock, __spreadValues({}, props));
var A = (props) => /* @__PURE__ */ React.createElement(import_material5.Link, __spreadValues({}, props));
function PostSlug() {
  const { isAuthor, code, imageUrl, imageAlt } = (0, import_remix10.useLoaderData)();
  const Component = (0, import_react10.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material5.Box, {
    component: import_material5.Paper,
    sx: {
      margin: "178px auto 0px",
      maxWidth: "900px",
      position: "relative",
      padding: 3,
      bgcolor: "background.default",
      minHeight: "100vh",
      borderRadius: "4px"
    }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    component: import_material5.Paper,
    sx: {
      background: `url(${imageUrl}) no-repeat center center`,
      height: "320px",
      width: "100%"
    }
  }), isAuthor ? /* @__PURE__ */ React.createElement(import_material5.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix10.Link,
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
  loader: () => loader4,
  meta: () => meta
});
init_react();
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_ToggleButton = __toESM(require("@mui/material/ToggleButton"));
var import_ToggleButtonGroup = __toESM(require("@mui/material/ToggleButtonGroup"));
var import_remix11 = __toESM(require_remix());
var import_react11 = require("react");
var import_material6 = require("@mui/material");
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
var loader4 = async ({ request, params }) => {
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
  const { authType: initAuthType } = (0, import_remix11.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h1",
    textAlign: "center"
  }, authType), /* @__PURE__ */ React.createElement(import_remix11.Form, {
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
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
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
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
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
  action: () => action2
});
init_react();
var action2 = async ({ request, params }) => {
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
  default: () => Blog,
  loader: () => loader5
});
init_react();
var import_material8 = require("@mui/material");
var import_remix13 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material7 = require("@mui/material");
var import_remix12 = __toESM(require_remix());
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
  }, /* @__PURE__ */ React.createElement(import_material7.CardActionArea, {
    component: import_remix12.Link,
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
var loader5 = async ({
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
function Blog() {
  const { posts, isAuthor } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material8.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(import_material8.Typography, {
    variant: "h1",
    textAlign: "center"
  }, "Blog"), isAuthor ? /* @__PURE__ */ React.createElement(import_material8.Button, {
    component: import_remix13.Link,
    to: "/blog/new"
  }, "Add Blog Post") : null), /* @__PURE__ */ React.createElement(import_material8.Stack, {
    direction: { xs: "column", md: "row" },
    sx: {
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    },
    justifyContent: "space-around"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_material8.Box, {
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
  action: () => action3,
  default: () => DashBoard,
  loader: () => loader6
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_Button4 = __toESM(require("@mui/material/Button"));
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_Stack3 = __toESM(require("@mui/material/Stack"));
var import_Paper3 = __toESM(require("@mui/material/Paper"));

// app/db/dataPoints.server.ts
init_react();
var DATA_POINTS_COLLECTION = "dataPoints";
var getCollectionRef3 = () => (0, import_firestore2.getFirestore)().collection(DATA_POINTS_COLLECTION);
var getDocReference3 = (dataPointId) => getCollectionRef3().doc(dataPointId);
var getQuery2 = (userId) => getCollectionRef3().where("userId", "==", userId);
async function getAllDataPoints(userId) {
  const queryRef = getQuery2(userId);
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getDataPoint(dataPointId) {
  const docRef = getDocReference3(dataPointId);
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
    const docRef = await getCollectionRef3().add(dataPoint);
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
var import_material9 = require("@mui/material");
var import_react13 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react12 = require("react");
var import_remix14 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix14.useLoaderData)();
  const [data, setData] = (0, import_react12.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react12.useEffect)(() => clientUpdater(updater), [loaderData]);
  return data;
}

// route:/root/projects/floorplan/app/routes/dashboard.tsx
var loader6 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const data = {
    dataPoints: await getAllDataPoints(userId)
  };
  return data;
};
var action3 = async ({ request, params }) => {
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
  })) : /* @__PURE__ */ React.createElement(import_material9.Typography, {
    variant: "h3"
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix15.Form, {
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
  action: () => action4,
  default: () => NewPost2,
  loader: () => loader7
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_react14 = require("react");
var loader7 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix16.redirect)("/blog");
  }
  const data = {
    authorId: userId
  };
  return data;
};
var action4 = async ({ request }) => {
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
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  (0, import_tiny_invariant3.default)(typeof description === "string");
  (0, import_tiny_invariant3.default)(typeof authorId === "string");
  (0, import_tiny_invariant3.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant3.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant3.default)(typeof tags === "object");
  (0, import_tiny_invariant3.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant3.default)(typeof publishDate === "number");
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
  return (0, import_remix16.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react14.useState)(new Date());
  const [markdown, setMarkdown] = (0, import_react14.useState)("");
  const [isPublished, setIsPublished] = (0, import_react14.useState)(true);
  const { authorId } = (0, import_remix16.useLoaderData)();
  const errors = (0, import_remix16.useActionData)();
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
  action: () => action5,
  loader: () => loader8
});
init_react();
var import_remix17 = __toESM(require_remix());
var action5 = async ({ request }) => {
  return logout(request);
};
var loader8 = async () => {
  return (0, import_remix17.redirect)("/");
};

// route:/root/projects/floorplan/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta5
});
init_react();
var import_Stack4 = __toESM(require("@mui/material/Stack"));
var import_Typography4 = __toESM(require("@mui/material/Typography"));

// app/components/FloorPlanCard.tsx
init_react();
var import_Button5 = __toESM(require("@mui/material/Button"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_material10 = require("@mui/material");
var import_Star = __toESM(require("@mui/icons-material/Star"));
var import_StarBorder = __toESM(require("@mui/icons-material/StarBorder"));
var import_StarHalf = __toESM(require("@mui/icons-material/StarHalf"));
var import_AccessTime = __toESM(require("@mui/icons-material/AccessTime"));
function FloorPlanCard({
  title,
  description,
  cost,
  popularity,
  url,
  setupTime
}) {
  return /* @__PURE__ */ React.createElement(import_material10.Card, {
    sx: { margin: "20px auto" }
  }, /* @__PURE__ */ React.createElement(import_material10.CardContent, null, /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: "row",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div",
    color: "secondary"
  }, title), /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: "row",
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h6",
    color: "text.secondary"
  }, /* @__PURE__ */ React.createElement(import_AccessTime.default, {
    fontSize: "inherit"
  }), setupTime), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h6",
    color: "primary"
  }, cost))), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "body2",
    color: "text.secondary"
  }, description)), /* @__PURE__ */ React.createElement(import_material10.CardActions, {
    sx: {
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 2
  }, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h5",
    color: "text.secondary",
    component: import_material10.Stack,
    direction: "row",
    alignItems: "center"
  }, new Array(parseInt(popularity.rating.toString(), 10)).fill(null).map((val, idx) => /* @__PURE__ */ React.createElement(import_Star.default, {
    key: idx
  })), popularity.rating % 1 > 0 ? /* @__PURE__ */ React.createElement(import_StarHalf.default, null) : null, new Array(5 - Math.ceil(popularity.rating)).fill(null).map((val, idx) => /* @__PURE__ */ React.createElement(import_StarBorder.default, {
    key: idx
  }))), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h5",
    color: "text.secondary"
  }, "(", popularity.count, ")")), /* @__PURE__ */ React.createElement(import_Button5.default, {
    component: import_material10.Link,
    href: url,
    target: "_blank",
    size: "large"
  }, "Get Started")));
}

// route:/root/projects/floorplan/app/routes/index.tsx
var meta5 = () => {
  return {
    title: "Floor Plan: Copy/Pasta/Twerk",
    description: "Codes Sagas a place to learn a million and one ways to code."
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(import_Stack4.default, {
    sx: {
      maxWidth: "700px",
      margin: "80px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_Typography4.default, {
    variant: "h3"
  }, "floor plan"), /* @__PURE__ */ React.createElement(import_Typography4.default, {
    variant: "h4"
  }, "/\u02C8fl\xF4(\u0259)r \u02CCplan/"), /* @__PURE__ */ React.createElement(import_Typography4.default, {
    variant: "h6"
  }, "noun "), /* @__PURE__ */ React.createElement(import_Typography4.default, {
    variant: "h4"
  }, "An app framework designed to help you validate your idea quickly.")), /* @__PURE__ */ React.createElement(FloorPlanCard, {
    title: "Remix with Firebase on Netlify",
    description: "A React app written with Remix and Firebase deployed on Netlify. It uses Typescript and has all the building blocks to get your app off the ground.",
    cost: "FREE",
    popularity: {
      rating: 4.5,
      count: 3
    },
    url: "https://github.com/floorplan/floorplan#welcome-to-floorplan",
    setupTime: "1hr"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ff400ff5", "entry": { "module": "/build/entry.client-MTMQ547A.js", "imports": ["/build/_shared/chunk-ASL6OOTR.js", "/build/_shared/chunk-CVH46KMH.js", "/build/_shared/chunk-SB7R6TFU.js", "/build/_shared/chunk-KM6DDLR7.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-BK5LEN2A.js", "imports": ["/build/_shared/chunk-L6X6HLBV.js", "/build/_shared/chunk-PHW4446O.js", "/build/_shared/chunk-ZBY65LN6.js", "/build/_shared/chunk-2RBHVDHY.js", "/build/_shared/chunk-QKYJV5QJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-LL3QHASD.js", "imports": ["/build/_shared/chunk-YUEZ4I6A.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-AER6GNWL.js", "imports": ["/build/_shared/chunk-PHAPNZY4.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-HSGFR3BF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-4K7CDTRG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-KTJ5KVYH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-GVLUZ2VX.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-EL6ES3CH.js", "imports": ["/build/_shared/chunk-PHAPNZY4.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-YKTLNKSP.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SJ4IPFX2.js", "imports": ["/build/_shared/chunk-YUEZ4I6A.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-AZSX4PUN.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-Y25KRAM6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-F2F6W7MF.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FF400FF5.js" };

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
  "routes/blog/$blogPostId.edit": {
    id: "routes/blog/$blogPostId.edit",
    parentId: "root",
    path: "blog/:blogPostId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_edit_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvc3RhdGUvQXV0aFByb3ZpZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Mb2dvdXRGb3JtLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BcHBCYXIudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhDb250cm9scy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvbi50c3giLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2F1dGgudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzIiwgIi4uLy4uLy4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwUGFwZXIudHN4IiwgIi4uLy4uLy4uL2FwcC90aGVtZS9DbGllbnRTdHlsZUNvbnRleHQudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvYmxvZ1Bvc3RzLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy90eXBlcy50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9FZGl0UG9zdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXIudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NvZGVCbG9jay50c3giLCAiLi4vLi4vLi4vYXBwL3V0aWxzL21keC5zZXJ2ZXIudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3VwZGF0ZS1zZXNzaW9uLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9CbG9nQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvZGF0YVBvaW50cy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YS50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL25ldy50c3giLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYS5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYi5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYy5tZHgiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9hLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2MubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvOmJsb2dQb3N0SWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nLzpibG9nUG9zdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaWduLiRhdXRoVHlwZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbi86YXV0aFR5cGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3VwZGF0ZS1zZXNzaW9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9hXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvYVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbW90aW9uQ2FjaGUgfSBmcm9tIFwifi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIn4vdGhlbWVcIjtcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGNvbnN0IE11aVJlbWl4U2VydmVyID0gKCkgPT4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCB0byBhIHN0cmluZy5cbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XG5cbiAgLy8gR3JhYiB0aGUgQ1NTIGZyb20gZW1vdGlvblxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cbiAgbGV0IHN0eWxlc0hUTUwgPSBcIlwiO1xuXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xuICAgIGNvbnN0IGVtb3Rpb25LZXkgPSBgJHtrZXl9ICR7aWRzLmpvaW4oXCIgXCIpfWA7XG4gICAgY29uc3QgbmV3U3R5bGVUYWcgPSBgPHN0eWxlIGRhdGEtZW1vdGlvbj1cIiR7ZW1vdGlvbktleX1cIj4ke2Nzc308L3N0eWxlPmA7XG4gICAgc3R5bGVzSFRNTCA9IGAke3N0eWxlc0hUTUx9JHtuZXdTdHlsZVRhZ31gO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGVtb3Rpb24gc3R5bGUgdGFncyBhZnRlciB0aGUgaW5zZXJ0aW9uIHBvaW50IG1ldGEgdGFnXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcbiAgICAvPG1ldGEoXFxzKSpuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKmNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqXFwvPi8sXG4gICAgYDxtZXRhIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiLz4ke3N0eWxlc0hUTUx9YFxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIn4vdGhlbWUvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IENPTE9SUy5QUklNQVJZLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuU0VDT05EQVJZLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IENPTE9SUy5FUlJPUixcbiAgICB9LFxuICAgIHdhcm5pbmc6IHtcbiAgICAgIG1haW46IENPTE9SUy5XQVJOSU5HLFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbWFpbjogQ09MT1JTLklORk8sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBtYWluOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IENPTE9SUy5CQUNLR1JPVU5ELkRFRkFVTFQsXG4gICAgICBwYXBlcjogQ09MT1JTLkJBQ0tHUk9VTkQuUEFQRVIsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBcdTI2OUJcdUZFMEZcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24gXHVEODNEXHVEQ0EzIVxuICAgICAgICAvLyB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiLCAiZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgUFJJTUFSWTogXCIjMzA1N0UxXCIsXG4gIFNFQ09OREFSWTogXCIjRERGRkY3XCIsXG4gIC8vIEVSUk9SOiBcIiNGRjAwNDdcIixcbiAgRVJST1I6IFwiI2ZmMmYwMFwiLFxuICBXQVJOSU5HOiBcIiNGRkE1MDBcIixcbiAgSU5GTzogXCIjMDBFN0ZGXCIsXG4gIFNVQ0NFU1M6IFwiIzAwRkY3RVwiLFxuICBCQUNLR1JPVU5EOiB7XG4gICAgREVGQVVMVDogXCIjMEYwRjE1XCIsXG4gICAgLy8gUEFQRVI6IFwiIzMwNTdFMVwiLFxuICAgIFBBUEVSOiBcIiMwNzAzMTlcIixcbiAgfSxcbn07XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMb2FkZXJGdW5jdGlvbixcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBPdXRsZXQsXG4gIHVzZUNhdGNoLFxuICBNZXRhLFxuICBTY3JpcHRzLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBnbG9iYWxTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBCYXJcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IEF1dGhVc2VyLCBnZXRBdXRoVXNlciwgZ2V0VXNlclRva2VuIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHsgd2l0aEVtb3Rpb25DYWNoZSB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgU3RhY2ssXG4gIFR5cG9ncmFwaHksXG4gIHVuc3RhYmxlX3VzZUVuaGFuY2VkRWZmZWN0IGFzIHVzZUVuaGFuY2VkRWZmZWN0LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsaWVudFN0eWxlQ29udGV4dCBmcm9tIFwifi90aGVtZS9DbGllbnRTdHlsZUNvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL21vZGVybi1jc3MtcmVzZXRAMS40LjAvZGlzdC9yZXNldC5taW4uY3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZ2xvYmFsU3R5bGVzVXJsLFxuICAgIH0sXG4gIF07XG59XG5cbmludGVyZmFjZSBEb2N1bWVudFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IERvY3VtZW50ID0gd2l0aEVtb3Rpb25DYWNoZShcbiAgKHsgY2hpbGRyZW4sIHRpdGxlIH06IERvY3VtZW50UHJvcHMsIGVtb3Rpb25DYWNoZSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFN0eWxlRGF0YSA9IHVzZUNvbnRleHQoQ2xpZW50U3R5bGVDb250ZXh0KTtcblxuICAgIC8vIE9ubHkgZXhlY3V0ZWQgb24gY2xpZW50XG4gICAgdXNlRW5oYW5jZWRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gcmUtbGluayBzaGVldCBjb250YWluZXJcbiAgICAgIGVtb3Rpb25DYWNoZS5zaGVldC5jb250YWluZXIgPSBkb2N1bWVudC5oZWFkO1xuICAgICAgLy8gcmUtaW5qZWN0IHRhZ3NcbiAgICAgIGNvbnN0IHRhZ3MgPSBlbW90aW9uQ2FjaGUuc2hlZXQudGFncztcbiAgICAgIGVtb3Rpb25DYWNoZS5zaGVldC5mbHVzaCgpO1xuICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgIChlbW90aW9uQ2FjaGUuc2hlZXQgYXMgYW55KS5faW5zZXJ0VGFnKHRhZyk7XG4gICAgICB9KTtcbiAgICAgIC8vIHJlc2V0IGNhY2hlIHRvIHJlYXBwbHkgZ2xvYmFsIHN0eWxlc1xuICAgICAgY2xpZW50U3R5bGVEYXRhLnJlc2V0KCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gLz5cbiAgICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXG4gICAgICAgICAgICBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG4pO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IHVzZXI6IEF1dGhVc2VyIHwgbnVsbDsgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRBdXRoVXNlcihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgdXNlcixcbiAgICB1c2VyVG9rZW4sXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gUHJvdmlkZXJzKHtcbiAgdXNlcixcbiAgY2hpbGRyZW4sXG4gIHVzZXJUb2tlbixcbn06IHtcbiAgdXNlcjogQXV0aFVzZXIgfCBudWxsO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB1c2VyVG9rZW46IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciB1c2VyPXt1c2VyfSB1c2VyVG9rZW49e3VzZXJUb2tlbn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyB1c2VyLCB1c2VyVG9rZW4gfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxQcm92aWRlcnMgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAgICA8QXBwQmFyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvUHJvdmlkZXJzPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvb3RFcnJvcih7XG4gIGRvY1RpdGxlID0gXCJPb3BzIVwiLFxuICB0aXRsZSA9IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFx1RDgzRFx1REUyNVwiLFxuICBtZXNzYWdlID0gXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17ZG9jVGl0bGV9PlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgIHN4PXt7IGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiA1IH19XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwUGFwZXIgbGVmdENvbG9yPVwiZXJyb3JcIiByaWdodENvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PnttZXNzYWdlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0FwcFBhcGVyPlxuICAgICAgICA8L1N0YWNrPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBjb25zdCB0aXRsZSA9IGAke2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YDtcbiAgcmV0dXJuIChcbiAgICA8Um9vdEVycm9yXG4gICAgICBkb2NUaXRsZT17dGl0bGV9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBtZXNzYWdlPXtcbiAgICAgICAgXCJXZWxsIHRoaXMgaXMgZW1iYXJzaW5nLiBcdUQ4M0RcdURFMDUgSGF2ZSB5b3UgdHJpZWQgdHVybmluZyBpdCBvZmYgYW5kIGJhY2sgb24gYWdhaW4/XCJcbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgcmV0dXJuIDxSb290RXJyb3IgbWVzc2FnZT17ZXJyb3IubWVzc2FnZX0gLz47XG59XG4iLCAiaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIHVzZUZldGNoZXIsIHVzZUxvY2F0aW9uLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcbmltcG9ydCB7IGFkZEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQXV0aFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhVc2VyIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgdXNlcjogdXNlclByb3AsXG4gIHVzZXJUb2tlbjogdXNlclRva2VuUHJvcCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdXNlcjogQXV0aFVzZXIgfCBudWxsO1xuICB1c2VyVG9rZW46IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPEF1dGhVc2VyIHwgbnVsbD4odXNlclByb3ApO1xuICBjb25zdCBsb2dvdXRGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt1c2VyVG9rZW4sIHNldFVzZXJUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KHVzZXJUb2tlblByb3AgfHwgXCJcIik7XG4gIGNvbnN0IHVzZXJUb2tlbkZvcm0gPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVc2VyKHVzZXJQcm9wKTtcbiAgfSwgW3VzZXJQcm9wXSk7XG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IHBhdGhuYW1lLmluY2x1ZGVzKFwiL3NpZ24vXCIpID8gXCIvZGFzaGJvYXJkXCIgOiBwYXRobmFtZTtcblxuICBmdW5jdGlvbiBzZW5kVXNlclRva2VuKCkge1xuICAgIGlmICghdXNlclRva2VuRm9ybS5jdXJyZW50KSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodXNlclRva2VuRm9ybS5jdXJyZW50KTtcbiAgICBmZXRjaGVyLnN1Ym1pdChmb3JtRGF0YSwge21ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjpcIi91cGRhdGUtc2Vzc2lvblwifSlcbiAgfVxuXG4gIC8vIGxpc3RlbiBmb3IgdG9rZW4gY2hhbmdlc1xuICAvLyBjYWxsIHNldFVzZXIgYW5kIHdyaXRlIG5ldyB0b2tlbiBhcyBhIGNvb2tpZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgcmV0dXJuIGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlckZyb21DaGFuZ2UpID0+IHtcbiAgICAgIGlmICh1c2VyRnJvbUNoYW5nZSA9PT0gbnVsbCAmJiB1c2VyICE9PSBudWxsKSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIGlmICghbG9nb3V0Rm9ybVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxvZ291dEZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlckZyb21DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyRnJvbUNoYW5nZS5nZXRJZFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdXNlclRva2VuKSB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyRnJvbUNoYW5nZSk7XG4gICAgICAgICAgc2V0VXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgICBhd2FpdCBhZGRBcHBVc2VyKHVzZXJGcm9tQ2hhbmdlLnVpZCk7XG4gICAgICAgICAgc2VuZFVzZXJUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPExvZ291dEZvcm0gcmVmPXtsb2dvdXRGb3JtUmVmfSAvPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17dXNlclRva2VuRm9ybX0gYWN0aW9uPVwiL3VwZGF0ZS1zZXNzaW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInB1dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJUb2tlblwiIHZhbHVlPXt1c2VyVG9rZW59IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gcmVkaXJlY3RUb31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiIsICJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtUHJvcHMgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IExvZ291dEZvcm0gPSBmb3J3YXJkUmVmPEhUTUxGb3JtRWxlbWVudCwgRm9ybVByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxGb3JtIHJlZj17cmVmfSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIHsuLi5wcm9wc30gLz5cbik7XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xzIGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aENvbnRyb2xzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNdWlBcHBCYXI+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSlgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICB0ZXh0RmlsbENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGbG9vciBQbGFuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPEF1dGhDb250cm9scyAvPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L011aUFwcEJhcj5cbiAgICAgIDxCb3ggc3g9e3sgbWFyZ2luQm90dG9tOiBcIjY0cHhcIiB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgU2lnbk91dEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvblwiO1xuaW1wb3J0IHsgTG9nb3V0Rm9ybSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb3V0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5VcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUF1dGgoKTtcbiAgcmV0dXJuIHVzZXIgPT09IG51bGwgPyAoXG4gICAgPEJveD5cbiAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9zaWduL2luXCI+XG4gICAgICAgIHNpZ24gaW5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzeD17eyBtYXJnaW5MZWZ0OiAyIH19XG4gICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgdG89XCIvc2lnbi91cFwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgID5cbiAgICAgICAgc2lnbiB1cFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgPEJveD5cbiAgICAgIDxMb2dvdXRGb3JtPlxuICAgICAgICA8U2lnbk91dEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBzaWduIG91dFxuICAgICAgICA8L1NpZ25PdXRCdXR0b24+XG4gICAgICA8L0xvZ291dEZvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIi4uL2ZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbk91dEJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gey4uLnByb3BzfT5zaWduIG91dDwvQnV0dG9uPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgb25JZFRva2VuQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGF1dGhcclxuICAgIC5zaWduT3V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWduZWQgb3V0IVwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRoU3RhdGVDaGFuZ2VkKGNiKSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVJZFRva2VuQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbklkVG9rZW5DaGFuZ2VkKGF1dGgsIGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICBjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiAmJiBjYih1c2VyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCl7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIGF1dGguY3VycmVudFVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmlnZ2VyVG9rZW5SZWZyZXNoKCl7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKHVzZXIpIGF3YWl0IHVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgY29ubmVjdEF1dGhFbXVsYXRvciwgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmxldCBhcHAsIGF1dGgsIGRiO1xyXG5cclxuaWYgKCFnZXRBcHBzKCkubGVuZ3RoKSB7XHJcbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAvLyBUT0RPOiBNYWtlIHN1cmUgdGhlc2UgYXJlIHlvdXIgdmFsdWVzXHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RGxFemNKZU5uR0QxTDNUbUpHYnlsc0ZRZDdkbW1hQThnXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImZsb29ycGxhbi1jb2Rlc2FnYXMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiZmxvb3JwbGFuLWNvZGVzYWdhc1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJmbG9vcnBsYW4tY29kZXNhZ2FzLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDc0MTk4OTY0ODgxXCIsXHJcbiAgICBhcHBJZDogXCIxOjEwNzQxOTg5NjQ4ODE6d2ViOjc0MmUzYTM3ZjAzMDcwODBmNDJkMzBcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1GRDNYSzY2M0MwXCJcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yKGRiLCBcImxvY2FsaG9zdFwiLCA4MDgwKTtcclxuICAgIGNvbm5lY3RBdXRoRW11bGF0b3IoYXV0aCwgXCJodHRwOi8vbG9jYWxob3N0OjkwOTlcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBhcHAsIGF1dGgsIGRiLCBnZXRBdXRoLCBnZXRGaXJlc3RvcmUgfTtcclxuIiwgImltcG9ydCB7IERlY29kZWRJZFRva2VuIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2xpYi9hdXRoL3Rva2VuLXZlcmlmaWVyXCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBlbWFpbEFuZFBhc3N3b3JkU2lnbkluLFxuICBlbWFpbEFuZFBhc3N3b3JkU2lnblVwLFxufSBmcm9tIFwifi9maXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBdXRoVXNlciA9IERlY29kZWRJZFRva2VuIHwgVXNlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgZW1haWwsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKTogUHJvbWlzZTxVc2VyPiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmxldCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIik7XG59XG5cbmxldCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcImNzX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJUb2tlbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGxldCB1c2VyVG9rZW4gPSBzZXNzaW9uLmdldChcInVzZXJUb2tlblwiKTtcbiAgaWYgKCF1c2VyVG9rZW4gfHwgdHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VyVG9rZW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxBdXRoVXNlciB8IG51bGw+IHtcbiAgbGV0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcbiAgaWYgKHR5cGVvZiB1c2VyVG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYXV0aGVkVXNlciA9IGF3YWl0IGdldEF1dGgoKS52ZXJpZnlJZFRva2VuKHVzZXJUb2tlbik7XG4gICAgcmV0dXJuIGF1dGhlZFVzZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldEF1dGhVc2VyIGVycm9yXCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGxldCBhdXRoVXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICAgIHJldHVybiBhdXRoVXNlcj8udWlkIHx8IG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRVc2VySWQgZXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGxldCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvc2lnbi9pbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvc2lnbi9pblwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW46IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KFwidXNlclRva2VuXCIsIHVzZXJUb2tlbik7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBjZXJ0LCBnZXRBcHBzLCBBcHAgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXBwXCI7XG5pbXBvcnQgeyBBdXRoLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgRmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuXG5sZXQgYXBwOiBBcHAsIGF1dGg6IEF1dGgsIGRiOiBGaXJlc3RvcmU7XG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBwcm9jZXNzLmVudi5GSVJFU1RPUkVfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjgwODBcIjtcbiAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0VNVUxBVE9SX0hPU1QgPSBcImxvY2FsaG9zdDo5MDk5XCI7XG4gIH1cbiAgY29uc3QgZW5jb2RlZEtleSA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZX0JBU0U2NCB8fCBcIlwiO1xuICBjb25zdCBkZWNvZGVkS2V5ID0gQnVmZmVyLmZyb20oZW5jb2RlZEtleSwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGY4XCIpO1xuICBhcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBjZXJ0KHtcbiAgICAgIHByaXZhdGVLZXk6IGRlY29kZWRLZXksXG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxuICAgIH0pLFxuICAgIGRhdGFiYXNlVVJMOiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9LmZpcmViYXNlaW8uY29tYCxcbiAgfSk7XG4gIGF1dGggPSBnZXRBdXRoKCk7XG4gIGRiID0gZ2V0RmlyZXN0b3JlKCk7XG59XG5cbmV4cG9ydCB7IGFwcCwgYXV0aCwgZ2V0QXV0aCwgZGIsIGdldEZpcmVzdG9yZSB9O1xuIiwgImltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxlZnRDb2xvcj86IHN0cmluZztcbiAgcmlnaHRDb2xvcj86IHN0cmluZztcbiAgc3g/OiBvYmplY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gQXBwUGFwZXIoe1xuICBjaGlsZHJlbixcbiAgbGVmdENvbG9yID0gXCJwcmltYXJ5XCIsXG4gIHJpZ2h0Q29sb3IgPSBcInNlY29uZGFyeVwiLFxuICBzeCA9IHt9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBwYWRkaW5nOiA0LFxuXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXG4gICAgICAgIGJvcmRlcjogXCJzb2xpZCA1cHggdHJhbnNwYXJlbnRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFlbVwiLFxuXG4gICAgICAgIFwiJjpiZWZvcmUgXCI6IHtcbiAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICBtYXJnaW46IFwiLTVweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0aGVtZS5wYWxldHRlW2xlZnRDb2xvcl0ubWFpbn0sICR7dGhlbWUucGFsZXR0ZVtyaWdodENvbG9yXS5tYWlufSlgLFxuICAgICAgICB9LFxuICAgICAgICAuLi5zeCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50U3R5bGVDb250ZXh0RGF0YSB7XG4gIHJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0PENsaWVudFN0eWxlQ29udGV4dERhdGE+KHtcbiAgcmVzZXQ6ICgpID0+IHt9LFxufSk7IiwgImltcG9ydCB7IHJlZGlyZWN0LCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7XG4gIGFkZEJsb2dQb3N0LFxuICBCbG9nUG9zdFdpdGhJZCxcbiAgZ2V0QmxvZ1Bvc3QsXG59IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRQb3N0IH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0UG9zdFwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEJsb2dQb3N0V2l0aElkIHtcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbiAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuICByZXR1cm4geyAuLi5ibG9nUG9zdCwgaXNBdXRob3IgfTtcbn07XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW47XG4gIHNsdWc/OiBib29sZWFuO1xuICBtYXJrZG93bj86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaXNQdWJsaXNoZWQgPT09IFwiYm9vbGVhblwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwdWJsaXNoRGF0ZSA9PT0gXCJudW1iZXJcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VVcmwgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlQWx0ID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IHtcbiAgICBhdXRob3JJZCxcbiAgICBpc1B1Ymxpc2hlZDogaW5pdElzUHVibGlzaGVkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd246IGluaXRNYXJrZG93bixcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUocHVibGlzaERhdGUpKTtcbiAgY29uc3QgW21hcmtkb3duLCBzZXRNYXJrZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRNYXJrZG93bik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUoaW5pdElzUHVibGlzaGVkKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFZGl0UG9zdFxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICBhdXRob3JJZD17YXV0aG9ySWR9XG4gICAgICBpc1B1Ymxpc2hlZD17aXNQdWJsaXNoZWR9XG4gICAgICBzZXRJc1B1Ymxpc2hlZD17c2V0SXNQdWJsaXNoZWR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgc2V0RGF0ZT17c2V0RGF0ZX1cbiAgICAgIG1hcmtkb3duPXttYXJrZG93bn1cbiAgICAgIGhhbmRsZUVkaXRvckNoYW5nZT17aGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgc2x1Zz17c2x1Z31cbiAgICAgIGltYWdlVXJsPXtpbWFnZVVybH1cbiAgICAgIGltYWdlQWx0PXtpbWFnZUFsdH1cbiAgICAgIHRhZ3M9e3RhZ3M/LmpvaW4oXCIsIFwiKSB8fCBcIlwifVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5cbmNvbnN0IEJMT0dfUE9TVFNfQ09MTEVDVElPTiA9IFwiYmxvZ1Bvc3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3Qge1xuICBhdXRob3JJZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIG1hcmtkb3duOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGlzUHVibGlzaGVkOiBib29sZWFuO1xuICBwdWJsaXNoRGF0ZTogbnVtYmVyO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3RXaXRoSWQgZXh0ZW5kcyBCbG9nUG9zdCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEJMT0dfUE9TVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYmxvZ1Bvc3RJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhibG9nUG9zdElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxCbG9nUG9zdD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4gZ2V0Q29sbGVjdGlvblJlZigpIGFzIFF1ZXJ5PEJsb2dQb3N0PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSgpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3RJZCk6IFByb21pc2U8QmxvZ1Bvc3RXaXRoSWQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShibG9nUG9zdElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGRvY1JlZi5pZCwgLi4uZG9jU25hcD8uZGF0YSgpIGFzIEJsb2dQb3N0IH0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJsb2dQb3N0KGJsb2dQb3N0OiBCbG9nUG9zdCk6IFByb21pc2U8QmxvZ1Bvc3Q+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3Quc2x1Zykuc2V0KGJsb2dQb3N0KTtcblxuICAgIGNvbnN0IG5ld0Jsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3Quc2x1Zyk7XG4gICAgaWYgKCFuZXdCbG9nUG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Jsb2dQb3N0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEFwcFVzZXIsIEFwcFVzZXJXaXRoSWQsIEFQUF9VU0VSU19DT0xMRUNUSU9OIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgQVBQX1VTRVJTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYXBwVXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGFwcFVzZXJJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QXBwVXNlcj47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxBcHBVc2VyPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFwcFVzZXJzKHVzZXJJZCk6IFByb21pc2U8QXBwVXNlcldpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFwcFVzZXIoYXBwVXNlcklkKTogUHJvbWlzZTxBcHBVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQXBwVXNlcihcbiAgYXBwVXNlcklkOiBzdHJpbmdcbik6IFByb21pc2U8QXBwVXNlcj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoZXhpc3RpbmdBcHBVc2VyKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHBVc2VyO1xuICAgIH1cbiAgICBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKS5zZXQoe3Blcm1pc3Npb25zOiBbXX0pO1xuXG4gICAgY29uc3QgbmV3QXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoIW5ld0FwcFVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcHBVc2VyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIEFwcFVzZXIge1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcFVzZXJXaXRoSWQgZXh0ZW5kcyBBcHBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9VU0VSU19DT0xMRUNUSU9OID0gXCJhcHBVc2Vyc1wiOyIsICJpbXBvcnQgeyBGb3JtLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgVGV4dEZpZWxkLFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIEJveCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlVGltZVBpY2tlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFBvc3Qoe1xuICBlcnJvcnMsXG4gIGF1dGhvcklkLFxuICBpc1B1Ymxpc2hlZCxcbiAgc2V0SXNQdWJsaXNoZWQsXG4gIGRhdGUsXG4gIHNldERhdGUsXG4gIG1hcmtkb3duLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2UsXG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBzbHVnID0gXCJcIixcbiAgaW1hZ2VVcmwgPSBcIlwiLFxuICBpbWFnZUFsdCA9IFwiXCIsXG4gIHRhZ3MgPSBcIlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFjayBzcGFjaW5nPXsyfSBzeD17eyBwOiA0IH19PlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRob3JJZFwiIHZhbHVlPXthdXRob3JJZH0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cImlzUHVibGlzaGVkXCJcbiAgICAgICAgICB2YWx1ZT17aXNQdWJsaXNoZWQudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWFya2Rvd25cIiB2YWx1ZT17bWFya2Rvd259IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJwdWJsaXNoRGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGU/LmdldFRpbWUoKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBzeD17eyBwOiA0IH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiBcIjMyMHB4XCIgfSxcbiAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIwIDAgMzIwcHhcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SXNQdWJsaXNoZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcImNvbnRyb2xsZWRcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2lzUHVibGlzaGVkID8gXCJJcyBQdWJsaXNoZWRcIiA6IFwiTm90IFB1Ymxpc2hlZFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8RGF0ZVRpbWVQaWNrZXIgZGF0ZT17ZGF0ZX0gc2V0RGF0ZT17c2V0RGF0ZX0gdmFyaWFudD1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRpdGxlID8gXCJUaXRsZSBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb24gPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnNsdWd9XG4gICAgICAgICAgICAgICAgaWQ9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBVcmxcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VVcmwgPyBcImltYWdlVXJsIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VBbHRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgQWx0IFRleHRcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VBbHQgPyBcImltYWdlQWx0IGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZUFsdFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZUFsdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnRhZ3N9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8udGFncyA/IFwidGFncyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YWdzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcImNvbHVtbi1yZXZlcnNlXCIgfX1cbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgc3g9e3sgZmxleDogXCIxIDFcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDFcIiwgbWluSGVpZ2h0OiBcIjUwMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHZoXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U9XCJtYXJrZG93blwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWFya2Rvd259XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIGxhYmVsPVwiTWFya2Rvd25cIlxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH0gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezJ9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBQb3N0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IFRleHRGaWVsZCwge0Jhc2VUZXh0RmllbGRQcm9wc30gZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEFkYXB0ZXJEYXRlRm5zIGZyb20gJ0BtdWkvbGFiL0FkYXB0ZXJEYXRlRm5zJztcbmltcG9ydCBMb2NhbGl6YXRpb25Qcm92aWRlciBmcm9tICdAbXVpL2xhYi9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTVVJRGF0ZVRpbWVQaWNrZXIgZnJvbSAnQG11aS9sYWIvRGF0ZVRpbWVQaWNrZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlVGV4dEZpZWxkUHJvcHMge1xuICBkYXRlOiBEYXRlIHwgbnVsbDtcbiAgc2V0RGF0ZTogKG5ld0RhdGU6IERhdGUgfCBudWxsKSA9PiB2b2lkXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyKHtkYXRlLCBzZXREYXRlLCAuLi50ZXh0RmllbGRQcm9wc306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF0ZUZuc30+XG4gICAgICA8TVVJRGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPFRleHRGaWVsZCBmdWxsV2lkdGggey4uLnByb3BzfSB7Li4udGV4dEZpZWxkUHJvcHN9Lz59XG4gICAgICAgIGxhYmVsPVwiRGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICB2YWx1ZT17ZGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdEYXRlKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XG4gICk7XG59IiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gXCJtZHgtYnVuZGxlci9jbGllbnRcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRCbG9nUG9zdCB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhYiwgTGluaywgUGFwZXIsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDb2RlQmxvY2sgfSBmcm9tIFwifi9jb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0XCI7XG5pbXBvcnQgeyBnZXRNZHggfSBmcm9tIFwifi91dGlscy9tZHguc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIGV4dGVuZHMgQmxvZ1Bvc3RXaXRoSWQge1xuICBjb2RlOiBzdHJpbmc7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGE+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgY29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gYXdhaXQgZ2V0TWR4KGJsb2dQb3N0Lm1hcmtkb3duKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGNvZGUsIGlzQXV0aG9yIH07XG59O1xuXG5jb25zdCBIMSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoMVwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDIgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDJcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDMgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDNcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDQgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDRcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDUgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBINiA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IFAgPSAocHJvcHMpID0+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5XCIgY29tcG9uZW50PVwicFwiIHsuLi5wcm9wc30gLz47XG5jb25zdCBCbG9ja3F1b3RlID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg2XCJcbiAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgIHN4PXt7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgbWFyZ2luOiAyLFxuICAgICAgYm9yZGVyTGVmdDogKHsgcGFsZXR0ZSB9KSA9PiBgMnB4IHNvbGlkJHtwYWxldHRlLnByaW1hcnkubWFpbn1gLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IFByZSA9IChwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQ29kZSA9IChwcm9wcykgPT4gPENvZGVCbG9jayB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQSA9IChwcm9wcykgPT4gPExpbmsgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgaXNBdXRob3IsIGNvZGUsIGltYWdlVXJsLCBpbWFnZUFsdCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IENvbXBvbmVudCA9IHVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUpLCBbY29kZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBcIjE3OHB4IGF1dG8gMHB4XCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1hZ2VVcmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzIwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEZhYlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89XCJlZGl0XCJcbiAgICAgICAgICAgIHN4PXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMjAsIHJpZ2h0OiAyMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge0NvbXBvbmVudCA/IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgIGgxOiBIMSxcbiAgICAgICAgICAgICAgaDI6IEgyLFxuICAgICAgICAgICAgICBoMzogSDMsXG4gICAgICAgICAgICAgIGg0OiBINCxcbiAgICAgICAgICAgICAgaDU6IEg1LFxuICAgICAgICAgICAgICBoNjogSDYsXG4gICAgICAgICAgICAgIHA6IFAsXG4gICAgICAgICAgICAgIGJsb2NrcXVvdGU6IEJsb2NrcXVvdGUsXG4gICAgICAgICAgICAgIHByZTogUHJlLFxuICAgICAgICAgICAgICBjb2RlOiBDb2RlLFxuICAgICAgICAgICAgICBhOiBBLFxuXG4gICAgICAgICAgICAgIC8vIGVtOiAocHJvcHMpID0+IDxpIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRlbnJvZFwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIHdyYXBwZXI6ICh7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSkgPT4gPG1haW4gey4uLnJlc3R9IC8+LFxuICAgICAgICAgICAgICAvLyBQbGFuZXQ6ICgpID0+IFwiTmVwdHVuZVwiLFxuICAgICAgICAgICAgICAvLyB0aGVtZToge1xuICAgICAgICAgICAgICAvLyAgIHRleHQ6IChwcm9wcykgPT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUGFwZXIsIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XG5pbXBvcnQgZHJhY3VsYSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2RyYWN1bGFcIjtcblxuY29uc3QgTGluZSA9IHN0eWxlZChcImRpdlwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtcm93XCIsXG59KTtcblxuY29uc3QgTGluZU5vID0gc3R5bGVkKFwic3BhblwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxuICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxuICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgb3BhY2l0eTogXCIwLjVcIixcbn0pO1xuXG5jb25zdCBMaW5lQ29udGVudCA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgZm9udEZhbWlseTogXCInRmlyYSBDb2RlJywgbW9ub3NwYWNlXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvZGVCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT1cImpzeFwiIHRoZW1lPXtkcmFjdWxhfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxQYXBlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lIGtleT17aX0gey4uLmdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KX0+XG4gICAgICAgICAgICAgIDxMaW5lTm8+e2kgKyAxfTwvTGluZU5vPlxuICAgICAgICAgICAgICA8TGluZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRDaGlsZHJlbiA9IGNoaWxkcmVuLnJlcGxhY2UoL1xccy9nLCBcIiZuYnNwO1wiKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHNhbml0aXplZENoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0xpbmVDb250ZW50PlxuICAgICAgICAgICAgPC9MaW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BhcGVyPlxuICAgICAgKX1cbiAgICA8L0hpZ2hsaWdodD5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZHgoc291cmNlOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnVuZGxlTURYKHtcbiAgICBzb3VyY2UsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsICJpbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XG5pbXBvcnQgeyBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHtcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25JbixcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25VcCxcbn0gZnJvbSBcIn4vZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWRkQXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLmNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkZsb29yIFBsYW4gfCBTaWduIEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2lnbiBpbiB0byBzdGFydCB5b3VyIG93biBjb2RlIGpvdXJuZXkhXCIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQVVUSF9UWVBFUyA9IHtcbiAgU0lHTl9JTjogXCJTaWduIEluXCIsXG4gIFNJR05fVVA6IFwiU2lnbiBVcFwiLFxufTtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRoVHlwZTogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgLy8gVE9ETzogaWYgYSB1c2VyIHRoZW4gcmVkaXJlY3QgdG8gL2Rhc2hib2FyZFxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhUeXBlOlxuICAgICAgcGFyYW1zLmF1dGhUeXBlID09PSBcImluXCIgPyBBVVRIX1RZUEVTLlNJR05fSU4gOiBBVVRIX1RZUEVTLlNJR05fVVAsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgZW1haWwgIT09IFwic3RyaW5nXCIgfHwgZW1haWwubWF0Y2goLy4rQC4rXFwuLisvKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBgRW1haWxzIG11c3QgbG9vayBsaWtlIGV4YW1wbGVAZXhhbXBsZS5jb21gO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBGb3JtRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICBhdXRoVHlwZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCB7IGF1dGhUeXBlOiBpbml0QXV0aFR5cGUgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2FjdGlvbkRhdGEsIHNldEFjdGlvbkRhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHt9KTtcbiAgY29uc3QgW2F1dGhUeXBlLCBzZXRBdXRoVHlwZV0gPSB1c2VTdGF0ZShpbml0QXV0aFR5cGUpO1xuXG4gIGNvbnN0IGhhbmRsZUF1dGhUeXBlID0gKGV2ZW50LCBuZXdBdXRoVHlwZSkgPT4ge1xuICAgIGlmICghbmV3QXV0aFR5cGUpIHJldHVybjtcbiAgICBzZXRBdXRoVHlwZShuZXdBdXRoVHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdEF1dGhUeXBlICE9PSBhdXRoVHlwZSkge1xuICAgICAgc2V0QXV0aFR5cGUoaW5pdEF1dGhUeXBlKTtcbiAgICB9XG4gIH0sIFtpbml0QXV0aFR5cGVdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoXG4gICAgZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG4gICAgY29uc3QgYXV0aFR5cGUgPSBmb3JtLmdldChcImF1dGhUeXBlXCIpO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYXV0aFR5cGUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgIHR5cGVvZiBlbWFpbCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IHsgYXV0aFR5cGUsIGVtYWlsLCBwYXNzd29yZCB9O1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgICAgZW1haWw6IHZhbGlkYXRlRW1haWwoZW1haWwpLFxuICAgICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgIH07XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgICBzd2l0Y2ggKGF1dGhUeXBlKSB7XG4gICAgICBjYXNlIEFVVEhfVFlQRVMuU0lHTl9JTjoge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5lbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX1VQOiB7XG4gICAgICAgIC8vIGlmICh1c2VyRXhpc3RzKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAvLyAgICAgZmllbGRzLFxuICAgICAgICAvLyAgICAgZm9ybUVycm9yOiBgVXNlciB3aXRoIGVtYWlsICR7ZW1haWx9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXIuYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgZmllbGRzLFxuICAgICAgICAgIGZvcm1FcnJvcjogYExvZ2luIHR5cGUgaW52YWxpZGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCI1MDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIyMDBweCBhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZvcm1FcnJvciA/IFwiZm9ybS1lcnJvci1tZXNzYWdlXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PXtQYXBlcn0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhUeXBlXCIgdmFsdWU9e2F1dGhUeXBlfSAvPlxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgZXhjbHVzaXZlXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUF1dGhUeXBlfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWduIEluIG9yIFNpZ24gVXBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aFR5cGUgPT09IEFVVEhfVFlQRVMuU0lHTl9JTiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCl9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gXCJlbWFpbC1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1lcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybS1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBBVVRIX1RZUEVTLlNJR05fSU4gPT09IGF1dGhUeXBlID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0FwcFBhcGVyPlxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgICAgXG4gICAgICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IHVzZXJUb2tlbiA9IGZvcm0uZ2V0KFwidXNlclRva2VuXCIpIGFzIHN0cmluZztcbiAgICAgIGlmICghdXNlclRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCB1cGRhdGUgc2Vzc2lvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW4sIHJlZGlyZWN0VG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgTk9UIEhBTkRMRURcIik7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEsIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBCbG9nQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQmxvZ0NhcmRcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRBbGxCbG9nUG9zdHMgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHBvc3RzOiBCbG9nUG9zdFdpdGhJZFtdO1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsQmxvZ1Bvc3RzKCk7XG4gIHJldHVybiB7IHBvc3RzLCBpc0F1dGhvciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgeyBwb3N0cywgaXNBdXRob3IgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzQXV0aG9yID8gKFxuICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9ibG9nL25ld1wiPlxuICAgICAgICAgICAgQWRkIEJsb2cgUG9zdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgID5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXg6IHsgeHM6IFwiMCAwIDgwJVwiLCBtZDogXCIwIDAgNDAlXCIsIGxnOiBcIjAgMCAzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCbG9nQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmltYWdlVXJsfVxuICAgICAgICAgICAgICBpbWFnZUFsdD17cG9zdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgdXJsPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VBbHQ9e3Bvc3QuaW1hZ2VBbHQgfHwgXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmRBY3Rpb25BcmVhLCBDYXJkQWN0aW9ucyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEJsb2dDYXJkKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGltYWdlVXJsLFxuICBpbWFnZUFsdCxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcFBhcGVyIHN4PXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICA8Q2FyZCBzeD17eyBib3JkZXJSYWRpdXM6IFwiMTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgPENhcmRBY3Rpb25BcmVhIGNvbXBvbmVudD17TGlua30gdG89e3VybH0+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE0MFwiXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICB7LyogVE9ETzogaW1wbGVtZW50IHNoYXJlIGFjdGlvbiBidXR0b25zICovfVxuICAgICAgICB7LyogPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTaGFyZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPiAqL31cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0FwcFBhcGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XHJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZERhdGFQb2ludCxcclxuICBEYXRhUG9pbnQsXHJcbiAgZ2V0QWxsRGF0YVBvaW50cyxcclxufSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBEYXRhUG9pbnRXaXRoSWQsIGdldEFsbERhdGFQb2ludHNMaXZlIH0gZnJvbSBcIn4vZGIvZGF0YVBvaW50cy5jbGllbnRcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgdXNlRmlyZWJhc2VMb2FkZXJEYXRhIH0gZnJvbSBcIn4vaG9va3MvdXNlRmlyZWJhc2VMb2FkZXJEYXRhXCI7XHJcblxyXG50eXBlIExvYWRlckRhdGEgPSB7IGRhdGFQb2ludHM6IERhdGFQb2ludFdpdGhJZFtdIH07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcclxuXHJcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcclxuICAgIGRhdGFQb2ludHM6IGF3YWl0IGdldEFsbERhdGFQb2ludHModXNlcklkKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgcG9pbnQgPSBOdW1iZXIoZm9ybS5nZXQoXCJwb2ludFwiKSk7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gTnVtYmVyKGZvcm0uZ2V0KFwidGltZXN0YW1wXCIpKTtcclxuICBpZiAoIXBvaW50IHx8ICF0aW1lc3RhbXApIHtcclxuICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCBhZGQgdGhpcyBkYXRhIHBvaW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGREYXRhUG9pbnQoe1xyXG4gICAgdXNlcklkLFxyXG4gICAgcG9pbnQsXHJcbiAgICB0aW1lc3RhbXAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoQm9hcmQoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDtcclxuICBjb25zdCB7IGRhdGFQb2ludHMgfSA9IHVzZUZpcmViYXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigodXBkYXRlcikgPT5cclxuICAgIGdldEFsbERhdGFQb2ludHNMaXZlKHVzZXJJZCwgKGRhdGFQb2ludHMpID0+IHVwZGF0ZXIoeyBkYXRhUG9pbnRzIH0pKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XHJcbiAgICAgIDxTdGFja1xyXG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXszfVxyXG4gICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cclxuICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTIwcHhcIiwgcGFkZGluZzogXCIxMnB4XCIsIG1hcmdpbjogXCIxMnB4XCIsIHdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYXJvdW5kXCJ9XHJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJmbGV4LWVuZFwifVxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGFQb2ludHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgZGF0YVBvaW50c1xyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcClcclxuICAgICAgICAgICAgLm1hcCgoeyBwb2ludCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7cG9pbnQgKiAxMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwicHJpbWFyeS5tYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC8gJHtkYXRhUG9pbnRzLmxlbmd0aH0gLSAxMHB4KWAsXHJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkFkZCBzb21lIGRhdGEhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cInBvaW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGltZXN0YW1wXCIgdmFsdWU9e0RhdGUubm93KCl9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgIGFkZCBkYXRhXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxuY29uc3QgREFUQV9QT0lOVFNfQ09MTEVDVElPTiA9IFwiZGF0YVBvaW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBwb2ludDogbnVtYmVyO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50V2l0aElkIGV4dGVuZHMgRGF0YVBvaW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgREFUQV9QT0lOVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8RGF0YVBvaW50PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGRhdGFQb2ludElkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGRhdGFQb2ludElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8RGF0YVBvaW50PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhdGFQb2ludHModXNlcklkKTogUHJvbWlzZTxEYXRhUG9pbnRXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhUG9pbnQoZGF0YVBvaW50SWQpOiBQcm9taXNlPERhdGFQb2ludCB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGRhdGFQb2ludElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRGF0YVBvaW50KGRhdGFQb2ludDogRGF0YVBvaW50KTogUHJvbWlzZTxEYXRhUG9pbnQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVmKCkuYWRkKGRhdGFQb2ludCk7XG5cbiAgICBjb25zdCBuZXdEYXRhUG9pbnQgPSBhd2FpdCBnZXREYXRhUG9pbnQoZG9jUmVmLmlkKTtcbiAgICBpZiAoIW5ld0RhdGFQb2ludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGFQb2ludDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgdHlwZSBVc2VFZmZlY3RVbnN1YmNyaWJlciA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPFQ+KFxuICBjbGllbnRVcGRhdGVyOiAoXG4gICAgdXBkYXRlcjogKGRhdGE6IFQpID0+IHZvaWRcbiAgKSA9PiBVc2VFZmZlY3RVbnN1YmNyaWJlclxuKTogVCB7XG4gIC8vIGdldCB0aGUgZGF0YSBmb3JtIHRoZSBzZXZlciB2aWEgZmlyZWJhc2UgYWRtaW5cbiAgY29uc3QgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8VD4oKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VD4obG9hZGVyRGF0YSk7XG5cbiAgLy8gd2hlbiB0aGUgY2xpZW50IGdldHMgYW4gdXBkYXRlIGFsbG93XG4gIC8vIHRoZSBjbGllbnQgdG8gdXBkYXRlIHRoZSBkYXRhXG4gIGZ1bmN0aW9uIHVwZGF0ZXIoZGF0YTogVCkge1xuICAgIHNldERhdGEoZGF0YSk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IGNsaWVudFVwZGF0ZXIodXBkYXRlciksIFtsb2FkZXJEYXRhXSk7XG4gIHJldHVybiBkYXRhO1xufSIsICJpbXBvcnQge1xuICByZWRpcmVjdCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZUFjdGlvbkRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGFkZEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdFBvc3QgfSBmcm9tIFwifi9jb21wb25lbnRzL0VkaXRQb3N0XCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aG9ySWQ6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gIH1cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRob3JJZDogdXNlcklkLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgc2x1Zz86IGJvb2xlYW47XG4gIG1hcmtkb3duPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xuICBpbWFnZVVybD86IGJvb2xlYW47XG4gIGltYWdlQWx0PzogYm9vbGVhbjtcbiAgdGFncz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgYXV0aG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JJZFwiKTtcbiAgY29uc3QgaW1hZ2VVcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVVybFwiKTtcbiAgY29uc3QgaW1hZ2VBbHQgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZUFsdFwiKTtcbiAgY29uc3QgdGFncyA9IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJ0YWdzXCIpKT8uc3BsaXQoXCIsXCIpIHx8IFtdO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IGZvcm1EYXRhLmdldChcImlzUHVibGlzaGVkXCIpID09PSBcInRydWVcIjtcbiAgY29uc3QgcHVibGlzaERhdGUgPSBwYXJzZUludChcbiAgICAoZm9ybURhdGEuZ2V0KFwicHVibGlzaERhdGVcIikgYXMgc3RyaW5nKSB8fCBcIjBcIixcbiAgICAxMFxuICApO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlVXJsKSBlcnJvcnMuaW1hZ2VVcmwgPSB0cnVlO1xuICBpZiAoIWltYWdlQWx0KSBlcnJvcnMuaW1hZ2VBbHQgPSB0cnVlO1xuICBpZiAoIXRhZ3MpIGVycm9ycy50YWdzID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VVcmwgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlQWx0ID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpc1B1Ymxpc2hlZCA9PT0gXCJib29sZWFuXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHB1Ymxpc2hEYXRlID09PSBcIm51bWJlclwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW21hcmtkb3duLCBzZXRNYXJrZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNQdWJsaXNoZWQsIHNldElzUHVibGlzaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IGF1dGhvcklkIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdG9yQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0TWFya2Rvd24odmFsdWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVkaXRQb3N0XG4gICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgIGF1dGhvcklkPXthdXRob3JJZH1cbiAgICAgIGlzUHVibGlzaGVkPXtpc1B1Ymxpc2hlZH1cbiAgICAgIHNldElzUHVibGlzaGVkPXtzZXRJc1B1Ymxpc2hlZH1cbiAgICAgIGRhdGU9e2RhdGV9XG4gICAgICBzZXREYXRlPXtzZXREYXRlfVxuICAgICAgbWFya2Rvd249e21hcmtkb3dufVxuICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgLz5cbiAgKTtcbn1cbiIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYVwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBhXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGFcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBBIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJhLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGJcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgYlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBiXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQiFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYi5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBjXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgY1wiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEMhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImMubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xufTsiLCAiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHsgRmxvb3JQbGFuQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkZsb29yIFBsYW46IENvcHkvUGFzdGEvVHdlcmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2RlcyBTYWdhcyBhIHBsYWNlIHRvIGxlYXJuIGEgbWlsbGlvbiBhbmQgb25lIHdheXMgdG8gY29kZS5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFwiNzAwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjgwcHggYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEFwcFBhcGVyPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5mbG9vciBwbGFuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj4vXHUwMkM4ZmxcdTAwRjQoXHUwMjU5KXIgXHUwMkNDcGxhbi88L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPm5vdW4gPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICBBbiBhcHAgZnJhbWV3b3JrIGRlc2lnbmVkIHRvIGhlbHAgeW91IHZhbGlkYXRlIHlvdXIgaWRlYSBxdWlja2x5LlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0FwcFBhcGVyPlxuICAgICAgPEZsb29yUGxhbkNhcmRcbiAgICAgICAgdGl0bGU9e1wiUmVtaXggd2l0aCBGaXJlYmFzZSBvbiBOZXRsaWZ5XCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICBcIkEgUmVhY3QgYXBwIHdyaXR0ZW4gd2l0aCBSZW1peCBhbmQgRmlyZWJhc2UgZGVwbG95ZWQgb24gTmV0bGlmeS4gSXQgdXNlcyBUeXBlc2NyaXB0IGFuZCBoYXMgYWxsIHRoZSBidWlsZGluZyBibG9ja3MgdG8gZ2V0IHlvdXIgYXBwIG9mZiB0aGUgZ3JvdW5kLlwiXG4gICAgICAgIH1cbiAgICAgICAgY29zdD17XCJGUkVFXCJ9XG4gICAgICAgIHBvcHVsYXJpdHk9e3tcbiAgICAgICAgICByYXRpbmc6IDQuNSxcbiAgICAgICAgICBjb3VudDogMyxcbiAgICAgICAgfX1cbiAgICAgICAgdXJsPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9mbG9vcnBsYW4vZmxvb3JwbGFuI3dlbGNvbWUtdG8tZmxvb3JwbGFuXCJ9XG4gICAgICAgIHNldHVwVGltZT17XCIxaHJcIn1cbiAgICAgIC8+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgTGluaywgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhclwiO1xuaW1wb3J0IFN0YXJCb3JkZXJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXJCb3JkZXJcIjtcbmltcG9ydCBTdGFySGFsZkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhckhhbGZcIjtcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT25cIjtcbmltcG9ydCBBY2Nlc3NUaW1lSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BY2Nlc3NUaW1lXCI7XG5pbnRlcmZhY2UgRmxvb3JQbGFuQ2FyZFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY29zdDogc3RyaW5nO1xuICBwb3B1bGFyaXR5OiB7XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgfTtcbiAgdXJsOiBzdHJpbmc7XG4gIHNldHVwVGltZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRmxvb3JQbGFuQ2FyZCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY29zdCxcbiAgcG9wdWxhcml0eSxcbiAgdXJsLFxuICBzZXR1cFRpbWUsXG59OiBGbG9vclBsYW5DYXJkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzeD17eyBtYXJnaW46IFwiMjBweCBhdXRvXCIgfX0+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgPEFjY2Vzc1RpbWVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgICAgIHtzZXR1cFRpbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgey8qIDxNb25ldGl6YXRpb25Pbkljb24gZm9udFNpemU9XCJpbmhlcml0XCIvPiAqL31cbiAgICAgICAgICAgICAge2Nvc3R9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9uc1xuICAgICAgICBzeD17e1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1N0YWNrfVxuICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25ldyBBcnJheShwYXJzZUludChwb3B1bGFyaXR5LnJhdGluZy50b1N0cmluZygpLCAxMCkpXG4gICAgICAgICAgICAgIC5maWxsKG51bGwpXG4gICAgICAgICAgICAgIC5tYXAoKHZhbCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aWR4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtwb3B1bGFyaXR5LnJhdGluZyAlIDEgPiAwID8gPFN0YXJIYWxmSWNvbiAvPiA6IG51bGx9XG4gICAgICAgICAgICB7bmV3IEFycmF5KDUgLSBNYXRoLmNlaWwocG9wdWxhcml0eS5yYXRpbmcpKVxuICAgICAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgICAgICAubWFwKCh2YWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFyQm9yZGVySWNvbiBrZXk9e2lkeH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICh7cG9wdWxhcml0eS5jb3VudH0pXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2ZmNDAwZmY1JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1NVE1RNTQ3QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQVNMNk9PVFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DVkg0NktNSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNCN1I2VEZVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS002RERMUjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SEFTUFFWRC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtQks1TEVOMkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUw2WDZITEJWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEhXNDQ0Nk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aQlk2NUxONi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJSQkhWREhZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUtZSlY1UUouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQtTEwzUUhBU0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlVRVo0STZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0Jzp7J2lkJzoncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LUFFUjZHTldMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QSEFQTlpZNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9hJzp7J2lkJzoncm91dGVzL2Jsb2cvYScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2EnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9hLUhTR0ZSM0JGLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9iJzp7J2lkJzoncm91dGVzL2Jsb2cvYicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9iLTRLN0NEVFJHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9jJzp7J2lkJzoncm91dGVzL2Jsb2cvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9jLUtUSjVLVllILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtR1ZMVVoyVlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvbmV3Jzp7J2lkJzoncm91dGVzL2Jsb2cvbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvbmV3LUVMNkVTM0NILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QSEFQTlpZNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVlLVExOS1NQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVNKNElQRlgyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZVUVaNEk2QS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUFaU1g0UFVOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ24uJGF1dGhUeXBlJzp7J2lkJzoncm91dGVzL3NpZ24uJGF1dGhUeXBlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ24vOmF1dGhUeXBlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NpZ24uJGF1dGhUeXBlLVkyNUtSQU02LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91cGRhdGUtc2Vzc2lvbic6eydpZCc6J3JvdXRlcy91cGRhdGUtc2Vzc2lvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid1cGRhdGUtc2Vzc2lvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi1GMkY2VzdNRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUZGNDAwRkY1LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFB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
