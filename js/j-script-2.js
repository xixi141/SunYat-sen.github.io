(() => {
  var e = {
      9858: function (e, t, o) {
        "use strict";
        var n = o(3949),
          r = o(5134);
        let i = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35,
          },
          a = /^#[a-zA-Z0-9\-_]+$/;
        n.define(
          "dropdown",
          (e.exports = function (e, t) {
            var o,
              l,
              d = t.debounce,
              s = {},
              u = n.env(),
              c = !1,
              f = n.env.touch,
              g = ".w-dropdown",
              p = "w--open",
              v = r.triggers,
              h = "focusout" + g,
              m = "keydown" + g,
              w = "mouseenter" + g,
              b = "mousemove" + g,
              O = "mouseleave" + g,
              y = (f ? "click" : "mouseup") + g,
              x = "w-close" + g,
              R = "setting" + g,
              E = e(document);
            function k() {
              (o = u && n.env("design")), (l = E.find(g)).each(A);
            }
            function A(t, r) {
              var l,
                s,
                c,
                f,
                v,
                b,
                O,
                k,
                A,
                _,
                M = e(r),
                S = e.data(r, g);
              S ||
                (S = e.data(r, g, {
                  open: !1,
                  el: M,
                  config: {},
                  selectedIdx: -1,
                })),
                (S.toggle = S.el.children(".w-dropdown-toggle")),
                (S.list = S.el.children(".w-dropdown-list")),
                (S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)")),
                (S.complete =
                  ((l = S),
                  function () {
                    l.list.removeClass(p),
                      l.toggle.removeClass(p),
                      l.manageZ && l.el.css("z-index", "");
                  })),
                (S.mouseLeave =
                  ((s = S),
                  function () {
                    (s.hovering = !1), s.links.is(":focus") || I(s);
                  })),
                (S.mouseUpOutside =
                  ((c = S).mouseUpOutside && E.off(y, c.mouseUpOutside),
                  d(function (t) {
                    if (c.open) {
                      var o = e(t.target);
                      if (!o.closest(".w-dropdown-toggle").length) {
                        var r = -1 === e.inArray(c.el[0], o.parents(g)),
                          i = n.env("editor");
                        if (r) {
                          if (i) {
                            var a =
                                1 === o.parents().length &&
                                1 === o.parents("svg").length,
                              l = o.parents(
                                ".w-editor-bem-EditorHoverControls"
                              ).length;
                            if (a || l) return;
                          }
                          I(c);
                        }
                      }
                    }
                  }))),
                (S.mouseMoveOutside =
                  ((f = S),
                  d(function (t) {
                    if (f.open) {
                      var o = e(t.target);
                      if (-1 === e.inArray(f.el[0], o.parents(g))) {
                        var n = o.parents(
                            ".w-editor-bem-EditorHoverControls"
                          ).length,
                          r = o.parents(".w-editor-bem-RTToolbar").length,
                          i = e(".w-editor-bem-EditorOverlay"),
                          a =
                            i.find(".w-editor-edit-outline").length ||
                            i.find(".w-editor-bem-RTToolbar").length;
                        if (n || r || a) return;
                        (f.hovering = !1), I(f);
                      }
                    }
                  }))),
                T(S);
              var j = S.toggle.attr("id"),
                D = S.list.attr("id");
              j || (j = "w-dropdown-toggle-" + t),
                D || (D = "w-dropdown-list-" + t),
                S.toggle.attr("id", j),
                S.toggle.attr("aria-controls", D),
                S.toggle.attr("aria-haspopup", "menu"),
                S.toggle.attr("aria-expanded", "false"),
                S.toggle
                  .find(".w-icon-dropdown-toggle")
                  .attr("aria-hidden", "true"),
                "BUTTON" !== S.toggle.prop("tagName") &&
                  (S.toggle.attr("role", "button"),
                  S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")),
                S.list.attr("id", D),
                S.list.attr("aria-labelledby", j),
                S.links.each(function (e, t) {
                  t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                    a.test(t.hash) &&
                      t.addEventListener("click", I.bind(null, S));
                }),
                S.el.off(g),
                S.toggle.off(g),
                S.nav && S.nav.off(g);
              var N = P(S, !0);
              o &&
                S.el.on(
                  R,
                  ((v = S),
                  function (e, t) {
                    (t = t || {}),
                      T(v),
                      !0 === t.open && C(v),
                      !1 === t.open && I(v, { immediate: !0 });
                  })
                ),
                o ||
                  (u && ((S.hovering = !1), I(S)),
                  S.config.hover &&
                    S.toggle.on(
                      w,
                      ((b = S),
                      function () {
                        (b.hovering = !0), C(b);
                      })
                    ),
                  S.el.on(x, N),
                  S.el.on(
                    m,
                    ((O = S),
                    function (e) {
                      if (!o && O.open)
                        switch (
                          ((O.selectedIdx = O.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case i.HOME:
                            if (!O.open) return;
                            return (
                              (O.selectedIdx = 0), W(O), e.preventDefault()
                            );
                          case i.END:
                            if (!O.open) return;
                            return (
                              (O.selectedIdx = O.links.length - 1),
                              W(O),
                              e.preventDefault()
                            );
                          case i.ESCAPE:
                            return I(O), O.toggle.focus(), e.stopPropagation();
                          case i.ARROW_RIGHT:
                          case i.ARROW_DOWN:
                            return (
                              (O.selectedIdx = Math.min(
                                O.links.length - 1,
                                O.selectedIdx + 1
                              )),
                              W(O),
                              e.preventDefault()
                            );
                          case i.ARROW_LEFT:
                          case i.ARROW_UP:
                            return (
                              (O.selectedIdx = Math.max(-1, O.selectedIdx - 1)),
                              W(O),
                              e.preventDefault()
                            );
                        }
                    })
                  ),
                  S.el.on(
                    h,
                    ((k = S),
                    d(function (e) {
                      var { relatedTarget: t, target: o } = e,
                        n = k.el[0];
                      return (
                        n.contains(t) || n.contains(o) || I(k),
                        e.stopPropagation()
                      );
                    }))
                  ),
                  S.toggle.on(y, N),
                  S.toggle.on(
                    m,
                    ((_ = P((A = S), !0)),
                    function (e) {
                      if (!o) {
                        if (!A.open)
                          switch (e.keyCode) {
                            case i.ARROW_UP:
                            case i.ARROW_DOWN:
                              return e.stopPropagation();
                          }
                        switch (e.keyCode) {
                          case i.SPACE:
                          case i.ENTER:
                            return _(), e.stopPropagation(), e.preventDefault();
                        }
                      }
                    })
                  ),
                  (S.nav = S.el.closest(".w-nav")),
                  S.nav.on(x, N));
            }
            function T(e) {
              var t = Number(e.el.css("z-index"));
              (e.manageZ = 900 === t || 901 === t),
                (e.config = {
                  hover: "true" === e.el.attr("data-hover") && !f,
                  delay: e.el.attr("data-delay"),
                });
            }
            function P(e, t) {
              return d(function (o) {
                if (e.open || (o && "w-close" === o.type))
                  return I(e, { forceClose: t });
                C(e);
              });
            }
            function C(t) {
              if (!t.open) {
                (r = t.el[0]),
                  l.each(function (t, o) {
                    var n = e(o);
                    n.is(r) || n.has(r).length || n.triggerHandler(x);
                  }),
                  (t.open = !0),
                  t.list.addClass(p),
                  t.toggle.addClass(p),
                  t.toggle.attr("aria-expanded", "true"),
                  v.intro(0, t.el[0]),
                  n.redraw.up(),
                  t.manageZ && t.el.css("z-index", 901);
                var r,
                  i = n.env("editor");
                o || E.on(y, t.mouseUpOutside),
                  t.hovering && !i && t.el.on(O, t.mouseLeave),
                  t.hovering && i && E.on(b, t.mouseMoveOutside),
                  window.clearTimeout(t.delayId);
              }
            }
            function I(e, { immediate: t, forceClose: o } = {}) {
              if (e.open && (!e.config.hover || !e.hovering || o)) {
                e.toggle.attr("aria-expanded", "false"), (e.open = !1);
                var n = e.config;
                if (
                  (v.outro(0, e.el[0]),
                  E.off(y, e.mouseUpOutside),
                  E.off(b, e.mouseMoveOutside),
                  e.el.off(O, e.mouseLeave),
                  window.clearTimeout(e.delayId),
                  !n.delay || t)
                )
                  return e.complete();
                e.delayId = window.setTimeout(e.complete, n.delay);
              }
            }
            function W(e) {
              e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
            }
            return (
              (s.ready = k),
              (s.design = function () {
                c &&
                  E.find(g).each(function (t, o) {
                    e(o).triggerHandler(x);
                  }),
                  (c = !1),
                  k();
              }),
              (s.preview = function () {
                (c = !0), k();
              }),
              s
            );
          })
        );
      },
      3150: function (e, t, o) {
        o(9461),
          o(7624),
          o(286),
          o(8334),
          o(2338),
          o(3695),
          o(322),
          o(2570),
          o(7199),
          o(941),
          o(5134),
          o(1655),
          o(7527),
          o(9858),
          o(3778);
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var i = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n](i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.m = e),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (o.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      o.O = (t, n, r, i) => {
        if (n) {
          i = i || 0;
          for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
          e[a] = [n, r, i];
          return;
        }
        for (var l = 1 / 0, a = 0; a < e.length; a++) {
          for (var [n, r, i] = e[a], d = !0, s = 0; s < n.length; s++)
            (!1 & i || l >= i) && Object.keys(o.O).every((e) => o.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), i < l && (l = i));
          if (d) {
            e.splice(a--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      };
    })(),
    (o.rv = () => "1.3.9"),
    (() => {
      var e = { 264: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            i,
            [a, l, d] = n,
            s = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (r in l) o.o(l, r) && (o.m[r] = l[r]);
            if (d) var u = d(o);
          }
          for (t && t(n); s < a.length; s++)
            (i = a[s]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(u);
        },
        n = (self.webpackChunk = self.webpackChunk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (o.ruid = "bundler=rspack@1.3.9");
  var n = o.O(void 0, ["87", "600"], function () {
    return o(3150);
  });
  n = o.O(n);
})();
