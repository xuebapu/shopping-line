<template>
  <div class="detail">
<!--    <div>{{id}}</div>-->
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
        </ul>
    </scroll>

    <detail-botton @addCart="addToCart"></detail-botton>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponent/DetailNavBar";
  import DetailBotton from "./childComponent/DetailBotton";

  import Scroll from "components/common/scorll/Scroll";
    export default {
      name: "Datils",
      components:{
        DetailNavBar,
        DetailBotton,

        Scroll,
      },
      data(){
        return{
         iid:null,
        }
      },
      created() {
        this.iid = this.$route.params.id
      },
      methods:{
        addToCart(){
          //获取购物车需要展示的信息
          const product ={};
          product.iid = this.iid;
          product.count = 1;
          //添加购物车
          this.$store.dispatch('addCart',product)

          //简单检验
          console.log(this.$store.state.cartList[0].count)
        },
      },

    }
</script>

<style scoped>
  .detail{
    height: 100vh;
    background-color: white;
    position: relative;
    z-index: 1;
  }
  .content{
    background-color: white;
    height:calc(100% - 44px - 49px);
  }
</style>
