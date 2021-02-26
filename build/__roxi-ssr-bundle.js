(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-917ef163.js
  var require_fallback_917ef163 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_917ef163_default
    });
    const main2 = __toModule(require_main());
    function n2(t3) {
      let n3, o3, a3, s2, l2, c2, p2, r2;
      return {c() {
        n3 = main2.i.element("section"), o3 = main2.i.element("h1"), o3.textContent = "404", a3 = main2.i.space(), s2 = main2.i.element("h2"), s2.textContent = "Page not found", l2 = main2.i.space(), c2 = main2.i.element("a"), c2.textContent = "Go back", main2.i.attr(o3, "class", "text-8xl font-bold"), main2.i.attr(s2, "class", "text-4xl"), main2.i.attr(c2, "href", "../"), main2.i.attr(n3, "class", "flex flex-1 flex-col items-center justify-center");
      }, m(i2, u2) {
        main2.i.insert(i2, n3, u2), main2.i.append(n3, o3), main2.i.append(n3, a3), main2.i.append(n3, s2), main2.i.append(n3, l2), main2.i.append(n3, c2), p2 || (r2 = main2.i.action_destroyer(t3[0].call(null, c2)), p2 = true);
      }, p: main2.i.noop, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3), p2 = false, r2();
      }};
    }
    function o2(n3, o3, a3) {
      let s2;
      return main2.i.component_subscribe(n3, main2.u, (e3) => a3(0, s2 = e3)), [s2];
    }
    class a2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, o2, n2, main2.i.safe_not_equal, {});
      }
    }
    var fallback_917ef163_default = a2;
  });

  // dist/build/index-7edb84e6.js
  var require_index_7edb84e6 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_7edb84e6_default
    });
    const main2 = __toModule(require_main());
    function a2(t3) {
      let a3, s3, n3, o2, i2, r2, l2;
      return {c() {
        a3 = main2.i.element("section"), a3.innerHTML = '<div class="flex flex-col m-8 sm:m-8"><h1 class="text-8xl font-bold font-display text-feather-accent">Feather</h1> \n        <p class="text-2xl typography">A highly concurrent, performant, and extensible Minecraft server, powered by <a href="https://www.rust-lang.org/">Rust</a>.</p></div> \n    <button class="bg-feather-light text-feather-accent font-bold px-8 py-6 m-4 sm:m-8 text-2xl">Download</button>', s3 = main2.i.space(), n3 = main2.i.element("section"), n3.innerHTML = '<div class="container mx-auto flex flex-col py-16"><h1 class="text-6xl m-4 sm:m-8">Why Feather?</h1> \n        <div class="flex flex-wrap lg:flex-nowrap"><div class="m-4 sm:m-8"><h2 class="text-3xl">It&#39;s wicked fast</h2> \n                <p class="mt-4 text-lg">Not &quot;stupid fast.&quot; Wicked fast. Feather&#39;s architecture is built from the ground up for performance\n                    and elegance.\n                    Written in Rust-a native language as fast as C-and based on the entity-component-system\n                    architecture,\n                    Feather can achieve performance no Vanilla fork could ever imagine.</p></div> \n            <div class="m-4 sm:m-8"><h2 class="text-3xl">Powerful plugins</h2> \n                <p class="mt-4 text-lg">Feather plugins can achieve incredible flexibility through Feather&#39;s data-oriented API.\n                    Our plugin system has been written from the start to support any functionality imaginable,\n                    to the extent that all gameplay features could be implemented as plugins if needed.</p></div> \n            <div class="m-4 sm:m-8"><h2 class="text-3xl">More flexability</h2> \n                <p class="mt-4 text-lg">Thanks to Feather&#39;s modular architecture, users can configure gameplay features to meet their needs.\n                    Without writing code, you can configure Feather to the exact needs of your server, without\n                    sacrificing performance.</p></div></div></div>', o2 = main2.i.space(), i2 = main2.i.element("section"), i2.innerHTML = '<div class="container mx-auto flex flex-col py-16"><h1 class="text-6xl m-4 sm:m-8">Why Rust?</h1> \n        <div class="flex flex-wrap lg:flex-nowrap"><div class="m-4 sm:m-8"><h2 class="text-3xl font-bold">Performance</h2> \n                <p class="mt-4">Rust is blazingly fast and memory-efficient: with no runtime or garbage collector,\n                    it can power performance-critical services,run on embedded devices,\n                    and easily integrate with other languages.</p></div> \n            <div class="m-4 sm:m-8"><h2 class="text-3xl font-bold">Reliability</h2> \n                <p class="mt-4 text-lg">Rust\u2019s rich type system and ownership model guarantee memory-safety and thread-safety \u2014 preventing\n                    many classes of bugs at compile-time.</p></div></div></div>', r2 = main2.i.space(), l2 = main2.i.element("section"), l2.innerHTML = '<div class="container mx-auto flex flex-col py-16"><h1 class="text-6xl m-4 sm:m-8">Get involved</h1> \n        <div class="flex flex-wrap lg:flex-nowrap"><div class="m-4 sm:m-8"><h2 class="text-3xl font-bold">Issue tracker</h2> \n                <p class="mt-4 text-lg">Want to contribute? Check out our issue tracker to look for features which appeal to you.\n                    Even if you&#39;re not a developer, feel free to share what you want to see in Feather&#39;s feature.It\n                    means a lot to us!</p></div> \n            <div class="m-4 sm:m-8"><h2 class="text-3xl font-bold">Discord</h2> \n                <p class="mt-4 text-lg">Our Discord server is our central information hub. We&#39;d love to hear your thoughts on Feather!</p></div> \n            <div class="m-4 sm:m-8"><h2 class="text-3xl font-bold">Association</h2> \n                <p class="mt-4 text-lg">Feather is run and funded by an open nonprofit association, where everyone is free to <a href="/association/joiun">join at the cost of 10 EUR</a>.\n                    All the members are invited once a year by the end of ___ to elect five to ten maintainers.\n                    These maintainers are responsible for the daily maintenance of the association and the development\n                    of feather.\n                    All the money raised through the association goes towards paying for web and demo server; you can\n                    read more about it in the <a href="/association/budget">budget</a>.</p></div></div></div>', main2.i.attr(a3, "class", "container mx-auto px-4 py-4 md:py-32 flex flex-wrap sm:flex-nowrap items-center justify-center"), main2.i.attr(n3, "class", "bg-feather-dark text-white typography"), main2.i.attr(i2, "class", "typography"), main2.i.attr(l2, "class", "bg-feather-dark text-white typography");
      }, m(t4, c2) {
        main2.i.insert(t4, a3, c2), main2.i.insert(t4, s3, c2), main2.i.insert(t4, n3, c2), main2.i.insert(t4, o2, c2), main2.i.insert(t4, i2, c2), main2.i.insert(t4, r2, c2), main2.i.insert(t4, l2, c2);
      }, p: main2.i.noop, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(a3), t4 && main2.i.detach(s3), t4 && main2.i.detach(n3), t4 && main2.i.detach(o2), t4 && main2.i.detach(i2), t4 && main2.i.detach(r2), t4 && main2.i.detach(l2);
      }};
    }
    function s2(e3) {
      return main2.m.title = "Feather | Wicked Fast Minecraft", main2.m.description = "Description coming soon...", [];
    }
    class n2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, s2, a2, main2.i.safe_not_equal, {});
      }
    }
    var index_7edb84e6_default = n2;
  });

  // dist/build/dashboard-04cb9bcd.js
  var require_dashboard_04cb9bcd = __commonJS((exports) => {
    __export(exports, {
      default: () => dashboard_04cb9bcd_default
    });
    const main2 = __toModule(require_main());
    function n2(n3) {
      let o3;
      return {c() {
        o3 = main2.i.element("div"), o3.innerHTML = '<h1 class="text-2xl font-bold">My Dashboard</h1>', main2.i.attr(o3, "class", "container mx-auto");
      }, m(n4, e3) {
        main2.i.insert(n4, o3, e3);
      }, p: main2.i.noop, i: main2.i.noop, o: main2.i.noop, d(n4) {
        n4 && main2.i.detach(o3);
      }};
    }
    function o2(t3) {
      return [];
    }
    class e2 extends main2.i.SvelteComponent {
      constructor(e3) {
        super(), main2.i.init(this, e3, o2, n2, main2.i.safe_not_equal, {});
      }
    }
    var dashboard_04cb9bcd_default = e2;
  });

  // dist/build/index-07666296.js
  var require_index_07666296 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_07666296_default
    });
    const main2 = __toModule(require_main());
    var t2 = function() {
    };
    t2.prototype.simple = function(e3) {
      var t3 = Date.now(), n3 = Date.parse(e3);
      try {
        if (n3 != n3)
          throw "timeago-simple: Please check date and time format! Unable to parse the date & time: " + e3;
      } catch (t4) {
        return console.error(t4), e3;
      }
      return n3 - t3 < 0 ? function(e4) {
        var t4 = Date.now();
        e4 = Date.parse(e4);
        var n4 = (t4 - e4) / 1e3, a3 = n4 / 60, r3 = n4 / 3600;
        if (n4 < 60 && a3 < 1)
          return n4 === 1 ? Math.round(n4) + " second ago" : Math.round(n4) + " seconds ago";
        if (a3 < 60 && r3 < 1)
          return a3 === 1 ? Math.round(a3) + " minute ago" : Math.round(a3) + " minutes ago";
        if (r3 > 24) {
          var l3 = r3 / 24;
          if (l3 > 30) {
            var o3 = l3 / 30;
            if (o3 > 12) {
              var i3 = o3 / 12;
              if (i3 > 0)
                return i3 === 1 ? Math.ceil(i3) + " year ago" : Math.ceil(i3) + " years ago";
            }
            return Math.round(o3) + " month ago";
          }
          return l3 === 1 ? Math.round(l3) + " day ago" : Math.round(l3) + " days ago";
        }
        return r3 === 1 ? Math.round(r3) + " hour ago" : Math.round(r3) + " hours ago";
      }(e3) : function(e4) {
        var t4 = Date.now(), n4 = ((e4 = Date.parse(e4)) - t4) / 1e3, a3 = n4 / 60, r3 = n4 / 3600;
        if (n4 < 60 && a3 < 1)
          return n4 === 1 ? "in " + Math.round(n4) + " second" : "in " + Math.round(n4) + " seconds";
        if (a3 < 60 && r3 < 1)
          return a3 === 1 ? "in " + Math.round(a3) + " minute" : "in " + Math.round(a3) + " minutes";
        if (r3 > 24) {
          var l3 = r3 / 24;
          if (l3 > 30) {
            var o3 = l3 / 30;
            if (o3 > 12) {
              var i3 = o3 / 12;
              if (i3 > 0)
                return i3 === 1 ? "in " + Math.ceil(i3) + " year" : "in " + Math.ceil(i3) + " years";
            }
            return "in " + Math.round(o3) + " month";
          }
          return l3 === 1 ? "in " + Math.round(l3) + " day" : "in " + Math.round(l3) + " days";
        }
        return r3 === 1 ? "in " + Math.round(r3) + " hour" : "in " + Math.round(r3) + " hours";
      }(e3);
    }, t2.prototype.future = function(e3) {
      console.warn("timeago-simple: .future function is depricated! Please use .simple for both past and future dates.");
      var t3 = Date.now();
      try {
        if (Date.parse(e3) != Date.parse(e3))
          throw "timeago-simple: Please check date and time format! Unable to parse the date & time: " + e3;
        if (Date.parse(e3) - t3 < 0)
          throw "timeago-simple: Looks like it's more relevant case for timeago.simple";
      } catch (t4) {
        return console.error(t4), e3;
      }
      var n3 = ((e3 = Date.parse(e3)) - t3) / 1e3, a3 = n3 / 60, r3 = n3 / 3600;
      if (n3 < 60 && a3 < 1)
        return n3 === 1 ? "in " + Math.round(n3) + " second" : "in " + Math.round(n3) + " seconds";
      if (a3 < 60 && r3 < 1)
        return a3 === 1 ? "in " + Math.round(a3) + " minute" : "in " + Math.round(a3) + " minutes";
      if (r3 > 24) {
        var l3 = r3 / 24;
        if (l3 > 30) {
          var o3 = l3 / 30;
          if (o3 > 12) {
            var i3 = o3 / 12;
            if (i3 > 0)
              return i3 === 1 ? "in " + Math.ceil(i3) + " year" : "in " + Math.ceil(i3) + " years";
          }
          return "in " + Math.round(o3) + " month";
        }
        return l3 === 1 ? "in " + Math.round(l3) + " day" : "in " + Math.round(l3) + " days";
      }
      return r3 === 1 ? "in " + Math.round(r3) + " hour" : "in " + Math.round(r3) + " hours";
    };
    var n2 = new t2();
    function a2(e3, t3, n3) {
      const a3 = e3.slice();
      return a3[12] = t3[n3].name, a3[13] = t3[n3].timestamp, a3[14] = t3[n3].use_count, a3[15] = t3[n3].token, a3;
    }
    function r2(e3, t3, n3) {
      const a3 = e3.slice();
      return a3[18] = t3[n3].email, a3[19] = t3[n3].verified, a3[20] = t3[n3].edited_email !== void 0 ? t3[n3].edited_email : "", a3[21] = t3, a3[22] = n3, a3;
    }
    function l2(t3) {
      let n3, a3, r3, l3, o3 = t3[18] + "";
      function s3(e3, t4) {
        return e3[19] ? p2 : i2;
      }
      let d3 = s3(t3), c3 = d3(t3);
      return {c() {
        n3 = main2.i.element("div"), a3 = main2.i.element("span"), r3 = main2.i.text(o3), l3 = main2.i.space(), c3.c(), main2.i.attr(n3, "class", "px-4 py-2");
      }, m(t4, o4) {
        main2.i.insert(t4, n3, o4), main2.i.append(n3, a3), main2.i.append(a3, r3), main2.i.append(n3, l3), c3.m(n3, null);
      }, p(t4, a4) {
        1 & a4 && o3 !== (o3 = t4[18] + "") && main2.i.set_data(r3, o3), d3 !== (d3 = s3(t4)) && (c3.d(1), c3 = d3(t4), c3 && (c3.c(), c3.m(n3, null)));
      }, d(t4) {
        t4 && main2.i.detach(n3), c3.d();
      }};
    }
    function o2(t3) {
      let n3, a3, r3;
      function l3() {
        t3[5].call(n3, t3[21], t3[22]);
      }
      return {c() {
        n3 = main2.i.element("input"), main2.i.attr(n3, "type", "text"), main2.i.attr(n3, "class", "flex flex-1 px-4 py-2 border border-feather-light box-border");
      }, m(o3, i3) {
        main2.i.insert(o3, n3, i3), main2.i.set_input_value(n3, t3[20]), a3 || (r3 = main2.i.listen(n3, "input", l3), a3 = true);
      }, p(a4, r4) {
        t3 = a4, 1 & r4 && n3.value !== t3[20] && main2.i.set_input_value(n3, t3[20]);
      }, d(t4) {
        t4 && main2.i.detach(n3), a3 = false, r3();
      }};
    }
    function i2(t3) {
      let n3;
      return {c() {
        n3 = main2.i.element("span"), n3.textContent = "Not verified!", main2.i.attr(n3, "class", "text-red-700 ml-4");
      }, m(t4, a3) {
        main2.i.insert(t4, n3, a3);
      }, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function p2(t3) {
      let n3;
      return {c() {
        n3 = main2.i.element("span"), n3.textContent = "Verified!", main2.i.attr(n3, "class", "text-green-700 ml-4");
      }, m(t4, a3) {
        main2.i.insert(t4, n3, a3);
      }, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function s2(t3) {
      let n3, a3, r3;
      function l3() {
        return t3[8](t3[20], t3[18], t3[21], t3[22]);
      }
      return {c() {
        n3 = main2.i.element("button"), n3.textContent = "Edit", main2.i.attr(n3, "class", "bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold");
      }, m(t4, o3) {
        main2.i.insert(t4, n3, o3), a3 || (r3 = main2.i.listen(n3, "click", l3), a3 = true);
      }, p(e3, n4) {
        t3 = e3;
      }, d(t4) {
        t4 && main2.i.detach(n3), a3 = false, r3();
      }};
    }
    function d2(t3) {
      let n3, a3, r3, l3, o3;
      function i3() {
        return t3[6](t3[18], t3[20], t3[21], t3[22]);
      }
      function p3() {
        return t3[7](t3[20], t3[21], t3[22]);
      }
      return {c() {
        n3 = main2.i.element("button"), n3.textContent = "Save", a3 = main2.i.space(), r3 = main2.i.element("button"), r3.textContent = "Cancel", main2.i.attr(n3, "class", "mr-4 bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"), main2.i.attr(r3, "class", "bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold");
      }, m(t4, s3) {
        main2.i.insert(t4, n3, s3), main2.i.insert(t4, a3, s3), main2.i.insert(t4, r3, s3), l3 || (o3 = [main2.i.listen(n3, "click", i3), main2.i.listen(r3, "click", p3)], l3 = true);
      }, p(e3, n4) {
        t3 = e3;
      }, d(t4) {
        t4 && main2.i.detach(n3), t4 && main2.i.detach(a3), t4 && main2.i.detach(r3), l3 = false, main2.i.run_all(o3);
      }};
    }
    function c2(t3) {
      let n3, a3, r3, i3, p3;
      function c3(e3, t4) {
        return e3[20] ? o2 : l2;
      }
      let u3 = c3(t3), m3 = u3(t3);
      function h3(e3, t4) {
        return e3[20] ? d2 : s2;
      }
      let f3 = h3(t3), x3 = f3(t3);
      return {c() {
        n3 = main2.i.element("li"), a3 = main2.i.element("div"), m3.c(), r3 = main2.i.space(), i3 = main2.i.element("div"), x3.c(), p3 = main2.i.space(), main2.i.attr(a3, "class", "flex flex-1 mr-4 items-center h-12"), main2.i.attr(i3, "class", "flex items-center"), main2.i.attr(n3, "class", "border-l-4 border-feather-light p-2 pl-4 flex justify-between shadow");
      }, m(t4, l3) {
        main2.i.insert(t4, n3, l3), main2.i.append(n3, a3), m3.m(a3, null), main2.i.append(n3, r3), main2.i.append(n3, i3), x3.m(i3, null), main2.i.append(n3, p3);
      }, p(e3, t4) {
        u3 === (u3 = c3(e3)) && m3 ? m3.p(e3, t4) : (m3.d(1), m3 = u3(e3), m3 && (m3.c(), m3.m(a3, null))), f3 === (f3 = h3(e3)) && x3 ? x3.p(e3, t4) : (x3.d(1), x3 = f3(e3), x3 && (x3.c(), x3.m(i3, null)));
      }, d(t4) {
        t4 && main2.i.detach(n3), m3.d(), x3.d();
      }};
    }
    function u2(t3) {
      let n3;
      return {c() {
        n3 = main2.i.element("span"), n3.textContent = "Never used";
      }, m(t4, a3) {
        main2.i.insert(t4, n3, a3);
      }, p: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function m2(t3) {
      let n3, a3, r3, l3, o3 = t3[14] + "";
      return {c() {
        n3 = main2.i.element("span"), a3 = main2.i.text("Used "), r3 = main2.i.text(o3), l3 = main2.i.text(" times");
      }, m(t4, o4) {
        main2.i.insert(t4, n3, o4), main2.i.append(n3, a3), main2.i.append(n3, r3), main2.i.append(n3, l3);
      }, p(t4, n4) {
        2 & n4 && o3 !== (o3 = t4[14] + "") && main2.i.set_data(r3, o3);
      }, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function h2(t3) {
      let n3, a3, r3, l3, o3, i3, p3 = t3[15] + "";
      return {c() {
        n3 = main2.i.element("p"), n3.textContent = "Please record this token somewhere, you cannot\n                                retrieve its value again. For use on the command\n                                line you can save it to ~/.cargo/quill with:", a3 = main2.i.space(), r3 = main2.i.element("div"), l3 = main2.i.element("code"), o3 = main2.i.text("cargo login "), i3 = main2.i.text(p3), main2.i.attr(r3, "class", "border-2 px-4 py-2 mt-4");
      }, m(t4, p4) {
        main2.i.insert(t4, n3, p4), main2.i.insert(t4, a3, p4), main2.i.insert(t4, r3, p4), main2.i.append(r3, l3), main2.i.append(l3, o3), main2.i.append(l3, i3);
      }, p(t4, n4) {
        2 & n4 && p3 !== (p3 = t4[15] + "") && main2.i.set_data(i3, p3);
      }, d(t4) {
        t4 && main2.i.detach(n3), t4 && main2.i.detach(a3), t4 && main2.i.detach(r3);
      }};
    }
    function f2(t3) {
      let a3, r3, l3, o3, i3, p3, s3, d3, c3, f3, x3, g3, v3, b3, y3, M, w2, k2 = t3[12] + "", _2 = n2.simple(new Date(t3[13])) + "";
      function C2(e3, t4) {
        return e3[14] > 0 ? m2 : u2;
      }
      let D = C2(t3), j = D(t3);
      function P() {
        return t3[11](t3[12]);
      }
      let T = t3[15] && h2(t3);
      return {c() {
        a3 = main2.i.element("li"), r3 = main2.i.element("div"), l3 = main2.i.element("span"), o3 = main2.i.text(k2), i3 = main2.i.space(), p3 = main2.i.element("div"), s3 = main2.i.element("div"), d3 = main2.i.element("span"), c3 = main2.i.text("Created "), f3 = main2.i.text(_2), x3 = main2.i.space(), j.c(), g3 = main2.i.space(), v3 = main2.i.element("button"), v3.textContent = "Revoke", b3 = main2.i.space(), T && T.c(), y3 = main2.i.space(), main2.i.attr(l3, "class", "text-lg font-bold"), main2.i.attr(s3, "class", "flex flex-col text-sm font-light mr-4"), main2.i.attr(v3, "class", "bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"), main2.i.attr(p3, "class", "flex"), main2.i.attr(r3, "class", "flex justify-between"), main2.i.attr(a3, "class", "shadow border-l-4 border-feather-light mt-4 p-4");
      }, m(t4, n3) {
        main2.i.insert(t4, a3, n3), main2.i.append(a3, r3), main2.i.append(r3, l3), main2.i.append(l3, o3), main2.i.append(r3, i3), main2.i.append(r3, p3), main2.i.append(p3, s3), main2.i.append(s3, d3), main2.i.append(d3, c3), main2.i.append(d3, f3), main2.i.append(s3, x3), j.m(s3, null), main2.i.append(p3, g3), main2.i.append(p3, v3), main2.i.append(a3, b3), T && T.m(a3, null), main2.i.append(a3, y3), M || (w2 = main2.i.listen(v3, "click", P), M = true);
      }, p(r4, l4) {
        t3 = r4, 2 & l4 && k2 !== (k2 = t3[12] + "") && main2.i.set_data(o3, k2), 2 & l4 && _2 !== (_2 = n2.simple(new Date(t3[13])) + "") && main2.i.set_data(f3, _2), D === (D = C2(t3)) && j ? j.p(t3, l4) : (j.d(1), j = D(t3), j && (j.c(), j.m(s3, null))), t3[15] ? T ? T.p(t3, l4) : (T = h2(t3), T.c(), T.m(a3, y3)) : T && (T.d(1), T = null);
      }, d(t4) {
        t4 && main2.i.detach(a3), j.d(), T && T.d(), M = false, w2();
      }};
    }
    function x2(t3) {
      let n3, l3, o3, i3, p3, s3, d3, u3, m3, h3, x3, b3, y3, M, w2, k2, _2, C2, D, j, P, T, A, L, N, U, q, E, H, I, S, R, $2, F, G, J, V, W2, z2, B, K, O, Q, X, Y, Z, ee, te = t3[0], ne = [];
      for (let e3 = 0; e3 < te.length; e3 += 1)
        ne[e3] = c2(r2(t3, te, e3));
      let ae = t3[1], re = [];
      for (let e3 = 0; e3 < ae.length; e3 += 1)
        re[e3] = f2(a2(t3, ae, e3));
      return {c() {
        n3 = main2.i.element("div"), l3 = main2.i.element("h1"), l3.textContent = "Account settings", o3 = main2.i.space(), i3 = main2.i.element("div"), p3 = main2.i.element("div"), s3 = main2.i.element("h2"), s3.textContent = "Profile Information", d3 = main2.i.space(), u3 = main2.i.element("div"), m3 = main2.i.element("img"), x3 = main2.i.space(), b3 = main2.i.element("ul"), y3 = main2.i.element("li"), M = main2.i.element("span"), M.textContent = "Name:", w2 = main2.i.space(), k2 = main2.i.element("span"), k2.textContent = `${g2}`, _2 = main2.i.space(), C2 = main2.i.element("li"), D = main2.i.element("span"), D.textContent = "Github Account:", j = main2.i.space(), P = main2.i.element("span"), P.textContent = `${v2}`, T = main2.i.space(), A = main2.i.element("div"), L = main2.i.element("h2"), L.textContent = "User Email", N = main2.i.space(), U = main2.i.element("ul");
        for (let e3 = 0; e3 < ne.length; e3 += 1)
          ne[e3].c();
        q = main2.i.space(), E = main2.i.element("div"), E.innerHTML = '<h2 class="text-2xl font-bold mt-8">Email Notification Preferences</h2>', H = main2.i.space(), I = main2.i.element("div"), S = main2.i.element("h2"), S.textContent = "API Access", R = main2.i.space(), $2 = main2.i.element("p"), $2.innerHTML = "If you want to use plugin commands from the command line, you\n                will need to login with <code>cargo quill login (token)</code> using\n                one of the tokens listed below.", F = main2.i.space(), G = main2.i.element("p"), G.innerHTML = "When working in shared environments, supplying the token on the\n                command line could expose it to prying eyes. To avoid this,\n                enter <code>cargo login</code> and supply your token when prompted.", J = main2.i.space(), V = main2.i.element("div"), V.innerHTML = '<h3 class="text-xl mt-4">Tokens</h3>', W2 = main2.i.space(), z2 = main2.i.element("ul"), B = main2.i.element("li"), K = main2.i.element("div"), O = main2.i.element("input"), Q = main2.i.space(), X = main2.i.element("button"), X.textContent = "Create", Y = main2.i.space();
        for (let e3 = 0; e3 < re.length; e3 += 1)
          re[e3].c();
        main2.i.attr(l3, "class", "text-4xl font-bold mt-8"), main2.i.attr(s3, "class", "text-xl font-bold mt-8"), m3.src !== (h3 = "https://avatars.githubusercontent.com/u/1496019?v=4&s=170") && main2.i.attr(m3, "src", "https://avatars.githubusercontent.com/u/1496019?v=4&s=170"), main2.i.attr(m3, "alt", g2), main2.i.attr(m3, "class", "h-16 w-16 mr-4"), main2.i.attr(M, "class", "font-bold"), main2.i.attr(D, "class", "font-bold"), main2.i.attr(u3, "class", "flex items-center px-8 py-4 shadow border-l-4 border-feather-light m-4"), main2.i.attr(L, "class", "text-2xl font-bold mt-8"), main2.i.attr(U, "class", "p-4"), main2.i.attr(S, "class", "text-2xl font-bold mt-8"), main2.i.attr(V, "class", "flex justify-between px-4 mt-4"), main2.i.attr(O, "type", "text"), main2.i.attr(O, "class", "flex flex-1 px-4 py-2 border border-feather-light box-border mr-4"), main2.i.attr(O, "placeholder", "New token name"), main2.i.attr(X, "class", "bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"), main2.i.attr(K, "class", "flex justify-between"), main2.i.attr(B, "class", "shadow border-l-4 border-feather-light mt-4 p-4"), main2.i.attr(z2, "class", "px-4"), main2.i.attr(i3, "class", "flex flex-col"), main2.i.attr(n3, "class", "container mx-auto flex flex-col px-4 my-8");
      }, m(a3, r3) {
        main2.i.insert(a3, n3, r3), main2.i.append(n3, l3), main2.i.append(n3, o3), main2.i.append(n3, i3), main2.i.append(i3, p3), main2.i.append(p3, s3), main2.i.append(p3, d3), main2.i.append(p3, u3), main2.i.append(u3, m3), main2.i.append(u3, x3), main2.i.append(u3, b3), main2.i.append(b3, y3), main2.i.append(y3, M), main2.i.append(y3, w2), main2.i.append(y3, k2), main2.i.append(b3, _2), main2.i.append(b3, C2), main2.i.append(C2, D), main2.i.append(C2, j), main2.i.append(C2, P), main2.i.append(i3, T), main2.i.append(i3, A), main2.i.append(A, L), main2.i.append(A, N), main2.i.append(A, U);
        for (let e3 = 0; e3 < ne.length; e3 += 1)
          ne[e3].m(U, null);
        main2.i.append(i3, q), main2.i.append(i3, E), main2.i.append(i3, H), main2.i.append(i3, I), main2.i.append(I, S), main2.i.append(I, R), main2.i.append(I, $2), main2.i.append(I, F), main2.i.append(I, G), main2.i.append(I, J), main2.i.append(I, V), main2.i.append(I, W2), main2.i.append(I, z2), main2.i.append(z2, B), main2.i.append(B, K), main2.i.append(K, O), main2.i.set_input_value(O, t3[2]), main2.i.append(K, Q), main2.i.append(K, X), main2.i.append(z2, Y);
        for (let e3 = 0; e3 < re.length; e3 += 1)
          re[e3].m(z2, null);
        Z || (ee = [main2.i.listen(O, "input", t3[9]), main2.i.listen(X, "click", t3[10])], Z = true);
      }, p(t4, [n4]) {
        if (1 & n4) {
          let e3;
          for (te = t4[0], e3 = 0; e3 < te.length; e3 += 1) {
            const a3 = r2(t4, te, e3);
            ne[e3] ? ne[e3].p(a3, n4) : (ne[e3] = c2(a3), ne[e3].c(), ne[e3].m(U, null));
          }
          for (; e3 < ne.length; e3 += 1)
            ne[e3].d(1);
          ne.length = te.length;
        }
        if (4 & n4 && O.value !== t4[2] && main2.i.set_input_value(O, t4[2]), 10 & n4) {
          let e3;
          for (ae = t4[1], e3 = 0; e3 < ae.length; e3 += 1) {
            const r3 = a2(t4, ae, e3);
            re[e3] ? re[e3].p(r3, n4) : (re[e3] = f2(r3), re[e3].c(), re[e3].m(z2, null));
          }
          for (; e3 < re.length; e3 += 1)
            re[e3].d(1);
          re.length = ae.length;
        }
      }, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3), main2.i.destroy_each(ne, t4), main2.i.destroy_each(re, t4), Z = false, main2.i.run_all(ee);
      }};
    }
    const g2 = "Jacob Emil Ulvedal Rosborg";
    const v2 = "Defman";
    function b2(e3, t3, n3) {
      const a3 = [{email: "jacob@rosborg.dk", verified: false}];
      let r3 = [{name: "macbook", use_count: 4, timestamp: 0}, {name: "windows", use_count: 0, timestamp: 0, token: "asdjkasdhASduhaj"}], l3 = "";
      function o3(e4) {
        n3(1, r3 = r3.filter(({name: t4}) => t4 !== e4));
      }
      function i3(e4) {
        n3(1, r3 = [{name: e4, use_count: 0, timestamp: 0, token: "adsjhasdhjuiq"}, ...r3]);
      }
      return [a3, r3, l3, o3, i3, function(e4, t4) {
        e4[t4].edited_email = this.value, n3(0, a3);
      }, (e4, t4, r4, l4) => {
        n3(0, r4[l4].email = t4, a3), n3(0, r4[l4].edited_email = "", a3);
      }, (e4, t4, r4) => {
        n3(0, t4[r4].edited_email = "", a3);
      }, (e4, t4, r4, l4) => {
        n3(0, r4[l4].edited_email = t4, a3);
      }, function() {
        l3 = this.value, n3(2, l3);
      }, () => {
        i3(l3), n3(2, l3 = void 0);
      }, (e4) => o3(e4)];
    }
    class y2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, b2, x2, main2.i.safe_not_equal, {});
      }
    }
    var index_07666296_default = y2;
  });

  // dist/build/pending-invites-194595fe.js
  var require_pending_invites_194595fe = __commonJS((exports) => {
    __export(exports, {
      default: () => pending_invites_194595fe_default
    });
    const main2 = __toModule(require_main());
    function t2(t3) {
      let e3;
      return {c() {
        e3 = main2.i.element("div"), e3.innerHTML = '<h1 class="text-2xl font-bold">Pending Owner Invites</h1>', main2.i.attr(e3, "class", "container mx-auto");
      }, m(t4, o3) {
        main2.i.insert(t4, e3, o3);
      }, p: main2.i.noop, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(e3);
      }};
    }
    function e2(n3) {
      return [];
    }
    class o2 extends main2.i.SvelteComponent {
      constructor(o3) {
        super(), main2.i.init(this, o3, e2, t2, main2.i.safe_not_equal, {});
      }
    }
    var pending_invites_194595fe_default = o2;
  });

  // dist/build/docs-66a13a49.js
  var require_docs_66a13a49 = __commonJS((exports) => {
    __export(exports, {
      default: () => docs_66a13a49_default
    });
    const main2 = __toModule(require_main());
    function n2(e3) {
      let n3, o3, p3, a2, s2;
      return {c() {
        n3 = main2.i.element("h1"), o3 = main2.i.text("Docs for "), p3 = main2.i.text(e3[0]), a2 = main2.i.space(), s2 = main2.i.text(e3[1]);
      }, m(e4, r2) {
        main2.i.insert(e4, n3, r2), main2.i.append(n3, o3), main2.i.append(n3, p3), main2.i.append(n3, a2), main2.i.append(n3, s2);
      }, p(e4, [n4]) {
        1 & n4 && main2.i.set_data(p3, e4[0]), 2 & n4 && main2.i.set_data(s2, e4[1]);
      }, i: main2.i.noop, o: main2.i.noop, d(e4) {
        e4 && main2.i.detach(n3);
      }};
    }
    function o2(n3, o3, p3) {
      let a2, s2, r2;
      return main2.i.component_subscribe(n3, main2.p, (t3) => p3(2, r2 = t3)), n3.$$.update = () => {
        4 & n3.$$.dirty && p3(0, a2 = r2.id), 4 & n3.$$.dirty && p3(1, s2 = r2.version);
      }, [a2, s2, r2];
    }
    class p2 extends main2.i.SvelteComponent {
      constructor(e3) {
        super(), main2.i.init(this, e3, o2, n2, main2.i.safe_not_equal, {});
      }
    }
    var docs_66a13a49_default = p2;
  });

  // dist/build/index-ea5682e7.js
  var require_index_ea5682e7 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_ea5682e7_default
    });
    const main2 = __toModule(require_main());
    function o2(t3) {
      let o3, i3;
      return o3 = new z({props: {id: t3[0].id, version: t3[0].version}}), {c() {
        main2.i.create_component(o3.$$.fragment);
      }, m(t4, e2) {
        main2.i.mount_component(o3, t4, e2), i3 = true;
      }, p(n3, [t4]) {
        const e2 = {};
        1 & t4 && (e2.id = n3[0].id), 1 & t4 && (e2.version = n3[0].version), o3.$set(e2);
      }, i(t4) {
        i3 || (main2.i.transition_in(o3.$$.fragment, t4), i3 = true);
      }, o(t4) {
        main2.i.transition_out(o3.$$.fragment, t4), i3 = false;
      }, d(t4) {
        main2.i.destroy_component(o3, t4);
      }};
    }
    function i2(e2, o3, i3) {
      let r3;
      return main2.i.component_subscribe(e2, main2.p, (n3) => i3(0, r3 = n3)), [r3];
    }
    class r2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, i2, o2, main2.i.safe_not_equal, {});
      }
    }
    var index_ea5682e7_default = r2;
  });

  // dist/build/docs-ef4cadac.js
  var require_docs_ef4cadac = __commonJS((exports) => {
    __export(exports, {
      default: () => docs_ef4cadac_default
    });
    const main2 = __toModule(require_main());
    function n2(n3, s3, o2) {
      let i2;
      return main2.i.component_subscribe(n3, main2.p, (t3) => o2(0, i2 = t3)), n3.$$.update = () => {
        1 & n3.$$.dirty && i2.id;
      }, [i2];
    }
    class s2 extends main2.i.SvelteComponent {
      constructor(e3) {
        super(), main2.i.init(this, e3, n2, null, main2.i.safe_not_equal, {});
      }
    }
    var docs_ef4cadac_default = s2;
  });

  // dist/build/index-d6080d74.js
  var require_index_d6080d74 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_d6080d74_default
    });
    const main2 = __toModule(require_main());
    function o2(t3) {
      let o3, i3;
      return o3 = new z({props: {id: t3[0].id, version: "1.0"}}), {c() {
        main2.i.create_component(o3.$$.fragment);
      }, m(t4, e2) {
        main2.i.mount_component(o3, t4, e2), i3 = true;
      }, p(n3, [t4]) {
        const e2 = {};
        1 & t4 && (e2.id = n3[0].id), o3.$set(e2);
      }, i(t4) {
        i3 || (main2.i.transition_in(o3.$$.fragment, t4), i3 = true);
      }, o(t4) {
        main2.i.transition_out(o3.$$.fragment, t4), i3 = false;
      }, d(t4) {
        main2.i.destroy_component(o3, t4);
      }};
    }
    function i2(e2, o3, i3) {
      let r3;
      return main2.i.component_subscribe(e2, main2.p, (n3) => i3(0, r3 = n3)), [r3];
    }
    class r2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, i2, o2, main2.i.safe_not_equal, {});
      }
    }
    var index_d6080d74_default = r2;
  });

  // dist/build/index-66019432.js
  var require_index_66019432 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_66019432_default
    });
    const main2 = __toModule(require_main());
    function l2(t3) {
      let n3, l3, a3, r3;
      return {c() {
        n3 = main2.i.svg_element("svg"), l3 = main2.i.svg_element("circle"), a3 = main2.i.svg_element("line"), main2.i.attr(l3, "cx", "11"), main2.i.attr(l3, "cy", "11"), main2.i.attr(l3, "r", "8"), main2.i.attr(a3, "x1", "21"), main2.i.attr(a3, "y1", "21"), main2.i.attr(a3, "x2", "16.65"), main2.i.attr(a3, "y2", "16.65"), main2.i.attr(n3, "xmlns", "http://www.w3.org/2000/svg"), main2.i.attr(n3, "width", t3[0]), main2.i.attr(n3, "height", t3[0]), main2.i.attr(n3, "fill", "none"), main2.i.attr(n3, "viewBox", "0 0 24 24"), main2.i.attr(n3, "stroke", "currentColor"), main2.i.attr(n3, "stroke-width", t3[1]), main2.i.attr(n3, "stroke-linecap", "round"), main2.i.attr(n3, "stroke-linejoin", "round"), main2.i.attr(n3, "class", r3 = "feather feather-search " + t3[2]);
      }, m(t4, r4) {
        main2.i.insert(t4, n3, r4), main2.i.append(n3, l3), main2.i.append(n3, a3);
      }, p(t4, [l4]) {
        1 & l4 && main2.i.attr(n3, "width", t4[0]), 1 & l4 && main2.i.attr(n3, "height", t4[0]), 2 & l4 && main2.i.attr(n3, "stroke-width", t4[1]), 4 & l4 && r3 !== (r3 = "feather feather-search " + t4[2]) && main2.i.attr(n3, "class", r3);
      }, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function a2(e3, t3, n3) {
      let {size: l3 = "100%"} = t3, {strokeWidth: a3 = 2} = t3, {class: r3 = ""} = t3;
      return l3 !== "100%" && (l3 = l3.slice(-1) === "x" ? l3.slice(0, l3.length - 1) + "em" : parseInt(l3) + "px"), e3.$$set = (e4) => {
        "size" in e4 && n3(0, l3 = e4.size), "strokeWidth" in e4 && n3(1, a3 = e4.strokeWidth), "class" in e4 && n3(2, r3 = e4.class);
      }, [l3, a3, r3];
    }
    class r2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, a2, l2, main2.i.safe_not_equal, {size: 0, strokeWidth: 1, class: 2});
      }
    }
    function o2(e3, t3, n3) {
      const l3 = e3.slice();
      return l3[11] = t3[n3], l3;
    }
    function p2(e3, t3, n3) {
      const l3 = e3.slice();
      return l3[14] = t3[n3].id, l3[15] = t3[n3].name, l3[16] = t3[n3].description, l3[17] = t3[n3].all_time, l3[18] = t3[n3].recent, l3[19] = t3[n3].updated, l3[20] = t3[n3].homepage, l3[21] = t3[n3].repository, l3[22] = t3[n3].versions, l3;
    }
    function s2(e3, t3, n3) {
      const l3 = e3.slice();
      return l3[25] = t3[n3], l3;
    }
    function i2(t3) {
      let n3, l3, a3 = t3[25] + "";
      return {c() {
        n3 = main2.i.element("li"), l3 = main2.i.text(a3), main2.i.attr(n3, "class", "ml-2");
      }, m(t4, a4) {
        main2.i.insert(t4, n3, a4), main2.i.append(n3, l3);
      }, p: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function d2(t3) {
      let n3, l3, a3, r3, o3, p3, d3, c3, m3, f3, u3, h3, g3, x2, v2, b2, _2, y2, w2, k2, W2, $2, C2, E, T, S, j, z2, A, R, G, I, L, M, O, q, D, F = t3[15] + "", H = t3[16] + "", B = t3[17].toLocaleString() + "", P = t3[18].toLocaleString() + "", U = t3[19].toLocaleString() + "", J = t3[22], K = [];
      for (let e3 = 0; e3 < J.length; e3 += 1)
        K[e3] = i2(s2(t3, J, e3));
      let N = t3[20] && function(t4) {
        let n4, l4, a4;
        return {c() {
          n4 = main2.i.element("li"), l4 = main2.i.element("a"), a4 = main2.i.text("Homepage"), main2.i.attr(l4, "href", t4[20]), main2.i.attr(l4, "class", "font-bold border-b-2 border-feather-accent hover:text-gray-600");
        }, m(t5, r4) {
          main2.i.insert(t5, n4, r4), main2.i.append(n4, l4), main2.i.append(l4, a4);
        }, p: main2.i.noop, d(t5) {
          t5 && main2.i.detach(n4);
        }};
      }(t3), Q = t3[21] && function(t4) {
        let n4, l4, a4;
        return {c() {
          n4 = main2.i.element("li"), l4 = main2.i.element("a"), a4 = main2.i.text("Repository"), main2.i.attr(l4, "href", t4[20]), main2.i.attr(l4, "class", "font-bold border-b-2 border-feather-accent hover:text-gray-600");
        }, m(t5, r4) {
          main2.i.insert(t5, n4, r4), main2.i.append(n4, l4), main2.i.append(l4, a4);
        }, p: main2.i.noop, d(t5) {
          t5 && main2.i.detach(n4);
        }};
      }(t3);
      return {c() {
        n3 = main2.i.element("li"), l3 = main2.i.element("div"), a3 = main2.i.element("div"), r3 = main2.i.element("div"), o3 = main2.i.element("a"), p3 = main2.i.text(F), d3 = main2.i.space(), c3 = main2.i.element("ol");
        for (let e3 = 0; e3 < K.length; e3 += 1)
          K[e3].c();
        m3 = main2.i.space(), f3 = main2.i.element("p"), u3 = main2.i.text(H), h3 = main2.i.space(), g3 = main2.i.element("ul"), N && N.c(), x2 = main2.i.space(), Q && Q.c(), v2 = main2.i.space(), b2 = main2.i.element("div"), _2 = main2.i.element("div"), y2 = main2.i.element("span"), w2 = main2.i.element("abbr"), w2.textContent = "All-Time:", k2 = main2.i.space(), W2 = main2.i.text(B), $2 = main2.i.space(), C2 = main2.i.element("div"), E = main2.i.element("span"), T = main2.i.element("abbr"), T.textContent = "Recent:", S = main2.i.space(), j = main2.i.text(P), z2 = main2.i.space(), A = main2.i.element("div"), R = main2.i.element("span"), G = main2.i.element("abbr"), G.textContent = "Updated:", I = main2.i.space(), L = main2.i.text(U), M = main2.i.text(" days ago"), O = main2.i.space(), main2.i.attr(o3, "href", "/plugins/:id"), main2.i.attr(o3, "class", "text-4xl font-bold hover:text-gray-600"), main2.i.attr(c3, "class", "flex"), main2.i.attr(r3, "class", "flex items-end"), main2.i.attr(g3, "class", "flex space-x-2 mt-2"), main2.i.attr(l3, "class", "flex flex-col justify-between"), main2.i.attr(w2, "title", "Total numbers of downloads"), main2.i.attr(T, "title", "Downloads in the last 90 days"), main2.i.attr(G, "title", "The last time plugin was updated"), main2.i.attr(b2, "class", "flex flex-col justify-center text-lg my-2"), main2.i.attr(n3, "class", "flex flex-wrap justify-between p-4 shadow border-l-8 border-feather-light");
      }, m(s3, i3) {
        main2.i.insert(s3, n3, i3), main2.i.append(n3, l3), main2.i.append(l3, a3), main2.i.append(a3, r3), main2.i.append(r3, o3), main2.i.append(o3, p3), main2.i.append(r3, d3), main2.i.append(r3, c3);
        for (let e3 = 0; e3 < K.length; e3 += 1)
          K[e3].m(c3, null);
        main2.i.append(a3, m3), main2.i.append(a3, f3), main2.i.append(f3, u3), main2.i.append(l3, h3), main2.i.append(l3, g3), N && N.m(g3, null), main2.i.append(g3, x2), Q && Q.m(g3, null), main2.i.append(n3, v2), main2.i.append(n3, b2), main2.i.append(b2, _2), main2.i.append(_2, y2), main2.i.append(y2, w2), main2.i.append(y2, k2), main2.i.append(y2, W2), main2.i.append(b2, $2), main2.i.append(b2, C2), main2.i.append(C2, E), main2.i.append(E, T), main2.i.append(E, S), main2.i.append(E, j), main2.i.append(b2, z2), main2.i.append(b2, A), main2.i.append(A, R), main2.i.append(R, G), main2.i.append(R, I), main2.i.append(R, L), main2.i.append(R, M), main2.i.append(n3, O), q || (D = main2.i.action_destroyer(t3[3].call(null, o3, {id: t3[14]})), q = true);
      }, p(e3, n4) {
        if (t3 = e3, 16 & n4) {
          let e4;
          for (J = t3[22], e4 = 0; e4 < J.length; e4 += 1) {
            const l4 = s2(t3, J, e4);
            K[e4] ? K[e4].p(l4, n4) : (K[e4] = i2(l4), K[e4].c(), K[e4].m(c3, null));
          }
          for (; e4 < K.length; e4 += 1)
            K[e4].d(1);
          K.length = J.length;
        }
        t3[20] && N.p(t3, n4), t3[21] && Q.p(t3, n4);
      }, d(t4) {
        t4 && main2.i.detach(n3), main2.i.destroy_each(K, t4), N && N.d(), Q && Q.d(), q = false, D();
      }};
    }
    function c2(t3) {
      let n3;
      return {c() {
        n3 = main2.i.text("Show categories");
      }, m(t4, l3) {
        main2.i.insert(t4, n3, l3);
      }, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function m2(t3) {
      let n3;
      return {c() {
        n3 = main2.i.text("Hide categories");
      }, m(t4, l3) {
        main2.i.insert(t4, n3, l3);
      }, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function f2(t3) {
      let n3, l3, a3, r3, o3, p3, s3, i3, d3, c3 = t3[11] + "";
      return {c() {
        n3 = main2.i.element("li"), l3 = main2.i.element("label"), a3 = main2.i.element("input"), r3 = main2.i.space(), o3 = main2.i.element("span"), p3 = main2.i.text(c3), s3 = main2.i.space(), main2.i.attr(a3, "type", "checkbox"), a3.__value = t3[11], a3.value = a3.__value, t3[10][0].push(a3), main2.i.attr(o3, "class", "ml-2 font-light text-sm"), main2.i.attr(l3, "class", "flex items-center"), main2.i.attr(n3, "class", "mr-4 my-2");
      }, m(c4, m3) {
        main2.i.insert(c4, n3, m3), main2.i.append(n3, l3), main2.i.append(l3, a3), a3.checked = ~t3[1].indexOf(a3.__value), main2.i.append(l3, r3), main2.i.append(l3, o3), main2.i.append(o3, p3), main2.i.append(n3, s3), i3 || (d3 = main2.i.listen(a3, "change", t3[9]), i3 = true);
      }, p(e3, t4) {
        2 & t4 && (a3.checked = ~e3[1].indexOf(a3.__value));
      }, d(l4) {
        l4 && main2.i.detach(n3), t3[10][0].splice(t3[10][0].indexOf(a3), 1), i3 = false, d3();
      }};
    }
    function u2(t3) {
      let n3, l3, a3, s3, i3, u3, h3, g3, x2, v2, b2, _2, y2, w2, k2, W2, $2, C2, E;
      u3 = new r2({props: {class: "ml-4 h-6 w-6 text-feather-dark"}});
      let T = t3[4], S = [];
      for (let e3 = 0; e3 < T.length; e3 += 1)
        S[e3] = d2(p2(t3, T, e3));
      function j(e3, t4) {
        return e3[2] ? m2 : c2;
      }
      let z2 = j(t3), A = z2(t3), R = t3[5], G = [];
      for (let e3 = 0; e3 < R.length; e3 += 1)
        G[e3] = f2(o2(t3, R, e3));
      return {c() {
        n3 = main2.i.element("div"), l3 = main2.i.element("div"), a3 = main2.i.element("form"), s3 = main2.i.element("input"), i3 = main2.i.space(), main2.i.create_component(u3.$$.fragment), h3 = main2.i.space(), g3 = main2.i.element("ul");
        for (let e3 = 0; e3 < S.length; e3 += 1)
          S[e3].c();
        x2 = main2.i.space(), v2 = main2.i.element("aside"), b2 = main2.i.element("h2"), b2.textContent = "Categories", _2 = main2.i.space(), y2 = main2.i.element("button"), A.c(), w2 = main2.i.space(), k2 = main2.i.element("ul");
        for (let e3 = 0; e3 < G.length; e3 += 1)
          G[e3].c();
        main2.i.attr(s3, "class", "flex-1"), main2.i.attr(s3, "type", "text"), main2.i.attr(s3, "placeholder", "Search..."), main2.i.attr(a3, "class", "flex justify-between items-center border border-feather-light w-full rounded text-xl px-4 py-2"), main2.i.attr(g3, "class", "flex flex-col flex-1 space-y-4 mt-8"), main2.i.attr(l3, "class", "flex flex-1 flex-col my-4"), main2.i.attr(b2, "class", "text-2xl font-bold"), main2.i.attr(y2, "class", "text-sm font-light lg:hidden hover:text-feather-dark"), main2.i.attr(k2, "class", W2 = "flex flex-wrap lg:flex-nowrap lg:flex-col " + (t3[2] ? "block" : "hidden") + " lg:block"), main2.i.attr(v2, "class", "border-0 lg:border-l-2 m-0 lg:mx-8 lg:pl-4 my-4"), main2.i.attr(n3, "class", "container mx-auto flex flex-1 p-4 flex-col-reverse lg:flex-row");
      }, m(r3, o3) {
        main2.i.insert(r3, n3, o3), main2.i.append(n3, l3), main2.i.append(l3, a3), main2.i.append(a3, s3), main2.i.set_input_value(s3, t3[0]), main2.i.append(a3, i3), main2.i.mount_component(u3, a3, null), main2.i.append(l3, h3), main2.i.append(l3, g3);
        for (let e3 = 0; e3 < S.length; e3 += 1)
          S[e3].m(g3, null);
        main2.i.append(n3, x2), main2.i.append(n3, v2), main2.i.append(v2, b2), main2.i.append(v2, _2), main2.i.append(v2, y2), A.m(y2, null), main2.i.append(v2, w2), main2.i.append(v2, k2);
        for (let e3 = 0; e3 < G.length; e3 += 1)
          G[e3].m(k2, null);
        $2 = true, C2 || (E = [main2.i.listen(s3, "input", t3[7]), main2.i.listen(y2, "click", t3[8])], C2 = true);
      }, p(t4, [n4]) {
        if (1 & n4 && s3.value !== t4[0] && main2.i.set_input_value(s3, t4[0]), 16 & n4) {
          let e3;
          for (T = t4[4], e3 = 0; e3 < T.length; e3 += 1) {
            const l4 = p2(t4, T, e3);
            S[e3] ? S[e3].p(l4, n4) : (S[e3] = d2(l4), S[e3].c(), S[e3].m(g3, null));
          }
          for (; e3 < S.length; e3 += 1)
            S[e3].d(1);
          S.length = T.length;
        }
        if (z2 !== (z2 = j(t4)) && (A.d(1), A = z2(t4), A && (A.c(), A.m(y2, null))), 34 & n4) {
          let e3;
          for (R = t4[5], e3 = 0; e3 < R.length; e3 += 1) {
            const l4 = o2(t4, R, e3);
            G[e3] ? G[e3].p(l4, n4) : (G[e3] = f2(l4), G[e3].c(), G[e3].m(k2, null));
          }
          for (; e3 < G.length; e3 += 1)
            G[e3].d(1);
          G.length = R.length;
        }
        (!$2 || 4 & n4 && W2 !== (W2 = "flex flex-wrap lg:flex-nowrap lg:flex-col " + (t4[2] ? "block" : "hidden") + " lg:block")) && main2.i.attr(k2, "class", W2);
      }, i(t4) {
        $2 || (main2.i.transition_in(u3.$$.fragment, t4), $2 = true);
      }, o(t4) {
        main2.i.transition_out(u3.$$.fragment, t4), $2 = false;
      }, d(t4) {
        t4 && main2.i.detach(n3), main2.i.destroy_component(u3), main2.i.destroy_each(S, t4), A.d(), main2.i.destroy_each(G, t4), C2 = false, main2.i.run_all(E);
      }};
    }
    function h2(l3, a3, r3) {
      let o3, p3;
      main2.i.component_subscribe(l3, main2.g, (e3) => r3(6, o3 = e3)), main2.i.component_subscribe(l3, main2.u, (e3) => r3(3, p3 = e3));
      let s3 = "", i3 = [], d3 = false;
      const c3 = [[]];
      return l3.$$.update = () => {
        67 & l3.$$.dirty && o3("/plugins", {search: s3, categories: i3});
      }, [s3, i3, d3, p3, [{id: "world-edit", name: "WorldEdit", description: "WorldEdit is an in-game map editor for both creative and survival", all_time: 42e4, recent: 690, updated: 20, homepage: "https://google.com", repository: "https://github.com", versions: ["1.0.4", "1.13"]}, {id: "world-edit", name: "WorldEdit", description: "WorldEdit is an in-game map editor for both creative and survival", all_time: 42e4, recent: 690, updated: 20, versions: ["1.16"]}, {id: "world-edit", name: "WorldEdit", description: "WorldEdit is an in-game map editor for both creative and survival", all_time: 42e4, recent: 690, updated: 20, versions: ["1.16"]}], ["Admin Tool", "Anti-Griefing Tools", "Chat Related", "Developer Tools", "Economy", "Fixes", "Fun", "General", "Informational", "Mechanics", "Miscellaneous", "Role Playing", "Teleportation", "Twitch Integration", "Website Administation", "World Editing and Mangement", "World Generators"], o3, function() {
        s3 = this.value, r3(0, s3);
      }, () => {
        r3(2, d3 = !d3);
      }, function() {
        i3 = main2.i.get_binding_group_value(c3[0], this.__value, this.checked), r3(1, i3);
      }, c3];
    }
    class g2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, h2, u2, main2.i.safe_not_equal, {});
      }
    }
    var index_66019432_default = g2;
  });

  // dist/build/index-e30a25a4.js
  var require_index_e30a25a4 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_e30a25a4_default
    });
    const main2 = __toModule(require_main());
    class e2 extends main2.i.SvelteComponent {
      constructor(e3) {
        super(), main2.i.init(this, e3, null, null, main2.i.safe_not_equal, {});
      }
    }
    var index_e30a25a4_default = e2;
  });

  // dist/build/_layout-21a43ef3.js
  var require_layout_21a43ef3 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_21a43ef3_default
    });
    const main2 = __toModule(require_main());
    function n2(t3) {
      let n3, a3, l3, s3, r3, c3, i3, o3, p3, d2, m2 = [{xmlns: "http://www.w3.org/2000/svg"}, {viewBox: "0 0 1229.5 1229.5"}, t3[0]], h2 = {};
      for (let t4 = 0; t4 < m2.length; t4 += 1)
        h2 = main2.i.assign(h2, m2[t4]);
      return {c() {
        n3 = main2.i.svg_element("svg"), a3 = main2.i.svg_element("defs"), l3 = main2.i.svg_element("style"), s3 = main2.i.text(".cls-1{fill:#f6f6f6;}.cls-2{fill:#d9d9d9;}.cls-3{fill:#f3dc6b;}.cls-4{fill:#e20001;}"), r3 = main2.i.svg_element("g"), c3 = main2.i.svg_element("g"), i3 = main2.i.svg_element("path"), o3 = main2.i.svg_element("polygon"), p3 = main2.i.svg_element("path"), d2 = main2.i.svg_element("path"), this.h();
      }, l(t4) {
        n3 = main2.i.claim_element(t4, "svg", {xmlns: true, viewBox: true}, 1);
        var m3 = main2.i.children(n3);
        a3 = main2.i.claim_element(m3, "defs", {}, 1);
        var h3 = main2.i.children(a3);
        l3 = main2.i.claim_element(h3, "style", {}, 1);
        var f2 = main2.i.children(l3);
        s3 = main2.i.claim_text(f2, ".cls-1{fill:#f6f6f6;}.cls-2{fill:#d9d9d9;}.cls-3{fill:#f3dc6b;}.cls-4{fill:#e20001;}"), f2.forEach(main2.i.detach), h3.forEach(main2.i.detach), r3 = main2.i.claim_element(m3, "g", {id: true, "data-name": true}, 1);
        var _2 = main2.i.children(r3);
        c3 = main2.i.claim_element(_2, "g", {id: true}, 1);
        var u2 = main2.i.children(c3);
        i3 = main2.i.claim_element(u2, "path", {class: true, d: true}, 1), main2.i.children(i3).forEach(main2.i.detach), o3 = main2.i.claim_element(u2, "polygon", {class: true, points: true}, 1), main2.i.children(o3).forEach(main2.i.detach), p3 = main2.i.claim_element(u2, "path", {class: true, d: true}, 1), main2.i.children(p3).forEach(main2.i.detach), d2 = main2.i.claim_element(u2, "path", {class: true, d: true}, 1), main2.i.children(d2).forEach(main2.i.detach), u2.forEach(main2.i.detach), _2.forEach(main2.i.detach), m3.forEach(main2.i.detach), this.h();
      }, h() {
        main2.i.attr(i3, "class", "cls-1"), main2.i.attr(i3, "d", "M695.67,0V533.83H1229.5V48.31A48.31,48.31,0,0,0,1181.19,0Z"), main2.i.attr(o3, "class", "cls-2"), main2.i.attr(o3, "points", "695.67 533.83 589.39 640.11 1123.22 640.11 1229.5 533.83 695.67 533.83"), main2.i.attr(p3, "class", "cls-3"), main2.i.attr(p3, "d", "M1123.22,640.11,818.53,944.8A48.3,48.3,0,0,1,784.34,959l-366.26-.18L147.35,1229.5H0L270.54,958.7,589.39,640.11Z"), main2.i.attr(d2, "class", "cls-4"), main2.i.attr(d2, "d", "M270.54,852.68V445.14A48.31,48.31,0,0,1,284.69,411l304.7-304.7V533.83Z"), main2.i.attr(c3, "id", "Logo"), main2.i.attr(r3, "id", "Layer_2"), main2.i.attr(r3, "data-name", "Layer 2"), main2.i.set_svg_attributes(n3, h2);
      }, m(t4, m3) {
        main2.i.insert(t4, n3, m3), main2.i.append(n3, a3), main2.i.append(a3, l3), main2.i.append(l3, s3), main2.i.append(n3, r3), main2.i.append(r3, c3), main2.i.append(c3, i3), main2.i.append(c3, o3), main2.i.append(c3, p3), main2.i.append(c3, d2);
      }, p(t4, [a4]) {
        main2.i.set_svg_attributes(n3, h2 = main2.i.get_spread_update(m2, [{xmlns: "http://www.w3.org/2000/svg"}, {viewBox: "0 0 1229.5 1229.5"}, 1 & a4 && t4[0]]));
      }, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function a2(t3, n3, a3) {
      return t3.$$set = (t4) => {
        a3(0, n3 = main2.i.assign(main2.i.assign({}, n3), main2.i.exclude_internal_props(t4)));
      }, [n3 = main2.i.exclude_internal_props(n3)];
    }
    class l2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, a2, n2, main2.i.safe_not_equal, {});
      }
    }
    function s2(t3) {
      let n3, a3, l3 = [{viewBox: "0 0 16 16"}, t3[0]], s3 = {};
      for (let t4 = 0; t4 < l3.length; t4 += 1)
        s3 = main2.i.assign(s3, l3[t4]);
      return {c() {
        n3 = main2.i.svg_element("svg"), a3 = main2.i.svg_element("path"), this.h();
      }, l(t4) {
        n3 = main2.i.claim_element(t4, "svg", {viewBox: true}, 1);
        var l4 = main2.i.children(n3);
        a3 = main2.i.claim_element(l4, "path", {"fill-rule": true, d: true}, 1), main2.i.children(a3).forEach(main2.i.detach), l4.forEach(main2.i.detach), this.h();
      }, h() {
        main2.i.attr(a3, "fill-rule", "evenodd"), main2.i.attr(a3, "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"), main2.i.set_svg_attributes(n3, s3);
      }, m(t4, l4) {
        main2.i.insert(t4, n3, l4), main2.i.append(n3, a3);
      }, p(t4, [a4]) {
        main2.i.set_svg_attributes(n3, s3 = main2.i.get_spread_update(l3, [{viewBox: "0 0 16 16"}, 1 & a4 && t4[0]]));
      }, i: main2.i.noop, o: main2.i.noop, d(t4) {
        t4 && main2.i.detach(n3);
      }};
    }
    function r2(t3, n3, a3) {
      return t3.$$set = (t4) => {
        a3(0, n3 = main2.i.assign(main2.i.assign({}, n3), main2.i.exclude_internal_props(t4)));
      }, [n3 = main2.i.exclude_internal_props(n3)];
    }
    class c2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, r2, s2, main2.i.safe_not_equal, {});
      }
    }
    function i2(t3) {
      let n3, a3, s3, r3, i3, o3, p3, d2, m2, h2, f2, _2, u2, g2, x2, v2, $2, w2, y2, b2, E, C2, B, A;
      r3 = new l2({props: {class: "h-8 sm:h-12"}}), y2 = new c2({props: {class: "h-8 sm:h-12 fill-current text-feather-light hover:text-white"}});
      const L = t3[2].default, q = main2.i.create_slot(L, t3, t3[1], null);
      return {c() {
        n3 = main2.i.element("header"), a3 = main2.i.element("nav"), s3 = main2.i.element("a"), main2.i.create_component(r3.$$.fragment), i3 = main2.i.element("span"), i3.textContent = "Feather", o3 = main2.i.space(), p3 = main2.i.element("ul"), d2 = main2.i.element("li"), m2 = main2.i.element("a"), m2.textContent = "Plugins", h2 = main2.i.space(), f2 = main2.i.element("li"), _2 = main2.i.element("a"), _2.textContent = "Docs", u2 = main2.i.space(), g2 = main2.i.element("li"), x2 = main2.i.element("a"), x2.textContent = "FAQ", v2 = main2.i.space(), $2 = main2.i.element("li"), w2 = main2.i.element("a"), main2.i.create_component(y2.$$.fragment), b2 = main2.i.space(), E = main2.i.element("main"), q && q.c(), main2.i.attr(i3, "class", "ml-3 text-4xl hidden sm:block"), main2.i.attr(s3, "href", "/"), main2.i.attr(s3, "class", "flex items-center"), main2.i.attr(m2, "href", "/plugins"), main2.i.attr(_2, "href", "/docs"), main2.i.attr(x2, "href", "/faq"), main2.i.attr(w2, "href", "https://github.com/feather-rs/feather"), main2.i.attr(p3, "class", "flex items-center space-x-6 text-normal sm:text-xl font-bold"), main2.i.attr(a3, "class", "container mx-auto flex justify-between items-center h-16 sm:h-24 py-4 px-8"), main2.i.attr(n3, "class", "flex bg-feather-dark text-white"), main2.i.attr(E, "class", "flex flex-col flex-1");
      }, m(l3, c3) {
        main2.i.insert(l3, n3, c3), main2.i.append(n3, a3), main2.i.append(a3, s3), main2.i.mount_component(r3, s3, null), main2.i.append(s3, i3), main2.i.append(a3, o3), main2.i.append(a3, p3), main2.i.append(p3, d2), main2.i.append(d2, m2), main2.i.append(p3, h2), main2.i.append(p3, f2), main2.i.append(f2, _2), main2.i.append(p3, u2), main2.i.append(p3, g2), main2.i.append(g2, x2), main2.i.append(p3, v2), main2.i.append(p3, $2), main2.i.append($2, w2), main2.i.mount_component(y2, w2, null), main2.i.insert(l3, b2, c3), main2.i.insert(l3, E, c3), q && q.m(E, null), C2 = true, B || (A = [main2.i.action_destroyer(t3[0].call(null, s3)), main2.i.action_destroyer(t3[0].call(null, m2)), main2.i.action_destroyer(t3[0].call(null, _2)), main2.i.action_destroyer(t3[0].call(null, x2))], B = true);
      }, p(t4, [n4]) {
        q && q.p && 2 & n4 && main2.i.update_slot(q, L, t4, t4[1], n4, null, null);
      }, i(t4) {
        C2 || (main2.i.transition_in(r3.$$.fragment, t4), main2.i.transition_in(y2.$$.fragment, t4), main2.i.transition_in(q, t4), C2 = true);
      }, o(t4) {
        main2.i.transition_out(r3.$$.fragment, t4), main2.i.transition_out(y2.$$.fragment, t4), main2.i.transition_out(q, t4), C2 = false;
      }, d(t4) {
        t4 && main2.i.detach(n3), main2.i.destroy_component(r3), main2.i.destroy_component(y2), t4 && main2.i.detach(b2), t4 && main2.i.detach(E), q && q.d(t4), B = false, main2.i.run_all(A);
      }};
    }
    function o2(n3, a3, l3) {
      let s3;
      main2.i.component_subscribe(n3, main2.u, (e3) => l3(0, s3 = e3));
      let {$$slots: r3 = {}, $$scope: c3} = a3;
      return n3.$$set = (e3) => {
        "$$scope" in e3 && l3(1, c3 = e3.$$scope);
      }, [s3, c3, r3];
    }
    class p2 extends main2.i.SvelteComponent {
      constructor(t3) {
        super(), main2.i.init(this, t3, o2, i2, main2.i.safe_not_equal, {});
      }
    }
    var layout_21a43ef3_default = p2;
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      g: () => q,
      i: () => n2,
      m: () => N,
      p: () => T,
      u: () => L
    });
    var t2 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function e2(t3, e3, n3) {
      return t3(n3 = {path: e3, exports: {}, require: function(t4, e4) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(e4 == null && n3.path);
      }}, n3.exports), n3.exports;
    }
    var n2 = e2(function(e3, n3) {
      function o3() {
      }
      Object.defineProperty(n3, "__esModule", {value: true});
      const r3 = (t3) => t3;
      function i3(t3, e4) {
        for (const n4 in e4)
          t3[n4] = e4[n4];
        return t3;
      }
      function s3(t3) {
        return t3 && typeof t3 == "object" && typeof t3.then == "function";
      }
      function a3(t3) {
        return t3();
      }
      function c3() {
        return Object.create(null);
      }
      function u3(t3) {
        t3.forEach(a3);
      }
      function l3(t3) {
        return typeof t3 == "function";
      }
      function d3(t3) {
        return Object.keys(t3).length === 0;
      }
      function p3(t3, ...e4) {
        if (t3 == null)
          return o3;
        const n4 = t3.subscribe(...e4);
        return n4.unsubscribe ? () => n4.unsubscribe() : n4;
      }
      function f3(t3, e4, n4, o4) {
        return t3[1] && o4 ? i3(n4.ctx.slice(), t3[1](o4(e4))) : n4.ctx;
      }
      function h3(t3, e4, n4, o4) {
        if (t3[2] && o4) {
          const r4 = t3[2](o4(n4));
          if (e4.dirty === void 0)
            return r4;
          if (typeof r4 == "object") {
            const t4 = [], n5 = Math.max(e4.dirty.length, r4.length);
            for (let o5 = 0; o5 < n5; o5 += 1)
              t4[o5] = e4.dirty[o5] | r4[o5];
            return t4;
          }
          return e4.dirty | r4;
        }
        return e4.dirty;
      }
      const m3 = (t3, e4) => Object.prototype.hasOwnProperty.call(t3, e4);
      const _3 = typeof window != "undefined";
      n3.now = _3 ? () => window.performance.now() : () => Date.now(), n3.raf = _3 ? (t3) => requestAnimationFrame(t3) : o3;
      const g3 = new Set();
      function y3(t3) {
        g3.forEach((e4) => {
          e4.c(t3) || (g3.delete(e4), e4.f());
        }), g3.size !== 0 && n3.raf(y3);
      }
      function b3(t3) {
        let e4;
        return g3.size === 0 && n3.raf(y3), {promise: new Promise((n4) => {
          g3.add(e4 = {c: t3, f: n4});
        }), abort() {
          g3.delete(e4);
        }};
      }
      function $3(t3, e4) {
        t3.appendChild(e4);
      }
      function w3(t3, e4, n4) {
        t3.insertBefore(e4, n4 || null);
      }
      function v3(t3) {
        t3.parentNode.removeChild(t3);
      }
      function x3(t3) {
        return document.createElement(t3);
      }
      function F2(t3) {
        return document.createElementNS("http://www.w3.org/2000/svg", t3);
      }
      function k3(t3) {
        return document.createTextNode(t3);
      }
      function P2(t3, e4, n4, o4) {
        return t3.addEventListener(e4, n4, o4), () => t3.removeEventListener(e4, n4, o4);
      }
      function E2(t3, e4, n4) {
        n4 == null ? t3.removeAttribute(e4) : t3.getAttribute(e4) !== n4 && t3.setAttribute(e4, n4);
      }
      function S2(t3) {
        return Array.from(t3.childNodes);
      }
      function O2(t3, e4) {
        for (let n4 = 0; n4 < t3.length; n4 += 1) {
          const o4 = t3[n4];
          if (o4.nodeType === 3)
            return o4.data = "" + e4, t3.splice(n4, 1)[0];
        }
        return k3(e4);
      }
      let j2;
      function C3() {
        if (j2 === void 0) {
          j2 = false;
          try {
            typeof window != "undefined" && window.parent && window.parent.document;
          } catch (t3) {
            j2 = true;
          }
        }
        return j2;
      }
      function D2(t3, e4) {
        const n4 = document.createEvent("CustomEvent");
        return n4.initCustomEvent(t3, false, false, e4), n4;
      }
      const M2 = new Set();
      let A2 = 0;
      function I2(t3, e4, n4, o4, r4, i4, s4, a4 = 0) {
        const c4 = 16.666 / o4;
        let u4 = "{\n";
        for (let t4 = 0; t4 <= 1; t4 += c4) {
          const o5 = e4 + (n4 - e4) * i4(t4);
          u4 += 100 * t4 + `%{${s4(o5, 1 - o5)}}
`;
        }
        const l4 = u4 + `100% {${s4(n4, 1 - n4)}}
}`, d4 = `__svelte_${function(t4) {
          let e5 = 5381, n5 = t4.length;
          for (; n5--; )
            e5 = (e5 << 5) - e5 ^ t4.charCodeAt(n5);
          return e5 >>> 0;
        }(l4)}_${a4}`, p4 = t3.ownerDocument;
        M2.add(p4);
        const f4 = p4.__svelte_stylesheet || (p4.__svelte_stylesheet = p4.head.appendChild(x3("style")).sheet), h4 = p4.__svelte_rules || (p4.__svelte_rules = {});
        h4[d4] || (h4[d4] = true, f4.insertRule(`@keyframes ${d4} ${l4}`, f4.cssRules.length));
        const m4 = t3.style.animation || "";
        return t3.style.animation = `${m4 ? `${m4}, ` : ""}${d4} ${o4}ms linear ${r4}ms 1 both`, A2 += 1, d4;
      }
      function T2(t3, e4) {
        const o4 = (t3.style.animation || "").split(", "), r4 = o4.filter(e4 ? (t4) => t4.indexOf(e4) < 0 : (t4) => t4.indexOf("__svelte") === -1), i4 = o4.length - r4.length;
        i4 && (t3.style.animation = r4.join(", "), A2 -= i4, A2 || n3.raf(() => {
          A2 || (M2.forEach((t4) => {
            const e5 = t4.__svelte_stylesheet;
            let n4 = e5.cssRules.length;
            for (; n4--; )
              e5.deleteRule(n4);
            t4.__svelte_rules = {};
          }), M2.clear());
        }));
      }
      function L2(t3, e4) {
        const n4 = t3.getBoundingClientRect();
        if (e4.left !== n4.left || e4.top !== n4.top) {
          const o4 = getComputedStyle(t3), r4 = o4.transform === "none" ? "" : o4.transform;
          t3.style.transform = `${r4} translate(${e4.left - n4.left}px, ${e4.top - n4.top}px)`;
        }
      }
      function q2(t3) {
        n3.current_component = t3;
      }
      function R2() {
        if (!n3.current_component)
          throw new Error("Function called outside component initialization");
        return n3.current_component;
      }
      const N2 = [], U2 = [], B2 = [], H2 = [], z3 = Promise.resolve();
      let K2 = false;
      function W3() {
        K2 || (K2 = true, z3.then(Q2));
      }
      function J2(t3) {
        B2.push(t3);
      }
      let Y2 = false;
      const G2 = new Set();
      function Q2() {
        if (!Y2) {
          Y2 = true;
          do {
            for (let t3 = 0; t3 < N2.length; t3 += 1) {
              const e4 = N2[t3];
              q2(e4), V2(e4.$$);
            }
            for (q2(null), N2.length = 0; U2.length; )
              U2.pop()();
            for (let t3 = 0; t3 < B2.length; t3 += 1) {
              const e4 = B2[t3];
              G2.has(e4) || (G2.add(e4), e4());
            }
            B2.length = 0;
          } while (N2.length);
          for (; H2.length; )
            H2.pop()();
          K2 = false, Y2 = false, G2.clear();
        }
      }
      function V2(t3) {
        if (t3.fragment !== null) {
          t3.update(), u3(t3.before_update);
          const e4 = t3.dirty;
          t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e4), t3.after_update.forEach(J2);
        }
      }
      let Z2;
      function X2() {
        return Z2 || (Z2 = Promise.resolve(), Z2.then(() => {
          Z2 = null;
        })), Z2;
      }
      function tt2(t3, e4, n4) {
        t3.dispatchEvent(D2(`${e4 ? "intro" : "outro"}${n4}`));
      }
      const et2 = new Set();
      let nt2;
      function ot2() {
        nt2 = {r: 0, c: [], p: nt2};
      }
      function rt2() {
        nt2.r || u3(nt2.c), nt2 = nt2.p;
      }
      function it2(t3, e4) {
        t3 && t3.i && (et2.delete(t3), t3.i(e4));
      }
      function st2(t3, e4, n4, o4) {
        if (t3 && t3.o) {
          if (et2.has(t3))
            return;
          et2.add(t3), nt2.c.push(() => {
            et2.delete(t3), o4 && (n4 && t3.d(1), o4());
          }), t3.o(e4);
        }
      }
      const at2 = {duration: 0};
      const ct2 = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : t2;
      function ut2(t3, e4) {
        t3.d(1), e4.delete(t3.key);
      }
      function lt2(t3, e4) {
        st2(t3, 1, 1, () => {
          e4.delete(t3.key);
        });
      }
      const dt2 = new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), pt2 = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
      const ft2 = {'"': "&quot;", "'": "&#39;", "&": "&amp;", "<": "&lt;", ">": "&gt;"};
      function ht2(t3) {
        return String(t3).replace(/["'&<>]/g, (t4) => ft2[t4]);
      }
      let mt2;
      function _t2(t3, e4, n4, o4) {
        const {fragment: r4, on_mount: i4, on_destroy: s4, after_update: c4} = t3.$$;
        r4 && r4.m(e4, n4), o4 || J2(() => {
          const e5 = i4.map(a3).filter(l3);
          s4 ? s4.push(...e5) : u3(e5), t3.$$.on_mount = [];
        }), c4.forEach(J2);
      }
      function gt2(t3, e4) {
        const n4 = t3.$$;
        n4.fragment !== null && (u3(n4.on_destroy), n4.fragment && n4.fragment.d(e4), n4.on_destroy = n4.fragment = null, n4.ctx = []);
      }
      typeof HTMLElement == "function" && (n3.SvelteElement = class extends HTMLElement {
        constructor() {
          super(), this.attachShadow({mode: "open"});
        }
        connectedCallback() {
          const {on_mount: t3} = this.$$;
          this.$$.on_disconnect = t3.map(a3).filter(l3);
          for (const t4 in this.$$.slotted)
            this.appendChild(this.$$.slotted[t4]);
        }
        attributeChangedCallback(t3, e4, n4) {
          this[t3] = n4;
        }
        disconnectedCallback() {
          u3(this.$$.on_disconnect);
        }
        $destroy() {
          gt2(this, 1), this.$destroy = o3;
        }
        $on(t3, e4) {
          const n4 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
          return n4.push(e4), () => {
            const t4 = n4.indexOf(e4);
            t4 !== -1 && n4.splice(t4, 1);
          };
        }
        $set(t3) {
          this.$$set && !d3(t3) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
        }
      });
      class yt2 {
        $destroy() {
          gt2(this, 1), this.$destroy = o3;
        }
        $on(t3, e4) {
          const n4 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
          return n4.push(e4), () => {
            const t4 = n4.indexOf(e4);
            t4 !== -1 && n4.splice(t4, 1);
          };
        }
        $set(t3) {
          this.$$set && !d3(t3) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
        }
      }
      function bt2(t3, e4) {
        document.dispatchEvent(D2(t3, Object.assign({version: "3.34.0"}, e4)));
      }
      function $t2(t3) {
        bt2("SvelteDOMRemove", {node: t3}), v3(t3);
      }
      class wt2 extends yt2 {
        constructor(t3) {
          if (!t3 || !t3.target && !t3.$$inline)
            throw new Error("'target' is a required option");
          super();
        }
        $destroy() {
          super.$destroy(), this.$destroy = () => {
            console.warn("Component was already destroyed");
          };
        }
        $capture_state() {
        }
        $inject_state() {
        }
      }
      n3.HtmlTag = class {
        constructor(t3 = null) {
          this.a = t3, this.e = this.n = null;
        }
        m(t3, e4, n4 = null) {
          this.e || (this.e = x3(e4.nodeName), this.t = e4, this.h(t3)), this.i(n4);
        }
        h(t3) {
          this.e.innerHTML = t3, this.n = Array.from(this.e.childNodes);
        }
        i(t3) {
          for (let e4 = 0; e4 < this.n.length; e4 += 1)
            w3(this.t, this.n[e4], t3);
        }
        p(t3) {
          this.d(), this.h(t3), this.i(this.a);
        }
        d() {
          this.n.forEach(v3);
        }
      }, n3.SvelteComponent = yt2, n3.SvelteComponentDev = wt2, n3.SvelteComponentTyped = class extends wt2 {
        constructor(t3) {
          super(t3);
        }
      }, n3.action_destroyer = function(t3) {
        return t3 && l3(t3.destroy) ? t3.destroy : o3;
      }, n3.add_attribute = function(t3, e4, n4) {
        return e4 == null || n4 && !e4 ? "" : ` ${t3}${e4 === true ? "" : `=${typeof e4 == "string" ? JSON.stringify(ht2(e4)) : `"${e4}"`}`}`;
      }, n3.add_classes = function(t3) {
        return t3 ? ` class="${t3}"` : "";
      }, n3.add_flush_callback = function(t3) {
        H2.push(t3);
      }, n3.add_location = function(t3, e4, n4, o4, r4) {
        t3.__svelte_meta = {loc: {file: e4, line: n4, column: o4, char: r4}};
      }, n3.add_render_callback = J2, n3.add_resize_listener = function(t3, e4) {
        getComputedStyle(t3).position === "static" && (t3.style.position = "relative");
        const n4 = x3("iframe");
        n4.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n4.setAttribute("aria-hidden", "true"), n4.tabIndex = -1;
        const o4 = C3();
        let r4;
        return o4 ? (n4.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r4 = P2(window, "message", (t4) => {
          t4.source === n4.contentWindow && e4();
        })) : (n4.src = "about:blank", n4.onload = () => {
          r4 = P2(n4.contentWindow, "resize", e4);
        }), $3(t3, n4), () => {
          (o4 || r4 && n4.contentWindow) && r4(), v3(n4);
        };
      }, n3.add_transform = L2, n3.afterUpdate = function(t3) {
        R2().$$.after_update.push(t3);
      }, n3.append = $3, n3.append_dev = function(t3, e4) {
        bt2("SvelteDOMInsert", {target: t3, node: e4}), $3(t3, e4);
      }, n3.assign = i3, n3.attr = E2, n3.attr_dev = function(t3, e4, n4) {
        E2(t3, e4, n4), n4 == null ? bt2("SvelteDOMRemoveAttribute", {node: t3, attribute: e4}) : bt2("SvelteDOMSetAttribute", {node: t3, attribute: e4, value: n4});
      }, n3.attribute_to_object = function(t3) {
        const e4 = {};
        for (const n4 of t3)
          e4[n4.name] = n4.value;
        return e4;
      }, n3.beforeUpdate = function(t3) {
        R2().$$.before_update.push(t3);
      }, n3.bind = function(t3, e4, n4) {
        const o4 = t3.$$.props[e4];
        o4 !== void 0 && (t3.$$.bound[o4] = n4, n4(t3.$$.ctx[o4]));
      }, n3.binding_callbacks = U2, n3.blank_object = c3, n3.bubble = function(t3, e4) {
        const n4 = t3.$$.callbacks[e4.type];
        n4 && n4.slice().forEach((t4) => t4(e4));
      }, n3.check_outros = rt2, n3.children = S2, n3.claim_component = function(t3, e4) {
        t3 && t3.l(e4);
      }, n3.claim_element = function(t3, e4, n4, o4) {
        for (let o5 = 0; o5 < t3.length; o5 += 1) {
          const r4 = t3[o5];
          if (r4.nodeName === e4) {
            let e5 = 0;
            const i4 = [];
            for (; e5 < r4.attributes.length; ) {
              const t4 = r4.attributes[e5++];
              n4[t4.name] || i4.push(t4.name);
            }
            for (let t4 = 0; t4 < i4.length; t4++)
              r4.removeAttribute(i4[t4]);
            return t3.splice(o5, 1)[0];
          }
        }
        return o4 ? F2(e4) : x3(e4);
      }, n3.claim_space = function(t3) {
        return O2(t3, " ");
      }, n3.claim_text = O2, n3.clear_loops = function() {
        g3.clear();
      }, n3.component_subscribe = function(t3, e4, n4) {
        t3.$$.on_destroy.push(p3(e4, n4));
      }, n3.compute_rest_props = function(t3, e4) {
        const n4 = {};
        e4 = new Set(e4);
        for (const o4 in t3)
          e4.has(o4) || o4[0] === "$" || (n4[o4] = t3[o4]);
        return n4;
      }, n3.compute_slots = function(t3) {
        const e4 = {};
        for (const n4 in t3)
          e4[n4] = true;
        return e4;
      }, n3.createEventDispatcher = function() {
        const t3 = R2();
        return (e4, n4) => {
          const o4 = t3.$$.callbacks[e4];
          if (o4) {
            const r4 = D2(e4, n4);
            o4.slice().forEach((e5) => {
              e5.call(t3, r4);
            });
          }
        };
      }, n3.create_animation = function(t3, e4, i4, s4) {
        if (!e4)
          return o3;
        const a4 = t3.getBoundingClientRect();
        if (e4.left === a4.left && e4.right === a4.right && e4.top === a4.top && e4.bottom === a4.bottom)
          return o3;
        const {delay: c4 = 0, duration: u4 = 300, easing: l4 = r3, start: d4 = n3.now() + c4, end: p4 = d4 + u4, tick: f4 = o3, css: h4} = i4(t3, {from: e4, to: a4}, s4);
        let m4, _4 = true, g4 = false;
        function y4() {
          h4 && T2(t3, m4), _4 = false;
        }
        return b3((t4) => {
          if (!g4 && t4 >= d4 && (g4 = true), g4 && t4 >= p4 && (f4(1, 0), y4()), !_4)
            return false;
          if (g4) {
            const e5 = 0 + 1 * l4((t4 - d4) / u4);
            f4(e5, 1 - e5);
          }
          return true;
        }), h4 && (m4 = I2(t3, 0, 1, u4, c4, l4, h4)), c4 || (g4 = true), f4(0, 1), y4;
      }, n3.create_bidirectional_transition = function(t3, e4, i4, s4) {
        let a4 = e4(t3, i4), c4 = s4 ? 0 : 1, d4 = null, p4 = null, f4 = null;
        function h4() {
          f4 && T2(t3, f4);
        }
        function m4(t4, e5) {
          const n4 = t4.b - c4;
          return e5 *= Math.abs(n4), {a: c4, b: t4.b, d: n4, duration: e5, start: t4.start, end: t4.start + e5, group: t4.group};
        }
        function _4(e5) {
          const {delay: i5 = 0, duration: s5 = 300, easing: l4 = r3, tick: _5 = o3, css: g4} = a4 || at2, y4 = {start: n3.now() + i5, b: e5};
          e5 || (y4.group = nt2, nt2.r += 1), d4 || p4 ? p4 = y4 : (g4 && (h4(), f4 = I2(t3, c4, e5, s5, i5, l4, g4)), e5 && _5(0, 1), d4 = m4(y4, s5), J2(() => tt2(t3, e5, "start")), b3((e6) => {
            if (p4 && e6 > p4.start && (d4 = m4(p4, s5), p4 = null, tt2(t3, d4.b, "start"), g4 && (h4(), f4 = I2(t3, c4, d4.b, d4.duration, 0, l4, a4.css))), d4) {
              if (e6 >= d4.end)
                _5(c4 = d4.b, 1 - c4), tt2(t3, d4.b, "end"), p4 || (d4.b ? h4() : --d4.group.r || u3(d4.group.c)), d4 = null;
              else if (e6 >= d4.start) {
                const t4 = e6 - d4.start;
                c4 = d4.a + d4.d * l4(t4 / d4.duration), _5(c4, 1 - c4);
              }
            }
            return !(!d4 && !p4);
          }));
        }
        return {run(t4) {
          l3(a4) ? X2().then(() => {
            a4 = a4(), _4(t4);
          }) : _4(t4);
        }, end() {
          h4(), d4 = p4 = null;
        }};
      }, n3.create_component = function(t3) {
        t3 && t3.c();
      }, n3.create_in_transition = function(t3, e4, i4) {
        let s4, a4, c4 = e4(t3, i4), u4 = false, d4 = 0;
        function p4() {
          s4 && T2(t3, s4);
        }
        function f4() {
          const {delay: e5 = 0, duration: i5 = 300, easing: l4 = r3, tick: f5 = o3, css: h5} = c4 || at2;
          h5 && (s4 = I2(t3, 0, 1, i5, e5, l4, h5, d4++)), f5(0, 1);
          const m4 = n3.now() + e5, _4 = m4 + i5;
          a4 && a4.abort(), u4 = true, J2(() => tt2(t3, true, "start")), a4 = b3((e6) => {
            if (u4) {
              if (e6 >= _4)
                return f5(1, 0), tt2(t3, true, "end"), p4(), u4 = false;
              if (e6 >= m4) {
                const t4 = l4((e6 - m4) / i5);
                f5(t4, 1 - t4);
              }
            }
            return u4;
          });
        }
        let h4 = false;
        return {start() {
          h4 || (T2(t3), l3(c4) ? (c4 = c4(), X2().then(f4)) : f4());
        }, invalidate() {
          h4 = false;
        }, end() {
          u4 && (p4(), u4 = false);
        }};
      }, n3.create_out_transition = function(t3, e4, i4) {
        let s4, a4 = e4(t3, i4), c4 = true;
        const d4 = nt2;
        function p4() {
          const {delay: e5 = 0, duration: i5 = 300, easing: l4 = r3, tick: p5 = o3, css: f4} = a4 || at2;
          f4 && (s4 = I2(t3, 1, 0, i5, e5, l4, f4));
          const h4 = n3.now() + e5, m4 = h4 + i5;
          J2(() => tt2(t3, false, "start")), b3((e6) => {
            if (c4) {
              if (e6 >= m4)
                return p5(0, 1), tt2(t3, false, "end"), --d4.r || u3(d4.c), false;
              if (e6 >= h4) {
                const t4 = l4((e6 - h4) / i5);
                p5(1 - t4, t4);
              }
            }
            return c4;
          });
        }
        return d4.r += 1, l3(a4) ? X2().then(() => {
          a4 = a4(), p4();
        }) : p4(), {end(e5) {
          e5 && a4.tick && a4.tick(1, 0), c4 && (s4 && T2(t3, s4), c4 = false);
        }};
      }, n3.create_slot = function(t3, e4, n4, o4) {
        if (t3) {
          const r4 = f3(t3, e4, n4, o4);
          return t3[0](r4);
        }
      }, n3.create_ssr_component = function(t3) {
        function e4(e5, o4, r4, i4) {
          const s4 = n3.current_component;
          q2({$$: {on_destroy: mt2, context: new Map(s4 ? s4.$$.context : []), on_mount: [], before_update: [], after_update: [], callbacks: c3()}});
          const a4 = t3(e5, o4, r4, i4);
          return q2(s4), a4;
        }
        return {render: (t4 = {}, n4 = {}) => {
          mt2 = [];
          const o4 = {title: "", head: "", css: new Set()}, r4 = e4(o4, t4, {}, n4);
          return u3(mt2), {html: r4, css: {code: Array.from(o4.css).map((t5) => t5.code).join("\n"), map: null}, head: o4.title + o4.head};
        }, $$render: e4};
      }, n3.custom_event = D2, n3.dataset_dev = function(t3, e4, n4) {
        t3.dataset[e4] = n4, bt2("SvelteDOMSetDataset", {node: t3, property: e4, value: n4});
      }, n3.debug = function(t3, e4, n4, o4) {
        return console.log(`{@debug} ${t3 ? t3 + " " : ""}(${e4}:${n4})`), console.log(o4), "";
      }, n3.destroy_block = ut2, n3.destroy_component = gt2, n3.destroy_each = function(t3, e4) {
        for (let n4 = 0; n4 < t3.length; n4 += 1)
          t3[n4] && t3[n4].d(e4);
      }, n3.detach = v3, n3.detach_after_dev = function(t3) {
        for (; t3.nextSibling; )
          $t2(t3.nextSibling);
      }, n3.detach_before_dev = function(t3) {
        for (; t3.previousSibling; )
          $t2(t3.previousSibling);
      }, n3.detach_between_dev = function(t3, e4) {
        for (; t3.nextSibling && t3.nextSibling !== e4; )
          $t2(t3.nextSibling);
      }, n3.detach_dev = $t2, n3.dirty_components = N2, n3.dispatch_dev = bt2, n3.each = function(t3, e4) {
        let n4 = "";
        for (let o4 = 0; o4 < t3.length; o4 += 1)
          n4 += e4(t3[o4], o4);
        return n4;
      }, n3.element = x3, n3.element_is = function(t3, e4) {
        return document.createElement(t3, {is: e4});
      }, n3.empty = function() {
        return k3("");
      }, n3.escape = ht2, n3.escaped = ft2, n3.exclude_internal_props = function(t3) {
        const e4 = {};
        for (const n4 in t3)
          n4[0] !== "$" && (e4[n4] = t3[n4]);
        return e4;
      }, n3.fix_and_destroy_block = function(t3, e4) {
        t3.f(), ut2(t3, e4);
      }, n3.fix_and_outro_and_destroy_block = function(t3, e4) {
        t3.f(), lt2(t3, e4);
      }, n3.fix_position = function(t3) {
        const e4 = getComputedStyle(t3);
        if (e4.position !== "absolute" && e4.position !== "fixed") {
          const {width: n4, height: o4} = e4, r4 = t3.getBoundingClientRect();
          t3.style.position = "absolute", t3.style.width = n4, t3.style.height = o4, L2(t3, r4);
        }
      }, n3.flush = Q2, n3.getContext = function(t3) {
        return R2().$$.context.get(t3);
      }, n3.get_binding_group_value = function(t3, e4, n4) {
        const o4 = new Set();
        for (let e5 = 0; e5 < t3.length; e5 += 1)
          t3[e5].checked && o4.add(t3[e5].__value);
        return n4 || o4.delete(e4), Array.from(o4);
      }, n3.get_current_component = R2, n3.get_custom_elements_slots = function(t3) {
        const e4 = {};
        return t3.childNodes.forEach((t4) => {
          e4[t4.slot || "default"] = true;
        }), e4;
      }, n3.get_slot_changes = h3, n3.get_slot_context = f3, n3.get_spread_object = function(t3) {
        return typeof t3 == "object" && t3 !== null ? t3 : {};
      }, n3.get_spread_update = function(t3, e4) {
        const n4 = {}, o4 = {}, r4 = {$$scope: 1};
        let i4 = t3.length;
        for (; i4--; ) {
          const s4 = t3[i4], a4 = e4[i4];
          if (a4) {
            for (const t4 in s4)
              t4 in a4 || (o4[t4] = 1);
            for (const t4 in a4)
              r4[t4] || (n4[t4] = a4[t4], r4[t4] = 1);
            t3[i4] = a4;
          } else
            for (const t4 in s4)
              r4[t4] = 1;
        }
        for (const t4 in o4)
          t4 in n4 || (n4[t4] = void 0);
        return n4;
      }, n3.get_store_value = function(t3) {
        let e4;
        return p3(t3, (t4) => e4 = t4)(), e4;
      }, n3.globals = ct2, n3.group_outros = ot2, n3.handle_promise = function(t3, e4) {
        const n4 = e4.token = {};
        function o4(t4, o5, r4, i4) {
          if (e4.token !== n4)
            return;
          e4.resolved = i4;
          let s4 = e4.ctx;
          r4 !== void 0 && (s4 = s4.slice(), s4[r4] = i4);
          const a4 = t4 && (e4.current = t4)(s4);
          let c4 = false;
          e4.block && (e4.blocks ? e4.blocks.forEach((t5, n5) => {
            n5 !== o5 && t5 && (ot2(), st2(t5, 1, 1, () => {
              e4.blocks[n5] === t5 && (e4.blocks[n5] = null);
            }), rt2());
          }) : e4.block.d(1), a4.c(), it2(a4, 1), a4.m(e4.mount(), e4.anchor), c4 = true), e4.block = a4, e4.blocks && (e4.blocks[o5] = a4), c4 && Q2();
        }
        if (s3(t3)) {
          const n5 = R2();
          if (t3.then((t4) => {
            q2(n5), o4(e4.then, 1, e4.value, t4), q2(null);
          }, (t4) => {
            if (q2(n5), o4(e4.catch, 2, e4.error, t4), q2(null), !e4.hasCatch)
              throw t4;
          }), e4.current !== e4.pending)
            return o4(e4.pending, 0), true;
        } else {
          if (e4.current !== e4.then)
            return o4(e4.then, 1, e4.value, t3), true;
          e4.resolved = t3;
        }
      }, n3.hasContext = function(t3) {
        return R2().$$.context.has(t3);
      }, n3.has_prop = m3, n3.identity = r3, n3.init = function(t3, e4, r4, i4, s4, a4, l4 = [-1]) {
        const d4 = n3.current_component;
        q2(t3);
        const p4 = t3.$$ = {fragment: null, ctx: null, props: a4, update: o3, not_equal: s4, bound: c3(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(d4 ? d4.$$.context : []), callbacks: c3(), dirty: l4, skip_bound: false};
        let f4 = false;
        if (p4.ctx = r4 ? r4(t3, e4.props || {}, (e5, n4, ...o4) => {
          const r5 = o4.length ? o4[0] : n4;
          return p4.ctx && s4(p4.ctx[e5], p4.ctx[e5] = r5) && (!p4.skip_bound && p4.bound[e5] && p4.bound[e5](r5), f4 && function(t4, e6) {
            t4.$$.dirty[0] === -1 && (N2.push(t4), W3(), t4.$$.dirty.fill(0)), t4.$$.dirty[e6 / 31 | 0] |= 1 << e6 % 31;
          }(t3, e5)), n4;
        }) : [], p4.update(), f4 = true, u3(p4.before_update), p4.fragment = !!i4 && i4(p4.ctx), e4.target) {
          if (e4.hydrate) {
            const t4 = S2(e4.target);
            p4.fragment && p4.fragment.l(t4), t4.forEach(v3);
          } else
            p4.fragment && p4.fragment.c();
          e4.intro && it2(t3.$$.fragment), _t2(t3, e4.target, e4.anchor, e4.customElement), Q2();
        }
        q2(d4);
      }, n3.insert = w3, n3.insert_dev = function(t3, e4, n4) {
        bt2("SvelteDOMInsert", {target: t3, node: e4, anchor: n4}), w3(t3, e4, n4);
      }, n3.intros = {enabled: false}, n3.invalid_attribute_name_character = pt2, n3.is_client = _3, n3.is_crossorigin = C3, n3.is_empty = d3, n3.is_function = l3, n3.is_promise = s3, n3.listen = P2, n3.listen_dev = function(t3, e4, n4, o4, r4, i4) {
        const s4 = o4 === true ? ["capture"] : o4 ? Array.from(Object.keys(o4)) : [];
        r4 && s4.push("preventDefault"), i4 && s4.push("stopPropagation"), bt2("SvelteDOMAddEventListener", {node: t3, event: e4, handler: n4, modifiers: s4});
        const a4 = P2(t3, e4, n4, o4);
        return () => {
          bt2("SvelteDOMRemoveEventListener", {node: t3, event: e4, handler: n4, modifiers: s4}), a4();
        };
      }, n3.loop = b3, n3.loop_guard = function(t3) {
        const e4 = Date.now();
        return () => {
          if (Date.now() - e4 > t3)
            throw new Error("Infinite loop detected");
        };
      }, n3.missing_component = {$$render: () => ""}, n3.mount_component = _t2, n3.noop = o3, n3.not_equal = function(t3, e4) {
        return t3 != t3 ? e4 == e4 : t3 !== e4;
      }, n3.null_to_empty = function(t3) {
        return t3 == null ? "" : t3;
      }, n3.object_without_properties = function(t3, e4) {
        const n4 = {};
        for (const o4 in t3)
          m3(t3, o4) && e4.indexOf(o4) === -1 && (n4[o4] = t3[o4]);
        return n4;
      }, n3.onDestroy = function(t3) {
        R2().$$.on_destroy.push(t3);
      }, n3.onMount = function(t3) {
        R2().$$.on_mount.push(t3);
      }, n3.once = function(t3) {
        let e4 = false;
        return function(...n4) {
          e4 || (e4 = true, t3.call(this, ...n4));
        };
      }, n3.outro_and_destroy_block = lt2, n3.prevent_default = function(t3) {
        return function(e4) {
          return e4.preventDefault(), t3.call(this, e4);
        };
      }, n3.prop_dev = function(t3, e4, n4) {
        t3[e4] = n4, bt2("SvelteDOMSetProperty", {node: t3, property: e4, value: n4});
      }, n3.query_selector_all = function(t3, e4 = document.body) {
        return Array.from(e4.querySelectorAll(t3));
      }, n3.run = a3, n3.run_all = u3, n3.safe_not_equal = function(t3, e4) {
        return t3 != t3 ? e4 == e4 : t3 !== e4 || t3 && typeof t3 == "object" || typeof t3 == "function";
      }, n3.schedule_update = W3, n3.select_multiple_value = function(t3) {
        return [].map.call(t3.querySelectorAll(":checked"), (t4) => t4.__value);
      }, n3.select_option = function(t3, e4) {
        for (let n4 = 0; n4 < t3.options.length; n4 += 1) {
          const o4 = t3.options[n4];
          if (o4.__value === e4)
            return void (o4.selected = true);
        }
      }, n3.select_options = function(t3, e4) {
        for (let n4 = 0; n4 < t3.options.length; n4 += 1) {
          const o4 = t3.options[n4];
          o4.selected = ~e4.indexOf(o4.__value);
        }
      }, n3.select_value = function(t3) {
        const e4 = t3.querySelector(":checked") || t3.options[0];
        return e4 && e4.__value;
      }, n3.self = function(t3) {
        return function(e4) {
          e4.target === this && t3.call(this, e4);
        };
      }, n3.setContext = function(t3, e4) {
        R2().$$.context.set(t3, e4);
      }, n3.set_attributes = function(t3, e4) {
        const n4 = Object.getOwnPropertyDescriptors(t3.__proto__);
        for (const o4 in e4)
          e4[o4] == null ? t3.removeAttribute(o4) : o4 === "style" ? t3.style.cssText = e4[o4] : o4 === "__value" ? t3.value = t3[o4] = e4[o4] : n4[o4] && n4[o4].set ? t3[o4] = e4[o4] : E2(t3, o4, e4[o4]);
      }, n3.set_current_component = q2, n3.set_custom_element_data = function(t3, e4, n4) {
        e4 in t3 ? t3[e4] = n4 : E2(t3, e4, n4);
      }, n3.set_data = function(t3, e4) {
        e4 = "" + e4, t3.wholeText !== e4 && (t3.data = e4);
      }, n3.set_data_dev = function(t3, e4) {
        e4 = "" + e4, t3.wholeText !== e4 && (bt2("SvelteDOMSetData", {node: t3, data: e4}), t3.data = e4);
      }, n3.set_input_type = function(t3, e4) {
        try {
          t3.type = e4;
        } catch (t4) {
        }
      }, n3.set_input_value = function(t3, e4) {
        t3.value = e4 == null ? "" : e4;
      }, n3.set_now = function(t3) {
        n3.now = t3;
      }, n3.set_raf = function(t3) {
        n3.raf = t3;
      }, n3.set_store_value = function(t3, e4, n4 = e4) {
        return t3.set(n4), e4;
      }, n3.set_style = function(t3, e4, n4, o4) {
        t3.style.setProperty(e4, n4, o4 ? "important" : "");
      }, n3.set_svg_attributes = function(t3, e4) {
        for (const n4 in e4)
          E2(t3, n4, e4[n4]);
      }, n3.space = function() {
        return k3(" ");
      }, n3.spread = function(t3, e4) {
        const n4 = Object.assign({}, ...t3);
        e4 && (n4.class == null ? n4.class = e4 : n4.class += " " + e4);
        let o4 = "";
        return Object.keys(n4).forEach((t4) => {
          if (pt2.test(t4))
            return;
          const e5 = n4[t4];
          e5 === true ? o4 += " " + t4 : dt2.has(t4.toLowerCase()) ? e5 && (o4 += " " + t4) : e5 != null && (o4 += ` ${t4}="${String(e5).replace(/"/g, "&#34;").replace(/'/g, "&#39;")}"`);
        }), o4;
      }, n3.stop_propagation = function(t3) {
        return function(e4) {
          return e4.stopPropagation(), t3.call(this, e4);
        };
      }, n3.subscribe = p3, n3.svg_element = F2, n3.text = k3, n3.tick = function() {
        return W3(), z3;
      }, n3.time_ranges_to_array = function(t3) {
        const e4 = [];
        for (let n4 = 0; n4 < t3.length; n4 += 1)
          e4.push({start: t3.start(n4), end: t3.end(n4)});
        return e4;
      }, n3.to_number = function(t3) {
        return t3 === "" ? null : +t3;
      }, n3.toggle_class = function(t3, e4, n4) {
        t3.classList[n4 ? "add" : "remove"](e4);
      }, n3.transition_in = it2, n3.transition_out = st2, n3.update_keyed_each = function(t3, e4, n4, o4, r4, i4, s4, a4, c4, u4, l4, d4) {
        let p4 = t3.length, f4 = i4.length, h4 = p4;
        const m4 = {};
        for (; h4--; )
          m4[t3[h4].key] = h4;
        const _4 = [], g4 = new Map(), y4 = new Map();
        for (h4 = f4; h4--; ) {
          const t4 = d4(r4, i4, h4), a5 = n4(t4);
          let c5 = s4.get(a5);
          c5 ? o4 && c5.p(t4, e4) : (c5 = u4(a5, t4), c5.c()), g4.set(a5, _4[h4] = c5), a5 in m4 && y4.set(a5, Math.abs(h4 - m4[a5]));
        }
        const b4 = new Set(), $4 = new Set();
        function w4(t4) {
          it2(t4, 1), t4.m(a4, l4), s4.set(t4.key, t4), l4 = t4.first, f4--;
        }
        for (; p4 && f4; ) {
          const e5 = _4[f4 - 1], n5 = t3[p4 - 1], o5 = e5.key, r5 = n5.key;
          e5 === n5 ? (l4 = e5.first, p4--, f4--) : g4.has(r5) ? !s4.has(o5) || b4.has(o5) ? w4(e5) : $4.has(r5) ? p4-- : y4.get(o5) > y4.get(r5) ? ($4.add(o5), w4(e5)) : (b4.add(r5), p4--) : (c4(n5, s4), p4--);
        }
        for (; p4--; ) {
          const e5 = t3[p4];
          g4.has(e5.key) || c4(e5, s4);
        }
        for (; f4; )
          w4(_4[f4 - 1]);
        return _4;
      }, n3.update_slot = function(t3, e4, n4, o4, r4, i4, s4) {
        const a4 = h3(e4, o4, r4, i4);
        if (a4) {
          const r5 = f3(e4, n4, o4, s4);
          t3.p(r5, a4);
        }
      }, n3.update_slot_spread = function(t3, e4, n4, o4, r4, i4, s4, a4) {
        const c4 = s4(r4) | h3(e4, o4, r4, i4);
        if (c4) {
          const r5 = f3(e4, n4, o4, a4);
          t3.p(r5, c4);
        }
      }, n3.validate_component = function(t3, e4) {
        if (!t3 || !t3.$$render)
          throw e4 === "svelte:component" && (e4 += " this={...}"), new Error(`<${e4}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
        return t3;
      }, n3.validate_each_argument = function(t3) {
        if (!(typeof t3 == "string" || t3 && typeof t3 == "object" && "length" in t3)) {
          let e4 = "{#each} only iterates over array-like objects.";
          throw typeof Symbol == "function" && t3 && Symbol.iterator in t3 && (e4 += " You can use a spread to convert this iterable into an array."), new Error(e4);
        }
      }, n3.validate_each_keys = function(t3, e4, n4, o4) {
        const r4 = new Set();
        for (let i4 = 0; i4 < e4.length; i4++) {
          const s4 = o4(n4(t3, e4, i4));
          if (r4.has(s4))
            throw new Error("Cannot have duplicate keys in a keyed each");
          r4.add(s4);
        }
      }, n3.validate_slots = function(t3, e4, n4) {
        for (const o4 of Object.keys(e4))
          ~n4.indexOf(o4) || console.warn(`<${t3}> received an unexpected slot "${o4}".`);
      }, n3.validate_store = function(t3, e4) {
        if (t3 != null && typeof t3.subscribe != "function")
          throw new Error(`'${e4}' is not a store with a 'subscribe' method`);
      }, n3.xlink_attr = function(t3, e4, n4) {
        t3.setAttributeNS("http://www.w3.org/1999/xlink", e4, n4);
      };
    });
    var o2 = e2(function(t3, e3) {
      Object.defineProperty(e3, "__esModule", {value: true}), Object.defineProperty(e3, "SvelteComponent", {enumerable: true, get: function() {
        return n2.SvelteComponentDev;
      }}), Object.defineProperty(e3, "SvelteComponentTyped", {enumerable: true, get: function() {
        return n2.SvelteComponentTyped;
      }}), Object.defineProperty(e3, "afterUpdate", {enumerable: true, get: function() {
        return n2.afterUpdate;
      }}), Object.defineProperty(e3, "beforeUpdate", {enumerable: true, get: function() {
        return n2.beforeUpdate;
      }}), Object.defineProperty(e3, "createEventDispatcher", {enumerable: true, get: function() {
        return n2.createEventDispatcher;
      }}), Object.defineProperty(e3, "getContext", {enumerable: true, get: function() {
        return n2.getContext;
      }}), Object.defineProperty(e3, "hasContext", {enumerable: true, get: function() {
        return n2.hasContext;
      }}), Object.defineProperty(e3, "onDestroy", {enumerable: true, get: function() {
        return n2.onDestroy;
      }}), Object.defineProperty(e3, "onMount", {enumerable: true, get: function() {
        return n2.onMount;
      }}), Object.defineProperty(e3, "setContext", {enumerable: true, get: function() {
        return n2.setContext;
      }}), Object.defineProperty(e3, "tick", {enumerable: true, get: function() {
        return n2.tick;
      }});
    });
    var r2 = {queryHandler: {parse: (t3) => {
      return e3 = new URLSearchParams(t3), [...e3].reduce((t4, [e4, n3]) => (t4[e4] = n3, t4), {});
      var e3;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const i2 = RegExp(/\:([^/()]+)/g);
    function s2(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      a2(t3), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t4} = window.location;
        if (t4) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t4.substring(1))) {
            const e3 = document.querySelector(t4);
            e3 && e3.scrollIntoView();
          }
        }
      }();
    }
    function a2(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", a2(t3.parentElement));
    }
    const c2 = (t3) => {
      const e3 = [];
      let n3;
      for (; n3 = i2.exec(t3); )
        e3.push(n3[1]);
      return e3;
    };
    function u2(t3, e3) {
      u2._console = u2._console || {log: console.log, warn: console.warn};
      const {_console: n3} = u2, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r3 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e4) => {
          r3.includes(e4[0]) || n3[t4](...e4);
        }, e3().then(() => {
          console[t4] = n3[t4];
        });
    }
    function l2() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e3, options: n3} = function(t4) {
        const [e4, n4] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n4 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e4, options: o3};
      }(t3);
      return {...d2(e3), options: n3};
    }
    function d2(t3) {
      r2.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e3 = t3.startsWith("/") ? window.location.origin : void 0, n3 = new URL(t3, e3);
      return {url: n3, fullpath: n3.pathname + n3.search + n3.hash};
    }
    function p2(t3, e3, n3) {
      const o3 = r2.useHash ? "#" : "";
      let i3;
      return i3 = function(t4, e4, n4) {
        const o4 = Object.assign({}, n4, e4), i4 = function(t5, e5) {
          if (!r2.queryHandler)
            return "";
          const n5 = c2(t5), o5 = {};
          e5 && Object.entries(e5).forEach(([t6, e6]) => {
            n5.includes(t6) || (o5[t6] = e6);
          });
          return r2.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e4);
        for (const [e5, n5] of Object.entries(o4))
          t4 = t4.replace(`:${e5}`, n5);
        return `${t4}${i4}`;
      }(t3, e3, n3), i3 = r2.urlTransform.apply(i3), i3 = o3 + i3, i3;
    }
    function f2(t3) {
      let e3;
      const o3 = t3[2].default, r3 = n2.create_slot(o3, t3, t3[1], null);
      return {c() {
        r3 && r3.c();
      }, m(t4, n3) {
        r3 && r3.m(t4, n3), e3 = true;
      }, p(t4, [e4]) {
        r3 && r3.p && 2 & e4 && n2.update_slot(r3, o3, t4, t4[1], e4, null, null);
      }, i(t4) {
        e3 || (n2.transition_in(r3, t4), e3 = true);
      }, o(t4) {
        n2.transition_out(r3, t4), e3 = false;
      }, d(t4) {
        r3 && r3.d(t4);
      }};
    }
    function h2(t3, e3, n3) {
      let {$$slots: o3 = {}, $$scope: r3} = e3, {scoped: i3 = {}} = e3;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n3(0, i3 = t4.scoped), "$$scope" in t4 && n3(1, r3 = t4.$$scope);
      }, [i3, r3, o3];
    }
    class m2 extends n2.SvelteComponent {
      constructor(t3) {
        super(), n2.init(this, t3, h2, f2, n2.safe_not_equal, {scoped: 0});
      }
    }
    var _2 = e2(function(t3, e3) {
      Object.defineProperty(e3, "__esModule", {value: true});
      const o3 = [];
      function r3(t4, e4) {
        return {subscribe: i3(t4, e4).subscribe};
      }
      function i3(t4, e4 = n2.noop) {
        let r4;
        const i4 = [];
        function s3(e5) {
          if (n2.safe_not_equal(t4, e5) && (t4 = e5, r4)) {
            const e6 = !o3.length;
            for (let e7 = 0; e7 < i4.length; e7 += 1) {
              const n3 = i4[e7];
              n3[1](), o3.push(n3, t4);
            }
            if (e6) {
              for (let t5 = 0; t5 < o3.length; t5 += 2)
                o3[t5][0](o3[t5 + 1]);
              o3.length = 0;
            }
          }
        }
        return {set: s3, update: function(e5) {
          s3(e5(t4));
        }, subscribe: function(o4, a3 = n2.noop) {
          const c3 = [o4, a3];
          return i4.push(c3), i4.length === 1 && (r4 = e4(s3) || n2.noop), o4(t4), () => {
            const t5 = i4.indexOf(c3);
            t5 !== -1 && i4.splice(t5, 1), i4.length === 0 && (r4(), r4 = null);
          };
        }};
      }
      Object.defineProperty(e3, "get", {enumerable: true, get: function() {
        return n2.get_store_value;
      }}), e3.derived = function(t4, e4, o4) {
        const i4 = !Array.isArray(t4), s3 = i4 ? [t4] : t4, a3 = e4.length < 2;
        return r3(o4, (t5) => {
          let o5 = false;
          const r4 = [];
          let c3 = 0, u3 = n2.noop;
          const l3 = () => {
            if (c3)
              return;
            u3();
            const o6 = e4(i4 ? r4[0] : r4, t5);
            a3 ? t5(o6) : u3 = n2.is_function(o6) ? o6 : n2.noop;
          }, d3 = s3.map((t6, e5) => n2.subscribe(t6, (t7) => {
            r4[e5] = t7, c3 &= ~(1 << e5), o5 && l3();
          }, () => {
            c3 |= 1 << e5;
          }));
          return o5 = true, l3(), function() {
            n2.run_all(d3), u3();
          };
        });
      }, e3.readable = r3, e3.writable = i3;
    });
    window.routify = window.routify || {};
    const g2 = _2.writable(null);
    const y2 = _2.writable([]);
    y2.subscribe((t3) => window.routify.routes = t3);
    let b2 = _2.writable({component: {params: {}}});
    const $2 = _2.writable(null);
    _2.writable("");
    const w2 = _2.writable(true);
    function v2(t3, e3 = false) {
      t3 = r2.urlTransform.remove(t3);
      let {pathname: n3, search: o3} = d2(t3).url;
      const i3 = _2.get(y2), s3 = i3.find((t4) => n3 === t4.meta.name) || i3.find((t4) => n3.match(t4.regex));
      if (!s3)
        throw new Error(`Route could not be found for "${n3}".`);
      const a3 = e3 ? Object.create(s3) : s3, {route: c3, redirectPath: u3, rewritePath: l3} = x2(a3, i3);
      return l3 && ({pathname: n3, search: o3} = d2(p2(l3, c3.params)).url, u3 && (c3.redirectTo = p2(u3, c3.params || {}))), r2.queryHandler && (c3.params = Object.assign({}, r2.queryHandler.parse(o3))), function(t4, e4) {
        if (t4.paramKeys) {
          const n4 = function(t5) {
            const e5 = [];
            return t5.forEach((t6) => {
              e5[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e5;
          }(t4.layouts), o4 = e4.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e5, r3) => {
            e5 && (t4.params[e5] = o4[r3], n4[r3] ? n4[r3].param = {[e5]: o4[r3]} : t4.param = {[e5]: o4[r3]});
          });
        }
      }(c3, n3), c3.leftover = t3.replace(new RegExp(c3.regex), ""), c3;
    }
    function x2(t3, e3, n3, o3) {
      const {redirect: r3, rewrite: i3} = t3.meta;
      if (r3 || i3) {
        n3 = r3 ? r3.path || r3 : n3, o3 = i3 ? i3.path || i3 : n3;
        const s3 = r3 && r3.params, a3 = i3 && i3.params, c3 = e3.find((t4) => t4.path === o3);
        return c3 === t3 && console.error(`${o3} is redirecting to itself`), c3 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (s3 || a3) && (c3.params = Object.assign({}, c3.params, s3, a3)), x2(c3, e3, n3, o3);
      }
      return {route: t3, redirectPath: n3, rewritePath: o3};
    }
    function F(t3, e3, n3) {
      const o3 = t3.slice();
      return o3[1] = e3[n3], o3;
    }
    function k2(t3, e3) {
      let o3, r3;
      return {key: t3, first: null, c() {
        o3 = n2.element("iframe"), o3.src !== (r3 = e3[1].url) && n2.attr(o3, "src", r3), n2.attr(o3, "frameborder", "0"), n2.attr(o3, "title", "routify prefetcher"), this.first = o3;
      }, m(t4, e4) {
        n2.insert(t4, o3, e4);
      }, p(t4, i3) {
        e3 = t4, 1 & i3 && o3.src !== (r3 = e3[1].url) && n2.attr(o3, "src", r3);
      }, d(t4) {
        t4 && n2.detach(o3);
      }};
    }
    function P(t3) {
      let e3, o3 = [], r3 = new Map(), i3 = t3[0];
      const s3 = (t4) => t4[1].options.prefetch;
      for (let e4 = 0; e4 < i3.length; e4 += 1) {
        let n3 = F(t3, i3, e4), a3 = s3(n3);
        r3.set(a3, o3[e4] = k2(a3, n3));
      }
      return {c() {
        e3 = n2.element("div");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        n2.attr(e3, "id", "__routify_iframes"), n2.set_style(e3, "display", "none");
      }, m(t4, r4) {
        n2.insert(t4, e3, r4);
        for (let t5 = 0; t5 < o3.length; t5 += 1)
          o3[t5].m(e3, null);
      }, p(t4, [a3]) {
        1 & a3 && (i3 = t4[0], o3 = n2.update_keyed_each(o3, a3, s3, 1, t4, i3, r3, e3, n2.destroy_block, k2, null, F));
      }, i: n2.noop, o: n2.noop, d(t4) {
        t4 && n2.detach(e3);
        for (let t5 = 0; t5 < o3.length; t5 += 1)
          o3[t5].d();
      }};
    }
    const E = _2.writable([]);
    const S = _2.derived(E, (t3) => t3.slice(0, 2));
    function O(t3) {
      const e3 = t3.data ? t3.data.prefetchId : t3;
      if (!e3)
        return null;
      const n3 = _2.get(E).find((t4) => t4 && t4.options.prefetch == e3);
      if (n3) {
        const {gracePeriod: t4} = n3.options, o3 = new Promise((e4) => setTimeout(e4, t4)), r3 = new Promise((e4) => {
          window.requestIdleCallback ? window.requestIdleCallback(e4) : setTimeout(e4, t4 + 1e3);
        });
        Promise.all([o3, r3]).then(() => {
          E.update((t5) => t5.filter((t6) => t6.options.prefetch != e3));
        });
      }
    }
    function j(t3, e3, o3) {
      let r3;
      return n2.component_subscribe(t3, S, (t4) => o3(0, r3 = t4)), [r3];
    }
    S.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => O(t4.prefetch), t4.timeout);
    })), addEventListener("message", O, false);
    class C2 extends n2.SvelteComponent {
      constructor(t3) {
        super(), n2.init(this, t3, j, P, n2.safe_not_equal, {});
      }
    }
    function D() {
      return o2.getContext("routify") || b2;
    }
    const M = {_hooks: [(t3) => w2.set(false)], subscribe: I};
    const A = {_hooks: [], subscribe: I};
    function I(t3) {
      const e3 = this._hooks, n3 = e3.length;
      return t3((t4) => {
        e3[n3] = t4;
      }), () => delete e3[n3];
    }
    const T = {subscribe(t3) {
      const e3 = D();
      return _2.derived(e3, (t4) => t4.route.params).subscribe(t3);
    }};
    const L = {subscribe(t3) {
      const e3 = D(), {route: n3, routes: o3} = _2.get(e3);
      return _2.derived(e3, (t4) => {
        return e4 = t4, r3 = n3, i3 = o3, function(t5, n4 = {}, o4) {
          const {component: s3} = e4, a3 = Object.assign({}, r3.params, s3.params);
          let c3 = t5 && t5.nodeType && t5;
          c3 && (t5 = t5.getAttribute("href")), t5 = t5 ? d3(t5) : s3.shortPath;
          const u3 = i3.find((e5) => [e5.shortPath || "/", e5.path].includes(t5));
          if (u3 && u3.meta.preload === "proximity" && window.requestIdleCallback) {
            const t6 = routify.appLoaded ? 0 : 1500;
            setTimeout(() => {
              window.requestIdleCallback(() => u3.api.preload());
            }, t6);
          }
          o4 && o4.strict !== false || (t5 = t5.replace(/index$/, ""));
          let l3 = p2(t5, n4, a3);
          return c3 ? (c3.href = l3, {update(e5) {
            c3.href = p2(t5, e5, a3);
          }}) : l3;
          function d3(t6) {
            if (t6.match(/^\.\.?\//)) {
              let [, e5, n5] = t6.match(/^([\.\/]+)(.*)/), o5 = s3.path.replace(/\/$/, "");
              const r4 = e5.match(/\.\.\//g) || [];
              s3.isPage && r4.push(null), r4.forEach(() => o5 = o5.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o5}/${n5}`.replace(/\/$/, "")) || "/";
            } else if (t6.match(/^\//))
              ;
            else {
              const e5 = i3.find((e6) => e6.meta.name === t6);
              e5 && (t6 = e5.shortPath);
            }
            return t6;
          }
        };
        var e4, r3, i3;
      }).subscribe(t3);
    }};
    const q = {subscribe(t3) {
      const e3 = o2.getContext("routifyupdatepage");
      return _2.derived(L, (t4) => function(n3, o3, r3, i3) {
        const s3 = t4(n3, o3);
        r3 ? e3(s3, i3) : history.pushState({}, null, s3);
      }).subscribe(t3);
    }};
    const R = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e3) => [t3, (R.getLongest(R.templates, t3) || ((t4) => t4))(e3)]}, {name: "createMeta", condition: () => true, action(t3, e3) {
      R.writeMeta(t3, e3);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e3) {
      R.writeMeta(`og:${t3}`, e3);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e3) {
      document.title = e3;
    }}], getLongest(t3, e3) {
      const n3 = t3[e3];
      if (n3) {
        const o3 = _2.get(g2).path;
        return n3[Object.keys(t3[e3]).filter((t4) => o3.includes(t4)).sort((t4, e4) => e4.length - t4.length)[0]];
      }
    }, writeMeta(t3, e3) {
      const n3 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r3 = o3 && o3[1] || "plain", {propField: i3, valueField: s3} = N.services[r3] || N.services.plain, a3 = document.querySelector(`meta[${i3}='${t3}']`);
      a3 && a3.remove();
      const c3 = document.createElement("meta");
      c3.setAttribute(i3, t3), c3.setAttribute(s3, e3), c3.setAttribute("data-origin", "routify"), n3.appendChild(c3);
    }, set(t3, e3) {
      R.plugins.forEach((n3) => {
        n3.condition(t3, e3) && ([t3, e3] = n3.action(t3, e3) || [t3, e3]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e3) {
      const n3 = R.getOrigin();
      R.templates[t3] = R.templates[t3] || {}, R.templates[t3][n3] = e3;
    }, update() {
      Object.keys(R.props).forEach((t3) => {
        let e3 = R.getLongest(R.props, t3);
        R.plugins.forEach((n3) => {
          n3.condition(t3, e3) && ([t3, e3] = n3.action(t3, e3) || [t3, e3]);
        });
      });
    }, batchedUpdate() {
      R._pendingUpdate || (R._pendingUpdate = true, setTimeout(() => {
        R._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = D();
      return t3 && _2.get(t3).path || "/";
    }, _pendingUpdate: false};
    const N = new Proxy(R, {set(t3, e3, n3, o3) {
      const {props: r3, getOrigin: i3} = t3;
      return Reflect.has(t3, e3) ? Reflect.set(t3, e3, n3, o3) : (r3[e3] = r3[e3] || {}, r3[e3][i3()] = n3), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function U(t3, e3, n3) {
      const o3 = t3.slice();
      return o3[19] = e3[n3].component, o3[20] = e3[n3].componentFile, o3[2] = e3[n3].decorator, o3[1] = e3[n3].nodes, o3;
    }
    function B(t3) {
      let e3, o3, r3 = [], i3 = new Map(), s3 = [t3[4]];
      const a3 = (t4) => function({meta: t5, path: e4, param: n3, params: o4}) {
        return JSON.stringify({path: e4, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o4});
      }(t4[19]);
      for (let e4 = 0; e4 < 1; e4 += 1) {
        let n3 = U(t3, s3, e4), o4 = a3(n3);
        i3.set(o4, r3[e4] = W2(o4, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          r3[t4].c();
        e3 = n2.empty();
      }, m(t4, i4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          r3[e4].m(t4, i4);
        n2.insert(t4, e3, i4), o3 = true;
      }, p(t4, o4) {
        8388669 & o4 && (s3 = [t4[4]], n2.group_outros(), r3 = n2.update_keyed_each(r3, o4, a3, 1, t4, s3, i3, e3.parentNode, n2.outro_and_destroy_block, W2, e3, U), n2.check_outros());
      }, i(t4) {
        if (!o3) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            n2.transition_in(r3[t5]);
          o3 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          n2.transition_out(r3[t5]);
        o3 = false;
      }, d(t4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          r3[e4].d(t4);
        t4 && n2.detach(e3);
      }};
    }
    function H(t3) {
      let e3, o3;
      return e3 = new G({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[23]}}}), {c() {
        n2.create_component(e3.$$.fragment);
      }, m(t4, r3) {
        n2.mount_component(e3, t4, r3), o3 = true;
      }, p(t4, n3) {
        const o4 = {};
        4 & n3 && (o4.decorator = t4[2]), 16 & n3 && (o4.nodes = [...t4[1]]), 8388609 & n3 && (o4.scoped = {...t4[0], ...t4[23]}), e3.$set(o4);
      }, i(t4) {
        o3 || (n2.transition_in(e3.$$.fragment, t4), o3 = true);
      }, o(t4) {
        n2.transition_out(e3.$$.fragment, t4), o3 = false;
      }, d(t4) {
        n2.destroy_component(e3, t4);
      }};
    }
    function z2(t3) {
      let e3, o3, r3 = t3[19] && t3[1].length && H(t3);
      return {c() {
        r3 && r3.c(), e3 = n2.empty();
      }, m(t4, i3) {
        r3 && r3.m(t4, i3), n2.insert(t4, e3, i3), o3 = true;
      }, p(t4, o4) {
        t4[19] && t4[1].length ? r3 ? (r3.p(t4, o4), 16 & o4 && n2.transition_in(r3, 1)) : (r3 = H(t4), r3.c(), n2.transition_in(r3, 1), r3.m(e3.parentNode, e3)) : r3 && (n2.group_outros(), n2.transition_out(r3, 1, 1, () => {
          r3 = null;
        }), n2.check_outros());
      }, i(t4) {
        o3 || (n2.transition_in(r3), o3 = true);
      }, o(t4) {
        n2.transition_out(r3), o3 = false;
      }, d(t4) {
        r3 && r3.d(t4), t4 && n2.detach(e3);
      }};
    }
    function K(t3) {
      let e3, o3, r3;
      const i3 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var s3 = t3[20];
      function a3(t4) {
        let e4 = {$$slots: {default: [z2, ({scoped: t5, decorator: e5}) => ({23: t5, 2: e5}), ({scoped: t5, decorator: e5}) => (t5 ? 8388608 : 0) | (e5 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < i3.length; t5 += 1)
          e4 = n2.assign(e4, i3[t5]);
        return {props: e4};
      }
      return s3 && (e3 = new s3(a3(t3))), {c() {
        e3 && n2.create_component(e3.$$.fragment), o3 = n2.space();
      }, m(t4, i4) {
        e3 && n2.mount_component(e3, t4, i4), n2.insert(t4, o3, i4), r3 = true;
      }, p(t4, r4) {
        const c3 = 41 & r4 ? n2.get_spread_update(i3, [1 & r4 && {scoped: t4[0]}, 32 & r4 && {scopedSync: t4[5]}, 8 & r4 && n2.get_spread_object(t4[3].param || {})]) : {};
        if (25165845 & r4 && (c3.$$scope = {dirty: r4, ctx: t4}), s3 !== (s3 = t4[20])) {
          if (e3) {
            n2.group_outros();
            const t5 = e3;
            n2.transition_out(t5.$$.fragment, 1, 0, () => {
              n2.destroy_component(t5, 1);
            }), n2.check_outros();
          }
          s3 ? (e3 = new s3(a3(t4)), n2.create_component(e3.$$.fragment), n2.transition_in(e3.$$.fragment, 1), n2.mount_component(e3, o3.parentNode, o3)) : e3 = null;
        } else
          s3 && e3.$set(c3);
      }, i(t4) {
        r3 || (e3 && n2.transition_in(e3.$$.fragment, t4), r3 = true);
      }, o(t4) {
        e3 && n2.transition_out(e3.$$.fragment, t4), r3 = false;
      }, d(t4) {
        e3 && n2.destroy_component(e3, t4), t4 && n2.detach(o3);
      }};
    }
    function W2(t3, e3) {
      let o3, r3, i3, s3;
      var a3 = e3[2];
      function c3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [K]}, $$scope: {ctx: t4}}};
      }
      return a3 && (r3 = new a3(c3(e3))), {key: t3, first: null, c() {
        o3 = n2.empty(), r3 && n2.create_component(r3.$$.fragment), i3 = n2.empty(), this.first = o3;
      }, m(t4, e4) {
        n2.insert(t4, o3, e4), r3 && n2.mount_component(r3, t4, e4), n2.insert(t4, i3, e4), s3 = true;
      }, p(t4, o4) {
        e3 = t4;
        const s4 = {};
        if (1 & o4 && (s4.scoped = e3[0]), 16777277 & o4 && (s4.$$scope = {dirty: o4, ctx: e3}), a3 !== (a3 = e3[2])) {
          if (r3) {
            n2.group_outros();
            const t5 = r3;
            n2.transition_out(t5.$$.fragment, 1, 0, () => {
              n2.destroy_component(t5, 1);
            }), n2.check_outros();
          }
          a3 ? (r3 = new a3(c3(e3)), n2.create_component(r3.$$.fragment), n2.transition_in(r3.$$.fragment, 1), n2.mount_component(r3, i3.parentNode, i3)) : r3 = null;
        } else
          a3 && r3.$set(s4);
      }, i(t4) {
        s3 || (r3 && n2.transition_in(r3.$$.fragment, t4), s3 = true);
      }, o(t4) {
        r3 && n2.transition_out(r3.$$.fragment, t4), s3 = false;
      }, d(t4) {
        t4 && n2.detach(o3), t4 && n2.detach(i3), r3 && n2.destroy_component(r3, t4);
      }};
    }
    function J(t3) {
      let e3, o3, r3, i3, s3, a3 = t3[4] && B(t3);
      return {c() {
        a3 && a3.c(), e3 = n2.space(), o3 = n2.element("span");
      }, m(c3, u3) {
        a3 && a3.m(c3, u3), n2.insert(c3, e3, u3), n2.insert(c3, o3, u3), r3 = true, i3 || (s3 = n2.action_destroyer(t3[8].call(null, o3)), i3 = true);
      }, p(t4, [o4]) {
        t4[4] ? a3 ? (a3.p(t4, o4), 16 & o4 && n2.transition_in(a3, 1)) : (a3 = B(t4), a3.c(), n2.transition_in(a3, 1), a3.m(e3.parentNode, e3)) : a3 && (n2.group_outros(), n2.transition_out(a3, 1, 1, () => {
          a3 = null;
        }), n2.check_outros());
      }, i(t4) {
        r3 || (n2.transition_in(a3), r3 = true);
      }, o(t4) {
        n2.transition_out(a3), r3 = false;
      }, d(t4) {
        a3 && a3.d(t4), t4 && n2.detach(e3), t4 && n2.detach(o3), i3 = false, s3();
      }};
    }
    function Y(t3, e3, r3) {
      let i3, a3, c3, d3, p3, f3;
      n2.component_subscribe(t3, b2, (t4) => r3(10, c3 = t4)), n2.component_subscribe(t3, g2, (t4) => r3(14, d3 = t4)), n2.component_subscribe(t3, y2, (t4) => r3(15, p3 = t4));
      let h3, {nodes: $3 = []} = e3, {scoped: w3 = {}} = e3, {decorator: v3} = e3, x3 = null, F2 = null, k3 = {};
      const P2 = _2.writable(null);
      n2.component_subscribe(t3, P2, (t4) => r3(4, f3 = t4));
      const E2 = o2.getContext("routify");
      n2.component_subscribe(t3, E2, (t4) => r3(9, a3 = t4));
      function S2(t4) {
        r3(5, k3 = {...w3});
        const e4 = {nodes: F2, decorator: v3 || m2, layout: x3.isLayout ? x3 : i3.layout, component: x3, route: d3, routes: p3, componentFile: t4, parentNode: h3 || i3.parentNode};
        P2.set(e4), F2.length === 0 && async function() {
          o2.tick().then(() => s2(h3)), await new Promise((t6) => setTimeout(t6));
          const t5 = f3.component.path === d3.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e5, afterPageLoad: n3}) {
            const {path: o3} = t6, {options: r4} = l2(), i4 = r4.prefetch;
            for (const e6 of n3._hooks)
              e6 && await e6(t6.api);
            e5.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: i4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: f3.component, metatags: N, afterPageLoad: M});
        }();
      }
      return o2.setContext("routify", P2), t3.$$set = (t4) => {
        "nodes" in t4 && r3(1, $3 = t4.nodes), "scoped" in t4 && r3(0, w3 = t4.scoped), "decorator" in t4 && r3(2, v3 = t4.decorator);
      }, t3.$$.update = () => {
        1536 & t3.$$.dirty && (i3 = a3 || c3), 2 & t3.$$.dirty && r3(3, [x3, ...F2] = $3, x3), 8 & t3.$$.dirty && function(t4) {
          let e4 = t4.component();
          e4 instanceof Promise ? e4.then(S2) : S2(e4);
        }(x3), 16 & t3.$$.dirty && f3 && u2(f3, o2.tick);
      }, [w3, $3, v3, x3, f3, k3, P2, E2, (t4) => h3 = t4.parentNode, a3, c3];
    }
    class G extends n2.SvelteComponent {
      constructor(t3) {
        super(), n2.init(this, t3, Y, J, n2.safe_not_equal, {nodes: 1, scoped: 0, decorator: 2});
      }
    }
    function Q(t3, e3) {
      let n3 = false;
      function o3(o4, r4) {
        const i3 = v2(o4 || l2().fullpath);
        i3.redirectTo && (history.replaceStateNative({}, null, i3.redirectTo), delete i3.redirectTo);
        const s3 = [...(r4 && v2(l2().fullpath, t3) || i3).layouts, i3];
        n3 && delete n3.last, i3.last = n3, n3 = i3, o4 || $2.set(i3), g2.set(i3), i3.api.preload().then(() => {
          w2.set(true), e3(s3);
        });
      }
      const r3 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e5 = {}, n5, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r4, path: i3, params: s3} = _2.get(g2);
            e5 = {id: r4, path: i3, params: s3, ...e5};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e5, title: n5, url: o4});
            return await Z(a3, o4) ? (history[t5 + "Native"].apply(this, [e5, n5, o4]), dispatchEvent(a3)) : void 0;
          };
        });
        let e4 = false;
        const n4 = {click: V, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n5) => {
          e4 ? e4 = false : await Z(n5, l2().fullpath) ? t4() : (e4 = true, n5.preventDefault(), history.go(1));
        }};
        Object.entries(n4).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n4).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r3};
    }
    function V(t3) {
      const e3 = t3.target.closest("a"), n3 = e3 && e3.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n3 || e3.target || e3.host !== location.host)
        return;
      const o3 = new URL(n3), r3 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r3);
    }
    async function Z(t3, e3) {
      const n3 = v2(e3).api;
      for (const o3 of A._hooks.filter(Boolean)) {
        if (!await o3(t3, n3, {url: e3}))
          return false;
      }
      return true;
    }
    function X(t3) {
      let e3, o3;
      return e3 = new G({props: {nodes: t3[0]}}), {c() {
        n2.create_component(e3.$$.fragment);
      }, m(t4, r3) {
        n2.mount_component(e3, t4, r3), o3 = true;
      }, p(t4, n3) {
        const o4 = {};
        1 & n3 && (o4.nodes = t4[0]), e3.$set(o4);
      }, i(t4) {
        o3 || (n2.transition_in(e3.$$.fragment, t4), o3 = true);
      }, o(t4) {
        n2.transition_out(e3.$$.fragment, t4), o3 = false;
      }, d(t4) {
        n2.destroy_component(e3, t4);
      }};
    }
    function tt(t3) {
      let e3, o3, r3, i3 = t3[0] && t3[1] !== null && X(t3);
      return o3 = new C2({}), {c() {
        i3 && i3.c(), e3 = n2.space(), n2.create_component(o3.$$.fragment);
      }, m(t4, s3) {
        i3 && i3.m(t4, s3), n2.insert(t4, e3, s3), n2.mount_component(o3, t4, s3), r3 = true;
      }, p(t4, [o4]) {
        t4[0] && t4[1] !== null ? i3 ? (i3.p(t4, o4), 3 & o4 && n2.transition_in(i3, 1)) : (i3 = X(t4), i3.c(), n2.transition_in(i3, 1), i3.m(e3.parentNode, e3)) : i3 && (n2.group_outros(), n2.transition_out(i3, 1, 1, () => {
          i3 = null;
        }), n2.check_outros());
      }, i(t4) {
        r3 || (n2.transition_in(i3), n2.transition_in(o3.$$.fragment, t4), r3 = true);
      }, o(t4) {
        n2.transition_out(i3), n2.transition_out(o3.$$.fragment, t4), r3 = false;
      }, d(t4) {
        i3 && i3.d(t4), t4 && n2.detach(e3), n2.destroy_component(o3, t4);
      }};
    }
    function et(t3, e3, i3) {
      let s3;
      n2.component_subscribe(t3, g2, (t4) => i3(1, s3 = t4));
      let a3, c3, {routes: u3} = e3, {config: l3 = {}} = e3;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(r2, l3);
      o2.setContext("routifyupdatepage", (...t4) => c3 && c3.updatePage(...t4));
      const d3 = (t4) => i3(0, a3 = t4), p3 = () => {
        c3 && (c3.destroy(), c3 = null);
      };
      let f3 = null;
      return o2.onDestroy(p3), t3.$$set = (t4) => {
        "routes" in t4 && i3(2, u3 = t4.routes), "config" in t4 && i3(3, l3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && u3 && (clearTimeout(f3), f3 = setTimeout(() => {
          p3(), c3 = Q(u3, d3), y2.set(u3), c3.updatePage();
        }));
      }, [a3, s3, u3, l3];
    }
    class nt extends n2.SvelteComponent {
      constructor(t3) {
        super(), n2.init(this, t3, et, tt, n2.safe_not_equal, {routes: 2, config: 3});
      }
    }
    function ot(t3) {
      const e3 = async function(e4) {
        return await rt(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      };
      return e3.sync = function(e4) {
        return it(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      }, e3;
    }
    async function rt(t3, e3) {
      const n3 = await t3(e3);
      if (n3 === false)
        return false;
      const o3 = n3 || e3.file;
      if (o3.children) {
        const n4 = await Promise.all(o3.children.map(async (n5) => rt(t3, {state: e3.state, scope: st(e3.scope || {}), parent: e3.file, file: await n5})));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function it(t3, e3) {
      const n3 = t3(e3);
      if (n3 === false)
        return false;
      const o3 = n3 || e3.file;
      if (o3.children) {
        const n4 = o3.children.map((n5) => it(t3, {state: e3.state, scope: st(e3.scope || {}), parent: e3.file, file: n5}));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function st(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const at = ot(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e3) => {
        const n3 = e3 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(i2, "([^/]+)") + n3}`;
      })(t3.path, t3.isFallback));
    });
    const ct = ot(({file: t3}) => {
      t3.paramKeys = c2(t3.path);
    });
    const ut = ot(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const lt = ot(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const dt = ot(({file: t3}) => {
      const e3 = t3, n3 = t3.meta && t3.meta.children || [];
      n3.length && (e3.children = e3.children || [], e3.children.push(...n3.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const pt = ot((t3) => {
      const {file: e3} = t3, {isFallback: n3, meta: o3} = e3, r3 = e3.path.match("/:"), i3 = e3.path.endsWith("/index"), s3 = o3.index || o3.index === 0, a3 = o3.index === false;
      e3.isIndexable = s3 || !n3 && !r3 && !i3 && !a3, e3.isNonIndexable = !e3.isIndexable;
    });
    const ft = ot(({file: t3, parent: e3}) => {
      Object.defineProperty(t3, "parent", {get: () => e3}), Object.defineProperty(t3, "nextSibling", {get: () => mt(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => mt(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => ht(e3)});
    });
    function ht(t3, e3 = []) {
      return t3 && (e3.unshift(t3), ht(t3.parent, e3)), e3;
    }
    function mt(t3, e3) {
      if (!t3.root) {
        const n3 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n3.indexOf(t3);
        return n3[o3 + e3];
      }
    }
    const _t = ot(({file: t3, parent: e3}) => {
      t3.isIndex && Object.defineProperty(e3, "index", {get: () => t3});
    });
    const gt = ot(({file: t3, scope: e3}) => {
      function n3(t4) {
        const {parent: e4} = t4, o3 = e4 && e4.component && e4, r3 = o3 && o3.isReset, i3 = e4 && !r3 && n3(e4) || [];
        return o3 && i3.push(o3), i3;
      }
      Object.defineProperty(t3, "layouts", {get: () => n3(t3)});
    });
    const yt = ot(({file: t3}) => {
      const e3 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e3.prototype);
    });
    var bt = Object.freeze({__proto__: null, setRegex: at, setParamKeys: ct, setShortPath: ut, setRank: lt, addMetaChildren: dt, setIsIndexable: pt, assignRelations: ft, assignIndex: _t, assignLayout: gt, createFlatList: (t3) => {
      ot((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e3) => t4.ranking >= e3.ranking ? -1 : 1);
    }, setPrototype: yt});
    const $t = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function wt(t3) {
      return Object.entries($t).forEach(([e3, n3]) => {
        t3[e3] === void 0 && (t3[e3] = n3);
      }), t3.children && (t3.children = t3.children.map(wt)), t3;
    }
    const vt = ot(({file: t3}) => {
      t3.api = new xt(t3);
    });
    class xt {
      constructor(t3) {
        this.__file = t3, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t3.isMeta, this.path = t3.path, this.title = function(t4) {
          return t4.meta.title !== void 0 ? t4.meta.title : (t4.shortPath || t4.path).split("/").pop().replace(/-/g, " ");
        }(t3), this.meta = t3.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e3) => t3.isMeta && e3.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e3 = (e3.meta.index || e3.meta.title || e3.path).toString(), t3.localeCompare(e3, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
      }
      get next() {
        return Ft(this, 1);
      }
      get prev() {
        return Ft(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Ft(t3, e3) {
      if (!t3.__file.root) {
        const n3 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n3 + e3];
      }
    }
    const kt = {...bt, restoreDefaults: ({tree: t3}) => wt(t3), assignAPI: vt};
    const Pt = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_917ef163())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_7edb84e6())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isPage: true, path: "/me/dashboard", id: "_me_dashboard", component: () => Promise.resolve().then(() => __toModule(require_dashboard_04cb9bcd())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/me/index", id: "_me_index", component: () => Promise.resolve().then(() => __toModule(require_index_07666296())).then((t3) => t3.default)}, {isPage: true, path: "/me/pending-invites", id: "_me_pendingInvites", component: () => Promise.resolve().then(() => __toModule(require_pending_invites_194595fe())).then((t3) => t3.default)}], path: "/me"}, {isDir: true, ext: "", children: [{isDir: true, ext: "", children: [{isDir: true, ext: "", children: [{isPage: true, path: "/plugins/:id/:version/docs", id: "_plugins__id__version_docs", component: () => Promise.resolve().then(() => __toModule(require_docs_66a13a49())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/plugins/:id/:version/index", id: "_plugins__id__version_index", component: () => Promise.resolve().then(() => __toModule(require_index_ea5682e7())).then((t3) => t3.default)}], path: "/plugins/:id/:version"}, {isPage: true, path: "/plugins/:id/docs", id: "_plugins__id_docs", component: () => Promise.resolve().then(() => __toModule(require_docs_ef4cadac())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/plugins/:id/index", id: "_plugins__id_index", component: () => Promise.resolve().then(() => __toModule(require_index_d6080d74())).then((t3) => t3.default)}], path: "/plugins/:id"}, {isIndex: true, isPage: true, path: "/plugins/index", id: "_plugins_index", component: () => Promise.resolve().then(() => __toModule(require_index_66019432())).then((t3) => t3.default)}], path: "/plugins"}, {isDir: true, ext: "", children: [{isDir: true, ext: "", children: [{isIndex: true, isPage: true, path: "/users/:id/index", id: "_users__id_index", component: () => Promise.resolve().then(() => __toModule(require_index_e30a25a4())).then((t3) => t3.default)}], path: "/users/:id"}], path: "/users"}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_21a43ef3())).then((t3) => t3.default)};
    const {tree: Et, routes: St} = function(t3) {
      const e3 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n3 = {tree: t3, routes: []};
      for (let t4 of e3) {
        (kt[t4].sync || kt[t4])(n3);
      }
      return n3;
    }(Pt);
    function Ot(t3) {
      let e3, o3;
      return e3 = new nt({props: {routes: St}}), {c() {
        n2.create_component(e3.$$.fragment);
      }, m(t4, r3) {
        n2.mount_component(e3, t4, r3), o3 = true;
      }, p: n2.noop, i(t4) {
        o3 || (n2.transition_in(e3.$$.fragment, t4), o3 = true);
      }, o(t4) {
        n2.transition_out(e3.$$.fragment, t4), o3 = false;
      }, d(t4) {
        n2.destroy_component(e3, t4);
      }};
    }
    class jt extends n2.SvelteComponent {
      constructor(t3) {
        super(), n2.init(this, t3, null, Ot, n2.safe_not_equal, {});
      }
    }
    !function(t3, e3 = {target: document.body}, n3 = "hmr", o3 = "app-loaded") {
      const r3 = document.getElementById(n3), i3 = document.createElement("div");
      function s3() {
        r3 && r3.remove(), i3.style.visibility = null, i3.setAttribute("id", n3);
      }
      i3.style.visibility = "hidden", e3.target.appendChild(i3), r3 ? addEventListener(o3, s3) : s3(), new t3({...e3, target: i3});
    }(jt, {target: document.body}, "routify-app");
  });

  // dist/build/PluginVersion-c9ade413.js
  const main = __toModule(require_main());
  function n(t2) {
    let n2, a2, l2, r2;
    return {c() {
      n2 = main.i.svg_element("svg"), a2 = main.i.svg_element("rect"), l2 = main.i.svg_element("path"), main.i.attr(a2, "x", "9"), main.i.attr(a2, "y", "9"), main.i.attr(a2, "width", "13"), main.i.attr(a2, "height", "13"), main.i.attr(a2, "rx", "2"), main.i.attr(a2, "ry", "2"), main.i.attr(l2, "d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"), main.i.attr(n2, "xmlns", "http://www.w3.org/2000/svg"), main.i.attr(n2, "width", t2[0]), main.i.attr(n2, "height", t2[0]), main.i.attr(n2, "fill", "none"), main.i.attr(n2, "viewBox", "0 0 24 24"), main.i.attr(n2, "stroke", "currentColor"), main.i.attr(n2, "stroke-width", t2[1]), main.i.attr(n2, "stroke-linecap", "round"), main.i.attr(n2, "stroke-linejoin", "round"), main.i.attr(n2, "class", r2 = "feather feather-copy " + t2[2]);
    }, m(t3, r3) {
      main.i.insert(t3, n2, r3), main.i.append(n2, a2), main.i.append(n2, l2);
    }, p(t3, [a3]) {
      1 & a3 && main.i.attr(n2, "width", t3[0]), 1 & a3 && main.i.attr(n2, "height", t3[0]), 2 & a3 && main.i.attr(n2, "stroke-width", t3[1]), 4 & a3 && r2 !== (r2 = "feather feather-copy " + t3[2]) && main.i.attr(n2, "class", r2);
    }, i: main.i.noop, o: main.i.noop, d(t3) {
      t3 && main.i.detach(n2);
    }};
  }
  function a(e2, t2, n2) {
    let {size: a2 = "100%"} = t2, {strokeWidth: l2 = 2} = t2, {class: r2 = ""} = t2;
    return a2 !== "100%" && (a2 = a2.slice(-1) === "x" ? a2.slice(0, a2.length - 1) + "em" : parseInt(a2) + "px"), e2.$$set = (e3) => {
      "size" in e3 && n2(0, a2 = e3.size), "strokeWidth" in e3 && n2(1, l2 = e3.strokeWidth), "class" in e3 && n2(2, r2 = e3.class);
    }, [a2, l2, r2];
  }
  class l extends main.i.SvelteComponent {
    constructor(t2) {
      super(), main.i.init(this, t2, a, n, main.i.safe_not_equal, {size: 0, strokeWidth: 1, class: 2});
    }
  }
  function r(t2) {
    let n2, a2, l2, r2, s2;
    return {c() {
      n2 = main.i.svg_element("svg"), a2 = main.i.svg_element("polyline"), l2 = main.i.svg_element("line"), r2 = main.i.svg_element("path"), main.i.attr(a2, "points", "8 17 12 21 16 17"), main.i.attr(l2, "x1", "12"), main.i.attr(l2, "y1", "12"), main.i.attr(l2, "x2", "12"), main.i.attr(l2, "y2", "21"), main.i.attr(r2, "d", "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"), main.i.attr(n2, "xmlns", "http://www.w3.org/2000/svg"), main.i.attr(n2, "width", t2[0]), main.i.attr(n2, "height", t2[0]), main.i.attr(n2, "fill", "none"), main.i.attr(n2, "viewBox", "0 0 24 24"), main.i.attr(n2, "stroke", "currentColor"), main.i.attr(n2, "stroke-width", t2[1]), main.i.attr(n2, "stroke-linecap", "round"), main.i.attr(n2, "stroke-linejoin", "round"), main.i.attr(n2, "class", s2 = "feather feather-download-cloud " + t2[2]);
    }, m(t3, s3) {
      main.i.insert(t3, n2, s3), main.i.append(n2, a2), main.i.append(n2, l2), main.i.append(n2, r2);
    }, p(t3, [a3]) {
      1 & a3 && main.i.attr(n2, "width", t3[0]), 1 & a3 && main.i.attr(n2, "height", t3[0]), 2 & a3 && main.i.attr(n2, "stroke-width", t3[1]), 4 & a3 && s2 !== (s2 = "feather feather-download-cloud " + t3[2]) && main.i.attr(n2, "class", s2);
    }, i: main.i.noop, o: main.i.noop, d(t3) {
      t3 && main.i.detach(n2);
    }};
  }
  function s(e2, t2, n2) {
    let {size: a2 = "100%"} = t2, {strokeWidth: l2 = 2} = t2, {class: r2 = ""} = t2;
    return a2 !== "100%" && (a2 = a2.slice(-1) === "x" ? a2.slice(0, a2.length - 1) + "em" : parseInt(a2) + "px"), e2.$$set = (e3) => {
      "size" in e3 && n2(0, a2 = e3.size), "strokeWidth" in e3 && n2(1, l2 = e3.strokeWidth), "class" in e3 && n2(2, r2 = e3.class);
    }, [a2, l2, r2];
  }
  class o extends main.i.SvelteComponent {
    constructor(t2) {
      super(), main.i.init(this, t2, s, r, main.i.safe_not_equal, {size: 0, strokeWidth: 1, class: 2});
    }
  }
  function p(t2) {
    let n2, a2, l2, r2, s2, o2;
    return {c() {
      n2 = main.i.svg_element("svg"), a2 = main.i.svg_element("polyline"), l2 = main.i.svg_element("line"), r2 = main.i.svg_element("path"), s2 = main.i.svg_element("polyline"), main.i.attr(a2, "points", "16 16 12 12 8 16"), main.i.attr(l2, "x1", "12"), main.i.attr(l2, "y1", "12"), main.i.attr(l2, "x2", "12"), main.i.attr(l2, "y2", "21"), main.i.attr(r2, "d", "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"), main.i.attr(s2, "points", "16 16 12 12 8 16"), main.i.attr(n2, "xmlns", "http://www.w3.org/2000/svg"), main.i.attr(n2, "width", t2[0]), main.i.attr(n2, "height", t2[0]), main.i.attr(n2, "fill", "none"), main.i.attr(n2, "viewBox", "0 0 24 24"), main.i.attr(n2, "stroke", "currentColor"), main.i.attr(n2, "stroke-width", t2[1]), main.i.attr(n2, "stroke-linecap", "round"), main.i.attr(n2, "stroke-linejoin", "round"), main.i.attr(n2, "class", o2 = "feather feather-upload-cloud " + t2[2]);
    }, m(t3, o3) {
      main.i.insert(t3, n2, o3), main.i.append(n2, a2), main.i.append(n2, l2), main.i.append(n2, r2), main.i.append(n2, s2);
    }, p(t3, [a3]) {
      1 & a3 && main.i.attr(n2, "width", t3[0]), 1 & a3 && main.i.attr(n2, "height", t3[0]), 2 & a3 && main.i.attr(n2, "stroke-width", t3[1]), 4 & a3 && o2 !== (o2 = "feather feather-upload-cloud " + t3[2]) && main.i.attr(n2, "class", o2);
    }, i: main.i.noop, o: main.i.noop, d(t3) {
      t3 && main.i.detach(n2);
    }};
  }
  function d(e2, t2, n2) {
    let {size: a2 = "100%"} = t2, {strokeWidth: l2 = 2} = t2, {class: r2 = ""} = t2;
    return a2 !== "100%" && (a2 = a2.slice(-1) === "x" ? a2.slice(0, a2.length - 1) + "em" : parseInt(a2) + "px"), e2.$$set = (e3) => {
      "size" in e3 && n2(0, a2 = e3.size), "strokeWidth" in e3 && n2(1, l2 = e3.strokeWidth), "class" in e3 && n2(2, r2 = e3.class);
    }, [a2, l2, r2];
  }
  class c extends main.i.SvelteComponent {
    constructor(t2) {
      super(), main.i.init(this, t2, d, p, main.i.safe_not_equal, {size: 0, strokeWidth: 1, class: 2});
    }
  }
  function i(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[1] = t2[n2], a2;
  }
  function m(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[6] = t2[n2], a2;
  }
  function f(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[9] = t2[n2], a2;
  }
  function h(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[12] = t2[n2], a2;
  }
  function u(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[15] = t2[n2], a2;
  }
  function g(e2, t2, n2) {
    const a2 = e2.slice();
    return a2[18] = t2[n2], a2;
  }
  function x(t2) {
    let n2;
    return {c() {
      n2 = main.i.element("div"), n2.innerHTML = '<span class="border-b-2 border-feather-accent px-1 text-xl font-thin">Readme is empty!</span>', main.i.attr(n2, "class", "flex flex-1 justify-center items-center");
    }, m(t3, a2) {
      main.i.insert(t3, n2, a2);
    }, p: main.i.noop, d(t3) {
      t3 && main.i.detach(n2);
    }};
  }
  function w(t2) {
    let n2, a2, l2 = t2[3].readme + "";
    return {c() {
      a2 = main.i.empty(), n2 = new main.i.HtmlTag(a2);
    }, m(t3, r2) {
      n2.m(l2, t3, r2), main.i.insert(t3, a2, r2);
    }, p: main.i.noop, d(t3) {
      t3 && main.i.detach(a2), t3 && n2.d();
    }};
  }
  function v(t2) {
    let n2, a2, l2, r2, s2, o2, p2, d2 = t2[18] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.element("a"), l2 = main.i.text(d2), s2 = main.i.space(), main.i.attr(a2, "href", "/plugins/:slug/:version/:arch"), main.i.attr(a2, "class", "mr-2 border-b-2 border-feather-accent");
    }, m(d3, c2) {
      main.i.insert(d3, n2, c2), main.i.append(n2, a2), main.i.append(a2, l2), main.i.append(n2, s2), o2 || (p2 = main.i.action_destroyer(r2 = t2[2].call(null, a2, {id: t2[0], version: t2[1], arch: t2[18]})), o2 = true);
    }, p(n3, a3) {
      t2 = n3, r2 && main.i.is_function(r2.update) && 3 & a3 && r2.update.call(null, {id: t2[0], version: t2[1], arch: t2[18]});
    }, d(t3) {
      t3 && main.i.detach(n2), o2 = false, p2();
    }};
  }
  function _(t2) {
    let n2, a2, l2, r2, s2, o2, p2 = t2[15] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.element("a"), l2 = main.i.text(p2), r2 = main.i.space(), main.i.attr(a2, "href", "/users/:id"), main.i.attr(a2, "class", "mr-2 border-b-2 border-feather-accent");
    }, m(p3, d2) {
      main.i.insert(p3, n2, d2), main.i.append(n2, a2), main.i.append(a2, l2), main.i.append(n2, r2), s2 || (o2 = main.i.action_destroyer(t2[2].call(null, a2, {id: t2[15]})), s2 = true);
    }, p(e2, n3) {
      t2 = e2;
    }, d(t3) {
      t3 && main.i.detach(n2), s2 = false, o2();
    }};
  }
  function b(t2) {
    let n2, a2, l2 = t2[12] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.text(l2);
    }, m(t3, l3) {
      main.i.insert(t3, n2, l3), main.i.append(n2, a2);
    }, p: main.i.noop, d(t3) {
      t3 && main.i.detach(n2);
    }};
  }
  function y(t2) {
    let n2, a2, l2, r2, s2, o2, p2 = t2[9] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.element("a"), l2 = main.i.text(p2), r2 = main.i.space(), main.i.attr(a2, "href", "/plugins"), main.i.attr(a2, "class", "mr-2 border-b-2 border-feather-accent");
    }, m(p3, d2) {
      main.i.insert(p3, n2, d2), main.i.append(n2, a2), main.i.append(a2, l2), main.i.append(n2, r2), s2 || (o2 = main.i.action_destroyer(t2[2].call(null, a2, {keywords: [t2[9]]})), s2 = true);
    }, p(e2, n3) {
      t2 = e2;
    }, d(t3) {
      t3 && main.i.detach(n2), s2 = false, o2();
    }};
  }
  function k(t2) {
    let n2, a2, l2, r2, s2, o2, p2 = t2[6] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.element("a"), l2 = main.i.text(p2), r2 = main.i.space(), main.i.attr(a2, "href", "/plugins"), main.i.attr(a2, "class", "mr-2 border-b-2 border-feather-accent");
    }, m(p3, d2) {
      main.i.insert(p3, n2, d2), main.i.append(n2, a2), main.i.append(a2, l2), main.i.append(n2, r2), s2 || (o2 = main.i.action_destroyer(t2[2].call(null, a2, {categories: [t2[6]]})), s2 = true);
    }, p(e2, n3) {
      t2 = e2;
    }, d(t3) {
      t3 && main.i.detach(n2), s2 = false, o2();
    }};
  }
  function $(t2) {
    let n2, a2, l2, r2, s2, o2, p2 = t2[1] + "";
    return {c() {
      n2 = main.i.element("li"), a2 = main.i.element("a"), l2 = main.i.text(p2), r2 = main.i.space(), main.i.attr(a2, "href", "/plugins"), main.i.attr(a2, "class", "mr-2 border-b-2 border-feather-accent");
    }, m(p3, d2) {
      main.i.insert(p3, n2, d2), main.i.append(n2, a2), main.i.append(a2, l2), main.i.append(n2, r2), s2 || (o2 = main.i.action_destroyer(t2[2].call(null, a2, {versions: [t2[1]]})), s2 = true);
    }, p(e2, n3) {
      t2 = e2;
    }, d(t3) {
      t3 && main.i.detach(n2), s2 = false, o2();
    }};
  }
  function C(t2) {
    let n2, a2, r2, s2, p2, d2, C2, W2, z2, j, q, A, M, T, I, B, S, H, E, K, L, P, V, D, O, R, F, G, J, N, Q, U, X, Y, Z, ee, te, ne, ae, le, re, se, oe, pe, de, ce, ie, me, fe, he, ue, ge, xe, we, ve, _e, be, ye, ke, $e, Ce, We, ze, je, qe, Ae, Me, Te, Ie, Be, Se, He, Ee;
    let Ke = function(e2, t3) {
      return e2[3].readme ? w : x;
    }(t2)(t2);
    Q = new l({props: {class: "h-4 w-4"}});
    let Le = t2[3].downloads, Pe = [];
    for (let e2 = 0; e2 < Le.length; e2 += 1)
      Pe[e2] = v(g(t2, Le, e2));
    let Ve = t2[3].owners, De = [];
    for (let e2 = 0; e2 < Ve.length; e2 += 1)
      De[e2] = _(u(t2, Ve, e2));
    let Oe = t2[3].authors, Re = [];
    for (let e2 = 0; e2 < Oe.length; e2 += 1)
      Re[e2] = b(h(t2, Oe, e2));
    let Fe = t2[3].keywords, Ge = [];
    for (let e2 = 0; e2 < Fe.length; e2 += 1)
      Ge[e2] = y(f(t2, Fe, e2));
    let Je = t2[3].categories, Ne = [];
    for (let e2 = 0; e2 < Je.length; e2 += 1)
      Ne[e2] = k(m(t2, Je, e2));
    let Qe = t2[3].versions, Ue = [];
    for (let e2 = 0; e2 < Qe.length; e2 += 1)
      Ue[e2] = $(i(t2, Qe, e2));
    return Ae = new o({props: {class: "h-8 w-8"}}), Se = new c({props: {class: "h-8 w-8"}}), {c() {
      n2 = main.i.element("div"), a2 = main.i.element("div"), r2 = main.i.element("section"), Ke.c(), s2 = main.i.space(), p2 = main.i.element("section"), d2 = main.i.element("h1"), C2 = main.i.text(t2[0]), W2 = main.i.element("span"), z2 = main.i.text(t2[1]), j = main.i.space(), q = main.i.element("p"), q.textContent = `${t2[3].description}`, A = main.i.space(), M = main.i.element("div"), T = main.i.element("span"), T.textContent = "Last updated", I = main.i.space(), B = main.i.element("span"), B.textContent = `${t2[3].updated} days ago`, S = main.i.space(), H = main.i.element("div"), E = main.i.element("span"), E.textContent = "Plugin size", K = main.i.space(), L = main.i.element("span"), L.textContent = `${t2[3].updated} KB`, P = main.i.space(), V = main.i.element("div"), D = main.i.element("span"), D.textContent = "Install", O = main.i.space(), R = main.i.element("div"), F = main.i.element("code"), G = main.i.text("quill install "), J = main.i.text(t2[0]), N = main.i.space(), main.i.create_component(Q.$$.fragment), U = main.i.space(), X = main.i.element("div"), Y = main.i.element("span"), Y.textContent = "Download", Z = main.i.space(), ee = main.i.element("ul");
      for (let e2 = 0; e2 < Pe.length; e2 += 1)
        Pe[e2].c();
      te = main.i.space(), ne = main.i.element("div"), ae = main.i.element("span"), ae.textContent = "Owners", le = main.i.space(), re = main.i.element("ul");
      for (let e2 = 0; e2 < De.length; e2 += 1)
        De[e2].c();
      se = main.i.space(), oe = main.i.element("div"), pe = main.i.element("span"), pe.textContent = "Authors", de = main.i.space(), ce = main.i.element("ul");
      for (let e2 = 0; e2 < Re.length; e2 += 1)
        Re[e2].c();
      ie = main.i.space(), me = main.i.element("div"), fe = main.i.element("span"), fe.textContent = "Keywords", he = main.i.space(), ue = main.i.element("ul");
      for (let e2 = 0; e2 < Ge.length; e2 += 1)
        Ge[e2].c();
      ge = main.i.space(), xe = main.i.element("div"), we = main.i.element("span"), we.textContent = "Categories", ve = main.i.space(), _e = main.i.element("ul");
      for (let e2 = 0; e2 < Ne.length; e2 += 1)
        Ne[e2].c();
      be = main.i.space(), ye = main.i.element("div"), ke = main.i.element("span"), ke.textContent = "Versions", $e = main.i.space(), Ce = main.i.element("ul");
      for (let e2 = 0; e2 < Ue.length; e2 += 1)
        Ue[e2].c();
      We = main.i.space(), ze = main.i.element("div"), je = main.i.element("div"), qe = main.i.element("abbr"), main.i.create_component(Ae.$$.fragment), Me = main.i.element("span"), Me.textContent = "600", Te = main.i.space(), Ie = main.i.element("div"), Be = main.i.element("abbr"), main.i.create_component(Se.$$.fragment), He = main.i.element("span"), He.textContent = "4", main.i.attr(r2, "class", "flex flex-1 typography pb-8 lg:py-0"), main.i.attr(W2, "class", "text-sm font-light"), main.i.attr(d2, "class", "text-3xl font-bold font-display"), main.i.attr(q, "class", "font-thin"), main.i.attr(T, "class", "text-sm font-light"), main.i.attr(B, "class", "font-bold"), main.i.attr(M, "class", "flex flex-col mt-4"), main.i.attr(E, "class", "text-sm font-light"), main.i.attr(L, "class", "font-bold"), main.i.attr(H, "class", "flex flex-col mt-4"), main.i.attr(D, "class", "text-lg font-bold"), main.i.attr(F, "class", "flex flex-1 text-sm"), main.i.attr(R, "class", "flex justify-betwteen border-2 border-feather-light px-2 py-1 rounded font-mono bg-white hover:bg-feather-light items-center"), main.i.attr(V, "class", "flex flex-col mt-8"), main.i.attr(Y, "class", "text-lg font-bold"), main.i.attr(ee, "class", "flex flex-wrap"), main.i.attr(X, "class", "flex flex-col mt-4"), main.i.attr(ae, "class", "text-lg font-bold"), main.i.attr(re, "class", "flex flex-wrap"), main.i.attr(ne, "class", "flex flex-col mt-4"), main.i.attr(pe, "class", "text-lg font-bold"), main.i.attr(ce, "class", "flex flex-wrap"), main.i.attr(oe, "class", "flex flex-col mt-4"), main.i.attr(fe, "class", "text-lg font-bold"), main.i.attr(ue, "class", "flex flex-wrap"), main.i.attr(me, "class", "flex flex-col mt-4"), main.i.attr(we, "class", "text-lg font-bold"), main.i.attr(_e, "class", "flex flex-wrap"), main.i.attr(xe, "class", "flex flex-col mt-4"), main.i.attr(ke, "class", "text-lg font-bold"), main.i.attr(Ce, "class", "flex flex-wrap"), main.i.attr(ye, "class", "flex flex-col mt-4"), main.i.attr(qe, "title", "Total downloads of this plugin"), main.i.attr(Me, "class", "ml-2 text-xl"), main.i.attr(je, "class", "flex items-center"), main.i.attr(Be, "title", "Total published versions of this plugin"), main.i.attr(He, "class", "ml-2 text-xl"), main.i.attr(Ie, "class", "flex items-center ml-8"), main.i.attr(ze, "class", "flex mt-8"), main.i.attr(p2, "class", "flex flex-col lg:w-80 border-feather-light border-l-0 border-t-2 lg:border-l-2 lg:border-t-0 lg:pl-4 py-4 lg:py-0"), main.i.attr(a2, "class", "flex flex-1 flex-col lg:flex-row justify-between px-4 py-8"), main.i.attr(n2, "class", "container mx-auto");
    }, m(t3, l2) {
      main.i.insert(t3, n2, l2), main.i.append(n2, a2), main.i.append(a2, r2), Ke.m(r2, null), main.i.append(a2, s2), main.i.append(a2, p2), main.i.append(p2, d2), main.i.append(d2, C2), main.i.append(d2, W2), main.i.append(W2, z2), main.i.append(p2, j), main.i.append(p2, q), main.i.append(p2, A), main.i.append(p2, M), main.i.append(M, T), main.i.append(M, I), main.i.append(M, B), main.i.append(p2, S), main.i.append(p2, H), main.i.append(H, E), main.i.append(H, K), main.i.append(H, L), main.i.append(p2, P), main.i.append(p2, V), main.i.append(V, D), main.i.append(V, O), main.i.append(V, R), main.i.append(R, F), main.i.append(F, G), main.i.append(F, J), main.i.append(R, N), main.i.mount_component(Q, R, null), main.i.append(p2, U), main.i.append(p2, X), main.i.append(X, Y), main.i.append(X, Z), main.i.append(X, ee);
      for (let e2 = 0; e2 < Pe.length; e2 += 1)
        Pe[e2].m(ee, null);
      main.i.append(p2, te), main.i.append(p2, ne), main.i.append(ne, ae), main.i.append(ne, le), main.i.append(ne, re);
      for (let e2 = 0; e2 < De.length; e2 += 1)
        De[e2].m(re, null);
      main.i.append(p2, se), main.i.append(p2, oe), main.i.append(oe, pe), main.i.append(oe, de), main.i.append(oe, ce);
      for (let e2 = 0; e2 < Re.length; e2 += 1)
        Re[e2].m(ce, null);
      main.i.append(p2, ie), main.i.append(p2, me), main.i.append(me, fe), main.i.append(me, he), main.i.append(me, ue);
      for (let e2 = 0; e2 < Ge.length; e2 += 1)
        Ge[e2].m(ue, null);
      main.i.append(p2, ge), main.i.append(p2, xe), main.i.append(xe, we), main.i.append(xe, ve), main.i.append(xe, _e);
      for (let e2 = 0; e2 < Ne.length; e2 += 1)
        Ne[e2].m(_e, null);
      main.i.append(p2, be), main.i.append(p2, ye), main.i.append(ye, ke), main.i.append(ye, $e), main.i.append(ye, Ce);
      for (let e2 = 0; e2 < Ue.length; e2 += 1)
        Ue[e2].m(Ce, null);
      main.i.append(p2, We), main.i.append(p2, ze), main.i.append(ze, je), main.i.append(je, qe), main.i.mount_component(Ae, qe, null), main.i.append(je, Me), main.i.append(ze, Te), main.i.append(ze, Ie), main.i.append(Ie, Be), main.i.mount_component(Se, Be, null), main.i.append(Ie, He), Ee = true;
    }, p(t3, [n3]) {
      if (Ke.p(t3, n3), (!Ee || 1 & n3) && main.i.set_data(C2, t3[0]), (!Ee || 2 & n3) && main.i.set_data(z2, t3[1]), (!Ee || 1 & n3) && main.i.set_data(J, t3[0]), 11 & n3) {
        let e2;
        for (Le = t3[3].downloads, e2 = 0; e2 < Le.length; e2 += 1) {
          const a3 = g(t3, Le, e2);
          Pe[e2] ? Pe[e2].p(a3, n3) : (Pe[e2] = v(a3), Pe[e2].c(), Pe[e2].m(ee, null));
        }
        for (; e2 < Pe.length; e2 += 1)
          Pe[e2].d(1);
        Pe.length = Le.length;
      }
      if (8 & n3) {
        let e2;
        for (Ve = t3[3].owners, e2 = 0; e2 < Ve.length; e2 += 1) {
          const a3 = u(t3, Ve, e2);
          De[e2] ? De[e2].p(a3, n3) : (De[e2] = _(a3), De[e2].c(), De[e2].m(re, null));
        }
        for (; e2 < De.length; e2 += 1)
          De[e2].d(1);
        De.length = Ve.length;
      }
      if (8 & n3) {
        let e2;
        for (Oe = t3[3].authors, e2 = 0; e2 < Oe.length; e2 += 1) {
          const a3 = h(t3, Oe, e2);
          Re[e2] ? Re[e2].p(a3, n3) : (Re[e2] = b(a3), Re[e2].c(), Re[e2].m(ce, null));
        }
        for (; e2 < Re.length; e2 += 1)
          Re[e2].d(1);
        Re.length = Oe.length;
      }
      if (8 & n3) {
        let e2;
        for (Fe = t3[3].keywords, e2 = 0; e2 < Fe.length; e2 += 1) {
          const a3 = f(t3, Fe, e2);
          Ge[e2] ? Ge[e2].p(a3, n3) : (Ge[e2] = y(a3), Ge[e2].c(), Ge[e2].m(ue, null));
        }
        for (; e2 < Ge.length; e2 += 1)
          Ge[e2].d(1);
        Ge.length = Fe.length;
      }
      if (8 & n3) {
        let e2;
        for (Je = t3[3].categories, e2 = 0; e2 < Je.length; e2 += 1) {
          const a3 = m(t3, Je, e2);
          Ne[e2] ? Ne[e2].p(a3, n3) : (Ne[e2] = k(a3), Ne[e2].c(), Ne[e2].m(_e, null));
        }
        for (; e2 < Ne.length; e2 += 1)
          Ne[e2].d(1);
        Ne.length = Je.length;
      }
      if (8 & n3) {
        let e2;
        for (Qe = t3[3].versions, e2 = 0; e2 < Qe.length; e2 += 1) {
          const a3 = i(t3, Qe, e2);
          Ue[e2] ? Ue[e2].p(a3, n3) : (Ue[e2] = $(a3), Ue[e2].c(), Ue[e2].m(Ce, null));
        }
        for (; e2 < Ue.length; e2 += 1)
          Ue[e2].d(1);
        Ue.length = Qe.length;
      }
    }, i(t3) {
      Ee || (main.i.transition_in(Q.$$.fragment, t3), main.i.transition_in(Ae.$$.fragment, t3), main.i.transition_in(Se.$$.fragment, t3), Ee = true);
    }, o(t3) {
      main.i.transition_out(Q.$$.fragment, t3), main.i.transition_out(Ae.$$.fragment, t3), main.i.transition_out(Se.$$.fragment, t3), Ee = false;
    }, d(t3) {
      t3 && main.i.detach(n2), Ke.d(), main.i.destroy_component(Q), main.i.destroy_each(Pe, t3), main.i.destroy_each(De, t3), main.i.destroy_each(Re, t3), main.i.destroy_each(Ge, t3), main.i.destroy_each(Ne, t3), main.i.destroy_each(Ue, t3), main.i.destroy_component(Ae), main.i.destroy_component(Se);
    }};
  }
  function W(n2, a2, l2) {
    let r2;
    main.i.component_subscribe(n2, main.u, (e2) => l2(2, r2 = e2));
    let {id: s2} = a2, {version: o2} = a2;
    return n2.$$set = (e2) => {
      "id" in e2 && l2(0, s2 = e2.id), "version" in e2 && l2(1, o2 = e2.version);
    }, [s2, o2, r2, {id: "world-edit", name: "WorldEdit", description: "WorldEdit is an in-game map editor for both creative and survival", readme: "", all_time: 42e4, recent: 690, updated: 20, homepage: "https://google.com", repository: "https://github.com", dependencies: [], categories: [], keywords: [], license: "MIT", authors: ["sk89q"], owners: ["sk89q"], versions: ["1.0.4", "1.0.0", "0.5.0", "0.1.0"], downloads: ["wasm32", "windows-x86", "osx-x86", "osx-m1"], keywords: [], categories: ["Admin Tools", "World Mangement"]}];
  }
  class z extends main.i.SvelteComponent {
    constructor(t2) {
      super(), main.i.init(this, t2, W, C, main.i.safe_not_equal, {id: 0, version: 1});
    }
  }
  require_main();
})();
