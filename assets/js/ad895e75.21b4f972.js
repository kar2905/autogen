"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3581:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={},a="Frequently Asked Questions",l={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Set your API endpoints",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/autogen/docs/FAQ",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/FAQ.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Set your API endpoints",id:"set-your-api-endpoints",children:[{value:"Option 1: Load a list of endpoints from json",id:"option-1-load-a-list-of-endpoints-from-json",children:[],level:3},{value:"Option 2: Construct a list of endpoints for OpenAI or Azure OpenAI",id:"option-2-construct-a-list-of-endpoints-for-openai-or-azure-openai",children:[],level:3},{value:"Use the constructed configuration list in agents",id:"use-the-constructed-configuration-list-in-agents",children:[],level:3}],level:2},{value:"Handle Rate Limit Error and Timeout Error",id:"handle-rate-limit-error-and-timeout-error",children:[],level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h2",{id:"set-your-api-endpoints"},"Set your API endpoints"),(0,r.kt)("p",null,"There are multiple ways to construct a list of configurations for LLM inference."),(0,r.kt)("h3",{id:"option-1-load-a-list-of-endpoints-from-json"},"Option 1: Load a list of endpoints from json"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/oai/openai_utils#config_list_from_json"},(0,r.kt)("inlineCode",{parentName:"a"},"config_list_from_json"))," function loads a list of configurations from an environment variable or a json file."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import autogen\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    file_location=".",\n    filter_dict={\n        "model": {\n            "gpt-4",\n            "gpt-3.5-turbo",\n        }\n    }\n)\n')),(0,r.kt)("p",null,'It first looks for environment variable "OAI_CONFIG_LIST" which needs to be a valid json string. If that variable is not found, it then looks for a json file named "OAI_CONFIG_LIST" under the specified ',(0,r.kt)("inlineCode",{parentName:"p"},"file_location"),". It then filters the configs by models (you can filter by other keys as well)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OAI_CONFIG_LIST")," var or file content looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "model": "gpt-4",\n        "api_key": "<your OpenAI API key here>"\n    },\n    {\n        "model": "gpt-4",\n        "api_key": "<your Azure OpenAI API key here>",\n        "api_base": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2023-07-01-preview"\n    },\n    {\n        "model": "gpt-3.5-turbo",\n        "api_key": "<your Azure OpenAI API key here>",\n        "api_base": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2023-07-01-preview"\n    }\n]\n')),(0,r.kt)("h3",{id:"option-2-construct-a-list-of-endpoints-for-openai-or-azure-openai"},"Option 2: Construct a list of endpoints for OpenAI or Azure OpenAI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/oai/openai_utils#config_list_from_models"},(0,r.kt)("inlineCode",{parentName:"a"},"config_list_from_models"))," function tries to create a list of configurations using Azure OpenAI endpoints and OpenAI endpoints for the provided list of models. It assumes the api keys and api bases are stored in the corresponding environment variables or local txt files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenAI API key: os.environ",'["OPENAI_API_KEY"]'," or ",(0,r.kt)("inlineCode",{parentName:"li"},'openai_api_key_file="key_openai.txt"'),"."),(0,r.kt)("li",{parentName:"ul"},"Azure OpenAI API key: os.environ",'["AZURE_OPENAI_API_KEY"]'," or ",(0,r.kt)("inlineCode",{parentName:"li"},'aoai_api_key_file="key_aoai.txt"'),". Multiple keys can be stored, one per line."),(0,r.kt)("li",{parentName:"ul"},"Azure OpenAI API base: os.environ",'["AZURE_OPENAI_API_BASE"]'," or ",(0,r.kt)("inlineCode",{parentName:"li"},'aoai_api_base_file="base_aoai.txt"'),". Multiple bases can be stored, one per line.")),(0,r.kt)("p",null,"It's OK to have only the OpenAI API key, or only the Azure OpenAI API key + base."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import autogen\nconfig_list = autogen.config_list_from_models(model_list=["gpt-4", "gpt-3.5-turbo", "gpt-3.5-turbo-16k"])\n')),(0,r.kt)("p",null,"The config list looks like the following, if only OpenAI API key is available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"config_list = [\n    {\n        'model': 'gpt-4',\n        'api_key': '<your OpenAI API key here>',\n    },  # OpenAI API endpoint for gpt-4\n    {\n        'model': 'gpt-3.5-turbo',\n        'api_key': '<your OpenAI API key here>',\n    },  # OpenAI API endpoint for gpt-3.5-turbo\n    {\n        'model': 'gpt-3.5-turbo-16k',\n        'api_key': '<your OpenAI API key here>',\n    },  # OpenAI API endpoint for gpt-3.5-turbo-16k\n]\n")),(0,r.kt)("h3",{id:"use-the-constructed-configuration-list-in-agents"},"Use the constructed configuration list in agents"),(0,r.kt)("p",null,'Make sure the "config_list" is included in the ',(0,r.kt)("inlineCode",{parentName:"p"},"llm_config")," in the constructor of the LLM-based agent. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'assistant = autogen.AssistantAgent(\n    name="assistant",\n    llm_config={"config_list": config_list}\n)\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"llm_config")," is used in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/oai/completion#create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," function for LLM inference.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"llm_config")," is not provided, the agent will rely on other openai settings such as ",(0,r.kt)("inlineCode",{parentName:"p"},"openai.api_key")," or the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY"),", which can also work when you'd like to use a single endpoint.\nYou can also explicitly specify that by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'assistant = autogen.AssistantAgent(name="assistant", llm_config={"api_key": ...})\n')),(0,r.kt)("h2",{id:"handle-rate-limit-error-and-timeout-error"},"Handle Rate Limit Error and Timeout Error"),(0,r.kt)("p",null,"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"retry_wait_time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_retry_period")," to handle rate limit error. And you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"request_timeout")," to handle timeout error. They can all be specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"llm_config")," for an agent, which will be used in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/oai/completion#create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," function for LLM inference."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retry_wait_time")," (int): the time interval to wait (in seconds) before retrying a failed request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_retry_period")," (int): the total timeout (in seconds) allowed for retrying failed requests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_timeout")," (int): the timeout (in seconds) sent with a single request.")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Use-Cases/enhanced_inference#runtime-error"},"documentation")," for more info."))}u.isMDXComponent=!0}}]);