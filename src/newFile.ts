import { ref } from 'vue';
import { onMounted } from 'vue';
import { defineComponent } from "vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const message = ref(null); // リアクティブな値を定義
fetch('api/message')
.then(response => response.json()) // レスポンスをJSONとして解析
.then(data => {
message.value = data.text;

// AshinaPoc APIに渡すJSONデータ
const jsonData = {
videoAnalytics: {
userId: message.value
}
};

const scriptContent = `
    {
      "videoAnalytics": {
        "userId": "${jsonData.videoAnalytics.userId}"
      }
    }
  `;

onMounted(() => {
// 新しいスクリプト要素を作成し、中にJSONデータを埋め込んで追加
const script = document.createElement('script');
script.type = 'text/javascript';
script.charset = 'utf-8';
script.defer = true;
script.src = 'https://player-api.p.uliza.jp/v1/players/player_02/nssys/AshinaPoc?type=normal&name=BBB';
script.async = true;
script.textContent = `${scriptContent}`; // デバッグ用にログ出力


// スクリプトをHTMLに追加
document.getElementById('abcde').appendChild(script);

// APIへのリクエストはここで行うか、もしくはスクリプト内で行う
});
});



const __VLS_componentsOption = { Tabs, Tab };

const __VLS_name = "App" as const;
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'tabs', typeof __VLS_localComponents, "Tabs", "tabs", "tabs"> &
__VLS_WithComponent<'tab', typeof __VLS_localComponents, "Tab", "tab", "tab">;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b; __VLS_intrinsicElements.b;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs; __VLS_components.tabs;
// @ts-ignore
[tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs, tabs,];
__VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.Tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab; __VLS_components.tab;
// @ts-ignore
[tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab, tab,];
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
{
const __VLS_0 = __VLS_intrinsicElements["h1"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["b"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, id: ("abcde"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, id: ("abcde"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_ctx.message);
(__VLS_23.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("tabs-example"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("tabs-example"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("example example-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("example example-1"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["h2"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(__VLS_38.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["p"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
{
let __VLS_45!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, class: ("Tab-exp1"), }));
({} as { tabs: typeof __VLS_45; }).tabs;
({} as { tabs: typeof __VLS_45; }).tabs;
const __VLS_47 = __VLS_46({ ...{}, class: ("Tab-exp1"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("Tab-exp1"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
let __VLS_50!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, title: ("Tab 1"), }));
({} as { tab: typeof __VLS_50; }).tab;
({} as { tab: typeof __VLS_50; }).tab;
const __VLS_52 = __VLS_51({ ...{}, title: ("Tab 1"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, title: ("Tab 1"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = __VLS_intrinsicElements["h3"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_58.slots!).default;
}
(__VLS_53.slots!).default;
}
{
let __VLS_60!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, title: ("Tab 2"), }));
({} as { tab: typeof __VLS_60; }).tab;
({} as { tab: typeof __VLS_60; }).tab;
const __VLS_62 = __VLS_61({ ...{}, title: ("Tab 2"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, title: ("Tab 2"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["h3"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
(__VLS_48.slots!).default;
}
(__VLS_33.slots!).default;
}
{
const __VLS_70 = __VLS_intrinsicElements["div"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, class: ("example example-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("example example-2"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = __VLS_intrinsicElements["h2"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default;
}
{
const __VLS_80 = __VLS_intrinsicElements["p"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
(__VLS_83.slots!).default;
}
{
let __VLS_85!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, }));
({} as { tabs: typeof __VLS_85; }).tabs;
({} as { tabs: typeof __VLS_85; }).tabs;
const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
{
const __VLS_90 = __VLS_intrinsicElements["template"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, name: ("config"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, name: ("config"), });
{
const __VLS_93 = __VLS_intrinsicElements["div"];
const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
const __VLS_95 = __VLS_94({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_95> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
let __VLS_97!: __VLS_NormalizeEmits<typeof __VLS_96.emit>;
{
const __VLS_98 = __VLS_intrinsicElements["i"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
const __VLS_100 = __VLS_99({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
}
(__VLS_96.slots!).default;
}
(__VLS_88.slots!).default;
}
{
let __VLS_103!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ ...{}, titleSlot: ("config"), }));
({} as { tab: typeof __VLS_103; }).tab;
({} as { tab: typeof __VLS_103; }).tab;
const __VLS_105 = __VLS_104({ ...{}, titleSlot: ("config"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("config"), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
{
const __VLS_108 = __VLS_intrinsicElements["h3"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
(__VLS_111.slots!).default;
}
(__VLS_106.slots!).default;
}
{
let __VLS_113!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{}, title: ("Tab 2"), }));
({} as { tab: typeof __VLS_113; }).tab;
({} as { tab: typeof __VLS_113; }).tab;
const __VLS_115 = __VLS_114({ ...{}, title: ("Tab 2"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{}, title: ("Tab 2"), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
{
const __VLS_118 = __VLS_intrinsicElements["h3"];
const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
const __VLS_120 = __VLS_119({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>;
(__VLS_121.slots!).default;
}
(__VLS_116.slots!).default;
}
(__VLS_88.slots!).default;
}
(__VLS_73.slots!).default;
}
{
const __VLS_123 = __VLS_intrinsicElements["div"];
const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
const __VLS_125 = __VLS_124({ ...{}, class: ("example example-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_125> & Record<string, unknown>) => void)({ ...{}, class: ("example example-3"), });
const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125)!;
let __VLS_127!: __VLS_NormalizeEmits<typeof __VLS_126.emit>;
{
const __VLS_128 = __VLS_intrinsicElements["h2"];
const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
const __VLS_130 = __VLS_129({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>;
(__VLS_131.slots!).default;
}
{
const __VLS_133 = __VLS_intrinsicElements["p"];
const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
const __VLS_135 = __VLS_134({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_134));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_133, typeof __VLS_135> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137!: __VLS_NormalizeEmits<typeof __VLS_136.emit>;
{
const __VLS_138 = __VLS_intrinsicElements["b"];
const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
const __VLS_140 = __VLS_139({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_138, typeof __VLS_140> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
let __VLS_142!: __VLS_NormalizeEmits<typeof __VLS_141.emit>;
(__VLS_141.slots!).default;
}
(__VLS_136.slots!).default;
}
{
let __VLS_143!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({ ...{}, reverse: (true), }));
({} as { tabs: typeof __VLS_143; }).tabs;
({} as { tabs: typeof __VLS_143; }).tabs;
const __VLS_145 = __VLS_144({ ...{}, reverse: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_144));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_143, typeof __VLS_145> & Record<string, unknown>) => void)({ ...{}, reverse: (true), });
const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145)!;
let __VLS_147!: __VLS_NormalizeEmits<typeof __VLS_146.emit>;
{
const __VLS_148 = __VLS_intrinsicElements["template"];
const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
const __VLS_150 = __VLS_149({ ...{}, name: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_148, typeof __VLS_150> & Record<string, unknown>) => void)({ ...{}, name: ("tab1"), });
{
const __VLS_151 = __VLS_intrinsicElements["div"];
const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
const __VLS_153 = __VLS_152({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
let __VLS_155!: __VLS_NormalizeEmits<typeof __VLS_154.emit>;
{
const __VLS_156 = __VLS_intrinsicElements["i"];
const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
const __VLS_158 = __VLS_157({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_156, typeof __VLS_158> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158)!;
let __VLS_160!: __VLS_NormalizeEmits<typeof __VLS_159.emit>;
}
(__VLS_154.slots!).default;
}
(__VLS_146.slots!).default;
}
{
const __VLS_161 = __VLS_intrinsicElements["template"];
const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
const __VLS_163 = __VLS_162({ ...{}, name: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_161, typeof __VLS_163> & Record<string, unknown>) => void)({ ...{}, name: ("tab2"), });
{
const __VLS_164 = __VLS_intrinsicElements["div"];
const __VLS_165 = __VLS_elementAsFunctionalComponent(__VLS_164);
const __VLS_166 = __VLS_165({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_164, typeof __VLS_166> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166)!;
let __VLS_168!: __VLS_NormalizeEmits<typeof __VLS_167.emit>;
{
const __VLS_169 = __VLS_intrinsicElements["i"];
const __VLS_170 = __VLS_elementAsFunctionalComponent(__VLS_169);
const __VLS_171 = __VLS_170({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_169, typeof __VLS_171> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171)!;
let __VLS_173!: __VLS_NormalizeEmits<typeof __VLS_172.emit>;
}
(__VLS_167.slots!).default;
}
(__VLS_146.slots!).default;
}
{
let __VLS_174!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ ...{}, titleSlot: ("tab1"), }));
({} as { tab: typeof __VLS_174; }).tab;
({} as { tab: typeof __VLS_174; }).tab;
const __VLS_176 = __VLS_175({ ...{}, titleSlot: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_175));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_174, typeof __VLS_176> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab1"), });
const __VLS_177 = __VLS_pickFunctionalComponentCtx(__VLS_174, __VLS_176)!;
let __VLS_178!: __VLS_NormalizeEmits<typeof __VLS_177.emit>;
{
const __VLS_179 = __VLS_intrinsicElements["h3"];
const __VLS_180 = __VLS_elementAsFunctionalComponent(__VLS_179);
const __VLS_181 = __VLS_180({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_180));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_179, typeof __VLS_181> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181)!;
let __VLS_183!: __VLS_NormalizeEmits<typeof __VLS_182.emit>;
(__VLS_182.slots!).default;
}
(__VLS_177.slots!).default;
}
{
let __VLS_184!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({ ...{}, titleSlot: ("tab2"), }));
({} as { tab: typeof __VLS_184; }).tab;
({} as { tab: typeof __VLS_184; }).tab;
const __VLS_186 = __VLS_185({ ...{}, titleSlot: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_185));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_184, typeof __VLS_186> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab2"), });
const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_184, __VLS_186)!;
let __VLS_188!: __VLS_NormalizeEmits<typeof __VLS_187.emit>;
{
const __VLS_189 = __VLS_intrinsicElements["h3"];
const __VLS_190 = __VLS_elementAsFunctionalComponent(__VLS_189);
const __VLS_191 = __VLS_190({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_190));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_189, typeof __VLS_191> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191)!;
let __VLS_193!: __VLS_NormalizeEmits<typeof __VLS_192.emit>;
(__VLS_192.slots!).default;
}
(__VLS_187.slots!).default;
}
(__VLS_146.slots!).default;
}
(__VLS_126.slots!).default;
}
{
const __VLS_194 = __VLS_intrinsicElements["div"];
const __VLS_195 = __VLS_elementAsFunctionalComponent(__VLS_194);
const __VLS_196 = __VLS_195({ ...{}, class: ("example example-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_194, typeof __VLS_196> & Record<string, unknown>) => void)({ ...{}, class: ("example example-4"), });
const __VLS_197 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196)!;
let __VLS_198!: __VLS_NormalizeEmits<typeof __VLS_197.emit>;
{
const __VLS_199 = __VLS_intrinsicElements["h2"];
const __VLS_200 = __VLS_elementAsFunctionalComponent(__VLS_199);
const __VLS_201 = __VLS_200({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_200));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_201> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201)!;
let __VLS_203!: __VLS_NormalizeEmits<typeof __VLS_202.emit>;
(__VLS_202.slots!).default;
}
{
const __VLS_204 = __VLS_intrinsicElements["p"];
const __VLS_205 = __VLS_elementAsFunctionalComponent(__VLS_204);
const __VLS_206 = __VLS_205({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
{
const __VLS_209 = __VLS_intrinsicElements["b"];
const __VLS_210 = __VLS_elementAsFunctionalComponent(__VLS_209);
const __VLS_211 = __VLS_210({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_209, typeof __VLS_211> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
let __VLS_213!: __VLS_NormalizeEmits<typeof __VLS_212.emit>;
(__VLS_212.slots!).default;
}
(__VLS_207.slots!).default;
}
{
let __VLS_214!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{}, direction: ("vertical"), }));
({} as { tabs: typeof __VLS_214; }).tabs;
({} as { tabs: typeof __VLS_214; }).tabs;
const __VLS_216 = __VLS_215({ ...{}, direction: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_214, typeof __VLS_216> & Record<string, unknown>) => void)({ ...{}, direction: ("vertical"), });
const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216)!;
let __VLS_218!: __VLS_NormalizeEmits<typeof __VLS_217.emit>;
{
const __VLS_219 = __VLS_intrinsicElements["template"];
const __VLS_220 = __VLS_elementAsFunctionalComponent(__VLS_219);
const __VLS_221 = __VLS_220({ ...{}, name: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_220));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_219, typeof __VLS_221> & Record<string, unknown>) => void)({ ...{}, name: ("tab1"), });
{
const __VLS_222 = __VLS_intrinsicElements["div"];
const __VLS_223 = __VLS_elementAsFunctionalComponent(__VLS_222);
const __VLS_224 = __VLS_223({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_223));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_222, typeof __VLS_224> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_225 = __VLS_pickFunctionalComponentCtx(__VLS_222, __VLS_224)!;
let __VLS_226!: __VLS_NormalizeEmits<typeof __VLS_225.emit>;
{
const __VLS_227 = __VLS_intrinsicElements["i"];
const __VLS_228 = __VLS_elementAsFunctionalComponent(__VLS_227);
const __VLS_229 = __VLS_228({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_228));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_227, typeof __VLS_229> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_230 = __VLS_pickFunctionalComponentCtx(__VLS_227, __VLS_229)!;
let __VLS_231!: __VLS_NormalizeEmits<typeof __VLS_230.emit>;
}
(__VLS_225.slots!).default;
}
(__VLS_217.slots!).default;
}
{
const __VLS_232 = __VLS_intrinsicElements["template"];
const __VLS_233 = __VLS_elementAsFunctionalComponent(__VLS_232);
const __VLS_234 = __VLS_233({ ...{}, name: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_232, typeof __VLS_234> & Record<string, unknown>) => void)({ ...{}, name: ("tab2"), });
{
const __VLS_235 = __VLS_intrinsicElements["div"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
const __VLS_237 = __VLS_236({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237)!;
let __VLS_239!: __VLS_NormalizeEmits<typeof __VLS_238.emit>;
{
const __VLS_240 = __VLS_intrinsicElements["i"];
const __VLS_241 = __VLS_elementAsFunctionalComponent(__VLS_240);
const __VLS_242 = __VLS_241({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_240, typeof __VLS_242> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242)!;
let __VLS_244!: __VLS_NormalizeEmits<typeof __VLS_243.emit>;
}
(__VLS_238.slots!).default;
}
(__VLS_217.slots!).default;
}
{
let __VLS_245!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, new __VLS_245({ ...{}, titleSlot: ("tab1"), }));
({} as { tab: typeof __VLS_245; }).tab;
({} as { tab: typeof __VLS_245; }).tab;
const __VLS_247 = __VLS_246({ ...{}, titleSlot: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_245, typeof __VLS_247> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab1"), });
const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247)!;
let __VLS_249!: __VLS_NormalizeEmits<typeof __VLS_248.emit>;
{
const __VLS_250 = __VLS_intrinsicElements["h3"];
const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
const __VLS_252 = __VLS_251({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
(__VLS_253.slots!).default;
}
(__VLS_248.slots!).default;
}
{
let __VLS_255!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_256 = __VLS_asFunctionalComponent(__VLS_255, new __VLS_255({ ...{}, titleSlot: ("tab2"), }));
({} as { tab: typeof __VLS_255; }).tab;
({} as { tab: typeof __VLS_255; }).tab;
const __VLS_257 = __VLS_256({ ...{}, titleSlot: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab2"), });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
let __VLS_259!: __VLS_NormalizeEmits<typeof __VLS_258.emit>;
{
const __VLS_260 = __VLS_intrinsicElements["h3"];
const __VLS_261 = __VLS_elementAsFunctionalComponent(__VLS_260);
const __VLS_262 = __VLS_261({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_260, typeof __VLS_262> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262)!;
let __VLS_264!: __VLS_NormalizeEmits<typeof __VLS_263.emit>;
(__VLS_263.slots!).default;
}
(__VLS_258.slots!).default;
}
(__VLS_217.slots!).default;
}
(__VLS_197.slots!).default;
}
{
const __VLS_265 = __VLS_intrinsicElements["div"];
const __VLS_266 = __VLS_elementAsFunctionalComponent(__VLS_265);
const __VLS_267 = __VLS_266({ ...{}, class: ("example example-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_265, typeof __VLS_267> & Record<string, unknown>) => void)({ ...{}, class: ("example example-5"), });
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
let __VLS_269!: __VLS_NormalizeEmits<typeof __VLS_268.emit>;
{
const __VLS_270 = __VLS_intrinsicElements["h2"];
const __VLS_271 = __VLS_elementAsFunctionalComponent(__VLS_270);
const __VLS_272 = __VLS_271({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_270, typeof __VLS_272> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272)!;
let __VLS_274!: __VLS_NormalizeEmits<typeof __VLS_273.emit>;
(__VLS_273.slots!).default;
}
{
const __VLS_275 = __VLS_intrinsicElements["p"];
const __VLS_276 = __VLS_elementAsFunctionalComponent(__VLS_275);
const __VLS_277 = __VLS_276({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_275, typeof __VLS_277> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277)!;
let __VLS_279!: __VLS_NormalizeEmits<typeof __VLS_278.emit>;
{
const __VLS_280 = __VLS_intrinsicElements["b"];
const __VLS_281 = __VLS_elementAsFunctionalComponent(__VLS_280);
const __VLS_282 = __VLS_281({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_280, typeof __VLS_282> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282)!;
let __VLS_284!: __VLS_NormalizeEmits<typeof __VLS_283.emit>;
(__VLS_283.slots!).default;
}
(__VLS_278.slots!).default;
}
{
let __VLS_285!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, new __VLS_285({ ...{}, position: ("center"), }));
({} as { tabs: typeof __VLS_285; }).tabs;
({} as { tabs: typeof __VLS_285; }).tabs;
const __VLS_287 = __VLS_286({ ...{}, position: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_285, typeof __VLS_287> & Record<string, unknown>) => void)({ ...{}, position: ("center"), });
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
let __VLS_289!: __VLS_NormalizeEmits<typeof __VLS_288.emit>;
{
const __VLS_290 = __VLS_intrinsicElements["template"];
const __VLS_291 = __VLS_elementAsFunctionalComponent(__VLS_290);
const __VLS_292 = __VLS_291({ ...{}, name: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_290, typeof __VLS_292> & Record<string, unknown>) => void)({ ...{}, name: ("tab1"), });
{
const __VLS_293 = __VLS_intrinsicElements["div"];
const __VLS_294 = __VLS_elementAsFunctionalComponent(__VLS_293);
const __VLS_295 = __VLS_294({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_294));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_293, typeof __VLS_295> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295)!;
let __VLS_297!: __VLS_NormalizeEmits<typeof __VLS_296.emit>;
{
const __VLS_298 = __VLS_intrinsicElements["i"];
const __VLS_299 = __VLS_elementAsFunctionalComponent(__VLS_298);
const __VLS_300 = __VLS_299({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_299));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_298, typeof __VLS_300> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_301 = __VLS_pickFunctionalComponentCtx(__VLS_298, __VLS_300)!;
let __VLS_302!: __VLS_NormalizeEmits<typeof __VLS_301.emit>;
}
(__VLS_296.slots!).default;
}
(__VLS_288.slots!).default;
}
{
const __VLS_303 = __VLS_intrinsicElements["template"];
const __VLS_304 = __VLS_elementAsFunctionalComponent(__VLS_303);
const __VLS_305 = __VLS_304({ ...{}, name: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_304));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_305> & Record<string, unknown>) => void)({ ...{}, name: ("tab2"), });
{
const __VLS_306 = __VLS_intrinsicElements["div"];
const __VLS_307 = __VLS_elementAsFunctionalComponent(__VLS_306);
const __VLS_308 = __VLS_307({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_307));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_306, typeof __VLS_308> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_309 = __VLS_pickFunctionalComponentCtx(__VLS_306, __VLS_308)!;
let __VLS_310!: __VLS_NormalizeEmits<typeof __VLS_309.emit>;
{
const __VLS_311 = __VLS_intrinsicElements["i"];
const __VLS_312 = __VLS_elementAsFunctionalComponent(__VLS_311);
const __VLS_313 = __VLS_312({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_312));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_311, typeof __VLS_313> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_314 = __VLS_pickFunctionalComponentCtx(__VLS_311, __VLS_313)!;
let __VLS_315!: __VLS_NormalizeEmits<typeof __VLS_314.emit>;
}
(__VLS_309.slots!).default;
}
(__VLS_288.slots!).default;
}
{
let __VLS_316!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_317 = __VLS_asFunctionalComponent(__VLS_316, new __VLS_316({ ...{}, titleSlot: ("tab1"), }));
({} as { tab: typeof __VLS_316; }).tab;
({} as { tab: typeof __VLS_316; }).tab;
const __VLS_318 = __VLS_317({ ...{}, titleSlot: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_317));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_316, typeof __VLS_318> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab1"), });
const __VLS_319 = __VLS_pickFunctionalComponentCtx(__VLS_316, __VLS_318)!;
let __VLS_320!: __VLS_NormalizeEmits<typeof __VLS_319.emit>;
{
const __VLS_321 = __VLS_intrinsicElements["h3"];
const __VLS_322 = __VLS_elementAsFunctionalComponent(__VLS_321);
const __VLS_323 = __VLS_322({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_322));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_321, typeof __VLS_323> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_324 = __VLS_pickFunctionalComponentCtx(__VLS_321, __VLS_323)!;
let __VLS_325!: __VLS_NormalizeEmits<typeof __VLS_324.emit>;
(__VLS_324.slots!).default;
}
(__VLS_319.slots!).default;
}
{
let __VLS_326!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_327 = __VLS_asFunctionalComponent(__VLS_326, new __VLS_326({ ...{}, titleSlot: ("tab2"), }));
({} as { tab: typeof __VLS_326; }).tab;
({} as { tab: typeof __VLS_326; }).tab;
const __VLS_328 = __VLS_327({ ...{}, titleSlot: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_327));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_326, typeof __VLS_328> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab2"), });
const __VLS_329 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328)!;
let __VLS_330!: __VLS_NormalizeEmits<typeof __VLS_329.emit>;
{
const __VLS_331 = __VLS_intrinsicElements["h3"];
const __VLS_332 = __VLS_elementAsFunctionalComponent(__VLS_331);
const __VLS_333 = __VLS_332({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_332));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_331, typeof __VLS_333> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_334 = __VLS_pickFunctionalComponentCtx(__VLS_331, __VLS_333)!;
let __VLS_335!: __VLS_NormalizeEmits<typeof __VLS_334.emit>;
(__VLS_334.slots!).default;
}
(__VLS_329.slots!).default;
}
(__VLS_288.slots!).default;
}
(__VLS_268.slots!).default;
}
{
const __VLS_336 = __VLS_intrinsicElements["div"];
const __VLS_337 = __VLS_elementAsFunctionalComponent(__VLS_336);
const __VLS_338 = __VLS_337({ ...{}, class: ("example example-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_337));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_336, typeof __VLS_338> & Record<string, unknown>) => void)({ ...{}, class: ("example example-6"), });
const __VLS_339 = __VLS_pickFunctionalComponentCtx(__VLS_336, __VLS_338)!;
let __VLS_340!: __VLS_NormalizeEmits<typeof __VLS_339.emit>;
{
const __VLS_341 = __VLS_intrinsicElements["h2"];
const __VLS_342 = __VLS_elementAsFunctionalComponent(__VLS_341);
const __VLS_343 = __VLS_342({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_342));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_341, typeof __VLS_343> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_344 = __VLS_pickFunctionalComponentCtx(__VLS_341, __VLS_343)!;
let __VLS_345!: __VLS_NormalizeEmits<typeof __VLS_344.emit>;
(__VLS_344.slots!).default;
}
{
const __VLS_346 = __VLS_intrinsicElements["p"];
const __VLS_347 = __VLS_elementAsFunctionalComponent(__VLS_346);
const __VLS_348 = __VLS_347({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_347));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_346, typeof __VLS_348> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_349 = __VLS_pickFunctionalComponentCtx(__VLS_346, __VLS_348)!;
let __VLS_350!: __VLS_NormalizeEmits<typeof __VLS_349.emit>;
{
const __VLS_351 = __VLS_intrinsicElements["b"];
const __VLS_352 = __VLS_elementAsFunctionalComponent(__VLS_351);
const __VLS_353 = __VLS_352({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_352));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_351, typeof __VLS_353> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_354 = __VLS_pickFunctionalComponentCtx(__VLS_351, __VLS_353)!;
let __VLS_355!: __VLS_NormalizeEmits<typeof __VLS_354.emit>;
(__VLS_354.slots!).default;
}
(__VLS_349.slots!).default;
}
{
let __VLS_356!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_357 = __VLS_asFunctionalComponent(__VLS_356, new __VLS_356({ ...{}, position: ("end"), }));
({} as { tabs: typeof __VLS_356; }).tabs;
({} as { tabs: typeof __VLS_356; }).tabs;
const __VLS_358 = __VLS_357({ ...{}, position: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_357));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_356, typeof __VLS_358> & Record<string, unknown>) => void)({ ...{}, position: ("end"), });
const __VLS_359 = __VLS_pickFunctionalComponentCtx(__VLS_356, __VLS_358)!;
let __VLS_360!: __VLS_NormalizeEmits<typeof __VLS_359.emit>;
{
const __VLS_361 = __VLS_intrinsicElements["template"];
const __VLS_362 = __VLS_elementAsFunctionalComponent(__VLS_361);
const __VLS_363 = __VLS_362({ ...{}, name: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_362));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_361, typeof __VLS_363> & Record<string, unknown>) => void)({ ...{}, name: ("tab1"), });
{
const __VLS_364 = __VLS_intrinsicElements["div"];
const __VLS_365 = __VLS_elementAsFunctionalComponent(__VLS_364);
const __VLS_366 = __VLS_365({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_365));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_364, typeof __VLS_366> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_367 = __VLS_pickFunctionalComponentCtx(__VLS_364, __VLS_366)!;
let __VLS_368!: __VLS_NormalizeEmits<typeof __VLS_367.emit>;
{
const __VLS_369 = __VLS_intrinsicElements["i"];
const __VLS_370 = __VLS_elementAsFunctionalComponent(__VLS_369);
const __VLS_371 = __VLS_370({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_370));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_369, typeof __VLS_371> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_372 = __VLS_pickFunctionalComponentCtx(__VLS_369, __VLS_371)!;
let __VLS_373!: __VLS_NormalizeEmits<typeof __VLS_372.emit>;
}
(__VLS_367.slots!).default;
}
(__VLS_359.slots!).default;
}
{
const __VLS_374 = __VLS_intrinsicElements["template"];
const __VLS_375 = __VLS_elementAsFunctionalComponent(__VLS_374);
const __VLS_376 = __VLS_375({ ...{}, name: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_375));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_374, typeof __VLS_376> & Record<string, unknown>) => void)({ ...{}, name: ("tab2"), });
{
const __VLS_377 = __VLS_intrinsicElements["div"];
const __VLS_378 = __VLS_elementAsFunctionalComponent(__VLS_377);
const __VLS_379 = __VLS_378({ ...{}, class: ("tab-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_378));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_377, typeof __VLS_379> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), });
const __VLS_380 = __VLS_pickFunctionalComponentCtx(__VLS_377, __VLS_379)!;
let __VLS_381!: __VLS_NormalizeEmits<typeof __VLS_380.emit>;
{
const __VLS_382 = __VLS_intrinsicElements["i"];
const __VLS_383 = __VLS_elementAsFunctionalComponent(__VLS_382);
const __VLS_384 = __VLS_383({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_383));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_382, typeof __VLS_384> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_385 = __VLS_pickFunctionalComponentCtx(__VLS_382, __VLS_384)!;
let __VLS_386!: __VLS_NormalizeEmits<typeof __VLS_385.emit>;
}
(__VLS_380.slots!).default;
}
(__VLS_359.slots!).default;
}
{
let __VLS_387!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_388 = __VLS_asFunctionalComponent(__VLS_387, new __VLS_387({ ...{}, titleSlot: ("tab1"), }));
({} as { tab: typeof __VLS_387; }).tab;
({} as { tab: typeof __VLS_387; }).tab;
const __VLS_389 = __VLS_388({ ...{}, titleSlot: ("tab1"), }, ...__VLS_functionalComponentArgsRest(__VLS_388));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_387, typeof __VLS_389> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab1"), });
const __VLS_390 = __VLS_pickFunctionalComponentCtx(__VLS_387, __VLS_389)!;
let __VLS_391!: __VLS_NormalizeEmits<typeof __VLS_390.emit>;
{
const __VLS_392 = __VLS_intrinsicElements["h3"];
const __VLS_393 = __VLS_elementAsFunctionalComponent(__VLS_392);
const __VLS_394 = __VLS_393({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_393));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_392, typeof __VLS_394> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_395 = __VLS_pickFunctionalComponentCtx(__VLS_392, __VLS_394)!;
let __VLS_396!: __VLS_NormalizeEmits<typeof __VLS_395.emit>;
(__VLS_395.slots!).default;
}
(__VLS_390.slots!).default;
}
{
let __VLS_397!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_398 = __VLS_asFunctionalComponent(__VLS_397, new __VLS_397({ ...{}, titleSlot: ("tab2"), }));
({} as { tab: typeof __VLS_397; }).tab;
({} as { tab: typeof __VLS_397; }).tab;
const __VLS_399 = __VLS_398({ ...{}, titleSlot: ("tab2"), }, ...__VLS_functionalComponentArgsRest(__VLS_398));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_397, typeof __VLS_399> & Record<string, unknown>) => void)({ ...{}, titleSlot: ("tab2"), });
const __VLS_400 = __VLS_pickFunctionalComponentCtx(__VLS_397, __VLS_399)!;
let __VLS_401!: __VLS_NormalizeEmits<typeof __VLS_400.emit>;
{
const __VLS_402 = __VLS_intrinsicElements["h3"];
const __VLS_403 = __VLS_elementAsFunctionalComponent(__VLS_402);
const __VLS_404 = __VLS_403({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_403));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_402, typeof __VLS_404> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_405 = __VLS_pickFunctionalComponentCtx(__VLS_402, __VLS_404)!;
let __VLS_406!: __VLS_NormalizeEmits<typeof __VLS_405.emit>;
(__VLS_405.slots!).default;
}
(__VLS_400.slots!).default;
}
(__VLS_359.slots!).default;
}
(__VLS_339.slots!).default;
}
{
const __VLS_407 = __VLS_intrinsicElements["div"];
const __VLS_408 = __VLS_elementAsFunctionalComponent(__VLS_407);
const __VLS_409 = __VLS_408({ ...{}, class: ("example example-7"), }, ...__VLS_functionalComponentArgsRest(__VLS_408));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_407, typeof __VLS_409> & Record<string, unknown>) => void)({ ...{}, class: ("example example-7"), });
const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_407, __VLS_409)!;
let __VLS_411!: __VLS_NormalizeEmits<typeof __VLS_410.emit>;
{
const __VLS_412 = __VLS_intrinsicElements["h2"];
const __VLS_413 = __VLS_elementAsFunctionalComponent(__VLS_412);
const __VLS_414 = __VLS_413({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_413));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_412, typeof __VLS_414> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_415 = __VLS_pickFunctionalComponentCtx(__VLS_412, __VLS_414)!;
let __VLS_416!: __VLS_NormalizeEmits<typeof __VLS_415.emit>;
(__VLS_415.slots!).default;
}
{
const __VLS_417 = __VLS_intrinsicElements["p"];
const __VLS_418 = __VLS_elementAsFunctionalComponent(__VLS_417);
const __VLS_419 = __VLS_418({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_418));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_417, typeof __VLS_419> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_420 = __VLS_pickFunctionalComponentCtx(__VLS_417, __VLS_419)!;
let __VLS_421!: __VLS_NormalizeEmits<typeof __VLS_420.emit>;
(__VLS_420.slots!).default;
}
{
let __VLS_422!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_423 = __VLS_asFunctionalComponent(__VLS_422, new __VLS_422({ ...{}, }));
({} as { tabs: typeof __VLS_422; }).tabs;
({} as { tabs: typeof __VLS_422; }).tabs;
const __VLS_424 = __VLS_423({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_423));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_422, typeof __VLS_424> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_425 = __VLS_pickFunctionalComponentCtx(__VLS_422, __VLS_424)!;
let __VLS_426!: __VLS_NormalizeEmits<typeof __VLS_425.emit>;
for (const [i, idx] of __VLS_getVForSourceType((__VLS_ctx.dynamicTabs)!)) {
{
let __VLS_427!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_428 = __VLS_asFunctionalComponent(__VLS_427, new __VLS_427({ ...{}, key: ((idx)), title: ((`Tab ${i}`)), }));
({} as { tab: typeof __VLS_427; }).tab;
({} as { tab: typeof __VLS_427; }).tab;
const __VLS_429 = __VLS_428({ ...{}, key: ((idx)), title: ((`Tab ${i}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_428));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_427, typeof __VLS_429> & Record<string, unknown>) => void)({ ...{}, key: ((idx)), title: ((`Tab ${i}`)), });
const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_427, __VLS_429)!;
let __VLS_431!: __VLS_NormalizeEmits<typeof __VLS_430.emit>;
{
const __VLS_432 = __VLS_intrinsicElements["h3"];
const __VLS_433 = __VLS_elementAsFunctionalComponent(__VLS_432);
const __VLS_434 = __VLS_433({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_433));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_432, typeof __VLS_434> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_435 = __VLS_pickFunctionalComponentCtx(__VLS_432, __VLS_434)!;
let __VLS_436!: __VLS_NormalizeEmits<typeof __VLS_435.emit>;
(i);
(__VLS_435.slots!).default;
}
(__VLS_430.slots!).default;
}
// @ts-ignore
[message, dynamicTabs,];
}
(__VLS_425.slots!).default;
}
(__VLS_410.slots!).default;
}
{
const __VLS_437 = __VLS_intrinsicElements["div"];
const __VLS_438 = __VLS_elementAsFunctionalComponent(__VLS_437);
const __VLS_439 = __VLS_438({ ...{}, class: ("example example-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_438));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_437, typeof __VLS_439> & Record<string, unknown>) => void)({ ...{}, class: ("example example-8"), });
const __VLS_440 = __VLS_pickFunctionalComponentCtx(__VLS_437, __VLS_439)!;
let __VLS_441!: __VLS_NormalizeEmits<typeof __VLS_440.emit>;
{
const __VLS_442 = __VLS_intrinsicElements["h2"];
const __VLS_443 = __VLS_elementAsFunctionalComponent(__VLS_442);
const __VLS_444 = __VLS_443({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_443));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_442, typeof __VLS_444> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_445 = __VLS_pickFunctionalComponentCtx(__VLS_442, __VLS_444)!;
let __VLS_446!: __VLS_NormalizeEmits<typeof __VLS_445.emit>;
(__VLS_445.slots!).default;
}
{
const __VLS_447 = __VLS_intrinsicElements["p"];
const __VLS_448 = __VLS_elementAsFunctionalComponent(__VLS_447);
const __VLS_449 = __VLS_448({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_448));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_447, typeof __VLS_449> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_450 = __VLS_pickFunctionalComponentCtx(__VLS_447, __VLS_449)!;
let __VLS_451!: __VLS_NormalizeEmits<typeof __VLS_450.emit>;
(__VLS_450.slots!).default;
}
{
let __VLS_452!: 'Tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tabs : 'tabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['tabs'];
const __VLS_453 = __VLS_asFunctionalComponent(__VLS_452, new __VLS_452({ ...{}, }));
({} as { tabs: typeof __VLS_452; }).tabs;
({} as { tabs: typeof __VLS_452; }).tabs;
const __VLS_454 = __VLS_453({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_453));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_452, typeof __VLS_454> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_455 = __VLS_pickFunctionalComponentCtx(__VLS_452, __VLS_454)!;
let __VLS_456!: __VLS_NormalizeEmits<typeof __VLS_455.emit>;
for (const [i, idx] of __VLS_getVForSourceType((__VLS_ctx.dynamicTabs)!)) {
{
const __VLS_457 = __VLS_intrinsicElements["div"];
const __VLS_458 = __VLS_elementAsFunctionalComponent(__VLS_457);
const __VLS_459 = __VLS_458({ ...{}, class: ("tab-title"), name: ((`tab-exp7-${i}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_458));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_457, typeof __VLS_459> & Record<string, unknown>) => void)({ ...{}, class: ("tab-title"), name: ((`tab-exp7-${i}`)), });
const __VLS_460 = __VLS_pickFunctionalComponentCtx(__VLS_457, __VLS_459)!;
let __VLS_461!: __VLS_NormalizeEmits<typeof __VLS_460.emit>;
{
const __VLS_462 = __VLS_intrinsicElements["i"];
const __VLS_463 = __VLS_elementAsFunctionalComponent(__VLS_462);
const __VLS_464 = __VLS_463({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_463));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_462, typeof __VLS_464> & Record<string, unknown>) => void)({ ...{}, class: ("ri-settings-3-fill"), "aria-hidden": ("true"), });
const __VLS_465 = __VLS_pickFunctionalComponentCtx(__VLS_462, __VLS_464)!;
let __VLS_466!: __VLS_NormalizeEmits<typeof __VLS_465.emit>;
}
(i);
(__VLS_460.slots!).default;
}
// @ts-ignore
[dynamicTabs,];
}
for (const [i, idx] of __VLS_getVForSourceType((__VLS_ctx.dynamicTabs)!)) {
{
let __VLS_467!: 'Tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Tab : 'tab' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.tab : (typeof __VLS_resolvedLocalAndGlobalComponents)['tab'];
const __VLS_468 = __VLS_asFunctionalComponent(__VLS_467, new __VLS_467({ ...{}, key: ((idx)), titleSlot: ((`tab-exp7-${i}`)), }));
({} as { tab: typeof __VLS_467; }).tab;
({} as { tab: typeof __VLS_467; }).tab;
const __VLS_469 = __VLS_468({ ...{}, key: ((idx)), titleSlot: ((`tab-exp7-${i}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_468));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_467, typeof __VLS_469> & Record<string, unknown>) => void)({ ...{}, key: ((idx)), titleSlot: ((`tab-exp7-${i}`)), });
const __VLS_470 = __VLS_pickFunctionalComponentCtx(__VLS_467, __VLS_469)!;
let __VLS_471!: __VLS_NormalizeEmits<typeof __VLS_470.emit>;
{
const __VLS_472 = __VLS_intrinsicElements["h3"];
const __VLS_473 = __VLS_elementAsFunctionalComponent(__VLS_472);
const __VLS_474 = __VLS_473({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_473));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_472, typeof __VLS_474> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_475 = __VLS_pickFunctionalComponentCtx(__VLS_472, __VLS_474)!;
let __VLS_476!: __VLS_NormalizeEmits<typeof __VLS_475.emit>;
(i);
(__VLS_475.slots!).default;
}
(__VLS_470.slots!).default;
}
// @ts-ignore
[dynamicTabs,];
}
(__VLS_455.slots!).default;
}
(__VLS_440.slots!).default;
}
(__VLS_28.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
name: "App",
components: { Tabs, Tab },
data: () => {
return { dynamicTabs: [1, 2, 3] };
},
setup() {
return {
message: message as typeof message,
Tabs: Tabs as typeof Tabs,
Tab: Tab as typeof Tab,
};
},
});
return defineComponent({
name: "App",
components: { Tabs, Tab },
data: () => {
return { dynamicTabs: [1, 2, 3] };
},
setup() {
return {};
},
});
})();
