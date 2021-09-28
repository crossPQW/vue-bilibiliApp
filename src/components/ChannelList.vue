<template>
<div>
  <div class="channel-list" :style="{height: `${height}px`}">
      <div v-for="item in channels" :key="item.id" class="item" :style="{
          width: `${100/columns}%`
        }">
          <channel @active="$emit('active', item.id)" :isActive="item.id === activeId" :data="item" />
      </div>
  </div>
  <div class="collapse" @click="isExpand = !isExpand">
      <span>{{isExpand? "折叠":"展开"}}</span>
      <Icon :type="isExpand ? 'arrowUp': 'arrowDown'" extraClass="icon" />
  </div>
</div>
</template>

<script>
import Channel from "./Channel.vue"
import ChannelServ from "../services/channel"
import Icon from "./Icon"
export default {
    components:{
        Channel,
        Icon
    },
    data(){
        return {
            channels: [],
            isExpand: true,
        };
    },
    props:{
        activeId:{
            type: Number,
            required: true,
        },
        columns:{
            type: Number,
            default: 2,
        }
    },

    computed:{
        height(){
            var row = 3;
            if (this.isExpand) {
                row = Math.ceil(this.channels.length / this.columns);
            }
            return row * 40;
        }
    },    

    async created(){
        var datas = await ChannelServ.getChannels();
        this.channels = datas.filter((item) => item.name !== "热门");
    },
};
</script>

<style scoped>
.channel-list{
    overflow: hidden;
    transition: .3s;
}

.item{
    float: left;
    width: 50%;
}

.collapse {
    clear: both;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #999;
    font-size: 14px;
    border: 1px solid #e7e7e7;
}

.icon{
    font-size: 12px;
    line-height: 12px;
}
</style>>