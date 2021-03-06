// Fancybox,Isotope,Menu, and other plugins minified

!(function (i) {
  "use strict";
  var t = "desktop";
  "function" == typeof window.matchMedia
    ? (i(window).on("resize logisco-set-display", function () {
        t = window.matchMedia("(max-width: 419px)").matches
          ? "mobile-portrait"
          : window.matchMedia("(max-width: 767px)").matches
          ? "mobile-landscape"
          : window.matchMedia("(max-width: 959px)").matches
          ? "tablet"
          : "desktop";
      }),
      i(window).trigger("logisco-set-display"))
    : (i(window).on("resize logisco-set-display", function () {
        t =
          i(window).innerWidth() <= 419
            ? "mobile-portrait"
            : i(window).innerWidth() <= 767
            ? "mobile-landscape"
            : i(window).innerWidth() <= 959
            ? "tablet"
            : "desktop";
      }),
      i(window).trigger("logisco-set-display"));
  var o = function (i) {
    0 != i.length &&
      ((this.main_menu = i),
      (this.slide_bar = this.main_menu.children(
        ".logisco-navigation-slide-bar"
      )),
      (this.slide_bar_val = { width: 0, left: 0 }),
      (this.slide_bar_offset = "0"),
      (this.current_menu = this.main_menu
        .children(".sf-menu")
        .children(".current-menu-item, .current-menu-ancestor")
        .children("a")),
      this.init());
  };
  (o.prototype = {
    init: function () {
      var t,
        o,
        e,
        n,
        s = this;
      s.sf_menu_mod(),
        "function" == typeof i.fn.superfish &&
          (s.main_menu.superfish({ delay: 400, speed: "fast" }),
          s.sf_menu_position(),
          i(window).resize(
            ((t = function () {
              s.sf_menu_position();
            }),
            (o = 300),
            function () {
              var i = this,
                s = arguments;
              n ? clearTimeout(n) : e && t.apply(i, s),
                (n = setTimeout(function () {
                  e || t.apply(i, s), (n = null);
                }, o));
            })
          )),
        s.slide_bar.length > 0 && s.init_slidebar();
    },
    sf_menu_mod: function () {
      this.main_menu.find(".sf-mega > ul").each(function () {
        var t = i("<div></div>"),
          o = i('<div class="sf-mega-section-wrap" ></div>'),
          e = 0;
        i(this)
          .children("li")
          .each(function () {
            var n = parseInt(i(this).attr("data-size"));
            e + n <= 60
              ? (e += n)
              : ((e = n),
                t.append(o),
                (o = i('<div class="sf-mega-section-wrap" ></div>'))),
              o.append(
                i('<div class="sf-mega-section" ></div>')
                  .addClass("logisco-column-" + n)
                  .html(
                    i('<div class="sf-mega-section-inner" ></div>')
                      .addClass(i(this).attr("class"))
                      .attr("id", i(this).attr("id"))
                      .html(i(this).html())
                  )
              );
          }),
          t.append(o),
          i(this).replaceWith(t.html());
      });
    },
    sf_menu_position: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var o = i(".logisco-body-wrapper"),
          e = this.main_menu.find(
            ".sf-menu > li.logisco-normal-menu .sub-menu"
          );
        e.css({ display: "block" }).removeClass("sub-menu-right"),
          e.each(function () {
            i(this).offset().left + i(this).width() > o.outerWidth() &&
              i(this).addClass("sub-menu-right");
          }),
          e.css({ display: "none" }),
          this.main_menu
            .find(".sf-menu > li.logisco-mega-menu .sf-mega")
            .each(function () {
              i(this).hasClass("sf-mega-full") ||
                (i(this).css({ display: "block" }),
                i(this).css({
                  right: "",
                  "margin-left":
                    -(i(this).width() - i(this).parent().outerWidth()) / 2,
                }),
                i(this).offset().left + i(this).width() > i(window).width() &&
                  i(this).css({ right: 0, "margin-left": "" }),
                i(this).css({ display: "none" }));
            });
      }
    },
    init_slidebar: function () {
      var t = this;
      t.init_slidebar_pos(),
        i(window).load(function () {
          t.init_slidebar_pos();
        }),
        t.main_menu
          .children(".sf-menu")
          .children("li")
          .on({
            mouseenter: function () {
              var o = i(this).children("a");
              o.length > 0 &&
                t.slide_bar.animate(
                  {
                    width: o.outerWidth() + 2 * t.slide_bar_offset,
                    left: o.position().left - t.slide_bar_offset,
                  },
                  { queue: !1, duration: 250 }
                );
            },
            mouseleave: function () {
              t.slide_bar.animate(
                { width: t.slide_bar_val.width, left: t.slide_bar_val.left },
                { queue: !1, duration: 250 }
              );
            },
          }),
        i(window).on("resize", function () {
          t.init_slidebar_pos();
        }),
        i(window).on("logisco-navigation-slider-bar-init", function () {
          (t.current_menu = t.main_menu
            .children(".sf-menu")
            .children(".current-menu-item, .current-menu-ancestor")
            .children("a")),
            t.animate_slidebar_pos();
        }),
        i(window).on("logisco-navigation-slider-bar-animate", function () {
          t.animate_slidebar_pos();
        });
    },
    init_slidebar_pos: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var i = this;
        i.current_menu.length > 0
          ? (i.slide_bar_val = {
              width: i.current_menu.outerWidth() + 2 * i.slide_bar_offset,
              left: i.current_menu.position().left - i.slide_bar_offset,
            })
          : (i.slide_bar_val = {
              width: 0,
              left: i.main_menu
                .children("ul")
                .children("li:first-child")
                .position().left,
            }),
          i.slide_bar.css({
            width: i.slide_bar_val.width,
            left: i.slide_bar_val.left,
            display: "block",
          });
      }
    },
    animate_slidebar_pos: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var i = this;
        i.current_menu.length > 0
          ? (i.slide_bar_val = {
              width: i.current_menu.outerWidth() + 2 * i.slide_bar_offset,
              left: i.current_menu.position().left - i.slide_bar_offset,
            })
          : (i.slide_bar_val = {
              width: 0,
              left: i.main_menu
                .children("ul")
                .children("li:first-child")
                .position().left,
            }),
          i.slide_bar.animate(
            { width: i.slide_bar_val.width, left: i.slide_bar_val.left },
            { queue: !1, duration: 250 }
          );
      }
    },
  }),
    (i.fn.logisco_mobile_menu = function (t) {
      var o = i(this).siblings(".logisco-mm-menu-button"),
        e = {
          navbar: { title: '<span class="mmenu-custom-close" ></span>' },
          extensions: ["pagedim-black"],
        };
      if (
        (i(this)
          .find('a[href="#"]')
          .each(function () {
            var t = i(this).html();
            i('<span class="logisco-mm-menu-blank" ></span>')
              .html(t)
              .insertBefore(i(this)),
              i(this).remove();
          }),
        i(this).attr("data-slide"))
      ) {
        var n = "logisco-mmenu-" + i(this).attr("data-slide");
        i("html").addClass(n),
          (e.offCanvas = { position: i(this).attr("data-slide") });
      }
      i(this).mmenu(e, {
        offCanvas: { pageNodetype: ".logisco-body-outer-wrapper" },
      });
      var s = i(this).data("mmenu");
      i(this)
        .find("a")
        .not(".mm-next, .mm-prev")
        .on("click", function () {
          s.close();
        }),
        i(this)
          .find(".mmenu-custom-close")
          .on("click", function () {
            s.close();
          }),
        i(window).resize(function () {
          s.close();
        }),
        s.bind("open", function (i) {
          o.addClass("logisco-active");
        }),
        s.bind("close", function (i) {
          o.removeClass("logisco-active");
        });
    });
  var e = function (i) {
    (this.menu = i),
      (this.menu_button = i.children(".logisco-overlay-menu-icon")),
      (this.menu_content = i.children(".logisco-overlay-menu-content")),
      (this.menu_close = this.menu_content.children(
        ".logisco-overlay-menu-close"
      )),
      this.init();
  };
  e.prototype = {
    init: function () {
      var t = this,
        o = 0;
      t.menu_content.appendTo("body"),
        t.menu_content.find("ul.menu > li").each(function () {
          i(this).css("transition-delay", 150 * o + "ms"), o++;
        }),
        t.menu_button.on("click", function () {
          return (
            i(this).addClass("logisco-active"),
            t.menu_content.fadeIn(200, function () {
              i(this).addClass("logisco-active");
            }),
            !1
          );
        }),
        t.menu_close.on("click", function () {
          return (
            t.menu_button.removeClass("logisco-active"),
            t.menu_content.fadeOut(400, function () {
              i(this).removeClass("logisco-active");
            }),
            t.menu_content
              .find(".sub-menu")
              .slideUp(200)
              .removeClass("logisco-active"),
            !1
          );
        }),
        t.menu_content.find("a").on("click", function (o) {
          var e = i(this).siblings(".sub-menu");
          if (e.length > 0) {
            if (!e.hasClass("logisco-active")) {
              var n = e
                .closest("li")
                .siblings()
                .find(".sub-menu.logisco-active");
              return (
                n.length > 0
                  ? (n.removeClass("logisco-active").slideUp(150),
                    e
                      .delay(150)
                      .slideDown(400, "easeOutQuart")
                      .addClass("logisco-active"))
                  : e.slideDown(400, "easeOutQuart").addClass("logisco-active"),
                i(this).addClass("logisco-no-preload"),
                !1
              );
            }
            i(this).removeClass("logisco-no-preload");
          } else t.menu_close.trigger("click");
        });
    },
  };
  var n = function (i) {
    0 != i.length &&
      ((this.prev_scroll = 0),
      (this.side_nav = i),
      (this.side_nav_content = i.children()),
      this.init());
  };
  n.prototype = {
    init: function () {
      var o = this;
      o.init_nav_bar_element(),
        i(window).resize(function () {
          o.init_nav_bar_element();
        }),
        i(window).scroll(function () {
          if (
            "mobile-landscape" != t &&
            "mobile-portrait" != t &&
            "tablet" != t &&
            o.side_nav.hasClass("logisco-allow-slide")
          ) {
            var e = parseInt(i("html").css("margin-top")),
              n = i(window).scrollTop() > o.prev_scroll;
            if (((o.prev_scroll = i(window).scrollTop()), n))
              o.side_nav.hasClass("logisco-fix-bottom") ||
                (o.side_nav.hasClass("logisco-fix-top")
                  ? (o.side_nav.css("top", o.side_nav.offset().top),
                    o.side_nav.removeClass("logisco-fix-top"))
                  : i(window).height() + i(window).scrollTop() >
                      o.side_nav_content.offset().top +
                        o.side_nav_content.outerHeight() &&
                    (o.side_nav.hasClass("logisco-fix-bottom") ||
                      (o.side_nav.addClass("logisco-fix-bottom"),
                      o.side_nav.css("top", ""))));
            else if (!o.side_nav.hasClass("logisco-fix-top"))
              if (o.side_nav.hasClass("logisco-fix-bottom")) {
                var s =
                  i(window).scrollTop() +
                  (i(window).height() - e) -
                  o.side_nav_content.outerHeight();
                o.side_nav.css("top", s),
                  o.side_nav.removeClass("logisco-fix-bottom");
              } else
                i(window).scrollTop() + e < o.side_nav_content.offset().top &&
                  (o.side_nav.hasClass("logisco-fix-top") ||
                    (o.side_nav.addClass("logisco-fix-top"),
                    o.side_nav.css("top", "")));
          }
        });
    },
    init_nav_bar_element: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var o = this,
          e = o.side_nav_content
            .children(".logisco-pos-middle")
            .addClass("logisco-active"),
          n = o.side_nav_content
            .children(".logisco-pos-bottom")
            .addClass("logisco-active");
        o.side_nav_content.children(".logisco-pre-spaces").remove(),
          i(window).height() < o.side_nav_content.height()
            ? o.side_nav.addClass("logisco-allow-slide")
            : (o.side_nav
                .removeClass(
                  "logisco-allow-slide logisco-fix-top logisco-fix-bottom"
                )
                .css("top", ""),
              o.side_nav.hasClass("logisco-style-middle") &&
                e.each(function () {
                  var t = parseInt(i(this).css("padding-top")),
                    e =
                      (o.side_nav.height() -
                        (o.side_nav_content.height() - t)) /
                        2 -
                      t;
                  e > 0 &&
                    i('<div class="logisco-pre-spaces" ></div>')
                      .css("height", e)
                      .insertBefore(i(this));
                }),
              n.each(function () {
                var t = o.side_nav.height() - o.side_nav_content.height();
                t > 0 &&
                  i('<div class="logisco-pre-spaces" ></div>')
                    .css("height", t)
                    .insertBefore(i(this));
              }));
      }
    },
  };
  var s = function () {
    (this.anchor_link = i('a[href*="#"]')
      .not('[href="#"]')
      .filter(function () {
        return (
          !i(this).is(
            ".logisco-mm-menu-button, .mm-next, .mm-prev, .mm-title, .gdlr-core-ilightbox"
          ) &&
          !i(this).is(".fbx-btn-transition") &&
          !i(this).parent(".description_tab, .reviews_tab").length &&
          !i(this).not('[class^="logisco"]').closest(".woocommerce").length
        );
      })),
      this.anchor_link.length &&
        ((this.menu_anchor = i("#logisco-main-menu, #logisco-bullet-anchor")),
        (this.home_anchor = this.menu_anchor.find(
          "ul.sf-menu > li.current-menu-item > a, ul.sf-menu > li.current-menu-ancestor > a, .logisco-bullet-anchor-link.current-menu-item"
        )),
        this.init());
  };
  s.prototype = {
    init: function () {
      var t = this;
      t.animate_anchor(),
        t.scroll_section(),
        t.menu_anchor.filter("#logisco-bullet-anchor").each(function () {
          i(this)
            .css("margin-top", -t.menu_anchor.height() / 2)
            .addClass("logisco-init");
        });
      var o = window.location.hash;
      o &&
        setTimeout(function () {
          var e = t.menu_anchor.find('a[href*="' + o + '"]');
          e.is(".current-menu-item, .current-menu-ancestor") ||
            (e
              .addClass("current-menu-item")
              .siblings()
              .removeClass("current-menu-item current-menu-ancestor"),
            i(window).trigger("logisco-navigation-slider-bar-init")),
            t.scroll_to(o, !1, 300);
        }, 500);
    },
    animate_anchor: function () {
      var t = this;
      t.home_anchor.on("click", function () {
        if (window.location.href == this.href)
          return (
            i("html, body").animate(
              { scrollTop: 0 },
              { duration: 1500, easing: "easeOutQuart" }
            ),
            !1
          );
      }),
        t.anchor_link.on("click", function () {
          if (
            location.hostname == this.hostname &&
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "")
          )
            return t.scroll_to(this.hash, !0);
        });
    },
    scroll_to: function (o, e, n) {
      if ("#logisco-top-anchor" == o) var s = 0;
      else {
        var a = i(o);
        if (a.length) s = a.offset().top;
      }
      return void 0 !== s
        ? ((s -= parseInt(i("html").css("margin-top"))),
          "mobile-portrait" == t || "mobile-landscape" == t
            ? (s -= 75)
            : void 0 !== window.logisco_anchor_offset &&
              (s -= parseInt(window.logisco_anchor_offset)),
          s < 0 && (s = 0),
          i("html, body").animate(
            { scrollTop: s },
            { duration: 1500, easing: "easeOutQuart", queue: !1 }
          ),
          !1)
        : e
        ? ((window.location.href = i("body").attr("data-home-url") + o), !1)
        : void 0;
    },
    scroll_section: function () {
      var o = this,
        e = this.menu_anchor.find('a[href*="#"]').not('[href="#"]');
      if (e.length) {
        var n = i("#logisco-page-wrapper"),
          s = n.find("div[id], section[id]");
        s.length &&
          (e.each(function () {
            0 == i(this).closest(".sub-menu").length &&
              i(this.hash).length &&
              i(this).attr("data-anchor", this.hash);
          }),
          i(window).scroll(function () {
            if (
              "mobile-landscape" != t &&
              "mobile-portrait" != t &&
              "tablet" != t
            )
              if (
                o.home_anchor.length &&
                i(window).scrollTop() <= n.offset().top
              )
                o.home_anchor.each(function () {
                  i(this).hasClass("logisco-bullet-anchor-link")
                    ? (i(this)
                        .addClass("current-menu-item")
                        .siblings()
                        .removeClass("current-menu-item"),
                      i(this)
                        .parent(".logisco-bullet-anchor")
                        .attr("data-anchor-section", "logisco-home"))
                    : i(this).parent(
                        ".current-menu-item, .current-menu-ancestor"
                      ).length ||
                      (i(this)
                        .parent()
                        .addClass("current-menu-item")
                        .siblings()
                        .removeClass("current-menu-item current-menu-ancestor"),
                      i(window).trigger("logisco-navigation-slider-bar-init"));
                });
              else {
                var a = i(window).scrollTop() + i(window).height() / 2;
                s.each(function () {
                  if ("none" != i(this).css("display")) {
                    var t = i(this).offset().top;
                    if (a > t && a < t + i(this).outerHeight()) {
                      var o = i(this).attr("id");
                      return (
                        e
                          .filter('[data-anchor="#' + o + '"]')
                          .each(function () {
                            i(this).hasClass("logisco-bullet-anchor-link")
                              ? (i(this)
                                  .addClass("current-menu-item")
                                  .siblings()
                                  .removeClass("current-menu-item"),
                                i(this)
                                  .parent(".logisco-bullet-anchor")
                                  .attr("data-anchor-section", o))
                              : i(this).parent("li.menu-item").length &&
                                !i(this)
                                  .parent("li.menu-item")
                                  .is(
                                    ".current-menu-item, .current-menu-ancestor"
                                  ) &&
                                (i(this)
                                  .parent("li.menu-item")
                                  .addClass("current-menu-item")
                                  .siblings()
                                  .removeClass(
                                    "current-menu-item current-menu-ancestor"
                                  ),
                                i(window).trigger(
                                  "logisco-navigation-slider-bar-init"
                                ));
                          }),
                        !1
                      );
                    }
                  }
                });
              }
          }));
      }
    },
  };
  var a = function () {
    var t = this;
    (t.sticky_nav = i(
      ".logisco-with-sticky-navigation .logisco-sticky-navigation"
    )),
      (t.mobile_menu = i("#logisco-mobile-header")),
      t.sticky_nav.hasClass("logisco-sticky-navigation-height")
        ? ((window.logisco_anchor_offset = t.sticky_nav.outerHeight()),
          i(window).resize(function () {
            window.logisco_anchor_offset = t.sticky_nav.outerHeight();
          }))
        : t.sticky_nav.attr("data-navigation-offset")
        ? (window.logisco_anchor_offset = parseInt(
            t.sticky_nav.attr("data-navigation-offset")
          ))
        : t.sticky_nav.length && (window.logisco_anchor_offset = 75),
      t.sticky_nav.length && t.init(),
      t.mobile_menu.hasClass("logisco-sticky-mobile-navigation") &&
        (t.style_mobile_slide(),
        i(window).trigger("logisco-set-sticky-mobile-navigation"));
  };
  a.prototype = {
    init: function () {
      var t = this;
      t.sticky_nav.hasClass("logisco-style-fixed")
        ? t.style_fixed()
        : t.sticky_nav.hasClass("logisco-style-slide") && t.style_slide(),
        i(window).trigger("logisco-set-sticky-navigation");
    },
    style_fixed: function () {
      var o = this,
        e = i('<div class="logisco-sticky-menu-placeholder" ></div>');
      i(window).on("scroll logisco-set-sticky-navigation", function () {
        if (
          "mobile-landscape" != t &&
          "mobile-portrait" != t &&
          "tablet" != t
        ) {
          var n = parseInt(i("html").css("margin-top"));
          o.sticky_nav.hasClass("logisco-fixed-navigation")
            ? i(window).scrollTop() + n <= e.offset().top &&
              (o.sticky_nav.hasClass("logisco-without-placeholder") ||
                o.sticky_nav.height(e.height()),
              o.sticky_nav.insertBefore(e),
              o.sticky_nav.removeClass("logisco-fixed-navigation"),
              e.remove(),
              setTimeout(function () {
                o.sticky_nav.removeClass("logisco-animate-fixed-navigation");
              }, 10),
              setTimeout(function () {
                o.sticky_nav.css("height", ""),
                  i(window).trigger("logisco-navigation-slider-bar-animate");
              }, 200))
            : i(window).scrollTop() + n > o.sticky_nav.offset().top &&
              (o.sticky_nav.hasClass("logisco-without-placeholder") ||
                e.height(o.sticky_nav.outerHeight()),
              e.insertAfter(o.sticky_nav),
              i("body").append(o.sticky_nav),
              o.sticky_nav.addClass("logisco-fixed-navigation"),
              setTimeout(function () {
                o.sticky_nav.addClass("logisco-animate-fixed-navigation");
              }, 10),
              setTimeout(function () {
                o.sticky_nav.css("height", ""),
                  i(window).trigger("logisco-navigation-slider-bar-animate");
              }, 200));
        }
      });
    },
    style_slide: function () {
      var o = this,
        e = i('<div class="logisco-sticky-menu-placeholder" ></div>');
      i(window).on("scroll logisco-set-sticky-navigation", function () {
        if (
          "mobile-landscape" != t &&
          "mobile-portrait" != t &&
          "tablet" != t
        ) {
          var n = parseInt(i("html").css("margin-top"));
          if (o.sticky_nav.hasClass("logisco-fixed-navigation")) {
            if (
              i(window).scrollTop() + n <=
              e.offset().top + e.height() + 200
            ) {
              var s = o.sticky_nav.clone();
              s.insertAfter(o.sticky_nav),
                s.slideUp(200, function () {
                  i(this).remove();
                }),
                o.sticky_nav.insertBefore(e),
                e.remove(),
                o.sticky_nav.removeClass(
                  "logisco-fixed-navigation logisco-animate-fixed-navigation"
                ),
                o.sticky_nav.css("display", "block"),
                i(window).trigger("logisco-navigation-slider-bar-animate");
            }
          } else
            i(window).scrollTop() + n >
              o.sticky_nav.offset().top + o.sticky_nav.outerHeight() + 200 &&
              (o.sticky_nav.hasClass("logisco-without-placeholder") ||
                e.height(o.sticky_nav.outerHeight()),
              e.insertAfter(o.sticky_nav),
              o.sticky_nav.css("display", "none"),
              i("body").append(o.sticky_nav),
              o.sticky_nav.addClass(
                "logisco-fixed-navigation logisco-animate-fixed-navigation"
              ),
              o.sticky_nav.slideDown(200),
              i(window).trigger("logisco-navigation-slider-bar-animate"));
        }
      });
    },
    style_mobile_slide: function () {
      var o = this,
        e = i('<div class="logisco-sticky-mobile-placeholder" ></div>');
      i(window).on("scroll logisco-set-sticky-mobile-navigation", function () {
        if (
          "mobile-landscape" == t ||
          "mobile-portrait" == t ||
          "tablet" == t
        ) {
          var n = parseInt(i("html").css("margin-top"));
          if (o.mobile_menu.hasClass("logisco-fixed-navigation")) {
            if (
              i(window).scrollTop() + n <=
              e.offset().top + e.height() + 200
            ) {
              var s = o.mobile_menu.clone();
              s.insertAfter(o.mobile_menu),
                s.slideUp(200, function () {
                  i(this).remove();
                }),
                o.mobile_menu.insertBefore(e),
                e.remove(),
                o.mobile_menu.removeClass("logisco-fixed-navigation"),
                o.mobile_menu.css("display", "block");
            }
          } else
            i(window).scrollTop() + n >
              o.mobile_menu.offset().top + o.mobile_menu.outerHeight() + 200 &&
              (e.height(o.mobile_menu.outerHeight()).insertAfter(o.mobile_menu),
              i("body").append(o.mobile_menu),
              o.mobile_menu.addClass("logisco-fixed-navigation"),
              o.mobile_menu.css("display", "none").slideDown(200));
        }
      });
    },
  };
  var l = function () {
    (this.heading_font = i("h1, h2, h3, h4, h5, h6")), this.init();
  };
  (l.prototype = {
    init: function () {
      var t,
        o,
        e,
        n = this;
      n.resize(),
        i(window).on(
          "resize",
          ((t = function () {
            n.resize();
          }),
          (o = 100),
          function () {
            var i = this,
              n = arguments;
            e ||
              (e = setTimeout(function () {
                t.apply(i, n), (e = null);
              }, o));
          })
        );
    },
    resize: function () {
      "mobile-landscape" == t || "mobile-portrait" == t
        ? this.heading_font.each(function () {
            parseInt(i(this).css("font-size")) > 40 &&
              (i(this).attr("data-orig-font") ||
                i(this).attr("data-orig-font", i(this).css("font-size")),
              i(this).css("font-size", "40px"));
          })
        : this.heading_font.filter("[data-orig-font]").each(function () {
            i(this).css("font-size", i(this).attr("data-orig-font"));
          });
    },
  }),
    i(document).ready(function () {
      new l(),
        i(
          "#logisco-main-menu, #logisco-right-menu, #logisco-mobile-menu, #logisco-top-bar-menu"
        ).each(function () {
          i(this).hasClass("logisco-overlay-menu")
            ? new e(i(this))
            : i(this).hasClass("logisco-mm-menu-wrap")
            ? i(this).logisco_mobile_menu()
            : new o(i(this));
        }),
        i("#logisco-top-search, #logisco-mobile-top-search").each(function () {
          var t = i(this).siblings(".logisco-top-search-wrap");
          t.appendTo("body"),
            i(this).on("click", function () {
              t.fadeIn(200, function () {
                i(this).addClass("logisco-active");
              });
            }),
            t.find(".logisco-top-search-close").on("click", function () {
              t.fadeOut(200, function () {
                i(this).addClass("logisco-active");
              });
            }),
            t.find(".search-submit").on("click", function () {
              if (0 == t.find(".search-field").val().length) return !1;
            });
        }),
        i("body").on("added_to_cart", function () {
          i.ajax({
            type: "POST",
            url: wc_add_to_cart_params.ajax_url,
            data: { action: "top_bar_woocommerce_cart" },
            dataType: "json",
            error: function (i, t, o) {
              console.log(i, t, o);
            },
            success: function (t) {
              void 0 !== t.title &&
                i(".logisco-top-cart-title").replaceWith(t.title),
                void 0 !== t["cart-items"] &&
                  i(".logisco-top-cart-item-wrap").replaceWith(t["cart-items"]);
            },
          });
        }),
        i("#logisco-dropdown-wpml-flag").hover(
          function () {
            i(this).children(".logisco-dropdown-wpml-list").fadeIn(200);
          },
          function () {
            i(this).children(".logisco-dropdown-wpml-list").fadeOut(200);
          }
        ),
        i(
          ".logisco-header-boxed-wrap, .logisco-header-background-transparent, .logisco-navigation-bar-wrap.logisco-style-transparent"
        ).each(function () {
          var t = i(this),
            o = i(".logisco-header-transparent-substitute");
          o.height(t.outerHeight()),
            i(window).on("load resize", function () {
              o.height(t.outerHeight());
            });
        }),
        i("body.error404, body.search-no-results").each(function () {
          var t = i(this).find("#logisco-full-no-header-wrap"),
            o = parseInt(
              i(this)
                .children(".logisco-body-outer-wrapper")
                .children(".logisco-body-wrapper")
                .css("margin-bottom")
            ),
            e = (i(window).height() - t.offset().top - t.outerHeight() - o) / 2;
          e > 0 && t.css({ "padding-top": e, "padding-bottom": e }),
            i(window).on("load resize", function () {
              t.css({ "padding-top": 0, "padding-bottom": 0 }),
                (e =
                  (i(window).height() - t.offset().top - t.outerHeight() - o) /
                  2) > 0 && t.css({ "padding-top": e, "padding-bottom": e });
            });
        });
      var t = i("#logisco-footer-back-to-top-button");
      t.length &&
        i(window).on("scroll", function () {
          i(window).scrollTop() > 300
            ? t.addClass("logisco-scrolled")
            : t.removeClass("logisco-scrolled");
        }),
        i("body")
          .children("#logisco-page-preload")
          .each(function () {
            var t = i(this),
              o = parseInt(t.attr("data-animation-time"));
            i("a[href]")
              .not('[href^="#"], [target="_blank"], .gdlr-core-js, .strip')
              .on("click", function (e) {
                1 != e.which ||
                  i(this).hasClass("logisco-no-preload") ||
                  e.ctrlKey ||
                  (window.location.href != this.href &&
                    t.addClass("logisco-out").fadeIn(o));
              }),
              i(window).load(function () {
                t.fadeOut(o);
              });
          }),
        i("body.logisco-blog-style-2 .logisco-single-nav-area").each(
          function () {
            var t,
              o = i(this).children();
            (t = 0),
              o.css("min-height", "0px"),
              o.each(function () {
                t < i(this).outerHeight() && (t = i(this).outerHeight());
              }),
              o.css("min-height", t),
              i(window).resize(function () {
                (t = 0),
                  o.css("min-height", "0px"),
                  o.each(function () {
                    t < i(this).outerHeight() && (t = i(this).outerHeight());
                  }),
                  o.css("min-height", t);
              });
          }
        ),
        i("[data-logisco-lb]").click(function () {
          !(function (t) {
            var o = i('<div class="logisco-lightbox-wrapper" ></div>').hide(),
              e = i('<div class="logisco-lightbox-content-cell" ></div>');
            o.append(e),
              e.wrap(i('<div class="logisco-lightbox-content-row" ></div>')),
              e.append(t);
            var n = i(window).scrollTop();
            i("html").addClass("logisco-lightbox-on"),
              i("body").append(o),
              o.fadeIn(300),
              o.on("click", ".logisco-lightbox-close", function () {
                i("html").removeClass("logisco-lightbox-on"),
                  i(window).scrollTop(n),
                  o.fadeOut(300, function () {
                    i(this).remove();
                  });
              });
          })(
            i(this)
              .siblings(
                '[data-logisco-lb-id="' + i(this).attr("data-logisco-lb") + '"]'
              )
              .clone()
          );
        });
    }),
    i(window).on("pageshow", function (t) {
      t.originalEvent.persisted &&
        i("body")
          .children("#logisco-page-preload")
          .each(function () {
            i(this).fadeOut(400);
          });
    }),
    i(window).load(function () {
      i("#logisco-fixed-footer").each(function () {
        var t = i(this),
          o = i('<div class="logisco-fixed-footer-placeholder" ></div>');
        o.insertBefore(t),
          o.height(t.outerHeight()),
          i("body").css(
            "min-height",
            i(window).height() - parseInt(i("html").css("margin-top"))
          ),
          i(window).resize(function () {
            o.height(t.outerHeight()),
              i("body").css(
                "min-height",
                i(window).height() - parseInt(i("html").css("margin-top"))
              );
          });
      }),
        new n(i("#logisco-header-side-nav")),
        new a(),
        new s();
    });
})(jQuery);
