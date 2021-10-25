<template>
    <div class="wrap fenxiao">
        <div class="box box_01">
            <div class="title"></div>
            <div class="dialog">
                <div class="left item">
                    <div class="head">
                        <img :src="head_01" alt="">
                        <span>深圳瑜人瑜伽馆</span>
                    </div>
                    <div class="con">本身我们场馆就比较小，对系统懂得人又很少，市面的系统操作复杂，不适合我们刚开始起步的小型场馆</div>
                </div>
                <div class="right item">
                    <div class="head">
                        <span>郑州梵然瑜伽馆</span>
                        <img :src="head_02" alt="">
                    </div>
                    <div class="con">在选择约课系统的时侯，功能介绍也让我们眼花缭乱，发现市场上的系统85%有功能也不是我们目前需要的</div>
                </div>
                <div class="left item">
                    <div class="head">
                        <img :src="head_03" alt="">
                        <span>广州爱伽瑜伽馆</span>
                    </div>
                    <div class="con">市场价格都在1000-2000左右，瑜伽馆生意本来就不好，场馆又小每年都要支出，能节省一点当然最好</div>
                </div>
                <div class="right item">
                    <div class="head">
                        <span>北京静心瑜伽馆</span>
                        <img :src="head_04" alt="">
                    </div>
                    <div class="con">操作很简单，都可以在自己的手机里完成所有的步骤，既能方便客户，有又方便我们管理，那就太好了</div>
                </div>
            </div>
            <div class="bot">
                <h4>一切都不是问题，我们来帮您!!</h4>
                <span>Everything is not a problem, we will help you!!</span>
            </div>
        </div>

        <div class="box box_02">
            <div class="title"></div>
            <div class="sec">轻松满足场馆约课需求</div>
            <div class="con">
                <div class="items">
                    <div class="item">
                        <img :src="xiao_01" alt="">
                        <strong>管理能力提升</strong>
                        <div class="info">全面降低场馆运营成本，整体提升营业月</div>
                    </div>
                    <div class="item">
                        <img :src="xiao_02" alt="">
                        <strong>拓课快!狠!准!</strong>
                        <div class="info">100RMB=2000潜课裂变式会员增长</div>
                    </div>
                    <div class="item">
                        <img :src="xiao_03" alt="">
                        <strong>操作简单易操作</strong>
                        <div class="info">相比较传统约课管理软件引导体系表情完善，上手更快</div>
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <img :src="xiao_04" alt="">
                        <strong>微信小程序</strong>
                        <div class="info">管理不被终端所束缚随时随地完成办卡签到、销课等操作</div>
                    </div>
                    <div class="item">
                        <img :src="xiao_05" alt="">
                        <strong>数据中心</strong>
                        <div class="info">完善数据收集/呈现分析体系实现经营数字化</div>
                    </div>
                    <div class="item">
                        <img :src="xiao_06" alt="">
                        <strong>轻社交系统</strong>
                        <div class="info">会员的第二个“朋友圈”打造以场馆为中心的场馆社区</div>
                    </div>
                </div>
                <div class="btn" @click="show=true">功能说明</div>
            </div>
        </div>

        <div class="box_03">
            <div class="title"></div>
            <div class="item left">
                <img :src="k_01" alt="">
                <div class="con">
                    <span>极佳便捷的会员管理</span>
                    <div class="info">会员列表清晰直观，配合精准的查找功能，更快速定位会员融合信息展示和功能操作的会员主页程序解决所有会员管理需求</div>
                </div>
            </div>
            <div class="item right">
                <div class="con">
                    <span>业内最强会员管理</span>
                    <div class="info">支持市面上所有类型会员卡，多种会员数据不出错，管理不混乱</div>
                </div>
                <img :src="k_03" alt="">
            </div>
            <div class="item left">
                <img :src="k_02" alt="">
                <div class="con">
                    <span>随时随地想约就约</span>
                    <div class="info">充分利用小程序的即时发送功能，无论会员自主约课，或者是会稽或者教练帮约课，都可以通过一键转发完成，服务体验直线提升</div>
                </div>
            </div>
        </div>

        <div class="box box_04">
            <div class="title"></div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#FF7E00">
                <van-swipe-item>
                    <div class="s_inner">
                        <div class="top">
                            <img :src="box_04_head" alt="">
                            <div class="top_02">
                                <strong>王**</strong>
                                <span>北京风尚瑜伽馆</span>
                            </div>
                        </div>
                        <div class="bottom">1用小鱼管家约课好用不贵，非常满足初创期的小场馆使用，365元超值！</div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="s_inner">
                        <div class="top">
                            <img :src="box_04_head" alt="">
                            <div class="top_02">
                                <strong>王**</strong>
                                <span>北京风尚瑜伽馆</span>
                            </div>
                        </div>
                        <div class="bottom">2用小鱼管家约课好用不贵，非常满足初创期的小场馆使用，365元超值！</div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="s_inner">
                        <div class="top">
                            <img :src="box_04_head" alt="">
                            <div class="top_02">
                                <strong>王**</strong>
                                <span>北京风尚瑜伽馆</span>
                            </div>
                        </div>
                        <div class="bottom">3用小鱼管家约课好用不贵，非常满足初创期的小场馆使用，365元超值！</div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="s_inner">
                        <div class="top">
                            <img :src="box_04_head" alt="">
                            <div class="top_02">
                                <strong>王**</strong>
                                <span>北京风尚瑜伽馆</span>
                            </div>
                        </div>
                        <div class="bottom">4用小鱼管家约课好用不贵，非常满足初创期的小场馆使用，365元超值！</div>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <!-- <div class="note">
                <img :src="yin" alt="">
                <span>恭喜“风尚瑜伽馆”张**开通VIP~</span>
            </div> -->
            <div class="bot">已有<span>5000+</span>场馆购买VIP</div>
        </div>

        <div class="box box_05">
            <div class="title"></div>
            <div class="con">
                <div class="items">
                    <div class="item">
                        <img :src="t_01" alt="">
                        <div class="info">经管沙龙<br>线下免费VIP门票</div>
                        <span class="btn" @click="show_01=true">特权详情 ></span>
                    </div>
                    <div class="item">
                        <img :src="t_02" alt="">
                        <div class="info">瑜老师<br>专属客服服务</div>
                        <span class="btn" @click="show_02=true">特权详情 ></span>
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <img :src="t_03" alt="">
                        <div class="info">瑜伽馆主<br>经营全家桶</div>
                        <span class="btn" @click="show_03=true">特权详情 ></span>
                    </div>
                    <div class="item">
                        <img :src="t_04" alt="">
                        <div class="info">场馆专属<br>约课小程序</div>
                        <span class="btn" @click="show_04=true">特权详情 ></span>
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <img :src="t_05" alt="">
                        <div class="info">瑜老师<br>场馆品牌推荐</div>
                        <span class="btn" @click="show_05=true">特权详情 ></span>
                    </div>
                    <div class="item">
                        <img :src="t_06" alt="">
                        <div class="info">营销拓客<br>功能抢先体验</div>
                        <span class="btn" @click="show_06=true">特权详情 ></span>
                    </div>
                </div>
            </div>
            <div class="sps">如有任何疑问，请点击添加客服老师微信 >></div>
        </div>

        <div class="money">
            <div :class="activeIndex == index ? 'item active':'item'" v-for="(item,index) in moneys" :key="item.price" @click="changeItem(index)">
                <span class="title">{{item.name}}</span>
                <span class="price"><i>￥</i>{{item.price}}元<i>/年</i></span>
                <span class="active">{{item.active}}</span>
                <span class="old">原价<del>{{item.old}}</del>元</span>
            </div>
        </div>

        <div class="depart">支付即代表您同意入下协议《小鱼管家会员协议服务》</div>
        <div class="big_btn" @click="submit">立即开通</div>

        <van-dialog v-model="show" width="90%" :show-confirm-button="false">
            <div class="tanchu_01">
                <div class="block">
                    <img class="close" :src="close" @click="show=false" alt="">
                    <van-swipe class="my-swiper2" indicator-color="FF7E00">
                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_01" alt="">
                                    <span class="active">产品管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_02" alt="">
                                    <span>课程管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_03" alt="">
                                    <span>排课管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_04" alt="">
                                    <span>会员管理</span>
                                </div>
                            </div>
                            <div class="con b_con_01">
                                <div class="wenzi">
                                    <span>产品管理</span>
                                    <div class="info">系统数字化管理，对场馆的团课私教等教务安排看得见，课程业绩算得清，避免私教管理混乱，消课有据可依，业绩有帐可查</div>
                                </div>
                            </div>
                        </van-swipe-item>

                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_02" alt="">
                                    <span class="active">课程管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_03" alt="">
                                    <span>排课管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_04" alt="">
                                    <span>会员管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_05" alt="">
                                    <span>员工管理</span>
                                </div>
                            </div>
                            <div class="con b_con_02">
                                <div class="wenzi">
                                    <span>课程管理</span>
                                    <div class="info">30秒创建团课、支持多种课程类型，教练自动签到结算，团课、私教课尽在掌握。</div>
                                </div>
                            </div>
                        </van-swipe-item>

                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_03" alt="">
                                    <span class="active">排课管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_04" alt="">
                                    <span>会员管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_05" alt="">
                                    <span>员工管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_06" alt="">
                                    <span>场馆管理</span>
                                </div>
                            </div>
                            <div class="con b_con_03">
                                <div class="wenzi">
                                    <span>排课管理</span>
                                    <div class="info">小程序在线自动排课预约，智能管理热门课程，一键复制课程，批量复制课程，智能算法更懂瑜伽经营。</div>
                                </div>
                            </div>
                        </van-swipe-item>

                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_04" alt="">
                                    <span class="active">会员管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_05" alt="">
                                    <span>员工管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_06" alt="">
                                    <span>场馆管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_01" alt="">
                                    <span>产品管理</span>
                                </div>
                            </div>
                            <div class="con b_con_04">
                                <div class="wenzi">
                                    <span>会员管理</span>
                                    <div class="info">精心打造的会员卡管理模块，涵盖行业所有场景，强大的管理功能，灵活的规则设置，满足从单店到品牌连锁的任何需求。</div>
                                </div>
                            </div>
                        </van-swipe-item>

                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_05" alt="">
                                    <span class="active">员工管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_06" alt="">
                                    <span>场馆管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_01" alt="">
                                    <span>产品管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_02" alt="">
                                    <span>课程管理</span>
                                </div>
                            </div>
                            <div class="con b_con_05">
                                <div class="wenzi">
                                    <span>员工管理</span>
                                    <div class="info">瑜老师约课不同岗位员工设置不同的管理权限，系统记录每次操作记录，职责清晰责任到人，从而使得员工管理工作更高效清晰。</div>
                                </div>
                            </div>
                        </van-swipe-item>

                        <van-swipe-item>
                            <div class="titles">
                                <div class="title_item">
                                    <img :src="b_06" alt="">
                                    <span class="active">场馆管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_01" alt="">
                                    <span>产品管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_02" alt="">
                                    <span>课程管理</span>
                                </div>
                                <div class="title_item">
                                    <img :src="b_03" alt="">
                                    <span>排课管理</span>
                                </div>
                            </div>
                            <div class="con b_con_06">
                                <div class="wenzi">
                                    <span>场馆管理</span>
                                    <div class="info">3分钟轻松完成瑜老师约课系统设置，对场馆的整体进行配置，场馆的形象照片，装修设计，服务内容等综合管理。</div>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>

                    <div class="btn_k" v-show="showBtn" @click="submit">立即开通</div>
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_01" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_01=false" alt="">
                <h3 class="title">经管沙龙线下免费VIP门票</h3>
                <span class="biao">全年不定期线下培训课程</span>
                <i class="biao2">（包含但不限于一下课程内容）</i>
                <div class="con">
                    1.瑜伽馆开业前筹备工作，<br>
                    2.如何做好瑜伽馆的开业活动<br>
                    3.瑜伽馆促销活动的展开<br>
                    4.会员跟进与顾客管理<br>
                    5.瑜伽馆卫生管理与急救措施<br>
                    6.员工管理、稳定会籍教练<br>
                    7.瑜伽馆的工作职责及相关工作流程<br>
                    8.瑜伽馆会员服务流程及标准<br>
                    9.瑜伽馆会籍顾问。教销一体的销售技巧<br>
                    10.瑜伽馆如何开好终端联谊会<br>
                    11.瑜伽馆的促销小技巧
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_02" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_02=false" alt="">
                <h3 class="title">瑜老师约课专属客服服务</h3>
                <div class="con">
                    1.专属400售后客服<br>
                    2.技术、顾问、售后专属服务群<br>
                    3.系统在线客服同时支持<br>
                    4.专属销售顾问服务
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_03" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_03=false" alt="">
                <h3 class="title"> 瑜伽馆主经营全家桶</h3>
                <div class="con">
                    1.历经500小时整理瑜伽实用工具<br>
                    2.10个瑜伽馆经营度全息解读<br>
                    3.历经上百家瑜伽馆验证的活动策划方案<br>
                    4.小、中、大型线下活动策划发囊<br>
                    5.上百份瑜伽管理、约课管理、教练管理案例和模板<br>
                    6.预售方案、线下活动、数据分析，瑜伽馆商业模式全方位内参<br>
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_04" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_04=false" alt="">
                <h3 class="title">场馆专属约课小程序</h3>
                <div class="con">
                    1.瑜伽馆专属营销小程序官网<br>
                    2.零成本的宣传工具，一键转发<br>
                    3.更多流程的使用体验<br>
                    4.更多的曝光机会<br>
                    5.会员的打开率更高<br>
                    6.更易留存用户<br>
                    7.更多的二次触达机会<br>
                    8.基于LBS的位置营销，3公里商圈用户可见<br>
                    9.积累自有私欲流量池，便于二次营销
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_05" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_05=false" alt="">
                <h3 class="title">瑜老师场馆品牌推荐</h3>
                <div class="con">
                    1.获得瑜老师约课官方品牌专区推荐<br>
                    2.获得海量流量曝光<br>
                    3.教练 IP曝光塑造<br>
                    4.近千家场馆品牌传播
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="show_06" width="90%" :show-confirm-button="false">
            <div class="inner_box">
                <img class="close" :src="close2" @click="show_06=false" alt="">
                <h3 class="title">营销拓客功能抢先体验</h3>
                <div class="con">
                    1.分享红包功能抢先体验<br>
                    2.礼品拓客功能抢先体验<br>
                    3.锦鲤拓课功能抢先体验<br>
                    4.联盟拓客功能抢先体验<br>
                    5.点击领取红包功能抢先体验<br>
                    6.助力砍价功能抢先体验<br>
                    7.经典拼团功能抢先体验<br>
                    8.阶梯拼团功能抢先体验<br>
                    9.问卷调查功能抢先体验<br>
                    10.全民投票成功抢先体验
                </div>
            </div>
        </van-dialog>

        <van-dialog v-model="showPhone" :before-close="onBeforeClose" :close-on-click-overlay="false" :overlay="true" title="填写您的购买手机号" show-cancel-button>
			<div class="mes" v-show="msgShow">{{phoneMsg}}</div>
            <van-field v-model="phone" name="手机号" label="手机号" placeholder="手机号" />
            <van-field v-model="vcode" center clearable label="短信验证码" placeholder="请输入短信验证码">
                <template #button>
                    <van-button :disabled="false" v-if="!sending" @click="fetchVcode" size="small" type="info">发送验证码</van-button>
                    <van-button :disabled="true" v-else size="small" type="info">还剩 {{seconds}} 秒</van-button>
                </template>
            </van-field>
        </van-dialog>
    </div>
