<template>
      <div class="aside">
        <ChannelSearch />
            <TitleMenu :isActive="activeId === 100" @active="activeId=100">
                <template v-slot:title>
                发现频道
                </template>
                <template v-slot:icon>
                >
                </template>
            </TitleMenu>
        <ChannelList
        @active="activeId = $event" :activeId="activeId" :columns="2"
        />
    </div>
</template>

<script>
import ChannelList from './ChannelList';
import TitleMenu from './TitleMenu'
import ChannelSearch from "./ChannelSearch"

export default {
  components:{
    TitleMenu,
    ChannelList,
    ChannelSearch,
  },
  data(){
    return{
      activeId: 100,
    };
  },
};
</script>

<style scoped>
.aside{
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>