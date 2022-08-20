import create from "zustand";

const useStore = create((set) => {
  return {};
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.setState({ [pageName]: newState });
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "flexWrap": "nowrap",
        "alignContent": "stretch",
        "rowGap": "",
        "columnGap": "",
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "",
        "height": "600px",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "",
        "textAlign": "left",
        "color": "",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      }
    },
    "Image3": {
      "onClick": false,
      "styles": {
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "100%",
        "height": "100%",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "",
        "textAlign": "left",
        "color": "",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/orkun-azap-_c7haaSAcIg-unsplash.jpg"
      }
    },
    "TextBox2": {
      "styles": {
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "",
        "height": "",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "",
        "maxHeight": "",
        "fontFamily": "Montserrat",
        "fontWeight": 400,
        "fontSize": "50px",
        "textAlign": "left",
        "color": "#ffffff",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "absolute",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      },
      "custom": {
        "text": "GET DRIVING LICENSE DATA"
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "flexWrap": "nowrap",
        "alignContent": "stretch",
        "rowGap": "",
        "columnGap": "",
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "200px",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "",
        "height": "500px",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "",
        "textAlign": "left",
        "color": "",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      }
    },
    "Upload1": {
      "onChange": false,
      "onClick": false,
      "styles": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "flexWrap": "nowrap",
        "alignContent": "stretch",
        "rowGap": "",
        "columnGap": "12px",
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "8px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "paddingLeft": "15px",
        "width": "",
        "height": "",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "16px",
        "textAlign": "left",
        "color": "#fff",
        "opacity": "1",
        "borderRadius": "2px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "backgroundImage": "",
        "backgroundColor": "#1890ff",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      },
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "io": {
        "files": null
      }
    },
    "Image6": {
      "onClick": false,
      "styles": {
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "",
        "height": "",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "50%",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "",
        "textAlign": "left",
        "color": "",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": ""
      }
    },
    "Image8": {
      "onClick": false,
      "styles": {
        "alignSelf": "auto",
        "flexGrow": "0",
        "flexShrink": "1",
        "order": "0",
        "marginTop": "0",
        "marginBottom": "0",
        "marginRight": "0",
        "marginLeft": "0",
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingRight": "0",
        "paddingLeft": "0",
        "width": "",
        "height": "",
        "minWidth": "0",
        "minHeight": "0",
        "maxWidth": "50%",
        "maxHeight": "",
        "fontFamily": "",
        "fontWeight": 400,
        "fontSize": "",
        "textAlign": "left",
        "color": "",
        "opacity": "1",
        "borderRadius": "0",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "backgroundImage": "",
        "backgroundColor": "",
        "position": "static",
        "float": "none",
        "clear": "none",
        "top": "",
        "left": "",
        "bottom": "",
        "right": "",
        "zIndex": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": ""
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
}};

function getViewportDimension() {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.setState({ [pageName]: effectiveProps });
}

useStore.setState(desktopModeProps);

export default useStore;
