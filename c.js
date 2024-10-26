var cfa = cfa || {};
(cfa.version = 4),
  (cfa.create_url = function (t, e, r, n, c) {
    function i() {
      return Math.floor(2742745743359 * Math.random());
    }
    function a() {
      return o(i());
    }
    function o(t) {
      return (t + 78364164096).toString(36);
    }
    var m = i(),
      u = i(),
      l = 885187064159;
    (u = ((u = u - (u % 256) + cfa.version) + m) % 2742745743359),
      (l = (l + m) % 2742745743359);
    var s = "https://" + t + "/" + (m = a() + o(m)) + e,
      h = [(u = o(l) + o(u)) + "=" + r, a() + a() + "=" + n];
    return (
      void 0 !== c && c.length > 0 && h.push(a() + a() + "=" + c),
      s + "?" + h.join("&")
    );
  }),
  (cfa.beacon = function (t, e, r, n) {
    var c = "turn:aa.online-metrix.net?transport=",
      i = "1:" + e + ":" + r,
      a = {
        iceServers: [
          { urls: c + "tcp", username: i, credential: r },
          { urls: c + "udp", username: i, credential: r },
        ],
      };
    try {
      var o = new RTCPeerConnection(a);
      o.createDataChannel(Math.random().toString());
      var m = function () {},
        u = function (t) {
          o.setLocalDescription(t, m, m);
        };
      "undefined" == typeof Promise || o.createOffer.length > 0
        ? o.createOffer(u, m)
        : o.createOffer().then(u, m),
        setInterval(function () {
          o.close();
        }, 1e4);
    } catch (t) {}
  }),
  (cfa.load_tags = function (t, e, r, n) {
    cfa.beacon(t, e, r, n);
    var c = document.getElementsByTagName("head").item(0),
      i = document.createElement("script");
    (i.id = "tmx_tags_js"), i.setAttribute("type", "text/javascript");
    var a = cfa.create_url(t, ".js", e, r, n);
    i.setAttribute("src", a), cfa.set_csp_nonce(i), c.appendChild(i);
  }),
  (cfa.csp_nonce = null),
  (cfa.register_csp_nonce = function (t) {
    if (void 0 !== t.currentScript && null !== t.currentScript) {
      var e = t.currentScript.getAttribute("nonce");
      null != e && "" !== e
        ? (cfa.csp_nonce = e)
        : void 0 !== t.currentScript.nonce &&
          null !== t.currentScript.nonce &&
          "" !== t.currentScript.nonce &&
          (cfa.csp_nonce = t.currentScript.nonce);
    }
  }),
  (cfa.set_csp_nonce = function (t) {
    null !== cfa.csp_nonce &&
      (t.setAttribute("nonce", cfa.csp_nonce),
      t.getAttribute("nonce") !== cfa.csp_nonce && (t.nonce = cfa.csp_nonce));
  }),
  (cfa.cleanup = function () {
    for (; null !== (hp_frame = document.getElementById("tdz_ifrm")); )
      hp_frame.parentElement.removeChild(hp_frame);
    for (; null !== (tmx_frame = document.getElementById("tmx_tags_iframe")); )
      tmx_frame.parentElement.removeChild(tmx_frame);
    for (; null !== (tmx_script = document.getElementById("tmx_tags_js")); )
      tmx_script.parentElement.removeChild(tmx_script);
  }),
  (cfa.dvp = function (t, e, r, n) {
    void 0 !== t &&
      void 0 !== e &&
      void 0 !== r &&
      8 === e.length &&
      (cfa.cleanup(),
      cfa.register_csp_nonce(document),
      cfa.load_tags(t, e, r, n));
  });