</template>

<script>
const head_01 = require("@/assets/img/head_01.png");
const head_02 = require("@/assets/img/head_02.png");
const head_03 = require("@/assets/img/head_03.png");
const head_04 = require("@/assets/img/head_04.png");
const xiao_01 = require("@/assets/img/xiao_01.png");
const xiao_02 = require("@/assets/img/xiao_02.png");
const xiao_03 = require("@/assets/img/xiao_03.png");
const xiao_04 = require("@/assets/img/xiao_04.png");
const xiao_05 = require("@/assets/img/xiao_05.png");
const xiao_06 = require("@/assets/img/xiao_06.png");
const k_01 = require("@/assets/img/k_01.png");
const k_02 = require("@/assets/img/k_02.png");
const k_03 = require("@/assets/img/k_03.png");
const box_04_head = require("@/assets/img/box_04_head.png");
const bg = require("@/assets/img/bg.png");
const yin = require("@/assets/img/yin.png");
const t_01 = require("@/assets/img/t_01.png");
const t_02 = require("@/assets/img/t_02.png");
const t_03 = require("@/assets/img/t_03.png");
const t_04 = require("@/assets/img/t_04.png");
const t_05 = require("@/assets/img/t_05.png");
const t_06 = require("@/assets/img/t_06.png");
const b_01 = require("@/assets/img/b_01.png");
const b_02 = require("@/assets/img/b_02.png");
const b_03 = require("@/assets/img/b_03.png");
const b_04 = require("@/assets/img/b_04.png");
const b_05 = require("@/assets/img/b_05.png");
const b_06 = require("@/assets/img/b_06.png");
const close = require("@/assets/img/close.png");
const close2 = require("@/assets/img/close_02.png");
const weixinApi = require("@/api/weixin");
const userApi = require("@/api/user");
const wx = require("@/assets/js/jweixin-1.6.0.js");
import { cookie, getQueryParams } from "@/utils/index";

