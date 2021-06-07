<template>
  <div id="red-pack">
    <div class="top">
      <div>累计红包总数:<span>{{totalMoney}}</span>元</div>
    </div>
    <div class="tables">
      <el-table
        header-align="center"
        :data="paging[nowPage-1]"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="remarks"
          label="来源/用途"
          width="220">
          <template slot-scope="scope">
            {{scope.row.remarks}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="红包变化"
          width="250">
          <template slot-scope="scope">+{{scope.row.redEnvelope}}</template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="日期">
          <template slot-scope="scope">{{cut(scope.row.createTime)}}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ye">
      <el-pagination
        @current-change="change"
        background
        :pager-count="countPage"
        layout="prev, pager, next"
        :total="(paging.length-1)*10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getRedPack} from "../../../network/myMoney/myMoney";

  export default {
    name: "RedPack",
    data() {
      return{
        redPack:[],
        paging:[],
        totalMoney: 0,
        nowPage: 1,
        countPage: 5
      }
    },
    created() {
      this.getRedPack()
    },
    computed: {

    },
    methods: {
      getRedPack(){
        getRedPack().then(res=>{
          this.redPack = res.V.rows
          for(let i = 0; i<this.redPack.length; i++){
            this.totalMoney+=this.redPack[i].redEnvelope
          }
          this.paging = this.arrayToDimension(this.redPack,3)
        })
      },
      arrayToDimension(array, num){
        if (num == null) {
          num = 5
        }
        let arr = [];
        for (let i = 0; i <= array.length; i += num) {
          arr.push(array.slice(i, i + num));
        }
        return arr
      },
      cut(str){
        return str.split('.')[0]
      },
      change(val) {
        this.nowPage = val
      },
    }
  }
</script>

<style scoped>
  #red-pack{
    background: #fff;
  }
  .top{
    width: 100%;
    height: 100px;
    display: flex;
    border-radius: 2px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: url('../../../assets/img/backgroundImg/achievement.png'),no-repeat;
    background-size: 100% 100%;
    font-size: 18px;
    color: #90400b;
  }

  .top span{
    font-size: 50px;
  }

  .ye{
    display: flex;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
</style>
<style>
  .el-table .cell{

}
</style>