<template>
  <div>
  <el-table border id="car" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column align="center" type="selection" width="55"></el-table-column>
    <el-table-column align="center" label="序号" width="70">
      <template slot-scope="scope">{{ scope.$index+1 }}</template>
    </el-table-column>
    <el-table-column align="left" prop="" label="商品详情" width="420">
      <template slot-scope="scope">
        <div class="shop-infos">
          <div>
            <img :src="url+scope.row.item.bigPicUrl">
            <span>{{scope.row.item.kcname}}</span>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="address" label="金额/元" show-overflow-tooltip>
      <template slot-scope="scope">
        <div class="money">¥&nbsp;{{scope.row.item.disPrice}}</div>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
</template>

<script>
  import {getShopCars} from "../../../network/shopCar/shopCar";

  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        url: 'http://360xkw.com/',
      }
    },
    created() {
      this.getShopCars("abc")
    },
    methods: {
      getShopCars(abd){
        getShopCars(abd).then(res => {
          console.log(res)
          // for(let i=0; i<res.V.length; i++){
          //   this.tableData[i] = res.V[i].item
          // }
          this.tableData = res.V
          console.log(this.tableData);
        })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>
  #shop-car {
    font-size: 50px !important;
  }

  #car{
    font-size: 20px;
    text-align: center;
  }

  .shop-infos img{
    width: 140px;
    height: 132px;
    margin-right: 20px;
    margin-left: 10px;
  }

  .money{
    font-size: 20px;
    color: #ff403a;
    font-weight: bold;
  }

</style>