export default {
	data() {
		return {
			head_01,
			head_02,
			head_03,
			head_04,
			xiao_01,
			xiao_02,
			xiao_03,
			xiao_04,
			xiao_05,
			xiao_06,
			k_01,
			k_02,
			k_03,
			box_04_head,
			bg,
			yin,
			t_01,
			t_02,
			t_03,
			t_04,
			t_05,
			t_06,
			b_01,
			b_02,
			b_03,
			b_04,
			b_05,
			b_06,
			close,
			close2,
			active: "a",
			phone: "",
			show: false,
			showPhone: false,
			show_01: false,
			show_02: false,
			show_03: false,
			show_04: false,
			show_05: false,
			show_06: false,
			moneys: [
				{
					name: "开馆必备",
					price: 365,
					active: "限时促销",
					old: 699,
				},
				{
					name: "社群套餐",
					price: 1888,
					active: "限时促销",
					old: 3680,
				},
			],
			activeIndex: 0,
			showBtn: false,
			verification_key:"",
			vcode: "",
			sending: false,
			seconds: 60,
			msgShow: false,
			phoneMsg: ''
		};
	},
	mounted() {
		this.executeWeixin();
		this.fetchUser();
		this.verification_key = cookie.get("verification_key");
	},
	methods: {
		async fetchUser() {
			const QueryParams = getQueryParams(location.href);
			const QueryCode = QueryParams.code;
			const CookieOpenID = cookie.get("user_openid");
			const phone = cookie.get("user_phone");
			// 存在缓存的openid
			if (CookieOpenID && phone) {
				let res = await userApi.wxLogin({
					openid: CookieOpenID,
					phone,
				});
				let data = res.data;
				if (res.code == 200) {
					cookie.set("user_id", data.user_id);
					cookie.set("user_phone", data.phone);
					cookie.set("user_openid", data.openid);
				} else {
					this.resetAuth(QueryCode);
				}
			} else {
				this.resetAuth(QueryCode);
			}
		},
		async resetAuth(QueryCode) {
			if (QueryCode) {
				// code 存在 通过code进行微信认证授权，获取用户的openid
				let res = await weixinApi.getAuth({
					code: QueryCode,
				});

				if (res.code == 200 && !!res.data) {
					const OPENID = res.data.openid;
					const ACCESS_TOKEN = res.data.access_token;
					let resultData = await userApi.wxLogin({
						openid: OPENID,
					});
					let data = resultData.data;
					if (resultData.code == 200 && !!data) {
						cookie.set("user_id", data.user_id);
						cookie.set("user_phone", data.phone);
						cookie.set("user_openid", data.openid);
					} else {
						// 证明用户没有注册过呢，去注册场馆主
						let wxUser = await weixinApi.getUser({
							openid: OPENID,
							access_token: ACCESS_TOKEN,
						});

						if (wxUser.code == 200 && wxUser.data) {
							cookie.set("user_nickname", wxUser.data.nickname);
							cookie.set("user_openid", wxUser.data.openid);
							cookie.set("user_head", wxUser.data.headimgurl);
							this.showBtn = true;
						}
					}
				} else {
					// http://localhost:8080/?code=1&type=app#/
					if (QueryCode == 1) {
						console.log("测试中");
						let resultData = await userApi.wxLogin({
							openid: "oz3jNt3hGT_qqdUWFCnxn7_gzjWA4",
						});

						let data = resultData.data;
						if (resultData.code == 200) {
							cookie.set("user_id", data.user_id);
							cookie.set("user_phone", data.phone);
							cookie.set("user_openid", data.openid);
						} else {
							this.showBtn = true;
							// this.showPhone = true;
							// 证明用户没有注册过呢，去注册场馆主
						}
					} else {
						// this.showBtn = false;
						console.log("未知错误");
					}
				}
			} else {
				let res = await weixinApi.getCode({
					callback: window.location.href,
				});
				if (res.code == 200 && !!res.data) {
					window.location.href = res.data;
				} else {
					console.log(res);
				}
			}
		},
		async executeWeixin() {
			let url = location.href.split("#")[0];
			let res = await weixinApi.jssdk_config({
				url: url,
			});
			if (res.code == 200) {
				let config = res.data;
				// 微信JSSDK异常处理
				wx.error(function (e) {
					console.log(e);
				});
				wx.config({
					...config,
					debug: false,
				});

				wx.ready(function () {
					/*
					wx.updateAppMessageShareData({
						title: "带您赚钱的约课系统", // 分享标题
						desc: "运行稳定不卡顿，设计简洁上手快，统计精准不出错，功能全面效率高", // 分享描述
						link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgurl: "http://assets.yoga.com/storage/venues/93/2a1a4cc02e0c0d6c57175be57b93c4.jpg",
						success: function (res) {
							console.log(res);
						},
						fail(error) {
							console.log(error);
						},
					});
					wx.updateTimelineShareData({
						title: "带您赚钱的约课系统",
						link: location.href,
						success: function (res) {
							console.log(res);
						},
					});
					*/
				});
			}
		},
		changeItem(index) {
			this.activeIndex = index;
		},
		
		submit() {
			let admin_user_id = cookie.get("user_id");
			let admin_phone = cookie.get("user_phone");
			if (admin_user_id && admin_phone) {
				this.$toast("已经购买过了");
				return;
			}

			let phone = this.phone;
			if (!phone) {
				// this.$toast("需要填写手机号");
				this.showPhone = true;
				return;
			}

			let type = 1; // 1是特价款，2是牛逼款
			let money = 0;
			if (this.activeIndex == 0) {
				type = 1;
				money = this.moneys[0].price;
			} else {
				type = 2;
				money = this.moneys[1].price;
			}

			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				//再判断一下是否在小程序里
				wx.miniProgram.getEnv(res => {
					console.info("res", res);
					if (res.miniprogram) {
						wx.miniProgram.navigateTo({
							url: `/pages/wePay/wePay?money=${money}&type=${type}`,
						});
					} else {
						this.payFunc(money, type, phone);
					}
				});
			} else {
				this.$toast("请在确保使用微信浏览");
			}
		},
		async payFunc(money, type, phone) {
			let that = this;
			let openId = cookie.get("user_openid");
			let nickname = cookie.get("user_nickname");
			let avatar = cookie.get("user_head");
			money = 0.01;
			if (!openId) {
				this.$toast("获取用户信息失败");
				return;
			}
			let res = await weixinApi.pay({
				openid: openId,
				total_fee: Math.ceil(money * 100),
			});

			money = 365;
			if (res.code == 200) {
				wx.ready(async () => {
					let data = res.data;
					let options = data.options;

					/**
					 * extra {out_trade_no, total_fee, prepayid}
					 * out_trade_no 商户自己的订单号
					 * total_fee 支付金额
					 * prepayid 微信预支付ID
					 */
					let extra = data.extra;
					let sell_type_name =
						type == 1 ? "购买场馆主-365元" : "购买场馆主-1888元";

					options.success = async res => {
						if (res.errMsg == "chooseWXPay:ok") {
							that.$notify({
								message: "支付成功",
								color: "#ffffff",
								background: "#00B76F",
							});

							// 支付成功后将数据插入到表中
							let result = await weixinApi.payOk({
								...extra,
								name: "场馆主购买",
								sell_type_name: sell_type_name,
								sell_type: 5,
								openid: openId,
								pay_type: 2, // 支付的方式 1：现金 2：微信 3：支付宝 4：刷卡
								amount: money,
								phone,
								nickname,
								avatar,
							});

							if (result.code == 200) {
								this.showBtn = false;
								that.$notify({
									message: "正在跳转管理中心页面...",
									color: "#ffffff",
									background: "#00B76F",
								});
								setTimeout(() => {
									window.location.href =
										"http://h5.yogaguanjia.com";
								}, 2000);
							}
						}
					};

					// 取消支付的操作
					options.cancel = function () {
						that.$notify({
							message: "已经取消",
							type: "danger",
						});
					};
					// 支付失败的处理
					options.fail = function () {
						that.$notify({
							message: "支付失败",
							type: "danger",
						});
					};
					// 传入参数，发起JSAPI支付
					wx.chooseWXPay(options);
				});
			}
		},
		async fetchVcode() {
			const phone = this.phone;
			if (!phone) {
				this.msgShow = true;
				this.phoneMsg = "请填写手机号";
				return;
			}
			let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
			
			if (!reg_tel.test(phone)) {
				this.msgShow = true;
				this.phone = "";
				this.phoneMsg = "请填写正确的手机号";
				return;
			}

			this.startReadSeconds();
			let res = await weixinApi.getVcode({
				phone: phone,
			});

			if (res.code == 200) {
				this.msgShow = false;
				this.phoneMsg = false;
				cookie.set("verification_key", res.data.verification_key);
				this.verification_key = res.data.verification_key;
			}
		},
		async onBeforeClose(action, done) {
			if (action === "confirm") {
				let phone = this.phone;
				let reg_tel =/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				if (!phone) {
					this.msgShow = true;
					this.phoneMsg = "请填写您的手机号";
					return done(false);
				}

				if (!reg_tel.test(phone)) {
					this.msgShow = true;
					this.phone = "";
					this.phoneMsg = "请填写正确的手机号";
					return done(false);
				}

				const vcode = this.vcode;
				const verification_key = this.verification_key;

				let res = await weixinApi.testPhone({
					phone,
					vcode,
					verification_key,
				});

				if (res.code == 200) {
					this.msgShow = false;
					this.phoneMsg = false;
					return done();
				} else {
					this.msgShow = true;
					this.phoneMsg = res.msg;
					this.phone = "";
					this.$toast(res.msg);
				}
				
			} else {
				return done();
			}
		},

		startReadSeconds() {
			this.sending = true;
			var timer = setInterval(() => {
				if (this.seconds == 0) {
					clearInterval(timer);
					timer = null;
					this.sending = false;
					this.seconds = 60;
					return;
				}
				this.seconds = this.seconds - 1;
			}, 1000);
		},
	},
};
</script>

