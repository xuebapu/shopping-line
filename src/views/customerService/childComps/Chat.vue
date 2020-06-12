<template>
  <div class="chat">
    <scroll class="content">
      <div>
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
      </div>
    </scroll>
    <div class="sent">
      <div>
        <div>我想</div>
        <div>
          <row-scorll class="rowcontent">
            <div class="tell">
              <ul>
                <li><a>服务评价</a></li>
                <li><a>去吧00</a></li>
                <li><a>猜你喜欢</a></li>
                <li><a>猜你喜欢</a></li>
                <li><a>去吧0000</a></li>
                <li><a>猜你喜欢</a></li>
                <li><a>猜你喜欢</a></li>
                <li><a>猜你喜欢</a></li>
              </ul>
            </div>
          </row-scorll>
        </div>
      </div>

      <div>
        <div><img src="~assets/img/tabBar/customerService/yuyin.svg"></div>
        <div><input type="text" /><img src="~assets/img/tabBar/customerService/biaoqing.svg"></div>
        <div><img src="~assets/img/tabBar/customerService/jia.svg"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scorll/Scroll";
  import RowScorll from "components/common/rowScorll/RowScorll";
    export default {
      name: "Chat",
      components:{
        Scroll,
        RowScorll,
      },
      created() {
      },
      methods:{
      },
    }
</script>

<style scoped>
  .chat{background:rgba(0, 0, 0, 0.04); height: calc(100% - 44px); width: 100%}
  .content{ height: calc(100% - 80px);overflow: hidden;}

  .sent{ height: 80px; position: fixed; left: 0px; right: 0px; bottom: 0px; background:#F6F8F9;}
  /*上面一层的div 我想那层*/
  .sent>div:nth-child(1){display: flex; font-size: 13px;height: 40px;}
  .sent>div:nth-child(1)>div:nth-child(1){width: 50px;text-align:center;line-height: 40px;}
  .sent>div:nth-child(1)>div:nth-child(2){ width: calc(100% - 50px)}
  .rowcontent{ width: 100%;overflow: hidden;}
  .tell{ height: 40px; line-height: 40px; margin-top: 7px;}
  .tell>ul{ display: flex; list-style: none; line-height: 25px; text-align: center; font-size: 13px; height: 25px}
  .tell>ul>li{border-radius: 15px;background:white; margin-left: 2%;}
  .tell>ul>li>a{padding: 10px;}

  /*下面发消息的界面 */
  .sent>div:nth-child(2){display: flex;text-align: center; line-height: 40px; height: 40px;}
  .sent>div:nth-child(2)>div{ align-self: center; height: 35px;}
  .sent>div:nth-child(2)>div:nth-child(1){flex: 1.5}
  .sent>div:nth-child(2)>div:nth-child(1)>img{width: 30px;height: 30px;}
  .sent>div:nth-child(2)>div:nth-child(2){flex: 7; height: 45px;}
  .sent>div:nth-child(2)>div:nth-child(2)>input{height: 35px;text-align: center;line-height: 30px; width:100%; border-radius: 15px; border: none;}
  .sent>div:nth-child(2)>div:nth-child(2)>img{position: fixed; right:18%; width: 26px; height: 26px;bottom: 8px}
  .sent>div:nth-child(2)>div:nth-child(3){flex: 1.5}
  .sent>div:nth-child(2)>div:nth-child(3)>img{width: 35px;height: 35px;}
</style>
