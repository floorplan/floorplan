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
    DEFAULT: "#3057E1",
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
  if (false) {
    connectFirestoreEmulator(db, "localhost", 8080);
    connectAuthEmulator(auth, "http://localhost:9099");
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
  if (false) {
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
  })), /* @__PURE__ */ React4.createElement("body", null, children, /* @__PURE__ */ React4.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React4.createElement(import_remix7.Scripts, null), false));
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
    sx: { maxWidth: 345 }
  }, /* @__PURE__ */ React.createElement(import_material10.CardContent, null, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "body2",
    color: "text.secondary"
  }, description), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h5",
    color: "text.secondary"
  }, /* @__PURE__ */ React.createElement(import_AccessTime.default, {
    fontSize: "inherit"
  }), setupTime), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h5",
    color: "text.secondary"
  }, cost), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h5",
    color: "text.secondary"
  }, new Array(parseInt(popularity.rating.toString(), 10)).fill(/* @__PURE__ */ React.createElement(import_Star.default, {
    fontSize: "inherit"
  })), popularity.rating % 1 > 0 ? /* @__PURE__ */ React.createElement(import_StarHalf.default, null) : null, new Array(5 - Math.ceil(popularity.rating)).fill(/* @__PURE__ */ React.createElement(import_StarBorder.default, {
    fontSize: "inherit"
  })), "(", popularity.count, ")")), /* @__PURE__ */ React.createElement(import_material10.CardActions, null, /* @__PURE__ */ React.createElement(import_Button5.default, {
    size: "small"
  }, "Share"), /* @__PURE__ */ React.createElement(import_Button5.default, {
    component: import_material10.Link,
    href: url,
    target: "_blank",
    size: "small"
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
    description: "jfla jdlk jalskdjf lkasdf jalsdfk ajskd laskgoaiuernf  asdf ;aire a;seih faslie jlakfj",
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
var assets_manifest_default = { "version": "f8c68378", "entry": { "module": "/build/entry.client-QHI4SPKJ.js", "imports": ["/build/_shared/chunk-EVW4W6OB.js", "/build/_shared/chunk-U3MX5BRT.js", "/build/_shared/chunk-IAB2DQQT.js", "/build/_shared/chunk-OGFPHS2E.js", "/build/_shared/chunk-DIT34OLF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-35HFRSUP.js", "imports": ["/build/_shared/chunk-ZCH2GKBP.js", "/build/_shared/chunk-QGT2EKKF.js", "/build/_shared/chunk-OTB3NOZX.js", "/build/_shared/chunk-E5PO6LVA.js", "/build/_shared/chunk-KSICZFHD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-KB3E2JMB.js", "imports": ["/build/_shared/chunk-DQACZMN2.js", "/build/_shared/chunk-AV2J5BSE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-73W4CEUG.js", "imports": ["/build/_shared/chunk-JUDLHE6Q.js", "/build/_shared/chunk-AV2J5BSE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-YS3WFT55.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-F3SFKFHY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-EVXCIL3F.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-XAXCGRHQ.js", "imports": ["/build/_shared/chunk-AV2J5BSE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-HUROGD3B.js", "imports": ["/build/_shared/chunk-JUDLHE6Q.js", "/build/_shared/chunk-AV2J5BSE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-NUJ5UO34.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-XFSBSIO2.js", "imports": ["/build/_shared/chunk-DQACZMN2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-DHGEZPJC.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-ZCVT4SBG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-2HM5C4BM.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F8C68378.js" };

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
  mode: "production"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvc3RhdGUvQXV0aFByb3ZpZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Mb2dvdXRGb3JtLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BcHBCYXIudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhDb250cm9scy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvbi50c3giLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2F1dGgudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzIiwgIi4uLy4uLy4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwUGFwZXIudHN4IiwgIi4uLy4uLy4uL2FwcC90aGVtZS9DbGllbnRTdHlsZUNvbnRleHQudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvYmxvZ1Bvc3RzLnNlcnZlci50cyIsICIuLi8uLi8uLi9hcHAvZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy90eXBlcy50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9FZGl0UG9zdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXIudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NvZGVCbG9jay50c3giLCAiLi4vLi4vLi4vYXBwL3V0aWxzL21keC5zZXJ2ZXIudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3VwZGF0ZS1zZXNzaW9uLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9CbG9nQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvZGF0YVBvaW50cy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YS50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL25ldy50c3giLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYS5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYi5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvYy5tZHgiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9yb290L3Byb2plY3RzL2Zsb29ycGxhbi9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvZmxvb3JwbGFuL2FwcC9yb3V0ZXMvYmxvZy9hLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9ibG9nL2MubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9mbG9vcnBsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvOmJsb2dQb3N0SWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nLzpibG9nUG9zdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaWduLiRhdXRoVHlwZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbi86YXV0aFR5cGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3VwZGF0ZS1zZXNzaW9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9hXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvYVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbW90aW9uQ2FjaGUgfSBmcm9tIFwifi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIn4vdGhlbWVcIjtcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGNvbnN0IE11aVJlbWl4U2VydmVyID0gKCkgPT4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCB0byBhIHN0cmluZy5cbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XG5cbiAgLy8gR3JhYiB0aGUgQ1NTIGZyb20gZW1vdGlvblxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cbiAgbGV0IHN0eWxlc0hUTUwgPSBcIlwiO1xuXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xuICAgIGNvbnN0IGVtb3Rpb25LZXkgPSBgJHtrZXl9ICR7aWRzLmpvaW4oXCIgXCIpfWA7XG4gICAgY29uc3QgbmV3U3R5bGVUYWcgPSBgPHN0eWxlIGRhdGEtZW1vdGlvbj1cIiR7ZW1vdGlvbktleX1cIj4ke2Nzc308L3N0eWxlPmA7XG4gICAgc3R5bGVzSFRNTCA9IGAke3N0eWxlc0hUTUx9JHtuZXdTdHlsZVRhZ31gO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGVtb3Rpb24gc3R5bGUgdGFncyBhZnRlciB0aGUgaW5zZXJ0aW9uIHBvaW50IG1ldGEgdGFnXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcbiAgICAvPG1ldGEoXFxzKSpuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKmNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqXFwvPi8sXG4gICAgYDxtZXRhIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiLz4ke3N0eWxlc0hUTUx9YFxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIn4vdGhlbWUvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IENPTE9SUy5QUklNQVJZLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuU0VDT05EQVJZLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IENPTE9SUy5FUlJPUixcbiAgICB9LFxuICAgIHdhcm5pbmc6IHtcbiAgICAgIG1haW46IENPTE9SUy5XQVJOSU5HLFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbWFpbjogQ09MT1JTLklORk8sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBtYWluOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IENPTE9SUy5CQUNLR1JPVU5ELkRFRkFVTFQsXG4gICAgICBwYXBlcjogQ09MT1JTLkJBQ0tHUk9VTkQuUEFQRVIsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBcdTI2OUJcdUZFMEZcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24gXHVEODNEXHVEQ0EzIVxuICAgICAgICAvLyB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiLCAiZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgUFJJTUFSWTogXCIjMzA1N0UxXCIsXG4gIFNFQ09OREFSWTogXCIjRERGRkY3XCIsXG4gIC8vIEVSUk9SOiBcIiNGRjAwNDdcIixcbiAgRVJST1I6IFwiI2ZmMmYwMFwiLFxuICBXQVJOSU5HOiBcIiNGRkE1MDBcIixcbiAgSU5GTzogXCIjMDBFN0ZGXCIsXG4gIFNVQ0NFU1M6IFwiIzAwRkY3RVwiLFxuICBCQUNLR1JPVU5EOiB7XG4gICAgLy8gREVGQVVMVDogXCIjMEYwRjE1XCIsXG4gICAgREVGQVVMVDogXCIjMzA1N0UxXCIsXG4gICAgUEFQRVI6IFwiIzA3MDMxOVwiLFxuICB9LFxufTtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExvYWRlckZ1bmN0aW9uLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE91dGxldCxcbiAgdXNlQ2F0Y2gsXG4gIE1ldGEsXG4gIFNjcmlwdHMsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgQXV0aFVzZXIsIGdldEF1dGhVc2VyLCBnZXRVc2VyVG9rZW4gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyB3aXRoRW1vdGlvbkNhY2hlIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQge1xuICBTdGFjayxcbiAgVHlwb2dyYXBoeSxcbiAgdW5zdGFibGVfdXNlRW5oYW5jZWRFZmZlY3QgYXMgdXNlRW5oYW5jZWRFZmZlY3QsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gXCJ+L3RoZW1lL0NsaWVudFN0eWxlQ29udGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldEAxLjQuMC9kaXN0L3Jlc2V0Lm1pbi5jc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnbG9iYWxTdHlsZXNVcmwsXG4gICAgfSxcbiAgXTtcbn1cblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuICAoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG4gICAgY29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXG4gICAgLy8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcbiAgICB1c2VFbmhhbmNlZEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAvLyByZS1pbmplY3QgdGFnc1xuICAgICAgY29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgKGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG4gICAgICBjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxuICAgICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgdXNlcjogQXV0aFVzZXIgfCBudWxsOyB1c2VyVG9rZW46IHN0cmluZyB8IG51bGwgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICBjb25zdCB1c2VyVG9rZW4gPSBhd2FpdCBnZXRVc2VyVG9rZW4ocmVxdWVzdCk7XG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICB1c2VyLFxuICAgIHVzZXJUb2tlbixcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiBQcm92aWRlcnMoe1xuICB1c2VyLFxuICBjaGlsZHJlbixcbiAgdXNlclRva2VuLFxufToge1xuICB1c2VyOiBBdXRoVXNlciB8IG51bGw7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbDtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIHVzZXI9e3VzZXJ9IHVzZXJUb2tlbj17dXNlclRva2VufT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHVzZXIsIHVzZXJUb2tlbiB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPFByb3ZpZGVycyB1c2VyPXt1c2VyfSB1c2VyVG9rZW49e3VzZXJUb2tlbn0+XG4gICAgICAgIDxBcHBCYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9Qcm92aWRlcnM+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUm9vdEVycm9yKHtcbiAgZG9jVGl0bGUgPSBcIk9vcHMhXCIsXG4gIHRpdGxlID0gXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gXHVEODNEXHVERTI1XCIsXG4gIG1lc3NhZ2UgPSBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtkb2NUaXRsZX0+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxuICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IDUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHBQYXBlciBsZWZ0Q29sb3I9XCJlcnJvclwiIHJpZ2h0Q29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+e21lc3NhZ2V9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQXBwUGFwZXI+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG4gIGNvbnN0IHRpdGxlID0gYCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gO1xuICByZXR1cm4gKFxuICAgIDxSb290RXJyb3JcbiAgICAgIGRvY1RpdGxlPXt0aXRsZX1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIG1lc3NhZ2U9e1xuICAgICAgICBcIldlbGwgdGhpcyBpcyBlbWJhcnNpbmcuIFx1RDgzRFx1REUwNSBIYXZlIHlvdSB0cmllZCB0dXJuaW5nIGl0IG9mZiBhbmQgYmFjayBvbiBhZ2Fpbj9cIlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gPFJvb3RFcnJvciBtZXNzYWdlPXtlcnJvci5tZXNzYWdlfSAvPjtcbn1cbiIsICJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgdXNlRmV0Y2hlciwgdXNlTG9jYXRpb24sIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTG9nb3V0Rm9ybSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb3V0Rm9ybVwiO1xuaW1wb3J0IHsgYWRkQXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLmNsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBBdXRoVXNlciB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aFVzZXIgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICB1c2VyOiB1c2VyUHJvcCxcbiAgdXNlclRva2VuOiB1c2VyVG9rZW5Qcm9wLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB1c2VyOiBBdXRoVXNlciB8IG51bGw7XG4gIHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbDtcbn0pIHtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8QXV0aFVzZXIgfCBudWxsPih1c2VyUHJvcCk7XG4gIGNvbnN0IGxvZ291dEZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3VzZXJUb2tlbiwgc2V0VXNlclRva2VuXSA9IHVzZVN0YXRlPHN0cmluZz4odXNlclRva2VuUHJvcCB8fCBcIlwiKTtcbiAgY29uc3QgdXNlclRva2VuRm9ybSA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXIodXNlclByb3ApO1xuICB9LCBbdXNlclByb3BdKTtcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCByZWRpcmVjdFRvID0gcGF0aG5hbWUuaW5jbHVkZXMoXCIvc2lnbi9cIikgPyBcIi9kYXNoYm9hcmRcIiA6IHBhdGhuYW1lO1xuXG4gIGZ1bmN0aW9uIHNlbmRVc2VyVG9rZW4oKSB7XG4gICAgaWYgKCF1c2VyVG9rZW5Gb3JtLmN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh1c2VyVG9rZW5Gb3JtLmN1cnJlbnQpO1xuICAgIGZldGNoZXIuc3VibWl0KGZvcm1EYXRhLCB7bWV0aG9kOiBcInBvc3RcIiwgYWN0aW9uOlwiL3VwZGF0ZS1zZXNzaW9uXCJ9KVxuICB9XG5cbiAgLy8gbGlzdGVuIGZvciB0b2tlbiBjaGFuZ2VzXG4gIC8vIGNhbGwgc2V0VXNlciBhbmQgd3JpdGUgbmV3IHRva2VuIGFzIGEgY29va2llXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICByZXR1cm4gYXV0aC5vbklkVG9rZW5DaGFuZ2VkKGFzeW5jICh1c2VyRnJvbUNoYW5nZSkgPT4ge1xuICAgICAgaWYgKHVzZXJGcm9tQ2hhbmdlID09PSBudWxsICYmIHVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgaWYgKCFsb2dvdXRGb3JtUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgbG9nb3V0Rm9ybVJlZi5jdXJyZW50LnN1Ym1pdCgpO1xuICAgICAgfSBlbHNlIGlmICh1c2VyRnJvbUNoYW5nZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXJGcm9tQ2hhbmdlLmdldElkVG9rZW4oKTtcbiAgICAgICAgaWYgKHRva2VuICE9PSB1c2VyVG9rZW4pIHtcbiAgICAgICAgICBzZXRVc2VyKHVzZXJGcm9tQ2hhbmdlKTtcbiAgICAgICAgICBzZXRVc2VyVG9rZW4odG9rZW4pO1xuICAgICAgICAgIGF3YWl0IGFkZEFwcFVzZXIodXNlckZyb21DaGFuZ2UudWlkKTtcbiAgICAgICAgICBzZW5kVXNlclRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3VzZXJdKTtcblxuICAvLyBmb3JjZSByZWZyZXNoIHRoZSB0b2tlbiBldmVyeSAxMCBtaW51dGVzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xuICAgICAgaWYgKHVzZXIpIGF3YWl0IHVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcbiAgICB9LCAxMCAqIDYwICogMTAwMCk7XG5cbiAgICAvLyBjbGVhbiB1cCBzZXRJbnRlcnZhbFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gIH0sIFtdKTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlcn0+XG4gICAgICA8TG9nb3V0Rm9ybSByZWY9e2xvZ291dEZvcm1SZWZ9IC8+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgcmVmPXt1c2VyVG9rZW5Gb3JtfSBhY3Rpb249XCIvdXBkYXRlLXNlc3Npb25cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX21ldGhvZFwiIHZhbHVlPVwicHV0XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlclRva2VuXCIgdmFsdWU9e3VzZXJUb2tlbn0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyByZWRpcmVjdFRvfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIiwgImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEZvcm1Qcm9wcyB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgTG9nb3V0Rm9ybSA9IGZvcndhcmRSZWY8SFRNTEZvcm1FbGVtZW50LCBGb3JtUHJvcHM+KFxuICAocHJvcHMsIHJlZikgPT4gPEZvcm0gcmVmPXtyZWZ9IGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCIgey4uLnByb3BzfSAvPlxuKTtcbiIsICJpbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IE11aUFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcbmltcG9ydCBBdXRoQ29udHJvbHMgZnJvbSBcIn4vY29tcG9uZW50cy9BdXRoQ29udHJvbHNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcEJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE11aUFwcEJhcj5cbiAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59KWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHRleHRGaWxsQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZsb29yIFBsYW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8QXV0aENvbnRyb2xzIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvTXVpQXBwQmFyPlxuICAgICAgPEJveCBzeD17eyBtYXJnaW5Cb3R0b206IFwiNjRweFwiIH19IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBTaWduT3V0QnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9TaWduT3V0QnV0dG9uXCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JblVwKCkge1xuICBjb25zdCB1c2VyID0gdXNlQXV0aCgpO1xuICByZXR1cm4gdXNlciA9PT0gbnVsbCA/IChcbiAgICA8Qm94PlxuICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL3NpZ24vaW5cIj5cbiAgICAgICAgc2lnbiBpblxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHN4PXt7IG1hcmdpbkxlZnQ6IDIgfX1cbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICB0bz1cIi9zaWduL3VwXCJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgPlxuICAgICAgICBzaWduIHVwXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKSA6IChcbiAgICA8Qm94PlxuICAgICAgPExvZ291dEZvcm0+XG4gICAgICAgIDxTaWduT3V0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIHNpZ24gb3V0XG4gICAgICAgIDwvU2lnbk91dEJ1dHRvbj5cbiAgICAgIDwvTG9nb3V0Rm9ybT5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiLi4vZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWduT3V0QnV0dG9uID0gKHByb3BzKSA9PiAoXHJcbiAgPD5cclxuICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfSB7Li4ucHJvcHN9PnNpZ24gb3V0PC9CdXR0b24+XHJcbiAgPC8+XHJcbik7XHJcblxyXG4iLCAiaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICBvbklkVG9rZW5DaGFuZ2VkLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7XHJcbiAgZW1haWwsXHJcbiAgcGFzc3dvcmQsXHJcbn0pOiBQcm9taXNlPFVzZXI+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgYXV0aCxcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmRcclxuICApO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1haWxBbmRQYXNzd29yZFNpZ25Jbih7XHJcbiAgZW1haWwsXHJcbiAgcGFzc3dvcmQsXHJcbn0pOiBQcm9taXNlPFVzZXI+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgYXV0aCxcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmRcclxuICApO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgYXV0aFxyXG4gICAgLnNpZ25PdXQoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXQhXCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZWQoY2IpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICBjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiAmJiBjYih1c2VyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUlkVG9rZW5DaGFuZ2VkKGNiKSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIG9uSWRUb2tlbkNoYW5nZWQoYXV0aCwgZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiKHVzZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKXtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gYXV0aC5jdXJyZW50VXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJUb2tlblJlZnJlc2goKXtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRBcHBzLCBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0QXV0aEVtdWxhdG9yLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvciwgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxubGV0IGFwcCwgYXV0aCwgZGI7XHJcblxyXG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcclxuICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIC8vIFRPRE86IE1ha2Ugc3VyZSB0aGVzZSBhcmUgeW91ciB2YWx1ZXNcclxuICAgIGFwaUtleTogXCJBSXphU3lEbEV6Y0plTm5HRDFMM1RtSkdieWxzRlFkN2RtbWFBOGdcIixcclxuICAgIGF1dGhEb21haW46IFwiZmxvb3JwbGFuLWNvZGVzYWdhcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJmbG9vcnBsYW4tY29kZXNhZ2FzXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImZsb29ycGxhbi1jb2Rlc2FnYXMuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNzQxOTg5NjQ4ODFcIixcclxuICAgIGFwcElkOiBcIjE6MTA3NDE5ODk2NDg4MTp3ZWI6NzQyZTNhMzdmMDMwNzA4MGY0MmQzMFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUZEM1hLNjYzQzBcIlxyXG4gIH07XHJcbiAgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgYXV0aCA9IGdldEF1dGgoKTtcclxuICBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IoZGIsIFwibG9jYWxob3N0XCIsIDgwODApO1xyXG4gICAgY29ubmVjdEF1dGhFbXVsYXRvcihhdXRoLCBcImh0dHA6Ly9sb2NhbGhvc3Q6OTA5OVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFwcCwgYXV0aCwgZGIsIGdldEF1dGgsIGdldEZpcmVzdG9yZSB9O1xyXG4iLCAiaW1wb3J0IHsgRGVjb2RlZElkVG9rZW4gfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vbGliL2F1dGgvdG9rZW4tdmVyaWZpZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEF1dGhVc2VyID0gRGVjb2RlZElkVG9rZW4gfCBVc2VyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pOiBQcm9taXNlPFVzZXI+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxubGV0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiY3Nfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgbGV0IHVzZXJUb2tlbiA9IHNlc3Npb24uZ2V0KFwidXNlclRva2VuXCIpO1xuICBpZiAoIXVzZXJUb2tlbiB8fCB0eXBlb2YgdXNlclRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJUb2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPEF1dGhVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuICBpZiAodHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoZWRVc2VyID0gYXdhaXQgZ2V0QXV0aCgpLnZlcmlmeUlkVG9rZW4odXNlclRva2VuKTtcbiAgICByZXR1cm4gYXV0aGVkVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXIgZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgbGV0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gICAgcmV0dXJuIGF1dGhVc2VyPy51aWQgfHwgbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJZCBlcnJvclwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgbGV0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9zaWduL2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9zaWduL2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbjogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VyVG9rZW5cIiwgdXNlclRva2VuKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIEFwcCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmltcG9ydCB7IEF1dGgsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbmxldCBhcHA6IEFwcCwgYXV0aDogQXV0aCwgZGI6IEZpcmVzdG9yZTtcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHByb2Nlc3MuZW52LkZJUkVTVE9SRV9FTVVMQVRPUl9IT1NUID0gXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICAgIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjkwOTlcIjtcbiAgfVxuICBjb25zdCBlbmNvZGVkS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfQkFTRTY0IHx8IFwiXCI7XG4gIGNvbnN0IGRlY29kZWRLZXkgPSBCdWZmZXIuZnJvbShlbmNvZGVkS2V5LCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGNlcnQoe1xuICAgICAgcHJpdmF0ZUtleTogZGVjb2RlZEtleSxcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0uZmlyZWJhc2Vpby5jb21gLFxuICB9KTtcbiAgYXV0aCA9IGdldEF1dGgoKTtcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IHsgYXBwLCBhdXRoLCBnZXRBdXRoLCBkYiwgZ2V0RmlyZXN0b3JlIH07XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGVmdENvbG9yPzogc3RyaW5nO1xuICByaWdodENvbG9yPzogc3RyaW5nO1xuICBzeD86IG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBQYXBlcih7XG4gIGNoaWxkcmVuLFxuICBsZWZ0Q29sb3IgPSBcInByaW1hcnlcIixcbiAgcmlnaHRDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHN4ID0ge30sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgc3BhY2luZz17Mn1cbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHBhZGRpbmc6IDQsXG5cbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgYm9yZGVyOiBcInNvbGlkIDVweCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMWVtXCIsXG5cbiAgICAgICAgXCImOmJlZm9yZSBcIjoge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIG1hcmdpbjogXCItNXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGVbbGVmdENvbG9yXS5tYWlufSwgJHt0aGVtZS5wYWxldHRlW3JpZ2h0Q29sb3JdLm1haW59KWAsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDbGllbnRTdHlsZUNvbnRleHREYXRhIHtcbiAgcmVzZXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YT4oe1xuICByZXNldDogKCkgPT4ge30sXG59KTsiLCAiaW1wb3J0IHsgcmVkaXJlY3QsIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHtcbiAgYWRkQmxvZ1Bvc3QsXG4gIEJsb2dQb3N0V2l0aElkLFxuICBnZXRCbG9nUG9zdCxcbn0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdFBvc3QgfSBmcm9tIFwifi9jb21wb25lbnRzL0VkaXRQb3N0XCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIGV4dGVuZHMgQmxvZ1Bvc3RXaXRoSWQge1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmICghYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQocGFyYW1zLmJsb2dQb3N0SWQsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIGNvbnN0IGJsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QocGFyYW1zLmJsb2dQb3N0SWQpO1xuICBpbnZhcmlhbnQoYmxvZ1Bvc3QsIFwiZXhwZWN0ZWQgYmxvZ1Bvc3RcIik7XG4gIHJldHVybiB7IC4uLmJsb2dQb3N0LCBpc0F1dGhvciB9O1xufTtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgc2x1Zz86IGJvb2xlYW47XG4gIG1hcmtkb3duPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGF1dGhvcklkID0gZm9ybURhdGEuZ2V0KFwiYXV0aG9ySWRcIik7XG4gIGNvbnN0IGltYWdlVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VVcmxcIik7XG4gIGNvbnN0IGltYWdlQWx0ID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VBbHRcIik7XG4gIGNvbnN0IHRhZ3MgPSBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSk/LnNwbGl0KFwiLFwiKSB8fCBbXTtcbiAgY29uc3QgaXNQdWJsaXNoZWQgPSBmb3JtRGF0YS5nZXQoXCJpc1B1Ymxpc2hlZFwiKSA9PT0gXCJ0cnVlXCI7XG4gIGNvbnN0IHB1Ymxpc2hEYXRlID0gcGFyc2VJbnQoXG4gICAgKGZvcm1EYXRhLmdldChcInB1Ymxpc2hEYXRlXCIpIGFzIHN0cmluZykgfHwgXCIwXCIsXG4gICAgMTBcbiAgKTtcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9O1xuICBpZiAoIXRpdGxlKSBlcnJvcnMudGl0bGUgPSB0cnVlO1xuICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZTtcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFpbWFnZVVybCkgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFpbWFnZUFsdCkgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCF0YWdzKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGF1dGhvcklkID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpc1B1Ymxpc2hlZCA9PT0gXCJib29sZWFuXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHB1Ymxpc2hEYXRlID09PSBcIm51bWJlclwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZVVybCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VBbHQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsLFxuICAgIGltYWdlQWx0LFxuICAgIHRhZ3MsXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3Qge1xuICAgIGF1dGhvcklkLFxuICAgIGlzUHVibGlzaGVkOiBpbml0SXNQdWJsaXNoZWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bjogaW5pdE1hcmtkb3duLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsLFxuICAgIGltYWdlQWx0LFxuICAgIHRhZ3MsXG4gIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZShwdWJsaXNoRGF0ZSkpO1xuICBjb25zdCBbbWFya2Rvd24sIHNldE1hcmtkb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oaW5pdE1hcmtkb3duKTtcbiAgY29uc3QgW2lzUHVibGlzaGVkLCBzZXRJc1B1Ymxpc2hlZF0gPSB1c2VTdGF0ZShpbml0SXNQdWJsaXNoZWQpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGZ1bmN0aW9uIGhhbmRsZUVkaXRvckNoYW5nZSh2YWx1ZSkge1xuICAgIHNldE1hcmtkb3duKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVkaXRQb3N0XG4gICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgIGF1dGhvcklkPXthdXRob3JJZH1cbiAgICAgIGlzUHVibGlzaGVkPXtpc1B1Ymxpc2hlZH1cbiAgICAgIHNldElzUHVibGlzaGVkPXtzZXRJc1B1Ymxpc2hlZH1cbiAgICAgIGRhdGU9e2RhdGV9XG4gICAgICBzZXREYXRlPXtzZXREYXRlfVxuICAgICAgbWFya2Rvd249e21hcmtkb3dufVxuICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICBzbHVnPXtzbHVnfVxuICAgICAgaW1hZ2VVcmw9e2ltYWdlVXJsfVxuICAgICAgaW1hZ2VBbHQ9e2ltYWdlQWx0fVxuICAgICAgdGFncz17dGFncz8uam9pbihcIiwgXCIpIHx8IFwiXCJ9XG4gICAgLz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxuY29uc3QgQkxPR19QT1NUU19DT0xMRUNUSU9OID0gXCJibG9nUG9zdHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCbG9nUG9zdCB7XG4gIGF1dGhvcklkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgbWFya2Rvd246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaXNQdWJsaXNoZWQ6IGJvb2xlYW47XG4gIHB1Ymxpc2hEYXRlOiBudW1iZXI7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGltYWdlQWx0OiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbG9nUG9zdFdpdGhJZCBleHRlbmRzIEJsb2dQb3N0IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgQkxPR19QT1NUU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxCbG9nUG9zdD47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChibG9nUG9zdElkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGJsb2dQb3N0SWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPEJsb2dQb3N0PjtcblxuY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiBnZXRDb2xsZWN0aW9uUmVmKCkgYXMgUXVlcnk8QmxvZ1Bvc3Q+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQmxvZ1Bvc3RzKCk6IFByb21pc2U8QmxvZ1Bvc3RXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCbG9nUG9zdChibG9nUG9zdElkKTogUHJvbWlzZTxCbG9nUG9zdFdpdGhJZCB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGJsb2dQb3N0SWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4geyBpZDogZG9jUmVmLmlkLCAuLi5kb2NTbmFwPy5kYXRhKCkgYXMgQmxvZ1Bvc3QgfSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQmxvZ1Bvc3QoYmxvZ1Bvc3Q6IEJsb2dQb3N0KTogUHJvbWlzZTxCbG9nUG9zdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGdldERvY1JlZmVyZW5jZShibG9nUG9zdC5zbHVnKS5zZXQoYmxvZ1Bvc3QpO1xuXG4gICAgY29uc3QgbmV3QmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChibG9nUG9zdC5zbHVnKTtcbiAgICBpZiAoIW5ld0Jsb2dQb3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QmxvZ1Bvc3Q7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuaW1wb3J0IHsgQXBwVXNlciwgQXBwVXNlcldpdGhJZCwgQVBQX1VTRVJTX0NPTExFQ1RJT04gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBBUFBfVVNFUlNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8QXBwVXNlcj47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChhcHBVc2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoYXBwVXNlcklkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxBcHBVc2VyPjtcblxuY29uc3QgZ2V0UXVlcnkgPSAodXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpIGFzIFF1ZXJ5PEFwcFVzZXI+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQXBwVXNlcnModXNlcklkKTogUHJvbWlzZTxBcHBVc2VyV2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSh1c2VySWQpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwVXNlcihhcHBVc2VySWQpOiBQcm9taXNlPEFwcFVzZXIgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShhcHBVc2VySWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4gZG9jU25hcD8uZGF0YSgpIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBcHBVc2VyKFxuICBhcHBVc2VySWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxBcHBVc2VyPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZXhpc3RpbmdBcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcihhcHBVc2VySWQpO1xuICAgIGlmIChleGlzdGluZ0FwcFVzZXIpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ0FwcFVzZXI7XG4gICAgfVxuICAgIGF3YWl0IGdldERvY1JlZmVyZW5jZShhcHBVc2VySWQpLnNldCh7cGVybWlzc2lvbnM6IFtdfSk7XG5cbiAgICBjb25zdCBuZXdBcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcihhcHBVc2VySWQpO1xuICAgIGlmICghbmV3QXBwVXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FwcFVzZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXBwVXNlciB7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwVXNlcldpdGhJZCBleHRlbmRzIEFwcFVzZXIge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQVBQX1VTRVJTX0NPTExFQ1RJT04gPSBcImFwcFVzZXJzXCI7IiwgImltcG9ydCB7IEZvcm0sIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIkBtb25hY28tZWRpdG9yL3JlYWN0XCI7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbExhYmVsLFxuICBUZXh0RmllbGQsXG4gIFN3aXRjaCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgQm94LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0UG9zdCh7XG4gIGVycm9ycyxcbiAgYXV0aG9ySWQsXG4gIGlzUHVibGlzaGVkLFxuICBzZXRJc1B1Ymxpc2hlZCxcbiAgZGF0ZSxcbiAgc2V0RGF0ZSxcbiAgbWFya2Rvd24sXG4gIGhhbmRsZUVkaXRvckNoYW5nZSxcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIHNsdWcgPSBcIlwiLFxuICBpbWFnZVVybCA9IFwiXCIsXG4gIGltYWdlQWx0ID0gXCJcIixcbiAgdGFncyA9IFwiXCIsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIHNwYWNpbmc9ezJ9IHN4PXt7IHA6IDQgfX0+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhvcklkXCIgdmFsdWU9e2F1dGhvcklkfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwiaXNQdWJsaXNoZWRcIlxuICAgICAgICAgIHZhbHVlPXtpc1B1Ymxpc2hlZC50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJtYXJrZG93blwiIHZhbHVlPXttYXJrZG93bn0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cInB1Ymxpc2hEYXRlXCJcbiAgICAgICAgICB2YWx1ZT17ZGF0ZT8uZ2V0VGltZSgpLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIHN4PXt7IHA6IDQgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgbWluV2lkdGg6IHsgbWQ6IFwiMzIwcHhcIiB9LFxuICAgICAgICAgICAgICBmbGV4OiB7IG1kOiBcIjAgMCAzMjBweFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJc1B1Ymxpc2hlZChldmVudC50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwiY29udHJvbGxlZFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17aXNQdWJsaXNoZWQgPyBcIklzIFB1Ymxpc2hlZFwiIDogXCJOb3QgUHVibGlzaGVkXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxEYXRlVGltZVBpY2tlciBkYXRlPXtkYXRlfSBzZXREYXRlPXtzZXREYXRlfSB2YXJpYW50PVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnRpdGxlfVxuICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8udGl0bGUgPyBcIlRpdGxlIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgZXJyb3JzPy5kZXNjcmlwdGlvbiA/IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIiA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uc2x1Z31cbiAgICAgICAgICAgICAgICBpZD1cInNsdWdcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2x1Z1wiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5zbHVnID8gXCJTbHVnIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NsdWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICBpZD1cImltYWdlVXJsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlIFVybFwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5pbWFnZVVybCA/IFwiaW1hZ2VVcmwgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlVXJsXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltYWdlVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZUFsdFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBBbHQgVGV4dFwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5pbWFnZUFsdCA/IFwiaW1hZ2VBbHQgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlQWx0XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltYWdlQWx0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGFnc31cbiAgICAgICAgICAgICAgICBpZD1cInRhZ3NcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFnc1wiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy50YWdzID8gXCJ0YWdzIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwiY29sdW1uLXJldmVyc2VcIiB9fVxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICBzeD17eyBmbGV4OiBcIjEgMVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMVwiLCBtaW5IZWlnaHQ6IFwiNTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwdmhcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZT1cIm1hcmtkb3duXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttYXJrZG93bn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICB7LyogbGFiZWw9XCJNYXJrZG93blwiXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXtlcnJvcnM/Lm1hcmtkb3duID8gPGVtPk1hcmtkb3duIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfSAqL31cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gc3BhY2luZz17Mn0ganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtgL2Jsb2cvJHtzbHVnfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgVGV4dEZpZWxkLCB7QmFzZVRleHRGaWVsZFByb3BzfSBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQWRhcHRlckRhdGVGbnMgZnJvbSAnQG11aS9sYWIvQWRhcHRlckRhdGVGbnMnO1xuaW1wb3J0IExvY2FsaXphdGlvblByb3ZpZGVyIGZyb20gJ0BtdWkvbGFiL0xvY2FsaXphdGlvblByb3ZpZGVyJztcbmltcG9ydCBNVUlEYXRlVGltZVBpY2tlciBmcm9tICdAbXVpL2xhYi9EYXRlVGltZVBpY2tlcic7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJhc2VUZXh0RmllbGRQcm9wcyB7XG4gIGRhdGU6IERhdGUgfCBudWxsO1xuICBzZXREYXRlOiAobmV3RGF0ZTogRGF0ZSB8IG51bGwpID0+IHZvaWRcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXIoe2RhdGUsIHNldERhdGUsIC4uLnRleHRGaWVsZFByb3BzfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXRlRm5zfT5cbiAgICAgIDxNVUlEYXRlVGltZVBpY2tlclxuICAgICAgICByZW5kZXJJbnB1dD17KHByb3BzKSA9PiA8VGV4dEZpZWxkIGZ1bGxXaWR0aCB7Li4ucHJvcHN9IHsuLi50ZXh0RmllbGRQcm9wc30vPn1cbiAgICAgICAgbGFiZWw9XCJEYXRlVGltZVBpY2tlclwiXG4gICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICBvbkNoYW5nZT17KG5ld0RhdGUpID0+IHtcbiAgICAgICAgICBzZXREYXRlKG5ld0RhdGUpO1xuICAgICAgICB9fVxuICAgICAgICBcbiAgICAgIC8+XG4gICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgZ2V0TURYQ29tcG9uZW50IH0gZnJvbSBcIm1keC1idW5kbGVyL2NsaWVudFwiO1xuaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFiLCBMaW5rLCBQYXBlciwgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENvZGVCbG9jayB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcbmltcG9ydCB7IGdldE1keCB9IGZyb20gXCJ+L3V0aWxzL21keC5zZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4gIGNvZGU6IHN0cmluZztcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbiAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuICBjb25zdCB7IGNvZGUsIGZyb250bWF0dGVyIH0gPSBhd2FpdCBnZXRNZHgoYmxvZ1Bvc3QubWFya2Rvd24pO1xuICByZXR1cm4geyAuLi5ibG9nUG9zdCwgY29kZSwgaXNBdXRob3IgfTtcbn07XG5cbmNvbnN0IEgxID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImgxXCJcbiAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBIMiA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBIMyA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBINCA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBINSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IEg2ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuY29uc3QgUCA9IChwcm9wcykgPT4gPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHlcIiBjb21wb25lbnQ9XCJwXCIgey4uLnByb3BzfSAvPjtcbmNvbnN0IEJsb2NrcXVvdGUgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDZcIlxuICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgc3g9e3tcbiAgICAgIHBhZGRpbmc6IDIsXG4gICAgICBtYXJnaW46IDIsXG4gICAgICBib3JkZXJMZWZ0OiAoeyBwYWxldHRlIH0pID0+IGAycHggc29saWQke3BhbGV0dGUucHJpbWFyeS5tYWlufWAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgUHJlID0gKHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30gLz47XG5jb25zdCBDb2RlID0gKHByb3BzKSA9PiA8Q29kZUJsb2NrIHsuLi5wcm9wc30gLz47XG5jb25zdCBBID0gKHByb3BzKSA9PiA8TGluayB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBpc0F1dGhvciwgY29kZSwgaW1hZ2VVcmwsIGltYWdlQWx0IH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc3QgQ29tcG9uZW50ID0gdXNlTWVtbygoKSA9PiBnZXRNRFhDb21wb25lbnQoY29kZSksIFtjb2RlXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW46IFwiMTc4cHggYXV0byAwcHhcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCI5MDBweFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtpbWFnZVVybH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYCxcbiAgICAgICAgICAgIGhlaWdodDogXCIzMjBweFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtpc0F1dGhvciA/IChcbiAgICAgICAgICA8RmFiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICB0bz1cImVkaXRcIlxuICAgICAgICAgICAgc3g9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAyMCwgcmlnaHQ6IDIwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7Q29tcG9uZW50ID8gKFxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICAgICAgaDE6IEgxLFxuICAgICAgICAgICAgICBoMjogSDIsXG4gICAgICAgICAgICAgIGgzOiBIMyxcbiAgICAgICAgICAgICAgaDQ6IEg0LFxuICAgICAgICAgICAgICBoNTogSDUsXG4gICAgICAgICAgICAgIGg2OiBINixcbiAgICAgICAgICAgICAgcDogUCxcbiAgICAgICAgICAgICAgYmxvY2txdW90ZTogQmxvY2txdW90ZSxcbiAgICAgICAgICAgICAgcHJlOiBQcmUsXG4gICAgICAgICAgICAgIGNvZGU6IENvZGUsXG4gICAgICAgICAgICAgIGE6IEEsXG5cbiAgICAgICAgICAgICAgLy8gZW06IChwcm9wcykgPT4gPGkgc3R5bGU9e3sgY29sb3I6IFwiZ29sZGVucm9kXCIgfX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgICAgLy8gd3JhcHBlcjogKHsgY29tcG9uZW50cywgLi4ucmVzdCB9KSA9PiA8bWFpbiB7Li4ucmVzdH0gLz4sXG4gICAgICAgICAgICAgIC8vIFBsYW5ldDogKCkgPT4gXCJOZXB0dW5lXCIsXG4gICAgICAgICAgICAgIC8vIHRoZW1lOiB7XG4gICAgICAgICAgICAgIC8vICAgdGV4dDogKHByb3BzKSA9PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJncmV5XCIgfX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQYXBlciwgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXJcIjtcbmltcG9ydCBkcmFjdWxhIGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlci90aGVtZXMvZHJhY3VsYVwiO1xuXG5jb25zdCBMaW5lID0gc3R5bGVkKFwiZGl2XCIpKHtcbiAgZGlzcGxheTogXCJ0YWJsZS1yb3dcIixcbn0pO1xuXG5jb25zdCBMaW5lTm8gPSBzdHlsZWQoXCJzcGFuXCIpKHtcbiAgZGlzcGxheTogXCJ0YWJsZS1jZWxsXCIsXG4gIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXG4gIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICBvcGFjaXR5OiBcIjAuNVwiLFxufSk7XG5cbmNvbnN0IExpbmVDb250ZW50ID0gc3R5bGVkKFwic3BhblwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxuICBmb250RmFtaWx5OiBcIidGaXJhIENvZGUnLCBtb25vc3BhY2VcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgQ29kZUJsb2NrID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIaWdobGlnaHQgey4uLmRlZmF1bHRQcm9wc30gY29kZT17Y2hpbGRyZW59IGxhbmd1YWdlPVwianN4XCIgdGhlbWU9e2RyYWN1bGF9PlxuICAgICAgeyh7IGNsYXNzTmFtZSwgc3R5bGUsIHRva2VucywgZ2V0TGluZVByb3BzLCBnZXRUb2tlblByb3BzIH0pID0+IChcbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgcGFkZGluZzogMixcbiAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmUga2V5PXtpfSB7Li4uZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pfT5cbiAgICAgICAgICAgICAgPExpbmVObz57aSArIDF9PC9MaW5lTm8+XG4gICAgICAgICAgICAgIDxMaW5lQ29udGVudD5cbiAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSBnZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZENoaWxkcmVuID0gY2hpbGRyZW4ucmVwbGFjZSgvXFxzL2csIFwiJm5ic3A7XCIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogc2FuaXRpemVkQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvTGluZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xpbmU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICApfVxuICAgIDwvSGlnaGxpZ2h0PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tIFwibWR4LWJ1bmRsZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1keChzb3VyY2U6IHN0cmluZykge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBidW5kbGVNRFgoe1xuICAgIHNvdXJjZSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwgImltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9nZ2xlQnV0dG9uR3JvdXBcIjtcbmltcG9ydCB7IEZvcm0sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQge1xuICBlbWFpbEFuZFBhc3N3b3JkU2lnbkluLFxuICBlbWFpbEFuZFBhc3N3b3JkU2lnblVwLFxufSBmcm9tIFwifi9maXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiRmxvb3IgUGxhbiB8IFNpZ24gSW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaWduIGluIHRvIHN0YXJ0IHlvdXIgb3duIGNvZGUgam91cm5leSFcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBVVRIX1RZUEVTID0ge1xuICBTSUdOX0lOOiBcIlNpZ24gSW5cIixcbiAgU0lHTl9VUDogXCJTaWduIFVwXCIsXG59O1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGF1dGhUeXBlOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICAvLyBUT0RPOiBpZiBhIHVzZXIgdGhlbiByZWRpcmVjdCB0byAvZGFzaGJvYXJkXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXV0aFR5cGU6XG4gICAgICBwYXJhbXMuYXV0aFR5cGUgPT09IFwiaW5cIiA/IEFVVEhfVFlQRVMuU0lHTl9JTiA6IEFVVEhfVFlQRVMuU0lHTl9VUCxcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBlbWFpbCAhPT0gXCJzdHJpbmdcIiB8fCBlbWFpbC5tYXRjaCgvLitALitcXC4uKy8pID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGBFbWFpbHMgbXVzdCBsb29rIGxpa2UgZXhhbXBsZUBleGFtcGxlLmNvbWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEZvcm1EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGF1dGhUeXBlOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHsgYXV0aFR5cGU6IGluaXRBdXRoVHlwZSB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbYWN0aW9uRGF0YSwgc2V0QWN0aW9uRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe30pO1xuICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKGluaXRBdXRoVHlwZSk7XG5cbiAgY29uc3QgaGFuZGxlQXV0aFR5cGUgPSAoZXZlbnQsIG5ld0F1dGhUeXBlKSA9PiB7XG4gICAgaWYgKCFuZXdBdXRoVHlwZSkgcmV0dXJuO1xuICAgIHNldEF1dGhUeXBlKG5ld0F1dGhUeXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0QXV0aFR5cGUgIT09IGF1dGhUeXBlKSB7XG4gICAgICBzZXRBdXRoVHlwZShpbml0QXV0aFR5cGUpO1xuICAgIH1cbiAgfSwgW2luaXRBdXRoVHlwZV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChcbiAgICBldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcbiAgICBjb25zdCBhdXRoVHlwZSA9IGZvcm0uZ2V0KFwiYXV0aFR5cGVcIik7XG4gICAgY29uc3QgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhdXRoVHlwZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0geyBhdXRoVHlwZSwgZW1haWwsIHBhc3N3b3JkIH07XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICBlbWFpbDogdmFsaWRhdGVFbWFpbChlbWFpbCksXG4gICAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gICAgfTtcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICAgIHN3aXRjaCAoYXV0aFR5cGUpIHtcbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX0lOOiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBBVVRIX1RZUEVTLlNJR05fVVA6IHtcbiAgICAgICAgLy8gaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgLy8gICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIC8vICAgICBmaWVsZHMsXG4gICAgICAgIC8vICAgICBmb3JtRXJyb3I6IGBVc2VyIHdpdGggZW1haWwgJHtlbWFpbH0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYFNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgdXNlci5gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiBgTG9naW4gdHlwZSBpbnZhbGlkYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFja1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjIwMHB4IGF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFwcFBhcGVyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZm9ybUVycm9yID8gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9e1BhcGVyfSBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aFR5cGVcIiB2YWx1ZT17YXV0aFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIHZhbHVlPXthdXRoVHlwZX1cbiAgICAgICAgICAgICAgICBleGNsdXNpdmVcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZ24gSW4gb3IgU2lnbiBVcFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZW1haWx9XG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsKX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyBcImVtYWlsLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUeXBlID09PSBBVVRIX1RZUEVTLlNJR05fSU4gPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3JtLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgIEFVVEhfVFlQRVMuU0lHTl9JTiA9PT0gYXV0aFR5cGUgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgdXNlclRva2VuID0gZm9ybS5nZXQoXCJ1c2VyVG9rZW5cIikgYXMgc3RyaW5nO1xuICAgICAgaWYgKCF1c2VyVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IHVwZGF0ZSBzZXNzaW9uLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XG4gICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbiwgcmVkaXJlY3RUbyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKFwiUkVRVUVTVCBOT1QgSEFORExFRFwiKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEJsb2dDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9CbG9nQ2FyZFwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEFsbEJsb2dQb3N0cyB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgcG9zdHM6IEJsb2dQb3N0V2l0aElkW107XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxCbG9nUG9zdHMoKTtcbiAgcmV0dXJuIHsgcG9zdHMsIGlzQXV0aG9yIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IHBvc3RzLCBpc0F1dGhvciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2Jsb2cvbmV3XCI+XG4gICAgICAgICAgICBBZGQgQmxvZyBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgfX1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleDogeyB4czogXCIwIDAgODAlXCIsIG1kOiBcIjAgMCA0MCVcIiwgbGc6IFwiMCAwIDMwJVwiIH0sXG4gICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJsb2dDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIGltYWdlQWx0PXtwb3N0LmltYWdlQWx0fVxuICAgICAgICAgICAgICB1cmw9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAvLyBpbWFnZVVybD17cG9zdC5pbWFnZVVybCB8fCBcIlwifVxuICAgICAgICAgICAgICAvLyBpbWFnZUFsdD17cG9zdC5pbWFnZUFsdCB8fCBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZEFjdGlvbkFyZWEsIENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIi4vQXBwUGFwZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGltYWdlQWx0OiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gQmxvZ0NhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgaW1hZ2VVcmwsXG4gIGltYWdlQWx0LFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwUGFwZXIgc3g9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgY29tcG9uZW50PXtMaW5rfSB0bz17dXJsfT5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIHsvKiBUT0RPOiBpbXBsZW1lbnQgc2hhcmUgYWN0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgIHsvKiA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+ICovfVxuICAgICAgPC9DYXJkPlxuICAgIDwvQXBwUGFwZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcclxuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkRGF0YVBvaW50LFxyXG4gIERhdGFQb2ludCxcclxuICBnZXRBbGxEYXRhUG9pbnRzLFxyXG59IGZyb20gXCJ+L2RiL2RhdGFQb2ludHMuc2VydmVyXCI7XHJcbmltcG9ydCB7IERhdGFQb2ludFdpdGhJZCwgZ2V0QWxsRGF0YVBvaW50c0xpdmUgfSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLmNsaWVudFwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUxvYWRlckRhdGEgfSBmcm9tIFwifi9ob29rcy91c2VGaXJlYmFzZUxvYWRlckRhdGFcIjtcclxuXHJcbnR5cGUgTG9hZGVyRGF0YSA9IHsgZGF0YVBvaW50czogRGF0YVBvaW50V2l0aElkW10gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG5cclxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xyXG4gICAgZGF0YVBvaW50czogYXdhaXQgZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBwb2ludCA9IE51bWJlcihmb3JtLmdldChcInBvaW50XCIpKTtcclxuICBjb25zdCB0aW1lc3RhbXAgPSBOdW1iZXIoZm9ybS5nZXQoXCJ0aW1lc3RhbXBcIikpO1xyXG4gIGlmICghcG9pbnQgfHwgIXRpbWVzdGFtcCkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IGFkZCB0aGlzIGRhdGEgcG9pbnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IGFkZERhdGFQb2ludCh7XHJcbiAgICB1c2VySWQsXHJcbiAgICBwb2ludCxcclxuICAgIHRpbWVzdGFtcCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlcj8udWlkO1xyXG4gIGNvbnN0IHsgZGF0YVBvaW50cyB9ID0gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCh1cGRhdGVyKSA9PlxyXG4gICAgZ2V0QWxsRGF0YVBvaW50c0xpdmUodXNlcklkLCAoZGF0YVBvaW50cykgPT4gdXBkYXRlcih7IGRhdGFQb2ludHMgfSkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezN9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICAgIHN4PXt7IGhlaWdodDogXCIxMjBweFwiLCBwYWRkaW5nOiBcIjEycHhcIiwgbWFyZ2luOiBcIjEycHhcIiwgd2lkdGg6IFwiODAlXCIgfX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1hcm91bmRcIn1cclxuICAgICAgICBhbGlnbkl0ZW1zPXtcImZsZXgtZW5kXCJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YVBvaW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICBkYXRhUG9pbnRzXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxyXG4gICAgICAgICAgICAubWFwKCh7IHBvaW50IH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtwb2ludCAqIDEwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLyAke2RhdGFQb2ludHMubGVuZ3RofSAtIDEwcHgpYCxcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L0JveD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+QWRkIHNvbWUgZGF0YSE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICBuYW1lPVwicG9pbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ0aW1lc3RhbXBcIiB2YWx1ZT17RGF0ZS5ub3coKX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgYWRkIGRhdGFcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBEQVRBX1BPSU5UU19DT0xMRUNUSU9OID0gXCJkYXRhUG9pbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50IHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHBvaW50OiBudW1iZXI7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnRXaXRoSWQgZXh0ZW5kcyBEYXRhUG9pbnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBEQVRBX1BPSU5UU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoZGF0YVBvaW50SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoZGF0YVBvaW50SWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPERhdGFQb2ludD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxEYXRhUG9pbnQ+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpOiBQcm9taXNlPERhdGFQb2ludFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFQb2ludChkYXRhUG9pbnRJZCk6IFByb21pc2U8RGF0YVBvaW50IHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoZGF0YVBvaW50SWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4gZG9jU25hcD8uZGF0YSgpIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGREYXRhUG9pbnQoZGF0YVBvaW50OiBEYXRhUG9pbnQpOiBQcm9taXNlPERhdGFQb2ludD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGdldENvbGxlY3Rpb25SZWYoKS5hZGQoZGF0YVBvaW50KTtcblxuICAgIGNvbnN0IG5ld0RhdGFQb2ludCA9IGF3YWl0IGdldERhdGFQb2ludChkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3RGF0YVBvaW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YVBvaW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCB0eXBlIFVzZUVmZmVjdFVuc3ViY3JpYmVyID0gKCkgPT4gdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaXJlYmFzZUxvYWRlckRhdGE8VD4oXG4gIGNsaWVudFVwZGF0ZXI6IChcbiAgICB1cGRhdGVyOiAoZGF0YTogVCkgPT4gdm9pZFxuICApID0+IFVzZUVmZmVjdFVuc3ViY3JpYmVyXG4pOiBUIHtcbiAgLy8gZ2V0IHRoZSBkYXRhIGZvcm0gdGhlIHNldmVyIHZpYSBmaXJlYmFzZSBhZG1pblxuICBjb25zdCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YTxUPigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUPihsb2FkZXJEYXRhKTtcblxuICAvLyB3aGVuIHRoZSBjbGllbnQgZ2V0cyBhbiB1cGRhdGUgYWxsb3dcbiAgLy8gdGhlIGNsaWVudCB0byB1cGRhdGUgdGhlIGRhdGFcbiAgZnVuY3Rpb24gdXBkYXRlcihkYXRhOiBUKSB7XG4gICAgc2V0RGF0YShkYXRhKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4gY2xpZW50VXBkYXRlcih1cGRhdGVyKSwgW2xvYWRlckRhdGFdKTtcbiAgcmV0dXJuIGRhdGE7XG59IiwgImltcG9ydCB7XG4gIHJlZGlyZWN0LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlQWN0aW9uRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgYWRkQmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0UG9zdCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdFBvc3RcIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRob3JJZDogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gIGlmICghYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgfVxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhvcklkOiB1c2VySWQsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG4gIGltYWdlVXJsPzogYm9vbGVhbjtcbiAgaW1hZ2VBbHQ/OiBib29sZWFuO1xuICB0YWdzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5pbWFnZVVybCA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5pbWFnZUFsdCA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLnRhZ3MgPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGF1dGhvcklkID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZVVybCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VBbHQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsLFxuICAgIGltYWdlQWx0LFxuICAgIHRhZ3MsXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbbWFya2Rvd24sIHNldE1hcmtkb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RWRpdFBvc3RcbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgYXV0aG9ySWQ9e2F1dGhvcklkfVxuICAgICAgaXNQdWJsaXNoZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgc2V0SXNQdWJsaXNoZWQ9e3NldElzUHVibGlzaGVkfVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHNldERhdGU9e3NldERhdGV9XG4gICAgICBtYXJrZG93bj17bWFya2Rvd259XG4gICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAvPlxuICApO1xufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBhXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYVwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEEhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYlwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBiXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGJcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBCIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJiLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGNcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBjXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQyFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59OyIsICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBGbG9vclBsYW5DYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9GbG9vclBsYW5DYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiRmxvb3IgUGxhbjogQ29weS9QYXN0YS9Ud2Vya1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvZGVzIFNhZ2FzIGEgcGxhY2UgdG8gbGVhcm4gYSBtaWxsaW9uIGFuZCBvbmUgd2F5cyB0byBjb2RlLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxuICAgICAgICBtYXJnaW46IFwiODBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwUGFwZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPmZsb29yIHBsYW48L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPi9cdTAyQzhmbFx1MDBGNChcdTAyNTkpciBcdTAyQ0NwbGFuLzwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+bm91biA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgIEFuIGFwcCBmcmFtZXdvcmsgZGVzaWduZWQgdG8gaGVscCB5b3UgdmFsaWRhdGUgeW91ciBpZGVhIHF1aWNrbHkuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8Rmxvb3JQbGFuQ2FyZFxuICAgICAgICB0aXRsZT17XCJSZW1peCB3aXRoIEZpcmViYXNlIG9uIE5ldGxpZnlcIn1cbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIFwiamZsYSBqZGxrIGphbHNrZGpmIGxrYXNkZiBqYWxzZGZrIGFqc2tkIGxhc2tnb2FpdWVybmYgIGFzZGYgO2FpcmUgYTtzZWloIGZhc2xpZSBqbGFrZmpcIlxuICAgICAgICB9XG4gICAgICAgIGNvc3Q9e1wiRlJFRVwifVxuICAgICAgICBwb3B1bGFyaXR5PXt7XG4gICAgICAgICAgcmF0aW5nOiA0LjUsXG4gICAgICAgICAgY291bnQ6IDMsXG4gICAgICAgIH19XG4gICAgICAgIHVybD17XCJodHRwczovL2dpdGh1Yi5jb20vZmxvb3JwbGFuL2Zsb29ycGxhbiN3ZWxjb21lLXRvLWZsb29ycGxhblwifVxuICAgICAgICBzZXR1cFRpbWU9e1wiMWhyXCJ9XG4gICAgICAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IExpbmssIENhcmQsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhclwiO1xuaW1wb3J0IFN0YXJCb3JkZXJJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXJCb3JkZXJcIjtcbmltcG9ydCBTdGFySGFsZkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhckhhbGZcIjtcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT25cIjtcbmltcG9ydCBBY2Nlc3NUaW1lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc1RpbWUnO1xuaW50ZXJmYWNlIEZsb29yUGxhbkNhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNvc3Q6IHN0cmluZztcbiAgcG9wdWxhcml0eToge1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIGNvdW50OiBudW1iZXI7XG4gIH07XG4gIHVybDogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZsb29yUGxhbkNhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNvc3QsXG4gIHBvcHVsYXJpdHksXG4gIHVybCxcbiAgc2V0dXBUaW1lLFxufTogRmxvb3JQbGFuQ2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fT5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICA8QWNjZXNzVGltZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIvPlxuICAgICAgICAgIHtzZXR1cFRpbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHsvKiA8TW9uZXRpemF0aW9uT25JY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiLz4gKi99XG4gICAgICAgICAge2Nvc3R9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgIHtuZXcgQXJyYXkocGFyc2VJbnQocG9wdWxhcml0eS5yYXRpbmcudG9TdHJpbmcoKSwgMTApKS5maWxsKFxuICAgICAgICAgICAgPFN0YXJJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cG9wdWxhcml0eS5yYXRpbmcgJSAxID4gMCA/IDxTdGFySGFsZkljb24gLz4gOiBudWxsfVxuICAgICAgICAgIHtuZXcgQXJyYXkoNSAtIE1hdGguY2VpbChwb3B1bGFyaXR5LnJhdGluZykpLmZpbGwoXG4gICAgICAgICAgICA8U3RhckJvcmRlckljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgICh7cG9wdWxhcml0eS5jb3VudH0pXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+U2hhcmU8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmOGM2ODM3OCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUUhJNFNQS0ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVWVzRXNk9CLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTNNWDVCUlQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JQUIyRFFRVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9HRlBIUzJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRElUMzRPTEYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTM1SEZSU1VQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aQ0gyR0tCUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHVDJFS0tGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1RCM05PWlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FNVBPNkxWQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtTSUNaRkhELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ibG9nLyRibG9nUG9zdElkJzp7J2lkJzoncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86YmxvZ1Bvc3RJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLUtCM0UySk1CLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EUUFDWk1OMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFWMko1QlNFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCc6eydpZCc6J3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86YmxvZ1Bvc3RJZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdC03M1c0Q0VVRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSlVETEhFNlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BVjJKNUJTRS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYSc6eydpZCc6J3JvdXRlcy9ibG9nL2EnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9hJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYS1ZUzNXRlQ1NS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYic6eydpZCc6J3JvdXRlcy9ibG9nL2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYi1GM1NGS0ZIWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYyc6eydpZCc6J3JvdXRlcy9ibG9nL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9jJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYy1FVlhDSUwzRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LVhBWENHUkhRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BVjJKNUJTRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL25ldyc6eydpZCc6J3JvdXRlcy9ibG9nL25ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL25ldy1IVVJPR0QzQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSlVETEhFNlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BVjJKNUJTRS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1OVUo1VU8zNC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1YRlNCU0lPMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRFFBQ1pNTjIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1ESEdFWlBKQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWduLiRhdXRoVHlwZSc6eydpZCc6J3JvdXRlcy9zaWduLiRhdXRoVHlwZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWduLzphdXRoVHlwZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWduLiRhdXRoVHlwZS1aQ1ZUNFNCRy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdXBkYXRlLXNlc3Npb24nOnsnaWQnOidyb3V0ZXMvdXBkYXRlLXNlc3Npb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondXBkYXRlLXNlc3Npb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24tMkhNNUM0Qk0uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1GOEM2ODM3OC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FB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
