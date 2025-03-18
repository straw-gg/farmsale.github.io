const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "static/js/SearchResults.DxrE_s2y.js",
      "static/js/vendor.C8p9HwzL.js",
      "static/css/vendor.5v6GsCxV.css",
      "static/css/SearchResults.QsWefDEh.css",
      "static/js/ProductDetail.DLb1AoNv.js",
      "static/css/ProductDetail.BJxh27Pu.css",
    ])
) => i.map((i) => d[i]);
import {
  c as e,
  a as t,
  o as a,
  d as s,
  b as i,
  e as r,
  w as l,
  u as n,
  R as o,
  f as c,
  F as p,
  g,
  r as u,
  h as d,
  i as m,
  j as v,
  n as j,
  k as f,
  l as A,
  m as h,
  p as w,
  q as y,
  s as b,
  t as k,
  v as C,
  x as E,
  y as R,
  z as U,
  A as P,
  B,
  C as L,
  D as I,
  E as S,
  G as D,
  H as M,
} from "./vendor.C8p9HwzL.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ("childList" === a.type)
          for (const e of a.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const O = (e, t) => {
    const a = e.__vccOpts || e;
    for (const [s, i] of t) a[s] = i;
    return a;
  },
  F = { class: "site-footer" };
const G = O({}, [
    [
      "render",
      function (s, i) {
        return (
          a(),
          e(
            "footer",
            F,
            i[0] ||
              (i[0] = [
                t(
                  '<div class="footer-container" data-v-af820b5e><div class="footer-columns" data-v-af820b5e><div class="footer-col" data-v-af820b5e><h4 data-v-af820b5e>关于我们</h4><ul data-v-af820b5e><li data-v-af820b5e>品牌故事</li><li data-v-af820b5e>品质保障</li><li data-v-af820b5e>农业动态</li></ul></div><div class="footer-col" data-v-af820b5e><h4 data-v-af820b5e>客户服务</h4><ul data-v-af820b5e><li data-v-af820b5e>购物指南</li><li data-v-af820b5e>退换货政策</li><li data-v-af820b5e>联系我们</li></ul></div><div class="footer-col" data-v-af820b5e><h4 data-v-af820b5e>关注我们</h4><div class="social-links" data-v-af820b5e><img src="./static/png/farmer.CLic2ART.png" alt="farmer" data-v-af820b5e></div></div><div class="footer-col" data-v-af820b5e><h4 data-v-af820b5e>联系我们</h4><ul class="contact-info" data-v-af820b5e><li data-v-af820b5e>客服电话：400-123-4567</li><li data-v-af820b5e>工作时间：9:00-18:00</li><li data-v-af820b5e>电子邮箱：service@farmart.com</li></ul></div></div><div class="footer-bottom" data-v-af820b5e><div class="copyright" data-v-af820b5e> © 2024 皖乡优品 All Rights Reserved. <a data-v-af820b5e>隐私政策|用户协议</a></div></div></div>',
                  1
                ),
              ])
          )
        );
      },
    ],
    ["__scopeId", "data-v-af820b5e"],
  ]),
  W = { class: "app" },
  Y = { class: "navigate" },
  V = { class: "nav-left" },
  q = { class: "nav-center" },
  _ = { class: "main-content" },
  Q = s({
    __name: "App",
    setup: (t) => (t, s) => (
      a(),
      e(
        p,
        null,
        [
          i("div", W, [
            i("div", Y, [
              i("div", V, [
                r(
                  n(o),
                  { to: "/home/mainnew", class: "logo" },
                  {
                    default: l(
                      () =>
                        s[0] ||
                        (s[0] = [
                          i(
                            "img",
                            {
                              src: "./static/png/icon.COQI83UY.png",
                              alt: "AgriMall 农业商城",
                              class: "logo-img",
                            },
                            null,
                            -1
                          ),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]),
              i("div", q, [
                r(
                  n(o),
                  { to: "/home/mainnew", "active-class": "active" },
                  { default: l(() => s[1] || (s[1] = [g("主页")])), _: 1 }
                ),
                r(
                  n(o),
                  { to: "/sale", "active-class": "active" },
                  { default: l(() => s[2] || (s[2] = [g("农作物销售")])), _: 1 }
                ),
                r(
                  n(o),
                  { to: "/cart", "active-class": "active" },
                  { default: l(() => s[3] || (s[3] = [g("购物车🛒")])), _: 1 }
                ),
              ]),
            ]),
            i("div", _, [r(n(c))]),
          ]),
          r(G),
        ],
        64
      )
    ),
  }),
  X = {},
  H = function (e, t, a) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const e = document.querySelector("meta[property=csp-nonce]"),
        a =
          (null == e ? void 0 : e.nonce) ||
          (null == e ? void 0 : e.getAttribute("nonce"));
      s = Promise.allSettled(
        t.map((e) => {
          if (
            (e = (function (e) {
              return "/" + e;
            })(e)) in X
          )
            return;
          X[e] = !0;
          const t = e.endsWith(".css"),
            s = t ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${e}"]${s}`)) return;
          const i = document.createElement("link");
          return (
            (i.rel = t ? "stylesheet" : "modulepreload"),
            t || (i.as = "script"),
            (i.crossOrigin = ""),
            (i.href = e),
            a && i.setAttribute("nonce", a),
            document.head.appendChild(i),
            t
              ? new Promise((t, a) => {
                  i.addEventListener("load", t),
                    i.addEventListener("error", () =>
                      a(new Error(`Unable to preload CSS for ${e}`))
                    );
                })
              : void 0
          );
        })
      );
    }
    function i(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return s.then((t) => {
      for (const e of t || []) "rejected" === e.status && i(e.reason);
      return e().catch(i);
    });
  },
  T = ["src", "alt"],
  x = { class: "banner-indicators" },
  J = ["onClick"],
  z = O(
    s({
      __name: "Banner",
      setup(t) {
        const s = u([
            {
              src: new URL("../jpg/lubo1.CF74CVFQ.jpg", import.meta.url)
                .href,
              alt: "安徽农业丰收场景",
            },
            {
              src: new URL("../jpg/lubo2.32df2Ck9.jpg", import.meta.url)
                .href,
              alt: "现代农业示范基地",
            },
            {
              src: new URL("../jpg/lubo3.BJ6Iz8S8.jpg", import.meta.url)
                .href,
              alt: "农产品加工流程",
            },
          ]),
          r = u(0);
        let l = null;
        const n = (e) => {
            e < 0 || e >= s.value.length || ((r.value = e), g());
          },
          o = () => {
            const e = r.value + 1;
            n(e % s.value.length);
          },
          c = () => {
            l || (l = window.setInterval(o, 1e3));
          },
          g = () => {
            l && (clearInterval(l), (l = null)), c();
          },
          f = () => {
            l && (clearInterval(l), (l = null));
          },
          A = () => {
            l || c();
          };
        return (
          d(c),
          m(g),
          (t, l) => (
            a(),
            e(
              "div",
              { class: "banner", onMouseover: f, onMouseleave: A },
              [
                (a(!0),
                e(
                  p,
                  null,
                  v(
                    s.value,
                    (t, s) => (
                      a(),
                      e(
                        "img",
                        {
                          key: s,
                          src: t.src,
                          alt: t.alt,
                          class: j({ active: r.value === s }),
                        },
                        null,
                        10,
                        T
                      )
                    )
                  ),
                  128
                )),
                i("div", x, [
                  (a(!0),
                  e(
                    p,
                    null,
                    v(
                      s.value,
                      (t, s) => (
                        a(),
                        e(
                          "span",
                          {
                            key: s,
                            class: j({ active: r.value === s }),
                            onClick: (e) => n(s),
                          },
                          null,
                          10,
                          J
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              32
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-ea18fba5"]]
  ),
  N =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArRJREFUWEfVl09IFFEcx7/vza5LobJIdQohqJP0BzJtZ4vqELpviRDyEB3qEB2Cor/uLB2KCHdWJKQ6RB4y6hDaIaj908konLWCCkovWUgdpEOpaOWyur8aV2ObXXfGml1pTjOP3+99P/Ob7/zeewxLfLEl1kcOwIOnyk4das929XEp4P4A0MUlCb0Ahp1ltGl3bXi82BAGgMBGSWKvdVHGmd+3NRQtKYAuFtUCnwG2Coy1Ck/oXOkB+pQ7YDgA4ImQ1R0lB4glggeJqAvATDI5taJpV8dYMSFy/oK4pqxNA+8youkmIbfdLylAxgfKWwA1AHUIOXyy5AARLfCMgdWBMELADTsBOEeXz6MOz8+ZtxM+TCjtnHDaTuGsuYaErK4rCPAocaZ+hhz9RQEgfBJetbogQMYHwdFfHnDbDsHYXeEJ7TcFiGnBHgLtsx+AjgtP+KoFAKWZgG67ATjjmxs9rS9NAaL9LauR5gMAKm2EGBWyWpU9X8H9QFRT9CXZtnbMgLhPVn2WASKacpkBNjYidlHIofOWAWJafh9I3Gn6VWbSqZwYAnx+WY1bBpjzwXsAZXrSMpcb3g3H4HQsNwVITf+A9uYavk99zcQSkilKr9y7rW3CMoAeGNMUjQCPfl9VuQb1NUdMxecDng924sv4h/nHvMu76abU6AN3RTVcznJTiGRqEmMTH7PiqF3I4bPGRFOAhXxgSmAMINYsvKF7iwaYbct9wStgtH7RonMJBLzyy+qpfPmmFfhbUat5/w9Ad+/R8nJXxW2A/V4hiTAoufilxtrWEeMbx7RAA4FdJ8Itv1e9sFBFLFcg0qccYgw3c0xEqPN51RfG8UhCOcwInSBEhVf1/zPArBm1lhNEPHuPMOyYnO5paGj/ZhTQT1lcwhbO2UChA47lClg11WLjlhzgJ+L23iGuY9OQAAAAAElFTkSuQmCC",
  K = { class: "banner-container" },
  Z = ["src", "alt"],
  $ = { class: "banner-indicators" },
  ee = ["onClick"],
  te = O(
    s({
      __name: "small-banner",
      props: { banners: {} },
      setup(t) {
        const s = t,
          n = u(0);
        let o = null;
        const c = () => {
            !o &&
              s.banners.length > 1 &&
              (o = setInterval(() => {
                n.value = (n.value + 1) % s.banners.length;
              }, 3e3));
          },
          g = () => {
            m(), c();
          },
          m = () => {
            o && (clearInterval(o), (o = null));
          },
          h = () => {
            o || c();
          };
        return (
          d(c),
          f(m),
          (t, s) => {
            const o = A("router-link");
            return (
              a(),
              e(
                "div",
                { class: "small-banner", onMouseover: m, onMouseleave: h },
                [
                  i("div", K, [
                    s[0] || (s[0] = i("h3", null, "每日精选", -1)),
                    (a(!0),
                    e(
                      p,
                      null,
                      v(
                        t.banners,
                        (t, s) => (
                          a(),
                          e(
                            "a",
                            { key: s, target: "_blank", class: "banner-link" },
                            [
                              r(
                                o,
                                { to: "/sale" },
                                {
                                  default: l(() => [
                                    i(
                                      "img",
                                      {
                                        src: t.src,
                                        alt: t.alt,
                                        class: j({ active: n.value === s }),
                                      },
                                      null,
                                      10,
                                      Z
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  i("div", $, [
                    (a(!0),
                    e(
                      p,
                      null,
                      v(
                        t.banners,
                        (t, s) => (
                          a(),
                          e(
                            "span",
                            {
                              key: s,
                              class: j({ active: n.value === s }),
                              onClick: (e) =>
                                ((e) => {
                                  (n.value = e), g();
                                })(s),
                            },
                            null,
                            10,
                            ee
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                32
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-4b37203e"]]
  ),
  ae = h([
    {
      id: 1,
      title: "长丰草莓",
      intro:
        "新鲜采摘，果肉饱满、甜美多汁，富含维生素C，口感超赞！适合做水果沙拉、健康美味。",
      image: new URL("../jpg/pro1.BppsjYUc.jpg", import.meta.url).href,
      price: 38,
      originalPrice: 48,
      discount: "7.9",
      stock: 200,
      specs: ["盒装250g", "盒装500g", "礼盒装1kg"],
      parameters: { 产地: "安徽合肥", 等级: "特级", 保质期: "3天" },
      category: "瓜果",
    },
    {
      id: 2,
      title: "砀山梨",
      intro:
        "脆嫩多汁，口感清爽，天然甜美，富含水分和膳食纤维，帮助消化，美容养颜，夏季水果选择！",
      image: new URL("../jpg/pro2.G05S0ofB.jpg", import.meta.url).href,
      price: 12.5,
      originalPrice: 15,
      discount: "8.3",
      stock: 300,
      specs: ["500g", "1kg", "3kg"],
      parameters: { 产地: "安徽砀山", 等级: "一级", 保质期: "15天" },
      category: "瓜果",
    },
    {
      id: 3,
      title: "砀山黄桃",
      intro:
        "果肉细腻，口感香甜，含有丰富的维生素和膳食纤维，天然无公害，是健康家庭的首选水果。",
      image: new URL("../jpg/pro3.5Od45o1x.jpg", import.meta.url).href,
      price: 25,
      originalPrice: 30,
      discount: "8.3",
      stock: 250,
      specs: ["500g", "1kg", "2kg"],
      parameters: { 产地: "安徽砀山", 等级: "特级", 保质期: "7天" },
      category: "瓜果",
    },
    {
      id: 4,
      title: "黄山毛峰",
      intro:
        "品质优良，香气浓郁，口感鲜爽回甘，茶叶爱好者的必备选择，适合日常品饮，助力健康生活。",
      image: new URL("../jpg/pro4.CbCmFfM8.jpg", import.meta.url).href,
      price: 288,
      originalPrice: 320,
      discount: "9.0",
      stock: 150,
      specs: ["50g", "100g", "200g"],
      parameters: { 产地: "安徽黄山", 等级: "特级", 保质期: "18个月" },
      category: "茶叶",
    },
    {
      id: 5,
      title: "六安瓜片",
      intro:
        "清香四溢，口感醇厚，回味甘爽，是茶友们的最爱，舒缓身心，是一种品味生活的理想选择。",
      image: new URL("../jpg/pro5.8GgS_Opz.jpg", import.meta.url).href,
      price: 368,
      originalPrice: 400,
      discount: "9.2",
      stock: 120,
      specs: ["50g", "100g", "200g"],
      parameters: { 产地: "安徽六安", 等级: "一级", 保质期: "18个月" },
      category: "茶叶",
    },
    {
      id: 6,
      title: "和县辣椒",
      intro:
        "新鲜辣味十足，香气扑鼻，富含维生素C，适合各种烹饪，提升菜肴风味，家庭必备的辣椒选择！",
      image: new URL("../jpg/pro6.CIVc3Py9.jpg", import.meta.url).href,
      price: 9.8,
      originalPrice: 12,
      discount: "8.2",
      stock: 400,
      specs: ["200g", "500g", "1kg"],
      parameters: { 产地: "安徽和县", 等级: "一级", 保质期: "7天" },
      category: "蔬菜",
    },
    {
      id: 7,
      title: "阜阳芦蒿",
      intro:
        "脆嫩多汁，口感清爽，富含维生素和膳食纤维，增加菜肴的营养和口感，适合清炒、炖汤等多种做法！",
      image: new URL("../jpg/pro7.CC8HoImd.jpg", import.meta.url).href,
      price: 15,
      originalPrice: 18,
      discount: "8.3",
      stock: 350,
      specs: ["300g", "500g", "1kg"],
      parameters: { 产地: "安徽阜阳", 等级: "特级", 保质期: "5天" },
      category: "蔬菜",
    },
    {
      id: 8,
      title: "芜湖大米",
      intro:
        "粒粒饱满，米香扑鼻，煮出的米饭松软可口，粘性适中，适合家庭日常食用，品质保证，米饭好味道！",
      image: new URL("../jpg/pro8.DvazujvP.jpg", import.meta.url).href,
      price: 6.5,
      originalPrice: 8,
      discount: "8.1",
      stock: 500,
      specs: ["5kg", "10kg", "20kg"],
      parameters: { 产地: "安徽芜湖", 等级: "一级", 保质期: "12个月" },
      category: "粮油",
    },
    {
      id: 9,
      title: "滁州菜籽油",
      intro:
        "天然压榨，油质清澈，低脂健康，适合炒、凉拌等多种烹饪方式，提供营养，保养心血管，厨房必备！",
      image: new URL("../jpg/pro9.CGL0uWo5.jpg", import.meta.url).href,
      price: 68,
      originalPrice: 80,
      discount: "8.5",
      stock: 200,
      specs: ["1L", "2L", "5L"],
      parameters: { 产地: "安徽滁州", 等级: "一级", 保质期: "18个月" },
      category: "粮油",
    },
    {
      id: 10,
      title: "宁国山核桃",
      intro:
        "香脆可口，富含蛋白质和健康脂肪，是理想的零食选择，帮助补充能量，享受美味的同时保持营养！",
      image: new URL("../jpg/pro10.Vf868XuA.jpg", import.meta.url).href,
      price: 88,
      originalPrice: 100,
      discount: "8.8",
      stock: 180,
      specs: ["100g", "200g", "500g"],
      parameters: { 产地: "安徽宁国", 等级: "特级", 保质期: "6个月" },
      category: "坚果",
    },
    {
      id: 11,
      title: "霍山板栗",
      intro:
        "外壳易剥，肉质鲜嫩，甜美口感，是秋冬季节的美味零食，富含维生素和矿物质，享受美味补充营养！",
      image: new URL("../jpg/pro11.BOzpS-XV.jpg", import.meta.url).href,
      price: 22,
      originalPrice: 25,
      discount: "8.8",
      stock: 220,
      specs: ["200g", "500g", "1kg"],
      parameters: { 产地: "安徽霍山", 等级: "一级", 保质期: "7天" },
      category: "坚果",
    },
    {
      id: 12,
      title: "铜陵白姜",
      intro:
        "香气浓烈，辣味十足，富含多种矿物质和维生素，促进消化和新陈代谢，适合调味、炖汤、做菜等方式。",
      image: new URL("../jpg/pro12.DKWU3fWR.jpg", import.meta.url).href,
      price: 18,
      originalPrice: 22,
      discount: "8.2",
      stock: 300,
      specs: ["150g", "300g", "500g"],
      parameters: { 产地: "安徽铜陵", 等级: "特级", 保质期: "6个月" },
      category: "蔬菜",
    },
    {
      id: 13,
      title: "安庆红枣",
      intro:
        "天然无添加，口感甘甜，富含铁质和维生素C，能有效补血养颜，适合冬季养生食用，做粥、煮茶美味！",
      image: new URL("../jpg/pro13.CzEibrhz.jpg", import.meta.url).href,
      price: 28,
      originalPrice: 32,
      discount: "8.7",
      stock: 200,
      specs: ["250g", "500g", "1kg"],
      parameters: { 产地: "安徽安庆", 等级: "一级", 保质期: "12个月" },
      category: "瓜果",
    },
    {
      id: 14,
      title: "桐城黄瓜",
      intro:
        "口感脆嫩，水分丰富，富含膳食纤维，清爽消暑，适合做沙拉、凉拌菜，是夏季餐桌必备的蔬菜！",
      image: new URL("../jpg/pro14.C5cB03D-.jpg", import.meta.url).href,
      price: 10,
      originalPrice: 12,
      discount: "8.3",
      stock: 400,
      specs: ["500g", "1kg", "2kg"],
      parameters: { 产地: "安徽桐城", 等级: "一级", 保质期: "5天" },
      category: "蔬菜",
    },
    {
      id: 15,
      title: "合肥红薯",
      intro:
        "天然无污染，口感香甜，富含丰富的膳食纤维和营养，适合煮、烤、炒，健康美味全家人都喜欢！",
      image: new URL("../jpg/pro15.DlWVWMF1.jpg", import.meta.url).href,
      price: 12,
      originalPrice: 15,
      discount: "8.0",
      stock: 300,
      specs: ["500g", "1kg", "2kg"],
      parameters: { 产地: "安徽合肥", 等级: "特级", 保质期: "6个月" },
      category: "蔬菜",
    },
    {
      id: 16,
      title: "宣城花生",
      intro:
        "香脆可口，富含优质蛋白和健康脂肪，助力补充能量，是零食和佐餐的理想选择，适合日常营养补充！",
      image: new URL("../jpg/pro16.DYElCZf-.jpg", import.meta.url).href,
      price: 18,
      originalPrice: 22,
      discount: "8.2",
      stock: 200,
      specs: ["200g", "500g", "1kg"],
      parameters: { 产地: "安徽宣城", 等级: "一级", 保质期: "6个月" },
      category: "坚果",
    },
    {
      id: 17,
      title: "池州糯米",
      intro:
        "粒粒饱满，口感糯软，适合做糯米糕、粽子等各种传统美食，味道香甜，健康营养，适合家庭使用。",
      image: new URL("../jpg/pro17.CwnUF5Ce.jpg", import.meta.url).href,
      price: 8,
      originalPrice: 10,
      discount: "8.0",
      stock: 400,
      specs: ["2.5kg", "5kg", "10kg"],
      parameters: { 产地: "安徽池州", 等级: "一级", 保质期: "12个月" },
      category: "粮油",
    },
    {
      id: 18,
      title: "马鞍山牛肉",
      intro:
        "肉质鲜嫩，富含蛋白质和铁质，是高营养价值的肉类，适合煮汤、炖菜、炒菜等多种做法，肉质紧实。",
      image: new URL("../jpg/pro18.Gu3W1pU0.jpg", import.meta.url).href,
      price: 50,
      originalPrice: 60,
      discount: "8.3",
      stock: 150,
      specs: ["250g", "500g", "1kg"],
      parameters: { 产地: "安徽马鞍山", 等级: "特级", 保质期: "6个月" },
      category: "肉类",
    },
    {
      id: 19,
      title: "黄山蜜柚",
      intro:
        "酸甜适中，果肉鲜嫩多汁，富含维生素C，口感清爽，是天然的美容养颜水果，适合日常食用。",
      image: new URL("../jpg/pro19.C_ZTDHU6.jpg", import.meta.url).href,
      price: 35,
      originalPrice: 45,
      discount: "7.8",
      stock: 250,
      specs: ["1个装", "2个装", "礼盒装"],
      parameters: { 产地: "安徽黄山", 等级: "一级", 保质期: "30天" },
      category: "瓜果",
    },
    {
      id: 20,
      title: "安徽龙虾",
      intro:
        "鲜嫩多汁，肉质鲜美，富含优质蛋白，是夏季餐桌上的美味佳肴，适合家庭聚餐、烧烤等多种场合。",
      image: new URL("../jpg/pro20.lPrBX8WH.jpg", import.meta.url).href,
      price: 128,
      originalPrice: 150,
      discount: "8.5",
      stock: 100,
      specs: ["500g", "1kg", "2kg"],
      parameters: { 产地: "安徽合肥", 等级: "特级", 保质期: "3天" },
      category: "海鲜",
    },
  ]),
  se = h([
    {
      id: 1,
      title: "安徽毛豆产业发展与市场前景分析",
      content:
        "分析安徽毛豆产业的发展现状、市场需求以及未来前景，探讨如何提升毛豆的产量和品质，以满足市场的需求。",
      image: "news1.jpg",
      alt: "新闻配图：安徽毛豆产业发展分析",
    },
    {
      id: 2,
      title: "合肥地区水稻新品种的研究与推广",
      content:
        "介绍合肥地区水稻新品种的研究成果，以及这些新品种的推广策略和实际应用效果，助力当地农业发展。",
      image: "news2.jpg",
      alt: "新闻配图：合肥水稻新品种研究",
    },
    {
      id: 3,
      title: "安徽大米荣获国家地理标志认证",
      content:
        "安徽大米成功获得国家地理标志认证，标志着其品质和独特性得到了官方认可，提升了市场竞争力。",
      image: "news3.jpg",
      alt: "新闻配图：安徽大米地理标志认证",
    },
    {
      id: 4,
      title: "亳州中药材种植模式创新，助力农业发展",
      content:
        "亳州通过创新中药材种植模式，提高了中药材的产量和质量，为当地农业发展注入了新的活力。",
      image: "news4.jpg",
      alt: "新闻配图：亳州中药材种植",
    },
    {
      id: 5,
      title: "安徽小麦的优质高产栽培技术突破",
      content:
        "安徽小麦栽培技术取得突破，实现了优质高产的目标，为小麦种植户带来了更高的经济效益。",
      image: "news5.jpg",
      alt: "新闻配图：安徽小麦栽培技术",
    },
    {
      id: 6,
      title: "滁州草莓种植发展现状与未来展望",
      content:
        "分析滁州草莓种植的现状，探讨未来发展的方向和潜力，提出促进草莓产业发展的建议。",
      image: "news6.jpg",
      alt: "新闻配图：滁州草莓种植分析",
    },
    {
      id: 7,
      title: "安徽绿色蔬菜种植及其市场推广",
      content:
        "介绍安徽绿色蔬菜的种植技术和市场推广策略，推动绿色蔬菜产业的发展，满足消费者对健康食品的需求。",
      image: "news7.jpg",
      alt: "新闻配图：安徽绿色蔬菜种植",
    },
    {
      id: 8,
      title: "淮南甘薯新品种研究，推动农业转型升级",
      content:
        "淮南通过研究甘薯新品种，推动农业转型升级，提高了甘薯的产量和品质，促进了农民增收。",
      image: "news8.jpg",
      alt: "新闻配图：淮南甘薯新品种",
    },
    {
      id: 9,
      title: "安徽花生产业的可持续发展与市场趋势",
      content:
        "探讨安徽花生产业的可持续发展策略，分析市场趋势，提出提升花生产业竞争力的建议。",
      image: "news9.jpg",
      alt: "新闻配图：安徽花生产业分析",
    },
    {
      id: 10,
      title: "安徽苹果种植技术革新，提升品质与产量",
      content:
        "安徽苹果种植技术的革新，显著提升了苹果的品质和产量，为果农带来了更好的经济效益。",
      image: "news10.jpg",
      alt: "新闻配图：安徽苹果种植技术",
    },
  ]),
  ie = h([
    {
      src: new URL("../jpg/pro12.DKWU3fWR.jpg", import.meta.url).href,
      alt: "特色农产品1",
    },
    {
      src: new URL("../jpg/pro15.DlWVWMF1.jpg", import.meta.url).href,
      alt: "特色农产品2",
    },
    {
      src: new URL("../jpg/pro16.DYElCZf-.jpg", import.meta.url).href,
      alt: "特色农产品3",
    },
  ]),
  re = w("cart", {
    state: () => ({ items: [] }),
    actions: {
      addItem(e) {
        const t = this.items.find((t) => t.id === e.id);
        t ? (t.quantity += e.quantity) : this.items.push({ ...e }),
          this.saveToLocalStorage();
      },
      updateQuantity(e, t) {
        const a = this.items.find((t) => t.id === e);
        a && ((a.quantity = t), this.saveToLocalStorage());
      },
      removeItem(e) {
        (this.items = this.items.filter((t) => t.id !== e)),
          this.saveToLocalStorage();
      },
      saveToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(this.items));
      },
      loadFromLocalStorage() {
        const e = localStorage.getItem("cart");
        e && (this.items = JSON.parse(e));
      },
    },
    getters: {
      totalPrice: (e) => e.items.reduce((e, t) => e + t.price * t.quantity, 0),
      totalItems: (e) => e.items.reduce((e, t) => e + t.quantity, 0),
    },
  }),
  le = { class: "container" },
  ne = { class: "content" },
  oe = { class: "right-box" },
  ce = { class: "main-header" },
  pe = { class: "header-nav" },
  ge = { key: 0, class: "cart-count" },
  ue = { class: "products-area" },
  de = ["src", "alt"],
  me = ["onClick"],
  ve = O(
    s({
      __name: "home-cart",
      setup(t) {
        const s = re(),
          o = C();
        u(2);
        const c = u([]);
        d(() => {
          const e = [...ae];
          for (let t = e.length - 1; t > 0; t--) {
            const a = Math.floor(Math.random() * (t + 1));
            [e[t], e[a]] = [e[a], e[t]];
          }
          c.value = e.slice(0, 6);
        });
        const m = y(() => {
            const e = [];
            for (let t = 0; t < c.value.length; t += 2)
              e.push(c.value.slice(t, t + 2));
            return e;
          }),
          j = y(() => m.value);
        return (t, c) => {
          const u = A("router-link");
          return (
            a(),
            e("div", le, [
              i("div", ne, [
                r(te, { banners: n(ie) }, null, 8, ["banners"]),
                i("div", oe, [
                  i("header", ce, [
                    c[1] ||
                      (c[1] = i("h1", { class: "title" }, "特色商品", -1)),
                    i("nav", pe, [
                      r(
                        u,
                        { to: "/cart", class: "cart-link" },
                        {
                          default: l(() => [
                            c[0] ||
                              (c[0] = i(
                                "img",
                                { src: N, alt: "购物车", class: "cart-icon" },
                                null,
                                -1
                              )),
                            n(s).totalItems > 0
                              ? (a(), e("span", ge, k(n(s).totalItems), 1))
                              : b("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  i("div", ue, [
                    (a(!0),
                    e(
                      p,
                      null,
                      v(
                        j.value,
                        (t, s) => (
                          a(),
                          e("div", { key: s, class: "smallbox" }, [
                            (a(!0),
                            e(
                              p,
                              null,
                              v(
                                t,
                                (t) => (
                                  a(),
                                  e("div", { key: t.id, class: "smallest" }, [
                                    i(
                                      "img",
                                      { src: t.image, alt: t.title },
                                      null,
                                      8,
                                      de
                                    ),
                                    i("p", null, [
                                      g(k(t.title) + " ", 1),
                                      i(
                                        "button",
                                        {
                                          onClick: (e) =>
                                            n(o).push({
                                              path: "/product",
                                              query: { id: t.id.toString() },
                                            }),
                                        },
                                        c[2] ||
                                          (c[2] = [
                                            i(
                                              "img",
                                              {
                                                src: "./static/png/%E8%B4%AD%E7%89%A9.DasPVD7v.png",
                                                alt: "购物车",
                                              },
                                              null,
                                              -1
                                            ),
                                          ]),
                                        8,
                                        me
                                      ),
                                    ]),
                                    i(
                                      "span",
                                      null,
                                      "¥" + k(t.price.toFixed(2)),
                                      1
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-e942bfdc"]]
  ),
  je = { class: "news-section" },
  fe = { class: "news-left" },
  Ae = { class: "news-right" },
  he = O(
    s({
      __name: "News",
      setup: (t) => (t, s) => (
        a(),
        e("div", je, [
          i("div", fe, [
            s[0] || (s[0] = i("h2", null, "最新资讯", -1)),
            i("ul", null, [
              (a(!0),
              e(
                p,
                null,
                v(
                  n(se),
                  (t) => (
                    a(),
                    e("li", { key: t.id }, [
                      r(
                        n(o),
                        {
                          to: {
                            path: "/home/detail",
                            query: {
                              image: t.image,
                              alt: t.alt,
                              title: t.title,
                              content: t.content,
                            },
                          },
                        },
                        { default: l(() => [g(k(t.title), 1)]), _: 2 },
                        1032,
                        ["to"]
                      ),
                    ])
                  )
                ),
                128
              )),
            ]),
          ]),
          i("div", Ae, [r(n(c))]),
        ])
      ),
    }),
    [["__scopeId", "data-v-1726776d"]]
  ),
  we = s({
    __name: "Home",
    setup: (t) => (t, s) => (a(), e(p, null, [r(z), r(he), r(ve)], 64)),
  }),
  ye = { class: "cart-container" },
  be = { key: 0, class: "empty-cart" },
  ke = { key: 1 },
  Ce = ["src", "alt"],
  Ee = { class: "item-info" },
  Re = { class: "price" },
  Ue = { class: "quantity-control" },
  Pe = { class: "item-actions" },
  Be = { class: "subtotal" },
  Le = { class: "cart-summary" },
  Ie = { class: "total-price" },
  Se = O(
    s({
      __name: "Cart",
      setup(t) {
        const s = re();
        return (
          s.loadFromLocalStorage(),
          (t, o) => {
            const c = A("el-button"),
              u = A("el-empty"),
              d = A("el-input-number");
            return (
              a(),
              e("div", ye, [
                i("h1", null, "购物车 (" + k(n(s).totalItems) + "件商品)", 1),
                0 === n(s).items.length
                  ? (a(),
                    e("div", be, [
                      r(
                        u,
                        { description: "购物车空空如也，快去选购商品吧~" },
                        {
                          default: l(() => [
                            r(
                              c,
                              {
                                type: "primary",
                                onClick:
                                  o[0] ||
                                  (o[0] = (e) => t.$router.push("/sale")),
                              },
                              {
                                default: l(
                                  () => o[1] || (o[1] = [g("去逛逛")])
                                ),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]))
                  : (a(),
                    e("div", ke, [
                      (a(!0),
                      e(
                        p,
                        null,
                        v(
                          n(s).items,
                          (t) => (
                            a(),
                            e("div", { key: t.id, class: "cart-item" }, [
                              i(
                                "img",
                                {
                                  src: t.image,
                                  alt: t.title,
                                  class: "product-image",
                                },
                                null,
                                8,
                                Ce
                              ),
                              i("div", Ee, [
                                i("h3", null, k(t.title), 1),
                                i("p", Re, "¥" + k(t.price.toFixed(2)), 1),
                                i("div", Ue, [
                                  r(
                                    d,
                                    {
                                      modelValue: t.quantity,
                                      "onUpdate:modelValue": (e) =>
                                        (t.quantity = e),
                                      min: 1,
                                      onChange: (e) =>
                                        n(s).updateQuantity(t.id, e),
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "onUpdate:modelValue",
                                      "onChange",
                                    ]
                                  ),
                                ]),
                              ]),
                              i("div", Pe, [
                                r(
                                  c,
                                  {
                                    type: "danger",
                                    icon: "el-icon-delete",
                                    onClick: (e) => n(s).removeItem(t.id),
                                  },
                                  null,
                                  8,
                                  ["onClick"]
                                ),
                                i(
                                  "p",
                                  Be,
                                  " 小计：¥" +
                                    k((t.price * t.quantity).toFixed(2)),
                                  1
                                ),
                              ]),
                            ])
                          )
                        ),
                        128
                      )),
                      i("div", Le, [
                        i("div", Ie, [
                          o[2] || (o[2] = g(" 总计：")),
                          i(
                            "span",
                            null,
                            "¥" + k(n(s).totalPrice.toFixed(2)),
                            1
                          ),
                        ]),
                        r(
                          c,
                          { type: "primary", size: "large" },
                          {
                            default: l(() => o[3] || (o[3] = [g("去结算")])),
                            _: 1,
                          }
                        ),
                      ]),
                    ])),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-710b220d"]]
  ),
  De = { class: "search-container" },
  Me = { class: "sale-main" },
  Oe = { class: "sale-navigate" },
  Fe = ["onClick"],
  Ge = ["src", "alt"],
  We = { class: "main-right" },
  Ye = { class: "main-products" },
  Ve = ["onClick"],
  qe = ["src", "alt"],
  _e = { class: "medium-container" },
  Qe = { class: "medium-content" },
  Xe = ["onClick"],
  He = ["src", "alt"],
  Te = O(
    s({
      __name: "Sale",
      setup(t) {
        const s = u(""),
          o = u(""),
          c = re(),
          d = C(),
          m = () => {
            d.push({ path: "/search", query: { q: s.value } });
          },
          j = [
            {
              id: 1,
              name: "坚果",
              category: "坚果",
              image: new URL(
                "../static/png/navitem2.C-u3PM1A.png",
                import.meta.url
              ).toString(),
            },
            {
              id: 2,
              name: "蔬菜",
              category: "蔬菜",
              image: new URL(
                "../static/png/navitem3.C2NEPtsK.png",
                import.meta.url
              ).toString(),
            },
            {
              id: 3,
              name: "粮油",
              category: "粮油",
              image: new URL(
                "../static/png/navitem1.Bfldjr9n.png",
                import.meta.url
              ).toString(),
            },
            {
              id: 4,
              name: "瓜果",
              category: "瓜果",
              image: new URL(
                "../static/png/navitem4.CnMVY6zO.png",
                import.meta.url
              ).toString(),
            },
            {
              id: 5,
              name: "茶叶",
              category: "茶叶",
              image: new URL(
                "../static/png/navitem5.CmxsabBD.png",
                import.meta.url
              ).toString(),
            },
            {
              id: 6,
              name: "海鲜",
              category: "海鲜",
              image: new URL(
                "../static/png/navitem6.BpgtMu3F.png",
                import.meta.url
              ).toString(),
            },
          ],
          f = y(() =>
            (o.value ? ae.filter((e) => e.category === o.value) : ae)
              .sort(() => Math.random() - 0.5)
              .slice(0, 6)
          );
        return (t, u) => {
          const h = A("el-badge");
          return (
            a(),
            e(
              p,
              null,
              [
                i("div", De, [
                  E(
                    i(
                      "input",
                      {
                        "onUpdate:modelValue":
                          u[0] || (u[0] = (e) => (s.value = e)),
                        type: "text",
                        class: "search-input",
                        placeholder: "请输入搜索内容",
                      },
                      null,
                      512
                    ),
                    [[R, s.value]]
                  ),
                  i("button", { onClick: m, class: "search-button" }, "搜索"),
                ]),
                i(
                  "div",
                  {
                    class: "cart-icon",
                    onClick: u[1] || (u[1] = (e) => t.$router.push("/cart")),
                  },
                  [
                    r(
                      h,
                      { value: n(c).items.length, class: "item" },
                      {
                        default: l(
                          () =>
                            u[2] ||
                            (u[2] = [
                              i("img", { src: N, alt: "购物车" }, null, -1),
                            ])
                        ),
                        _: 1,
                      },
                      8,
                      ["value"]
                    ),
                  ]
                ),
                i("div", Me, [
                  i("div", Oe, [
                    (a(),
                    e(
                      p,
                      null,
                      v(j, (e) =>
                        i("div", { key: e.id, class: "sale-navitem" }, [
                          i(
                            "div",
                            {
                              class: "active",
                              onClick: (t) => {
                                return (a = e.category), void (o.value = a);
                                var a;
                              },
                            },
                            [
                              i(
                                "img",
                                { src: e.image, alt: e.name },
                                null,
                                8,
                                Ge
                              ),
                              i("span", null, k(e.name), 1),
                              u[3] ||
                                (u[3] = i(
                                  "img",
                                  {
                                    src: "./static/png/left.Cb3rNVSd.png",
                                    alt: "left",
                                    class: "left-img",
                                  },
                                  null,
                                  -1
                                )),
                            ],
                            8,
                            Fe
                          ),
                        ])
                      ),
                      64
                    )),
                  ]),
                  i("div", We, [
                    i("div", Ye, [
                      (a(!0),
                      e(
                        p,
                        null,
                        v(
                          f.value,
                          (t) => (
                            a(),
                            e(
                              "div",
                              {
                                key: t.id,
                                class: "product-item",
                                onClick: (e) =>
                                  n(d).push({
                                    path: "/product",
                                    query: { id: t.id.toString() },
                                  }),
                              },
                              [
                                i(
                                  "img",
                                  { src: t.image, alt: t.title },
                                  null,
                                  8,
                                  qe
                                ),
                                i("h3", null, [
                                  g(k(t.title) + " ", 1),
                                  i(
                                    "span",
                                    null,
                                    "¥" + k(t.price.toFixed(2)),
                                    1
                                  ),
                                ]),
                                i("p", null, k(t.intro), 1),
                              ],
                              8,
                              Ve
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
                i("div", _e, [
                  u[4] || (u[4] = i("h2", null, "精选商品", -1)),
                  i("div", Qe, [
                    (a(!0),
                    e(
                      p,
                      null,
                      v(
                        n(ae),
                        (t) => (
                          a(),
                          e(
                            "div",
                            {
                              key: t.id,
                              class: "meproduct-item",
                              onClick: (e) =>
                                n(d).push({
                                  path: "/product",
                                  query: { id: t.id.toString() },
                                }),
                            },
                            [
                              i(
                                "img",
                                { src: t.image, alt: t.title },
                                null,
                                8,
                                He
                              ),
                              i("h3", null, [
                                g(k(t.title) + " ", 1),
                                i("span", null, "¥" + k(t.price.toFixed(2)), 1),
                              ]),
                              i("p", null, k(t.intro), 1),
                            ],
                            8,
                            Xe
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ],
              64
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-a3fa6769"]]
  ),
  xe = { class: "h2" },
  Je = { class: "image-container" },
  ze = ["src", "alt"],
  Ne = s({
    __name: "Detail",
    setup(t) {
      let s = U();
      const r = (e) => {
        if (!e) return "";
        try {
          return new URL(
            Object.assign({
              "../assets/cart.png":
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArRJREFUWEfVl09IFFEcx7/vza5LobJIdQohqJP0BzJtZ4vqELpviRDyEB3qEB2Cor/uLB2KCHdWJKQ6RB4y6hDaIaj908konLWCCkovWUgdpEOpaOWyur8aV2ObXXfGml1pTjOP3+99P/Ob7/zeewxLfLEl1kcOwIOnyk4das929XEp4P4A0MUlCb0Ahp1ltGl3bXi82BAGgMBGSWKvdVHGmd+3NRQtKYAuFtUCnwG2Coy1Ck/oXOkB+pQ7YDgA4ImQ1R0lB4glggeJqAvATDI5taJpV8dYMSFy/oK4pqxNA+8youkmIbfdLylAxgfKWwA1AHUIOXyy5AARLfCMgdWBMELADTsBOEeXz6MOz8+ZtxM+TCjtnHDaTuGsuYaErK4rCPAocaZ+hhz9RQEgfBJetbogQMYHwdFfHnDbDsHYXeEJ7TcFiGnBHgLtsx+AjgtP+KoFAKWZgG67ATjjmxs9rS9NAaL9LauR5gMAKm2EGBWyWpU9X8H9QFRT9CXZtnbMgLhPVn2WASKacpkBNjYidlHIofOWAWJafh9I3Gn6VWbSqZwYAnx+WY1bBpjzwXsAZXrSMpcb3g3H4HQsNwVITf+A9uYavk99zcQSkilKr9y7rW3CMoAeGNMUjQCPfl9VuQb1NUdMxecDng924sv4h/nHvMu76abU6AN3RTVcznJTiGRqEmMTH7PiqF3I4bPGRFOAhXxgSmAMINYsvKF7iwaYbct9wStgtH7RonMJBLzyy+qpfPmmFfhbUat5/w9Ad+/R8nJXxW2A/V4hiTAoufilxtrWEeMbx7RAA4FdJ8Itv1e9sFBFLFcg0qccYgw3c0xEqPN51RfG8UhCOcwInSBEhVf1/zPArBm1lhNEPHuPMOyYnO5paGj/ZhTQT1lcwhbO2UChA47lClg11WLjlhzgJ+L23iGuY9OQAAAAAElFTkSuQmCC",
              "../assets/cart1.jpg": "../jpg/cart1.Wx5YmC8i.jpg",
              "../assets/cart2.jpg": "../jpg/cart2.BZ94BNnN.jpg",
              "../assets/cart3.jpg": "../jpg/cart3.BBFfN4wq.jpg",
              "../assets/cart4.jpg": "../jpg/cart4.BGE35MRt.jpg",
              "../assets/cart5.jpg": "../jpg/cart5.DI_Vlsk-.jpg",
              "../assets/cart6.jpg": "../jpg/cart6.Bu0R0NJg.jpg",
              "../assets/dl.jpg": "../static/jpg/dl.Ctej4ZHJ.jpg",
              "../assets/farmer.png": "./static/png/farmer.CLic2ART.png",
              "../assets/haha.jpg": "../jpg/haha.DdINuZ94.jpg",
              "../assets/icon.png": "./static/png/icon.COQI83UY.png",
              "../assets/left.png": "./static/png/left.Cb3rNVSd.png",
              "../assets/lubo1.jpg": "..../jpg/lubo1.CF74CVFQ.jpg",
              "../assets/lubo2.jpg": "../jpg/lubo2.32df2Ck9.jpg",
              "../assets/lubo3.jpg": "../jpg/lubo3.BJ6Iz8S8.jpg",
              "../assets/navitem1.png": "../static/png/navitem1.Bfldjr9n.png",
              "../assets/navitem2.png": "../static/png/navitem2.C-u3PM1A.png",
              "../assets/navitem3.png": "../static/png/navitem3.C2NEPtsK.png",
              "../assets/navitem4.png": "../static/png/navitem4.CnMVY6zO.png",
              "../assets/navitem5.png": "../static/png/navitem5.CmxsabBD.png",
              "../assets/navitem6.png": "../static/png/navitem6.BpgtMu3F.png",
              "../assets/new.jpg": "./static/new.BEbyREVM.jpg",
              "../assets/new.png":
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAALpJREFUOE9jZKAQMML068Tr/idkFtM/Rt1Liy9dQVaHYsCVhZfhfHTDQBYwMjCk/2P5t+bq3KvvYPKkGcDMoMzwl8HlH9O/I1fnX70GMoQkA5BdBXMthgE68bofGRgY+MCK/zN8//GXS+LO0pOfkDWDvIPTAEIBCZLHa4BOnE4DuiFXFl1BEaOtAVTwgu5nBkYGHqhB3xkYGDih7N9///6Rv77k+nPaBiLFXqDIAGI0w9RgJCRSNCOrBQDEZI4RYtUduwAAAABJRU5ErkJggg==",
              "../assets/news1.jpg": "../jpg/news1.BiqVOMB5.jpg",
              "../assets/news10.jpg": "../jpg/news10.CV3afda9.jpg",
              "../assets/news2.jpg": "../jpg/news2.DsBxQdAi.jpg",
              "../assets/news3.jpg": "../jpg/news3.BqIw5wcl.jpg",
              "../assets/news4.jpg": "../jpg/news4.DAlZJQmI.jpg",
              "../assets/news5.jpg": "../jpg/news5.C1Mf5jlP.jpg",
              "../assets/news6.jpg": "../jpg/news6.DMRvmgYJ.jpg",
              "../assets/news7.jpg": "../jpg/news7.pWxIieXK.jpg",
              "../assets/news8.jpg": "../jpg/news8.wLH4QXoP.jpg",
              "../assets/news9.jpg": "../jpg/news9.CPj0l43c.jpg",
              "../assets/pro1.jpg": "../jpg/pro1.BppsjYUc.jpg",
              "../assets/pro10.jpg": "../jpg/pro10.Vf868XuA.jpg",
              "../assets/pro11.jpg": "../jpg/pro11.BOzpS-XV.jpg",
              "../assets/pro12.jpg": "../jpg/pro12.DKWU3fWR.jpg",
              "../assets/pro13.jpg": "../jpg/pro13.CzEibrhz.jpg",
              "../assets/pro14.jpg": "../jpg/pro14.C5cB03D-.jpg",
              "../assets/pro15.jpg": "../jpg/pro15.DlWVWMF1.jpg",
              "../assets/pro16.jpg": "../jpg/pro16.DYElCZf-.jpg",
              "../assets/pro17.jpg": "../jpg/pro17.CwnUF5Ce.jpg",
              "../assets/pro18.jpg": "../jpg/pro18.Gu3W1pU0.jpg",
              "../assets/pro19.jpg": "../jpg/pro19.C_ZTDHU6.jpg",
              "../assets/pro2.jpg": "../jpg/pro2.G05S0ofB.jpg",
              "../assets/pro20.jpg": "../jpg/pro20.lPrBX8WH.jpg",
              "../assets/pro3.jpg": "../jpg/pro3.5Od45o1x.jpg",
              "../assets/pro4.jpg": "../jpg/pro4.CbCmFfM8.jpg",
              "../assets/pro5.jpg": "../jpg/pro5.8GgS_Opz.jpg",
              "../assets/pro6.jpg": "../jpg/pro6.CIVc3Py9.jpg",
              "../assets/pro7.jpg": "../jpg/pro7.CC8HoImd.jpg",
              "../assets/pro8.jpg": "../jpg/pro8.DvazujvP.jpg",
              "../assets/pro9.jpg": "../jpg/pro9.CGL0uWo5.jpg",
              "../assets/right.png":
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABKZJREFUaEPtmU1sG1UQx/+zdpD46qGoXIBCQUIIJHqA0qxNG3oA43VIEKgtQuVSKpDgQGkqvBYHyqHyBjWlPVCJqPRCkSARSA3xWoEDTYN3EwIHkEAcgPLVU0UP/UIo9g68ZRctobHfW6+pItmnyJ73Zn7z8d6bCWGZf2iZ248uwOWOYDcC3Qi06YFuCkUdODFTXK0RP6hp2jYQrWTm6wCsDGTOENFvYD7jed5Rj+njgQ3DP7cZgGSO0UqtuJFAQyAMKBnEmGDwSCE7fEJpXUS4rRSamn75pkZPYwjAC5E9jxNjHMA8NJzWztZPi9+8FelV8LAKwDombAbwQGTNwdRCaiTXt/cXVZDYALZrbmXmMoHWBEpHiXE4n7XmZYyo1kwBsgPAM0KewSeJqGTo1nsy60OZWAAVt7SLmEeCTcY9DcP9vdYXKopD2clZ8x7NQxHwowImGiro5f2yeykDVN3SY8z8fmi8kbG2yCprJmc75lgIQUSP5/XyBzL7KgFUayWdiR3fU4xXC1lrj4wSWZlKzdxDhFeEPDFl8tmy22qtNIAoWK+n8REDd3TC+NDQEIKAb7WF1EOtClsawHbMA+K0YcLRgm491coz7fxecc23ibENwEEjY+1stpcUgH/OE037x6GGe+MWrCxUUNif/52q3NfsnpACsGvmseCSGjUy1rOyhoh0iFsntmO+6R+xjAkjaw0upbMlwOS8eau2gO99bzSot7ChPCcDYDvFdwB6Mm69VGZK6ynFs37Ue3Bb/zrrh0vpbQlQcc0XibEfhDlDt3pljBcylVpxkIjE0XhFXAjbNWfBWM+EXQXdej0WgO2Yn/jXPmO3kbXCy0uKo+oUcwwfYkUcCLtmivfVvr/0Hzcy1qZ4AG7pSzDfTYz7ZJ8JUUW2U+oDWEBcrwoRPDc+A9FXhl5eGwug4pi/EnADEdbkdetHKdcvEhL5DI3HiLBaBaLqmrcw4yQDpwoZ68a4ABcJuDJ1rn5NLrfvQhwAsebDmeLalEZjINwuCzE1tfvqxrXp8wz8XshYV11WAHu2dCd5PMbAXQR8TcCjD2es75o5JCmAtlMoanyzglwMk0gK2e0WccTzKsYLmESKODxGifF8PmsdUqmBuJ4PdVRr5nNMeKOtY3Ty05ee1jTtsKr32jVeQITO8zxvR//9r70Vq4jFpCGdop/EYtm7YFHBOuf+OJvbsunQeZXo/ZM+AOoNvnmpCUbLp4TviRiPuRCijlTukczeUyrGB95P5jEXvGtiPacFhNFb/kbV+MSf04FH/IYGwHhSffBSYJH+OJmGRigSLWW9pz4djFE6BhEaL8Ys6YV0X2ItpR8F19wKxrvib9nngEr6RJt6EJ6QmRFJFXHUiOhMKEmIqPEqsyFlAP+GjMyGRJPPhANx+2RRsMTYGTTxUJkJ+Ue7SoijsmJGBOIjYswSfD/KDToi23IGLeP2cLQoxihg2i4zC4raERsgLOz/DHcJc/AwTsCJSw13GdgIDZtFqxgx5P8f7v6rLpbreH1x+okJBtUxSIyBZv/gYMIEp3FsqUmDSlq3lUIqijol2wXolGdl9+1GQNZTnZJb9hH4Eww2Xk9ScD3OAAAAAElFTkSuQmCC",
              "../assets/zc.jpg": "../jpg/zc.Dm6QYKzu.jpg",
              "../assets/购物.png":
                "./static/png/%E8%B4%AD%E7%89%A9.DasPVD7v.png",
            })[`../assets/${e}`],
            import.meta.url
          ).href;
        } catch (t) {
          return "";
        }
      };
      return (t, l) => {
        var o, c;
        return (
          a(),
          e("ul", null, [
            i("li", xe, k(n(s).query.title), 1),
            i("li", Je, [
              i(
                "img",
                {
                  src: r(
                    null == (o = n(s).query.image) ? void 0 : o.toString()
                  ),
                  alt:
                    (null == (c = n(s).query.altText)
                      ? void 0
                      : c.toString()) || "默认图片描述",
                },
                null,
                8,
                ze
              ),
            ]),
            i("li", null, k(n(s).query.content), 1),
          ])
        );
      };
    },
  }),
  Ke = w("user", {
    state: () => ({ token: localStorage.getItem("token") || null }),
    actions: {
      async login(e) {
        try {
          if (!this._validateEmail(e.email)) throw new Error("邮箱格式不正确");
          if (e.password.length < 6) throw new Error("密码长度不能小于6位");
          return new Promise((t) => {
            setTimeout(() => {
              if ("123456" !== e.password) throw new Error("密码错误");
              (this.token = "fake-jwt-token"),
                localStorage.setItem("token", this.token),
                t(!0);
            }, 1e3);
          });
        } catch (t) {
          throw t;
        }
      },
      async register(e) {
        try {
          if (e.password.length < 6) throw new Error("密码长度不能小于6位");
          return (
            (this.token = "fake-jwt-token"),
            localStorage.setItem("token", this.token),
            !0
          );
        } catch (t) {
          throw t;
        }
      },
      logout() {
        (this.token = null), localStorage.removeItem("token");
      },
      _validateEmail: (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
    },
  }),
  Ze = { class: "auth-page" },
  $e = { class: "auth-container" },
  et = { class: "form-container" },
  tt = { class: "form-group" },
  at = { key: 0, class: "error-message" },
  st = { class: "form-group" },
  it = { key: 0, class: "error-message" },
  rt = ["disabled"],
  lt = { key: 0, class: "error-message main-error" },
  nt = { class: "register-link" },
  ot = O(
    s({
      __name: "login",
      setup(t) {
        const s = C(),
          n = Ke(),
          o = u({ email: "", password: "" }),
          c = u({ email: "", password: "" }),
          p = u(""),
          d = u(!1),
          m = async () => {
            if (
              (() => {
                let e = !0;
                return (
                  (c.value = { email: "", password: "" }),
                  o.value.email
                    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.email) ||
                      ((c.value.email = "邮箱格式不正确"), (e = !1))
                    : ((c.value.email = "邮箱不能为空"), (e = !1)),
                  o.value.password
                    ? o.value.password.length < 6 &&
                      ((c.value.password = "密码长度不能小于6位"), (e = !1))
                    : ((c.value.password = "密码不能为空"), (e = !1)),
                  e
                );
              })()
            ) {
              (p.value = ""), (d.value = !0);
              try {
                (await n.login(o.value)) && s.push("/home");
              } catch (e) {
                p.value = e.message || "登录失败，请稍后重试";
              } finally {
                d.value = !1;
              }
            }
          };
        return (t, s) => {
          const n = A("router-link");
          return (
            a(),
            e("div", Ze, [
              i("div", $e, [
                s[7] ||
                  (s[7] = i(
                    "div",
                    { class: "carousel-container" },
                    [
                      i("div", { class: "carousel" }, [
                        i("div", { class: "slides" }, [
                          i("img", {
                            src: "../static/jpg/dl.Ctej4ZHJ.jpg",
                            alt: "hah",
                          }),
                        ]),
                      ]),
                    ],
                    -1
                  )),
                i("div", et, [
                  s[6] || (s[6] = i("h2", null, "欢迎登录", -1)),
                  i(
                    "form",
                    { class: "auth-form", onSubmit: P(m, ["prevent"]) },
                    [
                      i("div", tt, [
                        s[2] || (s[2] = i("label", null, "邮箱", -1)),
                        E(
                          i(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[0] || (s[0] = (e) => (o.value.email = e)),
                              type: "email",
                              placeholder: "请输入邮箱",
                              class: j({ error: c.value.email }),
                            },
                            null,
                            2
                          ),
                          [[R, o.value.email]]
                        ),
                        c.value.email
                          ? (a(), e("div", at, k(c.value.email), 1))
                          : b("", !0),
                      ]),
                      i("div", st, [
                        s[3] || (s[3] = i("label", null, "密码", -1)),
                        E(
                          i(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[1] || (s[1] = (e) => (o.value.password = e)),
                              type: "password",
                              placeholder: "请输入密码（至少6位）",
                              class: j({ error: c.value.password }),
                            },
                            null,
                            2
                          ),
                          [[R, o.value.password]]
                        ),
                        c.value.password
                          ? (a(), e("div", it, k(c.value.password), 1))
                          : b("", !0),
                      ]),
                      i(
                        "button",
                        { type: "submit", disabled: d.value },
                        k(d.value ? "登录中..." : "登录"),
                        9,
                        rt
                      ),
                      p.value ? (a(), e("div", lt, k(p.value), 1)) : b("", !0),
                      i("p", nt, [
                        s[5] || (s[5] = g(" 没有账号？")),
                        r(
                          n,
                          { to: "/reg" },
                          {
                            default: l(() => s[4] || (s[4] = [g("立即注册")])),
                            _: 1,
                          }
                        ),
                      ]),
                    ],
                    32
                  ),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-7c211f8d"]]
  ),
  ct = { class: "auth-page" },
  pt = { class: "auth-container" },
  gt = { class: "form-container" },
  ut = { class: "form-group" },
  dt = { key: 0, class: "error-message" },
  mt = { class: "form-group" },
  vt = { key: 0, class: "error-message" },
  jt = { class: "form-group" },
  ft = { key: 0, class: "error-message" },
  At = ["disabled"],
  ht = { key: 0, class: "error-message main-error" },
  wt = { class: "login-link" },
  yt = O(
    s({
      __name: "register",
      setup(t) {
        const s = C(),
          n = Ke(),
          o = u({ email: "", password: "", confirmPassword: "" }),
          c = u({ email: "", password: "", confirmPassword: "" }),
          p = u(""),
          d = u(!1),
          m = async () => {
            if (
              (() => {
                let e = !0;
                return (
                  (c.value = { email: "", password: "", confirmPassword: "" }),
                  o.value.email
                    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.email) ||
                      ((c.value.email = "邮箱格式不正确"), (e = !1))
                    : ((c.value.email = "邮箱不能为空"), (e = !1)),
                  o.value.password
                    ? o.value.password.length < 6 &&
                      ((c.value.password = "密码长度不能小于6位"), (e = !1))
                    : ((c.value.password = "密码不能为空"), (e = !1)),
                  o.value.password !== o.value.confirmPassword &&
                    ((c.value.confirmPassword = "两次输入的密码不一致"),
                    (e = !1)),
                  e
                );
              })()
            ) {
              (p.value = ""), (d.value = !0);
              try {
                await n.register({
                  email: o.value.email,
                  password: o.value.password,
                }),
                  s.push("/home");
              } catch (e) {
                p.value = e.message || "注册失败，请稍后重试";
              } finally {
                d.value = !1;
              }
            }
          };
        return (t, s) => {
          const n = A("router-link");
          return (
            a(),
            e("div", ct, [
              i("div", pt, [
                s[9] ||
                  (s[9] = i(
                    "div",
                    { class: "carousel-container" },
                    [
                      i("div", { class: "carousel" }, [
                        i("div", { class: "slides" }, [
                          i("img", {
                            src: "../jpg/zc.Dm6QYKzu.jpg",
                            alt: "hah",
                          }),
                        ]),
                      ]),
                    ],
                    -1
                  )),
                i("div", gt, [
                  s[8] || (s[8] = i("h2", null, "注册", -1)),
                  i(
                    "form",
                    { class: "auth-form", onSubmit: P(m, ["prevent"]) },
                    [
                      i("div", ut, [
                        s[3] || (s[3] = i("label", null, "邮箱", -1)),
                        E(
                          i(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[0] || (s[0] = (e) => (o.value.email = e)),
                              type: "email",
                              placeholder: "请输入邮箱",
                              class: j({ error: c.value.email }),
                            },
                            null,
                            2
                          ),
                          [[R, o.value.email]]
                        ),
                        c.value.email
                          ? (a(), e("div", dt, k(c.value.email), 1))
                          : b("", !0),
                      ]),
                      i("div", mt, [
                        s[4] || (s[4] = i("label", null, "密码", -1)),
                        E(
                          i(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[1] || (s[1] = (e) => (o.value.password = e)),
                              type: "password",
                              placeholder: "请输入密码（至少6位）",
                              class: j({ error: c.value.password }),
                            },
                            null,
                            2
                          ),
                          [[R, o.value.password]]
                        ),
                        c.value.password
                          ? (a(), e("div", vt, k(c.value.password), 1))
                          : b("", !0),
                      ]),
                      i("div", jt, [
                        s[5] || (s[5] = i("label", null, "确认密码", -1)),
                        E(
                          i(
                            "input",
                            {
                              "onUpdate:modelValue":
                                s[2] ||
                                (s[2] = (e) => (o.value.confirmPassword = e)),
                              type: "password",
                              placeholder: "请再次输入密码",
                              class: j({ error: c.value.confirmPassword }),
                            },
                            null,
                            2
                          ),
                          [[R, o.value.confirmPassword]]
                        ),
                        c.value.confirmPassword
                          ? (a(), e("div", ft, k(c.value.confirmPassword), 1))
                          : b("", !0),
                      ]),
                      i(
                        "button",
                        { type: "submit", disabled: d.value },
                        k(d.value ? "注册中..." : "立即注册"),
                        9,
                        At
                      ),
                      p.value ? (a(), e("div", ht, k(p.value), 1)) : b("", !0),
                      i("p", wt, [
                        s[7] || (s[7] = g(" 已有账号？")),
                        r(
                          n,
                          { to: "/login" },
                          {
                            default: l(() => s[6] || (s[6] = [g("立即登录")])),
                            _: 1,
                          }
                        ),
                      ]),
                    ],
                    32
                  ),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-33401892"]]
  ),
  bt = { class: "default-news" };
const kt = O({}, [
    [
      "render",
      function (t, s) {
        return (
          a(),
          e(
            "div",
            bt,
            s[0] ||
              (s[0] = [
                i("h3", null, "欢迎访问最新资讯", -1),
                i(
                  "img",
                  { src: "./static/new.BEbyREVM.jpg", alt: "" },
                  null,
                  -1
                ),
                i("p", null, "请点击左侧的新闻标题，查看详细内容。", -1),
              ])
          )
        );
      },
    ],
    ["__scopeId", "data-v-879975bc"],
  ]),
  Ct = B({
    history: L(),
    routes: [
      { path: "/", redirect: "/login" },
      { path: "/login", component: ot },
      { path: "/reg", component: yt },
      {
        path: "/home",
        component: we,
        meta: { requiresAuth: !0 },
        redirect: "home/mainnew",
        children: [
          { name: "detail", path: "detail", component: Ne },
          { path: "mainnew", component: kt },
        ],
      },
      { path: "/cart", component: Se, meta: { requiresAuth: !0 } },
      { path: "/sale", component: Te, meta: { requiresAuth: !0 } },
      {
        path: "/search",
        name: "SearchResults",
        component: () =>
          H(
            () => import("./SearchResults.DxrE_s2y.js"),
            __vite__mapDeps([0, 1, 2, 3])
          ),
      },
      {
        path: "/product",
        name: "ProductDetail",
        component: () =>
          H(
            () => import("./ProductDetail.DLb1AoNv.js"),
            __vite__mapDeps([4, 1, 2, 5])
          ).then((e) => e.default || e),
      },
    ],
  });
Ct.beforeEach((e, t, a) => {
  const s = localStorage.getItem("token");
  e.meta.requiresAuth && !s ? a("/login") : a();
});
const Et = I(),
  Rt = S(Q);
Rt.use(Ct), Rt.use(Et), Rt.use(D);
for (const [Ut, Pt] of Object.entries(M)) Rt.component(Ut, Pt);
Rt.mount("#app");
export { O as _, ae as p, re as u };
