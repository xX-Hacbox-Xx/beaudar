parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var a={},d=window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light";a.preferredTheme=d;var f="preferred-color-scheme";a.preferredThemeId=f;var g=function(){function e(){var e=this;this.element=document.createElement("form"),this.element.innerHTML="\n      <h3 id=\"heading-repository\">\u4ED3\u5E93</h3>\n      <p>\n        \u9009\u62E9 Beaudar \u5C06\u8981\u8FDE\u63A5\u7684\u4ED3\u5E93\u3002\n      </p>\n      <ol>\n        <li>\u786E\u4FDD\u4ED3\u5E93\u662F\u516C\u5F00\u7684\uFF0C\u5426\u5219\u60A8\u7684\u8BFB\u8005\u5C06\u65E0\u6CD5\u67E5\u770B Issue(\u8BC4\u8BBA)\u3002</li>\n        <li>\u786E\u4FDD <a href=\"https://github.com/apps/beaudar\" target=\"_blank\">Beaudar app</a>\n          \u5DF2\u5728\u4ED3\u5E93\u4E2D\u5B89\u88C5\uFF0C\u5426\u5219\u7528\u6237\u5C06\u65E0\u6CD5\u53D1\u8868\u8BC4\u8BBA\u3002\n        </li>\n        <li>\u5982\u679C\u4F60\u7684\u4ED3\u5E93\u662F\u4E00\u4E2A\u5206\u53C9\uFF0C\u8BF7\u5230\u8BBE\u7F6E\u4E2D\uFF0C\u786E\u4FDD Issues \u529F\u80FD\u5DF2\u6253\u5F00\u3002</li>\n      </ol>\n      <fieldset>\n        <div>\n          <label for=\"repo\">\u4ED3\u5E93:</label><br/>\n          <input id=\"repo\" class=\"form-control\" type=\"text\" placeholder=\"\u4F8B\uFF1Abeaudar/beaudar\">\n          <p class=\"note\">\n            \u4E00\u4E2A <strong>public</strong> \u7684 GitHub \u4ED3\u5E93\u3002\u8FD9\u662F\u5C06\u53D1\u5E03\u535A\u5BA2\u6587\u7AE0 Issue \u548C Issue \u8BC4\u8BBA\u7684\u5730\u65B9\u3002\n          </p>\n        </div>\n      </fieldset>\n\n      <h3 id=\"heading-mapping\">\u535A\u5BA2\u6587\u7AE0 \u2194\uFE0F Issue \u6620\u5C04</h3>\n      <p>\u9009\u62E9\u535A\u5BA2\u6587\u7AE0\u548C GitHub Issue \u4E4B\u95F4\u7684\u6620\u5C04\u3002</p>\n      <fieldset>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"pathname\" name=\"mapping\" checked=\"checked\">\n              Issue \u6807\u9898\u5305\u542B\u9875\u9762\u8DEF\u5F84\u540D\u3002\n            <p class=\"note\">\n              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0 URL <strong>\u8DEF\u5F84</strong>\u7684 Issue\u3002\u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"url\" name=\"mapping\">\n              Issue \u6807\u9898\u5305\u542B\u9875\u9762 URL\u3002\n            <p class=\"note\">\n              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0 URL \u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"title\" name=\"mapping\">\n              Issue \u6807\u9898\u5305\u542B\u9875\u9762\u6807\u9898\n            <p class=\"note\">\n              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0\u6807\u9898\u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"og:title\" name=\"mapping\">\n            Issue \u6807\u9898\u5305\u542B\u9875\u9762 meta \u7684 og:title\n            <p class=\"note\">\n              Beaudar \u5C06\u641C\u7D22\u6807\u9898\u5305\u542B\u535A\u5BA2\u6587\u7AE0\u9875\u9762 meta \u5143\u7D20 <a href=\"http://ogp.me/\" target=\"_blank\">og:title</a> \u7684 Issue\u3002 \u5982\u679C\u672A\u627E\u5230\u5339\u914D\u7684 Issue\uFF0C\u5219\u5F53\u6709\u4EBA\u9996\u6B21\u5BF9\u60A8\u7684\u4FE1\u606F\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0CBeaudar \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A Issue\u3002\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"Issue-number\" name=\"mapping\">\n              \u7279\u5B9A\u95EE\u9898\u7F16\u53F7\n            <p class=\"note\">\n              \u60A8\u53EF\u4EE5\u914D\u7F6E Beaudar \u4EE5\u6309\u7F16\u53F7\u52A0\u8F7D\u7279\u5B9A\u7684 Issue\u3002 \u95EE\u9898\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"specific-term\" name=\"mapping\">\n              \u95EE\u9898\u6807\u9898\u5305\u542B\u7279\u5B9A\u540D\u79F0\n            <p class=\"note\">\n              \u5C06 Beaudar \u914D\u7F6E\u4E3A\u641C\u7D22\u6807\u9898\u5305\u542B\u60A8\u9009\u62E9\u7684\u7279\u5B9A\u540D\u79F0\u7684\u95EE\u9898\u3002\u5982\u679C\u672A\u627E\u5230\u5339\u914D\u95EE\u9898\uFF0CBeaudar \u5C06\u81EA\u52A8\u521B\u5EFA\u7B2C\u4E00\u6B21\u6709\u4EBA\u8BC4\u8BBA\u60A8\u7684\u5E16\u5B50\u65F6\u3002Issue \u7684\u6807\u9898\u5C06\u662F\u60A8\u9009\u62E9\u7684\u540D\u79F0\u3002\n            </p>\n          </label>\n        </div>\n      </fieldset>\n\n      <h3 id=\"heading-Issue-label\">Issue \u6807\u7B7E</h3>\n      <p>\n        \u9009\u62E9\u5C06\u5206\u914D\u7ED9 Beaudar \u521B\u5EFA\u7684\u95EE\u9898\u7684\u6807\u7B7E\u3002\n      </p>\n      <fieldset>\n        <div>\n          <label for=\"label\">\u6807\u7B7E (\u53EF\u9009):</label><br/>\n          <input id=\"label\" class=\"form-control\" type=\"text\" placeholder=\"\u6807\u7B7E\u540D\">\n          <p class=\"note\">\n          \u6807\u7B7E\u540D\u79F0\u533A\u5206\u5927\u5C0F\u5199\u3002\u8BE5\u6807\u7B7E\u5FC5\u987B\u5B58\u5728\u4E8E\u60A8\u7684\u4ED3\u5E93\u4E2D\uFF0C\u65E0\u6CD5\u9644\u52A0\u4E0D\u5B58\u5728\u7684\u6807\u7B7E\u3002\u6807\u7B7E\u540D\u79F0\u652F\u6301\u6DFB\u52A0\u8868\u60C5\u7B26\u53F7\u3002\u2728\uD83D\uDCAC\u2728\n          </p>\n        </div>\n      </fieldset>\n\n      <h3 id=\"heading-theme\">\u9009\u62E9\u4E3B\u9898 \uD83C\uDF08</h3>\n      <p>\n        \u9009\u62E9\u4E0E\u60A8\u7684\u535A\u5BA2\u5339\u914D\u7684 Beaudar \u4E3B\u9898\u3002\u627E\u4E0D\u5230\u4F60\u559C\u6B22\u7684\u4E3B\u9898\uFF1F\n        <a href=\"https://github.com/beaudar/beaudar/blob/master/CONTRIBUTING.MD\" target=\"_blank\">\u8D21\u732E</a> \u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002\n      </p>\n\n      <select id=\"theme\" class=\"form-select\" value=\"github-light\" aria-label=\"Theme\">\n        <option value=\"github-light\">GitHub Light</option>\n        <option value=\"github-dark\">GitHub Dark</option>\n        <option value=\"preferred-color-scheme\">Preferred Color Scheme</option>\n        <option value=\"github-dark-orange\">GitHub Dark Orange</option>\n        <option value=\"icy-dark\">Icy Dark</option>\n        <option value=\"dark-blue\">Dark Blue</option>\n        <option value=\"photon-dark\">Photon Dark</option>\n      </select>\n      <h3 id=\"heading-enable\">\u4F7F\u7528 Beaudar \uD83C\uDF8A</h3>\n      <p>\n      &emsp;&emsp;\u5C06\u4EE5\u4E0B\u811A\u672C\u6807\u8BB0\u6DFB\u52A0\u5230\u535A\u5BA2\u7684\u6A21\u677F\u4E2D\u3002 \u5C06\u5176\u653E\u7F6E\u5728\u8981\u663E\u793A\u6CE8\u91CA\u7684\u4F4D\u7F6E\u3002 \u4F7F\u7528<code> .beaudar </code>\u548C<code> .beaudar-frame </code>\u9009\u62E9\u5668\u81EA\u5B9A\u4E49\u5E03\u5C40\u3002\n      </p>\n      <div class=\"config-field\" id=\"script\" class=\"highlight highlight-text-html-basic\"></div>\n      <button id=\"copy-button\" type=\"button\" class=\"btn btn-blue code-action\">\u590D\u5236</button>",this.element.addEventListener("submit",function(e){return e.preventDefault()}),this.element.action="javascript:",this.script=this.element.querySelector("#script"),this.repo=this.element.querySelector("#repo"),this.label=this.element.querySelector("#label"),this.theme=this.element.querySelector("#theme");var t=document.getElementById("theme-stylesheet");sessionStorage.getItem("beaudar-set-theme")&&(this.theme.value=sessionStorage.getItem("beaudar-set-theme"),t.href="/stylesheets/themes/"+this.theme.value+"/index.css"),this.theme.addEventListener("change",function(){var n=e.theme.value;n===f&&(n=d),t.href="/stylesheets/themes/"+n+"/index.css";var s={type:"set-theme",theme:n};document.querySelector("iframe").contentWindow.postMessage(s,location.origin)}),this.element.querySelector("#copy-button").addEventListener("click",function(){return e.copyTextToClipboard(e.script.textContent)}),this.element.addEventListener("change",function(){return e.outputConfig()}),this.element.addEventListener("input",function(){return e.outputConfig()}),this.outputConfig()}return e.prototype.outputConfig=function(){var e,t=this.element.querySelector("input[name=\"mapping\"]:checked");e="Issue-number"===t.value?this.makeConfigScriptAttribute("Issue-number","\u5728\u6B64\u5904\u8F93\u5165 Issue \u7F16\u53F7"):"specific-term"===t.value?this.makeConfigScriptAttribute("Issue-term","\u5728\u6B64\u8F93\u5165\u540D\u79F0"):this.makeConfigScriptAttribute("Issue-term",t.value),this.script.innerHTML=this.makeConfigScript(this.makeConfigScriptAttribute("repo",""===this.repo.value?"\u5728\u6B64\u5904\u8F93\u5165\u4ED3\u5E93":this.repo.value)+"\n"+e+"\n"+(this.label.value?this.makeConfigScriptAttribute("label",this.label.value)+"\n":"")+this.makeConfigScriptAttribute("theme",this.theme.value)+"\n"+this.makeConfigScriptAttribute("crossorigin","anonymous"))},e.prototype.makeConfigScriptAttribute=function(e,t){return"<span class=\"pl-s1\">        <span class=\"pl-e\">"+e+"</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>"+t+"<span class=\"pl-pds\">\"</span></span></span>"},e.prototype.makeConfigScript=function(e){return"<pre><span class=\"pl-s1\">&lt;<span class=\"pl-ent\">script</span> <span class=\"pl-e\">src</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>https://beaudar.lipk.org/client.js<span class=\"pl-pds\">\"</span></span></span>\n"+e+"\n<span class=\"pl-s1\">        <span class=\"pl-e\">async</span>&gt;</span>\n<span class=\"pl-s1\">&lt;/<span class=\"pl-ent\">script</span>&gt;</span></pre>"},e.prototype.copyTextToClipboard=function(e){var t=document.createElement("textarea");t.style.cssText="position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(n){}document.body.removeChild(t)},e}();document.querySelector("h2#configuration").insertAdjacentElement("afterend",new g().element);for(var c=document.getElementsByTagName("a"),b=0;b<c.length;b++)/^(https?:)?\/\//.test(c[b].getAttribute("href"))&&(c[b].target="_blank");a.__esModule=true;return{"QCba":{},"N98m":a};});