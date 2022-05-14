import Router from "next/router";
import ApiCall from "modules/ApiCall";
import API_ROUTES from "modules/constants/api_routes";
import { defaultLocale } from "modules/constants/locale";
export const redirect = (url) => {
  Router.push(url);
};

export function appendScript(scriptToAppend) {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

export function removeScript(scriptToremove) {
  let allsuspects = document.getElementsByTagName("script");
  for (let i = allsuspects.length; i >= 0; i--) {
    if (
      allsuspects[i] &&
      allsuspects[i].getAttribute("src") !== null &&
      allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1
    ) {
      allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }
}

export function appendScripts(arrayOfScripts) {
  for (let i = 0; i < arrayOfScripts.length; i++) {
    appendScript(arrayOfScripts[i]);
  }
}

export function removeScripts(arrayOfScripts) {
  for (let i = 0; i < arrayOfScripts.length; i++) {
    removeScript(arrayOfScripts[i]);
  }
}

export async function usePageStructure(pageCode = "", lang = defaultLocale) {
  try {
    if (!pageCode) {
      let result = await Promise.all([ApiCall({ path: "/api/v1/setting" })]);
      const settingRes = result[0];
      let setting = {};
      if (settingRes.status) setting = settingRes.data;
      const metaObject = {
        metaTitle: setting[`metaTitle${lang}`] || "",
        metaImage: setting[`metaImage${lang}`] || "",
        metaDescription: setting[`metaDescription${lang}`] || "",
        metaKeyword: setting[`metaKeyword${lang}`] || "",
        bannerImg: "",
        bannerImbMb: "",
        name: "",
      };
      return { metaObject, pageContent: [], publishedContent: false, setting };
    }

    let result = await Promise.all([
      ApiCall({ path: "/api/v1/setting" }),
      ApiCall({
        path: API_ROUTES.COMMON.getPageStructure(pageCode),
        headers: { "X-localization": lang },
      }),
    ]);
    
    const settingRes = result[0];
    const pageStructureResponse = result[1];
    console.log("[all] - pageStructureResponse: ", pageStructureResponse);
    let setting = {};
    if (settingRes.status) setting = settingRes.data;
    if (pageStructureResponse && pageStructureResponse.status) {
      const responseData = pageStructureResponse.data || {};
      const metaObject = {
        metaTitle: responseData.metaTitle || setting[`metaTitle${lang}`] || "",
        metaImage: responseData.metaImage || setting[`metaImage${lang}`] || "",
        metaDescription:
          responseData.metaDescription ||
          setting[`metaDescription${lang}`] ||
          "",
        metaKeyword:
          responseData.metaKeyword || setting[`metaKeyword${lang}`] || "",
        bannerImg: responseData.bannerImg || "",
        bannerImbMb: responseData.bannerImbMb || "",
        name: responseData.name || "",
      };

      return {
        metaObject,
        pageContent: responseData.content,
        publishedContent: responseData.publishedContent,
        setting: setting,
      };
    } else {
      console.warn(
        "[usePageStructure] get pageStructure api error: ",
        pageStructureResponse.message
      );
      return {
        metaObject: null,
        pageContent: [],
        publishedContent: false,
        setting: setting,
      };
    }
  } catch (error) {
    console.warn(
      `[usePageStructure] get pageStructure serverside error: `,
      error
    );
    return {
      metaObject: null,
      pageContent: [],
      publishedContent: false,
      setting: {},
    };
  }
}