<style>
.fenxiao .van-swipe__indicator {
	background-color: #ccc;
	width: 10px;
	height: 10px;
}
.fenxiao .van-swipe__indicator.van-swipe__indicator--active {
	background-color: #ff7e00 !important;
}
.fenxiao .van-tabs .van-tabs__wrap {
	height: 100px;
}
.fenxiao .van-tabs .van-tabs__wrap .van-tabs__line {
	left: 0;
}
.fenxiao .van-dialog {
	top: 50%;
}
.block .van-swipe-item {
	padding-bottom: 20px;
}
.fenxiao .block .van-swipe__indicator.van-swipe__indicator--active {
	background-color: #ff7e00 !important;
	width: 10px;
}
.mes{
	background-color: #ff7e00;
	font-size: 12px;
	color:#fff;
	width:100%;
	padding: 5px 0;
	text-align: center;
}
</style>
<style lang="less" scoped>
.inner_box {
	min-height: 50vh;
	width: 100%;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-image: url("../../assets/img/z_bg.png");
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	padding: 30px 20px 50px;
	box-sizing: border-box;
	.close {
		width: 20px;
		height: 20px;
		position: absolute;
		right: 5px;
		top: 5px;
	}
	.title {
		margin: 0;
		padding: 0;
		line-height: 60px;
		font-size: 24px;
		color: #fff;
		margin-bottom: 10px;
	}
	.biao {
		font-size: 18px;
		color: #fff;
		margin-bottom: 2px;
	}
	.biao2 {
		font-size: 14px;
		color: #fff;
		margin-bottom: 20px;
		font-style: normal;
	}
	.con {
		padding: 20px;
		box-sizing: border-box;
		background-color: #f5f5f5;
		color: #591c01;
		font-size: 14px;
		border-radius: 15px;
		line-height: 24px;
	}
}
.tanchu_01 {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	.block {
		background-color: #fff;
		height: 100%;
		width: 100%;
		padding: 25px 15px 15px;
		box-sizing: border-box;
		border-radius: 15px;
		.btn_k {
			width: 100%;
			height: 40px;
			background-color: #ff7e00;
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			color: #fff;
			border-radius: 10px;
			margin: 10px auto;
		}
	}
	.titles {
		display: flex;
		.title_item {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			img {
				width: 60px;
				height: 60px;
				margin-bottom: 5px;
			}
			span {
				color: #333;
				font-size: 15px;
				&.active {
					font-weight: bold;
					color: #000;
				}
			}
		}
	}
	.con {
		margin-top: 15px;
		padding-top: 44vh;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		.wenzi {
			padding: 20px;
			span {
				font-size: 14px;
				color: #000;
			}
			.info {
				color: #666;
				font-size: 12px;
			}
		}
	}
	.b_con_01 {
		background-image: url("../../assets/img/b_11.png");
	}
	.b_con_02 {
		background-image: url("../../assets/img/b_22.png");
	}
	.b_con_03 {
		background-image: url("../../assets/img/b_33.png");
	}
	.b_con_04 {
		background-image: url("../../assets/img/b_44.png");
	}
	.b_con_05 {
		background-image: url("../../assets/img/b_55.png");
	}
	.b_con_06 {
		background-image: url("../../assets/img/b_66.png");
	}
	.close {
		width: 20px;
		height: 20px;
		position: absolute;
		right: 5px;
		top: 5px;
		background-color: #fff;
	}
}
.big_btn {
	width: 80%;
	height: 60px;
	line-height: 60px;
	color: #fff;
	font-size: 20px;
	background-color: #ff7e00;
	border-radius: 30px;
	margin: 20px auto;
	text-align: center;
}
.depart {
	padding: 15px 0;
	font-size: 12px;
	color: #333;
	text-align: center;
}
.money {
	display: flex;
	justify-content: space-between;
	margin: 30px 0;
	.item {
		flex: 1;
		display: flex;
		flex-direction: column;
		border: 2px solid #fff;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
		border-radius: 20px;
		align-items: center;
		padding: 30px 0;
		box-sizing: border-box;
		font-size: 16px;
		margin: 0 10px;
		&.active {
			border: 2px solid #ff7e00;
		}
		.title {
			font-size: 18px;
		}
		.price {
			color: #ff7e00;
			font-size: 24px;
			font-weight: bold;
			margin: 10px 0;
			i {
				font-style: normal;
				font-size: 14px;
			}
		}
		.active {
			margin-bottom: 10px;
			color: #666666;
			font-size: 14px;
		}
	}
}
.fenxiao {
	width: 100%;
	// height: 100vh;
	background-image: url("../../assets/img/top.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-color: #f5f5f5;
	padding: 50vh 15px 15px;
	box-sizing: border-box;
}
.box {
	width: 100%;
	padding: 10px 15px 20px;
	box-sizing: border-box;
	border-radius: 10px;
	box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	margin-bottom: 15px;
	.title {
		height: 70px;
		width: 100%;
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}
}

.box_01 {
	.title {
		background-image: url("../../assets/img/title_01.png");
	}
	.bot {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		color: #c5c5c5;
		h4 {
			color: #ff7e00;
			font-weight: normal;
			font-size: 18px;
			margin: 0;
			padding: 0;
			margin-bottom: 2px;
		}
		span {
			font-size: 12px;
		}
	}
}

.box_02 {
	.title {
		background-image: url("../../assets/img/title_02.png");
	}
	.sec {
		text-align: center;
		line-height: 30px;
		color: #666;
		font-size: 14px;
	}
	.con {
		display: flex;
		align-items: center;
		flex-direction: column;
		color: #666;
		padding-top: 25px;
		.items {
			display: flex;
			width: 100%;
			justify-content: space-between;
			margin-bottom: 30px;
			.item {
				width: 32%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				img {
					width: 60px;
				}
				strong {
					font-size: 14px;
					color: #000;
					margin: 10px 0;
				}
				.info {
					font-size: 12px;
					text-align: center;
				}
			}
		}
	}
	.btn {
		width: 40%;
		height: 50px;
		line-height: 50px;
		color: #fff;
		background-color: #ff7e00;
		font-size: 18px;
		text-align: center;
		border-radius: 25px;
		margin-bottom: 15px;
	}
}

.box_03 {
	background-color: #ff7e00;
	padding: 23px 15px 25px;
	margin: 0 -15px;
	.title {
		height: 70px;
		width: 100%;
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url("../../assets/img/title_03.png");
	}
	.item {
		margin-bottom: 15px;
		display: flex;
		background-color: #fff;
		border-radius: 15px;
		align-items: center;
		img {
			width: 150px;
			height: 150px;
		}
		.con {
			width: 70%;
			padding: 5px 10px 5px 15px;
			box-sizing: border-box;

			span {
				font-size: 15px;
				color: #000;
				line-height: 24px;
			}
			.info {
				font-size: 12px;
				color: #666666;
			}
		}
	}
	.left {
		border-top-left-radius: 75px;
		border-bottom-left-radius: 75px;
	}
	.right {
		border-top-right-radius: 75px;
		border-bottom-right-radius: 75px;
	}
}

.box_04 {
	margin-top: 15px;
	.title {
		background-image: url("../../assets/img/title_04.png");
	}

	.s_inner {
		width: 100%;
		height: 190px;
		box-sizing: border-box;
		padding: 15px;
		display: flex;
		flex-direction: column;
		background-image: url("../../assets/img/bg.png");
		background-repeat: no-repeat;
		background-size: 100% 150px;
		.top {
			display: flex;
			align-items: center;
			margin-bottom: 5px;
			img {
				width: 50px;
				height: 50px;
				margin-right: 15px;
			}
			strong {
				font-weight: normal;
				color: #000;
				font-size: 14px;
				display: block;
			}
			span {
				color: #999999;
				font-size: 12px;
			}
		}

		.bottom {
			padding-left: 65px;
			font-size: 14px;
			color: #333;
		}
	}
	.bot {
		line-height: 50px;
		margin-bottom: 10px;
		font-size: 14px;
		color: #666666;
		text-align: center;
		span {
			color: #ff7e00;
		}
	}
}

.box_05 {
	.title {
		background-image: url("../../assets/img/title_05.png");
	}
	.con {
		padding: 15px 0;
		display: flex;
		flex-direction: column;
		.items {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
			.item {
				display: flex;
				font-size: 14px;
				flex-direction: column;
				padding: 20px 0;
				box-sizing: border-box;
				flex: 1;
				margin: 0 5px;
				background-color: rgba(255, 126, 0, 0.3);
				justify-content: center;
				align-items: center;
				border-radius: 8px;
				.info {
					margin: 12px 0;
					color: #333333;
					text-align: center;
				}
				img {
					width: 60px;
					height: 60px;
				}
				.btn {
					display: inline-block;
					padding: 3px 12px;
					color: #ff7e00;
					border: 1px solid #ff7e00;
					font-size: 12px;
					border-radius: 10px;
				}
			}
		}
	}
	.sps {
		font-size: 12px;
		color: #989898;
		text-align: center;
	}
}

.dialog {
	display: flex;
	flex-direction: column;
	font-size: 14px;
	.item {
		margin-bottom: 15px;
		.con {
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			background-color: rgba(255, 165, 134, 0.2);
			color: #751e00;
			border-radius: 10px;
			line-height: 24px;
		}
	}
	.left {
		display: flex;
		flex-direction: column;
		.head {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 16px;
			margin-bottom: 10px;
			img {
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
	}

	.right {
		display: flex;
		flex-direction: column;
		.head {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 16px;
			margin-bottom: 10px;
			img {
				width: 30px;
				height: 30px;
				margin-left: 10px;
			}
		}
	}
}
</style>
