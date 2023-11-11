<!-- https://github.com/zafaralam/vue3-tabs -->
<script lang="ts">

import { defineComponent } from "vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";

export default defineComponent({
  name: "App",
  components: { Tabs, Tab },
  data: () => {
    return { dynamicTabs: [1, 2, 3] };
  },
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';

const message = ref(null); // リアクティブな値を定義
fetch('api/message')
  .then(response => response.json()) // レスポンスをJSONとして解析
  .then(data => {
    message.value = data.text;

    // AshinaPoc APIに渡すJSONデータ
    const jsonData = {
      videoAnalytics: {
        userId: "testUserId"
      }
    };
    
  // スクリプトの内容を動的に生成
  const scriptContent = `
    {
      "videoAnalytics": {
        "userId": "${jsonData.videoAnalytics.userId}"
      }
    }
  `;

  // 新しいスクリプト要素を作成し、中にJSONデータを埋め込んで追加
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.defer = true;
  script.src = 'https://player-api.p.uliza.jp/v1/players/default-player/nssys/AshinaPoc?type=normal&name=BBB';
  script.async = true;
  script.textContent = `${scriptContent}`; // デバッグ用にログ出力

  // スクリプトをHTMLに追加
  const targetElement = document.getElementById('abcde');
  if (targetElement) {
    targetElement.appendChild(script);
  }

  // APIへのリクエストはここで行うか、もしくはスクリプト内で行う
});

</script>


<template>
  <h1>This is a <b>Tabs</b> example project with Vue 3 and Typescript</h1>
  <div>sbcd</div> <!-- messageを表示 -->
  <div id="abcde"></div>
  <div>{{ message }}</div> <!-- messageを表示 -->
  <div class="tabs-example">
    <div class="example example-1">
      <h2>Example 1</h2>
      <p>
        This is the most basic way to use the Tabs component. The tab list will
        be show at the top and the names of the tabs are derived from the title
        prop of each Tab component.
      </p>
      <tabs class="Tab-exp1">
        <tab title="Tab 1">
          <h3>This is Tab 1</h3>
        </tab>
        <tab title="Tab 2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-2">
      <h2>Example 2</h2>
      <p>
        This example shows that the tab list items can be fully customized with
        there own icons if required.
      </p>
      <tabs>
        <template name="config">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Config
          </div>
        </template>
        <tab title-slot="config">
          <h3>This is a config tab</h3>
        </tab>
        <tab title="Tab 2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-3">
      <h2>Example 3</h2>
      <p>
        This example shows that the tab list items can be displayed at the
        bottom using the <b>reverse</b> prop on the Tabs component.
      </p>
      <tabs reverse>
        <template name="tab1">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Config
          </div>
        </template>
        <template name="tab2">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Tab 2
          </div>
        </template>
        <tab title-slot="tab1">
          <h3>This is a config tab</h3>
        </tab>
        <tab title-slot="tab2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-4">
      <h2>Example 4</h2>
      <p>
        This example shows that the tab list can be shown vertically by using
        the <b>direction</b> prop on the Tabs component.
      </p>
      <tabs direction="vertical">
        <template name="tab1">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Config
          </div>
        </template>
        <template name="tab2">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Tab 2
          </div>
        </template>
        <tab title-slot="tab1">
          <h3>This is a config tab</h3>
        </tab>
        <tab title-slot="tab2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-5">
      <h2>Example 5</h2>
      <p>
        This example shows that the tab list can be shown in the center or end
        by using the <b>position</b> prop on the Tabs component.
      </p>
      <tabs position="center">
        <template name="tab1">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Config
          </div>
        </template>
        <template name="tab2">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Tab 2
          </div>
        </template>
        <tab title-slot="tab1">
          <h3>This is a config tab</h3>
        </tab>
        <tab title-slot="tab2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-6">
      <h2>Example 6</h2>
      <p>
        This example shows that the tab list can be shown in the center or end
        by using the <b>position</b> prop on the Tabs component.
      </p>
      <tabs position="end">
        <template name="tab1">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Config
          </div>
        </template>
        <template name="tab2">
          <div class="tab-title">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Tab 2
          </div>
        </template>
        <tab title-slot="tab1">
          <h3>This is a config tab</h3>
        </tab>
        <tab title-slot="tab2">
          <h3>This is Tab 2</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-7">
      <h2>Example 7</h2>
      <p>
        This example shows a list of tabs generated from an array. This can be
        used to dynamically generate the tabs
      </p>
      <tabs>
        <tab v-for="(i, idx) in dynamicTabs" :key="idx" :title="`Tab ${i}`">
          <h3>This is Tab {{ i }}</h3>
        </tab>
      </tabs>
    </div>

    <div class="example example-8">
      <h2>Example 8</h2>
      <p>
        This example shows a list of tabs generated from an array. This can be
        used to dynamically generate the tabs
      </p>
      <tabs>
        <template v-for="(i, idx) in dynamicTabs" :key="idx">
          <div class="tab-title" :name="`tab-exp7-${i}`">
            <i class="ri-settings-3-fill" aria-hidden="true"></i>
            Tab {{ i }}
          </div>
        </template>
        <tab
          v-for="(i, idx) in dynamicTabs"
          :key="idx"
          :title-slot="`tab-exp7-${i}`"
        >
          <h3>This is Tab {{ i }}</h3>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 4px;
}

.tabs-example {
  display: grid;
  place-items: center;
  text-align: left;

  .example {
    width: 80%;
    padding: 0 1rem;
    border-radius: 8px;
    background: #fdfdff;
    border: 2px solid #e7e7f5;
    margin-block-end: 1rem;
  }
}
</style>